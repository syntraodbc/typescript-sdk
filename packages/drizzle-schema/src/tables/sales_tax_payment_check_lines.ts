// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_tax_payment_check_lines (6 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const sales_tax_payment_check_lines = pgTable('sales_tax_payment_check_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  item_sales_tax_ref_list_id: varchar('item_sales_tax_ref_list_id', { length: 36 }),
  item_sales_tax_ref_full_name: varchar('item_sales_tax_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  tax_amount: numeric('tax_amount', { precision: 12, scale: 2 }),
});

export type SalesTaxPaymentCheckLines = typeof sales_tax_payment_check_lines.$inferSelect;
export type NewSalesTaxPaymentCheckLines = typeof sales_tax_payment_check_lines.$inferInsert;
