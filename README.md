# Sophia Foundry

**Forge the impossible.**

Sophia Foundry is a game studio building the tools that AAA demands — and giving them to everyone. Founded by Jessyka A. Gavião, the studio builds its own games and its own tools, starting with [Sophia Forge](https://sophiaforge.com).

## Pages

- **Home** — Hero with animated gradient background, mission statement, product highlights, and founder note
- **About** — Studio identity, founder bio, mission, and core values (Coherence, Craft, Access)
- **Products** — Product showcase grid featuring Sophia Forge with a coming-soon slot for future products
- **Contact** — Form (name, email, message) posting to an API route, with direct email fallback

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (dark theme, purple accents)
- **Typography:** Raleway, Figtree, Space Mono (Google Fonts)
- **Localization:** next-intl (11 locales)
- **Animations:** Framer Motion
- **SEO:** Dynamic sitemap and robots.txt generation
- **Hosting:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Run development server (default port: 3100)
npm run dev
```

Open [http://localhost:3100](http://localhost:3100) to view the site.

The port is configurable via the `PORT` variable in `.env`.

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-scoped pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── products/
│   │   │   └── sophia-forge/   # Redirect to sophiaforge.com
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/contact/       # Contact form API route
│   ├── robots.ts
│   └── sitemap.ts
├── components/            # Navbar, footer, hero background, language switcher, motion
├── i18n/                  # Locale config, routing, request handling
├── lib/                   # Utilities
├── messages/              # Translation JSON files (11 locales)
└── middleware.ts          # next-intl locale detection and routing
```

## Localization

11 languages: English, Portuguese (Brazil), Chinese (Simplified), Japanese, Korean, German, French, Spanish, Russian, Italian, and Turkish.

Locale detection and prefix routing are handled automatically via `next-intl` middleware.

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Dev server port (default: 3100) |
| `RESEND_API_KEY` | Resend API key for contact form emails (optional, not yet wired up) |

## License

All rights reserved. Copyright Sophia Foundry.
