// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  credit_memo_line_groups (12 columns)

import { pgTable, boolean, date, numeric, varchar } from 'drizzle-orm/pg-core';

export const credit_memo_line_groups = pgTable('credit_memo_line_groups', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  item_group_ref_list_id: varchar('item_group_ref_list_id', { length: 36 }),
  item_group_ref_full_name: varchar('item_group_ref_full_name', { length: 209 }),
  desc: varchar('desc', { length: 4095 }),
  quantity: numeric('quantity', { precision: 12, scale: 5 }),
  unit_of_measure: varchar('unit_of_measure', { length: 31 }),
  override_uom_set_ref_list_id: varchar('override_uom_set_ref_list_id', { length: 36 }),
  override_uom_set_ref_full_name: varchar('override_uom_set_ref_full_name', { length: 209 }),
  is_print_items_in_group: boolean('is_print_items_in_group'),
  total_amount: numeric('total_amount', { precision: 12, scale: 2 }),
  service_date: date('service_date'),
});

export type CreditMemoLineGroups = typeof credit_memo_line_groups.$inferSelect;
export type NewCreditMemoLineGroups = typeof credit_memo_line_groups.$inferInsert;
