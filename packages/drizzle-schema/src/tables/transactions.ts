// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  transactions (16 columns)

import { pgTable, date, numeric, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const transactions = pgTable('transactions', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  entity_ref_list_id: varchar('entity_ref_list_id', { length: 36 }),
  entity_ref_full_name: varchar('entity_ref_full_name', { length: 209 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  ref_number: text('ref_number'),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  amount_in_home_currency: numeric('amount_in_home_currency', { precision: 12, scale: 2 }),
  memo: varchar('memo', { length: 4095 }),
});

export type Transactions = typeof transactions.$inferSelect;
export type NewTransactions = typeof transactions.$inferInsert;
