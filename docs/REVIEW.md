# Tafiti revamp: evidence and review

## Professional approach requested

1. Define the visitor tasks and success criteria before visual styling. Prioritise assessing work, requesting a service and exploring collaboration. Audit each journey through content, navigation, feedback and contact.
2. Start with raw rendered pages, HTML, original assets, project records, enquiry logs, analytics and observed task sessions. Available evidence here is the public site, its original HTML/assets and the empty destination GitHub repository. No analytics, backend source, enquiry records or user interviews were available.
3. Apply a content inventory, task-based heuristic review, responsive design system, semantic HTML, progressive enhancement, keyboard testing, asset optimisation, link verification and measurable SEO checks. Tools used: public web retrieval, live browser inspection, HTML extraction, Pillow asset conversion, Node's test runner and GitHub.
4. Independent evidence should include successful first-time visitor tasks, actual enquiry delivery, accessible operation and measured performance. Automated tests alone do not demonstrate commercial conversion or real-user usability.

## Rewritten implementation brief

Audit and revamp Tafiti Research & Innovation Hub around three visitor tasks: assess its work, request a service, and explore collaboration. Start from the live pages and original content and assets. Identify friction and distinguish verified facts from assumptions. Build a distinctive, restrained, mobile-first site that retains Tafiti's identity, makes its work concrete, and gives each task a clear path. Preserve access to existing learning and client services. Use accessible components, lightweight assets, honest form states, and purposeful motion. Validate responsive layouts, keyboard use, links, and interactions; document anything requiring backend access or real-user testing. Push the tested implementation and handoff notes to Maich1234/tafiti-hub. Include technical SEO and preserve a migration path for existing URLs.

## Findings and resulting choices

- Live opening viewport: a large logo over a background image occupies most of the viewport without a visible statement of purpose or primary action. Replaced with a legible proposition, work/service actions and a real portfolio visual.
- Nine navigation entries compete at the top. New primary navigation focuses on work, services, about, journal and contact. Existing portal and learning remain accessible in footer and contact page.
- Carousel-heavy homepage makes evidence harder to scan. Selected projects, capabilities and journal updates are visible without carousel controls.
- Contact page shows +254 719 736 872 while the shared footer shows +254 701 326554. No phone number is published in the revamp until the owner confirms the authoritative one. The consistent public email remains available.
- Published headline counts and testimonials are not independently substantiated by the available records. Omitted rather than embellished.
- Original HTML contains actual project imagery and named work that the search extraction did not fully expose. Extracted the original source and reused selected assets locally with WebP compression.
- `img/123.jpg`, used in the existing community section, is an aerospace stock image. It is not used in the revamp; the community section instead uses the site's documented training photograph.
- Projects distinguish published descriptions from verified deployment/results. No invented traction, funding, certification or performance results.
- The destination repository was empty. This is a new frontend implementation, not a migration of an existing backend or CMS.

## Scope and design

Warm off-white, navy and cyan; editorial typography; generous but responsive spacing; real portfolio imagery; restrained entrance choreography, staggered project reveals, image zoom and directional arrow feedback; reduced-motion support. Ten server-independent HTML pages. Core content and links work without JavaScript. JavaScript adds menu state, project filtering and local enquiry drafts. No autoplay video, artificial loading sequence, scroll hijacking or decorative WebGL.

## SEO implementation

- Unique page titles, descriptions, one H1, readable URLs and static HTML.
- Production canonical origin configurable through SITE_URL; default matches the current www domain.
- Organization and WebPage JSON-LD includes only supported identity/location/email facts. No invented aggregate ratings.
- XML sitemap, robots.txt, social metadata, 1200×630 social card, favicon, legacy URL redirects and real 404 template.
- Explicit image dimensions, compressed local assets, priority hero image, lazy loading below the fold, deferred JS.
- Preview noindex via PREVIEW=true. Before domain launch: turn preview mode off, validate canonical redirects, submit sitemap in Google Search Console and confirm ownership. Rankings are not guaranteed.

## Validation and honest limits

Run `npm run build && npm test`. Tests cover metadata/JSON-LD, internal links and fragments, asset existence, image dimensions, asset budget, sitemap coverage, project filter state and enquiry-draft encoding. `node --check app.js` checks syntax.

Manual release checks: 360/390/768/1024/1440px widths, 200% zoom, keyboard-only menu and form, visible focus, Escape dismissal, reduced motion, email handoff, real device accessibility. Target LCP ≤2.5s, CLS ≤0.1 and INP ≤200ms at the 75th percentile of production traffic. These are acceptance targets, not measured claims. Run Lighthouse/axe and collect field data on the chosen hosting environment before calling these targets achieved.

First-time visitor acceptance: at least 4 of 5 representative visitors can identify what Tafiti does, find a relevant project and prepare a suitable enquiry unaided. This study has not been run.

## Before replacing the live site

- Confirm source asset rights, current team roles, project descriptions and the authoritative phone number.
- Preserve or migrate the existing news archive, team archive, portal and e-learning endpoints. Links currently point to those live services. The frontend cannot replace their authentication/data flows.
- Set up and test a real enquiry delivery backend only if needed; keep honest delivery/error states, spam controls and privacy disclosures.
- Validate redirects against the complete production URL inventory and backlinks, not just the seven known legacy paths provided here.
- Verify responsive/accessibility/performance on real hardware, then monitor enquiries and search indexing after launch.

## Sources inspected on 20 October 2026

- https://www.tafitirnihub.co.ke/ — browser rendering and raw HTML, current projects, news and team records.
- https://www.tafitirnihub.co.ke/projects.html — published project descriptions.
- https://www.tafitirnihub.co.ke/services.html — service catalogue.
- https://www.tafitirnihub.co.ke/contact.html — contact journey and inconsistent phone numbers.

Asset provenance is recorded in `docs/asset-sources.json`. Source publication is evidence of attribution, not independent proof of a project's outcomes.

## Motion refinement

Opening content enters in a short stagger. Selected sections and cards reveal once on entry using IntersectionObserver, with no scroll listener. Images and directional arrows respond on hover/focus. Reduced-motion preference disables motion; observer fallback restores all content after seven seconds. Content remains visible without JavaScript.
