// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  leads (7 columns)

import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  full_name: varchar('full_name', { length: 41 }),
  company_name: varchar('company_name', { length: 41 }),
  main_phone: varchar('main_phone', { length: 21 }),
});

export type Leads = typeof leads.$inferSelect;
export type NewLeads = typeof leads.$inferInsert;
