// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_tax_payables (4 columns)

import { pgTable, numeric, text, varchar } from 'drizzle-orm/pg-core';

export const sales_tax_payables = pgTable('sales_tax_payables', {
  _row_id: text('_row_id'),
  payee_entity_ref_list_id: varchar('payee_entity_ref_list_id', { length: 36 }),
  payee_entity_ref_full_name: varchar('payee_entity_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
});

export type SalesTaxPayables = typeof sales_tax_payables.$inferSelect;
export type NewSalesTaxPayables = typeof sales_tax_payables.$inferInsert;
