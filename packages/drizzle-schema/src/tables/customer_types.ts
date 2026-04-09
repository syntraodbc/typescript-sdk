// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  customer_types (10 columns)

import { pgTable, boolean, integer, timestamp, varchar } from 'drizzle-orm/pg-core';

export const customer_types = pgTable('customer_types', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  full_name: varchar('full_name', { length: 159 }),
  is_active: boolean('is_active'),
  parent_ref_list_id: varchar('parent_ref_list_id', { length: 36 }),
  parent_ref_full_name: varchar('parent_ref_full_name', { length: 209 }),
  sublevel: integer('sublevel'),
});

export type CustomerTypes = typeof customer_types.$inferSelect;
export type NewCustomerTypes = typeof customer_types.$inferInsert;
