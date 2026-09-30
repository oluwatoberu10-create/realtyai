# Realty AI Agency

Marketing site for Realty AI Agency — AI lead generation, AI agents, and sales automation for real estate agents, brokers, and teams.

Built with Next.js (App Router), Tailwind CSS v4, and Lucide icons.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `lib/site.ts` — agency name, booking (Calendly) link, contact email, navigation
- `components/` — one component per page section (`Hero`, `Pricing`, `Team`, …)
- `components/Team.tsx` — team members; photos go in `public/team/`
- `lib/testimonials.ts` — written testimonials (shared by the site and the deck)
- `components/VideoTestimonials.tsx` — video testimonials; files go in `public/videos/`

## Sales deck — `/deck`

A 27-slide client presentation for sales calls, built on the same design system.

- **Navigate:** ← → / Space / PageUp / PageDown, Home / End, or swipe on touch devices
- **G** all slides · **P** present mode (hides the control bar) · **F** full screen · **Esc** close
- **Export PDF:** the download button opens the print dialog → *Save as PDF* (one 16:9 page per slide, links stay clickable)
- Deep links: `/deck#17` opens slide 17; `/deck?present` starts in present mode
- The page is marked `noindex` so it stays out of search results

Content lives in `lib/deck.ts` (packages, comparison, team) and `lib/testimonials.ts`.
Set `testimonialsVerified = true` there once the quotes are confirmed — until then the
testimonials slide shows an internal reminder. Add team photos under `public/team/` and set
`photo` on each member to replace the monogram placeholders.

## Deploy

Deployed on Vercel as a standard Next.js project — no environment variables required.
