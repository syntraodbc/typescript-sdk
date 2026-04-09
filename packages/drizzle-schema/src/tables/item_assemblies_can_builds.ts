// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  item_assemblies_can_builds (5 columns)

import { pgTable, date, numeric, text, varchar } from 'drizzle-orm/pg-core';

export const item_assemblies_can_builds = pgTable('item_assemblies_can_builds', {
  _row_id: text('_row_id'),
  item_inventory_assembly_ref_list_id: varchar('item_inventory_assembly_ref_list_id', { length: 36 }),
  item_inventory_assembly_ref_full_name: varchar('item_inventory_assembly_ref_full_name', { length: 209 }),
  txn_date: date('txn_date'),
  quantity_can_build: numeric('quantity_can_build', { precision: 12, scale: 5 }),
});

export type ItemAssembliesCanBuilds = typeof item_assemblies_can_builds.$inferSelect;
export type NewItemAssembliesCanBuilds = typeof item_assemblies_can_builds.$inferInsert;
