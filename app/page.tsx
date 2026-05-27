 'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { content, languages } from '../lib/content';

const CALENDLY_URL = 'https://calendly.com/alla-rndqueen/intro';
const pageContent = content.en;

// fadeUp moved into the component to respect reduced-motion user settings

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    // close overlays on escape
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileNavOpen(false);
        setCalendlyOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const fadeUp = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      };

  return (
    <main className="min-h-screen bg-brand-950 text-slate-100">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        className="sticky top-0 z-30 border-b border-white/10 bg-brand-950/95 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-300">Alla Shapiro</p>
            <p className="text-sm text-slate-300">Fractional VP R&D, advisory, and team scaling for product organizations.</p>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4 text-sm text-slate-300">
              {pageContent.header.nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <div className="inline-flex gap-2 rounded-full border border-slate-700/80 bg-slate-950/90 px-2 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`rounded-full px-2 py-1 text-sm font-semibold transition ${lang.code === 'en' ? 'bg-brand-500 text-white' : 'text-slate-400 hover:text-white'}`}
                  type="button"
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Hamburger for mobile */}
            <button
              onClick={() => setMobileNavOpen((s) => !s)}
              aria-label="Toggle menu"
              className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-white/3 md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile nav overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileNavOpen(false)} />
          <div className="relative ml-auto w-3/4 max-w-xs bg-brand-950/95 p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Menu</p>
              </div>
              <button onClick={() => setMobileNavOpen(false)} aria-label="Close menu" className="text-slate-300">
                ✕
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-4">
              {pageContent.header.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="text-lg font-semibold text-slate-100"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-6 inline-flex gap-2">
              {languages.map((lang) => (
                <button key={lang.code} className="rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-200">
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden pt-8">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-brand-600/20 via-transparent to-transparent blur-3xl" />
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="max-w-2xl space-y-8"
            >
              <p className="inline-flex rounded-full border border-brand-500/40 bg-brand-900/70 px-4 py-1 text-sm uppercase tracking-[0.28em] text-brand-300">
                {pageContent.header.tagline}
              </p>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {pageContent.hero.title}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                  {pageContent.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-glow shadow-brand-500/25 transition hover:bg-brand-400 sm:w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  {pageContent.hero.ctaIntro}
                </a>
                <a
                  href={CALENDLY_URL}
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-500/60 sm:w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  {pageContent.hero.ctaConsult}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="grid place-items-center rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow shadow-brand-500/25 backdrop-blur-xl sm:p-10 lg:w-[38rem]"
            >
              <div className="space-y-5 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Trusted executive partner</p>
                <h2 className="text-3xl font-semibold text-white">Alla Shapiro</h2>
                <p className="mx-auto max-w-xl text-base leading-7 text-slate-300">
                  Senior R&D management professional with decades of experience leading global engineering teams, game studios and software organizations across international markets.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-slate-700/80 bg-brand-900/70 p-5 text-left">
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Experience</p>
                    <p className="mt-3 text-2xl font-semibold text-white">20+ yrs</p>
                  </div>
                  <div className="rounded-3xl border border-slate-700/80 bg-brand-900/70 p-5 text-left">
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Markets</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Israel + Global</p>
                  </div>
                  <div className="rounded-3xl border border-slate-700/80 bg-brand-900/70 p-5 text-left">
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Engagements</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Fractional & advisory</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="offerings"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-t border-white/10 bg-brand-900/70 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-300">How I help teams</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Practical leadership for high-growth R&D organizations.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                I partner with product and technology leaders to turn strategy into execution, reduce risk in scaling engineering organizations, and deliver team readiness for real business outcomes.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {pageContent.offerings.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-brand-950/80 p-6 shadow-xl shadow-black/10">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="challenges"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-brand-950/80 p-10 shadow-xl shadow-black/10 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-300">{pageContent.challenges.title}</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">{pageContent.challenges.subtitle}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {pageContent.challenges.points.map((point) => (
                  <div key={point} className="rounded-3xl border border-slate-800/90 bg-slate-950/90 p-6">
                    <p className="text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="why-work-with-me"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-t border-white/10 bg-brand-950/80 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Why choose this support</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{pageContent.why.title}</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">{pageContent.why.description}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {pageContent.why.highlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6">
                    <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-brand-300">{highlight.title}</h3>
                    <p className="mt-4 text-slate-300">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-brand-900/80 p-10 text-slate-200 shadow-glow shadow-brand-500/20">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Experience snapshot</p>
              <ul className="mt-8 space-y-6 text-lg leading-8">
                {pageContent.experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

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
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Engagement model</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple, fast and focused on value.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Start with an intro call, evaluate the opportunity together, and choose the engagement model that matches your team’s needs: advisory, interim leadership, or a tailored fractional partnership.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10">
              <div className="space-y-6">
                {pageContent.process.map((step) => (
                  <div key={step.title} className="rounded-3xl bg-brand-900/80 p-6 text-slate-200">
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-3 text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-brand-900/70 p-10 shadow-xl shadow-black/20 sm:p-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-5">
                <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Ready to talk</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Book an intro call or consultation session.</h2>
                <p className="text-lg leading-8 text-slate-300">
                  Let’s explore how fractional R&D leadership, advisory, or team scaling can accelerate your next product effort.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-glow shadow-brand-500/25 transition hover:bg-brand-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  {pageContent.hero.ctaIntro}
                </a>
                <a
                  href={CALENDLY_URL}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-brand-500/60"
                  target="_blank"
                  rel="noreferrer"
                >
                  {pageContent.hero.ctaConsult}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mobile sticky CTA: visible only on small screens for quick booking */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <div className="mx-auto max-w-3xl flex gap-3 rounded-full bg-brand-900/95 px-3 py-3 shadow-lg">
          <button
            onClick={() => setCalendlyOpen(true)}
            className="flex-1 rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white"
            aria-label="Book intro call"
          >
            Book intro
          </button>
          <button
            onClick={() => setCalendlyOpen(true)}
            className="flex-1 rounded-full border border-slate-700 bg-transparent px-4 py-3 text-center text-sm font-semibold text-slate-100"
            aria-label="Book consultation hour"
          >
            Consult
          </button>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-brand-950/90 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>{pageContent.footer.copyright}</p>
          <p>{pageContent.footer.contacts}</p>
        </div>
      </footer>

      {/* Calendly modal (mobile-friendly embed) */}
      {calendlyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setCalendlyOpen(false)} />
          <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-900">
            <div className="flex items-center justify-between border-b border-white/8 p-3">
              <div className="text-sm font-semibold text-white">Schedule with Alla</div>
              <button onClick={() => setCalendlyOpen(false)} className="text-slate-300">✕</button>
            </div>
            <div className="h-[70vh] w-full">
              <iframe
                title="Calendly booking"
                src={`${CALENDLY_URL}?embed_domain=rndqueen.com&embed_type=Inline`}
                className="h-full w-full border-0"
                allow="camera; microphone; fullscreen; autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
