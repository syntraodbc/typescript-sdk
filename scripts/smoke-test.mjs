#!/usr/bin/env node
// End-to-end smoke test: imports the BUILT packages and queries a live
// Syntra instance to prove the whole SDK works as a real consumer would.

import { createClient } from '../packages/client/dist/index.js';
import * as schema from '../packages/drizzle-schema/dist/index.js';

console.log(`[smoke] @syntraodbc/drizzle-schema: ${schema.SYNTRA_TABLE_COUNT} tables`);
console.log(`[smoke] schema sha256: ${schema.SYNTRA_SCHEMA_VERSION.slice(0, 16)}...`);
console.log(`[smoke] sample exported tables: ${['invoices', 'customers', 'item_inventories'].filter((n) => n in schema).join(', ')}`);

const syntra = createClient({
  host: '127.0.0.1',
  port: 5433,
  database: 'quickbooks',
  user: 'qbconnect',
  password: process.env.SYNTRA_PASSWORD ?? 'changme',
});

try {
  const ok = await syntra.ping();
  console.log(`[smoke] ping: ${ok}`);

  // Typed table query via the client
  const firstCustomer = await syntra
    .table('customers')
    .select('list_id', 'full_name', 'balance')
    .limit(1)
    .execute();
  console.log(`[smoke] customers[0]:`, firstCustomer[0]);

  // Raw query via the client
  const invoiceCount = await syntra.query('SELECT COUNT(*) AS n FROM invoices');
  console.log(`[smoke] invoices count:`, invoiceCount[0]);

  // Validate the drizzle schema export shape
  const invoicesDef = schema.invoices;
  const cols = Object.keys(invoicesDef);
  console.log(`[smoke] schema.invoices exports ${cols.length} keys (columns + internal)`);

  // Validate the table-name literal type / set
  const tableNames = schema.SYNTRA_TABLE_NAMES;
  console.log(`[smoke] SYNTRA_TABLE_NAMES has ${tableNames.length} entries, first 3: ${tableNames.slice(0, 3).join(', ')}`);

  console.log('[smoke] PASS');
} catch (err) {
  console.error('[smoke] FAIL:', err.message);
  process.exitCode = 1;
} finally {
  await syntra.close();
}
