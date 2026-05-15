# Creecode Studio — Agency Site

Production-ready Next.js 15 (App Router) marketing site for **Creecode Studio**. Features Prisma ORM, contact API with Zod validation, optional SMTP email, Framer Motion animations, dark/light theme, and an MDX-powered blog.

---

## Prerequisites

- Node.js 20+
- npm 10+

---

## Local Development

```bash
npm install
cp .env.example .env          # fill in values
npx prisma migrate dev --name init
npx prisma db seed            # loads demo projects + blog posts
npm run dev                   # http://localhost:3000
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in:

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | SQLite: `file:./dev.db` · Postgres: `postgresql://...` |
| `NEXT_PUBLIC_SITE_URL` | ✅ | Full URL of your site, no trailing slash |
| `AGENCY_INBOX_EMAIL` | ⚠️ | Inbox that receives lead notifications |
| `EMAIL_FROM` | ⚠️ | `"Sender Name <email>"` for outgoing mail |
| `SMTP_HOST` | ⚠️ | SMTP server hostname |
| `SMTP_PORT` | ⚠️ | Default 587 |
| `SMTP_USER` | ⚠️ | SMTP auth user |
| `SMTP_PASS` | ⚠️ | SMTP auth password |
| `NEXT_PUBLIC_TAWK_PROPERTY_ID` | Optional | Tawk.to live chat property ID |
| `NEXT_PUBLIC_TAWK_WIDGET_ID` | Optional | Tawk.to widget ID |

> **Note:** SMTP is optional. If not configured, form submissions are still saved to the database and the API returns success. Check server logs for skipped email warnings.

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build (Prisma generate runs via `postinstall`) |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

---

## Deployment on Vercel

### 1. Database

SQLite **cannot** be used on Vercel (ephemeral filesystem). Switch to PostgreSQL:

1. Create a Postgres database (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres))
2. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
3. Run migrations against production DB:
   ```bash
   DATABASE_URL="postgresql://..." npx prisma migrate deploy
   DATABASE_URL="postgresql://..." npx prisma db seed
   ```

### 2. Vercel Project Setup

1. Connect your GitHub repository to Vercel
2. Add all required environment variables in the Vercel dashboard
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://creecode.studio`)
4. Deploy — `npm run build` runs automatically

> `vercel.json` ships conservative security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy).

---

## Theme

Supports **light**, **dark**, and **system** appearance via the navbar toggle. Preference is persisted in `localStorage` under `creecode-theme`.

---

## Live Chat

Set `NEXT_PUBLIC_TAWK_PROPERTY_ID` and `NEXT_PUBLIC_TAWK_WIDGET_ID` to enable Tawk.to. For Crisp or another provider, replace the embed logic in `components/site/LiveChatLoader.tsx`.

---

## Database Seeding

The seed script populates 8 portfolio case studies and 5 blog posts used across home, portfolio, and blog routes.

```bash
npx prisma db seed
```
