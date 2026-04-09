// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  transfer_inventory_lines (12 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const transfer_inventory_lines = pgTable('transfer_inventory_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  item_ref_list_id: varchar('item_ref_list_id', { length: 36 }),
  item_ref_full_name: varchar('item_ref_full_name', { length: 209 }),
  from_inventory_site_location_ref_list_id: varchar('from_inventory_site_location_ref_list_id', { length: 36 }),
  from_inventory_site_location_ref_full_name: varchar('from_inventory_site_location_ref_full_name', { length: 209 }),
  to_inventory_site_location_ref_list_id: varchar('to_inventory_site_location_ref_list_id', { length: 36 }),
  to_inventory_site_location_ref_full_name: varchar('to_inventory_site_location_ref_full_name', { length: 209 }),
  quantity_transferred: numeric('quantity_transferred', { precision: 12, scale: 5 }),
  serial_number: varchar('serial_number', { length: 4095 }),
  lot_number: varchar('lot_number', { length: 40 }),
  expiration_date_for_serial_lot_number: varchar('expiration_date_for_serial_lot_number', { length: 1099 }),
});

export type TransferInventoryLines = typeof transfer_inventory_lines.$inferSelect;
export type NewTransferInventoryLines = typeof transfer_inventory_lines.$inferInsert;
