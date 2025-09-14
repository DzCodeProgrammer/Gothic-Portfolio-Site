# 🕯️ Gothic Portfolio — Next.js + TypeScript + Tailwind

A modern, gothic-inspired portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Optional **Prisma + PostgreSQL** integration and **MDX fallback** allow both database-driven and file-based workflows.  
Designed for **accessibility, internationalization, and easy deployment on Vercel**.

---

## 📦 Project Deliverables

This repository includes:

### 📄 Docs & Config
- `README.md` (this file)
- `structure.md` (project tree + explanations)
- `package.json`, `package-lock.json`, `tsconfig.json`, `next-env.d.ts`
- `postcss.config.js`, `tailwind.config.js`, `TODO.md`

### 🗂️ Next.js App Router
- `app/layout.tsx`, `app/page.tsx`
- `app/about/page.tsx`, `app/blog/page.tsx`
- `app/contact/page.tsx`, `app/projects/page.tsx`, `app/projects/featured/page.tsx`
- `app/globals.css`

### 🧩 Components
- `components/Navbar/Navbar.tsx`
- `components/Clock.tsx`
- `components/GothicContext.tsx`
- `components/LanguageContext.tsx`
- `components/PageTransition.tsx`
- `components/Slideshow.tsx`
- `components/ThemeContext.tsx`

### 🔗 API Routes
- `app/api/contact/route.ts` → Contact form (POST)
- `app/api/projects/route.ts`
- `app/api/projects/[id]/route.ts`

### 🗄️ Database (Optional)
- `prisma/schema.prisma`
- `scripts/seed.ts`

### 📚 Content
- File-based projects & posts in `/data/` (MDX)
- `data/contacts.json`

### 🌍 Localization
- `locales/en.json`, `locales/id.json`
- `i18n.ts`, `next-intl.config.js`

### 📂 Static Assets
- `/public/images/`
- `/public/resume.pdf`

---

## 🚀 Quick Start (Development)

```bash
# 1. Clone this repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local
# Add required values (see Environment Variables section)

# 4. Run the dev server
npm run dev

# 5. Seed database (optional)
npm run prisma:seed

---

⚡ Scripts
npm run dev → Start Next.js dev server
npm run build → Build production bundle
npm run start → Run production server
npm run lint → Run ESLint checks
npm run test → Run tests (placeholder)

🔑 Environment Variables
Required values (see .env.example):
DATABASE_URL → PostgreSQL connection (if using Prisma)
SENDGRID_API_KEY → For email/contact form
NEXT_PUBLIC_BASE_URL → Public site URL
NEXTAUTH_URL → Authentication callback URL

🌐 Deployment
Recommended: Vercel
Connect this repo to Vercel
Enable auto-deploy on push
Set environment variables in the Vercel dashboard

✨ Features
🕯️ Gothic-inspired dark design
🌍 Internationalization (English + Indonesian)
📱 Responsive Navbar with dropdown menus
⏱️ Real-time Clock widget
📖 MDX-based content system (blog & projects)
📬 Contact form with API route (POST → SendGrid)
🗄️ Prisma + PostgreSQL integration (optional)
📂 File-based fallback content
♿ Accessible components & keyboard-friendly navigation
🔍 SEO-ready with Next.js

📝 Notes
This project provides two approaches for content:
Database-backed (Prisma + Postgres) → for dynamic data
File-based (MDX + JSON fallback) → for static content
The scripts/seed.ts script auto-generates seed data for the fallback JSON system if no DB is used.

👉 Live Demo on Vercel : https://gothic-portfolio-site.vercel.app/
