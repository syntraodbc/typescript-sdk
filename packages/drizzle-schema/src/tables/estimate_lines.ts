// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  estimate_lines (25 columns)

import { pgTable, numeric, varchar } from 'drizzle-orm/pg-core';

export const estimate_lines = pgTable('estimate_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  item_ref_list_id: varchar('item_ref_list_id', { length: 36 }),
  item_ref_full_name: varchar('item_ref_full_name', { length: 209 }),
  desc: varchar('desc', { length: 4095 }),
  quantity: numeric('quantity', { precision: 12, scale: 5 }),
  unit_of_measure: varchar('unit_of_measure', { length: 31 }),
  override_uom_set_ref_list_id: varchar('override_uom_set_ref_list_id', { length: 36 }),
  override_uom_set_ref_full_name: varchar('override_uom_set_ref_full_name', { length: 209 }),
  rate: numeric('rate', { precision: 12, scale: 2 }),
  rate_percent: numeric('rate_percent', { precision: 12, scale: 4 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  tax_amount: numeric('tax_amount', { precision: 12, scale: 2 }),
  inventory_site_ref_list_id: varchar('inventory_site_ref_list_id', { length: 36 }),
  inventory_site_ref_full_name: varchar('inventory_site_ref_full_name', { length: 209 }),
  inventory_site_location_ref_list_id: varchar('inventory_site_location_ref_list_id', { length: 36 }),
  inventory_site_location_ref_full_name: varchar('inventory_site_location_ref_full_name', { length: 209 }),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  markup_rate: numeric('markup_rate', { precision: 12, scale: 2 }),
  markup_rate_percent: numeric('markup_rate_percent', { precision: 12, scale: 4 }),
  other1: varchar('other1', { length: 29 }),
  other2: varchar('other2', { length: 29 }),
});

export type EstimateLines = typeof estimate_lines.$inferSelect;
export type NewEstimateLines = typeof estimate_lines.$inferInsert;
