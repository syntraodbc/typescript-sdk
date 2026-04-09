// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_sales_taxes (16 columns)

import { pgTable, boolean, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_sales_taxes = pgTable('item_sales_taxes', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  bar_code_value: varchar('bar_code_value', { length: 50 }),
  is_active: boolean('is_active'),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  item_desc: varchar('item_desc', { length: 4095 }),
  tax_rate: numeric('tax_rate', { precision: 12, scale: 4 }),
  tax_vendor_ref_list_id: varchar('tax_vendor_ref_list_id', { length: 36 }),
  tax_vendor_ref_full_name: varchar('tax_vendor_ref_full_name', { length: 209 }),
  sales_tax_return_line_ref_list_id: varchar('sales_tax_return_line_ref_list_id', { length: 36 }),
  sales_tax_return_line_ref_full_name: varchar('sales_tax_return_line_ref_full_name', { length: 209 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemSalesTaxes = typeof item_sales_taxes.$inferSelect;
export type NewItemSalesTaxes = typeof item_sales_taxes.$inferInsert;
