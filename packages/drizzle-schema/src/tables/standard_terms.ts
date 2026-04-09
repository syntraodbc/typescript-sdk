// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  standard_terms (9 columns)

import { pgTable, boolean, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const standard_terms = pgTable('standard_terms', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  std_due_days: integer('std_due_days'),
  std_discount_days: integer('std_discount_days'),
  discount_pct: numeric('discount_pct', { precision: 12, scale: 4 }),
});

export type StandardTerms = typeof standard_terms.$inferSelect;
export type NewStandardTerms = typeof standard_terms.$inferInsert;
