// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  credit_card_charges (21 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const credit_card_charges = pgTable('credit_card_charges', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  payee_entity_ref_list_id: varchar('payee_entity_ref_list_id', { length: 36 }),
  payee_entity_ref_full_name: varchar('payee_entity_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  amount_in_home_currency: numeric('amount_in_home_currency', { precision: 12, scale: 2 }),
  ref_number: varchar('ref_number', { length: 11 }),
  memo: varchar('memo', { length: 4095 }),
  is_tax_included: boolean('is_tax_included'),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type CreditCardCharges = typeof credit_card_charges.$inferSelect;
export type NewCreditCardCharges = typeof credit_card_charges.$inferInsert;
