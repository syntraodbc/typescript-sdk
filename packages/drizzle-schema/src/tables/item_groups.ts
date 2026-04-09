// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_groups (12 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const item_groups = pgTable('item_groups', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  bar_code_value: varchar('bar_code_value', { length: 50 }),
  is_active: boolean('is_active'),
  item_desc: varchar('item_desc', { length: 4095 }),
  unit_of_measure_set_ref_list_id: varchar('unit_of_measure_set_ref_list_id', { length: 36 }),
  unit_of_measure_set_ref_full_name: varchar('unit_of_measure_set_ref_full_name', { length: 209 }),
  is_print_items_in_group: boolean('is_print_items_in_group'),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type ItemGroups = typeof item_groups.$inferSelect;
export type NewItemGroups = typeof item_groups.$inferInsert;
