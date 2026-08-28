# Simran Pabla — Portfolio

Source code for [simranpabla.com](https://simranpabla.com), built with Astro and deployed automatically through GitHub Pages.

## Local development

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

## Checks

```bash
npm run check
npm run build
npm audit
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`. The workflow builds the static site and publishes `dist/` to GitHub Pages. The custom domain is declared in `public/CNAME`.

The full operating and recovery guide is stored outside this repository at `/home/simranjit/how-to-when-openclaw-down/simranpabla-portfolio/README.md`.

