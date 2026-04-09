# @syntraodbc/drizzle-schema

> Typed [Drizzle ORM](https://orm.drizzle.team) schema for every QuickBooks Desktop table exposed by [Syntra ODBC](https://syntraodbc.com). Full IntelliSense. Zero hand-written types.

**Status: early access.** The schema generator is being wired up. Watch the [repo](https://github.com/syntraodbc/typescript-sdk) for the first release.

## Install

```bash
npm install @syntraodbc/drizzle-schema drizzle-orm postgres
```

## Usage

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

// Full autocomplete on every QuickBooks table and column.
const unpaid = await db
  .select()
  .from(schema.invoices)
  .where(eq(schema.invoices.is_paid, false));
```

## Links

- **Landing page:** [syntraodbc.com/developers](https://syntraodbc.com/developers)
- **Drizzle integration guide:** [syntraodbc.com/integrations/drizzle](https://syntraodbc.com/integrations/drizzle)
- **Monorepo:** [github.com/syntraodbc/typescript-sdk](https://github.com/syntraodbc/typescript-sdk)
- **Download Syntra ODBC:** [syntraodbc.com/download](https://syntraodbc.com/download)

## License

[MIT](../../LICENSE). Built by [Syntra ODBC](https://syntraodbc.com).
