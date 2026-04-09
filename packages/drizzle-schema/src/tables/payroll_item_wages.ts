// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_item_wages (12 columns)

import { pgTable, boolean, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const payroll_item_wages = pgTable('payroll_item_wages', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  payroll_item_detail_type_value: integer('payroll_item_detail_type_value'),
  expense_account_ref_list_id: varchar('expense_account_ref_list_id', { length: 36 }),
  expense_account_ref_full_name: varchar('expense_account_ref_full_name', { length: 209 }),
  overtime_multiplier: numeric('overtime_multiplier', { precision: 12, scale: 2 }),
  rate: numeric('rate', { precision: 12, scale: 2 }),
  rate_percent: numeric('rate_percent', { precision: 12, scale: 4 }),
});

export type PayrollItemWages = typeof payroll_item_wages.$inferSelect;
export type NewPayrollItemWages = typeof payroll_item_wages.$inferInsert;
