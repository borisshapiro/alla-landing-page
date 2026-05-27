import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | הצהרת נגישות — RNDQueen',
  description: 'Accessibility statement for rndqueen.com, compliant with Israeli Web Accessibility Regulations and WCAG 2.1 AA.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b1120]/95 px-6 py-5">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-brand-400 hover:text-brand-300 transition">
            ← RNDQueen
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">

        {/* ── HEBREW (required by Israeli law) ───────────────────────────── */}
        <section dir="rtl" lang="he" className="mb-16" aria-label="הצהרת נגישות בעברית">
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-white">
            הצהרת נגישות — rndqueen.com
          </h1>

          <div className="space-y-6 text-base leading-8 text-slate-300">
            <p>
              אתר <strong className="text-white">rndqueen.com</strong> מחויב לנגישות דיגיטלית עבור אנשים עם מוגבלות. אנו שואפים לספק חוויית גלישה שוויונית לכל המשתמשים.
            </p>

            <h2 className="mt-10 text-xl font-bold text-white">רמת תאימות</h2>
            <p>
              האתר עומד בדרישות <strong className="text-white">תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג–2013</strong> ובהנחיות{' '}
              <strong className="text-white">WCAG 2.1 ברמה AA</strong>, בהתאם לתקן הישראלי ת״י 5568.
            </p>

            <h2 className="mt-10 text-xl font-bold text-white">מה מונגש באתר</h2>
            <ul className="space-y-3 text-slate-300">
              <li>• ניווט מלא במקלדת בכל חלקי האתר</li>
              <li>• תמיכה בקוראי מסך (NVDA, JAWS, VoiceOver)</li>
              <li>• יחסי ניגודיות צבע העומדים בתקן AA (יחס מינימלי 4.5:1 לטקסט)</li>
              <li>• תוויות ARIA מלאות לאלמנטים אינטראקטיביים</li>
              <li>• טקסט חלופי לתמונות (alt text)</li>
              <li>• תמיכה בהגדרת <em>prefers-reduced-motion</em> לצמצום אנימציות</li>
              <li>• מבנה כותרות היררכי (H1–H3) לניווט יעיל</li>
              <li>• שינוי גודל טקסט עד 200% ללא אובדן תוכן</li>
              <li>• פריסה רספונסיבית למובייל וטאבלט</li>
            </ul>

            <h2 className="mt-10 text-xl font-bold text-white">מגבלות ידועות</h2>
            <p>
              יישום הזמנת פגישות (Calendly) מוטמע כ-iframe ועשוי שלא לעמוד במלוא דרישות הנגישות. משתמשים הנתקלים בבעיה יכולים ליצור קשר ישיר בדוא״ל.
            </p>

            <h2 className="mt-10 text-xl font-bold text-white">יצירת קשר בנושא נגישות</h2>
            <p>
              לדיווח על בעיית נגישות, בקשת סיוע, או פניה בנושא נגישות, אנא פנו אלינו:
            </p>
            <p>
              <strong className="text-white">דוא״ל:</strong>{' '}
              <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                alla@rndqueen.com
              </a>
            </p>
            <p>
              נשתדל להשיב תוך <strong className="text-white">5 ימי עסקים</strong>.
            </p>

            <h2 className="mt-10 text-xl font-bold text-white">תאריך בדיקה אחרונה</h2>
            <p>הצהרה זו עודכנה לאחרונה ב: <strong className="text-white">מאי 2026</strong>.</p>
          </div>
        </section>

        <hr className="border-white/10 my-12" />

        {/* ── ENGLISH ────────────────────────────────────────────────────── */}
        <section lang="en" aria-label="Accessibility statement in English">
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-white">
            Accessibility Statement — rndqueen.com
          </h2>

          <div className="space-y-5 text-base leading-7 text-slate-300">
            <p>
              <strong className="text-white">rndqueen.com</strong> is committed to digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
            </p>

            <h3 className="mt-8 text-lg font-bold text-white">Conformance status</h3>
            <p>
              This site conforms to the <strong className="text-white">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> and to the Israeli Standard SI 5568, as required by the Israeli Equal Rights for Persons with Disabilities Regulations (Service Accessibility), 2013.
            </p>

            <h3 className="mt-8 text-lg font-bold text-white">Technical accessibility features</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Full keyboard navigation throughout the site</li>
              <li>• Screen reader support (NVDA, JAWS, VoiceOver compatible)</li>
              <li>• Colour contrast ratios meeting WCAG AA (minimum 4.5:1 for body text)</li>
              <li>• Full ARIA labelling on all interactive elements</li>
              <li>• Descriptive alt text on all images</li>
              <li>• Respects <em>prefers-reduced-motion</em> OS setting</li>
              <li>• Logical heading hierarchy (H1–H3)</li>
              <li>• Text resizes up to 200% without loss of content</li>
              <li>• Fully responsive across mobile, tablet and desktop</li>
            </ul>

            <h3 className="mt-8 text-lg font-bold text-white">Known limitations</h3>
            <p>
              The Calendly booking widget is embedded as a third-party iframe and may not fully conform to accessibility standards in all assistive technologies. Users who experience difficulty may contact us directly by email to arrange a booking.
            </p>

            <h3 className="mt-8 text-lg font-bold text-white">Feedback and contact</h3>
            <p>
              To report an accessibility issue, request assistance, or ask any accessibility-related question:
            </p>
            <p>
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                alla@rndqueen.com
              </a>
            </p>
            <p>We aim to respond within <strong className="text-white">5 business days</strong>.</p>

            <h3 className="mt-8 text-lg font-bold text-white">Last reviewed</h3>
            <p>This statement was last updated: <strong className="text-white">May 2026</strong>.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-600">
        <Link href="/" className="hover:text-slate-400 transition">← Back to rndqueen.com</Link>
        <span className="mx-3">·</span>
        <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
        <span className="mx-3">·</span>
        <Link href="/terms" className="hover:text-slate-400 transition">Terms of Use</Link>
      </footer>
    </div>
  );
}
