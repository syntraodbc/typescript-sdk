// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  bill_payment_checks (36 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const bill_payment_checks = pgTable('bill_payment_checks', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  payee_entity_ref_list_id: varchar('payee_entity_ref_list_id', { length: 36 }),
  payee_entity_ref_full_name: varchar('payee_entity_ref_full_name', { length: 209 }),
  ap_account_ref_list_id: varchar('ap_account_ref_list_id', { length: 36 }),
  ap_account_ref_full_name: varchar('ap_account_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  bank_account_ref_list_id: varchar('bank_account_ref_list_id', { length: 36 }),
  bank_account_ref_full_name: varchar('bank_account_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  amount_in_home_currency: numeric('amount_in_home_currency', { precision: 12, scale: 2 }),
  ref_number: varchar('ref_number', { length: 11 }),
  memo: varchar('memo', { length: 4095 }),
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
  is_to_be_printed: boolean('is_to_be_printed'),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type BillPaymentChecks = typeof bill_payment_checks.$inferSelect;
export type NewBillPaymentChecks = typeof bill_payment_checks.$inferInsert;
