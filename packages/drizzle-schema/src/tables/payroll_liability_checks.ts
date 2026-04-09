// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_liability_checks (25 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const payroll_liability_checks = pgTable('payroll_liability_checks', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  vendor_ref_list_id: varchar('vendor_ref_list_id', { length: 36 }),
  vendor_ref_full_name: varchar('vendor_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 11 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
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
  is_to_be_printed: boolean('is_to_be_printed'),
  payroll_date: date('payroll_date'),
});

export type PayrollLiabilityChecks = typeof payroll_liability_checks.$inferSelect;
export type NewPayrollLiabilityChecks = typeof payroll_liability_checks.$inferInsert;
