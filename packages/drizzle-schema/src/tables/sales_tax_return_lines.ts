// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_tax_return_lines (2 columns)

import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const sales_tax_return_lines = pgTable('sales_tax_return_lines', {
  list_id: varchar('list_id', { length: 36 }),
  full_name: text('full_name'),
});

export type SalesTaxReturnLines = typeof sales_tax_return_lines.$inferSelect;
export type NewSalesTaxReturnLines = typeof sales_tax_return_lines.$inferInsert;
