# Yeasin Arafat — Full-Stack Software Engineer

Modern, dark-themed portfolio highlighting my work across React/Next.js frontends, Django REST/FastAPI backends, and production-ready DevOps pipelines. The site blends Motion-powered interactions, Tailwind v4 styling, and reusable UI primitives to mirror the polish I bring to client deliverables.

## At a Glance

- **Location:** Dhaka, Bangladesh  
- **Phone:** +880 1851 257 710  
- **Email:** [yeasinarafat.cs@gmail.com](mailto:yeasinarafat.cs@gmail.com)  
- **LinkedIn:** [linkedin.com/in/yeasin-arafat650](https://www.linkedin.com/in/yeasin-arafat650)  
- **GitHub:** [github.com/ya-shuvo30](https://github.com/ya-shuvo30)

## What I Build

| Focus | Highlights |
| --- | --- |
| Full-Stack Web | React, Next.js, Tailwind CSS, TypeScript, Zustand, JWT auth |
| Backend Engineering | Django REST Framework, FastAPI, PostgreSQL schema design, Redis, Celery |
| DevOps & Delivery | Docker, Docker Compose, Nginx, GitHub Actions, CI/CD to AWS & Azure |
| System Design | Clean API architecture, secure multi-tenant data models, observability & docs |

## Experience

- **Software Engineer Level I — Arriva Soft (Apr 2025 – Present)**  
    Ship React/Next.js + Django/Postgres features end-to-end, own CI/CD, and contribute to AWS/Azure deployments.
- **Back-End Developer — Itransition Group (Jan 2025 – Apr 2025)**  
    Built reusable API layers with Django ORM, aligned frontend-backend contracts, and deployed to Azure.
- **Coding Instructor (Remote) — Thinkland.AI (Apr 2024 – Dec 2024)**  
    Taught Scratch, Python, and intro ML; authored project-based curriculum and coding challenges.

## Highlighted Project — BrightLife

Production-grade health membership platform featuring Next.js + React (Tailwind), Django REST API, PostgreSQL database, JWT authentication, Redis caching, Celery-powered background jobs, PDF generation, Docker + Nginx deployment, and CI/CD automation.

## Live Resume Snapshot

- Dedicated section inside the main navigation (`Resume`) shows a fully readable resume without forcing downloads.  
- Experience, education, and certification data live in `src/components/ResumeSection.tsx` for quick updates.  
- The layout mirrors proposal-ready content so clients can validate skills directly on the site.

## Section Routing

- Friendly URLs such as `/about`, `/skills`, `/projects`, `/resume`, and `/contact` render the same landing page and auto-scroll to the requested section.  
- Navigation updates the browser URL using the App Router so links can be shared directly (ideal for proposals or analytics tracking).  
- Modify the section list in `app/[section]/page.tsx` to control which anchors get their own routes.

## Technical Stack

### Frontend

- React, Next.js (App Router)
- TypeScript, Tailwind CSS v4, Zustand
- Motion/react animations, custom shadcn-style components

### Backend

- Python, Django REST Framework, FastAPI, Node.js
- PostgreSQL schema design & ORM business logic
- Redis caching, Celery task queues, secure JWT auth

### DevOps & Tooling

- Docker, Docker Compose, Nginx
- Git/GitHub, GitHub Actions, CI/CD pipelines
- AWS, Azure, Vercel deployments

## Education & Certifications

- B.Sc. in Computer Science & Engineering — World University of Bangladesh (2020–2023)
- HSC (Science) — Safiuddin Sarker Academy & College (2017–2019)
- Google Fundamentals of Digital Marketing
- Python Course: Basic to Advanced
- EF SET English Certificate (C1 — 69/100)
- HackerRank Problem Solving (Intermediate)
- Top 5, Hult Prize 2020–2021 Dhaka Summit (On-Campus Finalist)

## Project Structure

```text
src/
├── app/
│   ├── globals.css        # Theme tokens, typography helpers, utilities
│   ├── layout.tsx         # Metadata + global layout
│   ├── page.tsx           # Main landing page using SectionsRoot
│   └── [section]/page.tsx # Static routes like /about, /projects -> scroll to section
└── components/
    ├── Navigation.tsx
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── SkillsSection.tsx
    ├── ProjectsSection.tsx
    ├── ResumeSection.tsx
    ├── SectionsRoot.tsx
    ├── ContactSection.tsx
    ├── figma/ImageWithFallback.tsx
    └── ui/{button,card,input,textarea}.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

- Dev server: <http://localhost:3000>
- Lint: `npm run lint`
- Production build: `npm run build`
- Sitemap only: `npm run sitemap` (runs automatically after every build)

## Customization Notes

- Personalize copy inside each component (`HeroSection`, `AboutSection`, etc.).
- Update skills/project arrays in `SkillsSection.tsx` and `ProjectsSection.tsx` to showcase new work.
- Adjust the live resume data inside `ResumeSection.tsx` to reflect new roles, education, or certifications.
- To add/remove deep-linkable sections (e.g., `/about`), update `SectionsRoot.tsx`, nav copy in `Navigation.tsx`, and the `SECTION_MAP` inside `app/[section]/page.tsx`.
- Allow additional external image hosts via `next.config.ts` → `images.remotePatterns`.
- Set `NEXT_PUBLIC_BASE_PATH` only when deploying under a subdirectory (e.g., `/Personal-App-Nextjs`); leave it unset for apex/custom domains so assets resolve from `/`.
- Tailwind tokens, gradients, and typography utilities live in `src/app/globals.css`.

## Deployment

### GitHub Pages (CI/CD built-in)

1. Ensure the default branch is `main`, then push your changes.  
2. In GitHub → _Settings_ → _Pages_, choose **GitHub Actions** as the source (one-time step).  
3. The workflow at `.github/workflows/deploy.yml` installs deps, lints, runs `npm run build`, and uploads the static `out/` folder.  
4. Commit `public/CNAME` with `yeasindev.me`, keep the four GitHub A records for `@`, and point `www` via CNAME to `ya-shuvo30.github.io`.  
5. In repo settings set the Custom domain to `yeasindev.me`, wait for the SSL check to pass, then enable **Enforce HTTPS**.  
6. During DNS propagation the site remains reachable at `https://<username>.github.io/Personal-App-Nextjs/` after each workflow run.
7. The build pipeline now produces `sitemap.xml` and `robots.txt` automatically in `out/`, so Google Search Console can read `https://yeasindev.me/sitemap.xml` once Pages publishes.

### Other Hosts

- Vercel / Netlify: remove the `NEXT_PUBLIC_BASE_PATH` env var and trigger a build.  
- Docker/Nginx: run `npm run build` to generate `out/` (static) or serve `.next` with a Node adapter.

> **Note:** Because the workflow leaves `NEXT_PUBLIC_BASE_PATH` undefined, builds target the root (`/`). Set it (e.g., `/Personal-App-Nextjs`) only if you intentionally deploy under a subpath of `username.github.io`.

### SEO + Search Console

- `next-sitemap` runs after every `npm run build`, writing `sitemap.xml` and `robots.txt` into the exported `out/` folder.  
- Submit `https://yeasindev.me/sitemap.xml` in Google Search Console to help crawl the site faster.  
- To test locally, run `npm run build` then open `./out/sitemap.xml` or `./out/robots.txt` in a browser.
