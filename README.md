# Storyard

A premium storage marketplace for the Isle of Man. Built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This project is configured for static export (`output: "export"`). The static files are generated in the `dist` folder.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repo on [Vercel](https://vercel.com).
3. Vercel will auto-detect Next.js and deploy with zero config.
4. Optional: add environment variables if you connect a backend later.

Note: because `next.config.ts` uses `output: "export"`, Vercel will serve the static export. If you later want SSR or API routes on Vercel, remove `output: "export"` from `next.config.ts`.

## Deploy to Hostinger (static hosting)

1. Run `npm run build` locally or in CI.
2. Upload the contents of the `dist` folder to your Hostinger public_html directory via FTP or the Hostinger file manager.
3. Ensure `.htaccess` or equivalent is configured for SPA-style routing if needed (most pages are static HTML files, so this is minimal).

Note: Hostinger shared hosting supports static sites natively. If you later add a Node.js backend, you will need Hostinger VPS or a platform like DigitalOcean.

## Firebase Hosting (static)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase init hosting`
3. Set the public directory to `dist`
4. Run `npm run build && firebase deploy`

## Backend / forms / email next steps

Forms currently post to `/api/quote`, which is removed for static-export compatibility. To make forms functional in production:

1. **Vercel deployment**: remove `output: "export"` from `next.config.ts` and restore an API route at `app/api/quote/route.ts`.
2. **Static hosting**: use a form backend service like:
   - [Formspree](https://formspree.io)
   - [Getform](https://getform.io)
   - [Basin](https://usebasin.com)
   - Or a serverless function (Cloudflare Workers, Netlify Functions)
3. **Email integration**: connect Resend, SendGrid, AWS SES or SMTP in your API route or serverless function to email operators when a quote is requested.
4. **Database**: replace in-memory storage with PostgreSQL (Supabase, Neon, Railway) or Firebase Firestore to persist leads and manage listings.

## Project structure

- `app/` — Next.js App Router pages (40+ routes)
- `src/data/` — Seed data: operators, locations, prices, storage types, FAQs
- `src/components/` — Shared UI components
- `public/` — Static assets

## What was built

- **Homepage** with hero search, popular locations, storage type cards, featured listings, pricing insight, size helper CTA, how it works, operator CTA and FAQs.
- **Search page** (`/storage/`) with filters, sorting, listing cards and mobile filter drawer.
- **Operator detail pages** (`/storage/[slug]/`) with pricing tables, service areas, related listings and quote forms.
- **13 location pages** (`/storage/douglas/` etc.) with unique local content, listings, pricing and nearby links.
- **8 storage type pages** (`/container-storage-isle-of-man/` etc.) with use cases, comparisons and relevant operators.
- **Storage size helper** (`/storage-size-helper/`) with interactive recommendation logic.
- **Forms**: request quote, claim listing, list your business, contact.
- **Admin-lite** (`/admin-lite/`) overview of listings, prices and leads.
- **SEO**: sitemap.xml, robots.txt, JSON-LD, metadata on all routes.
