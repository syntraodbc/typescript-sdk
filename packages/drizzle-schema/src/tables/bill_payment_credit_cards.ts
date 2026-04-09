// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  bill_payment_credit_cards (20 columns)

import { pgTable, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const bill_payment_credit_cards = pgTable('bill_payment_credit_cards', {
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
  credit_card_account_ref_list_id: varchar('credit_card_account_ref_list_id', { length: 36 }),
  credit_card_account_ref_full_name: varchar('credit_card_account_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  amount_in_home_currency: numeric('amount_in_home_currency', { precision: 12, scale: 2 }),
  ref_number: varchar('ref_number', { length: 11 }),
  memo: varchar('memo', { length: 4095 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type BillPaymentCreditCards = typeof bill_payment_credit_cards.$inferSelect;
export type NewBillPaymentCreditCards = typeof bill_payment_credit_cards.$inferInsert;
