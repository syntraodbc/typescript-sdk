// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_inventories (40 columns)

import { pgTable, boolean, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_inventories = pgTable('item_inventories', {
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
  manufacturer_part_number: varchar('manufacturer_part_number', { length: 31 }),
  unit_of_measure_set_ref_list_id: varchar('unit_of_measure_set_ref_list_id', { length: 36 }),
  unit_of_measure_set_ref_full_name: varchar('unit_of_measure_set_ref_full_name', { length: 209 }),
  is_tax_included: boolean('is_tax_included'),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  sales_desc: varchar('sales_desc', { length: 4095 }),
  sales_price: numeric('sales_price', { precision: 12, scale: 2 }),
  income_account_ref_list_id: varchar('income_account_ref_list_id', { length: 36 }),
  income_account_ref_full_name: varchar('income_account_ref_full_name', { length: 209 }),
  purchase_desc: varchar('purchase_desc', { length: 4095 }),
  purchase_cost: numeric('purchase_cost', { precision: 12, scale: 2 }),
  purchase_tax_code_ref_list_id: varchar('purchase_tax_code_ref_list_id', { length: 36 }),
  purchase_tax_code_ref_full_name: varchar('purchase_tax_code_ref_full_name', { length: 209 }),
  cogs_account_ref_list_id: varchar('cogs_account_ref_list_id', { length: 36 }),
  cogs_account_ref_full_name: varchar('cogs_account_ref_full_name', { length: 209 }),
  pref_vendor_ref_list_id: varchar('pref_vendor_ref_list_id', { length: 36 }),
  pref_vendor_ref_full_name: varchar('pref_vendor_ref_full_name', { length: 209 }),
  asset_account_ref_list_id: varchar('asset_account_ref_list_id', { length: 36 }),
  asset_account_ref_full_name: varchar('asset_account_ref_full_name', { length: 209 }),
  reorder_point: numeric('reorder_point', { precision: 12, scale: 5 }),
  max: numeric('max', { precision: 12, scale: 5 }),
  quantity_on_hand: numeric('quantity_on_hand', { precision: 12, scale: 5 }),
  average_cost: numeric('average_cost', { precision: 12, scale: 2 }),
  quantity_on_order: numeric('quantity_on_order', { precision: 12, scale: 5 }),
  quantity_on_sales_order: numeric('quantity_on_sales_order', { precision: 12, scale: 5 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemInventories = typeof item_inventories.$inferSelect;
export type NewItemInventories = typeof item_inventories.$inferInsert;
