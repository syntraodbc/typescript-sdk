// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  purchase_order_lines (28 columns)

import { pgTable, boolean, date, numeric, varchar } from 'drizzle-orm/pg-core';

export const purchase_order_lines = pgTable('purchase_order_lines', {
  txn_id: varchar('txn_id', { length: 36 }),
  txn_line_id: varchar('txn_line_id', { length: 36 }),
  item_ref_list_id: varchar('item_ref_list_id', { length: 36 }),
  item_ref_full_name: varchar('item_ref_full_name', { length: 209 }),
  manufacturer_part_number: varchar('manufacturer_part_number', { length: 31 }),
  desc: varchar('desc', { length: 4095 }),
  quantity: numeric('quantity', { precision: 12, scale: 5 }),
  unit_of_measure: varchar('unit_of_measure', { length: 31 }),
  override_uom_set_ref_list_id: varchar('override_uom_set_ref_list_id', { length: 36 }),
  override_uom_set_ref_full_name: varchar('override_uom_set_ref_full_name', { length: 209 }),
  rate: numeric('rate', { precision: 12, scale: 2 }),
  class_ref_list_id: varchar('class_ref_list_id', { length: 36 }),
  class_ref_full_name: varchar('class_ref_full_name', { length: 209 }),
  amount: numeric('amount', { precision: 12, scale: 2 }),
  tax_amount: numeric('tax_amount', { precision: 12, scale: 2 }),
  inventory_site_location_ref_list_id: varchar('inventory_site_location_ref_list_id', { length: 36 }),
  inventory_site_location_ref_full_name: varchar('inventory_site_location_ref_full_name', { length: 209 }),
  customer_ref_list_id: varchar('customer_ref_list_id', { length: 36 }),
  customer_ref_full_name: varchar('customer_ref_full_name', { length: 209 }),
  service_date: date('service_date'),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  received_quantity: numeric('received_quantity', { precision: 12, scale: 5 }),
  unbilled_quantity: numeric('unbilled_quantity', { precision: 12, scale: 5 }),
  is_billed: boolean('is_billed'),
  is_manually_closed: boolean('is_manually_closed'),
  other1: varchar('other1', { length: 29 }),
  other2: varchar('other2', { length: 29 }),
});

export type PurchaseOrderLines = typeof purchase_order_lines.$inferSelect;
export type NewPurchaseOrderLines = typeof purchase_order_lines.$inferInsert;
