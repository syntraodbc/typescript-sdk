// Introspection core: connects to a live Syntra ODBC instance and reads
// information_schema to produce a canonical schema JSON document. Reused
// by the CLI and the monorepo's bootstrap script.

import postgres from 'postgres';
import { createHash } from 'node:crypto';

export interface IntrospectOptions {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  connectTimeoutSeconds?: number;
}

export interface ColumnInfo {
  name: string;
  dataType: string;
  udtName: string | null;
  charMaxLength: number | null;
  numericPrecision: number | null;
  numericScale: number | null;
  nullable: boolean;
  ordinal: number;
}

export interface TableInfo {
  schema: string;
  name: string;
  columns: ColumnInfo[];
}

export interface SchemaDocument {
  $schema: string;
  generatedAt: string;
  syntraVersion: string;
  source: {
    host: string;
    port: number;
    database: string;
  };
  tableCount: number;
  columnCount: number;
  tables: TableInfo[];
  sha256: string;
}

/**
 * Connect to a live Syntra ODBC instance and introspect `information_schema`,
 * returning a canonical schema document. Throws on connection failure.
 */
export async function introspect(opts: IntrospectOptions): Promise<SchemaDocument> {
  const sql = postgres({
    host: opts.host,
    port: opts.port,
    database: opts.database,
    username: opts.user,
    password: opts.password,
    connect_timeout: opts.connectTimeoutSeconds ?? 15,
    idle_timeout: 5,
    max: 1,
    ssl: false,
    prepare: false,
    fetch_types: false,
  });

  try {
    const rows = await sql<
      Array<{
        table_schema: string;
        table_name: string;
        column_name: string;
        data_type: string;
        udt_name: string | null;
        character_maximum_length: number | null;
        numeric_precision: number | null;
        numeric_scale: number | null;
        is_nullable: string;
        ordinal_position: number;
      }>
    >`
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

    const tableMap = new Map<string, TableInfo>();
    for (const r of rows) {
      const key = `${r.table_schema}.${r.table_name}`;
      let table = tableMap.get(key);
      if (!table) {
        table = {
          schema: r.table_schema,
          name: r.table_name,
          columns: [],
        };
        tableMap.set(key, table);
      }
      table.columns.push({
        name: r.column_name,
        dataType: r.data_type,
        udtName: r.udt_name ?? null,
        charMaxLength: r.character_maximum_length ?? null,
        numericPrecision: r.numeric_precision ?? null,
        numericScale: r.numeric_scale ?? null,
        nullable: r.is_nullable === 'YES',
        ordinal: r.ordinal_position,
      });
    }

    const tables = [...tableMap.values()].sort((a, b) => a.name.localeCompare(b.name));

    let syntraVersion = 'unknown';
    try {
      const v = await sql<Array<{ v: string }>>`SELECT version() AS v`;
      syntraVersion = v[0]?.v ?? 'unknown';
    } catch {
      // version() may not be implemented, ignore
    }

    const document: Omit<SchemaDocument, 'sha256'> = {
      $schema: 'https://syntraodbc.com/schemas/quickbooks-schema-v1.json',
      generatedAt: new Date().toISOString(),
      syntraVersion,
      source: {
        host: opts.host,
        port: opts.port,
        database: opts.database,
      },
      tableCount: tables.length,
      columnCount: rows.length,
      tables,
    };

    const sha256 = createHash('sha256')
      .update(JSON.stringify(document, null, 2))
      .digest('hex');

    return { ...document, sha256 };
  } finally {
    await sql.end({ timeout: 2 });
  }
}
