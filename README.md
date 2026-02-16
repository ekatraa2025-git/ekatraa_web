# Ekatraa Web – Home Page

Modern Next.js landing page for **Ekatraa Mobile App** and **Ekatraa Vendor App**, built with the Ekatraa brand and presentation content.

## Features

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS** with Ekatraa brand colors (`#FF4117`, `#FF7700`, `#918F8F`)
- **Framer Motion** for scroll and entrance animations
- **Responsive** layout for all screen sizes
- **Sections**: Hero, About, Our Apps (Mobile + Vendor), Features, USP, Team, Newsletter, CTA, Footer
- **Multi-language**: English, Hindi, Odia (via context)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Use the default build settings:
   - **Build Command**: `npm run build` or `next build`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install`
4. Add environment variables if needed (none required for the landing page).
5. Deploy. The app runs as a Node.js server on Vercel; no static export required.

If the build succeeds but the page does not load (blank screen), ensure:

- All dependencies are in `dependencies` (not only `devDependencies`) so the runtime has them.
- No runtime errors in the browser console (e.g. hydration or missing context). The root page and layout are set up for client hydration.

## Team member photos

Team photos are loaded from the **`public`** folder using each member’s **first name** as the filename:

- **Format**: `FirstName.png` (e.g. `Durga.png`, `Bira.png`, `Lipsa.png`, `Debasis.png`, `Dibya.png`, `Sandeep.png`)
- **Supported extensions**: `.png` (recommended). If a file is missing, the component shows the member’s initials instead.
- **Place files** in `public/`:
  - `public/Durga.png`
  - `public/Bira.png`
  - `public/Lipsa.png`
  - `public/Debasis.png`
  - `public/Dibya.png`
  - `public/Sandeep.png`

## Project structure

- `src/app/` – Next.js App Router (layout, page, globals.css)
- `src/components/` – Nav, Hero, About, AppsSection, Features, USP, Team, Newsletter, CTA, Footer
- `src/context/` – LanguageContext for EN / HI / OR
- `src/lib/` – translations
- `public/` – Ekatraa logo (`ekatraa.svg`) and team photos (first-name filenames)

## Brand

- **Primary**: `#FF4117` (Ekatraa red-orange)
- **Gradient**: `#FF0000` → `#FF7700`
- **Accent**: `#918F8F` (gray)
