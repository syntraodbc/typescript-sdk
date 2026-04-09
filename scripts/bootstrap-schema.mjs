#!/usr/bin/env node
// Bootstrap script: connect to a live Syntra ODBC instance, introspect
// information_schema, write schemas/quickbooks.json.
//
// This is the seed that feeds the whole SDK. It runs once at bootstrap and
// any time we want to refresh against the latest Syntra release. The real
// @syntraodbc/codegen package will reuse this same logic.

import postgres from 'postgres';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '..', 'schemas', 'quickbooks.json');

const CONFIG = {
  host: process.env.SYNTRA_HOST ?? '127.0.0.1',
  port: Number(process.env.SYNTRA_PORT ?? 5433),
  database: process.env.SYNTRA_DATABASE ?? 'quickbooks',
  username: process.env.SYNTRA_USER ?? 'qbconnect',
  password: process.env.SYNTRA_PASSWORD ?? 'changme',
};

console.log(`[bootstrap] connecting to ${CONFIG.host}:${CONFIG.port}/${CONFIG.database} as ${CONFIG.username}`);

const sql = postgres({
  host: CONFIG.host,
  port: CONFIG.port,
  database: CONFIG.database,
  username: CONFIG.username,
  password: CONFIG.password,
  connect_timeout: 15,
  idle_timeout: 5,
  max: 1,
  ssl: false,
  prepare: false,
  fetch_types: false,
});

try {
  // Probe basic connectivity
  const probe = await sql`SELECT 1 AS ok`;
  console.log(`[bootstrap] connected. probe=${JSON.stringify(probe[0])}`);

  // Introspect all columns across the public schema (Syntra exposes
  // QuickBooks tables under public).
  const rows = await sql`
    SELECT
      table_schema,
      table_name,
      column_name,
      data_type,
      udt_name,
      character_maximum_length,
      numeric_precision,
      numeric_scale,
      is_nullable,
      ordinal_position
    FROM information_schema.columns
    WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
    ORDER BY table_schema, table_name, ordinal_position
  `;

  console.log(`[bootstrap] introspected ${rows.length} columns`);

  // Group into tables
  const tableMap = new Map();
  for (const r of rows) {
    const key = `${r.table_schema}.${r.table_name}`;
    if (!tableMap.has(key)) {
      tableMap.set(key, {
        schema: r.table_schema,
        name: r.table_name,
        columns: [],
      });
    }
    tableMap.get(key).columns.push({
      name: r.column_name,
      dataType: r.data_type,
      udtName: r.udt_name,
      charMaxLength: r.character_maximum_length ?? null,
      numericPrecision: r.numeric_precision ?? null,
      numericScale: r.numeric_scale ?? null,
      nullable: r.is_nullable === 'YES',
      ordinal: r.ordinal_position,
    });
  }

  const tables = [...tableMap.values()].sort((a, b) => a.name.localeCompare(b.name));
  console.log(`[bootstrap] ${tables.length} tables`);

  // Get Syntra version if available
  let syntraVersion = 'unknown';
  try {
    const v = await sql`SELECT version() AS v`;
    syntraVersion = v[0]?.v ?? 'unknown';
  } catch {
    // ignore
  }

  const schemaJson = {
    $schema: 'https://syntraodbc.com/schemas/quickbooks-schema-v1.json',
    generatedAt: new Date().toISOString(),
    syntraVersion,
    source: {
      host: CONFIG.host,
      port: CONFIG.port,
      database: CONFIG.database,
    },
    tableCount: tables.length,
    columnCount: rows.length,
    tables,
  };

  const serialized = JSON.stringify(schemaJson, null, 2);
  const sha256 = createHash('sha256').update(serialized).digest('hex');
  schemaJson.sha256 = sha256;

  const finalSerialized = JSON.stringify(schemaJson, null, 2) + '\n';

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, finalSerialized, 'utf8');

  console.log(`[bootstrap] wrote ${OUT_PATH}`);
  console.log(`[bootstrap] sha256=${sha256}`);
  console.log(`[bootstrap] tables=${tables.length} columns=${rows.length} syntraVersion=${syntraVersion}`);
} catch (err) {
  console.error('[bootstrap] failed:', err.message);
  if (err.code) console.error('[bootstrap] code:', err.code);
  process.exitCode = 1;
} finally {
  await sql.end({ timeout: 2 });
}
