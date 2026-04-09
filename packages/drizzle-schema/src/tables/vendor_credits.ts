// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  vendor_credits (22 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const vendor_credits = pgTable('vendor_credits', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  vendor_ref_list_id: varchar('vendor_ref_list_id', { length: 36 }),
  vendor_ref_full_name: varchar('vendor_ref_full_name', { length: 209 }),
  ap_account_ref_list_id: varchar('ap_account_ref_list_id', { length: 36 }),
  ap_account_ref_full_name: varchar('ap_account_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  credit_amount: numeric('credit_amount', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  credit_amount_in_home_currency: numeric('credit_amount_in_home_currency', { precision: 12, scale: 2 }),
  ref_number: varchar('ref_number', { length: 20 }),
  memo: varchar('memo', { length: 4095 }),
  is_tax_included: boolean('is_tax_included'),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  external_guid: varchar('external_guid', { length: 36 }),
  open_amount: numeric('open_amount', { precision: 12, scale: 2 }),
});

export type VendorCredits = typeof vendor_credits.$inferSelect;
export type NewVendorCredits = typeof vendor_credits.$inferInsert;
