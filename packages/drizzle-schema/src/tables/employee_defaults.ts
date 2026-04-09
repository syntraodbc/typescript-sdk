// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  employee_defaults (9 columns)

import { pgTable, boolean, text, varchar } from 'drizzle-orm/pg-core';

export const employee_defaults = pgTable('employee_defaults', {
  _row_id: text('_row_id'),
  employee_default_payroll_info_is_covered_by_qualified_pension_plan: boolean('employee_default_payroll_info_is_covered_by_qualified_pension_plan'),
  employee_default_payroll_info_class_ref_list_id: varchar('employee_default_payroll_info_class_ref_list_id', { length: 36 }),
  employee_default_payroll_info_class_ref_full_name: varchar('employee_default_payroll_info_class_ref_full_name', { length: 209 }),
  employee_default_payroll_info_sick_hours_default_is_resetting_hours_each_new_year: boolean('employee_default_payroll_info_sick_hours_default_is_resetting_hours_each_new_year'),
  employee_default_payroll_info_vacation_hours_default_is_resetting_hours_each_new_year: boolean('employee_default_payroll_info_vacation_hours_default_is_resetting_hours_each_new_year'),
  employee_default_payroll_info_employee_tax_info_state_lived: varchar('employee_default_payroll_info_employee_tax_info_state_lived', { length: 21 }),
  employee_default_payroll_info_employee_tax_info_state_worked: varchar('employee_default_payroll_info_employee_tax_info_state_worked', { length: 21 }),
  employee_default_payroll_info_employee_tax_info_is_standard_taxation_required: boolean('employee_default_payroll_info_employee_tax_info_is_standard_taxation_required'),
});

export type EmployeeDefaults = typeof employee_defaults.$inferSelect;
export type NewEmployeeDefaults = typeof employee_defaults.$inferInsert;
