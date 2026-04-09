# @syntraodbc/client

> Zero-config typed TypeScript client for [Syntra ODBC](https://syntraodbc.com). A thin strongly-typed wrapper over [`postgres.js`](https://github.com/porsager/postgres) with IntelliSense on every QuickBooks Desktop table and column.

**Status: early access.** The client surface is being built out. Watch the [repo](https://github.com/syntraodbc/typescript-sdk) for the first release.

## Install

```bash
npm install @syntraodbc/client
```

## Usage

```ts
import { createClient } from '@syntraodbc/client';

const syntra = createClient({ password: process.env.SYNTRA_PASSWORD });

// Table names and columns autocomplete from the live QuickBooks schema.
const rows = await syntra
  .table('invoices')
  .select('ref_number', 'balance_remaining', 'due_date')
  .where({ is_paid: false });
```

Default connection options match the documented Syntra setup: `host: 'localhost'`, `port: 5433`, `database: 'quickbooks'`, `user: 'qbconnect'`.

## Links

- **Landing page:** [syntraodbc.com/developers](https://syntraodbc.com/developers)
- **Node.js integration guide:** [syntraodbc.com/integrations/nodejs](https://syntraodbc.com/integrations/nodejs)
- **Monorepo:** [github.com/syntraodbc/typescript-sdk](https://github.com/syntraodbc/typescript-sdk)
- **Download Syntra ODBC:** [syntraodbc.com/download](https://syntraodbc.com/download)

## License

[MIT](../../LICENSE). Built by [Syntra ODBC](https://syntraodbc.com).
