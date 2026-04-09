// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  templates (6 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const templates = pgTable('templates', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
});

export type Templates = typeof templates.$inferSelect;
export type NewTemplates = typeof templates.$inferInsert;
