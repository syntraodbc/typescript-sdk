// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_group_lines (10 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const item_group_lines = pgTable('item_group_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  item_group_ref_list_id: varchar('item_group_ref_list_id', { length: 36 }),
  item_group_ref_full_name: varchar('item_group_ref_full_name', { length: 209 }),
  desc: varchar('desc', { length: 4095 }),
  quantity: numeric('quantity', { precision: 12, scale: 5 }),
  unit_of_measure: varchar('unit_of_measure', { length: 31 }),
  override_uom_set_ref_list_id: varchar('override_uom_set_ref_list_id', { length: 36 }),
  override_uom_set_ref_full_name: varchar('override_uom_set_ref_full_name', { length: 209 }),
  total_amount: numeric('total_amount', { precision: 12, scale: 2 }),
});

export type ItemGroupLines = typeof item_group_lines.$inferSelect;
export type NewItemGroupLines = typeof item_group_lines.$inferInsert;
