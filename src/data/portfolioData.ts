import {
  WorkTabItem,
  FeaturedVideoItem,
  ProofArticleItem,
  ProofDeckItem,
  UGCMetaAdItem,
  ProofSocialItem,
  ProofCredentialItem,
  ProofPodcastItem,
  ProofYouTubeVideoItem,
  ToolTrayCategory,
} from '../types/portfolio';

export const MARQUEE_TEAMS = [
  'DaveAI (AutoNgage)',
  'Zepto',
  'Emitrr',
  'Joveo',
  'SmartQ',
  'IQnext',
];

export const WHAT_I_DO_CARDS = [
  {
    number: '01',
    title: 'Writing that gets found',
    description:
      'Blogs, comparison pages and product guides that people find on Google and in AI answers.',
    tags: ['SEO', 'AEO', 'Product guides', 'Comparison pages'],
    colorAccent: 'from-[#A855F7]/15 to-[#6366F1]/10',
    borderColor: 'border-[#A855F7]/30',
    tagColor: 'text-[#A855F7]',
  },
  {
    number: '02',
    title: 'Videos and stories',
    description:
      'Brand films, product explainers and even a street interview series. I help with the idea, the script and the storyboard.',
    tags: ['Scripts', 'Storyboards', 'Explainers', 'Shorts'],
    colorAccent: 'from-[#EC4899]/15 to-[#A855F7]/10',
    borderColor: 'border-[#EC4899]/30',
    tagColor: 'text-[#EC4899]',
  },
  {
    number: '03',
    title: 'Brand and social',
    description:
      'Rebrands, LinkedIn posts for founders and leaders, Instagram, and weekly emails that keep people interested.',
    tags: ['Brand identity', 'LinkedIn', 'Instagram', 'Email'],
    colorAccent: 'from-[#6366F1]/15 to-[#3B82F6]/10',
    borderColor: 'border-[#6366F1]/30',
    tagColor: 'text-[#6366F1]',
  },
];

export const WORK_ITEMS: WorkTabItem[] = [
  {
    id: 'daveai',
    name: 'DaveAI (AutoNgage)',
    role: 'Creative Marketing Strategist',
    dates: '2025 to now',
    whatIDid: [
      'I write product stories, articles and founder posts every week.',
      "I help turn AI features into stories enterprise clients understand, like Toyota's Mithra and Maruti Suzuki's Auto-bot.",
      'I helped with the AutoNgage rebrand across the website, LinkedIn and Instagram.',
      'I make videos for YouTube and Instagram, from a brand journey film to a street interview series.',
    ],
    whatCameOfIt:
      "Organic traffic grew about 3.4x over nine months, and 12 inbound leads came in through content. A team effort, and I'm glad I got to be part of it.",
    link: {
      label: 'AutoNgage on Instagram',
      url: 'https://www.instagram.com/autongage/',
    },
    button: {
      label: 'Watch the videos',
      targetProofTab: 'youtube',
    },
  },
  {
    id: 'iqnext',
    name: 'IQnext',
    role: 'Content Marketing Intern',
    dates: '2025',
    whatIDid: [
      'Wrote SEO blogs on facility management.',
      'Turned long articles into LinkedIn carousels.',
      'Ran content audits and planned content themes with the team.',
    ],
  },
  {
    id: 'zepto',
    name: 'Zepto',
    role: 'Marketing Ops (QA)',
    dates: '2025',
    whatIDid: [
      'Worked with the Apple Brand Partnership team to keep everything accurate during fast launches on the app.',
      'Studied product margins to write discount strategy docs.',
      'Cleaned up catalog listings so products looked consistent.',
      'Wrote simple how-to and lifestyle content for first-time users.',
    ],
  },
  {
    id: 'joveo',
    name: 'Joveo',
    role: 'Brand and Content Consultant (Freelance)',
    dates: '2025',
    whatIDid: [
      'Helped leaders build their LinkedIn presence in HR tech.',
      'Ran weekly nurture emails.',
      'Worked on SEO and AEO so Joveo shows up in AI search.',
      'Built a workflow that turns Recruiting Realities podcast episodes into social posts, with AI tools helping along the way.',
    ],
    button: {
      label: 'Listen to the episodes',
      targetProofTab: 'podcasts',
    },
  },
  {
    id: 'emitrr',
    name: 'Emitrr',
    role: 'Content Strategist (Freelance)',
    dates: '2025',
    whatIDid: [
      'Wrote 35+ SEO articles on product and industry topics. Several reached the top 5 for their category.',
      'Built comparison pages and product guides, written the way the sales team talks.',
    ],
    link: {
      label: 'Emitrr Blog',
      url: 'https://emitrr.com/blog/',
    },
    button: {
      label: 'Read some articles',
      targetProofTab: 'articles',
    },
  },
  {
    id: 'smartq',
    name: 'SmartQ (Compass Group)',
    role: 'Presentation Intern',
    dates: '2025',
    whatIDid: [
      'Wrote and designed 60+ presentations and client decks, all on brand.',
      'Made brand templates and design assets for digital and print.',
    ],
    button: {
      label: 'See some decks',
      targetProofTab: 'decks',
    },
  },
];

export const FEATURED_VIDEOS: FeaturedVideoItem[] = [
  {
    id: 'video-1',
    title: 'Founder video',
    myPart: 'Concept and script',
    embedUrl: 'https://www.youtube.com/embed/aBDEyAxm8dw',
    url: 'https://youtu.be/aBDEyAxm8dw',
    youtubeId: 'aBDEyAxm8dw',
  },
  {
    id: 'video-2',
    title: 'DaveAI x Maruti Suzuki case study',
    myPart: 'Story and script',
    embedUrl: 'https://www.youtube.com/embed/GFQWsTZtDGY',
    url: 'https://youtu.be/GFQWsTZtDGY',
    youtubeId: 'GFQWsTZtDGY',
  },
  {
    id: 'video-3',
    title: 'Employer branding film',
    myPart: 'Script and storyboard',
    embedUrl: 'https://www.youtube.com/embed/H2Qow7cwgYk',
    url: 'https://youtu.be/H2Qow7cwgYk',
    youtubeId: 'H2Qow7cwgYk',
  },
];

export const PROOF_ARTICLES: ProofArticleItem[] = [
  {
    title: 'Athenahealth vs. eClinicalWorks',
    url: 'https://emitrr.com/blog/athenahealth-vs-eclinicalworks/',
    source: 'Emitrr',
  },
  {
    title: 'Athenahealth vs. Epic',
    url: 'https://emitrr.com/blog/athenahealth-vs-epic/',
    source: 'Emitrr',
  },
  {
    title: 'Practice Fusion vs. Athenahealth',
    url: 'https://emitrr.com/blog/practice-fusion-vs-athenahealth/',
    source: 'Emitrr',
  },
  {
    title: 'Athenahealth Patient Billing: Complete Guide',
    url: 'https://emitrr.com/blog/how-does-athenahealth-handle-patient-billing-a-complete-guide/',
    source: 'Emitrr',
  },
  {
    title: 'How to Set Up Athena Patient Portal',
    url: 'https://emitrr.com/blog/how-to-set-up-athenahealth-patient-portal/',
    source: 'Emitrr',
  },
  {
    title: 'How to Send Patient Messages in Athena',
    url: 'https://emitrr.com/blog/how-to-send-a-patient-message-in-athena/',
    source: 'Emitrr',
  },
  {
    title: 'What Providers Use Athenahealth?',
    url: 'https://emitrr.com/blog/what-providers-use-athenahealth/',
    source: 'Emitrr',
  },
  {
    title: 'What is AthenaOne Voice Solutions?',
    url: 'https://emitrr.com/blog/what-is-athenaone-voice-solutions/',
    source: 'Emitrr',
  },
  {
    title: 'What is Athena Telehealth?',
    url: 'https://emitrr.com/blog/what-is-athena-telehealth/',
    source: 'Emitrr',
  },
  {
    title: 'How Does AthenaOne Work?',
    url: 'https://emitrr.com/blog/how-does-athenaone-work/',
    source: 'Emitrr',
  },
];

export const PROOF_DECKS: ProofDeckItem[] = [
  {
    title: 'Myntra Client Presentation Deck (28 slides)',
    url: 'https://docs.google.com/presentation/d/19t3RW9IWh7NlFmiL8h36RtAF2-rWN3tN/edit',
    source: 'Google Slides',
  },
  {
    title: 'Accenture Internal Branding Deck (32 slides)',
    url: 'https://docs.google.com/presentation/d/14LwWFrx2GuUJdDeO1SA8pvJsC-Nvastl/edit',
    source: 'Google Slides',
  },
  {
    title: 'OP Jindal Client Briefing Deck (24 slides)',
    url: 'https://docs.google.com/presentation/d/13kKMM5yZAICO1O31VkLSFzLdoEMMXwSh/edit',
    source: 'Google Slides',
  },
];

// Dedicated High-Converting UGC Meta Ads specified by user
export const UGC_META_ADS: UGCMetaAdItem[] = [
  {
    id: 'ugc-01',
    title: 'UGC Meta Ad 01',
    url: 'https://www.instagram.com/p/DZuAiT0zlBp/?hl=en',
    format: 'Short-form hook + authentic user-led problem agitation.',
    channel: 'Instagram Reels / Meta Ads',
    hookDescription: 'Authentic user perspective addressing real everyday friction.',
  },
  {
    id: 'ugc-02',
    title: 'UGC Meta Ad 02',
    url: 'https://www.instagram.com/p/DYws2V4zrU8/?hl=en',
    format: 'Feature demonstration + relatable objection handling.',
    channel: 'Instagram Reels / Meta Ads',
    hookDescription: 'Walkthrough illustrating feature benefits while answering user hesitations.',
  },
  {
    id: 'ugc-03',
    title: 'UGC Meta Ad 03',
    url: 'https://www.instagram.com/p/DZEspmOTZiG/?hl=en',
    format: 'Conversion-focused CTA + dynamic text overlay.',
    channel: 'Instagram Reels / Meta Ads',
    hookDescription: 'Clear kinetic messaging engineered for instant action and clicks.',
  },
];

export const PROOF_UGC_ADS = UGC_META_ADS;

export const PROOF_LINKEDIN_POSTS: ProofSocialItem[] = [
  {
    title: 'Post 01',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7415348649418809345',
    source: 'LinkedIn',
  },
  {
    title: 'Post 02',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7413814043309826048',
    source: 'LinkedIn',
  },
  {
    title: 'Post 03',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7407325280916189184',
    source: 'LinkedIn',
  },
  {
    title: 'Post 04',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7404807238818967552',
    source: 'LinkedIn',
  },
  {
    title: 'Post 05',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7404094023935832064',
    source: 'LinkedIn',
  },
  {
    title: 'Post 06',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7402253454607593472',
    source: 'LinkedIn',
  },
  {
    title: 'Post 07',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7401492878948311040',
    source: 'LinkedIn',
  },
];

export const PROOF_AWARDS_RESEARCH: ProofCredentialItem[] = [
  {
    title: 'NASSCOM Mobility Innovation Winner',
    url: 'https://nasscom.in/deeptech/nasscom-mobility-confluence/',
    issuer: 'NASSCOM DeepTech',
    type: 'Award',
  },
  {
    title: 'Published Research Paper',
    url: 'https://drive.google.com/file/d/1lLXHPrXipRp_bnnZfmQ8qpJ6Nb99CRCM/view',
    issuer: 'Engineering Journal',
    type: 'Research',
  },
];

export const PROOF_CERTIFICATIONS: ProofCredentialItem[] = [
  {
    title: 'Mastering Content Strategy',
    url: 'https://drive.google.com/file/d/1iYAVeNP9QzLJBiEd06tHeUoYsGZWVoTp/view',
    issuer: 'Professional Credential',
    type: 'Certification',
  },
  {
    title: 'Storytelling Secrets for Brands',
    url: 'https://drive.google.com/file/d/1_3OGxR6KL_NTad85awLkjYwEV6_m5T-B/view',
    issuer: 'Brand Academy',
    type: 'Certification',
  },
  {
    title: 'Building Research Plans for Growth',
    url: 'https://drive.google.com/file/d/18cL0ueBQpvTk2zypWNcTp56IJKYTu3vb/view',
    issuer: 'Growth Strategy',
    type: 'Certification',
  },
  {
    title: 'IBM Enterprise Design Thinking Practitioner',
    url: 'https://drive.google.com/file/d/1uiXfqVAEg_MEcAuFIWvt-aE7ZMKaSG3M/view',
    issuer: 'IBM',
    type: 'Certification',
  },
  {
    title: 'Google Ads Workshop',
    url: 'https://drive.google.com/file/d/1rNYuG3c7Ilv4-APqjUwXgkpsVD-4HoBo/view',
    issuer: 'Google',
    type: 'Certification',
  },
];

export const PROOF_PODCASTS: ProofPodcastItem[] = [
  {
    title: 'All episodes',
    url: 'https://www.joveo.com/podcasts/',
    source: 'Joveo',
  },
  {
    title: 'Episode 10',
    url: 'https://www.joveo.com/podcasts/recruiting-realities-episode-10/',
    source: 'Joveo',
  },
  {
    title: 'Episode 13',
    url: 'https://www.joveo.com/podcasts/recruiting-realities-episode-13/',
    source: 'Joveo',
  },
  {
    title: 'Episode 17',
    url: 'https://www.joveo.com/podcasts/recruiting-realities-episode-17/',
    source: 'Joveo',
  },
  {
    title: 'Episode 20',
    url: 'https://www.joveo.com/podcasts/recruiting-realities-episode-20/',
    source: 'Joveo',
  },
];

export const PROOF_YOUTUBE_VIDEOS: ProofYouTubeVideoItem[] = [
  {
    id: 'J2dMgUpz_U8',
    title: 'Product Video',
    youtubeId: 'J2dMgUpz_U8',
    url: 'https://youtube.com/watch?si=SHrDCJbusfl0iB0k&v=J2dMgUpz_U8&feature=youtu.be',
  },
  {
    id: 'BR6buqFeEV0',
    title: 'Brand Journey Film',
    youtubeId: 'BR6buqFeEV0',
    url: 'https://youtube.com/watch?si=BQKGYH5P_behwlmI&v=BR6buqFeEV0&feature=youtu.be',
  },
  {
    id: 'Fr0Acdp_2Rw',
    title: 'Technical Explainer',
    youtubeId: 'Fr0Acdp_2Rw',
    url: 'https://www.youtube.com/watch?si=kdAmfyKXUCxUjqss&v=Fr0Acdp_2Rw&feature=youtu.be',
  },
];

export const PROOF_YOUTUBE_SHORTS: ProofYouTubeVideoItem[] = [
  {
    id: 'Pu_xfy8xYi4',
    title: 'Street Interview Series',
    youtubeId: 'Pu_xfy8xYi4',
    url: 'https://youtube.com/shorts/Pu_xfy8xYi4?si=y7tLyv6iVkqGxLtV',
    isShort: true,
  },
  {
    id: '1DJaBxLdW34',
    title: 'Short 02',
    youtubeId: '1DJaBxLdW34',
    url: 'https://www.youtube.com/shorts/1DJaBxLdW34?si=ru-GWmfZ8XkeqCN4',
    isShort: true,
  },
  {
    id: 'x9_Mqo3RwSk',
    title: 'Short 03',
    youtubeId: 'x9_Mqo3RwSk',
    url: 'https://www.youtube.com/shorts/x9_Mqo3RwSk?si=Ww5aMVPB-5wphpaK',
    isShort: true,
  },
  {
    id: '4d1713d0ULA',
    title: 'Short 04',
    youtubeId: '4d1713d0ULA',
    url: 'https://www.youtube.com/shorts/4d1713d0ULA',
    isShort: true,
  },
];

export const EVENT_GROUPS = {
  international: ['NADA (USA)', 'GITEX (Middle East)', 'LEAP'],
  india: ['NASSCOM Future Forge', 'Passenger Vehicle Forum', 'FADA', 'ET Auto'],
};

export const TOOL_TRAYS: ToolTrayCategory[] = [
  {
    category: 'Outreach & Email',
    tools: ['Apollo', 'HubSpot', 'Instantly.ai', 'Zoho Campaigns'],
  },
  {
    category: 'SEO & Analytics',
    tools: ['Semrush', 'Ahrefs', 'Google Search Console', 'Meta Ads Library'],
  },
  {
    category: 'Design & Build',
    tools: ['Figma', 'Canva', 'Notion', 'Microsoft Office', 'WordPress'],
  },
  {
    category: 'AI & Automation',
    tools: [
      'Claude',
      'Claude Code',
      'Claude Cowork',
      'ChatGPT',
      'Gemini',
      'Gemini Spark',
      'NotebookLM',
      'Midjourney',
      'Higgsfield (AI image and video generation)',
      'n8n',
      'Cursor',
    ],
  },
];
