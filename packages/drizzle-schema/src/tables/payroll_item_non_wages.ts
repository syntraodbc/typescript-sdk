// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_item_non_wages (10 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const payroll_item_non_wages = pgTable('payroll_item_non_wages', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  expense_account_ref_list_id: varchar('expense_account_ref_list_id', { length: 36 }),
  expense_account_ref_full_name: varchar('expense_account_ref_full_name', { length: 209 }),
  liability_account_ref_list_id: varchar('liability_account_ref_list_id', { length: 36 }),
  liability_account_ref_full_name: varchar('liability_account_ref_full_name', { length: 209 }),
});

export type PayrollItemNonWages = typeof payroll_item_non_wages.$inferSelect;
export type NewPayrollItemNonWages = typeof payroll_item_non_wages.$inferInsert;
