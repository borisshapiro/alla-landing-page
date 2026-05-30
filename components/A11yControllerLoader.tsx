'use client';

import dynamic from 'next/dynamic';

// Client component wrapper so we can use ssr: false (not allowed in Server Components).
// This keeps Framer Motion out of the critical JS bundle — it only loads after the
// page is interactive, when the browser fetches this chunk.
const AccessibilityController = dynamic(
  () => import('./AccessibilityController'),
  { ssr: false },
);

export default function A11yControllerLoader() {
  return <AccessibilityController />;
}
