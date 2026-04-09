// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// Source: schemas/quickbooks.json
// Table:  companies (54 columns)

import { pgTable, boolean, date, text, varchar } from 'drizzle-orm/pg-core';

export const companies = pgTable('companies', {
  _row_id: text('_row_id'),
  is_sample_company: boolean('is_sample_company'),
  company_name: varchar('company_name', { length: 59 }),
  legal_company_name: varchar('legal_company_name', { length: 59 }),
  address_addr1: varchar('address_addr1', { length: 41 }),
  address_addr2: varchar('address_addr2', { length: 41 }),
  address_addr3: varchar('address_addr3', { length: 41 }),
  address_addr4: varchar('address_addr4', { length: 41 }),
  address_addr5: varchar('address_addr5', { length: 41 }),
  address_city: varchar('address_city', { length: 31 }),
  address_state: varchar('address_state', { length: 21 }),
  address_postal_code: varchar('address_postal_code', { length: 13 }),
  address_country: varchar('address_country', { length: 31 }),
  address_note: varchar('address_note', { length: 41 }),
  address_block_addr1: varchar('address_block_addr1', { length: 41 }),
  address_block_addr2: varchar('address_block_addr2', { length: 41 }),
  address_block_addr3: varchar('address_block_addr3', { length: 41 }),
  address_block_addr4: varchar('address_block_addr4', { length: 41 }),
  address_block_addr5: varchar('address_block_addr5', { length: 41 }),
  legal_address_addr1: varchar('legal_address_addr1', { length: 41 }),
  legal_address_addr2: varchar('legal_address_addr2', { length: 41 }),
  legal_address_addr3: varchar('legal_address_addr3', { length: 41 }),
  legal_address_addr4: varchar('legal_address_addr4', { length: 41 }),
  legal_address_addr5: varchar('legal_address_addr5', { length: 41 }),
  legal_address_city: varchar('legal_address_city', { length: 31 }),
  legal_address_state: varchar('legal_address_state', { length: 21 }),
  legal_address_postal_code: varchar('legal_address_postal_code', { length: 13 }),
  legal_address_country: varchar('legal_address_country', { length: 31 }),
  legal_address_note: varchar('legal_address_note', { length: 41 }),
  company_address_for_customer_addr1: varchar('company_address_for_customer_addr1', { length: 41 }),
  company_address_for_customer_addr2: varchar('company_address_for_customer_addr2', { length: 41 }),
  company_address_for_customer_addr3: varchar('company_address_for_customer_addr3', { length: 41 }),
  company_address_for_customer_addr4: varchar('company_address_for_customer_addr4', { length: 41 }),
  company_address_for_customer_addr5: varchar('company_address_for_customer_addr5', { length: 41 }),
  company_address_for_customer_city: varchar('company_address_for_customer_city', { length: 31 }),
  company_address_for_customer_state: varchar('company_address_for_customer_state', { length: 21 }),
  company_address_for_customer_postal_code: varchar('company_address_for_customer_postal_code', { length: 13 }),
  company_address_for_customer_country: varchar('company_address_for_customer_country', { length: 31 }),
  company_address_for_customer_note: varchar('company_address_for_customer_note', { length: 41 }),
  company_address_block_for_customer_addr1: varchar('company_address_block_for_customer_addr1', { length: 41 }),
  company_address_block_for_customer_addr2: varchar('company_address_block_for_customer_addr2', { length: 41 }),
  company_address_block_for_customer_addr3: varchar('company_address_block_for_customer_addr3', { length: 41 }),
  company_address_block_for_customer_addr4: varchar('company_address_block_for_customer_addr4', { length: 41 }),
  company_address_block_for_customer_addr5: varchar('company_address_block_for_customer_addr5', { length: 41 }),
  phone: varchar('phone', { length: 51 }),
  fax: varchar('fax', { length: 51 }),
  email: varchar('email', { length: 1023 }),
  company_email_for_customer: text('company_email_for_customer'),
  company_web_site: varchar('company_web_site', { length: 128 }),
  company_type: varchar('company_type', { length: 255 }),
  ein: varchar('ein', { length: 20 }),
  ssn: varchar('ssn', { length: 11 }),
  accountant_copy_accountant_copy_exists: boolean('accountant_copy_accountant_copy_exists'),
  accountant_copy_dividing_date: date('accountant_copy_dividing_date'),
});

export type Companies = typeof companies.$inferSelect;
export type NewCompanies = typeof companies.$inferInsert;
