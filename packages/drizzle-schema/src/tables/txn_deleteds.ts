// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  txn_deleteds (5 columns)

import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const txn_deleteds = pgTable('txn_deleteds', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_del_type: text('txn_del_type'),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_deleted: timestamp('time_deleted', { withTimezone: false, mode: 'string' }),
  ref_number: text('ref_number'),
});

export type TxnDeleteds = typeof txn_deleteds.$inferSelect;
export type NewTxnDeleteds = typeof txn_deleteds.$inferInsert;
