// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  vehicles (7 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const vehicles = pgTable('vehicles', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  desc: varchar('desc', { length: 256 }),
});

export type Vehicles = typeof vehicles.$inferSelect;
export type NewVehicles = typeof vehicles.$inferInsert;
