// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  bill_to_pays (22 columns)

import { pgTable, date, numeric, text, varchar } from 'drizzle-orm/pg-core';

export const bill_to_pays = pgTable('bill_to_pays', {
  _row_id: text('_row_id'),
  bill_to_pay_txn_id: varchar('bill_to_pay_txn_id', { length: 36 }),
  bill_to_pay_ap_account_ref_list_id: varchar('bill_to_pay_ap_account_ref_list_id', { length: 36 }),
  bill_to_pay_ap_account_ref_full_name: varchar('bill_to_pay_ap_account_ref_full_name', { length: 209 }),
  bill_to_pay_txn_date: date('bill_to_pay_txn_date'),
  bill_to_pay_ref_number: varchar('bill_to_pay_ref_number', { length: 20 }),
  bill_to_pay_due_date: date('bill_to_pay_due_date'),
  bill_to_pay_amount_due: numeric('bill_to_pay_amount_due', { precision: 12, scale: 2 }),
  bill_to_pay_currency_ref_list_id: varchar('bill_to_pay_currency_ref_list_id', { length: 36 }),
  bill_to_pay_currency_ref_full_name: varchar('bill_to_pay_currency_ref_full_name', { length: 209 }),
  bill_to_pay_exchange_rate: numeric('bill_to_pay_exchange_rate', { precision: 12, scale: 4 }),
  bill_to_pay_amount_due_in_home_currency: numeric('bill_to_pay_amount_due_in_home_currency', { precision: 12, scale: 2 }),
  credit_to_apply_txn_id: varchar('credit_to_apply_txn_id', { length: 36 }),
  credit_to_apply_ap_account_ref_list_id: varchar('credit_to_apply_ap_account_ref_list_id', { length: 36 }),
  credit_to_apply_ap_account_ref_full_name: varchar('credit_to_apply_ap_account_ref_full_name', { length: 209 }),
  credit_to_apply_txn_date: date('credit_to_apply_txn_date'),
  credit_to_apply_ref_number: varchar('credit_to_apply_ref_number', { length: 20 }),
  credit_to_apply_credit_remaining: numeric('credit_to_apply_credit_remaining', { precision: 12, scale: 2 }),
  credit_to_apply_currency_ref_list_id: varchar('credit_to_apply_currency_ref_list_id', { length: 36 }),
  credit_to_apply_currency_ref_full_name: varchar('credit_to_apply_currency_ref_full_name', { length: 209 }),
  credit_to_apply_exchange_rate: numeric('credit_to_apply_exchange_rate', { precision: 12, scale: 4 }),
  credit_to_apply_credit_remaining_in_home_currency: numeric('credit_to_apply_credit_remaining_in_home_currency', { precision: 12, scale: 2 }),
});

export type BillToPays = typeof bill_to_pays.$inferSelect;
export type NewBillToPays = typeof bill_to_pays.$inferInsert;
