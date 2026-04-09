#!/usr/bin/env node
// Reads schemas/quickbooks.json and emits typed Drizzle table definitions
// into packages/drizzle-schema/src/tables/*.ts, plus an index.ts barrel.
//
// This is the build step for @syntraodbc/drizzle-schema. It is idempotent
// and should be re-run whenever schemas/quickbooks.json changes.

import { mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SCHEMA_PATH = resolve(ROOT, 'schemas', 'quickbooks.json');
const OUT_DIR = resolve(ROOT, 'packages', 'drizzle-schema', 'src');
const TABLES_DIR = resolve(OUT_DIR, 'tables');

const schema = JSON.parse(readFileSync(SCHEMA_PATH, 'utf8'));
console.log(`[emit] loaded schema: ${schema.tableCount} tables, ${schema.columnCount} columns`);

/**
 * Convert a Syntra information_schema data type to a Drizzle pg-core column.
 * Returns { call, importName } where call is the Drizzle function call (e.g.
 * `varchar('name', { length: 36 })`) and importName is the Drizzle helper
 * that needs to be imported (e.g. `varchar`).
 */
function mapColumn(col) {
  const name = col.name;
  const dt = col.dataType;

  // boolean
  if (dt === 'boolean') {
    return { call: `boolean(${q(name)})`, importName: 'boolean' };
  }

  // integer
  if (dt === 'integer') {
    return { call: `integer(${q(name)})`, importName: 'integer' };
  }

  // date
  if (dt === 'date') {
    return { call: `date(${q(name)})`, importName: 'date' };
  }

  // timestamp without time zone
  if (dt === 'timestamp without time zone' || dt === 'timestamp') {
    return {
      call: `timestamp(${q(name)}, { withTimezone: false, mode: 'string' })`,
      importName: 'timestamp',
    };
  }

  // character varying (varchar with optional length)
  if (dt === 'character varying' || dt === 'varchar' || dt.startsWith('character varying')) {
    if (col.charMaxLength && col.charMaxLength > 0) {
      return {
        call: `varchar(${q(name)}, { length: ${col.charMaxLength} })`,
        importName: 'varchar',
      };
    }
    return { call: `text(${q(name)})`, importName: 'text' };
  }

  // numeric with precision/scale (e.g. "numeric(12,2)")
  const numMatch = dt.match(/^numeric\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  if (numMatch) {
    const precision = Number(numMatch[1]);
    const scale = Number(numMatch[2]);
    return {
      call: `numeric(${q(name)}, { precision: ${precision}, scale: ${scale} })`,
      importName: 'numeric',
    };
  }
  if (dt === 'numeric') {
    return { call: `numeric(${q(name)})`, importName: 'numeric' };
  }

  // text fallback for anything unrecognized. Logged so we notice.
  console.warn(`[emit] unknown data type "${dt}" on ${col.name}, falling back to text()`);
  return { call: `text(${q(name)})`, importName: 'text' };
}

function q(s) {
  return `'${s.replace(/'/g, "\\'")}'`;
}

function toPascalCase(snake) {
  return snake.replace(/(^|_)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
}

/**
 * Generate a single table file.
 */
function emitTableFile(table) {
  const imports = new Set();
  const lines = [];

  for (const col of table.columns) {
    const m = mapColumn(col);
    imports.add(m.importName);
    // snake_case is a valid JS identifier, so no quoting needed on the property.
    lines.push(`  ${col.name}: ${m.call},`);
  }

  const importList = [...imports].sort().join(', ');
  const pascalName = toPascalCase(table.name);

  return `// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  ${table.name} (${table.columns.length} columns)

import { pgTable, ${importList} } from 'drizzle-orm/pg-core';

export const ${table.name} = pgTable(${q(table.name)}, {
${lines.join('\n')}
});

export type ${pascalName} = typeof ${table.name}.$inferSelect;
export type New${pascalName} = typeof ${table.name}.$inferInsert;
`;
}

/**
 * Generate the index barrel file.
 */
function emitIndexFile(tables) {
  const exports = tables
    .map((t) => `export * from './tables/${t.name}.js';`)
    .join('\n');

  return `// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// The @syntraodbc/drizzle-schema package exports a typed Drizzle ORM schema
// for every QuickBooks Desktop table exposed by Syntra ODBC.
//
//   import * as schema from '@syntraodbc/drizzle-schema';
//   const db = drizzle(postgres(url), { schema });
//
// See https://syntraodbc.com/developers for the full guide.

${exports}

/**
 * Version of the upstream QuickBooks schema this build was generated from.
 */
export const SYNTRA_SCHEMA_VERSION = ${q(schema.sha256 ?? 'unknown')};

/**
 * When the schema was introspected from the live Syntra ODBC instance.
 */
export const SYNTRA_SCHEMA_GENERATED_AT = ${q(schema.generatedAt ?? 'unknown')};

/**
 * Total number of QuickBooks tables exposed by this build.
 */
export const SYNTRA_TABLE_COUNT = ${schema.tableCount};

/**
 * Total number of columns across all tables.
 */
export const SYNTRA_COLUMN_COUNT = ${schema.columnCount};

/**
 * The full list of stock QuickBooks table names exposed by Syntra ODBC.
 * Useful for building pick-lists, validators, or runtime reflection.
 */
export const SYNTRA_TABLE_NAMES = [
${tables.map((t) => `  ${q(t.name)},`).join('\n')}
] as const;

export type SyntraTableName = (typeof SYNTRA_TABLE_NAMES)[number];
`;
}

// Clean and recreate output directories
if (existsSync(TABLES_DIR)) {
  rmSync(TABLES_DIR, { recursive: true, force: true });
}
mkdirSync(TABLES_DIR, { recursive: true });

// Emit table files
for (const table of schema.tables) {
  const content = emitTableFile(table);
  const path = resolve(TABLES_DIR, `${table.name}.ts`);
  writeFileSync(path, content, 'utf8');
}
console.log(`[emit] wrote ${schema.tables.length} table files to ${TABLES_DIR}`);

// Emit index.ts
const indexContent = emitIndexFile(schema.tables);
writeFileSync(resolve(OUT_DIR, 'index.ts'), indexContent, 'utf8');
console.log(`[emit] wrote ${resolve(OUT_DIR, 'index.ts')}`);

console.log(`[emit] done`);
