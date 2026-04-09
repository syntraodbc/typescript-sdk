// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_liability_check_lines (14 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const payroll_liability_check_lines = pgTable('payroll_liability_check_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  payroll_item_ref_list_id: varchar('payroll_item_ref_list_id', { length: 36 }),
  payroll_item_ref_full_name: varchar('payroll_item_ref_full_name', { length: 209 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  vendor_ref_list_id: varchar('vendor_ref_list_id', { length: 36 }),
  vendor_ref_full_name: varchar('vendor_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  memo: varchar('memo', { length: 4095 }),
});

export type PayrollLiabilityCheckLines = typeof payroll_liability_check_lines.$inferSelect;
export type NewPayrollLiabilityCheckLines = typeof payroll_liability_check_lines.$inferInsert;
