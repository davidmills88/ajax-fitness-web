# Ajax Fitness — marketing site

Premium Aspen gym site for [ajaxfitness.com](https://ajaxfitness.com). Code-owned Next.js (not GoHighLevel Sites). CRM/forms stay ready for GHL; membership checkout is stubbed until the Wellyx-out flow is wired.

## Pages

- `/` — Home
- `/hours` — Member access 6:00 AM–9:00 PM daily, 365 days a year — not 24/7
- `/pricing` — Membership $229 / $2100 · Temporary: Day $49 · Week $150 · 2-week $225 · 1-month $295
- `/personal-training` — Service page; Roman Garcia, Erin Young, and Alie James named with longer bios at the bottom only
- `/contact` — Lead form → `POST /api/contact` (GHL stub)
- `/join` — Plan picker + placeholder Stripe Checkout
- `/tour` — Tour request stub

Phone everywhere: `(970) 670-8974`. Public email: `hello@ajaxgym.com`. Address: `100 Obermeyer Place, Unit 105, Aspen, CO 81611`.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## GoHighLevel (later)

Phase 1 accepts contact submissions without credentials. To forward leads:

1. Copy `.env.example` to `.env.local` (or Vercel env vars).
2. Set `GHL_PIT` to a Private Integration Token with Contacts write.
3. Keep `GHL_LOCATION_ID=9s4QUTb46DnuhaD2NEca`.
4. Or set `GHL_WEBHOOK_URL` to an inbound webhook instead of the Contacts API.

Do not invent or commit secrets.

## Vercel

1. Import this GitHub repo in Vercel (Next.js preset).
2. Add the same env vars from `.env.example` in Project Settings → Environment Variables. Leave `GHL_PIT` empty until the token exists.
3. Deploy. Domain cutover for ajaxfitness.com is later — preview URLs are enough for Phase 1.

## Notes

- Light editorial theme: off-white grounds (`#F6F5F2`), near-black type and CTAs (`#111`), dark cinematic hero bands. Fonts: Inter Tight + Inter. Quiet luxury, Equinox-adjacent — not the WordPress blue/peach palette.
- Voice is premium, confident, and warm — not gym-bro, not discount-y.
- Local `/public/placeholders` gym photos are unique per slot (v3: functional-floor hero, no repeated srcs). Rejected v1 shots stay unwired in `/public/images/alts/`.
- `/join` and `/tour` are placeholders for the future Wellyx-out / Stripe path.
- Locked Phase 1 copy: [Mac build copy](https://docs.google.com/document/d/1LQOIBeNFVQfcooal0SRu6C5nr9OPagHseZmWahmvU28/edit).
