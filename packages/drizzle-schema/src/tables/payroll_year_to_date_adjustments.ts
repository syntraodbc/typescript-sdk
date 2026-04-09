// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_year_to_date_adjustments (20 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const payroll_year_to_date_adjustments = pgTable('payroll_year_to_date_adjustments', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  employee_ref_list_id: varchar('employee_ref_list_id', { length: 36 }),
  employee_ref_full_name: varchar('employee_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  ref_number: varchar('ref_number', { length: 11 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  memo: varchar('memo', { length: 4095 }),
  is_affecting_accounts: boolean('is_affecting_accounts'),
  payroll_date: date('payroll_date'),
  pay_period_begin_date: date('pay_period_begin_date'),
  pay_period_end_date: date('pay_period_end_date'),
  tax_table_version: integer('tax_table_version'),
});

export type PayrollYearToDateAdjustments = typeof payroll_year_to_date_adjustments.$inferSelect;
export type NewPayrollYearToDateAdjustments = typeof payroll_year_to_date_adjustments.$inferInsert;
