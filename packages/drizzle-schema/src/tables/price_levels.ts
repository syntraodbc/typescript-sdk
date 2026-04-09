// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  price_levels (9 columns)

import { pgTable, boolean, numeric, timestamp, varchar } from 'drizzle-orm/pg-core';

export const price_levels = pgTable('price_levels', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  price_level_fixed_percentage: numeric('price_level_fixed_percentage', { precision: 12, scale: 4 }),
  currency_ref_list_id: varchar('currency_ref_list_id', { length: 36 }),
  currency_ref_full_name: varchar('currency_ref_full_name', { length: 209 }),
});

export type PriceLevels = typeof price_levels.$inferSelect;
export type NewPriceLevels = typeof price_levels.$inferInsert;
