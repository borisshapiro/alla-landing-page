import type { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import './globals.css';
import AccessibilityController from '@/components/AccessibilityController';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Heebo is the standard Hebrew web font — clean, modern, excellent for both HE and LTR
const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rndqueen.com'),
  title: {
    default: 'Alla Shapiro — Fractional VP R&D & Advisory | RNDQueen',
    template: '%s | RNDQueen',
  },
  description:
    'Hire a Fractional VP R&D without the full-time cost. Alla Shapiro — 20+ years leading R&D teams for startups, corporates, and game studios in Israel and globally. Engagements start in < 2 weeks.',
  keywords: [
    'fractional VP R&D',
    'fractional CTO',
    'fractional engineering leadership',
    'R&D advisory',
    'startup CTO Israel',
    'engineering management consultant',
    'game studio R&D leadership',
    'tech leadership Israel',
    'Alla Shapiro',
    'RNDQueen',
    'interim VP engineering',
    'outsourced R&D management',
  ],
  authors: [{ name: 'Alla Shapiro', url: 'https://www.linkedin.com/in/allsha/' }],
  creator: 'Alla Shapiro',
  openGraph: {
    type: 'website',
    url: 'https://rndqueen.com',
    siteName: 'RNDQueen',
    locale: 'en_US',
    title: 'Alla Shapiro — Fractional VP R&D & Advisory | RNDQueen',
    description:
      'Senior R&D leadership for startups, corporates, and game studios. 20+ years of experience across 3 continents. Start in < 2 weeks. Serving Israel and global clients.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Alla Shapiro — Fractional VP R&D & Advisory | RNDQueen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alla Shapiro — Fractional VP R&D & Advisory',
    description:
      'Senior R&D leadership for startups, corporates, and game studios. 20+ years experience. Start in < 2 weeks.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://rndqueen.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Set NEXT_PUBLIC_GSC_VERIFICATION in Vercel env vars once you have the
  // HTML-tag verification code from Google Search Console.
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

// ── Structured data (JSON-LD) ────────────────────────────────────────────────

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alla Shapiro',
  url: 'https://rndqueen.com',
  jobTitle: 'Fractional VP R&D',
  description:
    'Senior R&D management professional with 20+ years of experience leading global engineering teams, game studios, and software organizations across Israel and international markets.',
  sameAs: ['https://www.linkedin.com/in/allsha/'],
  email: 'alla@rndqueen.com',
  knowsAbout: [
    'R&D Management',
    'Engineering Leadership',
    'Game Studio Management',
    'Product Development',
    'Team Scaling',
    'Technology Strategy',
    'Startup Advisory',
    'Fractional Executive Services',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'RNDQueen',
    url: 'https://rndqueen.com',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'RNDQueen — Fractional VP R&D & Advisory',
  url: 'https://rndqueen.com',
  description:
    'Fractional VP R&D and engineering leadership services for startups, corporates, and game studios. Available globally with on-site availability in Israel.',
  provider: {
    '@type': 'Person',
    name: 'Alla Shapiro',
    url: 'https://rndqueen.com',
  },
  areaServed: ['Israel', 'Global'],
  serviceType: [
    'Fractional VP R&D',
    'Fractional Engineering Leadership',
    'R&D Advisory',
    'Game Studio R&D Leadership',
    'Engineering Team Scaling',
    'Technology Strategy Consulting',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'R&D Leadership Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Fractional VP R&D',
        description:
          'Part-time senior R&D leadership embedded in your organization. Strategy, hiring, processes, and team performance — without the full-time cost.',
      },
      {
        '@type': 'Offer',
        name: 'Game Studio R&D Leadership',
        description:
          'Specialized R&D leadership for game studios — production oversight, team structure, technical direction, and cross-functional alignment.',
      },
      {
        '@type': 'Offer',
        name: 'Engineering Team Scaling',
        description:
          'Build and grow high-performing R&D teams. Hiring processes, onboarding frameworks, and organizational design for rapid scale.',
      },
      {
        '@type': 'Offer',
        name: 'R&D Advisory',
        description:
          'Strategic advisory for founders and CEOs on R&D direction, technology choices, team structure, and engineering culture.',
      },
    ],
  },
  offers: {
    '@type': 'Offer',
    name: 'Free 30-Minute Intro Call',
    price: '0',
    priceCurrency: 'USD',
    url: 'https://calendly.com/allsha/30-minutes-with-alla',
    description:
      'Free discovery call to understand your R&D challenges and evaluate fit. No pitch, no commitment.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${heebo.variable}`}>
      <body>
        {children}
        <AccessibilityController />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* ── Analytics ─────────────────────────────────────────────────── */}
        {/* Vercel Analytics — page views, countries, referrers; no cookies */}
        <Analytics />
        {/* Vercel Speed Insights — real-user Core Web Vitals (LCP, CLS, INP) */}
        <SpeedInsights />
        {/* Google Analytics 4 — set NEXT_PUBLIC_GA_MEASUREMENT_ID in Vercel */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
