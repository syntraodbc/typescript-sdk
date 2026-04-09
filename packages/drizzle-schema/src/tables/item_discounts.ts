// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_discounts (21 columns)

import { pgTable, boolean, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_discounts = pgTable('item_discounts', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  full_name: varchar('full_name', { length: 159 }),
  bar_code_value: varchar('bar_code_value', { length: 50 }),
  is_active: boolean('is_active'),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  parent_ref_list_id: varchar('parent_ref_list_id', { length: 36 }),
  parent_ref_full_name: varchar('parent_ref_full_name', { length: 209 }),
  sublevel: integer('sublevel'),
  item_desc: varchar('item_desc', { length: 4095 }),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  discount_rate: numeric('discount_rate', { precision: 12, scale: 2 }),
  discount_rate_percent: numeric('discount_rate_percent', { precision: 12, scale: 4 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemDiscounts = typeof item_discounts.$inferSelect;
export type NewItemDiscounts = typeof item_discounts.$inferInsert;
