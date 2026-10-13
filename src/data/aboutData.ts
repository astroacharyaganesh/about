export interface Milestone {
  year: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  features?: string[];
  isFeatured?: boolean;
}

export interface ClientStory {
  id: string;
  category: string;
  title: string;
  clientName: string;
  designation: string;
  location: string;
  situation: string;
  analysis: string;
  outcome: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const ABOUT_DATA = {
  hero: {
    hindiLine: "आचार्य गणेश",
    name: "Acharya Ganesh",
    subheading: "Hanish Bagga · Vedic Astrologer & Astro-Vastu Expert",
    intro:
      "For 17+ years, Acharya Ganesh has read birth charts one-on-one to help people decide on career, marriage, money and home with clarity. No generic software reports, only a close reading of your own kundli.",
    trustChips: [
      "17+ years of practice",
      "50,000+ charts analysed",
      "10K+ TV shows & media",
      "5.0 Google rating",
    ],
    whatsappNumber: "+917300004325",
    phoneDisplay: "+91 73000-04325",
    phoneSecondary: "+91 73000-04326",
  },

  atAGlance: [
    { label: "Also known as", value: "Hanish Bagga" },
    { label: "Practice", value: "Vedic astrology, Vastu, Astro-Vastu" },
    { label: "Based in", value: "Indirapuram, Ghaziabad" },
    { label: "Consults", value: "Offline, Online, across India and worldwide" },
  ],

  journey: {
    heading: "A spiritual journey that began with one question: why does life unfold this way?",
    intro:
      "Acharya Ganesh turned a lifelong pull towards Vedic wisdom into a practice that has now guided tens of thousands of people.",
    milestones: [
      {
        year: "Phase 1",
        title: "The calling",
        description:
          "Drawn to Vedic astrology as a way to understand the patterns behind life, he began with the classical foundations: grahas, bhavas, rashis and dashas.",
        highlight: "Foundational Classical Scriptures",
      },
      {
        year: "Phase 2",
        title: "Years of study and practice",
        description:
          "He tested classical principles against real lives, building a working command of 25,000+ Vedic astrology rules.",
        highlight: "25,000+ Rules Verified",
      },
      {
        year: "Phase 3",
        title: "One-on-one consultations",
        description:
          "Private readings on career, marriage, wealth and health and Astro-Vastu. One rule stayed fixed: read the actual chart, never a template.",
        highlight: "100% Bespoke Readings",
      },
      {
        year: "Phase 4",
        title: "YouTube and Media",
        description:
          "His plain-spoken way of explaining astrology led to a YouTube community of 158K+ subscribers and 10K+ appearances on national television.",
        highlight: "158K+ YouTube Subscribers",
      },
      {
        year: "Phase 5",
        title: "Teaching the next generation",
        description:
          "Structured courses, from free fundamentals to advanced planetary combinations, so students can learn astrology themselves.",
        highlight: "Structured Vedic Academy",
      },
    ],
    pullQuote: "“Astrology cannot control your future. It can help you meet it prepared.”",
    pullQuoteAuthor: "Acharya Ganesh (Hanish Bagga)",
  },

  visionMission: {
    heading: "Vision and mission",
    mission: {
      title: "Our Mission",
      statement:
        "To make authentic Vedic astrology simple, honest and useful, so every person can understand their chart and act on it with confidence.",
      pillars: [
        "Demystify complex planetary calculations into plain, actionable clarity",
        "Refuse automated software boilerplate in favour of thorough human analysis",
        "Prescribe affordable, practical remedies strictly when supported by the chart",
      ],
    },
    vision: {
      title: "Our Vision",
      statement:
        "A world where people turn to astrology for clarity and preparation, never for fear or dependence.",
      pillars: [
        "A mindset shift from superstitious dread to empowered strategic preparedness",
        "Harmonious living through the unified synergy of Kundli and Astro-Vastu",
        "Educating seekers so wisdom is accessible to every generation",
      ],
    },
  },

  experienceExpertise: {
    heading: "Experience and expertise",
    intro: "17+ years across three connected disciplines, all rooted in your birth chart.",
    disciplines: [
      {
        id: "vedic-astrology",
        title: "Vedic astrology",
        subtitle: "Comprehensive Horoscope & Divisional Analysis",
        isFeatured: true,
        description:
          "Birth chart (D1), divisional charts such as the Dashamsha (D10), Vimshottari Dasha and transit analysis, applied to the questions people ask most.",
        tags: [
          "Career prediction",
          "Love & matchmaking",
          "Wealth astrology",
          "Health astrology",
          "Litigation astrology",
          "Muhurta",
          "Numerology",
          "Kundli reports",
        ],
        details: [
          "D1 (Lagna Chart): Root personality, physical vitality, life trajectory",
          "D10 (Dashamsha): Career breakthroughs, leadership timing, business pivots",
          "Vimshottari Dasha: Precise planetary timeline mapping current and upcoming chapters",
          "Transit (Gochar): Real-time planetary influences overlaid onto natal strength",
        ],
      },
      {
        id: "astro-vastu",
        title: "Vastu & Astro-Vastu",
        subtitle: "Spatial Energy Aligned with Personal Kundli",
        isFeatured: false,
        description:
          "Home, office and workstation guidance that works with your horoscope, not against it.",
        tags: ["Residential Vastu", "Commercial & Factory Vastu", "Workstation Direction", "Non-Demolition Remedies"],
        details: [
          "Syncing physical directional energies with your ruling planetary strengths",
          "Workstation orientation to unlock commercial revenue and career momentum",
          "Non-destructive remedies using copper, brass, elemental balances, and geometric alignments",
        ],
      },
      {
        id: "spiritual-guidance",
        title: "Spiritual guidance",
        subtitle: "Targeted Mantras, Remedial Yantras & Pujas",
        isFeatured: false,
        description:
          "Mantras, remedies and online pujas such as Rudrabhishek and Kaal Sarp Dosh, prescribed only after the full chart is studied.",
        tags: ["Rudrabhishek", "Kaal Sarp Dosh Shanti", "Vedic Mantras", "Planetary Shanti"],
        details: [
          "Remedies matched strictly to planetary lordships, never sun signs alone",
          "Authentic Vedic rituals performed with correct Vedic intonation and sankalp",
          "Ethical guidance without extortion or superstitious scare tactics",
        ],
      },
    ],
  },

  achievements: {
    heading: "Achievements in numbers",
    intro: "Built one chart, one client and one student at a time.",
    stats: [
      {
        number: "50,000+",
        label: "Consultations & charts analysed",
        subtext: "Conducted one-on-one across 17+ years",
      },
      {
        number: "17+",
        label: "Years of experience",
        subtext: "Continuous classical practice & research",
      },
      {
        number: "10K+",
        label: "TV shows & media appearances",
        subtext: "Featured on leading national broadcasts",
      },
      {
        number: "99%",
        label: "Accuracy & trust",
        subtext: "Consistent client recommendation rate",
      },
      {
        number: "5.0",
        label: "Google rating, 5,000+ reviews",
        subtext: "Verified five-star client feedback",
      },
    ],
  },

  whyTrust: {
    heading: "Why trust Acharya Ganesh",
    pillars: [
      {
        title: "Ethical guidance",
        description:
          "No fear tactics and no guaranteed outcomes. Remedies are suggested only when your chart calls for them, and gemstones are never prescribed from your sun sign alone.",
        bullet: "Zero fear mongering · Scientific remedy discipline",
      },
      {
        title: "Personalised consultation",
        description:
          "Every session is 1-on-1 and private. Your birth chart, D10 and running dashas are studied line by line, with a remedy chart and summary after the call.",
        bullet: "Direct discussion · Post-consultation remedy chart",
      },
      {
        title: "Research-based Vedic approach",
        description:
          "Classical principles, applied with discipline: houses, divisional charts and planetary timing read together instead of one transit in isolation.",
        bullet: "25,000+ verified Vedic rules · Multi-divisional verification",
      },
      {
        title: "Client-first philosophy",
        description:
          "Plain language, 100% confidentiality, slots seven days a week and a callback within an hour of booking.",
        bullet: "1-hour callback response · Strict privacy guarantee",
      },
    ],
  },

  testimonials: {
    heading: "Client stories",
    intro: "Professionals who used career astrology to decide when to move, wait or build.",
    ratingLine: "★ 5.0 on Google · Read verified reviews · Watch student video reviews",
    stories: [
      {
        id: "rajesh-kulkarni",
        category: "Job switch & timing",
        title: "Job switch & timing",
        clientName: "Rajesh Kulkarni",
        designation: "Principal Software Architect",
        location: "Bengaluru",
        situation: "After four years with little change in pay or role, he had his D10 chart and dasha periods studied and learned which window favoured a move.",
        analysis: "Vimshottari Dasha revealed a supportive Jupiter-Mercury sub-period beginning in Q3, while the D10 Dashamsha indicated strong 10th-lord elevation.",
        outcome: "Switched in the advised window to a better-paid, more challenging role.",
      },
      {
        id: "pooja-sundaram",
        category: "Promotion & growth",
        title: "Promotion & growth",
        clientName: "Pooja Sundaram",
        designation: "VP Marketing & Growth",
        location: "Mumbai",
        situation: "Under pressure at work and close to resigning, she was told the difficult phase was temporary and given steps to stay steady.",
        analysis: "Acharya Ganesh identified an intense Saturn transit crossing her natal Moon. He advised against impulsive resignation during this testing phase.",
        outcome: "Avoided a hasty exit and was offered a leadership role within months.",
      },
      {
        id: "vikramaditya-rao",
        category: "Business & startups",
        title: "Business & startups",
        clientName: "Vikramaditya Rao",
        designation: "Founder & MD",
        location: "Hyderabad / Dubai",
        situation: "Torn between a job and entrepreneurship, he had the 6th, 7th, 10th and 11th houses compared against his running periods.",
        analysis: "The 11th house of gains and 10th house of enterprise showed remarkable strength after April. A calculated transition was drafted.",
        outcome: "Planned his exit and launched the business at the recommended time.",
      },
    ],
  },

  learn: {
    heading: "Learn Vedic astrology with him",
    subtext: "Start with the free Building Blocks course, or watch free lessons on the YouTube channel.",
    courses: [
      {
        title: "Building Blocks of Vedic Astrology",
        level: "Beginner · Free Foundation",
        desc: "Master the 12 Bhavas (houses), 9 Grahas (planets), and 12 Rashis (zodiac signs). Understand how planetary energies interact.",
        free: true,
      },
      {
        title: "Predictive Dasha & Divisional Mastery",
        level: "Intermediate & Advanced",
        desc: "Learn line-by-line reading of Vimshottari Dashas and micro divisional charts like D9 Navamsha & D10 Dashamsha.",
        free: false,
      },
      {
        title: "Astro-Vastu Spatial Synchronization",
        level: "Specialist Certification",
        desc: "Bridge personal horoscopes with architectural directional energies for home and commercial spaces.",
        free: false,
      },
    ],
    youtubeStats: "158K+ subscribers · 800+ educational videos",
  },

  faqs: [
    {
      question: "Who is Acharya Ganesh?",
      answer:
        "Acharya Ganesh, also known as Hanish Bagga, is a Vedic astrologer and Astro-Vastu expert with 17+ years of experience, based in Indirapuram, Ghaziabad. He guides clients across India and abroad.",
    },
    {
      question: "What does he specialise in?",
      answer:
        "Career, love and matchmaking, wealth, health and litigation astrology, muhurta, numerology, Vastu and Astro-Vastu, along with spiritual remedies and online pujas.",
    },
    {
      question: "Are consultations online?",
      answer:
        "Yes. Sessions are 1-on-1 over private video or phone call, open to clients in India, the USA, Canada, the UK and elsewhere.",
    },
    {
      question: "Are readings generic software reports?",
      answer:
        "No. Each reading is prepared from your own birth chart, divisional charts and running dasha periods, and studied personally.",
    },
    {
      question: "How do I book?",
      answer:
        "Fill out the booking form, message on WhatsApp at +91 73000-04325, or call the team. You will get a callback, usually within an hour.",
    },
  ],

  contact: {
    heading: "Talk to Acharya Ganesh",
    subtext: "Tell us what you need clarity on. We will confirm your slot and guide you from there.",
    address: "Floor, 887, Lower Ground, B-1, Niti Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
    email: "info@acharyaganesh.com",
    phones: ["+91 73000-04325", "+91 73000-04326"],
    socialLinks: [
      { name: "WhatsApp", url: "https://wa.me/917300004325" },
      { name: "YouTube", url: "https://youtube.com/@AcharyaGanesh" },
      { name: "Instagram", url: "https://instagram.com/acharyaganeshofficial" },
      { name: "Facebook", url: "https://facebook.com/acharyaganeshofficial" },
    ],
    citiesServed: [
      "Delhi",
      "Noida",
      "Ghaziabad",
      "Gurgaon",
      "Jaipur",
      "Bangalore",
      "Mumbai",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Chandigarh",
      "Lucknow",
      "Indore",
      "40+ more cities",
      "USA",
      "UK",
      "UAE / Dubai",
      "Canada",
      "Singapore",
      "Australia",
    ],
    disclaimer:
      "Astrology offers guidance, not guarantees. It does not replace medical, legal or financial advice.",
  },
};
