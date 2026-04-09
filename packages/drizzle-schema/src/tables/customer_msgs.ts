// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  customer_msgs (6 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const customer_msgs = pgTable('customer_msgs', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 101 }),
  is_active: boolean('is_active'),
});

export type CustomerMsgs = typeof customer_msgs.$inferSelect;
export type NewCustomerMsgs = typeof customer_msgs.$inferInsert;
