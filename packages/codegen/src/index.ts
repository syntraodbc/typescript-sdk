// @syntraodbc/codegen
//
// Library entry point. Exposes the core introspection API so other tools
// (the monorepo build, third-party integrations) can reuse the same logic
// that backs the `syntra-codegen` CLI.

export { introspect } from './introspect.js';
export type {
  IntrospectOptions,
  SchemaDocument,
  TableInfo,
  ColumnInfo,
} from './introspect.js';

export const SYNTRA_CODEGEN_VERSION = '0.1.0';
