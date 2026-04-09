// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_tax_lines (5 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const sales_tax_lines = pgTable('sales_tax_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  rate_percent: numeric('rate_percent', { precision: 12, scale: 4 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
});

export type SalesTaxLines = typeof sales_tax_lines.$inferSelect;
export type NewSalesTaxLines = typeof sales_tax_lines.$inferInsert;
