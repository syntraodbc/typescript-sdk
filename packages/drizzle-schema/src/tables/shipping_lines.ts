// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  shipping_lines (4 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const shipping_lines = pgTable('shipping_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
});

export type ShippingLines = typeof shipping_lines.$inferSelect;
export type NewShippingLines = typeof shipping_lines.$inferInsert;
