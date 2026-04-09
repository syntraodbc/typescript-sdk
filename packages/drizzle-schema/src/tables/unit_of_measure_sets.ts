// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  unit_of_measure_sets (8 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const unit_of_measure_sets = pgTable('unit_of_measure_sets', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  base_unit_name: varchar('base_unit_name', { length: 31 }),
  base_unit_abbreviation: varchar('base_unit_abbreviation', { length: 31 }),
});

export type UnitOfMeasureSets = typeof unit_of_measure_sets.$inferSelect;
export type NewUnitOfMeasureSets = typeof unit_of_measure_sets.$inferInsert;
