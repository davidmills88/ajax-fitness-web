# Ajax Fitness — marketing site

Premium Aspen gym site for [ajaxfitness.com](https://ajaxfitness.com). Code-owned Next.js (not GoHighLevel Sites). CRM/forms stay ready for GHL; membership checkout is stubbed until the Wellyx-out flow is wired.

## Pages

- `/` — Home
- `/hours` — Member access 6:00 AM–9:00 PM, not 24/7
- `/pricing` — Monthly $229 · Annual $2100 · Day pass $49
- `/contact` — Lead form → `POST /api/contact` (GHL stub)
- `/join` — Plan picker + placeholder Stripe Checkout
- `/tour` — Tour request stub

Phone everywhere: `(970) 670-8974`. Address: `65 Paepcke Dr, Aspen, CO`.

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

- Light theme only. Voice is premium, approachable, and confident — not gym-bro, not discount-y.
- `/join` and `/tour` are placeholders for the future Wellyx-out / Stripe path.
- Locked Phase 1 copy: [Mac build copy](https://docs.google.com/document/d/1LQOIBeNFVQfcooal0SRu6C5nr9OPagHseZmWahmvU28/edit).
