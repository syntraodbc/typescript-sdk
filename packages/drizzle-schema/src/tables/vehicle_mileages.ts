// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  vehicle_mileages (22 columns)

import { pgTable, date, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const vehicle_mileages = pgTable('vehicle_mileages', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  vehicle_ref_list_id: varchar('vehicle_ref_list_id', { length: 36 }),
  vehicle_ref_full_name: varchar('vehicle_ref_full_name', { length: 209 }),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  item_ref_list_id: varchar('item_ref_list_id', { length: 36 }),
  item_ref_full_name: varchar('item_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  trip_start_date: date('trip_start_date'),
  trip_end_date: date('trip_end_date'),
  odometer_start: numeric('odometer_start', { precision: 12, scale: 5 }),
  odometer_end: numeric('odometer_end', { precision: 12, scale: 5 }),
  total_miles: numeric('total_miles', { precision: 12, scale: 5 }),
  notes: varchar('notes', { length: 4095 }),
  standard_mileage_rate: numeric('standard_mileage_rate', { precision: 12, scale: 4 }),
  standard_mileage_total_amount: numeric('standard_mileage_total_amount', { precision: 12, scale: 2 }),
  billable_rate: numeric('billable_rate', { precision: 12, scale: 2 }),
  billable_amount: numeric('billable_amount', { precision: 12, scale: 2 }),
});

export type VehicleMileages = typeof vehicle_mileages.$inferSelect;
export type NewVehicleMileages = typeof vehicle_mileages.$inferInsert;
