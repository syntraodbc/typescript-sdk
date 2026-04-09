// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  sales_receipt_lines (44 columns)

import { pgTable, boolean, date, integer, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const sales_receipt_lines = pgTable('sales_receipt_lines', {
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
  credit_card_txn_info_credit_card_txn_input_info_credit_card_number: varchar('credit_card_txn_info_credit_card_txn_input_info_credit_card_number', { length: 25 }),
  credit_card_txn_info_credit_card_txn_input_info_expiration_year: integer('credit_card_txn_info_credit_card_txn_input_info_expiration_year'),
  credit_card_txn_info_credit_card_txn_input_info_name_on_card: varchar('credit_card_txn_info_credit_card_txn_input_info_name_on_card', { length: 41 }),
  credit_card_txn_info_credit_card_txn_input_info_credit_card_address: varchar('credit_card_txn_info_credit_card_txn_input_info_credit_card_address', { length: 41 }),
  credit_card_txn_info_credit_card_txn_input_info_credit_card_postal_code: varchar('credit_card_txn_info_credit_card_txn_input_info_credit_card_postal_code', { length: 18 }),
  credit_card_txn_info_credit_card_txn_input_info_commercial_card_code: varchar('credit_card_txn_info_credit_card_txn_input_info_commercial_card_code', { length: 24 }),
  credit_card_txn_info_credit_card_txn_result_info_result_code: integer('credit_card_txn_info_credit_card_txn_result_info_result_code'),
  credit_card_txn_info_credit_card_txn_result_info_result_message: varchar('credit_card_txn_info_credit_card_txn_result_info_result_message', { length: 60 }),
  credit_card_txn_info_credit_card_txn_result_info_credit_card_trans_id: varchar('credit_card_txn_info_credit_card_txn_result_info_credit_card_trans_id', { length: 24 }),
  credit_card_txn_info_credit_card_txn_result_info_merchant_account_number: varchar('credit_card_txn_info_credit_card_txn_result_info_merchant_account_number', { length: 32 }),
  credit_card_txn_info_credit_card_txn_result_info_authorization_code: varchar('credit_card_txn_info_credit_card_txn_result_info_authorization_code', { length: 12 }),
  credit_card_txn_info_credit_card_txn_result_info_recon_batch_id: varchar('credit_card_txn_info_credit_card_txn_result_info_recon_batch_id', { length: 84 }),
  credit_card_txn_info_credit_card_txn_result_info_payment_grouping_code: integer('credit_card_txn_info_credit_card_txn_result_info_payment_grouping_code'),
  credit_card_txn_info_credit_card_txn_result_info_txn_authorization_time: timestamp('credit_card_txn_info_credit_card_txn_result_info_txn_authorization_time', { withTimezone: false, mode: 'string' }),
  credit_card_txn_info_credit_card_txn_result_info_txn_authorization_stamp: integer('credit_card_txn_info_credit_card_txn_result_info_txn_authorization_stamp'),
  credit_card_txn_info_credit_card_txn_result_info_client_trans_id: varchar('credit_card_txn_info_credit_card_txn_result_info_client_trans_id', { length: 16 }),
});

export type SalesReceiptLines = typeof sales_receipt_lines.$inferSelect;
export type NewSalesReceiptLines = typeof sales_receipt_lines.$inferInsert;
