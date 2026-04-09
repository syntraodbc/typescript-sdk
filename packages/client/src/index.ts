// @syntraodbc/client
//
// A zero-config typed TypeScript client for Syntra ODBC. Thin strongly-typed
// wrapper around `postgres.js` with autocomplete on every QuickBooks Desktop
// table name, column name, and return row. The types are derived from
// @syntraodbc/drizzle-schema, which is kept in lockstep with the Syntra
// driver's stock QuickBooks schema.
//
// Usage:
//
//   import { createClient } from '@syntraodbc/client';
//
//   const syntra = createClient({ password: process.env.SYNTRA_PASSWORD });
//   const rows = await syntra.table('invoices').select('ref_number', 'balance_remaining');
//
// See https://syntraodbc.com/developers for the full guide.

import postgres from 'postgres';
import {
  SYNTRA_TABLE_NAMES,
  SYNTRA_SCHEMA_VERSION,
  SYNTRA_SCHEMA_GENERATED_AT,
  type SyntraTableName,
} from '@syntraodbc/drizzle-schema';

export {
  SYNTRA_SCHEMA_VERSION,
  SYNTRA_SCHEMA_GENERATED_AT,
  SYNTRA_TABLE_NAMES,
  type SyntraTableName,
};

/**
 * Options accepted by {@link createClient}.
 *
 * All fields are optional and default to the values documented for a local
 * Syntra ODBC install: `127.0.0.1:5433` / `quickbooks` / `qbconnect`.
 */
export interface SyntraClientOptions {
  /** Host where Syntra ODBC is listening. Defaults to `127.0.0.1`. */
  host?: string;
  /** Port where Syntra ODBC is listening. Defaults to `5433`. */
  port?: number;
  /** Database name. Defaults to `quickbooks`. */
  database?: string;
  /** Username. Defaults to `qbconnect`. */
  user?: string;
  /**
   * Password. No default. Syntra installs require a password to be set in
   * config.toml; pass it here or in the `SYNTRA_PASSWORD` environment
   * variable and read it yourself.
   */
  password?: string;
  /** Connection timeout in seconds. Defaults to `15`. */
  connectTimeoutSeconds?: number;
  /** Whether to enable TLS. Defaults to `false` for localhost connections. */
  ssl?: boolean;
}

/**
 * A table query builder returned by {@link SyntraClient.table}.
 *
 * Exposes a small fluent surface for ergonomic read queries. For complex
 * queries (joins, aggregates, subqueries) use Drizzle ORM with the
 * `@syntraodbc/drizzle-schema` package instead.
 */
export interface SyntraTableQuery<Row = Record<string, unknown>> {
  /**
   * Select a subset of columns. Returns rows with only those keys.
   * Omit this call to `SELECT *`.
   */
  select<K extends keyof Row>(...columns: K[]): SyntraTableQuery<Pick<Row, K>>;
  /**
   * Apply a WHERE filter built from equality predicates.
   * Multiple fields are combined with AND.
   */
  where(filter: Partial<Row>): SyntraTableQuery<Row>;
  /** Limit the number of rows returned. */
  limit(n: number): SyntraTableQuery<Row>;
  /** Execute the query and return rows. */
  execute(): Promise<Row[]>;
  /**
   * Execute and return a single row (or null). Throws if the query would
   * return more than one row.
   */
  one(): Promise<Row | null>;
}

/**
 * A typed Syntra ODBC client.
 *
 * Obtained from {@link createClient}. The client is backed by a
 * `postgres.js` connection pool and must be closed with {@link close}
 * when the caller is done with it (otherwise the process will hang).
 */
export interface SyntraClient {
  /**
   * Start building a query against a stock QuickBooks table. The
   * `name` argument autocompletes to every known Syntra table.
   */
  table<Name extends SyntraTableName>(
    name: Name,
  ): SyntraTableQuery<Record<string, unknown>>;
  /**
   * Run a raw SQL query against Syntra. Prefer {@link table} or the full
   * Drizzle ORM integration for type safety.
   */
  query<Row = Record<string, unknown>>(
    sql: string,
    params?: unknown[],
  ): Promise<Row[]>;
  /**
   * Simple connectivity probe. Resolves to `true` if Syntra responds to a
   * `SELECT 1`.
   */
  ping(): Promise<boolean>;
  /** Close the underlying connection pool. */
  close(): Promise<void>;
  /** The underlying `postgres.js` client, for escape hatches. */
  readonly raw: ReturnType<typeof postgres>;
}

const TABLE_NAME_SET: ReadonlySet<string> = new Set(SYNTRA_TABLE_NAMES);

function assertKnownTable(name: string): asserts name is SyntraTableName {
  if (!TABLE_NAME_SET.has(name)) {
    throw new Error(
      `[syntraodbc] Unknown table "${name}". Not present in the stock schema. ` +
        `Use @syntraodbc/codegen to generate types for custom tables or custom fields.`,
    );
  }
}

function quoteIdent(name: string): string {
  // Identifier safety: table/column names come from the typed schema
  // literal union, so they are known safe. This is a belt-and-braces quote.
  return `"${name.replace(/"/g, '""')}"`;
}

/**
 * Create a new typed Syntra ODBC client. See {@link SyntraClientOptions}.
 */
export function createClient(options: SyntraClientOptions = {}): SyntraClient {
  const sql = postgres({
    host: options.host ?? '127.0.0.1',
    port: options.port ?? 5433,
    database: options.database ?? 'quickbooks',
    username: options.user ?? 'qbconnect',
    password: options.password ?? '',
    connect_timeout: options.connectTimeoutSeconds ?? 15,
    ssl: options.ssl ?? false,
    prepare: false,
    fetch_types: false,
    max: 4,
  });

  const client: SyntraClient = {
    table(name) {
      assertKnownTable(name);
      return makeQuery(sql, name);
    },
    async query<Row = Record<string, unknown>>(
      sqlText: string,
      params: unknown[] = [],
    ): Promise<Row[]> {
      const rows = await sql.unsafe(sqlText, params as never[]);
      return rows as unknown as Row[];
    },
    async ping(): Promise<boolean> {
      try {
        const rows = await sql`SELECT 1 AS ok`;
        return rows[0]?.ok === 1 || rows[0]?.ok === '1';
      } catch {
        return false;
      }
    },
    async close(): Promise<void> {
      await sql.end({ timeout: 5 });
    },
    raw: sql,
  };

  return client;
}

function makeQuery<Row extends Record<string, unknown>>(
  sql: ReturnType<typeof postgres>,
  tableName: SyntraTableName,
): SyntraTableQuery<Row> {
  const state: {
    columns: string[] | null;
    filter: Record<string, unknown>;
    limit: number | null;
  } = {
    columns: null,
    filter: {},
    limit: null,
  };

  const q: SyntraTableQuery<Row> = {
    select<K extends keyof Row>(...columns: K[]): SyntraTableQuery<Pick<Row, K>> {
      state.columns = columns.map((c) => String(c));
      return q as unknown as SyntraTableQuery<Pick<Row, K>>;
    },
    where(filter) {
      state.filter = { ...state.filter, ...filter };
      return q;
    },
    limit(n) {
      state.limit = n;
      return q;
    },
    async execute() {
      const colsSql =
        state.columns && state.columns.length > 0
          ? state.columns.map(quoteIdent).join(', ')
          : '*';
      const whereEntries = Object.entries(state.filter);
      const whereSql =
        whereEntries.length > 0
          ? ' WHERE ' +
            whereEntries
              .map(([k], i) => `${quoteIdent(k)} = $${i + 1}`)
              .join(' AND ')
          : '';
      const limitSql = state.limit != null ? ` LIMIT ${state.limit | 0}` : '';
      const sqlText = `SELECT ${colsSql} FROM ${quoteIdent(tableName)}${whereSql}${limitSql}`;
      const params = whereEntries.map(([, v]) => v);
      const rows = await sql.unsafe(sqlText, params as never[]);
      return rows as unknown as Row[];
    },
    async one() {
      const limited = await q.limit(2).execute();
      if (limited.length > 1) {
        throw new Error(
          `[syntraodbc] .one() returned ${limited.length} rows on ${tableName}`,
        );
      }
      return limited[0] ?? null;
    },
  };

  return q;
}
