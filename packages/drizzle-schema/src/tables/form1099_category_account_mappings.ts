// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  form1099_category_account_mappings (3 columns)

import { pgTable, boolean, text } from 'drizzle-orm/pg-core';

export const form1099_category_account_mappings = pgTable('form1099_category_account_mappings', {
  _row_id: text('_row_id'),
  is_filing1099_misc: boolean('is_filing1099_misc'),
  form_type: text('form_type'),
});

export type Form1099CategoryAccountMappings = typeof form1099_category_account_mappings.$inferSelect;
export type NewForm1099CategoryAccountMappings = typeof form1099_category_account_mappings.$inferInsert;
