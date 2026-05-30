# RNDQueen — Project Handoff

**Project:** Alla Shapiro fractional VP R&D landing page  
**Live URL:** https://rndqueen.com  
**GitHub repo:** https://github.com/borisshapiro/alla-landing-page  
**Vercel project:** alla-landing-page (connected to GitHub, auto-deploys on push to `main`)  
**Last updated:** 2026-05-30 (session 5)

---

## Status — COMPLETE ✅

The site is fully live, indexed, and production-ready. No pending tasks.

| Area | Status |
|---|---|
| Landing page (EN / HE / RU) | ✅ Live |
| Lighthouse (mobile, Slow 4G) | ✅ 100 / 100 / 100 / 100 |
| Google Search Console | ✅ Verified + sitemap processed |
| LinkedIn backlink | ✅ Added |
| GA4 Key Event (`calendly_open`) | ✅ Marked as conversion |
| Testimonial author photos | ✅ Live |
| WhatsApp footer link | ✅ Live |

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.6 App Router (Turbopack) |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 3.4.5 with custom brand tokens |
| Animation | CSS `@keyframes` + IntersectionObserver (Framer Motion still in package.json but lazy-loaded only for the a11y widget panel) |
| Fonts | Inter (Latin) + Heebo (Hebrew) via `next/font/google` |
| Hosting | Vercel (free tier) |
| Booking | Calendly embeds (iframe modal, lazy-mounted on open) |
| Analytics | Vercel Analytics + Vercel Speed Insights + GA4 (via `@next/third-parties`) |

---

## What is done ✅

### Page & content
- Full single-page landing (`app/page.tsx`) — Hero, Logo bar, Challenges, Offerings, Why Me, Testimonials, Process, FAQ, Contact, Footer
- 3-language support: EN / HE (RTL) / RU — content in `lib/content.ts`
- Calendly modal (inline iframe, lazy-mounted) for two booking types: intro call + strategy session
- Mobile sticky CTA bar, back-to-top button, scroll-spy nav highlight, scroll progress bar
- Animated stat counters (IntersectionObserver), floating hero orbs (CSS keyframes), infinite marquee logo strip
- 7 real client logos in `public/logos/`: amdocs, nice, 4cast, lifeward, tripex, razore, infinity
- 3 testimonial author photos in `public/testimonials/`: ella-vidra, gabi-levy, viktoria-okolotovich

### Copy — all three languages proofread
Full expert-panel review (session 4). All corrections applied:

**Hebrew** — key fixes: `שוכרים` → `ריטיינרים` (tenants vs retainers), `פלט` → `תפוקה`, `הדליברי` → `הביצוע`, `< שבועיים` → `< 2 שבועות`, gender agreement throughout.

**Russian** — key fixes: `доставка` → `результативность`, `С первого взгляда` → `С самого начала`, `Кросс-дисциплинарное` → `Многопрофильное`.

**English** — register, idioms, phrasing verified clean.

### Accessibility
- Full a11y controller widget (`components/AccessibilityController.tsx`) — 8 controls, localStorage persistence, ARIA compliant, lazy-loaded
- WCAG 2.1 AA / SI 5568 (Israeli Web Accessibility Regulations) compliant
- Legal pages: `/accessibility`, `/privacy`, `/terms` — trilingual EN + HE + RU with language jump nav

### SEO / GEO
- `app/layout.tsx` — comprehensive metadata, OG image, Twitter card, canonical per page, robots, keywords
- JSON-LD: **Person** + **ProfessionalService** schemas in layout; **FAQPage** schema in page
- `app/opengraph-image.tsx` — dynamic 1200×630 OG image
- `app/sitemap.ts` — XML sitemap (all 4 routes), submitted to and processed by Google Search Console
- `public/robots.txt` — allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- `public/llms.txt` — GEO file for AI search engines

### Analytics
- Vercel Analytics + Speed Insights — live, no config needed
- GA4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID` set in Vercel) — live
- `calendly_open` GA4 event fires on every booking modal open, tagged `intro_call` vs `strategy_session`
- `calendly_open` marked as **Key Event** in GA4 Admin (conversion tracking active)

### Performance — 100/100/100/100 (session 5)

Lighthouse mobile, Slow 4G:

| Metric | Pre-session-3 | Session 5 final |
|---|---|---|
| Performance | 66 | **100** |
| Accessibility | 96 | **100** |
| Best Practices | 100 | **100** |
| SEO | 100 | **100** |
| FCP | 1.2 s | **0.9 s** |
| LCP | 5.3 s | **1.7 s** |
| TBT | 570 ms | **40 ms** |
| CLS | 0 | **0** |

Key changes that achieved this:
- Framer Motion removed from `page.tsx` entirely — replaced with CSS `@keyframes` + IntersectionObserver scroll reveal
- `AccessibilityController` lazy-loaded via `A11yControllerLoader` (`ssr: false`) — Framer Motion deferred out of critical path
- Hero/header entrance animations removed — CSS `animation-fill-mode: both` was starting content at `opacity: 0`, killing FCP/LCP
- Calendly iframe lazy-mounted on modal open only — previously loaded on every page view and set third-party cookies, dropping Best Practices to 58

---

## Key files reference

```
alla-website/
├── app/
│   ├── layout.tsx              ← metadata, JSON-LD schemas, Analytics/SpeedInsights/GA4
│   ├── page.tsx                ← main landing page (client component, no Framer Motion)
│   ├── globals.css             ← Tailwind base + CSS animations + a11y overrides
│   ├── sitemap.ts              ← /sitemap.xml
│   ├── opengraph-image.tsx     ← dynamic OG image (1200×630)
│   ├── accessibility/          ← /accessibility page (EN + HE + RU)
│   ├── privacy/                ← /privacy page (EN + HE + RU)
│   └── terms/                  ← /terms page (EN + HE + RU)
├── components/
│   ├── AccessibilityController.tsx  ← floating a11y widget (uses Framer Motion)
│   └── A11yControllerLoader.tsx     ← client wrapper for ssr:false dynamic import
├── lib/
│   └── content.ts              ← ALL page copy in EN / HE / RU (fully proofread)
├── public/
│   ├── logos/                  ← 7 client logo PNGs
│   ├── testimonials/           ← ella-vidra.jpg, gabi-levy.jpg, viktoria-okolotovich.jpg
│   ├── alla-shapiro.png        ← Alla's headshot (hero card, priority preload)
│   ├── robots.txt
│   └── llms.txt
├── next.config.mjs             ← /favicon.ico → /icon.svg redirect
├── tailwind.config.ts          ← brand colors, marquee animation
├── .env.local.example          ← documents required env vars
└── HANDOFF.md                  ← this file
```

---

## Key URLs & accounts

| What | Value |
|---|---|
| Live site | https://rndqueen.com |
| GitHub | https://github.com/borisshapiro/alla-landing-page |
| Vercel dashboard | https://vercel.com (project: alla-landing-page) |
| Calendly intro | https://calendly.com/allsha/30-minutes-with-alla |
| Calendly strategy | https://calendly.com/allsha/30min |
| Alla's email | alla@rndqueen.com |
| Alla's WhatsApp | +972 54 439 5989 (footer link: wa.me/972544395989) |
| LinkedIn | https://www.linkedin.com/in/allsha/ |
| GA4 | https://analytics.google.com (property: RNDQueen) |
| Search Console | https://search.google.com/search-console (property: https://rndqueen.com) |

---

## Brand tokens (Tailwind)

```ts
brand: {
  950: '#0b1120',  // page background
  900: '#121a31',  // cards, nav
  800: '#1f2944',  // section bg
  700: '#2e3f60',
  600: '#6a4d9d',  // primary action
  500: '#7f5cc6',  // buttons, glow
  400: '#9b86e9',  // accents, icons
  300: '#c4b5fd',  // unit labels
  200: '#ddd6fe',  // lightest tint
}
```

---

## Env vars in Vercel

| Variable | Status | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ✅ SET & LIVE | GA4 tracking |
| `NEXT_PUBLIC_GSC_VERIFICATION` | ⏸ NOT SET | Search Console HTML-tag fallback — not needed, verified via GA4 |

---

## Deployment workflow

```bash
npm run dev          # local dev server
npm run build        # build check — must pass with 0 errors before pushing
git add <files>
git commit -m "your message"
git push origin main  # Vercel auto-deploys
```

---

## Session history

| Session | Date | Key work |
|---|---|---|
| 1–2 | 2026-05 | Initial build: page, copy, Calendly, analytics, logos |
| 3 | 2026-05-27 | Performance baseline; hero image `priority`; logo `<Image>`; contrast + aria fixes |
| 4 | 2026-05-28 | Expert-panel copy review (EN/HE/RU); a11y widget icon; sticky CTA; trilingual legal pages; scroll fixes |
| 4b | 2026-05-28 | SEO: canonical per page, favicon redirect, `noopener` on external links |
| 5 | 2026-05-30 | Performance 100/100/100/100; Framer Motion removed from critical path; Calendly lazy-mount; GSC + LinkedIn + GA4 Key Event + testimonial photos + WhatsApp footer |
