// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  transfer_inventories (13 columns)

import { pgTable, date, integer, timestamp, varchar } from 'drizzle-orm/pg-core';

export const transfer_inventories = pgTable('transfer_inventories', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 11 }),
  from_inventory_site_ref_list_id: varchar('from_inventory_site_ref_list_id', { length: 36 }),
  from_inventory_site_ref_full_name: varchar('from_inventory_site_ref_full_name', { length: 209 }),
  to_inventory_site_ref_list_id: varchar('to_inventory_site_ref_list_id', { length: 36 }),
  to_inventory_site_ref_full_name: varchar('to_inventory_site_ref_full_name', { length: 209 }),
  memo: varchar('memo', { length: 4095 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type TransferInventories = typeof transfer_inventories.$inferSelect;
export type NewTransferInventories = typeof transfer_inventories.$inferInsert;
