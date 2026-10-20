# Tafiti Research & Innovation Hub

A responsive, content-led revamp of Tafiti's public website. Ten statically rendered pages, individual project pages, a filterable portfolio, service enquiry drafts, accessible mobile navigation and technical SEO. No runtime dependencies or frontend framework required.

## Run

Requires Node.js 20+.

```sh
npm run build
npm test
npm start
```

Open http://localhost:3000. Source lives in `scripts/build.mjs`, `styles.css`, `app.js` and `assets/`; generated output is `dist/`.

## Deployment & SEO

Vercel configuration is provided; Cloudflare Pages and Netlify can serve `dist/` with `npm run build`. Set `SITE_URL` to the final canonical origin, without a trailing slash. Default: `https://www.tafitirnihub.co.ke`. Set `PREVIEW=true` on review deployments to emit noindex/nofollow and disallow crawling. Use `PREVIEW=false` for the production domain.

Build generates individual titles/descriptions, canonical links, Open Graph and Twitter cards, a locally hosted social card, Organization and WebPage JSON-LD, sitemap.xml, robots.txt, a 404 page, and legacy .html redirects. Vercel reads `vercel.json`; Pages/Netlify use `_redirects` and `_headers`.

No live domain has been switched by this implementation. Do not replace existing portal, learning or content infrastructure without a migration plan. Existing news, learning, portal and full team links intentionally point to the current Tafiti domain. Preserve those legacy endpoints or migrate their backends before moving the apex domain.

## Enquiries

The contact form validates inputs and prepares a reviewable email draft. It does **not** send, save or claim delivery. A production form backend, spam controls, delivery monitoring and an updated privacy notice are required before changing this behaviour.

See `docs/REVIEW.md` for audit, rewritten brief, validation, known limits and launch criteria. Original imagery and text are from the existing Tafiti website, not proof of independent verification. Confirm publishing rights and project claims with Tafiti before launching on its production domain.
