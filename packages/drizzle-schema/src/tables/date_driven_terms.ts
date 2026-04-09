// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  date_driven_terms (8 columns)

import { pgTable, boolean, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const date_driven_terms = pgTable('date_driven_terms', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  due_next_month_days: integer('due_next_month_days'),
  discount_pct: numeric('discount_pct', { precision: 12, scale: 4 }),
});

export type DateDrivenTerms = typeof date_driven_terms.$inferSelect;
export type NewDateDrivenTerms = typeof date_driven_terms.$inferInsert;
