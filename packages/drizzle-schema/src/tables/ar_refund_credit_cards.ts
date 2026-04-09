// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  ar_refund_credit_cards (53 columns)

import { pgTable, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const ar_refund_credit_cards = pgTable('ar_refund_credit_cards', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  refund_from_account_ref_list_id: varchar('refund_from_account_ref_list_id', { length: 36 }),
  refund_from_account_ref_full_name: varchar('refund_from_account_ref_full_name', { length: 209 }),
  ar_account_ref_list_id: varchar('ar_account_ref_list_id', { length: 36 }),
  ar_account_ref_full_name: varchar('ar_account_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 11 }),
  total_amount: numeric('total_amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  total_amount_in_home_currency: numeric('total_amount_in_home_currency', { precision: 12, scale: 2 }),
  address_addr1: varchar('address_addr1', { length: 41 }),
  address_addr2: varchar('address_addr2', { length: 41 }),
  address_addr3: varchar('address_addr3', { length: 41 }),
  address_addr4: varchar('address_addr4', { length: 41 }),
  address_addr5: varchar('address_addr5', { length: 41 }),
  address_city: varchar('address_city', { length: 31 }),
  address_state: varchar('address_state', { length: 21 }),
  address_postal_code: varchar('address_postal_code', { length: 13 }),
  address_country: varchar('address_country', { length: 31 }),
  address_note: varchar('address_note', { length: 41 }),
  address_block_addr1: varchar('address_block_addr1', { length: 41 }),
  address_block_addr2: varchar('address_block_addr2', { length: 41 }),
  address_block_addr3: varchar('address_block_addr3', { length: 41 }),
  address_block_addr4: varchar('address_block_addr4', { length: 41 }),
  address_block_addr5: varchar('address_block_addr5', { length: 41 }),
  payment_method_ref_list_id: varchar('payment_method_ref_list_id', { length: 36 }),
  payment_method_ref_full_name: varchar('payment_method_ref_full_name', { length: 209 }),
  memo: varchar('memo', { length: 4095 }),
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
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ArRefundCreditCards = typeof ar_refund_credit_cards.$inferSelect;
export type NewArRefundCreditCards = typeof ar_refund_credit_cards.$inferInsert;
