// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_liability_adjustment_lines (18 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const payroll_liability_adjustment_lines = pgTable('payroll_liability_adjustment_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  payroll_item_ref_list_id: varchar('payroll_item_ref_list_id', { length: 36 }),
  payroll_item_ref_full_name: varchar('payroll_item_ref_full_name', { length: 209 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  other_account_ref_list_id: varchar('other_account_ref_list_id', { length: 36 }),
  other_account_ref_full_name: varchar('other_account_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  memo: varchar('memo', { length: 4095 }),
  workers_comp_code_ref_list_id: varchar('workers_comp_code_ref_list_id', { length: 36 }),
  workers_comp_code_ref_full_name: varchar('workers_comp_code_ref_full_name', { length: 209 }),
  workers_comp_amount: numeric('workers_comp_amount', { precision: 12, scale: 2 }),
  experience_mod_rate_amount: numeric('experience_mod_rate_amount', { precision: 12, scale: 2 }),
  wage_base_amount: numeric('wage_base_amount', { precision: 12, scale: 2 }),
  income_subject_to_tax_amount: numeric('income_subject_to_tax_amount', { precision: 12, scale: 2 }),
});

export type PayrollLiabilityAdjustmentLines = typeof payroll_liability_adjustment_lines.$inferSelect;
export type NewPayrollLiabilityAdjustmentLines = typeof payroll_liability_adjustment_lines.$inferInsert;
