import type { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import './globals.css';

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
  title: 'Alla Shapiro | Fractional VP R&D & Advisory',
  description:
    'Seasoned R&D leadership for startups, corporates, and game studios in Israel and globally.',
  openGraph: {
    title: 'Alla Shapiro | Fractional VP R&D & Advisory',
    description:
      'Seasoned R&D leadership for startups, corporates, and game studios in Israel and globally.',
    url: 'https://rndqueen.com',
    siteName: 'RNDQueen',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${heebo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
