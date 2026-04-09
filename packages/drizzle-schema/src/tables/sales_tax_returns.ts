// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_tax_returns (3 columns)

import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const sales_tax_returns = pgTable('sales_tax_returns', {
  list_id: varchar('list_id', { length: 36 }),
  full_name: text('full_name'),
  desc: text('desc'),
});

export type SalesTaxReturns = typeof sales_tax_returns.$inferSelect;
export type NewSalesTaxReturns = typeof sales_tax_returns.$inferInsert;
