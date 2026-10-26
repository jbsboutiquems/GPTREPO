# Tabletrepo source copy in GPTREPO

This repository is the isolated working copy for Innie World and the GenuineIn integration.

## Source
- Upstream: https://github.com/jbsboutiquems/Tabletrepo
- Source branch inspected: `main`
- Copy method: selected source files copied into this repository; upstream was not modified.

## Copied
- `site/`: selected Life OS website pages, product page(s), and styles
- `app/`: selected Off*Script app entry points, package metadata, core React app, API client, types, and selected feature components
- `innie-world/avatar-maker-seed-2026-10-20.md`
- GenuineIn integration scaffold: `api/genuinein-profile.js` and `integrations/genuinein/README.md`

## Important limitation
This is **not yet a complete mirror of Tabletrepo**. Binary media/assets, the full Android/iOS projects, the full server/data tree, and some website/app files are not copied. Some source-file copy operations were rejected by the connected GitHub tool. Relative references to omitted assets or modules may therefore be unresolved until the remaining files are copied.

The live Vercel project `site-fix` is still linked to Tabletrepo. Nothing here changes that deployment or modifies Tabletrepo. To keep the user's repo boundary intact, do not relink or deploy this repository to the production domain without explicit approval.
