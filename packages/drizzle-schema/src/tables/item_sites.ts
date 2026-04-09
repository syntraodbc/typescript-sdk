// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_sites (20 columns)

import { pgTable, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_sites = pgTable('item_sites', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  item_inventory_assembly_ref_list_id: varchar('item_inventory_assembly_ref_list_id', { length: 36 }),
  item_inventory_assembly_ref_full_name: varchar('item_inventory_assembly_ref_full_name', { length: 209 }),
  item_inventory_ref_list_id: varchar('item_inventory_ref_list_id', { length: 36 }),
  item_inventory_ref_full_name: varchar('item_inventory_ref_full_name', { length: 209 }),
  inventory_site_ref_list_id: varchar('inventory_site_ref_list_id', { length: 36 }),
  inventory_site_ref_full_name: varchar('inventory_site_ref_full_name', { length: 209 }),
  inventory_site_location_ref_list_id: varchar('inventory_site_location_ref_list_id', { length: 36 }),
  inventory_site_location_ref_full_name: varchar('inventory_site_location_ref_full_name', { length: 209 }),
  reorder_level: numeric('reorder_level', { precision: 12, scale: 5 }),
  quantity_on_hand: numeric('quantity_on_hand', { precision: 12, scale: 5 }),
  quantity_on_purchase_orders: numeric('quantity_on_purchase_orders', { precision: 12, scale: 5 }),
  quantity_on_sales_orders: numeric('quantity_on_sales_orders', { precision: 12, scale: 5 }),
  quantity_to_be_built_by_pending_build_txns: numeric('quantity_to_be_built_by_pending_build_txns', { precision: 12, scale: 5 }),
  quantity_required_by_pending_build_txns: numeric('quantity_required_by_pending_build_txns', { precision: 12, scale: 5 }),
  quantity_on_pending_transfers: numeric('quantity_on_pending_transfers', { precision: 12, scale: 5 }),
  assembly_build_point: numeric('assembly_build_point', { precision: 12, scale: 5 }),
});

export type ItemSites = typeof item_sites.$inferSelect;
export type NewItemSites = typeof item_sites.$inferInsert;
