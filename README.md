# Gothic Portfolio (Next.js + TypeScript + Tailwind)

A professional, accessible, and deployable Gothic-themed portfolio website using Next.js (App Router), TypeScript, Tailwind CSS, Prisma (Postgres) optional, MDX fallback, internationalization, and a full set of deliverables.

## What's included
- README.md (this file)
- structure.md (project tree + explanations)
- package.json, package-lock.json, tsconfig.json, next-env.d.ts
- Next.js App Router files: `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/blog/page.tsx`, `app/contact/page.tsx`, `app/projects/page.tsx`, `app/projects/featured/page.tsx`, `app/globals.css`
- Components: `components/Navbar/Navbar.tsx`, `components/Clock.tsx`, `components/GothicContext.tsx`, `components/LanguageContext.tsx`, `components/PageTransition.tsx`, `components/Slideshow.tsx`, `components/ThemeContext.tsx`
- API routes: `app/api/contact/route.ts` (contact POST), `app/api/projects/route.ts`, `app/api/projects/[id]/route.ts`
- Prisma schema: `prisma/schema.prisma` and seed script `scripts/seed.ts`
- File-based content in `data/` for projects and posts (MDX), including `data/contacts.json`
- Localization: `locales/en.json`, `locales/id.json`, `i18n.ts`, `next-intl.config.js`
- Static assets in `public/` including `resume.pdf` and `images/` images
- Configuration files: `postcss.config.js`, `tailwind.config.js`, `TODO.md`
- Other: `bash.exe.stackdump` (ignore), `next-intl.config.js`

## Quick start (dev)
1. Clone or download this repo.
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and set environment variables (see below).
4. Run development server: `npm run dev`
5. Seed data (if using Prisma + Postgres): `npm run prisma:seed`

## Scripts
- `npm run dev` -> starts Next.js dev server
- `npm run build` -> builds for production
- `npm run start` -> starts production server
- `npm run lint` -> runs ESLint
- `npm run test` -> runs tests (placeholder)

See `package.json` for full list.

## Environment variables
See `.env.example` for required variables (DATABASE_URL, SENDGRID_API_KEY, NEXT_PUBLIC_BASE_URL, NEXTAUTH_URL, etc.)

## Deployment
Recommended: Vercel (link your GitHub repo). Set environment variables in Vercel dashboard and enable automatic deploys on push.

## Features
- Gothic-themed design with dark mode support
- Internationalization (English/Indonesian)
- Responsive navbar with dropdowns
- Real-time clock component
- MDX-based content for projects and blog posts
- Contact form with API
- Prisma integration for database (optional)
- File-based fallback for content
- Accessible components
- SEO-friendly with Next.js

## Notes
This project provides a DB-backed Prisma model and MDX file-based fallback. If you don't want a DB, use the MDX files in `/data` — `scripts/seed.ts` includes logic to write seed JSON for fallback.
