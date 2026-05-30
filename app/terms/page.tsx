import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | תנאי שימוש | Условия использования — RNDQueen',
  description: 'Terms of use for rndqueen.com.',
  alternates: { canonical: 'https://rndqueen.com/terms' },
  robots: { index: true, follow: true },
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

        {/* Language jump nav */}
        <nav className="mb-12 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Jump to language section">
          <a href="#en" className="font-semibold text-brand-400 hover:text-brand-300 transition">English</a>
          <span className="text-slate-700" aria-hidden>·</span>
          <a href="#he" className="font-semibold text-brand-400 hover:text-brand-300 transition">עברית</a>
          <span className="text-slate-700" aria-hidden>·</span>
          <a href="#ru" className="font-semibold text-brand-400 hover:text-brand-300 transition">Русский</a>
        </nav>

        {/* ── ENGLISH ────────────────────────────────────────────────────── */}
        <section id="en" lang="en" className="mb-16">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white">Terms of Use</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: May 2026</p>

          <div className="space-y-10 text-base leading-7 text-slate-300">

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">1. Acceptance</h2>
              <p>
                By accessing or using <strong className="text-white">rndqueen.com</strong> (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
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
                The Site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without any warranty of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components. Use of the Site is at your own risk.
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
                We reserve the right to modify these Terms at any time. Changes take effect upon posting to the Site. The &ldquo;Last updated&rdquo; date above reflects the most recent revision. Continued use of the Site after changes constitutes your acceptance of the new Terms.
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
        </section>

        <hr className="my-12 border-white/10" />

        {/* ── HEBREW ─────────────────────────────────────────────────────── */}
        <section id="he" dir="rtl" lang="he" className="mb-16" aria-label="תנאי שימוש בעברית">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">תנאי שימוש</h2>
          <p className="mb-12 text-sm text-slate-500">עודכן לאחרונה: מאי 2026</p>

          <div className="space-y-10 text-base leading-7 text-slate-300">

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">1. קבלה</h3>
              <p>
                על ידי גישה לאתר <strong className="text-white">rndqueen.com</strong> (&quot;האתר&quot;) או שימוש בו, אתה/את מסכים/ה להיות מחויב/ת לתנאי שימוש אלה. אם אינך מסכים/ה, אנא אל תשתמש/י באתר.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">2. מטרת האתר</h3>
              <p>
                אתר זה הוא אתר מצגת מקצועי ואיסוף לידים עבור <strong className="text-white">אלה שפירו</strong>, המציעה שירותי VP R&D חלקי, ייעוץ והרחבת צוותים. התוכן הוא לצורכי מידע בלבד ואינו מהווה הצעה מחייבת לשירותים.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">3. קניין רוחני</h3>
              <p>
                כל התוכן באתר — לרבות ומבלי להגביל טקסט, גרפיקה, לוגואים, אייקונים וזהות המותג RNDQueen — הוא רכושה של אלה שפירו ומוגן לפי חוקי זכויות יוצרים וקניין רוחני רלוונטיים. אין להעתיק, לשכפל, להפיץ או ליצור יצירות נגזרות ללא הסכמה מראש ובכתב.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">4. הסרת אחריות</h3>
              <p>
                האתר מסופק &quot;כמות שהוא&quot; ו&quot;כפי שזמין&quot;, ללא כל אחריות מכל סוג שהוא, מפורשת או משתמעת. איננו מתחייבים שהאתר יפעל ללא הפרעות, ללא שגיאות, או ללא רכיבים מזיקים. השימוש באתר הוא על אחריותך בלבד.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">5. הגבלת אחריות</h3>
              <p>
                במידה המרבית המותרת על פי חוק, אלה שפירו לא תהיה אחראית לכל נזק עקיף, מקרי, מיוחד, תוצאתי או עונשי הנובע מהשימוש שלך באתר זה, או מחוסר יכולתך להשתמש בו.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">6. קישורים ושירותים של צד שלישי</h3>
              <p>
                אתר זה עשוי לקשר אל שירותי צד שלישי (לרבות Calendly ו-LinkedIn) או להטמיעם. איננו אחראים לתוכן, לנוהגי הפרטיות, או לתנאים של שירותים אלה. השימוש בשירותי צד שלישי כפוף לתנאים ולמדיניות הפרטיות שלהם.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">7. הדין החל</h3>
              <p>
                תנאים אלה כפופים לחוקי <strong className="text-white">מדינת ישראל</strong> ויפורשו לפיהם. כל סכסוך הנובע מתנאים אלה או מהשימוש שלך באתר יהיה בסמכות הבלעדית של בתי המשפט המוסמכים ב<strong className="text-white">תל אביב, ישראל</strong>.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">8. שינויים</h3>
              <p>
                אנו שומרים לעצמנו את הזכות לשנות תנאים אלה בכל עת. שינויים נכנסים לתוקף עם פרסומם באתר. תאריך &quot;עודכן לאחרונה&quot; לעיל משקף את הגרסה האחרונה. המשך השימוש באתר לאחר שינויים מהווה קבלתך את התנאים החדשים.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">9. יצירת קשר</h3>
              <p>
                לשאלות בנוגע לתנאים אלה:{' '}
                <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                  alla@rndqueen.com
                </a>
              </p>
            </div>

          </div>
        </section>

        <hr className="my-12 border-white/10" />

        {/* ── RUSSIAN ────────────────────────────────────────────────────── */}
        <section id="ru" lang="ru" aria-label="Условия использования на русском языке">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">Условия использования</h2>
          <p className="mb-12 text-sm text-slate-500">Последнее обновление: май 2026 г.</p>

          <div className="space-y-10 text-base leading-7 text-slate-300">

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">1. Принятие</h3>
              <p>
                Получая доступ к сайту <strong className="text-white">rndqueen.com</strong> («Сайт») или используя его, вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны с ними, пожалуйста, не используйте Сайт.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">2. Назначение сайта</h3>
              <p>
                Этот Сайт является профессиональным презентационным ресурсом <strong className="text-white">Аллы Шапиро</strong>, предлагающей услуги fractional VP R&D, консалтинга и масштабирования команд. Содержимое носит исключительно информационный характер и не является обязывающим предложением услуг.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">3. Интеллектуальная собственность</h3>
              <p>
                Весь контент на данном Сайте — включая, но не ограничиваясь текстом, графикой, логотипами, иконками и фирменным стилем RNDQueen — является собственностью Аллы Шапиро и охраняется применимым законодательством об авторском праве и интеллектуальной собственности. Копирование, воспроизведение, распространение или создание производных работ без предварительного письменного согласия запрещено.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">4. Отказ от гарантий</h3>
              <p>
                Сайт предоставляется «как есть» и «по мере доступности», без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем бесперебойную, безошибочную работу Сайта или отсутствие вредоносных компонентов. Использование Сайта осуществляется на ваш риск.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">5. Ограничение ответственности</h3>
              <p>
                В максимальной степени, допустимой применимым законодательством, Алла Шапиро не несёт ответственности за какой-либо косвенный, случайный, специальный, последующий или штрафной ущерб, возникший в результате использования или невозможности использования данного Сайта или его содержимого.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">6. Сторонние ссылки и сервисы</h3>
              <p>
                Сайт может содержать ссылки на сторонние сервисы или встраивать их (в том числе Calendly и LinkedIn). Мы не несём ответственности за содержимое, политику конфиденциальности или условия этих сервисов. Использование сторонних сервисов регулируется их собственными условиями и политиками.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">7. Применимое право</h3>
              <p>
                Настоящие Условия регулируются и толкуются в соответствии с законодательством <strong className="text-white">Государства Израиль</strong>. Любые споры, вытекающие из настоящих Условий или использования вами Сайта, подлежат исключительной юрисдикции компетентных судов <strong className="text-white">Тель-Авива, Израиль</strong>.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">8. Изменения</h3>
              <p>
                Мы оставляем за собой право вносить изменения в настоящие Условия в любое время. Изменения вступают в силу с момента их публикации на Сайте. Дата «Последнего обновления» выше отражает последнюю редакцию. Продолжение использования Сайта после внесения изменений означает ваше принятие новых Условий.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">9. Контакт</h3>
              <p>
                По вопросам, касающимся настоящих Условий:{' '}
                <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                  alla@rndqueen.com
                </a>
              </p>
            </div>

          </div>
        </section>

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
