# ruth-mutua-portfolio

Personal site of Ruth Mutua: platform & cloud engineer.

Built with [Astro](https://astro.build) as a fully static site, with one tiny script for scroll animations.

## Structure

- `src/data/capabilities.ts` holds the capability cards (title, blurb, tools, optional related article)
- `src/data/writing.ts` lists the articles (newest first)
- `src/data/credentials.ts` holds certifications, skill badges and open-source projects
- `src/data/stack.ts` holds the tools grid and headline stats
- `src/components/Cover.astro` draws the capability illustrations (inline SVG; the GitHub profile cards are extracted from the build)
- `src/components/OffTheClock.astro` contains the personal chapters (aviation, GIAA, F1, golf, coffee)
- `src/assets/portrait.jpg` is the About photo
- `src/pages/` holds the routes: `/` (one-page site) and the 404 page
- `src/styles/global.css` contains the design tokens, with light and dark mode via `prefers-color-scheme`

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

> **Adding a dependency?** Regenerate the lock file from scratch (`rm -rf node_modules package-lock.json && npm install`). Incremental installs with older npm drop some optional WebAssembly packages, which breaks `npm ci` in CI and on Cloudflare.

## Deploy

- **Hosting:** two free mirrors of the same build, both deployed on every push to `main`:
  - **GitHub Pages** at https://ruth-mutua.github.io (primary and canonical, via `.github/workflows/pages.yml`)
  - **Cloudflare Pages** at https://ruth-mutua.pages.dev (build `npm run build`, output `dist/`)
- `wrangler.jsonc` is only for an optional Cloudflare Workers deploy.
- **CI:** GitHub Actions builds every push and pull request (`.github/workflows/ci.yml`).
- **Domain:** to be added later, with DNS managed in Terraform.
