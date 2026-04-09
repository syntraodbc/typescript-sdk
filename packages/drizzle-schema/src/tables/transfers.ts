// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  transfers (16 columns)

import { pgTable, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const transfers = pgTable('transfers', {
  txn_id: varchar('txn_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  txn_number: integer('txn_number'),
  txn_date: date('txn_date'),
  transfer_from_account_ref_list_id: varchar('transfer_from_account_ref_list_id', { length: 36 }),
  transfer_from_account_ref_full_name: varchar('transfer_from_account_ref_full_name', { length: 209 }),
  from_account_balance: numeric('from_account_balance', { precision: 12, scale: 2 }),
  transfer_to_account_ref_list_id: varchar('transfer_to_account_ref_list_id', { length: 36 }),
  transfer_to_account_ref_full_name: varchar('transfer_to_account_ref_full_name', { length: 209 }),
  to_account_balance: numeric('to_account_balance', { precision: 12, scale: 2 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  memo: varchar('memo', { length: 4095 }),
});

export type Transfers = typeof transfers.$inferSelect;
export type NewTransfers = typeof transfers.$inferInsert;
