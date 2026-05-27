import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alla | Fractional VP R&D & Advisory',
  description: 'Seasoned R&D leadership for startups, corporates, and game studios in Israel and globally.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
