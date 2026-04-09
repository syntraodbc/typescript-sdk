// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  journal_entries (15 columns)

import { pgTable, boolean, date, integer, numeric, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const journal_entries = pgTable('journal_entries', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 11 }),
  memo: text('memo'),
  is_adjustment: boolean('is_adjustment'),
  is_home_currency_adjustment: boolean('is_home_currency_adjustment'),
  is_amounts_entered_in_home_currency: boolean('is_amounts_entered_in_home_currency'),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type JournalEntries = typeof journal_entries.$inferSelect;
export type NewJournalEntries = typeof journal_entries.$inferInsert;
