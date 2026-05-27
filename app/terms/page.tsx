import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use — RNDQueen',
  description: 'Terms of use for rndqueen.com.',
};

export default function TermsPage() {
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
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white">Terms of Use</h1>
        <p className="mb-12 text-sm text-slate-500">Last updated: May 2026</p>

        <div className="space-y-10 text-base leading-7 text-slate-300">

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">1. Acceptance</h2>
            <p>
              By accessing or using <strong className="text-white">rndqueen.com</strong> (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">2. Purpose of the Site</h2>
            <p>
              This Site is a professional presentation and lead-generation website for <strong className="text-white">Alla Shapiro</strong>, offering fractional VP R&D, advisory, and team-scaling services. The content is informational only and does not constitute a binding offer of services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">3. Intellectual property</h2>
            <p>
              All content on this Site — including but not limited to text, graphics, logos, icons, and the RNDQueen brand identity — is the property of Alla Shapiro and is protected under applicable copyright and intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">4. Disclaimer of warranties</h2>
            <p>
              The Site is provided "as is" and "as available," without any warranty of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components. Use of the Site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">5. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Alla Shapiro shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this Site or its content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">6. Third-party links and services</h2>
            <p>
              This Site may link to or embed third-party services (including Calendly and LinkedIn). We are not responsible for the content, privacy practices, or terms of those services. Use of third-party services is governed by their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">7. Governing law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the <strong className="text-white">State of Israel</strong>. Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Tel Aviv, Israel</strong>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">8. Modifications</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes take effect upon posting to the Site. The "Last updated" date above reflects the most recent revision. Continued use of the Site after changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">9. Contact</h2>
            <p>
              For questions regarding these Terms:{' '}
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
        <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
      </footer>
    </div>
  );
}
