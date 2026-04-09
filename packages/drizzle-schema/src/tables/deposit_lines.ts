// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  deposit_lines (14 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const deposit_lines = pgTable('deposit_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  payment_txn_line_id: varchar('payment_txn_line_id', { length: 36 }),
  entity_ref_list_id: varchar('entity_ref_list_id', { length: 36 }),
  entity_ref_full_name: varchar('entity_ref_full_name', { length: 209 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  memo: varchar('memo', { length: 4095 }),
  check_number: varchar('check_number', { length: 11 }),
  payment_method_ref_list_id: varchar('payment_method_ref_list_id', { length: 36 }),
  payment_method_ref_full_name: varchar('payment_method_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
});

export type DepositLines = typeof deposit_lines.$inferSelect;
export type NewDepositLines = typeof deposit_lines.$inferInsert;
