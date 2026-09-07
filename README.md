# Portfolio — Bhavesh Gupta

Personal portfolio site. React + Vite + Tailwind CSS v4, deployed on Vercel.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build
pnpm preview    # http://localhost:4173 — test deep links here, on the real bundle
pnpm lint
```

## How it is organised

All content lives in `src/data/`. Components read from it and hold no copy of
their own, so updating the site is a data edit rather than a UI change.

| File | Holds |
| --- | --- |
| `data/site.js` | Name, title, contact, socials, nav, SEO defaults |
| `data/skills.js` | Skill groups, evidence tiers, `usedIn` provenance |
| `data/experience.js` | Roles, verbatim from the resume |
| `data/projects.js` | Project cards and detail pages |
| `data/education.js` | Degree |
| `data/certifications.js` | Certifications and achievements |

```
src/
├─ components/   layout/ (chrome) · ui/ (primitives) · cards/
├─ sections/     one per homepage section
├─ pages/        Home · ProjectDetail · NotFound
├─ hooks/        theme, in-view, scroll-spy, document meta
├─ lib/          theme helpers, class joiner
├─ data/         all content
└─ styles/       tokens + base layer
```

## Content rules

The site is built so it cannot show something that is not true:

- `links.repo` or `links.demo` set to `null` renders **no button** — never a
  dead `#` href or a disabled-looking control.
- `kind: 'professional'` suppresses source links, demo links and screenshots
  regardless of what the data file says. Employer work never gets a repo link.
- A certification with `verifyUrl: null` renders a non-interactive card.
- Projects with no screenshots get a generated placeholder panel, never a
  stock photo.
- Every unknown carries a `gaps` entry. `pnpm dev` shows the full list in a
  dev-only panel; it is dead-code-eliminated from production builds.

## Theming

Dark by default. Tokens are CSS custom properties in `src/styles/index.css`,
mapped into Tailwind with `@theme inline`. Light mode is designed, not
inverted — the accent drops from `#22D3EE` to `#0E7490`, because cyan-400 on a
white canvas is about 1.7:1 and unreadable.

An inline script in `index.html` resolves the theme before first paint, so
there is no flash on load. It must stay first in `<head>`.

## Deploying

Vercel picks this up from `vercel.json` and installs with the committed
`pnpm-lock.yaml`. After the first deploy, set the real host in:

- `src/data/site.js` → `seo.url`
- `public/sitemap.xml`
- `index.html` → canonical, `og:url`, and the absolute `og:image`

## Still to add

Run `pnpm dev` and open the content-gap panel for the current list. At time of
writing: the resume PDF, project screenshots, the FoodNotify repository URL,
credential verification links, and a real Open Graph image.
