// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  to_dos (16 columns)

import { pgTable, boolean, date, timestamp, varchar } from 'drizzle-orm/pg-core';

export const to_dos = pgTable('to_dos', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  notes: varchar('notes', { length: 4095 }),
  is_active: boolean('is_active'),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  employee_ref_list_id: varchar('employee_ref_list_id', { length: 36 }),
  employee_ref_full_name: varchar('employee_ref_full_name', { length: 209 }),
  lead_ref_list_id: varchar('lead_ref_list_id', { length: 36 }),
  lead_ref_full_name: varchar('lead_ref_full_name', { length: 209 }),
  vendor_ref_list_id: varchar('vendor_ref_list_id', { length: 36 }),
  vendor_ref_full_name: varchar('vendor_ref_full_name', { length: 209 }),
  is_done: boolean('is_done'),
  reminder_date: date('reminder_date'),
});

export type ToDos = typeof to_dos.$inferSelect;
export type NewToDos = typeof to_dos.$inferInsert;
