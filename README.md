# react-vitest-msw

Example of SPA using MSW for unit and E2E testing

The project was created with the initial [guide](https://vitejs.dev/guide/)

## Add vitest

Install vitest and React Testing Library

```bash
npm add -D @testing-library/react @vitest/ui jsdom @vitest/coverage-v8
```

Add the following properties to `vite.config.ts`

```typescript
/// <reference types="vitest" />
/// <reference types="vite/client" />
```

Add types to `tsconfig.json`

```json
"types": [ "vitest/globals" ]
```

And the following section to define config

```typescript
test: {
  globals: true,
  environment: 'jsdom',
  coverage: {
    provider: "v8",
    reporter: ["json", "html"]
  }
}
```

Add the following scripts for testing

```json
"test": "vitest --run",
"test:ci": "vitest run --coverage",
"test:ui": "vitest --ui --coverage"
```
