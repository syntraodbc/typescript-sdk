// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  bills (39 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const bills = pgTable('bills', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  vendor_ref_list_id: varchar('vendor_ref_list_id', { length: 36 }),
  vendor_ref_full_name: varchar('vendor_ref_full_name', { length: 209 }),
  vendor_address_addr1: varchar('vendor_address_addr1', { length: 41 }),
  vendor_address_addr2: varchar('vendor_address_addr2', { length: 41 }),
  vendor_address_addr3: varchar('vendor_address_addr3', { length: 41 }),
  vendor_address_addr4: varchar('vendor_address_addr4', { length: 41 }),
  vendor_address_addr5: varchar('vendor_address_addr5', { length: 41 }),
  vendor_address_city: varchar('vendor_address_city', { length: 31 }),
  vendor_address_state: varchar('vendor_address_state', { length: 21 }),
  vendor_address_postal_code: varchar('vendor_address_postal_code', { length: 13 }),
  vendor_address_country: varchar('vendor_address_country', { length: 31 }),
  vendor_address_note: varchar('vendor_address_note', { length: 41 }),
  ap_account_ref_list_id: varchar('ap_account_ref_list_id', { length: 36 }),
  ap_account_ref_full_name: varchar('ap_account_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  due_date: date('due_date'),
  amount_due: numeric('amount_due', { precision: 12, scale: 2 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
  exchange_rate: numeric('exchange_rate', { precision: 12, scale: 4 }),
  amount_due_in_home_currency: numeric('amount_due_in_home_currency', { precision: 12, scale: 2 }),
  ref_number: varchar('ref_number', { length: 20 }),
  is_pending: boolean('is_pending'),
  terms_ref_list_id: varchar('terms_ref_list_id', { length: 36 }),
  terms_ref_full_name: varchar('terms_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  memo: varchar('memo', { length: 4095 }),
  is_tax_included: boolean('is_tax_included'),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  is_paid: boolean('is_paid'),
  external_guid: varchar('external_guid', { length: 36 }),
  open_amount: numeric('open_amount', { precision: 12, scale: 2 }),
});

export type Bills = typeof bills.$inferSelect;
export type NewBills = typeof bills.$inferInsert;
