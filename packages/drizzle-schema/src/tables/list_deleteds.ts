// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  list_deleteds (5 columns)

import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const list_deleteds = pgTable('list_deleteds', {
  list_id: varchar('list_id', { length: 36 }),
  list_del_type: text('list_del_type'),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_deleted: timestamp('time_deleted', { withTimezone: false, mode: 'string' }),
  full_name: text('full_name'),
});

export type ListDeleteds = typeof list_deleteds.$inferSelect;
export type NewListDeleteds = typeof list_deleteds.$inferInsert;
