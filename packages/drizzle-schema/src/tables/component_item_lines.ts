// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  component_item_lines (13 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const component_item_lines = pgTable('component_item_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  item_ref_list_id: varchar('item_ref_list_id', { length: 36 }),
  item_ref_full_name: varchar('item_ref_full_name', { length: 209 }),
  inventory_site_ref_list_id: varchar('inventory_site_ref_list_id', { length: 36 }),
  inventory_site_ref_full_name: varchar('inventory_site_ref_full_name', { length: 209 }),
  inventory_site_location_ref_list_id: varchar('inventory_site_location_ref_list_id', { length: 36 }),
  inventory_site_location_ref_full_name: varchar('inventory_site_location_ref_full_name', { length: 209 }),
  serial_number: varchar('serial_number', { length: 4095 }),
  lot_number: varchar('lot_number', { length: 40 }),
  expiration_date_for_serial_lot_number: varchar('expiration_date_for_serial_lot_number', { length: 1099 }),
  desc: varchar('desc', { length: 4095 }),
  quantity_on_hand: numeric('quantity_on_hand', { precision: 12, scale: 5 }),
  quantity_needed: numeric('quantity_needed', { precision: 12, scale: 5 }),
});

export type ComponentItemLines = typeof component_item_lines.$inferSelect;
export type NewComponentItemLines = typeof component_item_lines.$inferInsert;
