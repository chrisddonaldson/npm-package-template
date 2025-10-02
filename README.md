# Template TypeScript Package

Production-ready template for a TypeScript npm package published to GitHub Packages with automated semantic releases and rich release notes.

## Features
- TypeScript with ESM + CJS builds via `tsup`
- Linting (ESLint) and formatting (Prettier)
- Tests with `vitest`
- GitHub Actions CI (lint, build, test)
- Automated releases with `semantic-release` (CHANGELOG + GitHub Releases)
- Publishes to GitHub Packages registry
- Makefile to initialize metadata (scope, name, description)

## Quick Start
```bash
cd template
npm install

# Initialize package metadata
make init APP_NAME=my-lib SCOPE=my-org DESCRIPTION="Awesome library"

# Develop (watch mode)
npm run dev

# Build
npm run compile

# Test
npm test

# Lint
npm run lint
```

## Releasing
Releases are automated via semantic-release on pushes to `main`.

Required repository secrets/permissions:
- Grant workflow permissions: `contents: write`, `packages: write`.
- No extra token is required; the workflow uses `GITHUB_TOKEN` to publish to GitHub Packages.

Commit messages should follow Conventional Commits to produce clean, categorized release notes.

## Example Usage
```ts
import { customClass } from '@your-scope/your-package';

const c = new customClass('Alice');
console.log(c.greet()); // "Hello, Alice!"
```

