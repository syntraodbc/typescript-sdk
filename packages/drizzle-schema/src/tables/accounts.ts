// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  accounts (25 columns)

import { pgTable, boolean, integer, numeric, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const accounts = pgTable('accounts', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  full_name: varchar('full_name', { length: 159 }),
  is_active: boolean('is_active'),
  parent_ref_list_id: varchar('parent_ref_list_id', { length: 36 }),
  parent_ref_full_name: varchar('parent_ref_full_name', { length: 209 }),
  sublevel: integer('sublevel'),
  is_tax_account: boolean('is_tax_account'),
  account_number: varchar('account_number', { length: 7 }),
  bank_number: varchar('bank_number', { length: 25 }),
  last_check_number: text('last_check_number'),
  desc: varchar('desc', { length: 200 }),
  account_type: varchar('account_type', { length: 31 }),
  special_account_type: varchar('special_account_type', { length: 31 }),
  balance: numeric('balance', { precision: 12, scale: 2 }),
  total_balance: numeric('total_balance', { precision: 12, scale: 2 }),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  tax_line_info_ret_tax_line_id: integer('tax_line_info_ret_tax_line_id'),
  tax_line_info_ret_tax_line_name: varchar('tax_line_info_ret_tax_line_name', { length: 256 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
});

export type Accounts = typeof accounts.$inferSelect;
export type NewAccounts = typeof accounts.$inferInsert;
