# @syntraodbc/codegen

> CLI that introspects a live [Syntra ODBC](https://syntraodbc.com) instance and generates typed Drizzle schemas for your QuickBooks Desktop tables, including custom fields.

**Status: early access.** The codegen is being implemented. Watch the [repo](https://github.com/syntraodbc/typescript-sdk) for the first release.

## Usage

```bash
npx @syntraodbc/codegen \
  --host localhost \
  --port 5433 \
  --user qbconnect \
  --database quickbooks \
  --out ./src/generated
```

This connects to your local Syntra ODBC instance, reads `information_schema`, and writes a project-local Drizzle schema that mirrors your exact QuickBooks file, custom fields and all. Commit the output alongside your code and run the command again whenever your custom fields change.

## Why use this instead of `@syntraodbc/drizzle-schema`?

- **Custom fields**: stock columns ship in `@syntraodbc/drizzle-schema`, but QuickBooks custom fields live in your company file. This CLI picks them up.
- **Project-local**: the generated schema is committed to your repo, so it always matches what your QuickBooks actually exposes.
- **Pinned**: the output is a static snapshot, independent of package upgrades.

For stock tables and columns, `@syntraodbc/drizzle-schema` is simpler. Reach for this codegen when you need custom fields or a frozen snapshot.

## Links

- **Landing page:** [syntraodbc.com/developers](https://syntraodbc.com/developers)
- **Monorepo:** [github.com/syntraodbc/typescript-sdk](https://github.com/syntraodbc/typescript-sdk)
- **Download Syntra ODBC:** [syntraodbc.com/download](https://syntraodbc.com/download)

## License

[MIT](../../LICENSE). Built by [Syntra ODBC](https://syntraodbc.com).
