export type LanguageCode = 'en' | 'he' | 'ru';

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'he', label: 'HE' },
  { code: 'ru', label: 'RU' },
] as const;

export const content = {
  en: {
    metadata: {
      title: 'Alla Shapiro | Fractional VP R&D & Advisory',
      description: 'Seasoned R&D leadership for startups, corporates, and game studios in Israel and globally.',
    },
    header: {
      tagline: 'R&D leadership & advisory',
      nav: ['Challenges', 'Offerings', 'Why me', 'Testimonials', 'Process', 'FAQ', 'Contact'],
    },
    hero: {
      title: 'Stop waiting. Get senior R&D leadership now.',
      subtitle:
        '20+ years of hands-on R&D leadership — available to your team on a fractional basis. Structured, fast, and focused on delivery.',
      urgency: 'Limited availability — accepting new engagements now',
      ctaIntro: 'Book My Free Intro Call',
      ctaConsult: 'Book a Strategy Session',
      stats: [
        { label: 'R&D experience', value: '20+ yrs' },
        { label: 'Time to value', value: '< 2 weeks' },
        { label: 'Coverage', value: '3 continents' },
      ],
    },
    offerings: [
      {
        title: 'Fractional VP R&D',
        description:
          'Your teams aligned, your delivery unblocked — senior R&D ownership without the full-time cost.',
      },
      {
        title: 'Game Studio Advisory',
        description:
          'Strategic guidance for studios and interactive product orgs ready to scale and ship.',
      },
      {
        title: 'Team Scaling',
        description:
          'Build high-performing R&D teams with the right structure and process for your growth stage.',
      },
      {
        title: 'R&D Leadership',
        description:
          'End-to-end R&D ownership: technical strategy, cross-team coordination, and governance that actually scales.',
      },
    ],
    challenges: {
      title: 'Sound familiar?',
      subtitle:
        'Most growing tech companies hit the same wall — they need senior R&D leadership, but a full-time hire feels too early, too expensive, or too slow.',
      points: [
        'Your teams are busy but delivery is inconsistent. No one owns the full R&D picture.',
        'You need a VP R&D yesterday — but a full-time hire takes months and costs a fortune.',
        "You're growing fast, but adding people without structure is creating chaos, not speed.",
        'Your engineering, product, and business teams speak different languages — and the gaps are costing you.',
      ],
    },
    why: {
      title: '20+ years across software, gaming, and enterprise — on 3 continents.',
      description:
        "From Fortune 500 IT organizations to lean game studios, I've scaled teams, fixed broken processes, and delivered measurable results — globally and in Israel. I know what works, and what doesn't.",
      highlights: [
        {
          title: 'Deep cross-industry expertise',
          description: 'Cross-disciplinary leadership in engineering, product, game development, and operational excellence across global organizations.',
        },
        {
          title: 'Flexible — remote or on-site',
          description: 'Built for distributed teams. Remote-first by default, with on-site availability for Israel-based organizations when it matters.',
        },
      ],
    },
    experience: [
      'Senior R&D leadership at global tech, gaming, and enterprise organizations.',
      'Scaled engineering teams from startup to enterprise — with the processes to match.',
      'Available as fractional VP R&D — senior-level output, on your schedule and budget.',
      'Closed the gap between engineering, product, and business — turning strategy into shipped product.',
    ],
    process: [
      {
        title: 'Intro call',
        description: "30 minutes. We map your R&D challenges and decide if there's a fit.",
      },
      {
        title: 'Assessment & proposal',
        description: 'You get a clear plan: scope, timeline, and engagement model tailored to your needs.',
      },
      {
        title: 'Start working',
        description: 'We move fast. Most engagements are live within 2 weeks of the first call.',
      },
    ],
    testimonials: [
      {
        quote:
          'Professional "can do" approach, optimism & smile will always be her trademark. Alla is an exceptional & talented person. Any company will be lucky to have her.',
        name: 'Ella Vidra',
        title: 'CIO',
        company: 'eToro',
        photo: '/testimonials/ella-vidra.jpg',
      },
      {
        quote:
          'From the get-go I could recognise in her very clear traits — clarity, focus, stability, and a "get it done" attitude. She is a trustworthy and professional manager and I wholeheartedly recommend her to any business.',
        name: 'Gabi Levy',
        title: 'Head of Project Management',
        company: 'Amdocs IT',
        photo: '/testimonials/gabi-levy.jpg',
      },
      {
        quote:
          'Alla was an incredible mentor, hugely instrumental in helping me grow professionally. She created an atmosphere of trust and respect, fostering collaboration and encouraging ownership. Alla is an exceptional leader with exceptional qualities.',
        name: 'Viktoria Okolotovich',
        title: 'VP R&D',
        company: 'Playtika',
        photo: '/testimonials/viktoria-okolotovich.jpg',
      },
    ],
    faq: [
      {
        question: 'How quickly can we get started?',
        answer:
          'Most engagements kick off within 1–2 weeks of the intro call. The first step is a short discovery conversation to define scope — after that, we move fast.',
      },
      {
        question: 'Is there a minimum commitment or contract length?',
        answer:
          'No long-term lock-in. Engagements are structured as monthly retainers with a 30-day notice period, so you stay in full control of the relationship.',
      },
      {
        question: 'Can this work for a remote or distributed team?',
        answer:
          'Yes — most work is conducted remotely and designed to fit distributed teams. For Israel-based organizations, on-site presence is available when it adds value.',
      },
      {
        question: 'How is a fractional engagement priced?',
        answer:
          'Pricing is based on the scope and weekly hours involved, structured as a monthly retainer. You get senior R&D leadership at a fraction of a full-time executive cost — with full flexibility to scale up or down.',
      },
    ],
    footer: {
      copyright: '© 2026 Alla Shapiro. Available for remote and Israel-based collaborations.',
      linkedInHref: 'https://www.linkedin.com/in/alla-shapiro',
      emailHref: 'mailto:alla@rndqueen.com',
    },
    logoBar: {
      label: 'Leaders from these organizations trust Alla',
      companies: ['eToro', 'Playtika', 'Amdocs'],
    },
  },

  he: {
    metadata: {
      title: 'אלה שפירו | VP R&D שבריר וייעוץ',
      description: 'מנהיגות R&D בכירה לסטארטאפים, חברות וסטודיות גיימינג בישראל וברחבי העולם.',
    },
    header: {
      tagline: 'מנהיגות R&D וייעוץ',
      nav: ['אתגרים', 'שירותים', 'למה אני', 'המלצות', 'תהליך', 'שאלות נפוצות', 'צור קשר'],
    },
    hero: {
      title: 'הפסיקו לחכות. קבלו מנהיגות R&D בכירה עכשיו.',
      subtitle:
        'מעל 20 שנות ניסיון ומנהיגות R&D מעשית — זמינה לצוות שלך בבסיס חלקי. מובנה, מהיר וממוקד תוצאות.',
      urgency: 'זמינות מוגבלת — מקבלת לקוחות חדשים עכשיו',
      ctaIntro: 'קבע שיחת היכרות חינם',
      ctaConsult: 'קבע פגישת אסטרטגיה',
      stats: [
        { label: 'ניסיון R&D', value: '+20 שנים' },
        { label: 'זמן להתחלה', value: '< שבועיים' },
        { label: 'כיסוי גלובלי', value: '3 יבשות' },
      ],
    },
    offerings: [
      {
        title: 'VP R&D שבריר',
        description:
          'הצוותים שלך מיושרים, הדליברי לא חסום — בעלות R&D בכירה ללא עלות משרה מלאה.',
      },
      {
        title: 'ייעוץ לסטודיות גיימינג',
        description:
          'הנחיה אסטרטגית לסטודיות ומוצרי אינטראקציה המוכנים לצמוח ולשלוח.',
      },
      {
        title: 'הרחבת צוותים',
        description:
          'בנה צוותי R&D ביצועיים עם המבנה והתהליך הנכונים לשלב הצמיחה שלך.',
      },
      {
        title: 'מנהיגות R&D',
        description:
          'בעלות R&D מלאה: אסטרטגיה טכנית, תיאום בין-צוותי וממשל שבאמת מסתדר.',
      },
    ],
    challenges: {
      title: 'מוכר לך?',
      subtitle:
        'רוב חברות הטכנולוגיה הצומחות פוגשות את אותה קיר — הן צריכות מנהיגות R&D בכירה, אבל גיוס במשרה מלאה נראה מוקדם מדי, יקר מדי, או איטי מדי.',
      points: [
        'הצוותים שלך עסוקים, אבל הדליברי לא עקבי. אף אחד לא מחזיק את תמונת ה-R&D המלאה.',
        'אתה צריך VP R&D אתמול — אבל גיוס במשרה מלאה לוקח חודשים ועולה הון.',
        'אתה צומח מהר, אבל הוספת אנשים ללא מבנה יוצרת כאוס, לא מהירות.',
        'צוותי הנדסה, מוצר ועסקים מדברים שפות שונות — והפערים עולים לך ביוקר.',
      ],
    },
    why: {
      title: 'מעל 20 שנה בתוכנה, גיימינג ואנטרפרייז — ב-3 יבשות.',
      description:
        'מארגוני IT של Fortune 500 ועד סטודיות גיימינג רזות, הרחבתי צוותים, תיקנתי תהליכים שבורים והשגתי תוצאות מדידות — גלובלית ובישראל. אני יודעת מה עובד, ומה לא.',
      highlights: [
        {
          title: 'מומחיות עמוקה בין-תעשייתית',
          description: 'מנהיגות בין-תחומית בהנדסה, מוצר, פיתוח גיים ומצוינות תפעולית בארגונים גלובליים.',
        },
        {
          title: 'גמיש — מרחוק או פנים אל פנים',
          description: 'בנוי לצוותים מפוזרים. ברירת מחדל מרחוק, עם זמינות פנים אל פנים לארגונים מבוססי ישראל כשזה חשוב.',
        },
      ],
    },
    experience: [
      'מנהיגות R&D בכירה בארגוני טכנולוגיה, גיימינג ואנטרפרייז גלובליים.',
      'הרחבתי צוותי הנדסה מסטארטאפ לאנטרפרייז — עם התהליכים המתאימים.',
      'זמינה כ-VP R&D חלקי — פלט ברמת בכיר, בלוח הזמנים והתקציב שלך.',
      'סגרתי את הפער בין הנדסה, מוצר ועסקים — והפכתי אסטרטגיה למוצר שנשלח.',
    ],
    process: [
      {
        title: 'שיחת היכרות',
        description: '30 דקות. אנחנו ממפים את אתגרי ה-R&D שלך ומחליטים אם יש התאמה.',
      },
      {
        title: 'הערכה והצעה',
        description: 'אתה מקבל תוכנית ברורה: היקף, לוח זמנים ומודל התקשרות מותאם לצרכיך.',
      },
      {
        title: 'מתחילים לעבוד',
        description: 'אנחנו נעים מהר. רוב ההתקשרויות חיות תוך שבועיים מהשיחה הראשונה.',
      },
    ],
    testimonials: [
      {
        quote:
          'גישת "יכולה לעשות" מקצועית, אופטימיות וחיוך יהיו תמיד הסימן המסחרי שלה. אלה היא אדם יוצא דופן ומוכשר. כל חברה תהיה מאושרת לקבל אותה.',
        name: 'אלה וידרה',
        title: 'CIO',
        company: 'eToro',
        photo: '/testimonials/ella-vidra.jpg',
      },
      {
        quote:
          'מיד יכולתי לזהות בה תכונות ברורות מאוד — בהירות, פוקוס, יציבות וגישה של "לעשות". היא מנהלת אמינה ומקצועית ואני ממליץ עליה בכל לב לכל עסק.',
        name: 'גבי לוי',
        title: 'ראש ניהול פרויקטים',
        company: 'Amdocs IT',
        photo: '/testimonials/gabi-levy.jpg',
      },
      {
        quote:
          'אלה הייתה מנטורית מדהימה, מכשירה ביסודיות לעזור לי לגדול מקצועית. היא יצרה אווירה של אמון וכבוד, מטפחת שיתוף פעולה ומעודדת בעלות. אלה היא מנהיגה יוצאת דופן עם איכויות יוצאות דופן.',
        name: 'ויקטוריה אוקולוטוביץ',
        title: 'VP R&D',
        company: 'Playtika',
        photo: '/testimonials/viktoria-okolotovich.jpg',
      },
    ],
    faq: [
      {
        question: 'כמה מהר אפשר להתחיל?',
        answer:
          'רוב ההתקשרויות מתחילות תוך 1–2 שבועות מהשיחה הראשונה. הצעד הראשון הוא שיחת גילוי קצרה להגדרת היקף — לאחר מכן, אנחנו נעים מהר.',
      },
      {
        question: 'האם יש מינימום התחייבות או אורך חוזה?',
        answer:
          'אין נעילה לטווח ארוך. ההתקשרויות מובנות כשוכרים חודשיים עם תקופת הודעה של 30 יום, כך שאתה שולט מלא ביחסים.',
      },
      {
        question: 'האם זה עובד עבור צוות מרוחק או מפוזר?',
        answer:
          'כן — רוב העבודה מתבצעת מרחוק ומתוכננת להתאים לצוותים מפוזרים. לארגונים מבוססי ישראל, נוכחות פנים אל פנים זמינה כאשר היא מוסיפה ערך.',
      },
      {
        question: 'כיצד מתומחרת התקשרות חלקית?',
        answer:
          'התמחור מבוסס על ההיקף ושעות עבודה שבועיות, מובנה כשוכר חודשי. אתה מקבל מנהיגות R&D בכירה בשבריר מעלות מנהל בכיר במשרה מלאה — עם גמישות מלאה להרחבה או הקטנה.',
      },
    ],
    footer: {
      copyright: '© 2026 אלה שפירו. זמינה לשיתופי פעולה מרחוק ובישראל.',
      linkedInHref: 'https://www.linkedin.com/in/alla-shapiro',
      emailHref: 'mailto:alla@rndqueen.com',
    },
    logoBar: {
      label: 'מנהיגים מהארגונים האלה סומכים על אלה',
      companies: ['eToro', 'Playtika', 'Amdocs'],
    },
  },

  ru: {
    metadata: {
      title: 'Алла Шапиро | Fractional VP R&D и консалтинг',
      description: 'Опытное руководство R&D для стартапов, корпораций и игровых студий в Израиле и по всему миру.',
    },
    header: {
      tagline: 'Управление R&D и консалтинг',
      nav: ['Проблемы', 'Услуги', 'Почему я', 'Отзывы', 'Процесс', 'FAQ', 'Контакт'],
    },
    hero: {
      title: 'Хватит ждать. Получите опытное R&D руководство прямо сейчас.',
      subtitle:
        'Более 20 лет практического опыта в управлении R&D — доступно для вашей команды на частичной основе. Структурировано, быстро и ориентировано на результат.',
      urgency: 'Ограниченная доступность — принимаю новых клиентов',
      ctaIntro: 'Записаться на вводную встречу',
      ctaConsult: 'Записаться на стратегическую сессию',
      stats: [
        { label: 'Опыт в R&D', value: '20+ лет' },
        { label: 'Старт работы', value: '< 2 нед.' },
        { label: 'Охват', value: '3 континента' },
      ],
    },
    offerings: [
      {
        title: 'Fractional VP R&D',
        description:
          'Ваши команды синхронизированы, доставка разблокирована — старшее управление R&D без затрат на полный день.',
      },
      {
        title: 'Консалтинг для игровых студий',
        description:
          'Стратегическое руководство для студий и интерактивных продуктовых организаций, готовых к масштабированию.',
      },
      {
        title: 'Масштабирование команды',
        description:
          'Создавайте высокопроизводительные команды R&D с правильной структурой и процессами для вашего этапа роста.',
      },
      {
        title: 'Управление R&D',
        description:
          'Полное управление R&D: техническая стратегия, координация между командами и управление, которое реально масштабируется.',
      },
    ],
    challenges: {
      title: 'Знакомо?',
      subtitle:
        'Большинство растущих технологических компаний сталкиваются с одной и той же стеной — им нужно старшее руководство R&D, но найм на полный день кажется слишком ранним, дорогим или медленным.',
      points: [
        'Ваши команды заняты, но доставка непоследовательна. Никто не видит полную картину R&D.',
        'Вам нужен VP R&D вчера — но найм на полный день занимает месяцы и стоит целое состояние.',
        'Вы растёте быстро, но добавление людей без структуры создаёт хаос, а не скорость.',
        'Ваши команды инженерии, продукта и бизнеса говорят на разных языках — и пробелы обходятся вам дорого.',
      ],
    },
    why: {
      title: '20+ лет в разработке ПО, гейминге и корпоративном секторе — на 3 континентах.',
      description:
        'От ИТ-организаций Fortune 500 до небольших игровых студий — я масштабировала команды, исправляла сломанные процессы и достигала измеримых результатов — глобально и в Израиле. Я знаю, что работает, а что нет.',
      highlights: [
        {
          title: 'Глубокая межотраслевая экспертиза',
          description: 'Кросс-дисциплинарное руководство в инженерии, продукте, разработке игр и операционном совершенстве в глобальных организациях.',
        },
        {
          title: 'Гибко — удалённо или на месте',
          description: 'Создано для распределённых команд. Удалённо по умолчанию, с доступностью на месте для организаций в Израиле, когда это важно.',
        },
      ],
    },
    experience: [
      'Старшее руководство R&D в глобальных технологических, игровых и корпоративных организациях.',
      'Масштабировала инженерные команды от стартапа до предприятия — с соответствующими процессами.',
      'Доступна как fractional VP R&D — результат на уровне директора, по вашему расписанию и бюджету.',
      'Закрыла разрыв между инженерией, продуктом и бизнесом — превращая стратегию в доставленный продукт.',
    ],
    process: [
      {
        title: 'Вводная встреча',
        description: '30 минут. Мы определяем ваши R&D задачи и решаем, есть ли совместимость.',
      },
      {
        title: 'Оценка и предложение',
        description: 'Вы получаете чёткий план: объём, сроки и модель взаимодействия, адаптированную к вашим нуждам.',
      },
      {
        title: 'Начинаем работу',
        description: 'Мы двигаемся быстро. Большинство взаимодействий запускаются в течение 2 недель после первого звонка.',
      },
    ],
    testimonials: [
      {
        quote:
          'Профессиональный подход "можно сделать", оптимизм и улыбка всегда будут её фирменными знаками. Алла — исключительный и талантливый человек. Любая компания будет рада иметь её.',
        name: 'Элла Видра',
        title: 'CIO',
        company: 'eToro',
        photo: '/testimonials/ella-vidra.jpg',
      },
      {
        quote:
          'С первого взгляда я мог распознать в ней очень чёткие черты — ясность, сосредоточенность, стабильность и отношение "сделать это". Она надёжный и профессиональный менеджер, и я от всего сердца рекомендую её любому бизнесу.',
        name: 'Габи Леви',
        title: 'Руководитель управления проектами',
        company: 'Amdocs IT',
        photo: '/testimonials/gabi-levy.jpg',
      },
      {
        quote:
          'Алла была невероятным наставником, сыгравшим огромную роль в моём профессиональном росте. Она создала атмосферу доверия и уважения, поощряя сотрудничество и ответственность. Алла — исключительный лидер с исключительными качествами.',
        name: 'Виктория Окологович',
        title: 'VP R&D',
        company: 'Playtika',
        photo: '/testimonials/viktoria-okolotovich.jpg',
      },
    ],
    faq: [
      {
        question: 'Как быстро мы можем начать?',
        answer:
          'Большинство взаимодействий начинаются в течение 1–2 недель после вводного звонка. Первый шаг — короткий разговор для определения объёма — после этого мы двигаемся быстро.',
      },
      {
        question: 'Есть ли минимальный срок обязательства?',
        answer:
          'Никакой долгосрочной привязки. Взаимодействия структурированы как ежемесячные ретейнеры с 30-дневным периодом уведомления, так что вы полностью контролируете отношения.',
      },
      {
        question: 'Может ли это работать для удалённой или распределённой команды?',
        answer:
          'Да — большинство работ выполняется удалённо и разработано для распределённых команд. Для организаций в Израиле доступно физическое присутствие, когда оно добавляет ценность.',
      },
      {
        question: 'Как оценивается частичное взаимодействие?',
        answer:
          'Ценообразование основано на объёме и количестве часов в неделю, структурировано как ежемесячный ретейнер. Вы получаете старшее руководство R&D за долю стоимости штатного руководителя — с полной гибкостью для масштабирования.',
      },
    ],
    footer: {
      copyright: '© 2026 Алла Шапиро. Доступна для удалённого и израильского сотрудничества.',
      linkedInHref: 'https://www.linkedin.com/in/alla-shapiro',
      emailHref: 'mailto:alla@rndqueen.com',
    },
    logoBar: {
      label: 'Руководители этих организаций доверяют Алле',
      companies: ['eToro', 'Playtika', 'Amdocs'],
    },
  },
} as const;
