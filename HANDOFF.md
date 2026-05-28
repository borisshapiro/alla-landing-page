# RNDQueen — Project Handoff

**Project:** Alla Shapiro fractional VP R&D landing page  
**Live URL:** https://rndqueen.com  
**GitHub repo:** https://github.com/borisshapiro/alla-landing-page  
**Vercel project:** alla-landing-page (connected to GitHub, auto-deploys on push to `main`)  
**Last updated:** 2026-05-28 (session 4)

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

### Copy — all three languages proofread and corrected
Full expert-panel review (session 4). All corrections applied:

**English** — register, idioms, phrasing verified clean.

**Hebrew** — corrections applied across sessions:
- `שבריר` → `חלקי` (standard Israeli B2B term for "fractional")
- `בבסיס חלקי` → `בהיקף חלקי`
- `אותה קיר` → `אותו קיר` (קיר is masculine)
- `שוכרים/שוכר` → `ריטיינרים/ריטיינר` (שוכרים = apartment tenants — critical error)
- `פלט` → `תפוקה` (פלט = computer output, not business output)
- `מסתדר` → `מתרחב` (correctly conveys "scales")
- `הדליברי` → `הביצוע` (×2 — English slang written in Hebrew letters)
- `ולשלוח` → `ולשחרר` (לשלוח = postal send; לשחרר = product release/ship)
- `פוקוס` → `מיקוד` (English word in Hebrew letters)
- `גישה של "לעשות"` → `גישה של "קדימה, עושים"` (word-for-word English calque)
- `גמיש / בנוי` → `גמישות מלאה / מתאים` (masculine adj on female-led page)
- `< שבועיים` → `< 2 שבועות` (שבועיים has no digit — AnimatedNumber couldn't parse it)

**Russian** — corrections applied:
- `доставка` → `результативность / выпущенный продукт` (доставка = courier delivery)
- `С первого взгляда` → `С самого начала` (первого взгляда = romantic "love at first sight")
- `Окологович` → `Околотович` (confirmed correct spelling)
- `взаимодействие` → `проекты / контракты / сотрудничество`
- `Ценообразование` → `Стоимость зависит` (less corporate)
- `отношение "сделать это"` → `настрой «главное — результат»`
- `Кросс-дисциплинарное` → `Многопрофильное` (natural Russian)
- `физическое присутствие` → `личное присутствие`
- `нуждам` → `потребностям`

### Accessibility
- Full a11y controller widget (`components/AccessibilityController.tsx`) — 8 controls, localStorage persistence, ARIA compliant
- Trigger icon updated to universally-recognised person-with-outstretched-arms figure (session 4)
- Israeli Web Accessibility Regulations (WCAG 2.1 AA / SI 5568) compliant
- Legal pages: `/accessibility`, `/privacy`, `/terms` — all **trilingual EN + HE (RTL) + RU** with language jump nav (session 4)
- CSS override classes in `globals.css` for all a11y settings

### SEO / GEO
- `app/layout.tsx` — comprehensive metadata (metadataBase, title template, OG image, Twitter card, canonical, robots, keywords)
- `app/layout.tsx` — JSON-LD: **Person** schema (Alla + LinkedIn) + **ProfessionalService** schema (4 services + free offer)
- `app/page.tsx` — JSON-LD: **FAQPage** schema (4 English Q&A pairs)
- `app/opengraph-image.tsx` — dynamic 1200×630 OG image
- `app/sitemap.ts` — XML sitemap with all routes
- `public/robots.txt` — allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- `public/llms.txt` — GEO file for AI search engines (Perplexity, ChatGPT, Gemini)

### Analytics ✅ all live
- `@vercel/analytics` — ✅ live, no config needed
- `@vercel/speed-insights` — ✅ live, no config needed
- `@next/third-parties` GoogleAnalytics — ✅ live (`NEXT_PUBLIC_GA_MEASUREMENT_ID` set in Vercel)
- GA4 `calendly_open` conversion event fires on every Calendly modal open, tagged `intro_call` vs `strategy_session`

---

## 🚧 In progress — needs your action

### 1. Google Search Console — verify + submit sitemap (NEXT UP)

**Status:** Search Console property for rndqueen.com exists. GA4 is live on the page, so verification should work.

**Steps to complete:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console) → your rndqueen.com property
2. Click **"Google Analytics"** verification method → **Verify**
3. After verified → left menu → **Sitemaps** → enter `https://rndqueen.com/sitemap.xml` → **Submit**

### 2. GSC verification meta tag (optional fallback)

The code already supports it via env var. If the Google Analytics verification method fails:
- Vercel → Environment Variables → add `NEXT_PUBLIC_GSC_VERIFICATION` = the `content="..."` value from the GSC HTML tag
- Redeploy

### 3. GA4 Key Event — mark `calendly_open` as conversion (Alla's action)
1. Go to [analytics.google.com](https://analytics.google.com) → **RNDQueen** property
2. Left sidebar → **Admin** (gear icon at bottom)
3. Under **Data display** → **Events**
4. Find `calendly_open` in the events list
5. Toggle **Mark as key event** → Save

> **Why this matters:** GA4 Key Events are what Google Ads and GA4 reporting use to measure ROI. Without marking it, the event is recorded but not counted as a conversion.

### 4. LinkedIn profile URL → add https://rndqueen.com

Add the site URL to Alla's LinkedIn profile. This is the first backlink and a trust signal for Google.

### 5. Testimonial author photos

Photos should be in `public/testimonials/`. Expected filenames:
- `ella-vidra.jpg`
- `gabi-levy.jpg`
- `viktoria-okolotovich.jpg`

The Avatar component has a graceful fallback (initials in a colored circle) if photos are missing. Add actual photos when available for a more personal feel.

---

## Session 4 work (2026-05-28)

### Commits this session
| Commit | Change |
|---|---|
| `f054c2c` | Trilingual proofreading — critical + significant EN/HE/RU fixes |
| `6dadb9c` | Remaining style-level RU copy fixes |
| `9a76602` (session 3) | Hero image `priority`, Next.js `<Image>` logos, contrast, aria-labels |
| `f02cf55` | Accessibility icon update; smart sticky CTA; trilingual legal pages |
| `be60e8f` | Hero avatar 128px → 160px, crop `object-[center_10%]` |
| `06bd942` | Stats mobile layout; marquee touch restart; scroll-to-top on lang switch; sticky CTA anchor fix; HE copy fixes |
| `a8fc9d7` | Hebrew stat `< שבועיים` → `< 2 שבועות`; marquee `dir="ltr"` for RTL mode |
| `d27dabd` | `history.scrollRestoration = 'manual'` + scroll-to-top on page load |

### Hero avatar
- Size: `h-32 w-32` (128px) → `h-40 w-40` (160px)
- Crop: `object-top` → `object-[center_10%]` (face centred in circle)

### Accessibility widget icon
Replaced custom ad-hoc SVG with the universally-recognised person-with-outstretched-arms figure (WCAG / ISO 7001 signage shape).

### Smart mobile sticky CTA
- `IntersectionObserver` watches `#hero-cta` and `#contact-cta`
- Uses a cumulative `Map<Element, boolean>` — correctly tracks state of both targets (plain `entries.some()` only sees the changed entry, not the full state)
- Outer `fixed` div always in DOM (no transforms) — `AnimatePresence` + y-animation on inner `motion.div` only, fixing iOS Safari `fixed + transform` viewport anchor bug

### Stats blocks — mobile
`text-3xl` → `text-xl sm:text-3xl` for number; card padding and gap scaled down at small breakpoints. Fixes Hebrew longer values (`+20 שנים`, `< 2 שבועות`) overflowing the 3-column grid on 375px screens.

### Logo marquee
- `onTouchEnd` handler on track div: resets `animation` style → forces reflow → clears override. Fixes iOS/Android browser pause-on-touch with no auto-resume.
- `dir="ltr"` pinned to the marquee overflow container. Fixes Hebrew RTL mode (`<main dir="rtl">`) breaking `translateX(-25%)` — logos scrolled off-screen immediately because RTL flex places items right-to-left.

### Scroll restoration
`history.scrollRestoration = 'manual'` in a mount-only `useEffect([])`. Without this, browsers restore the previous scroll position *after* React effects fire, overriding any `scrollTo` call. Now guaranteed to start at top on every load, both desktop and mobile.

### Legal pages — trilingual
All three legal pages now have EN + HE (RTL) + RU sections with a language jump nav at the top:

| Page | Before | After |
|---|---|---|
| `/accessibility` | HE + EN | HE + EN + RU + nav |
| `/privacy` | EN only | EN + HE + RU + nav |
| `/terms` | EN only | EN + HE + RU + nav |

---

## Session 3 performance work (2026-05-27)

### Lighthouse baseline (before session 3)
| Metric | Score |
|---|---|
| Performance | 66 |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | 5.3 s 🔴 |
| TBT | 570 ms 🔴 |
| FCP | 1.2 s 🟢 |
| CLS | 0 🟢 |

### Fixes shipped (commit `9a76602`)
1. **Hero image `priority`** — `alla-shapiro.png` now gets `<link rel="preload">` in `<head>`. Expected LCP drop: 5.3 s → ~2 s.
2. **Logo images → Next.js `<Image>`** — all 7 logos served as WebP via Next.js image optimizer. ~389 KiB savings.
3. **Color contrast** — logo-bar label and footer legal links bumped to `text-slate-400` (~5.8:1, passes WCAG AA).
4. **WCAG 2.5.3 aria-labels** — language buttons now contain the visible label text in the accessible name.

### Remaining TBT issue
TBT 570 ms is driven by Framer Motion (1.2 s chunk parse time). Fixing it properly requires splitting the page into Server + Client components. If performance is a priority next session:
- Extract hero + static sections as RSC (server components)
- Use `next/dynamic` to lazy-load animated sections below the fold
- Expected improvement: performance score 90+

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
│   ├── accessibility/      ← /accessibility page (EN + HE + RU)
│   ├── privacy/            ← /privacy page (EN + HE + RU)
│   └── terms/              ← /terms page (EN + HE + RU)
├── components/
│   └── AccessibilityController.tsx  ← floating a11y widget
├── lib/
│   └── content.ts          ← ALL page copy in EN / HE / RU (fully proofread)
├── public/
│   ├── logos/              ← 7 client logo PNGs
│   ├── testimonials/       ← author photos (add when available)
│   ├── alla-shapiro.png    ← Alla's headshot (hero card, priority preload)
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

## Env vars in Vercel

| Variable | Status | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ✅ SET & LIVE | GA4 tracking — verified working via Realtime report |
| `NEXT_PUBLIC_GSC_VERIFICATION` | ⏸ NOT SET | Search Console HTML-tag fallback (optional — only needed if GA verification fails) |

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

1. ⏳ **Verify Search Console** via Google Analytics → submit sitemap.xml
2. 🔜 Update Alla's LinkedIn profile URL to https://rndqueen.com (backlink + trust signal)
3. 🔜 Add testimonial author photos to `public/testimonials/`
4. 🔜 Mark `calendly_open` as GA4 Key Event (Alla does this in GA4 Admin)
5. 🔜 Performance: refactor page into RSC + `next/dynamic` to push score from ~82 to 90+ (TBT driven by Framer Motion)
