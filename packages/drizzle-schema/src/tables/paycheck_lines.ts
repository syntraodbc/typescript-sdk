// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  paycheck_lines (31 columns)

import { pgTable, boolean, numeric, varchar } from 'drizzle-orm/pg-core';

export const paycheck_lines = pgTable('paycheck_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  payroll_item_ref_list_id: varchar('payroll_item_ref_list_id', { length: 36 }),
  payroll_item_ref_full_name: varchar('payroll_item_ref_full_name', { length: 209 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  other_account_ref_list_id: varchar('other_account_ref_list_id', { length: 36 }),
  other_account_ref_full_name: varchar('other_account_ref_full_name', { length: 209 }),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  calculated_amount: numeric('calculated_amount', { precision: 12, scale: 2 }),
  is_amount_overridden: boolean('is_amount_overridden'),
  is_prorated: boolean('is_prorated'),
  memo: varchar('memo', { length: 4095 }),
  workers_comp_code_ref_list_id: varchar('workers_comp_code_ref_list_id', { length: 36 }),
  workers_comp_code_ref_full_name: varchar('workers_comp_code_ref_full_name', { length: 209 }),
  workers_comp_amount: numeric('workers_comp_amount', { precision: 12, scale: 2 }),
  experience_mod_rate_amount: numeric('experience_mod_rate_amount', { precision: 12, scale: 2 }),
  rate: numeric('rate', { precision: 12, scale: 2 }),
  rate_percent: numeric('rate_percent', { precision: 12, scale: 4 }),
  quantity: numeric('quantity', { precision: 12, scale: 5 }),
  year_to_date_amount: numeric('year_to_date_amount', { precision: 12, scale: 2 }),
  wage_base_amount: numeric('wage_base_amount', { precision: 12, scale: 2 }),
  income_subject_to_tax_amount: numeric('income_subject_to_tax_amount', { precision: 12, scale: 2 }),
  tips_wage_base_amount: numeric('tips_wage_base_amount', { precision: 12, scale: 2 }),
  direct_deposit_account_info_bank_name: varchar('direct_deposit_account_info_bank_name', { length: 31 }),
  direct_deposit_account_info_routing_number: varchar('direct_deposit_account_info_routing_number', { length: 9 }),
  direct_deposit_account_info_account_number: varchar('direct_deposit_account_info_account_number', { length: 25 }),
});

export type PaycheckLines = typeof paycheck_lines.$inferSelect;
export type NewPaycheckLines = typeof paycheck_lines.$inferInsert;
