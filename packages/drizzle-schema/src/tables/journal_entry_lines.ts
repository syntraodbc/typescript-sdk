// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  journal_entry_lines (15 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const journal_entry_lines = pgTable('journal_entry_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  journal_line_type: varchar('journal_line_type', { length: 8 }),
  account_ref_list_id: varchar('account_ref_list_id', { length: 36 }),
  account_ref_full_name: varchar('account_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  tax_amount: numeric('tax_amount', { precision: 12, scale: 2 }),
  memo: varchar('memo', { length: 4095 }),
  entity_ref_list_id: varchar('entity_ref_list_id', { length: 36 }),
  entity_ref_full_name: varchar('entity_ref_full_name', { length: 209 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  item_sales_tax_ref_list_id: varchar('item_sales_tax_ref_list_id', { length: 36 }),
  item_sales_tax_ref_full_name: varchar('item_sales_tax_ref_full_name', { length: 209 }),
  billable_status: varchar('billable_status', { length: 13 }),
});

export type JournalEntryLines = typeof journal_entry_lines.$inferSelect;
export type NewJournalEntryLines = typeof journal_entry_lines.$inferInsert;
