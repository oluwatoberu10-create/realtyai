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
- `components/SocialProof.tsx` — written testimonials
- `components/VideoTestimonials.tsx` — video testimonials; files go in `public/videos/`

## Deploy

Deployed on Vercel as a standard Next.js project — no environment variables required.
