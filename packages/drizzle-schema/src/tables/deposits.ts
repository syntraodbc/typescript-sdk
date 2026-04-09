// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  deposits (20 columns)

import { pgTable, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const deposits = pgTable('deposits', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  txn_date: date('txn_date'),
  deposit_to_account_ref_list_id: varchar('deposit_to_account_ref_list_id', { length: 36 }),
  deposit_to_account_ref_full_name: varchar('deposit_to_account_ref_full_name', { length: 209 }),
  memo: varchar('memo', { length: 4095 }),
  deposit_total: numeric('deposit_total', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  deposit_total_in_home_currency: numeric('deposit_total_in_home_currency', { precision: 12, scale: 2 }),
  cash_back_info_ret_txn_line_id: varchar('cash_back_info_ret_txn_line_id', { length: 36 }),
  cash_back_info_ret_account_ref_list_id: varchar('cash_back_info_ret_account_ref_list_id', { length: 36 }),
  cash_back_info_ret_account_ref_full_name: varchar('cash_back_info_ret_account_ref_full_name', { length: 209 }),
  cash_back_info_ret_memo: varchar('cash_back_info_ret_memo', { length: 4095 }),
  cash_back_info_ret_amount: numeric('cash_back_info_ret_amount', { precision: 12, scale: 2 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type Deposits = typeof deposits.$inferSelect;
export type NewDeposits = typeof deposits.$inferInsert;
