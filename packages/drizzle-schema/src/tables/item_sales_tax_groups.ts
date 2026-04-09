// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_sales_tax_groups (9 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_sales_tax_groups = pgTable('item_sales_tax_groups', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  bar_code_value: varchar('bar_code_value', { length: 50 }),
  is_active: boolean('is_active'),
  item_desc: varchar('item_desc', { length: 4095 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemSalesTaxGroups = typeof item_sales_tax_groups.$inferSelect;
export type NewItemSalesTaxGroups = typeof item_sales_tax_groups.$inferInsert;
