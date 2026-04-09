// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  build_assemblies (23 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const build_assemblies = pgTable('build_assemblies', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  item_inventory_assembly_ref_list_id: varchar('item_inventory_assembly_ref_list_id', { length: 36 }),
  item_inventory_assembly_ref_full_name: varchar('item_inventory_assembly_ref_full_name', { length: 209 }),
  inventory_site_ref_list_id: varchar('inventory_site_ref_list_id', { length: 36 }),
  inventory_site_ref_full_name: varchar('inventory_site_ref_full_name', { length: 209 }),
  inventory_site_location_ref_list_id: varchar('inventory_site_location_ref_list_id', { length: 36 }),
  inventory_site_location_ref_full_name: varchar('inventory_site_location_ref_full_name', { length: 209 }),
  serial_number: varchar('serial_number', { length: 4095 }),
  lot_number: varchar('lot_number', { length: 40 }),
  expiration_date_for_serial_lot_number: varchar('expiration_date_for_serial_lot_number', { length: 1099 }),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 11 }),
  memo: varchar('memo', { length: 4095 }),
  is_pending: boolean('is_pending'),
  quantity_to_build: numeric('quantity_to_build', { precision: 12, scale: 5 }),
  quantity_can_build: numeric('quantity_can_build', { precision: 12, scale: 5 }),
  quantity_on_hand: numeric('quantity_on_hand', { precision: 12, scale: 5 }),
  quantity_on_sales_order: numeric('quantity_on_sales_order', { precision: 12, scale: 5 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type BuildAssemblies = typeof build_assemblies.$inferSelect;
export type NewBuildAssemblies = typeof build_assemblies.$inferInsert;
