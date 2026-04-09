// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  receive_payments (40 columns)

import { pgTable, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const receive_payments = pgTable('receive_payments', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  ar_account_ref_list_id: varchar('ar_account_ref_list_id', { length: 36 }),
  ar_account_ref_full_name: varchar('ar_account_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 20 }),
  total_amount: numeric('total_amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  total_amount_in_home_currency: numeric('total_amount_in_home_currency', { precision: 12, scale: 2 }),
  payment_method_ref_list_id: varchar('payment_method_ref_list_id', { length: 36 }),
  payment_method_ref_full_name: varchar('payment_method_ref_full_name', { length: 209 }),
  memo: varchar('memo', { length: 4095 }),
  deposit_to_account_ref_list_id: varchar('deposit_to_account_ref_list_id', { length: 36 }),
  deposit_to_account_ref_full_name: varchar('deposit_to_account_ref_full_name', { length: 209 }),
  credit_card_txn_info_credit_card_txn_input_info_credit_card_number: varchar('credit_card_txn_info_credit_card_txn_input_info_credit_card_number', { length: 25 }),
  credit_card_txn_info_credit_card_txn_input_info_expiration_year: integer('credit_card_txn_info_credit_card_txn_input_info_expiration_year'),
  credit_card_txn_info_credit_card_txn_input_info_name_on_card: varchar('credit_card_txn_info_credit_card_txn_input_info_name_on_card', { length: 41 }),
  credit_card_txn_info_credit_card_txn_input_info_credit_card_address: varchar('credit_card_txn_info_credit_card_txn_input_info_credit_card_address', { length: 41 }),
  credit_card_txn_info_credit_card_txn_input_info_credit_card_postal_code: varchar('credit_card_txn_info_credit_card_txn_input_info_credit_card_postal_code', { length: 18 }),
  credit_card_txn_info_credit_card_txn_input_info_commercial_card_code: varchar('credit_card_txn_info_credit_card_txn_input_info_commercial_card_code', { length: 24 }),
  credit_card_txn_info_credit_card_txn_result_info_result_code: integer('credit_card_txn_info_credit_card_txn_result_info_result_code'),
  credit_card_txn_info_credit_card_txn_result_info_result_message: varchar('credit_card_txn_info_credit_card_txn_result_info_result_message', { length: 60 }),
  credit_card_txn_info_credit_card_txn_result_info_credit_card_trans_id: varchar('credit_card_txn_info_credit_card_txn_result_info_credit_card_trans_id', { length: 24 }),
  credit_card_txn_info_credit_card_txn_result_info_merchant_account_number: varchar('credit_card_txn_info_credit_card_txn_result_info_merchant_account_number', { length: 32 }),
  credit_card_txn_info_credit_card_txn_result_info_authorization_code: varchar('credit_card_txn_info_credit_card_txn_result_info_authorization_code', { length: 12 }),
  credit_card_txn_info_credit_card_txn_result_info_recon_batch_id: varchar('credit_card_txn_info_credit_card_txn_result_info_recon_batch_id', { length: 84 }),
  credit_card_txn_info_credit_card_txn_result_info_payment_grouping_code: integer('credit_card_txn_info_credit_card_txn_result_info_payment_grouping_code'),
  credit_card_txn_info_credit_card_txn_result_info_txn_authorization_time: timestamp('credit_card_txn_info_credit_card_txn_result_info_txn_authorization_time', { withTimezone: false, mode: 'string' }),
  credit_card_txn_info_credit_card_txn_result_info_txn_authorization_stamp: integer('credit_card_txn_info_credit_card_txn_result_info_txn_authorization_stamp'),
  credit_card_txn_info_credit_card_txn_result_info_client_trans_id: varchar('credit_card_txn_info_credit_card_txn_result_info_client_trans_id', { length: 16 }),
  unused_payment: numeric('unused_payment', { precision: 12, scale: 2 }),
  unused_credits: numeric('unused_credits', { precision: 12, scale: 2 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ReceivePayments = typeof receive_payments.$inferSelect;
export type NewReceivePayments = typeof receive_payments.$inferInsert;
