
# NuxtSSE

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt 3 module to simplify using server sent events. 

NOTE: I created this for my own personal use, so it may have issues.


## Features

<!-- Highlight some of the features your module provide here -->
- useServerEventsClient() composable to handle connection to the server automatically.
- useServerEvents() composable to send events from any server api.
- Events can be sent to all connected clients, or to an individual client using a custom id

## Quick Setup

1. Add ``@brycesteve/nuxt-sse`` dependency to your project

```bash
yarn add @brycesteve/nuxt-sse 
# or 
npm install @brycesteve/nuxt-sse
#or
pnpm add @brycesteve/nuxt-sse
```

1. Add `@brycesteve/nuxt-sse` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@brycesteve/nuxt-sse'
  ]
})
```

That's it! You can now use NuxtSSE in your Nuxt app ✨

## Development

```bash
# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@brycesteve/nuxt-sse?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@brycesteve/nuxt-sse

[npm-downloads-src]: https://img.shields.io/npm/dm/@brycesteve/nuxt-sse?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@brycesteve/nuxt-sse

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
