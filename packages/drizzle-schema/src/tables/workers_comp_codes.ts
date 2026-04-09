// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  workers_comp_codes (11 columns)

import { pgTable, boolean, date, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const workers_comp_codes = pgTable('workers_comp_codes', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 13 }),
  is_active: boolean('is_active'),
  desc: varchar('desc', { length: 31 }),
  current_rate: numeric('current_rate', { precision: 12, scale: 2 }),
  current_effective_date: date('current_effective_date'),
  next_rate: numeric('next_rate', { precision: 12, scale: 2 }),
  next_effective_date: date('next_effective_date'),
});

export type WorkersCompCodes = typeof workers_comp_codes.$inferSelect;
export type NewWorkersCompCodes = typeof workers_comp_codes.$inferInsert;
