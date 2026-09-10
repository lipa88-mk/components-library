# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `format` / `format:check` npm scripts (Prettier).
- `docs/` — Theming architecture documentation (Storybook: **Theming architecture**).
- README: styling section explaining the Tailwind CSS v4 requirement for consumers.
- CI: GitHub Actions workflow (`.github/workflows/deploy-storybook.yml`) that builds Storybook
  and publishes it to GitHub Pages on every push to `main`, hosted at
  <https://lipa88-mk.github.io/components-library/>.
- CI: GitHub Actions workflow (`.github/workflows/ci.yml`) running lint, typecheck,
  format check, a design-token drift check, the library build, and unit tests on every
  pull request and push to `main`.
- README: links to the hosted Storybook and CI / deploy status badges.
- `.editorconfig`; this changelog.

### Changed

- Dependency refresh within existing majors: `@typescript-eslint/*` 8.70, `@headlessui/react`
  2.2.10, `@floating-ui/react` 0.27.20, Storybook 8.6.18.
- `@types/luxon` aligned to the v2 runtime (`^2.4.0`).

## [0.0.1]

- Initial version.
