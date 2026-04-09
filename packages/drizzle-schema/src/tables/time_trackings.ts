// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  time_trackings (19 columns)

import { pgTable, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const time_trackings = pgTable('time_trackings', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  txn_date: date('txn_date'),
  entity_ref_list_id: varchar('entity_ref_list_id', { length: 36 }),
  entity_ref_full_name: varchar('entity_ref_full_name', { length: 209 }),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  item_service_ref_list_id: varchar('item_service_ref_list_id', { length: 36 }),
  item_service_ref_full_name: varchar('item_service_ref_full_name', { length: 209 }),
  rate: numeric('rate', { precision: 12, scale: 2 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  payroll_item_wage_ref_list_id: varchar('payroll_item_wage_ref_list_id', { length: 36 }),
  payroll_item_wage_ref_full_name: varchar('payroll_item_wage_ref_full_name', { length: 209 }),
  notes: varchar('notes', { length: 4095 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type TimeTrackings = typeof time_trackings.$inferSelect;
export type NewTimeTrackings = typeof time_trackings.$inferInsert;
