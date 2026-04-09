// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_other_charges (34 columns)

import { pgTable, boolean, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_other_charges = pgTable('item_other_charges', {
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
  is_tax_included: boolean('is_tax_included'),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  sales_or_purchase_desc: varchar('sales_or_purchase_desc', { length: 4095 }),
  sales_or_purchase_price: numeric('sales_or_purchase_price', { precision: 12, scale: 2 }),
  sales_or_purchase_price_percent: numeric('sales_or_purchase_price_percent', { precision: 12, scale: 4 }),
  sales_or_purchase_account_ref_list_id: varchar('sales_or_purchase_account_ref_list_id', { length: 36 }),
  sales_or_purchase_account_ref_full_name: varchar('sales_or_purchase_account_ref_full_name', { length: 209 }),
  sales_and_purchase_sales_desc: varchar('sales_and_purchase_sales_desc', { length: 4095 }),
  sales_and_purchase_sales_price: numeric('sales_and_purchase_sales_price', { precision: 12, scale: 2 }),
  sales_and_purchase_income_account_ref_list_id: varchar('sales_and_purchase_income_account_ref_list_id', { length: 36 }),
  sales_and_purchase_income_account_ref_full_name: varchar('sales_and_purchase_income_account_ref_full_name', { length: 209 }),
  sales_and_purchase_purchase_desc: varchar('sales_and_purchase_purchase_desc', { length: 4095 }),
  sales_and_purchase_purchase_cost: numeric('sales_and_purchase_purchase_cost', { precision: 12, scale: 2 }),
  sales_and_purchase_purchase_tax_code_ref_list_id: varchar('sales_and_purchase_purchase_tax_code_ref_list_id', { length: 36 }),
  sales_and_purchase_purchase_tax_code_ref_full_name: varchar('sales_and_purchase_purchase_tax_code_ref_full_name', { length: 209 }),
  sales_and_purchase_expense_account_ref_list_id: varchar('sales_and_purchase_expense_account_ref_list_id', { length: 36 }),
  sales_and_purchase_expense_account_ref_full_name: varchar('sales_and_purchase_expense_account_ref_full_name', { length: 209 }),
  sales_and_purchase_pref_vendor_ref_list_id: varchar('sales_and_purchase_pref_vendor_ref_list_id', { length: 36 }),
  sales_and_purchase_pref_vendor_ref_full_name: varchar('sales_and_purchase_pref_vendor_ref_full_name', { length: 209 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemOtherCharges = typeof item_other_charges.$inferSelect;
export type NewItemOtherCharges = typeof item_other_charges.$inferInsert;
