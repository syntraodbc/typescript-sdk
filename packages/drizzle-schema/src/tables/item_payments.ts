// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_payments (15 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_payments = pgTable('item_payments', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  bar_code_value: varchar('bar_code_value', { length: 50 }),
  is_active: boolean('is_active'),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  item_desc: varchar('item_desc', { length: 4095 }),
  deposit_to_account_ref_list_id: varchar('deposit_to_account_ref_list_id', { length: 36 }),
  deposit_to_account_ref_full_name: varchar('deposit_to_account_ref_full_name', { length: 209 }),
  payment_method_ref_list_id: varchar('payment_method_ref_list_id', { length: 36 }),
  payment_method_ref_full_name: varchar('payment_method_ref_full_name', { length: 209 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemPayments = typeof item_payments.$inferSelect;
export type NewItemPayments = typeof item_payments.$inferInsert;
