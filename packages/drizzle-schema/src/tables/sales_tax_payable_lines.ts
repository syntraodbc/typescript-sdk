// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_tax_payable_lines (4 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const sales_tax_payable_lines = pgTable('sales_tax_payable_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  item_sales_tax_ref_list_id: varchar('item_sales_tax_ref_list_id', { length: 36 }),
  item_sales_tax_ref_full_name: varchar('item_sales_tax_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
});

export type SalesTaxPayableLines = typeof sales_tax_payable_lines.$inferSelect;
export type NewSalesTaxPayableLines = typeof sales_tax_payable_lines.$inferInsert;
