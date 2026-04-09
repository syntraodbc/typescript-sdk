<p align="center">
  <a href="https://syntraodbc.com">
    <img alt="Syntra ODBC" src="https://syntraodbc.com/logo-dark.svg" width="420">
  </a>
</p>

<p align="center">
  <strong>Query QuickBooks Desktop from TypeScript. With IntelliSense.</strong>
</p>

<p align="center">
  <a href="https://syntraodbc.com">Website</a> &middot;
  <a href="https://syntraodbc.com/developers">Developers</a> &middot;
  <a href="https://syntraodbc.com/download">Download</a> &middot;
  <a href="https://syntraodbc.com/getting-started/installation">Docs</a> &middot;
  <a href="https://syntraodbc.com/integrations/drizzle">Drizzle guide</a>
</p>

<p align="center">
  <a href="https://github.com/syntraodbc/typescript-sdk/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/syntraodbc/typescript-sdk?color=6ddf56"></a>
  <a href="https://github.com/syntraodbc/typescript-sdk/actions"><img alt="ci" src="https://img.shields.io/github/actions/workflow/status/syntraodbc/typescript-sdk/ci.yml?label=ci"></a>
  <a href="https://github.com/syntraodbc/typescript-sdk/stargazers"><img alt="stars" src="https://img.shields.io/github/stars/syntraodbc/typescript-sdk?style=flat&color=6ddf56"></a>
  <img alt="typescript" src="https://img.shields.io/badge/TypeScript-strict-3178c6">
  <img alt="status" src="https://img.shields.io/badge/status-early--access-fbbf24">
</p>

<p align="center">
  <img alt="Syntra ODBC IntelliSense demo" src="https://syntraodbc.com/og-default.jpg" width="720">
</p>

---

## The TypeScript SDK for Syntra ODBC

This monorepo is the official TypeScript SDK for [Syntra ODBC](https://syntraodbc.com), the ODBC driver that lets you query **QuickBooks Desktop** with standard SQL from any tool that speaks Postgres. The packages in this repo give Node.js and TypeScript developers full **IntelliSense** on every QuickBooks table and column, with zero hand-written schemas.

If you have ever tried to query QuickBooks Desktop from code, you know the story: the SDK is COM-only, the field names are undocumented, and every integration starts with a week of reverse engineering. [Syntra ODBC](https://syntraodbc.com) exposes QuickBooks as a Postgres-wire server so you can connect with any `pg` client, any ORM, any BI tool. This SDK goes one step further: it ships the schema as strongly typed TypeScript so your editor knows the shape of `customers`, `invoices`, `invoice_lines`, and 100+ other QuickBooks tables before you even run the query.

Built and maintained by the team at [Syntra ODBC](https://syntraodbc.com). Auto-synced with every driver release. MIT licensed.

## Packages

| Package | What it does | Status |
|---|---|---|
| [`@syntraodbc/drizzle-schema`](./packages/drizzle-schema) | Pre-built, typed [Drizzle ORM](https://orm.drizzle.team) schema for every stock QuickBooks table. Drop-in `import * as schema from '@syntraodbc/drizzle-schema'`. | Early access |
| [`@syntraodbc/client`](./packages/client) | Zero-config typed client wrapping `postgres.js`. Autocomplete on table names, column names, and return rows. | Early access |
| [`@syntraodbc/codegen`](./packages/codegen) | CLI that introspects a live Syntra instance and regenerates types for custom fields and user-defined columns. | Early access |

## Install

```bash
# Drizzle ORM users
npm install @syntraodbc/drizzle-schema drizzle-orm postgres

# Prefer a lightweight client?
npm install @syntraodbc/client

# Regenerate types for custom fields
npx @syntraodbc/codegen --host localhost --port 5433 --user qbconnect --database quickbooks --out ./src/generated
```

## Quick start

```ts
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import * as schema from '@syntraodbc/drizzle-schema';

const db = drizzle(
  postgres('postgres://qbconnect@localhost:5433/quickbooks', {
    password: process.env.SYNTRA_PASSWORD,
  }),
  { schema }
);

// Full IntelliSense. Zero hand-written types.
const unpaid = await db
  .select()
  .from(schema.invoices)
  .where(eq(schema.invoices.is_paid, false));
```

That is the whole setup. No `drizzle-kit introspect` step, no schema file to maintain, no guessing column names. Your editor will autocomplete every table, every column, every return row.

For a full walkthrough with JOINs, custom queries, and a hosted IntelliSense demo, see [syntraodbc.com/developers](https://syntraodbc.com/developers).

## Features

- **Full IntelliSense** on every QuickBooks table and every column, right out of the box
- **Auto-synced** with every [Syntra ODBC](https://syntraodbc.com/download) release so new tables and fields land in the package automatically
- **Zero config**: install, import, query. No post-install step, no code generation required for stock tables
- **Custom fields supported** via the `@syntraodbc/codegen` CLI which introspects your live Syntra instance
- **Open source, MIT licensed**. Fork it, audit it, contribute
- **Type-safe return rows** via Drizzle's `$inferSelect` and `$inferInsert`
- **Small footprint**: peer deps only (`drizzle-orm`, `postgres`), no runtime bloat

## Requirements

- **Node.js** 18 or later
- **Windows** 10, Windows 11, or Windows Server 2019 or later (where Syntra ODBC runs)
- **QuickBooks Desktop** (Pro, Premier, or Enterprise)
- **[Syntra ODBC](https://syntraodbc.com/download)** installed and running on `localhost:5433` (or a remote Syntra instance reachable over the network)

This SDK does **not** work with QuickBooks Online. QBO has its own REST API and a different data model. If that is what you need, check Intuit's official docs instead.

## Documentation

Full product documentation lives at **[syntraodbc.com](https://syntraodbc.com)**. Directly relevant pages:

- **[syntraodbc.com/developers](https://syntraodbc.com/developers)** - the TypeScript SDK landing page with an animated IntelliSense demo
- **[Drizzle integration guide](https://syntraodbc.com/integrations/drizzle)** - end-to-end walkthrough
- **[Node.js integration guide](https://syntraodbc.com/integrations/nodejs)** - raw `pg` usage for reference
- **[Tables reference](https://syntraodbc.com/tables)** - the full list of QuickBooks tables Syntra ODBC exposes
- **[First connection guide](https://syntraodbc.com/getting-started/first-connection)** - how to get Syntra ODBC running on your machine

## How this compares

| | `@syntraodbc/drizzle-schema` | `drizzle-kit introspect` | Hand-written schemas |
|---|---|---|---|
| IntelliSense out of the box | Yes | After an introspect step | After writing types yourself |
| Covers all 100+ QB tables | Yes | Yes (eventually) | Only what you write |
| Handles custom fields | Via `@syntraodbc/codegen` | Yes | Yes, manually |
| Updates with new QB tables | Automatic on `npm update` | Manual re-introspect | Manual |
| Works without a live Syntra | Yes | No | Yes |
| Setup time | Seconds | Minutes | Hours to days |

## FAQ

### Can I use Drizzle ORM with QuickBooks Desktop?

Yes. That is exactly what this package is for. Install `@syntraodbc/drizzle-schema` alongside `drizzle-orm` and `postgres`, point Drizzle at your Syntra ODBC instance, and you have fully typed access to every QuickBooks table. See the [Drizzle integration guide](https://syntraodbc.com/integrations/drizzle) for a full walkthrough.

### How do I query QuickBooks Desktop from Node.js?

You need two things: [Syntra ODBC](https://syntraodbc.com/download) running on the machine that has QuickBooks, and a Postgres client in your Node.js app (such as `pg` or `postgres.js`). This SDK sits on top of that and gives you type-safe access. See the [Node.js integration guide](https://syntraodbc.com/integrations/nodejs) for raw client usage, or the [developers page](https://syntraodbc.com/developers) for the SDK walkthrough.

### Does this work with QuickBooks Online?

No. Syntra ODBC and this SDK target **QuickBooks Desktop** only. QuickBooks Online has a different data model, a REST API instead of SQL, and no ODBC interface. If you need QBO, Intuit provides their own SDK.

### How is this different from the QuickBooks SDK?

Intuit's QuickBooks Desktop SDK is a COM-only XML request/response API with no type definitions, no query language, and Windows-only bindings. Syntra ODBC turns QuickBooks into a SQL-accessible Postgres-wire server so you can use modern tooling: `psql`, `pg`, `drizzle-orm`, `postgres.js`, Prisma, BI tools, everything. This SDK adds the TypeScript types on top.

### Where do the types come from?

They are generated from the canonical QuickBooks schema that ships with each Syntra ODBC release. When a new version of Syntra adds a table or column, this repo's schema-sync workflow picks up the change automatically and opens a pull request. That means the types you get from `npm install` are always in sync with the driver you downloaded.

### Can I use this with custom fields?

Yes. Stock QuickBooks columns are shipped in `@syntraodbc/drizzle-schema` for zero-config use. For project-specific custom fields, run [`@syntraodbc/codegen`](./packages/codegen) against your live Syntra instance to generate a project-local typed schema that includes your custom columns.

### Is there a Prisma adapter?

Not yet. Drizzle was the first target because of its lightweight footprint and first-class TypeScript inference. A Prisma package may come later. Open a GitHub issue if that is important to you.

### Is this production ready?

The packages are early access today. The core schema is covered by the Syntra ODBC test suite, but version numbers are still 0.x and breaking changes can happen. Pin exact versions in production until we hit 1.0.

## Contributing

Issues and pull requests are welcome. For significant changes, open an issue first to discuss the direction.

- **Bug reports**: please include your Syntra ODBC version, your QuickBooks edition, and a minimal repro
- **Feature requests**: tell us what you are trying to build and we will help figure out the right approach
- **Schema gaps**: if a stock QuickBooks table is missing a column, the fix probably belongs in Syntra ODBC itself, not in this repo. File an issue and we will route it

## License

[MIT](./LICENSE). Built by the team at **[Syntra ODBC](https://syntraodbc.com)**.

---

<p align="center">
  <a href="https://syntraodbc.com">
    <img src="https://syntraodbc.com/logo-dark.svg" width="140" alt="Syntra ODBC">
  </a>
</p>
<p align="center">
  <sub>Syntra ODBC. The fastest way to query QuickBooks Desktop with SQL.</sub>
</p>
<p align="center">
  <sub><a href="https://syntraodbc.com">Website</a> &middot; <a href="https://syntraodbc.com/developers">Developers</a> &middot; <a href="https://syntraodbc.com/download">Download</a> &middot; <a href="https://syntraodbc.com/getting-started/installation">Docs</a></sub>
</p>
