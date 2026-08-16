# Assets Needed — Light Up Production MVP

**Client drop-zone:** [`../client-intake/`](../client-intake/) (copy that folder to Google Drive as `LightUp-Website-Content`). Mapping: [`../client-intake/MAPPING.md`](../client-intake/MAPPING.md). How to ingest: `.cursor/rules/client-intake-ingest.mdc`.

Do not collect assets in `old-site-import/` anymore — that folder is WordPress salvage only.

| Slot | Intake | Live path | Status |
|------|--------|-----------|--------|
| Hero background | `client-intake/images/home/hero.jpg` | `public/images/home/hero.jpg` | Placeholder SVG by choice — no hero photo this round |
| Founder headshot | `client-intake/images/about/winnie.jpg` | `public/images/about/winnie.jpg` | Skipped; not rendered |
| Portfolio thumbs | `client-intake/images/portfolio/` | `public/images/portfolio/<id or slug>` | Ingested (custom thumbs + YouTube facades) |
| Client logos | `client-intake/images/logo/` (client put org marks here) | `public/images/clients/*.png` | Ingested: FHKI, CityU, HKICF, Chung Ying, Art-mate, Match Showroom, VETOP. DoJ / Home Affairs dropped |
| Studio logo | `client-intake/images/logo/logo.svg` | `public/images/logo/logo.svg` | Deferred to next iteration; header uses wordmark |
| Favicon | `client-intake/images/logo/favicon.ico` | `app/favicon.ico` | Default Next; deferred with studio logo |

## Contact

Intake: `client-intake/text/08-contact.txt` and `client-intake/links/socials.txt` → `content/site-settings.json`

- Phone / `phoneTel` — skipped
- WhatsApp digits for `wa.me` — skipped
- Studio social URLs — LinkedIn set; Instagram / YouTube / Facebook skipped
- Email is `info.lightup.production@gmail.com`

## Copy

- Branding + Graphic and Visual bodies ingested from `text/05-services-branding.txt` and `06-services-graphic.txt`
- Video set ingested from `videos/01.txt`–`10.txt` (file order; `FEATURED: no`)
- Non-video work ingested from `links/portfolio-01.txt`–`07.txt` (852Web3 card has no public URL)
