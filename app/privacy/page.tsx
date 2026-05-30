import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | מדיניות פרטיות | Политика конфиденциальности — RNDQueen',
  description: 'Privacy policy for rndqueen.com — GDPR and Israeli Privacy Protection Law compliance.',
  alternates: { canonical: 'https://rndqueen.com/privacy' },
  robots: { index: true, follow: true },
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
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
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
                <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">
                  Calendly&apos;s Privacy Policy
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
                  <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">Privacy Policy</a>.
                </li>
                <li>• <strong className="text-white">Vercel Inc.</strong> — our hosting provider. See their{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">Privacy Policy</a>.
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
                <li>• <strong className="text-white">Erasure</strong> — request deletion of your personal data (&ldquo;right to be forgotten&rdquo;)</li>
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
                  <a href="https://www.gov.il/en/departments/the_privacy_protection_authority" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">
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
                We may update this policy periodically. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance.
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
        </section>

        <hr className="my-12 border-white/10" />

        {/* ── HEBREW ─────────────────────────────────────────────────────── */}
        <section id="he" dir="rtl" lang="he" className="mb-16" aria-label="מדיניות פרטיות בעברית">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">מדיניות פרטיות</h2>
          <p className="mb-12 text-sm text-slate-500">עודכן לאחרונה: מאי 2026</p>

          <div className="space-y-10 text-base leading-7 text-slate-300">

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">1. מי אנחנו</h3>
              <p>
                אתר זה (<strong className="text-white">rndqueen.com</strong>) מופעל על ידי <strong className="text-white">אלה שפירו</strong>, המספקת שירותי VP R&D חלקי וייעוץ. לפניות בנושא פרטיות:{' '}
                <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                  alla@rndqueen.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">2. אילו נתונים אנו אוספים ולמה</h3>
              <p className="mb-4">
                אתר זה אינו אוסף או שומר נתונים אישיים ישירות. עם זאת, הנתונים הבאים מעובדים דרך שירותי צד שלישי שאנו משתמשים בהם:
              </p>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-right">
                      <th className="px-5 py-3 font-semibold text-white">נתונים</th>
                      <th className="px-5 py-3 font-semibold text-white">מקור</th>
                      <th className="px-5 py-3 font-semibold text-white">מטרה</th>
                      <th className="px-5 py-3 font-semibold text-white">בסיס משפטי</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    <tr>
                      <td className="px-5 py-3">שם, כתובת דוא&quot;ל, טלפון (אופציונלי)</td>
                      <td className="px-5 py-3">ווידג׳ט הזמנת פגישות Calendly</td>
                      <td className="px-5 py-3">תיאום ואישור פגישות</td>
                      <td className="px-5 py-3">הסכמה (הטופס מולא מרצון)</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">כתובת IP, דפדפן, מכשיר</td>
                      <td className="px-5 py-3">תשתית אחסון Vercel</td>
                      <td className="px-5 py-3">מתן שירות, אבטחה, רישום שגיאות</td>
                      <td className="px-5 py-3">אינטרס לגיטימי</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">3. עוגיות</h3>
              <p>
                אתר זה אינו מגדיר עוגיות צד ראשון. Calendly, בעת הטמעה, עשוי להגדיר עוגיות סשן בהתאם ל
                <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">
                  מדיניות הפרטיות שלו
                </a>.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">4. כמה זמן אנו שומרים את הנתונים</h3>
              <p>
                נתוני הזמנות המוחזקים על ידי Calendly נשמרים בהתאם למדיניות השמירה שלהם (בדרך כלל עד שנתיים מאז האינטראקציה האחרונה). ניתן לבקש מחיקה בכל עת (ראה/י סעיף 6).
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">5. עם מי אנו משתפים נתונים</h3>
              <p className="mb-3">אנו אינם מוכרים, משכירים או משתפים את הנתונים האישיים שלך עם צדדים שלישיים, למעט:</p>
              <ul className="space-y-2">
                <li>• <strong className="text-white">Calendly Inc.</strong> — לצורך תיאום פגישות. ראה/י את{' '}
                  <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">מדיניות הפרטיות שלהם</a>.
                </li>
                <li>• <strong className="text-white">Vercel Inc.</strong> — ספק האחסון שלנו. ראה/י את{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">מדיניות הפרטיות שלהם</a>.
                </li>
                <li>• כאשר נדרש על פי חוק או צו בית משפט.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">6. זכויותיך (GDPR וחוק הגנת הפרטיות הישראלי)</h3>
              <p className="mb-4">
                מכוח התקנה הכללית להגנת נתונים (GDPR) וחוק הגנת הפרטיות (תשמ&quot;א–1981), יש לך זכות:
              </p>
              <ul className="space-y-2">
                <li>• <strong className="text-white">גישה</strong> — לבקש עותק של הנתונים האישיים שאנחנו מחזיקים עליך</li>
                <li>• <strong className="text-white">תיקון</strong> — לבקש תיקון נתונים שגויים</li>
                <li>• <strong className="text-white">מחיקה</strong> — לבקש מחיקת נתוניך האישיים (&quot;הזכות להישכח&quot;)</li>
                <li>• <strong className="text-white">ניידות</strong> — לקבל את נתוניך בפורמט קריא למכונה</li>
                <li>• <strong className="text-white">הגבלה</strong> — לבקש הגבלת עיבוד נתוניך</li>
                <li>• <strong className="text-white">התנגדות</strong> — להתנגד לעיבוד המבוסס על אינטרס לגיטימי</li>
                <li>• <strong className="text-white">ביטול הסכמה</strong> — בכל עת, מבלי לפגוע בחוקיות העיבוד הקודם</li>
              </ul>
              <p className="mt-5">
                למימוש כל זכות, פנה/י אל{' '}
                <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                  alla@rndqueen.com
                </a>. נשיב תוך 30 יום.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">7. רשות פיקוח</h3>
              <p>אם אתה סבור/ה שזכויות הגנת הנתונים שלך הופרו, יש לך זכות להגיש תלונה:</p>
              <ul className="mt-3 space-y-2">
                <li>
                  • <strong className="text-white">ישראל:</strong> רשות הגנת הפרטיות{' '}
                  <a href="https://www.gov.il/he/departments/the_privacy_protection_authority" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">
                    gov.il
                  </a>
                </li>
                <li>• <strong className="text-white">האיחוד האירופי / EEA:</strong> רשות הגנת הנתונים המקומית שלך</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">8. העברות בינלאומיות</h3>
              <p>
                נתונים המעובדים על ידי Calendly ו-Vercel עשויים להיות מאוחסנים בשרתים בארצות הברית. שתי החברות עומדות במנגנוני העברת נתונים הרלוונטיים.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">9. שינויים במדיניות</h3>
              <p>
                אנו עשויים לעדכן מדיניות זו מעת לעת. תאריך &quot;עודכן לאחרונה&quot; בראש הדף משקף את הגרסה האחרונה. המשך השימוש באתר לאחר שינויים מהווה קבלה.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">10. יצירת קשר</h3>
              <p>
                לכל שאלה הנוגעת לפרטיות:{' '}
                <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                  alla@rndqueen.com
                </a>
              </p>
            </div>

          </div>
        </section>

        <hr className="my-12 border-white/10" />

        {/* ── RUSSIAN ────────────────────────────────────────────────────── */}
        <section id="ru" lang="ru" aria-label="Политика конфиденциальности на русском языке">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">Политика конфиденциальности</h2>
          <p className="mb-12 text-sm text-slate-500">Последнее обновление: май 2026 г.</p>

          <div className="space-y-10 text-base leading-7 text-slate-300">

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">1. Кто мы</h3>
              <p>
                Этот сайт (<strong className="text-white">rndqueen.com</strong>) управляется <strong className="text-white">Аллой Шапиро</strong>, предоставляющей услуги fractional VP R&D и консалтинга. По вопросам конфиденциальности:{' '}
                <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                  alla@rndqueen.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">2. Какие данные мы собираем и зачем</h3>
              <p className="mb-4">
                Этот сайт не собирает и не хранит личные данные напрямую через формы или файлы cookie. Однако следующие данные обрабатываются через сторонние сервисы, которые мы используем:
              </p>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="px-5 py-3 font-semibold text-white">Данные</th>
                      <th className="px-5 py-3 font-semibold text-white">Источник</th>
                      <th className="px-5 py-3 font-semibold text-white">Цель</th>
                      <th className="px-5 py-3 font-semibold text-white">Правовое основание</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    <tr>
                      <td className="px-5 py-3">Имя, email, телефон (необязательно)</td>
                      <td className="px-5 py-3">Виджет записи Calendly</td>
                      <td className="px-5 py-3">Планирование и подтверждение встреч</td>
                      <td className="px-5 py-3">Согласие (форма заполняется добровольно)</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">IP-адрес, браузер, устройство</td>
                      <td className="px-5 py-3">Хостинг-инфраструктура Vercel</td>
                      <td className="px-5 py-3">Предоставление услуг, безопасность, журналирование ошибок</td>
                      <td className="px-5 py-3">Законный интерес</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">3. Файлы cookie</h3>
              <p>
                Этот сайт не устанавливает собственные файлы cookie. Calendly при встраивании может устанавливать сессионные cookie в соответствии со своей{' '}
                <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">
                  политикой конфиденциальности
                </a>.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">4. Срок хранения данных</h3>
              <p>
                Данные о бронированиях, хранящиеся у Calendly, сохраняются в соответствии с их политикой хранения (как правило, до 2 лет с момента последнего взаимодействия). Вы можете запросить удаление в любое время (см. раздел 6).
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">5. С кем мы делимся данными</h3>
              <p className="mb-3">
                Мы не продаём, не передаём и не раскрываем ваши персональные данные третьим лицам, за исключением:
              </p>
              <ul className="space-y-2">
                <li>• <strong className="text-white">Calendly Inc.</strong> — для планирования встреч. См. их{' '}
                  <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">Политику конфиденциальности</a>.
                </li>
                <li>• <strong className="text-white">Vercel Inc.</strong> — наш хостинг-провайдер. См. их{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">Политику конфиденциальности</a>.
                </li>
                <li>• Когда это требуется по закону или судебному решению.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">6. Ваши права (GDPR и Закон о защите персональных данных Израиля)</h3>
              <p className="mb-4">
                В соответствии с Общим регламентом о защите данных (GDPR) и Законом о защите неприкосновенности частной жизни Израиля (חוק הגנת הפרטיות, 1981), вы имеете право:
              </p>
              <ul className="space-y-2">
                <li>• <strong className="text-white">Доступ</strong> — запросить копию персональных данных, которые мы о вас храним</li>
                <li>• <strong className="text-white">Исправление</strong> — запросить корректировку неточных данных</li>
                <li>• <strong className="text-white">Удаление</strong> — запросить удаление ваших персональных данных («право на забвение»)</li>
                <li>• <strong className="text-white">Переносимость</strong> — получить свои данные в машиночитаемом формате</li>
                <li>• <strong className="text-white">Ограничение</strong> — запросить ограничение обработки ваших данных</li>
                <li>• <strong className="text-white">Возражение</strong> — возразить против обработки, основанной на законном интересе</li>
                <li>• <strong className="text-white">Отзыв согласия</strong> — в любое время, без ущерба для законности предшествующей обработки</li>
              </ul>
              <p className="mt-5">
                Для реализации любого права напишите на{' '}
                <a href="mailto:alla@rndqueen.com" className="text-brand-400 underline hover:text-brand-300">
                  alla@rndqueen.com
                </a>. Мы ответим в течение 30 дней.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">7. Надзорный орган</h3>
              <p>
                Если вы считаете, что ваши права в области защиты данных нарушены, вы вправе обратиться с жалобой:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  • <strong className="text-white">Израиль:</strong> Управление по защите персональных данных (רשות הגנת הפרטיות){' '}
                  <a href="https://www.gov.il/en/departments/the_privacy_protection_authority" target="_blank" rel="noopener noreferrer" className="text-brand-400 underline hover:text-brand-300">
                    gov.il
                  </a>
                </li>
                <li>• <strong className="text-white">ЕС / ЕЭЗ:</strong> Ваш местный орган по защите данных (DPA)</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">8. Международные передачи данных</h3>
              <p>
                Данные, обрабатываемые Calendly и Vercel, могут храниться на серверах в США. Обе компании соблюдают применимые механизмы трансграничной передачи данных (Стандартные договорные положения или эквивалентные меры защиты).
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">9. Изменения в политике</h3>
              <p>
                Мы можем периодически обновлять эту политику. Дата «Последнего обновления» в начале страницы отражает последнюю редакцию. Продолжение использования сайта после внесения изменений означает их принятие.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-white">10. Контакт</h3>
              <p>
                По любым вопросам о конфиденциальности:{' '}
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
        <Link href="/terms" className="hover:text-slate-400 transition">Terms of Use</Link>
      </footer>
    </div>
  );
}
