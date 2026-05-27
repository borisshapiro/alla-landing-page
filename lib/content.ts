export type LanguageCode = 'en' | 'he' | 'ru';

export const languages = [
  { code: 'en', label: 'EN' },
  { code: 'he', label: 'HE' },
  { code: 'ru', label: 'RU' },
] as const;

export const content = {
  en: {
    metadata: {
      title: 'Alla | Fractional VP R&D & Advisory',
      description: 'Seasoned R&D leadership for startups, corporates, and game studios in Israel and globally.',
    },
    header: {
      tagline: 'R&D leadership & advisory',
      nav: ['Challenges', 'Offerings', 'Why work with me', 'Process', 'FAQ', 'Contact'],
    },
    hero: {
      title: 'Fractional VP R&D, game studio advisory, and team scaling for product organizations.',
      subtitle:
        'Helping Israeli and global tech teams accelerate execution, build resilient engineering organizations, and deliver trusted R&D leadership for growth.',
      ctaIntro: 'Book intro call',
      ctaConsult: 'Book consult hour',
    },
    offerings: [
      {
        title: 'Fractional VP R&D',
        description:
          'Interim leadership that drives product delivery, engineering alignment, and team performance without a full-time commitment.',
      },
      {
        title: 'Game Studio Advisory',
        description:
          'Strategic guidance for game teams, studios, and interactive product organizations focused on growth and execution.',
      },
      {
        title: 'Team Scaling',
        description:
          'Build and coach high-performing R&D teams with the right structure, process, and talent for fast-moving environments.',
      },
      {
        title: 'R&D Leadership',
        description:
          'Operational governance, technical strategy, and cross-disciplinary coordination for product-driven organizations.',
      },
    ],
    challenges: {
      title: 'Common R&D challenges',
      subtitle:
        'Senior teams and decision-makers often need clarity, speed, and execution without adding permanent overhead.',
      points: [
        'Unclear R&D direction or inconsistent execution across teams.',
        'Need for experienced leadership without committing to a full-time hire.',
        'Scaling engineering and product teams while preserving delivery quality.',
        'Aligning remote and multicultural teams with business objectives.',
      ],
    },
    why: {
      title: 'Leadership that combines global R&D experience with practical delivery.',
      description:
        'From large international corporations to agile game studios and software houses, I bring structure, clarity and momentum to R&D teams that need rapid alignment and measurable outcomes.',
      highlights: [
        {
          title: 'Trusted background',
          description: 'Cross-disciplinary leadership in engineering, product, game development, and operational excellence.',
        },
        {
          title: 'Remote & local',
          description: 'Flexible remote partnerships with the ability to engage on-premises in Israel when geography permits.',
        },
      ],
    },
    experience: [
      'Global R&D leadership across software and gaming organizations.',
      'Building teams, processes, and governance for product execution.',
      'Fractional leadership for organizations that need senior experience quickly.',
      'Aligning engineering, product, and business stakeholders for faster delivery.',
    ],
    process: [
      {
        title: 'Intro call',
        description: 'Understand your goals, challenges, and the right engagement path.',
      },
      {
        title: 'Assessment & proposal',
        description: 'Receive a clear plan for leadership support, advisory scope, or team enablement.',
      },
      {
        title: 'Start working',
        description: 'Begin collaboration fast with focused, executive-level delivery.',
      },
    ],
    testimonials: [
      {
        quote: 'TODO: Add real testimonial quote here.',
        name: 'TODO: First Last',
        title: 'TODO: Title',
        company: 'TODO: Company',
      },
      {
        quote: 'TODO: Add real testimonial quote here.',
        name: 'TODO: First Last',
        title: 'TODO: Title',
        company: 'TODO: Company',
      },
      {
        quote: 'TODO: Add real testimonial quote here.',
        name: 'TODO: First Last',
        title: 'TODO: Title',
        company: 'TODO: Company',
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
      contacts: 'LinkedIn / Calendly / Email',
    },
  },
} as const;
