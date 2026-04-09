// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  discount_lines (6 columns)

import { pgTable, boolean, numeric, varchar } from 'drizzle-orm/pg-core';

export const discount_lines = pgTable('discount_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  rate_percent: numeric('rate_percent', { precision: 12, scale: 4 }),
  is_taxable: boolean('is_taxable'),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
});

export type DiscountLines = typeof discount_lines.$inferSelect;
export type NewDiscountLines = typeof discount_lines.$inferInsert;
