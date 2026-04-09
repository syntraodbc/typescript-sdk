// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_tax_codes (12 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const sales_tax_codes = pgTable('sales_tax_codes', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 3 }),
  is_active: boolean('is_active'),
  is_taxable: boolean('is_taxable'),
  desc: varchar('desc', { length: 31 }),
  item_purchase_tax_ref_list_id: varchar('item_purchase_tax_ref_list_id', { length: 36 }),
  item_purchase_tax_ref_full_name: varchar('item_purchase_tax_ref_full_name', { length: 209 }),
  item_sales_tax_ref_list_id: varchar('item_sales_tax_ref_list_id', { length: 36 }),
  item_sales_tax_ref_full_name: varchar('item_sales_tax_ref_full_name', { length: 209 }),
});

export type SalesTaxCodes = typeof sales_tax_codes.$inferSelect;
export type NewSalesTaxCodes = typeof sales_tax_codes.$inferInsert;
