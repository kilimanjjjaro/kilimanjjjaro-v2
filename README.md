# Kilimanjjjaro

Source of [kilimanjjjaro.com](https://kilimanjjjaro.com/), a portfolio in
English and Spanish built with Next.js 16 (App Router), React 19, Tailwind CSS
4, Motion, Lenis and Swiper. The contact form sends emails through Resend.

## Getting Started

Requirements: Node.js 26 (pinned with Volta) and pnpm 11. pnpm runs the
project scripts with the Node.js version declared in `devEngines`.

```bash
cp .env.example .env
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

`RESEND_API_KEY` in `.env` is only needed to send the contact form emails.

## Project structure

- `src/app/[locale]`: pages for each locale (`/` and `/es`), including the
  project pages under `project/[slug]`
- `src/app/api/send-mail`: route that sends the contact form emails
- `src/components`: React components, grouped by section
- `src/lib/constants`: content, animation settings, breakpoints and other values
- `src/lib/utils`, `src/lib/hooks`: helpers and hooks used by the components
- `src/lib/locales`, `src/lib/i18n`: translations with next-international
- `src/proxy.ts`: locale detection and redirects
- `tests/unit`, `tests/e2e`: Vitest and Playwright tests, with their constants
  and helpers in `tests/constants` and `tests/utils`

## Checks

```bash
pnpm format:check  # Prettier (pnpm format fixes the files)
pnpm typecheck     # TypeScript
pnpm lint          # ESLint
pnpm test          # Unit tests (Vitest)
pnpm build         # Production build
pnpm test:e2e      # End-to-end tests (Playwright, needs a build first)
pnpm test:all      # All of the above, in order
```

Before the first e2e run, install the browser with
`pnpm exec playwright install chromium`. The e2e tests never submit the contact
form, so they do not send emails. The same checks run in CI on every pull
request (`.github/workflows/ci.yml`).

## Fonts

Neue Haas Grotesk Display is loaded from `public/fonts` and Fira Mono from
Google Fonts, both through `next/font`.
