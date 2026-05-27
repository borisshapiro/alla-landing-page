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
      title: 'Senior R&D leadership. No full-time hire required.',
      subtitle:
        '20+ years of hands-on R&D leadership — available to your team on a fractional basis. Structured, fast, and focused on delivery.',
      ctaIntro: 'Book My Free Intro Call',
      ctaConsult: 'Book a Strategy Session',
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
      contacts: 'LinkedIn / Calendly / Email',
    },
  },
} as const;
