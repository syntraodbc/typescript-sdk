// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  receive_payment_to_deposits (11 columns)

import { pgTable, date, numeric, text, varchar } from 'drizzle-orm/pg-core';

export const receive_payment_to_deposits = pgTable('receive_payment_to_deposits', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  ref_number: text('ref_number'),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  amount_in_home_currency: numeric('amount_in_home_currency', { precision: 12, scale: 2 }),
});

export type ReceivePaymentToDeposits = typeof receive_payment_to_deposits.$inferSelect;
export type NewReceivePaymentToDeposits = typeof receive_payment_to_deposits.$inferInsert;
