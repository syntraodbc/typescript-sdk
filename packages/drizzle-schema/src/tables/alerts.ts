// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  alerts (5 columns)

import { pgTable, boolean, date, text, varchar } from 'drizzle-orm/pg-core';

export const alerts = pgTable('alerts', {
  _row_id: text('_row_id'),
  owner_id: varchar('owner_id', { length: 36 }),
  alert_tag: varchar('alert_tag', { length: 128 }),
  is_marked_done: boolean('is_marked_done'),
  next_alert_date: date('next_alert_date'),
});

export type Alerts = typeof alerts.$inferSelect;
export type NewAlerts = typeof alerts.$inferInsert;
