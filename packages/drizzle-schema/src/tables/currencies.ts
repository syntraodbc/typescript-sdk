// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  currencies (10 columns)

import { pgTable, boolean, date, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const currencies = pgTable('currencies', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 64 }),
  is_active: boolean('is_active'),
  currency_code: varchar('currency_code', { length: 3 }),
  is_user_defined_currency: boolean('is_user_defined_currency'),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  as_of_date: date('as_of_date'),
});

export type Currencies = typeof currencies.$inferSelect;
export type NewCurrencies = typeof currencies.$inferInsert;
