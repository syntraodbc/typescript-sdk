// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  data_ext_defs (7 columns)

import { pgTable, boolean, integer, text, varchar } from 'drizzle-orm/pg-core';

export const data_ext_defs = pgTable('data_ext_defs', {
  _row_id: text('_row_id'),
  owner_id: varchar('owner_id', { length: 36 }),
  data_ext_id: integer('data_ext_id'),
  data_ext_name: varchar('data_ext_name', { length: 31 }),
  data_ext_list_require: boolean('data_ext_list_require'),
  data_ext_txn_require: boolean('data_ext_txn_require'),
  data_ext_format_string: text('data_ext_format_string'),
});

export type DataExtDefs = typeof data_ext_defs.$inferSelect;
export type NewDataExtDefs = typeof data_ext_defs.$inferInsert;
