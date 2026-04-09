// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  inventory_sites (28 columns)

import { pgTable, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const inventory_sites = pgTable('inventory_sites', {
  list_id: varchar('list_id', { length: 36 }),
  time_created: timestamp('time_created', { withTimezone: false, mode: 'string' }),
  time_modified: timestamp('time_modified', { withTimezone: false, mode: 'string' }),
  edit_sequence: varchar('edit_sequence', { length: 16 }),
  name: varchar('name', { length: 31 }),
  is_active: boolean('is_active'),
  parent_site_ref_list_id: varchar('parent_site_ref_list_id', { length: 36 }),
  parent_site_ref_full_name: varchar('parent_site_ref_full_name', { length: 209 }),
  is_default_site: boolean('is_default_site'),
  site_desc: varchar('site_desc', { length: 100 }),
  contact: varchar('contact', { length: 41 }),
  phone: varchar('phone', { length: 21 }),
  fax: varchar('fax', { length: 21 }),
  email: varchar('email', { length: 1023 }),
  site_address_addr1: varchar('site_address_addr1', { length: 41 }),
  site_address_addr2: varchar('site_address_addr2', { length: 41 }),
  site_address_addr3: varchar('site_address_addr3', { length: 41 }),
  site_address_addr4: varchar('site_address_addr4', { length: 41 }),
  site_address_addr5: varchar('site_address_addr5', { length: 41 }),
  site_address_city: varchar('site_address_city', { length: 31 }),
  site_address_state: varchar('site_address_state', { length: 21 }),
  site_address_postal_code: varchar('site_address_postal_code', { length: 13 }),
  site_address_country: varchar('site_address_country', { length: 31 }),
  site_address_block_addr1: varchar('site_address_block_addr1', { length: 41 }),
  site_address_block_addr2: varchar('site_address_block_addr2', { length: 41 }),
  site_address_block_addr3: varchar('site_address_block_addr3', { length: 41 }),
  site_address_block_addr4: varchar('site_address_block_addr4', { length: 41 }),
  site_address_block_addr5: varchar('site_address_block_addr5', { length: 41 }),
});

export type InventorySites = typeof inventory_sites.$inferSelect;
export type NewInventorySites = typeof inventory_sites.$inferInsert;
