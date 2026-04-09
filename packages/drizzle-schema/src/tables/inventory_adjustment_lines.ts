// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  inventory_adjustment_lines (11 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const inventory_adjustment_lines = pgTable('inventory_adjustment_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  item_ref_list_id: varchar('item_ref_list_id', { length: 36 }),
  item_ref_full_name: varchar('item_ref_full_name', { length: 209 }),
  serial_number: varchar('serial_number', { length: 4095 }),
  lot_number: varchar('lot_number', { length: 40 }),
  expiration_date_for_serial_lot_number: varchar('expiration_date_for_serial_lot_number', { length: 1099 }),
  inventory_site_location_ref_list_id: varchar('inventory_site_location_ref_list_id', { length: 36 }),
  inventory_site_location_ref_full_name: varchar('inventory_site_location_ref_full_name', { length: 209 }),
  quantity_difference: numeric('quantity_difference', { precision: 12, scale: 5 }),
  value_difference: numeric('value_difference', { precision: 12, scale: 2 }),
});

export type InventoryAdjustmentLines = typeof inventory_adjustment_lines.$inferSelect;
export type NewInventoryAdjustmentLines = typeof inventory_adjustment_lines.$inferInsert;
