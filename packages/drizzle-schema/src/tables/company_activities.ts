// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  company_activities (3 columns)

import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const company_activities = pgTable('company_activities', {
  _row_id: text('_row_id'),
  last_restore_time: timestamp('last_restore_time', { withTimezone: false, mode: 'string' }),
  last_condense_time: timestamp('last_condense_time', { withTimezone: false, mode: 'string' }),
});

export type CompanyActivities = typeof company_activities.$inferSelect;
export type NewCompanyActivities = typeof company_activities.$inferInsert;
