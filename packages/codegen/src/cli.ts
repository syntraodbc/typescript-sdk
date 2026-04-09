#!/usr/bin/env node
// syntra-codegen: CLI that introspects a live Syntra ODBC instance and
// writes a canonical quickbooks-schema.json. Future releases will also
// emit Drizzle source files for custom fields once Syntra exposes them.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { introspect } from './introspect.js';

interface CliArgs {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  out: string;
  format: 'json' | 'drizzle';
  help: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    host: process.env.SYNTRA_HOST ?? '127.0.0.1',
    port: Number(process.env.SYNTRA_PORT ?? 5433),
    database: process.env.SYNTRA_DATABASE ?? 'quickbooks',
    user: process.env.SYNTRA_USER ?? 'qbconnect',
    password: process.env.SYNTRA_PASSWORD ?? '',
    out: './syntra-schema.json',
    format: 'json',
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = (): string => {
      const v = argv[++i];
      if (v === undefined) throw new Error(`Missing value for ${a}`);
      return v;
    };
    switch (a) {
      case '-h':
      case '--help':
        args.help = true;
        break;
      case '--host':
        args.host = next();
        break;
      case '--port':
        args.port = Number(next());
        break;
      case '--database':
      case '--db':
        args.database = next();
        break;
      case '--user':
      case '-u':
        args.user = next();
        break;
      case '--password':
      case '-p':
        args.password = next();
        break;
      case '--out':
      case '-o':
        args.out = next();
        break;
      case '--format':
      case '-f': {
        const v = next();
        if (v !== 'json' && v !== 'drizzle') {
          throw new Error(`--format must be "json" or "drizzle", got "${v}"`);
        }
        args.format = v;
        break;
      }
      default:
        if (a && a.startsWith('-')) {
          throw new Error(`Unknown flag: ${a}`);
        }
    }
  }

  return args;
}

function printHelp(): void {
  process.stdout.write(`syntra-codegen - Generate types from a live Syntra ODBC instance

USAGE
  npx @syntraodbc/codegen [options]

OPTIONS
  --host <host>        Syntra host              [env: SYNTRA_HOST,     default: 127.0.0.1]
  --port <port>        Syntra port              [env: SYNTRA_PORT,     default: 5433]
  --database <name>    Database name            [env: SYNTRA_DATABASE, default: quickbooks]
  --user <user>        Username                 [env: SYNTRA_USER,     default: qbconnect]
  --password <pw>      Password                 [env: SYNTRA_PASSWORD]
  --out <path>         Output file path         [default: ./syntra-schema.json]
  --format <fmt>       Output format            [json|drizzle, default: json]
  -h, --help           Show this help

EXAMPLES
  # Introspect local Syntra and write schema JSON
  npx @syntraodbc/codegen --password \\$SYNTRA_PASSWORD --out ./schema.json

  # Full flag form
  npx @syntraodbc/codegen \\
    --host localhost --port 5433 \\
    --user qbconnect --password \\$SYNTRA_PASSWORD \\
    --database quickbooks \\
    --out ./src/generated/schema.json

LEARN MORE
  Landing page:  https://syntraodbc.com/developers
  Repository:    https://github.com/syntraodbc/typescript-sdk
`);
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    return;
  }

  if (!args.password) {
    process.stderr.write(
      '[syntra-codegen] Error: password is required. Pass --password or set SYNTRA_PASSWORD.\n',
    );
    process.exitCode = 2;
    return;
  }

  process.stdout.write(
    `[syntra-codegen] connecting to ${args.host}:${args.port}/${args.database} as ${args.user}\n`,
  );

  const schema = await introspect({
    host: args.host,
    port: args.port,
    database: args.database,
    user: args.user,
    password: args.password,
  });

  process.stdout.write(
    `[syntra-codegen] introspected ${schema.tableCount} tables / ${schema.columnCount} columns\n`,
  );

  if (args.format === 'drizzle') {
    process.stderr.write(
      '[syntra-codegen] --format=drizzle is not yet implemented. ' +
        'For now, install @syntraodbc/drizzle-schema which ships pre-built Drizzle types ' +
        'for the stock QuickBooks schema.\n',
    );
    process.exitCode = 3;
    return;
  }

  const outPath = resolve(args.out);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(schema, null, 2) + '\n', 'utf8');

  process.stdout.write(`[syntra-codegen] wrote ${outPath}\n`);
  process.stdout.write(`[syntra-codegen] sha256=${schema.sha256}\n`);
}

main().catch((err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  process.stderr.write(`[syntra-codegen] error: ${msg}\n`);
  process.exitCode = 1;
});
