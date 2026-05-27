'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion, useScroll, type Variants } from 'framer-motion';
import { content, languages, type LanguageCode } from '../lib/content';

const CALENDLY_INTRO_URL = 'https://calendly.com/allsha/30-minutes-with-alla';
const CALENDLY_CONSULT_URL = 'https://calendly.com/allsha/30min';

// ── Client logo data (language-agnostic) ─────────────────────────────────────
// Only the 8 companies agreed upon for this page.
const LOGOS = [
  { name: 'eToro',              file: '/logos/etoro.svg' },
  { name: 'Amdocs',             file: '/logos/amdocs.png' },
  { name: 'NICE',               file: '/logos/nice.png' },
  { name: '4CAST',              file: '/logos/4cast.png' },
  { name: 'LifeWard',           file: '/logos/lifeward.png' },
  { name: 'TripEx',             file: '/logos/tripex.png' },
  { name: 'Razore Engineering', file: '/logos/razore.png' },
  { name: 'Infinity',           file: '/logos/infinity.png' },
] as const;

// Section IDs are language-agnostic; nav items map to these by position
const SECTION_IDS = [
  'challenges',
  'offerings',
  'why-me',
  'testimonials',
  'process',
  'faq',
  'contact',
] as const;

// ── Crown logo ──────────────────────────────────────────────────────────────
function CrownLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5 25 L5 17 L11 21 L16 11 L21 21 L27 17 L27 25 Z" fill="currentColor" />
      <rect x="4" y="25" width="24" height="3.5" rx="1.75" fill="currentColor" />
      <circle cx="5.5" cy="16.5" r="2" fill="currentColor" opacity="0.75" />
      <circle cx="16" cy="11" r="2" fill="currentColor" opacity="0.75" />
      <circle cx="26.5" cy="16.5" r="2" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

// ── Avatar ──────────────────────────────────────────────────────────────────
function Avatar({
  src,
  name,
  size = 'md',
}: {
  src: string;
  name: string;
  size?: 'md' | 'lg' | 'xl';
}) {
  const [error, setError] = useState(false);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const dims = size === 'xl' ? 'h-32 w-32' : size === 'lg' ? 'h-24 w-24' : 'h-12 w-12';
  const textSize = size === 'xl' ? 'text-3xl' : size === 'lg' ? 'text-2xl' : 'text-sm';
  const ring = size === 'xl' ? 'ring-4' : size === 'lg' ? 'ring-4' : 'ring-2';

  if (error) {
    return (
      <div
        className={`flex ${dims} shrink-0 items-center justify-center rounded-full bg-brand-800 ${ring} ring-brand-500/40`}
      >
        <span className={`${textSize} font-bold text-brand-300`}>{initials}</span>
      </div>
    );
  }
  return (
    <div
      className={`relative ${dims} shrink-0 overflow-hidden rounded-full ${ring} ring-brand-500/40`}
    >
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover object-top"
        sizes={size === 'xl' ? '128px' : size === 'lg' ? '96px' : '48px'}
        onError={() => setError(true)}
      />
    </div>
  );
}

// ── Offering icons ──────────────────────────────────────────────────────────
const OFFERING_ICON_PATHS = [
  // VP R&D — org hierarchy
  'M12 4a2 2 0 100 4 2 2 0 000-4zm0 4v3m-5 1a2 2 0 100 4 2 2 0 000-4zm0 2H7m5-2l-5 2m0 0v0m10-2a2 2 0 100 4 2 2 0 000-4zm0 2h2M12 11l5 2',
  // Game Studio — gamepad
  'M6 12h2m0 0v2m0-2V10m4 4h.01m3-.01h.01M4 8h16a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z',
  // Team Scaling — people
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  // R&D Leadership — star
  'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
];

function OfferingIcon({ index }: { index: number }) {
  return (
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/20 ring-1 ring-brand-500/30">
      <svg
        className="h-5 w-5 text-brand-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={OFFERING_ICON_PATHS[index % OFFERING_ICON_PATHS.length]} />
      </svg>
    </div>
  );
}

// ── FAQ chevron ─────────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-brand-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ── Animated counter ─────────────────────────────────────────────────────────
// Parses strings like "20+ yrs", "< 2 weeks", "3 continents"
// and counts the numeric portion up from 0 when first visible.
// splitUnit=true: renders the suffix on a separate smaller line (for stat cards).
function AnimatedNumber({
  value,
  reduceMotion,
  splitUnit = false,
}: {
  value: string;
  reduceMotion: boolean | null;
  splitUnit?: boolean;
}) {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState<number>(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!match || started) return;
    const target = parseInt(match[2], 10);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
        if (reduceMotion) { setCount(target); return; }
        const duration = 1100;
        let startTime: number | null = null;
        const step = (ts: number) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) return <span ref={ref}>{value}</span>;
  const [, prefix, , suffix] = match;
  const unit = suffix.trim();

  // Split display: large number line + smaller unit line
  if (splitUnit) {
    return (
      <>
        <span ref={ref} className="text-3xl font-extrabold leading-none tracking-tight text-white">
          {prefix}{count}
        </span>
        {unit && (
          <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
            {unit}
          </span>
        )}
      </>
    );
  }

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState(CALENDLY_INTRO_URL);
  const [activeSection, setActiveSection] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const closeCalendlyRef = useRef<HTMLButtonElement>(null);
  const pageContent = content[language];
  const isRTL = language === 'he';

  // Reset UI when language changes
  useEffect(() => {
    setOpenFaqIndex(null);
    setMobileNavOpen(false);
  }, [language]);

  // Escape key closes overlays
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileNavOpen(false);
        setCalendlyOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Scroll-spy: highlight the active nav item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Show back-to-top button after scrolling past the fold
  useEffect(() => {
    function onScroll() {
      setShowBackToTop(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Focus the modal close button when Calendly opens
  useEffect(() => {
    if (calendlyOpen) {
      setTimeout(() => closeCalendlyRef.current?.focus(), 80);
    }
  }, [calendlyOpen]);

  // Animations
  const fadeUp: Variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      };

  const headerVariants: Variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
      };

  function openCalendly(url: string) {
    setCalendlyUrl(url);
    setCalendlyOpen(true);
  }

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <main
      className="min-h-screen bg-brand-950 pb-24 text-slate-100 md:pb-0"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* ── SCROLL PROGRESS ────────────────────────────────────────────────── */}
      <motion.div
        className="fixed left-0 top-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-brand-600 via-brand-400 to-brand-200"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="sticky top-0 z-30 border-b border-white/10 bg-brand-950/95 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          {/* Brand */}
          <a
            href="#"
            className="flex shrink-0 items-center gap-3"
            aria-label="RNDQueen — back to top"
          >
            <CrownLogo className="h-8 w-8 text-brand-400" />
            <div>
              {/* Name hidden on smallest screens to keep room for lang switcher */}
              <p className="hidden text-sm font-bold uppercase tracking-[0.22em] text-white sm:block">
                Alla Shapiro
              </p>
              <p className="hidden text-xs text-slate-400 lg:block">
                RNDQueen · Fractional VP R&D
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-5 text-sm text-slate-400 lg:flex"
              aria-label="Main navigation"
            >
              {pageContent.header.nav.map((item, i) => (
                <a
                  key={item}
                  href={`#${SECTION_IDS[i]}`}
                  aria-current={activeSection === SECTION_IDS[i] ? 'true' : undefined}
                  className={`transition-colors hover:text-white ${
                    activeSection === SECTION_IDS[i] ? 'font-semibold text-white' : ''
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Language switcher */}
            <div
              className="inline-flex gap-1 rounded-full border border-slate-700/80 bg-slate-950/90 p-1"
              role="group"
              aria-label="Select language"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code as LanguageCode)}
                  aria-pressed={language === lang.code}
                  aria-label={
                    lang.code === 'en'
                      ? 'Switch to English'
                      : lang.code === 'he'
                        ? 'עברית'
                        : 'Русский'
                  }
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    language === lang.code
                      ? 'bg-brand-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileNavOpen((s) => !s)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileNavOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-300 hover:bg-white/5 lg:hidden"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── MOBILE NAV DRAWER ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setMobileNavOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} z-50 h-full w-72 bg-brand-900 p-6 shadow-2xl`}
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CrownLogo className="h-6 w-6 text-brand-400" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                    Menu
                  </span>
                </div>
                <button
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-slate-300 hover:bg-white/10"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {pageContent.header.nav.map((item, i) => (
                  <a
                    key={item}
                    href={`#${SECTION_IDS[i]}`}
                    onClick={() => setMobileNavOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition hover:bg-white/5 hover:text-white ${
                      activeSection === SECTION_IDS[i]
                        ? 'bg-brand-600/20 text-white'
                        : 'text-slate-300'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              {/* Language switching is in the header bar — always visible outside this drawer */}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-brand-500/30 via-brand-600/10 to-transparent blur-3xl" />

        {/* Floating ambient orbs — no -z-10 (that buries them behind the bg); source order keeps them under content */}
        {!reduceMotion && (
          <>
            {/* Large violet orb — right side of hero card */}
            <motion.div
              animate={{ y: [0, -44, 0], x: [0, 22, 0], scale: [1, 1.07, 1] }}
              transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute right-[12%] top-16 h-[30rem] w-[30rem] rounded-full bg-brand-500/30 blur-[72px]"
              aria-hidden="true"
            />
            {/* Mid orb — lower-left */}
            <motion.div
              animate={{ y: [0, 36, 0], x: [0, -28, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
              className="pointer-events-none absolute bottom-0 left-[18%] h-[22rem] w-[22rem] rounded-full bg-brand-600/22 blur-[60px]"
              aria-hidden="true"
            />
            {/* Small accent orb — far left edge */}
            <motion.div
              animate={{ y: [0, -24, 0], x: [0, 16, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="pointer-events-none absolute left-[4%] top-1/3 h-56 w-56 rounded-full bg-brand-400/18 blur-[44px]"
              aria-hidden="true"
            />
          </>
        )}

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
            {/* Left — headline + CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={reduceMotion ? {} : { delay: 0.1, duration: 0.55, ease: 'easeOut' }}
              className="max-w-2xl space-y-8"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-900/70 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-brand-300">
                <CrownLogo className="h-3.5 w-3.5" />
                {pageContent.header.tagline}
              </p>

              <div className="space-y-5">
                <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
                  {pageContent.hero.title}
                </h1>
                <p className="max-w-xl text-lg leading-7 text-slate-300 sm:text-xl">
                  {pageContent.hero.subtitle}
                </p>
              </div>

              {/* Urgency */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
                <span className="text-xs font-medium text-amber-300">{pageContent.hero.urgency}</span>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => openCalendly(CALENDLY_INTRO_URL)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-glow shadow-brand-500/30 transition hover:bg-brand-400 sm:w-auto"
                  >
                    {pageContent.hero.ctaIntro}
                  </button>
                  <button
                    onClick={() => openCalendly(CALENDLY_CONSULT_URL)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-slate-600 bg-slate-950/80 px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-brand-500/60 hover:bg-brand-900/30 sm:w-auto"
                  >
                    {pageContent.hero.ctaConsult}
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  {isRTL
                    ? 'שיחה חינם 30 דקות · ללא התחייבות · זמינה מרחוק'
                    : language === 'ru'
                      ? 'Бесплатный 30-мин звонок · Без обязательств · Удалённо'
                      : 'Free 30-min call · No commitment · Available remotely'}
                </p>
              </div>
            </motion.div>

            {/* Right — profile card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={reduceMotion ? {} : { delay: 0.22, duration: 0.55, ease: 'easeOut' }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow shadow-brand-500/20 backdrop-blur-xl sm:p-10 lg:w-[38rem]"
            >
              <div className="space-y-6">
                {/* Photo + name — horizontal, left-aligned */}
                <div className="flex items-center gap-6">
                  <Avatar src="/alla-shapiro.png" name="Alla Shapiro" size="xl" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-brand-300">
                      {isRTL ? 'VP R&D שבריר · RNDQueen' : 'Fractional VP R&D · RNDQueen'}
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                      Alla Shapiro
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-400">
                      {isRTL
                        ? 'שותפה ניהולית מהימנה'
                        : language === 'ru'
                          ? 'Надёжный партнёр-руководитель'
                          : 'Trusted executive partner'}
                    </p>
                  </div>
                </div>

                {/* Short bio */}
                <p className="text-sm leading-6 text-slate-400">
                  {isRTL
                    ? 'מקצוענית ניהול R&D בכירה עם עשרות שנות ניסיון בהובלת צוותי הנדסה גלובליים, סטודיות גיים וארגוני תוכנה ברחבי העולם.'
                    : language === 'ru'
                      ? 'Опытный R&D руководитель с десятилетиями опыта в управлении глобальными инженерными командами, игровыми студиями и программными организациями.'
                      : 'Senior R&D management professional with decades of experience leading global engineering teams, game studios and software organizations across international markets.'}
                </p>

                {/* Outcome-focused stats — number first (big), unit accent, label last (small) */}
                <div className="grid grid-cols-3 gap-3">
                  {pageContent.hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center rounded-2xl border border-white/8 bg-brand-900/60 px-2 py-5 text-center"
                    >
                      <AnimatedNumber
                        value={stat.value}
                        reduceMotion={reduceMotion}
                        splitUnit
                      />
                      <p className="mt-3 text-[10px] font-medium leading-snug text-slate-500 sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOGO BAR — animated image marquee ────────────────────────────── */}
      <div className="border-t border-white/8 bg-brand-900 py-8">
        <p className="mb-7 px-6 text-center text-xs uppercase tracking-[0.28em] text-slate-500">
          {pageContent.logoBar.label}
        </p>
        {reduceMotion ? (
          /* Static grid for users who prefer reduced motion */
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {LOGOS.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.file}
                  alt={logo.name}
                  className="h-7 w-auto max-w-[110px] object-contain brightness-0 invert opacity-40"
                />
              ))}
            </div>
          </div>
        ) : (
          /* Animated marquee: logos doubled for seamless CSS loop */
          <div className="relative overflow-hidden">
            {/* Fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-brand-900 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-brand-900 to-transparent" />
            {/* Track: 4× copies so translateX(-25%) = exactly 1 set, robust on any screen */}
            <div className="flex w-max animate-marquee items-center gap-24 py-2">
              {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={logo.file}
                  alt={logo.name}
                  className="h-12 w-auto max-w-[200px] shrink-0 object-contain brightness-0 invert opacity-50 transition-opacity duration-300 hover:opacity-85"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── CHALLENGES ─────────────────────────────────────────────────────── */}
      <motion.section
        id="challenges"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-t border-white/10 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-brand-950/80 p-10 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
                  {pageContent.challenges.title}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {pageContent.challenges.subtitle}
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {pageContent.challenges.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-slate-800/80 bg-brand-900/60 p-5 transition hover:border-slate-700 hover:bg-brand-900/80"
                  >
                    <p className="text-sm leading-6 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── OFFERINGS ──────────────────────────────────────────────────────── */}
      <motion.section
        id="offerings"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-t border-white/10 bg-brand-800/40 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
                {isRTL
                  ? 'כך אני פותרת את זה'
                  : language === 'ru'
                    ? 'Вот как я это решаю'
                    : "Here's how I fix it"}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {isRTL
                  ? 'מנהיגות R&D מעשית שזזה בקצב שלך.'
                  : language === 'ru'
                    ? 'Практическое R&D руководство в вашем темпе.'
                    : 'Hands-on R&D leadership that moves at your speed.'}
              </h2>
              <p className="max-w-lg text-base leading-7 text-slate-300">
                {isRTL
                  ? 'אני מתחברת לארגון שלך ומתחילה לספק תוצאות בימים, לא בחודשים. ללא עלייה לאוויר ארוכה — רק מנהיגות מובנית ממוקדת בתוצאות שאתה צריך.'
                  : language === 'ru'
                    ? 'Я включаюсь в вашу организацию и начинаю давать результаты за дни, а не месяцы. Без долгого онбординга — только структурированное руководство, ориентированное на нужные вам результаты.'
                    : 'I plug into your organization and start delivering in days, not months. No long onboarding — just structured leadership focused on the outcomes you need.'}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pageContent.offerings.map((item, i) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-brand-950/70 p-6 transition hover:border-brand-500/30 hover:bg-brand-950/90 hover:shadow-glow-sm hover:shadow-brand-500/10"
                >
                  <OfferingIcon index={i} />
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── WHY ME ─────────────────────────────────────────────────────────── */}
      <motion.section
        id="why-me"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="border-t border-white/10 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
                {isRTL ? 'למה לעבוד עם אלה' : language === 'ru' ? 'Почему Алла' : 'Why work with Alla'}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {pageContent.why.title}
              </h2>
              <p className="max-w-lg text-base leading-7 text-slate-300">{pageContent.why.description}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {pageContent.why.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-slate-800/80 bg-brand-900/50 p-5 transition hover:border-slate-700 hover:bg-brand-900/80"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-brand-900/80 p-8 ring-1 ring-white/8">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
                {isRTL
                  ? 'תמונת ניסיון'
                  : language === 'ru'
                    ? 'Ключевые достижения'
                    : 'Experience snapshot'}
              </p>
              <ul className="mt-6 space-y-5">
                {pageContent.experience.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="border-t border-white/10 bg-brand-800/40 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
              {isRTL ? 'מה אנשים אומרים' : language === 'ru' ? 'Что говорят люди' : 'What people say'}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {isRTL
                ? 'מהימנה על מנהיגים בתעשיות שונות.'
                : language === 'ru'
                  ? 'Доверие руководителей из разных отраслей.'
                  : 'Trusted by leaders across industries.'}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pageContent.testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-brand-900/80 p-7 transition hover:border-white/20 hover:shadow-glow-sm hover:shadow-brand-500/12"
              >
                <blockquote className="text-sm leading-7 text-slate-300">
                  <span
                    className="mb-3 block text-2xl leading-none text-brand-400"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-4 border-t border-white/10 pt-5">
                  <Avatar src={t.photo} name={t.name} />
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="mt-0.5 text-xs text-brand-300">
                      {t.title} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── PROCESS ────────────────────────────────────────────────────────── */}
      <motion.section
        id="process"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-t border-white/10 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
                {isRTL
                  ? 'מודל התקשרות'
                  : language === 'ru'
                    ? 'Модель взаимодействия'
                    : 'Engagement model'}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {isRTL
                  ? 'פשוט, מהיר וממוקד ערך.'
                  : language === 'ru'
                    ? 'Просто, быстро и ориентировано на ценность.'
                    : 'Simple, fast and focused on value.'}
              </h2>
              <p className="max-w-md text-base leading-7 text-slate-300">
                {isRTL
                  ? 'התחל בשיחת היכרות, הערך את ההזדמנות יחד, ובחר את מודל ההתקשרות המתאים לצרכיך.'
                  : language === 'ru'
                    ? 'Начните с вводного звонка, оцените возможность вместе и выберите модель взаимодействия, подходящую вашим потребностям.'
                    : 'Start with an intro call, evaluate the opportunity together, and choose the engagement model that matches your team\'s needs.'}
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-brand-900/60 p-8">
              <ol className="space-y-4">
                {pageContent.process.map((step, i) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl bg-brand-800/60 p-5 transition hover:bg-brand-800/90"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600/30 text-sm font-bold text-brand-300 ring-1 ring-brand-500/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <motion.section
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-t border-white/10 bg-brand-800/40 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-10 space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
              {isRTL ? 'יש לך שאלות?' : language === 'ru' ? 'Есть вопросы?' : 'Got questions?'}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {isRTL
                ? 'שאלות נפוצות.'
                : language === 'ru'
                  ? 'Часто задаваемые вопросы.'
                  : 'Frequently asked questions.'}
            </h2>
          </div>
          <div className="space-y-3">
            {pageContent.faq.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-brand-900/70"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  aria-expanded={openFaqIndex === i}
                  id={`faq-q-${i}`}
                  aria-controls={`faq-a-${i}`}
                >
                  <span className="text-sm font-bold text-white">{item.question}</span>
                  <Chevron open={openFaqIndex === i} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIndex === i && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      key={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-7 text-slate-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-brand-600/30 bg-gradient-to-br from-brand-900 to-brand-800/60 p-10 shadow-glow shadow-brand-500/12 sm:p-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-400">
                  {isRTL ? 'בואו נדבר' : language === 'ru' ? 'Давайте поговорим' : "Let's talk"}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {isRTL
                    ? 'אתגרי ה-R&D שלך לא יפתרו מעצמם.'
                    : language === 'ru'
                      ? 'Ваши R&D задачи не решатся сами по себе.'
                      : "Your R&D challenges won't solve themselves."}
                </h2>
                <p className="text-base leading-7 text-slate-300">
                  {isRTL
                    ? 'קבע שיחת היכרות חינם של 30 דקות. אין הצגה, אין התחייבות — רק שיחה כנה על צרכי הצוות שלך ואם אני יכולה לעזור.'
                    : language === 'ru'
                      ? 'Запишитесь на бесплатный 30-минутный вводный звонок. Никаких питчей, никаких обязательств — просто честный разговор о потребностях вашей команды и смогу ли я помочь.'
                      : "Book a free 30-minute intro call. No pitch, no commitment — just an honest conversation about your team's needs and whether I can help."}
                </p>
              </div>
              <div className="shrink-0 space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => openCalendly(CALENDLY_INTRO_URL)}
                    className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-glow shadow-brand-500/30 transition hover:bg-brand-400"
                  >
                    {pageContent.hero.ctaIntro}
                  </button>
                  <button
                    onClick={() => openCalendly(CALENDLY_CONSULT_URL)}
                    className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-950/80 px-8 py-4 text-sm font-bold text-slate-100 transition hover:border-brand-500/60 hover:bg-brand-900/40"
                  >
                    {pageContent.hero.ctaConsult}
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  {isRTL
                    ? 'שיחה חינם 30 דקות · אין הצגה · ללא התחייבות'
                    : language === 'ru'
                      ? 'Бесплатный 30-мин звонок · Без питча · Без обязательств'
                      : 'Free 30-min call · No pitch · No commitment'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-brand-950/90 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>{pageContent.footer.copyright}</p>
            <nav className="flex flex-wrap items-center gap-5" aria-label="Footer links">
              <a
                href={pageContent.footer.linkedInHref}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                LinkedIn
              </a>
              <a
                href={CALENDLY_INTRO_URL}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
                aria-label="Book a call on Calendly (opens in new tab)"
              >
                Calendly
              </a>
              <a
                href={pageContent.footer.emailHref}
                className="transition hover:text-white"
                aria-label="Send email"
              >
                Email
              </a>
            </nav>
          </div>
          {/* Legal links */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/8 pt-6 text-xs text-slate-600">
            <a href="/accessibility" className="transition hover:text-slate-400">
              {pageContent.legal.accessibility}
            </a>
            <a href="/privacy" className="transition hover:text-slate-400">
              {pageContent.legal.privacy}
            </a>
            <a href="/terms" className="transition hover:text-slate-400">
              {pageContent.legal.terms}
            </a>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ──────────────────────────────────────────────── */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <div className="mx-auto flex max-w-sm gap-3 rounded-full bg-brand-900/95 px-3 py-2.5 shadow-2xl ring-1 ring-white/10 backdrop-blur">
          <button
            onClick={() => openCalendly(CALENDLY_INTRO_URL)}
            className="flex-1 rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-brand-400"
          >
            {isRTL ? 'שיחת היכרות' : language === 'ru' ? 'Вводный звонок' : 'Free intro call'}
          </button>
          <button
            onClick={() => openCalendly(CALENDLY_CONSULT_URL)}
            className="flex-1 rounded-full border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-brand-500/50"
          >
            {isRTL ? 'אסטרטגיה' : language === 'ru' ? 'Стратегия' : 'Strategy'}
          </button>
        </div>
      </div>

      {/* ── BACK TO TOP ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-30 hidden h-11 w-11 items-center justify-center rounded-full bg-brand-600/90 text-white shadow-glow-sm shadow-brand-500/30 transition hover:bg-brand-500 md:flex"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
            }
            aria-label="Back to top"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── CALENDLY MODAL ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {calendlyOpen && (
          <motion.div
            key="calendly-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
            role="dialog"
            aria-label="Schedule a call with Alla"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setCalendlyOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 48 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-t-3xl bg-slate-900 sm:rounded-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <p className="text-sm font-semibold text-white">
                  {calendlyUrl === CALENDLY_CONSULT_URL
                    ? isRTL ? 'פגישת אסטרטגיה עם אלה' : language === 'ru' ? 'Стратегическая сессия с Аллой' : 'Strategy Session with Alla'
                    : isRTL ? 'שיחת היכרות חינם עם אלה' : language === 'ru' ? 'Бесплатная встреча с Аллой' : 'Free Intro Call with Alla'}
                </p>
                <button
                  ref={closeCalendlyRef}
                  onClick={() => setCalendlyOpen(false)}
                  aria-label="Close scheduling widget"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:bg-white/10"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* min-h-[750px] ensures Calendly's booking flow renders without its own internal scroll */}
              <div className="h-[calc(100svh-120px)] min-h-[680px] max-h-[860px]">
                <iframe
                  title="Calendly booking"
                  src={`${calendlyUrl}?embed_domain=rndqueen.com&embed_type=Inline&hide_gdpr_banner=1&background_color=0b1120&text_color=e2e8f0&primary_color=7f5cc6`}
                  className="h-full w-full border-0"
                  allow="camera; microphone; fullscreen; autoplay"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
