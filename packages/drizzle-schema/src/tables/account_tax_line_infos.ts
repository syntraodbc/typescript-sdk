// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  account_tax_line_infos (3 columns)

import { pgTable, integer, text, varchar } from 'drizzle-orm/pg-core';

export const account_tax_line_infos = pgTable('account_tax_line_infos', {
  _row_id: text('_row_id'),
  tax_line_id: integer('tax_line_id'),
  tax_line_name: varchar('tax_line_name', { length: 256 }),
});

export type AccountTaxLineInfos = typeof account_tax_line_infos.$inferSelect;
export type NewAccountTaxLineInfos = typeof account_tax_line_infos.$inferInsert;
