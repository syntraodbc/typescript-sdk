// AUTO-GENERATED. DO NOT EDIT.
// Regenerate with: pnpm --filter @syntraodbc/drizzle-schema run generate
//
// The @syntraodbc/drizzle-schema package exports a typed Drizzle ORM schema
// for every QuickBooks Desktop table exposed by Syntra ODBC.
//
//   import * as schema from '@syntraodbc/drizzle-schema';
//   const db = drizzle(postgres(url), { schema });
//
// See https://syntraodbc.com/developers for the full guide.

export * from './tables/account_tax_line_infos.js';
export * from './tables/accounts.js';
export * from './tables/alerts.js';
export * from './tables/ar_refund_credit_cards.js';
export * from './tables/bill_payment_checks.js';
export * from './tables/bill_payment_credit_cards.js';
export * from './tables/bill_to_pays.js';
export * from './tables/billing_rates.js';
export * from './tables/bills.js';
export * from './tables/build_assemblies.js';
export * from './tables/charges.js';
export * from './tables/checks.js';
export * from './tables/classes.js';
export * from './tables/companies.js';
export * from './tables/company_activities.js';
export * from './tables/component_item_lines.js';
export * from './tables/credit_card_charges.js';
export * from './tables/credit_card_credits.js';
export * from './tables/credit_memo_line_groups.js';
export * from './tables/credit_memo_lines.js';
export * from './tables/credit_memos.js';
export * from './tables/currencies.js';
export * from './tables/customer_msgs.js';
export * from './tables/customer_types.js';
export * from './tables/customers.js';
export * from './tables/data_ext_defs.js';
export * from './tables/date_driven_terms.js';
export * from './tables/deposit_lines.js';
export * from './tables/deposits.js';
export * from './tables/discount_lines.js';
export * from './tables/employee_defaults.js';
export * from './tables/employees.js';
export * from './tables/estimate_line_groups.js';
export * from './tables/estimate_lines.js';
export * from './tables/estimates.js';
export * from './tables/expense_lines.js';
export * from './tables/form1099_category_account_mappings.js';
export * from './tables/hosts.js';
export * from './tables/inventory_adjustment_lines.js';
export * from './tables/inventory_adjustments.js';
export * from './tables/inventory_sites.js';
export * from './tables/invoice_line_groups.js';
export * from './tables/invoice_lines.js';
export * from './tables/invoices.js';
export * from './tables/item_assemblies_can_builds.js';
export * from './tables/item_discounts.js';
export * from './tables/item_fixed_assets.js';
export * from './tables/item_group_lines.js';
export * from './tables/item_groups.js';
export * from './tables/item_inventories.js';
export * from './tables/item_inventory_assemblies.js';
export * from './tables/item_lines.js';
export * from './tables/item_non_inventories.js';
export * from './tables/item_other_charges.js';
export * from './tables/item_payments.js';
export * from './tables/item_receipts.js';
export * from './tables/item_sales_tax_groups.js';
export * from './tables/item_sales_taxes.js';
export * from './tables/item_services.js';
export * from './tables/item_sites.js';
export * from './tables/item_subtotals.js';
export * from './tables/job_types.js';
export * from './tables/journal_entries.js';
export * from './tables/journal_entry_lines.js';
export * from './tables/leads.js';
export * from './tables/list_deleteds.js';
export * from './tables/other_names.js';
export * from './tables/paycheck_lines.js';
export * from './tables/paychecks.js';
export * from './tables/payment_methods.js';
export * from './tables/payroll_item_non_wages.js';
export * from './tables/payroll_item_wages.js';
export * from './tables/payroll_last_periods.js';
export * from './tables/payroll_liability_adjustment_lines.js';
export * from './tables/payroll_liability_adjustments.js';
export * from './tables/payroll_liability_check_lines.js';
export * from './tables/payroll_liability_checks.js';
export * from './tables/payroll_prior_payment_lines.js';
export * from './tables/payroll_prior_payments.js';
export * from './tables/payroll_year_to_date_adjustment_lines.js';
export * from './tables/payroll_year_to_date_adjustments.js';
export * from './tables/preferences.js';
export * from './tables/price_levels.js';
export * from './tables/purchase_order_line_groups.js';
export * from './tables/purchase_order_lines.js';
export * from './tables/purchase_orders.js';
export * from './tables/receive_payment_to_deposits.js';
export * from './tables/receive_payments.js';
export * from './tables/sales_order_line_groups.js';
export * from './tables/sales_order_lines.js';
export * from './tables/sales_orders.js';
export * from './tables/sales_receipt_line_groups.js';
export * from './tables/sales_receipt_lines.js';
export * from './tables/sales_receipts.js';
export * from './tables/sales_reps.js';
export * from './tables/sales_tax_codes.js';
export * from './tables/sales_tax_lines.js';
export * from './tables/sales_tax_payable_lines.js';
export * from './tables/sales_tax_payables.js';
export * from './tables/sales_tax_payment_check_lines.js';
export * from './tables/sales_tax_payment_checks.js';
export * from './tables/sales_tax_return_lines.js';
export * from './tables/sales_tax_returns.js';
export * from './tables/ship_methods.js';
export * from './tables/shipping_lines.js';
export * from './tables/standard_terms.js';
export * from './tables/templates.js';
export * from './tables/time_trackings.js';
export * from './tables/to_dos.js';
export * from './tables/transactions.js';
export * from './tables/transfer_inventories.js';
export * from './tables/transfer_inventory_lines.js';
export * from './tables/transfers.js';
export * from './tables/txn_deleteds.js';
export * from './tables/unit_of_measure_sets.js';
export * from './tables/vehicle_mileages.js';
export * from './tables/vehicles.js';
export * from './tables/vendor_credits.js';
export * from './tables/vendor_types.js';
export * from './tables/vendors.js';
export * from './tables/workers_comp_codes.js';

/**
 * Version of the upstream QuickBooks schema this build was generated from.
 */
export const SYNTRA_SCHEMA_VERSION = '72eba6a2f09bfe8dac7d93c861c22fcd214f080057508c900d3a76cd1a1698be';

/**
 * When the schema was introspected from the live Syntra ODBC instance.
 */
export const SYNTRA_SCHEMA_GENERATED_AT = '2026-04-09T04:13:27.609Z';

/**
 * Total number of QuickBooks tables exposed by this build.
 */
export const SYNTRA_TABLE_COUNT = 121;

/**
 * Total number of columns across all tables.
 */
export const SYNTRA_COLUMN_COUNT = 2718;

/**
 * The full list of stock QuickBooks table names exposed by Syntra ODBC.
 * Useful for building pick-lists, validators, or runtime reflection.
 */
export const SYNTRA_TABLE_NAMES = [
  'account_tax_line_infos',
  'accounts',
  'alerts',
  'ar_refund_credit_cards',
  'bill_payment_checks',
  'bill_payment_credit_cards',
  'bill_to_pays',
  'billing_rates',
  'bills',
  'build_assemblies',
  'charges',
  'checks',
  'classes',
  'companies',
  'company_activities',
  'component_item_lines',
  'credit_card_charges',
  'credit_card_credits',
  'credit_memo_line_groups',
  'credit_memo_lines',
  'credit_memos',
  'currencies',
  'customer_msgs',
  'customer_types',
  'customers',
  'data_ext_defs',
  'date_driven_terms',
  'deposit_lines',
  'deposits',
  'discount_lines',
  'employee_defaults',
  'employees',
  'estimate_line_groups',
  'estimate_lines',
  'estimates',
  'expense_lines',
  'form1099_category_account_mappings',
  'hosts',
  'inventory_adjustment_lines',
  'inventory_adjustments',
  'inventory_sites',
  'invoice_line_groups',
  'invoice_lines',
  'invoices',
  'item_assemblies_can_builds',
  'item_discounts',
  'item_fixed_assets',
  'item_group_lines',
  'item_groups',
  'item_inventories',
  'item_inventory_assemblies',
  'item_lines',
  'item_non_inventories',
  'item_other_charges',
  'item_payments',
  'item_receipts',
  'item_sales_tax_groups',
  'item_sales_taxes',
  'item_services',
  'item_sites',
  'item_subtotals',
  'job_types',
  'journal_entries',
  'journal_entry_lines',
  'leads',
  'list_deleteds',
  'other_names',
  'paycheck_lines',
  'paychecks',
  'payment_methods',
  'payroll_item_non_wages',
  'payroll_item_wages',
  'payroll_last_periods',
  'payroll_liability_adjustment_lines',
  'payroll_liability_adjustments',
  'payroll_liability_check_lines',
  'payroll_liability_checks',
  'payroll_prior_payment_lines',
  'payroll_prior_payments',
  'payroll_year_to_date_adjustment_lines',
  'payroll_year_to_date_adjustments',
  'preferences',
  'price_levels',
  'purchase_order_line_groups',
  'purchase_order_lines',
  'purchase_orders',
  'receive_payment_to_deposits',
  'receive_payments',
  'sales_order_line_groups',
  'sales_order_lines',
  'sales_orders',
  'sales_receipt_line_groups',
  'sales_receipt_lines',
  'sales_receipts',
  'sales_reps',
  'sales_tax_codes',
  'sales_tax_lines',
  'sales_tax_payable_lines',
  'sales_tax_payables',
  'sales_tax_payment_check_lines',
  'sales_tax_payment_checks',
  'sales_tax_return_lines',
  'sales_tax_returns',
  'ship_methods',
  'shipping_lines',
  'standard_terms',
  'templates',
  'time_trackings',
  'to_dos',
  'transactions',
  'transfer_inventories',
  'transfer_inventory_lines',
  'transfers',
  'txn_deleteds',
  'unit_of_measure_sets',
  'vehicle_mileages',
  'vehicles',
  'vendor_credits',
  'vendor_types',
  'vendors',
  'workers_comp_codes',
] as const;

export type SyntraTableName = (typeof SYNTRA_TABLE_NAMES)[number];
