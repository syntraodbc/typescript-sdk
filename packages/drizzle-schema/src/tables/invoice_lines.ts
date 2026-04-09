// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  invoice_lines (28 columns)

import { pgTable, boolean, date, numeric, varchar } from 'drizzle-orm/pg-core';

export const invoice_lines = pgTable('invoice_lines', {
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
  serial_number: varchar('serial_number', { length: 4095 }),
  lot_number: varchar('lot_number', { length: 40 }),
  expiration_date_for_serial_lot_number: varchar('expiration_date_for_serial_lot_number', { length: 1099 }),
  service_date: date('service_date'),
  sales_tax_code_ref_list_id: varchar('sales_tax_code_ref_list_id', { length: 36 }),
  sales_tax_code_ref_full_name: varchar('sales_tax_code_ref_full_name', { length: 209 }),
  is_taxable: boolean('is_taxable'),
  other1: varchar('other1', { length: 29 }),
  other2: varchar('other2', { length: 29 }),
});

export type InvoiceLines = typeof invoice_lines.$inferSelect;
export type NewInvoiceLines = typeof invoice_lines.$inferInsert;
