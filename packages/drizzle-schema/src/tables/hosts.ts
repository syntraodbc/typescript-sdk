// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  hosts (25 columns)

import { pgTable, boolean, integer, text, varchar } from 'drizzle-orm/pg-core';

export const hosts = pgTable('hosts', {
  _row_id: text('_row_id'),
  product_name: varchar('product_name', { length: 255 }),
  major_version: varchar('major_version', { length: 5 }),
  minor_version: varchar('minor_version', { length: 5 }),
  country: varchar('country', { length: 2 }),
  is_automatic_login: boolean('is_automatic_login'),
  list_meta_data_account_meta_data_max_capacity: integer('list_meta_data_account_meta_data_max_capacity'),
  list_meta_data_billing_rate_meta_data_max_capacity: integer('list_meta_data_billing_rate_meta_data_max_capacity'),
  list_meta_data_class_meta_data_max_capacity: integer('list_meta_data_class_meta_data_max_capacity'),
  list_meta_data_customer_msg_meta_data_max_capacity: integer('list_meta_data_customer_msg_meta_data_max_capacity'),
  list_meta_data_customer_type_meta_data_max_capacity: integer('list_meta_data_customer_type_meta_data_max_capacity'),
  list_meta_data_entity_meta_data_max_capacity: integer('list_meta_data_entity_meta_data_max_capacity'),
  list_meta_data_item_meta_data_max_capacity: integer('list_meta_data_item_meta_data_max_capacity'),
  list_meta_data_job_type_meta_data_max_capacity: integer('list_meta_data_job_type_meta_data_max_capacity'),
  list_meta_data_payment_method_meta_data_max_capacity: integer('list_meta_data_payment_method_meta_data_max_capacity'),
  list_meta_data_payroll_item_meta_data_max_capacity: integer('list_meta_data_payroll_item_meta_data_max_capacity'),
  list_meta_data_price_level_meta_data_max_capacity: integer('list_meta_data_price_level_meta_data_max_capacity'),
  list_meta_data_sales_rep_meta_data_max_capacity: integer('list_meta_data_sales_rep_meta_data_max_capacity'),
  list_meta_data_sales_tax_code_meta_data_max_capacity: integer('list_meta_data_sales_tax_code_meta_data_max_capacity'),
  list_meta_data_ship_method_meta_data_max_capacity: integer('list_meta_data_ship_method_meta_data_max_capacity'),
  list_meta_data_template_meta_data_max_capacity: integer('list_meta_data_template_meta_data_max_capacity'),
  list_meta_data_terms_meta_data_max_capacity: integer('list_meta_data_terms_meta_data_max_capacity'),
  list_meta_data_to_do_meta_data_max_capacity: integer('list_meta_data_to_do_meta_data_max_capacity'),
  list_meta_data_vehicle_meta_data_max_capacity: integer('list_meta_data_vehicle_meta_data_max_capacity'),
  list_meta_data_vendor_type_meta_data_max_capacity: integer('list_meta_data_vendor_type_meta_data_max_capacity'),
});

export type Hosts = typeof hosts.$inferSelect;
export type NewHosts = typeof hosts.$inferInsert;
