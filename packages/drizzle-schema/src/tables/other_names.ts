// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  other_names (35 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const other_names = pgTable('other_names', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 41 }),
  is_active: boolean('is_active'),
  company_name: varchar('company_name', { length: 41 }),
  salutation: varchar('salutation', { length: 15 }),
  first_name: varchar('first_name', { length: 25 }),
  middle_name: varchar('middle_name', { length: 5 }),
  last_name: varchar('last_name', { length: 25 }),
  other_name_address_addr1: varchar('other_name_address_addr1', { length: 41 }),
  other_name_address_addr2: varchar('other_name_address_addr2', { length: 41 }),
  other_name_address_addr3: varchar('other_name_address_addr3', { length: 41 }),
  other_name_address_addr4: varchar('other_name_address_addr4', { length: 41 }),
  other_name_address_addr5: varchar('other_name_address_addr5', { length: 41 }),
  other_name_address_city: varchar('other_name_address_city', { length: 31 }),
  other_name_address_state: varchar('other_name_address_state', { length: 21 }),
  other_name_address_postal_code: varchar('other_name_address_postal_code', { length: 13 }),
  other_name_address_country: varchar('other_name_address_country', { length: 31 }),
  other_name_address_note: varchar('other_name_address_note', { length: 41 }),
  other_name_address_block_addr1: varchar('other_name_address_block_addr1', { length: 41 }),
  other_name_address_block_addr2: varchar('other_name_address_block_addr2', { length: 41 }),
  other_name_address_block_addr3: varchar('other_name_address_block_addr3', { length: 41 }),
  other_name_address_block_addr4: varchar('other_name_address_block_addr4', { length: 41 }),
  other_name_address_block_addr5: varchar('other_name_address_block_addr5', { length: 41 }),
  phone: varchar('phone', { length: 21 }),
  alt_phone: varchar('alt_phone', { length: 21 }),
  fax: varchar('fax', { length: 21 }),
  email: varchar('email', { length: 1023 }),
  contact: varchar('contact', { length: 41 }),
  alt_contact: varchar('alt_contact', { length: 41 }),
  account_number: varchar('account_number', { length: 99 }),
  notes: varchar('notes', { length: 4095 }),
  external_guid: varchar('external_guid', { length: 36 }),
});

export type OtherNames = typeof other_names.$inferSelect;
export type NewOtherNames = typeof other_names.$inferInsert;
