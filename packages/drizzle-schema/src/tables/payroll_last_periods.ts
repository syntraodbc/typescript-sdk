// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  payroll_last_periods (3 columns)

import { pgTable, date, text } from 'drizzle-orm/pg-core';

export const payroll_last_periods = pgTable('payroll_last_periods', {
  _row_id: text('_row_id'),
  period_start_date: date('period_start_date'),
  period_end_date: date('period_end_date'),
});

export type PayrollLastPeriods = typeof payroll_last_periods.$inferSelect;
export type NewPayrollLastPeriods = typeof payroll_last_periods.$inferInsert;
