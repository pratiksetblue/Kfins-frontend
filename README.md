# K-Fins Pumps — Sectioned React/Vite Conversion

This version separates the website into reusable React components:
- `src/components/common/Header.jsx`
- `src/components/common/Footer.jsx`
- `src/components/sections/<page>/*Section.jsx` — one component per top-level page section
- `src/pages/*Page.jsx` — page composition only
- `src/scripts/siteScripts.js` — original site JavaScript loader
- `public/assets/*` — original images, PDFs, CSS, fonts and JS

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Asset URLs are rooted at `/assets/...`, so they work consistently from every route.
