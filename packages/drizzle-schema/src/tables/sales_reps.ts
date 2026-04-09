// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_reps (8 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const sales_reps = pgTable('sales_reps', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  initial: varchar('initial', { length: 5 }),
  is_active: boolean('is_active'),
  sales_rep_entity_ref_list_id: varchar('sales_rep_entity_ref_list_id', { length: 36 }),
  sales_rep_entity_ref_full_name: varchar('sales_rep_entity_ref_full_name', { length: 209 }),
});

export type SalesReps = typeof sales_reps.$inferSelect;
export type NewSalesReps = typeof sales_reps.$inferInsert;
