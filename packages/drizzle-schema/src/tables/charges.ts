// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  charges (31 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const charges = pgTable('charges', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 11 }),
  item_ref_list_id: varchar('item_ref_list_id', { length: 36 }),
  item_ref_full_name: varchar('item_ref_full_name', { length: 209 }),
  inventory_site_ref_list_id: varchar('inventory_site_ref_list_id', { length: 36 }),
  inventory_site_ref_full_name: varchar('inventory_site_ref_full_name', { length: 209 }),
  inventory_site_location_ref_list_id: varchar('inventory_site_location_ref_list_id', { length: 36 }),
  inventory_site_location_ref_full_name: varchar('inventory_site_location_ref_full_name', { length: 209 }),
  quantity: numeric('quantity', { precision: 12, scale: 5 }),
  unit_of_measure: varchar('unit_of_measure', { length: 31 }),
  override_uom_set_ref_list_id: varchar('override_uom_set_ref_list_id', { length: 36 }),
  override_uom_set_ref_full_name: varchar('override_uom_set_ref_full_name', { length: 209 }),
  rate: numeric('rate', { precision: 12, scale: 2 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  balance_remaining: numeric('balance_remaining', { precision: 12, scale: 2 }),
  desc: varchar('desc', { length: 4095 }),
  ar_account_ref_list_id: varchar('ar_account_ref_list_id', { length: 36 }),
  ar_account_ref_full_name: varchar('ar_account_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  billed_date: date('billed_date'),
  due_date: date('due_date'),
  is_paid: boolean('is_paid'),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type Charges = typeof charges.$inferSelect;
export type NewCharges = typeof charges.$inferInsert;
