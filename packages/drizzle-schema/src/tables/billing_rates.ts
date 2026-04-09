// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  billing_rates (6 columns)

import { pgTable, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const billing_rates = pgTable('billing_rates', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  fixed_billing_rate: numeric('fixed_billing_rate', { precision: 12, scale: 2 }),
});

export type BillingRates = typeof billing_rates.$inferSelect;
export type NewBillingRates = typeof billing_rates.$inferInsert;
