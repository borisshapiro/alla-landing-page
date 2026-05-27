# RNDQueen — Project Handoff

**Project:** Alla Shapiro fractional VP R&D landing page  
**Live URL:** https://rndqueen.com  
**GitHub repo:** https://github.com/borisshapiro/alla-landing-page  
**Vercel project:** alla-landing-page (connected to GitHub, auto-deploys on push to `main`)  
**Last updated:** 2026-05-27

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.6 App Router (Turbopack) |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 3.4.5 with custom brand tokens |
| Animation | Framer Motion 12 |
| Fonts | Inter (Latin) + Heebo (Hebrew) via `next/font/google` |
| Hosting | Vercel (free tier) |
| Booking | Calendly embeds (iframe modal) |
| Analytics | Vercel Analytics + Vercel Speed Insights + GA4 (via `@next/third-parties`) |

---

## What is fully done ✅

### Page & content
- Full single-page landing (`app/page.tsx`) — Hero, Logo bar, Challenges, Offerings, Why Me, Testimonials, Process, FAQ, Contact, Footer
- 3-language support: EN / HE (RTL) / RU — content in `lib/content.ts`
- Calendly modal (inline iframe) for two booking types: intro call + strategy session
- Mobile sticky CTA bar, Back-to-top button, scroll-spy nav highlight, scroll progress bar
- Animated stat counters (IntersectionObserver), floating hero orbs, infinite marquee logo strip
- 7 real client logos in `public/logos/`: amdocs, nice, 4cast, lifeward, tripex, razore, infinity

### Accessibility
- Full a11y controller widget (`components/AccessibilityController.tsx`) — 8 controls, localStorage persistence, ARIA compliant
- Israeli Web Accessibility Regulations (WCAG 2.1 AA / SI 5568) compliant
- Legal pages: `/accessibility`, `/privacy`, `/terms`
- CSS override classes in `globals.css` for all a11y settings

### SEO / GEO
- `app/layout.tsx` — comprehensive metadata (metadataBase, title template, OG image, Twitter card, canonical, robots, keywords)
- `app/layout.tsx` — JSON-LD: **Person** schema (Alla + LinkedIn) + **ProfessionalService** schema (4 services + free offer)
- `app/page.tsx` — JSON-LD: **FAQPage** schema (4 English Q&A pairs)
- `app/opengraph-image.tsx` — dynamic 1200×630 OG image
- `app/sitemap.ts` — XML sitemap with all routes
- `public/robots.txt` — allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- `public/llms.txt` — GEO file for AI search engines (Perplexity, ChatGPT, Gemini)

### Analytics (code-complete, needs env vars)
- `@vercel/analytics` — **live immediately**, no config needed
- `@vercel/speed-insights` — **live immediately**, no config needed
- `@next/third-parties` GoogleAnalytics — **code in place, needs env var** (see below)
- GA4 `calendly_open` conversion event fires on every Calendly modal open, tagged `intro_call` vs `strategy_session`

---

## 🚧 In progress — needs your action

### 1. GA4 Measurement ID (BLOCKED — user hasn't completed setup)

**Status:** GA4 property was being created but Measurement ID was never added to Vercel.  
**Effect:** GA4 script is NOT loading on the live site. Vercel Analytics + Speed Insights ARE working.

**Steps to complete:**
1. Go to [analytics.google.com](https://analytics.google.com) → Admin → your RNDQueen property → Data Streams → Web stream → copy **Measurement ID** (`G-XXXXXXXXXX`)
2. [vercel.com](https://vercel.com) → alla-landing-page project → **Settings** → **Environment Variables** → add:
   - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (your actual ID)
   - Environment: ✅ Production
3. **Deployments** tab → Redeploy latest deployment
4. Verify: open https://rndqueen.com → View Page Source → search for `G-` → should appear in a `<script>` tag

### 2. Google Search Console (BLOCKED — waiting on GA4)

**Status:** Search Console property for rndqueen.com exists but is **not yet verified**.  
**Verification method:** Google Analytics (requires GA4 to be live on the page first — complete Step 1 above first).

**Steps to complete (after GA4 is live):**
1. Go to [search.google.com/search-console](https://search.google.com/search-console) → your rndqueen.com property
2. Click **"Google Analytics"** verification → **Verify**
3. After verified → left menu → **Sitemaps** → enter `https://rndqueen.com/sitemap.xml` → **Submit**

### 3. GSC verification meta tag (optional, once you have the token)

The code already supports it via env var. If you ever need to re-verify or use the HTML tag method:
- Vercel → Environment Variables → add `NEXT_PUBLIC_GSC_VERIFICATION` = the `content="..."` value from the GSC HTML tag
- Redeploy

---

## Key files reference

```
alla-website/
├── app/
│   ├── layout.tsx          ← metadata, JSON-LD schemas, Analytics/SpeedInsights/GA4
│   ├── page.tsx            ← main landing page (client component)
│   ├── globals.css         ← Tailwind base + a11y override classes
│   ├── sitemap.ts          ← /sitemap.xml
│   ├── opengraph-image.tsx ← dynamic OG image (1200×630)
│   ├── accessibility/      ← /accessibility page
│   ├── privacy/            ← /privacy page
│   └── terms/              ← /terms page
├── components/
│   └── AccessibilityController.tsx  ← floating a11y widget
├── lib/
│   └── content.ts          ← ALL page copy in EN / HE / RU
├── public/
│   ├── logos/              ← 7 client logo PNGs
│   ├── alla-shapiro.png    ← Alla's headshot (used in hero card)
│   ├── robots.txt
│   └── llms.txt
├── tailwind.config.ts      ← brand colors, marquee animation
├── .env.local.example      ← documents required env vars
└── HANDOFF.md              ← this file
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

## Env vars required in Vercel

| Variable | Status | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ❌ NOT SET | GA4 tracking (get from GA4 → Data Streams) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | ❌ NOT SET | Search Console meta verification (optional) |

> **Note:** Vercel Analytics and Speed Insights work without any env vars — they use the Vercel project connection automatically.

---

## Deployment workflow

```bash
# Make changes locally
npm run dev          # local dev server

# Build check before pushing
npm run build        # must pass with 0 errors

# Deploy (auto-deploys on push)
git add -A
git commit -m "your message"
git push origin main  # Vercel picks this up automatically
```

---

## Immediate next actions (priority order)

1. ✅ Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to Vercel env vars → redeploy
2. ✅ Verify Search Console via Google Analytics → submit sitemap
3. 🔜 Update Alla's LinkedIn profile URL to https://rndqueen.com (first backlink)
4. 🔜 Performance audit — run Lighthouse on https://rndqueen.com
5. 🔜 Consider: testimonial author photos in `public/testimonials/` if not already present
