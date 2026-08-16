# LightUp Production Studio (site)

Next.js static-export brochure site for GitHub Pages.

## Local development

```bash
cd lightup/site
npm run dev      # http://127.0.0.1:3006
npm run preview  # build + serve static out/ on http://127.0.0.1:3007
```

Ports are registered in `LOCAL_DEV_REGISTRY.md` (3006 / 3007). Do not use 3000–3005.

## Content & assets

- Copy: `content/site-settings.json`, `content/home.json`, `content/portfolio.json`
- Client drop-zone (Google Drive pack): `../client-intake/` — start at `00-START-HERE.txt`
- Mapping + ingest: `../client-intake/MAPPING.md`, `../.cursor/rules/client-intake-ingest.mdc`
- Swap images: see `ASSETS_NEEDED.md`
- Public repo safety: `.cursor/rules/public-repo-safety.mdc`

## Deploy

Push to `main` on `lightup-production-studio/lightup-production-studio.github.io` (GitHub Actions → Pages).
