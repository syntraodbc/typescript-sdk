// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_fixed_assets (30 columns)

import { pgTable, boolean, date, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_fixed_assets = pgTable('item_fixed_assets', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  bar_code_value: varchar('bar_code_value', { length: 50 }),
  is_active: boolean('is_active'),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  purchase_desc: varchar('purchase_desc', { length: 50 }),
  purchase_date: date('purchase_date'),
  purchase_cost: numeric('purchase_cost', { precision: 12, scale: 2 }),
  vendor_or_payee_name: varchar('vendor_or_payee_name', { length: 50 }),
  asset_account_ref_list_id: varchar('asset_account_ref_list_id', { length: 36 }),
  asset_account_ref_full_name: varchar('asset_account_ref_full_name', { length: 209 }),
  fixed_asset_sales_info_sales_desc: varchar('fixed_asset_sales_info_sales_desc', { length: 50 }),
  fixed_asset_sales_info_sales_date: date('fixed_asset_sales_info_sales_date'),
  fixed_asset_sales_info_sales_price: numeric('fixed_asset_sales_info_sales_price', { precision: 12, scale: 2 }),
  fixed_asset_sales_info_sales_expense: numeric('fixed_asset_sales_info_sales_expense', { precision: 12, scale: 2 }),
  asset_desc: varchar('asset_desc', { length: 50 }),
  location: varchar('location', { length: 50 }),
  po_number: varchar('po_number', { length: 30 }),
  serial_number: varchar('serial_number', { length: 30 }),
  warranty_exp_date: date('warranty_exp_date'),
  notes: varchar('notes', { length: 4095 }),
  asset_number: varchar('asset_number', { length: 10 }),
  cost_basis: numeric('cost_basis', { precision: 12, scale: 2 }),
  year_end_accumulated_depreciation: numeric('year_end_accumulated_depreciation', { precision: 12, scale: 2 }),
  year_end_book_value: numeric('year_end_book_value', { precision: 12, scale: 2 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemFixedAssets = typeof item_fixed_assets.$inferSelect;
export type NewItemFixedAssets = typeof item_fixed_assets.$inferInsert;
