# Project structure

A detailed and accurate tree of the repository and purpose of key folders/files:

/README.md - this file
/structure.md - this file (you are reading it)
/package.json - npm scripts & dependencies
/package-lock.json - npm lock file for dependencies
/tsconfig.json - TypeScript config
/next-env.d.ts - Next.js environment types
/next-intl.config.js - Internationalization config
/postcss.config.js - PostCSS config
/tailwind.config.js - Tailwind CSS config
/i18n.ts - Internationalization utilities
/bash.exe.stackdump - Windows stack dump file (can be ignored)
/TODO.md - Task tracking file

/prisma/
  /schema.prisma - Prisma schema (optional DB)

/scripts/
  /seed.ts - script to generate seed data (DB or file fallback)

/data/
  /contacts.json - contact data in JSON
  /projects/ - MDX project entries (3 example files)
  /posts/ - MDX blog posts (4 example files)

/app/
  /layout.tsx - root layout (HTML head, providers)
/app/page.tsx - homepage
/app/about/page.tsx - about page
/app/blog/page.tsx - blog listing page
/app/contact/page.tsx - contact page
/app/projects/page.tsx - projects listing page
/app/projects/featured/page.tsx - featured projects page
/app/globals.css - global CSS styles

/app/api/
  /contact/route.ts - contact API route (POST)
/projects/route.ts - projects API route
/projects/[id]/route.ts - project detail API route

/components/
  /Navbar/
    /Navbar.tsx - Navbar component (accessible, responsive)
  Clock.tsx - Clock component
  GothicContext.tsx - Gothic theme context
  Hero.tsx - Hero section component
  LanguageContext.tsx - Language context provider
  PageTransition.tsx - Page transition animations
  Slideshow.tsx - Slideshow component
  ThemeContext.tsx - Theme context provider

/locales/
  en.json - English locale strings
  id.json - Indonesian locale strings

/public/
  /gothic_assets/
    gothic1.jpeg
    gothic2.jpeg
    gothic3.webp
  resume.pdf - static resume PDF

## How to add content
- Projects: add a new MDX file into `/data/projects/` with frontmatter (title, slug, tags, featured, cover).
- Posts: add new MDX file in `/data/posts/`.
- If using Prisma: add entries to `prisma/seed.ts` and run `pnpm prisma:seed`.

## Extension points
- Headless CMS: add integration by creating a `lib/cms/*` connector returning the same shape as MDX fallback.
- Admin UI: create `/app/admin` pages protected with NextAuth.
