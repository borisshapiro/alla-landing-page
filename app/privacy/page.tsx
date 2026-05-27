import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — RNDQueen',
  description: 'Privacy policy for rndqueen.com — GDPR and Israeli Privacy Protection Law compliance.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100">
      <header className="border-b border-white/10 bg-[#0b1120]/95 px-6 py-5">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-brand-400 hover:text-brand-300 transition">
            ← RNDQueen
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white">Privacy Policy</h1>
        <p className="mb-12 text-sm text-slate-500">Last updated: May 2026</p>

        <div className="space-y-10 text-base leading-7 text-slate-300">

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">1. Who we are</h2>
            <p>
              This website (<strong className="text-white">rndqueen.com</strong>) is operated by <strong className="text-white">Alla Shapiro</strong>, providing fractional VP R&D and advisory services. For privacy matters, contact:{' '}
              <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                alla@rndqueen.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">2. What data we collect and why</h2>
            <p className="mb-4">
              This website does not directly collect or store personal data through forms or cookies. However, the following data is processed through third-party services we use:
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="px-5 py-3 font-semibold text-white">Data</th>
                    <th className="px-5 py-3 font-semibold text-white">Source</th>
                    <th className="px-5 py-3 font-semibold text-white">Purpose</th>
                    <th className="px-5 py-3 font-semibold text-white">Legal basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  <tr>
                    <td className="px-5 py-3">Name, email address, phone (optional)</td>
                    <td className="px-5 py-3">Calendly booking widget</td>
                    <td className="px-5 py-3">Scheduling and confirming meetings</td>
                    <td className="px-5 py-3">Consent (you voluntarily fill in the form)</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">IP address, browser, device</td>
                    <td className="px-5 py-3">Vercel hosting infrastructure</td>
                    <td className="px-5 py-3">Service delivery, security, error logging</td>
                    <td className="px-5 py-3">Legitimate interest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">3. Cookies</h2>
            <p>
              This website does not set any first-party cookies. Calendly, when embedded, may set session cookies in accordance with{' '}
              <a href="https://calendly.com/privacy" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300">
                Calendly's Privacy Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">4. How long we keep your data</h2>
            <p>
              Booking data held by Calendly is retained according to their retention policy (generally up to 2 years after your last interaction). You can request deletion at any time (see Section 6).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">5. Who we share data with</h2>
            <p className="mb-3">
              We do not sell, rent, or share your personal data with third parties, except:
            </p>
            <ul className="space-y-2">
              <li>• <strong className="text-white">Calendly Inc.</strong> — for scheduling. See their{' '}
                <a href="https://calendly.com/privacy" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300">Privacy Policy</a>.
              </li>
              <li>• <strong className="text-white">Vercel Inc.</strong> — our hosting provider. See their{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300">Privacy Policy</a>.
              </li>
              <li>• When required by applicable law or court order.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">6. Your rights (GDPR &amp; Israeli Privacy Law)</h2>
            <p className="mb-4">
              Under the General Data Protection Regulation (GDPR) and the Israeli Privacy Protection Law (חוק הגנת הפרטיות, תשמ״א–1981), you have the right to:
            </p>
            <ul className="space-y-2">
              <li>• <strong className="text-white">Access</strong> — request a copy of the personal data we hold about you</li>
              <li>• <strong className="text-white">Rectification</strong> — request correction of inaccurate data</li>
              <li>• <strong className="text-white">Erasure</strong> — request deletion of your personal data ("right to be forgotten")</li>
              <li>• <strong className="text-white">Portability</strong> — receive your data in a machine-readable format</li>
              <li>• <strong className="text-white">Restriction</strong> — request that we limit processing of your data</li>
              <li>• <strong className="text-white">Object</strong> — object to processing based on legitimate interest</li>
              <li>• <strong className="text-white">Withdraw consent</strong> — at any time, without affecting the lawfulness of prior processing</li>
            </ul>
            <p className="mt-5">
              To exercise any right, email{' '}
              <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                alla@rndqueen.com
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">7. Supervisory authority</h2>
            <p>
              If you believe your data protection rights have been violated, you have the right to lodge a complaint with:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                • <strong className="text-white">Israel:</strong> The Privacy Protection Authority (רשות הגנת הפרטיות){' '}
                <a href="https://www.gov.il/en/departments/the_privacy_protection_authority" target="_blank" rel="noreferrer" className="text-brand-400 underline hover:text-brand-300">
                  gov.il/en/departments/the_privacy_protection_authority
                </a>
              </li>
              <li>
                • <strong className="text-white">EU/EEA:</strong> Your local Data Protection Authority (DPA)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">8. International transfers</h2>
            <p>
              Data processed by Calendly and Vercel may be stored on servers in the United States. Both companies comply with applicable data transfer mechanisms (Standard Contractual Clauses or equivalent safeguards).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">9. Changes to this policy</h2>
            <p>
              We may update this policy periodically. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">10. Contact</h2>
            <p>
              For any privacy-related questions:{' '}
              <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                alla@rndqueen.com
              </a>
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-600">
        <Link href="/" className="hover:text-slate-400 transition">← Back to rndqueen.com</Link>
        <span className="mx-3">·</span>
        <Link href="/accessibility" className="hover:text-slate-400 transition">Accessibility</Link>
        <span className="mx-3">·</span>
        <Link href="/terms" className="hover:text-slate-400 transition">Terms of Use</Link>
      </footer>
    </div>
  );
}
