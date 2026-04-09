// Placeholder entry point for @syntraodbc/client.
//
// The real implementation will wrap `postgres.js` and derive its typed table
// and column surface from `@syntraodbc/drizzle-schema`. Until that ships,
// this file exports a version marker so downstream consumers can detect
// early-access builds.

export const SYNTRA_CLIENT_VERSION = '0.0.0-alpha';
