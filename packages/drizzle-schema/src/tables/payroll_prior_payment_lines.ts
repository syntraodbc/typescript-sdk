// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_prior_payment_lines (8 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const payroll_prior_payment_lines = pgTable('payroll_prior_payment_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  payroll_item_ref_list_id: varchar('payroll_item_ref_list_id', { length: 36 }),
  payroll_item_ref_full_name: varchar('payroll_item_ref_full_name', { length: 209 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  memo: varchar('memo', { length: 4095 }),
});

export type PayrollPriorPaymentLines = typeof payroll_prior_payment_lines.$inferSelect;
export type NewPayrollPriorPaymentLines = typeof payroll_prior_payment_lines.$inferInsert;
