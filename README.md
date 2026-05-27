# template-cleaning-services

A standalone SEOJack website template. Lean Next.js 16 app (App Router, React 19,
scoped CSS — no Tailwind/Convex/Clerk).

- **Live:** https://cleaning-services.templates.seojack.website
- **Registry id:** `tpl_cleaning_services`
- **Showcased on:** https://seojack.net/templates/tpl_cleaning_services

## Develop

```powershell
npm install
npm run dev          # http://localhost:3000
```

## Anatomy

| File | Role |
|------|------|
| `app/layout.tsx` | SEO metadata, canonical, OpenGraph/Twitter, JSON-LD, theme color |
| `app/page.tsx` | renders `<DemoBody />` |
| `app/DemoBody.tsx` | `'use client'` — font link + scoped CSS inject + sections |
| `app/styles.ts` | one scoped CSS literal (every selector prefixed `.cleaning-services-demo`) |
| `app/data.ts` | typed, realistic content |
| `app/primitives.tsx` | shared motion primitives (Reveal, Headline, Magnetic, Marquee) |
| `app/SeojackCredit.tsx` | footer credit / inbound link (stripped when used as a builder seed) |
| `app/sitemap.ts`, `app/robots.ts` | indexable for organic discovery |

## Deploy

Own GitHub repo (`seojack-templates/template-cleaning-services`) + own Vercel project,
production domain `https://cleaning-services.templates.seojack.website`. See `docs/templates-github-org.md`.