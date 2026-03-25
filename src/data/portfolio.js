export const portfolioContent = {
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    id: 'hero',
    eyebrow: 'Lebone Rachidi',
    titleTop: 'Operations is the',
    titleBottom: 'backbone.',
    purpose:
      'Operations, systems, and execution support for growing businesses that need structure behind the scenes.',
    intro:
      'I build practical systems, workflows, and coordination structures that help founders and teams execute with more clarity, consistency, and follow-through.',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=80',
    actions: [
      { label: 'View Projects', href: '#projects' },
      {
        label: 'Download CV',
        href: '/lebone-rachidi-cv.pdf',
        download: true,
        available: true,
      },
      { label: 'Contact', href: '#contact' },
    ],
    highlights: [
      'Systems design',
      'Workflow structure',
      'Execution support',
      'AI-assisted operations',
    ],
  },
  about: {
    id: 'about',
    eyebrow: 'About',
    title: 'Structured support for teams that have outgrown ad-hoc execution.',
    portrait: {
      src: '/lebone-rachidi-portrait.png',
      alt: 'Portrait of Lebone Rachidi',
    },
    paragraphs: [
      'I work behind the scenes to make operations easier to run. That means turning scattered tasks into trackable workflows, documenting repeatable processes, and helping teams coordinate the work that keeps a business moving.',
      'My focus is practical rather than theoretical: systems that can be used now, with tools that are accessible, clear, and realistic for growing businesses.',
    ],
    pillars: [
      {
        title: 'Build the system',
        description: 'Create the workflow, tracker, or operating layer that gives work a clear structure.',
      },
      {
        title: 'Clarify ownership',
        description: 'Make tasks, communication, and expectations visible so follow-through is easier.',
      },
      {
        title: 'Support execution',
        description: 'Use documentation, tooling, and iteration to keep the system useful in practice.',
      },
    ],
  },
  valueSection: {
    id: 'value-props',
    eyebrow: 'Core Value',
    title: 'Three ways the work creates order behind the scenes.',
    description:
      'These are the systems principles that sit underneath the project work, from reporting and coordination to more intelligent execution.',
  },
  philosophy: {
    id: 'philosophy',
    eyebrow: 'Philosophy',
    title: 'The work is not about more activity. It is about better operating logic.',
    image:
      'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80',
    statementOne: 'Most growing businesses focus on: effort and activity.',
    statementTwo:
      'I focus on: systems that make execution clear, trackable, and repeatable.',
    description:
      'When the operating layer is solid, teams spend less time reacting and more time delivering.',
  },
  projects: {
    id: 'projects',
    eyebrow: 'Projects',
    title: 'Proof of work across reporting, workflows, coordination, and commercial logic.',
    featuredDescription:
      'A curated set of four projects that show the breadth of systems design, execution support, and process thinking.',
    allProjectsDescription:
      'Every project listed below includes a direct document link for deeper review.',
  },
  capabilities: {
    id: 'capabilities',
    eyebrow: 'Capabilities',
    title: 'Capabilities built around systems, communication, and practical execution.',
    description:
      'The work spans lightweight operating systems, repeatable documentation, and tool-supported delivery.',
    toolsTitle: 'Tools used in relevant workflow contexts',
    toolsDescription:
      'These are tools I have used or can confidently use when they help with tracking, research, communication, documentation, and workflow experimentation.',
  },
  protocol: {
    id: 'protocol',
    eyebrow: 'Process',
    title: 'A practical method for making operations easier to run.',
    description:
      'The process starts with bottlenecks, translates them into structure, and then keeps the system useful in day-to-day execution.',
  },
  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    title: 'Review the work, download the CV, or get in touch directly.',
    description:
      'This portfolio is designed to make proof of work easy to assess. If you want to discuss a role, collaboration, or project context, the fastest path is direct contact.',
    cv: {
      label: 'Download CV',
      href: '/lebone-rachidi-cv.pdf',
      available: true,
      unavailableLabel: 'CV ready',
      note:
        'The bundled PDF is available for direct download from this portfolio.',
    },
    directLinks: [
      {
        label: 'Email',
        value: 'rachidilebone@gmail.com',
        href: 'mailto:rachidilebone@gmail.com',
      },
      {
        label: 'Phone',
        value: '+27 61 455 2295',
        href: 'tel:+27614552295',
      },
      {
        label: 'Location',
        value: 'Germiston, Gauteng, South Africa',
      },
    ],
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lebone-rachidi/',
      },
      {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@lebone_rachidi/',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/lebone_rachidi/',
      },
    ],
  },
  footer: {
    brand: 'Lebone Rachidi',
    tagline:
      'Operations, systems, and execution support for growing businesses that need structure behind the scenes.',
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Featured Projects', href: '#projects' },
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Email', href: 'mailto:rachidilebone@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lebone-rachidi/' },
      { label: 'Instagram', href: 'https://www.instagram.com/lebone_rachidi/' },
    ],
  },
};

export const valueProps = [
  {
    title: 'Turning messy operations into clear systems',
    descriptor: 'A structured view of capture, standardization, and reporting.',
    stackLabels: [
      { title: 'Capture', detail: 'Inputs organized at the source' },
      { title: 'Standardize', detail: 'Shared formats and process rules' },
      { title: 'Surface', detail: 'Useful outputs teams can act on' },
    ],
  },
  {
    title: 'Keeping communication, tasks, and teams aligned',
    descriptor: 'Live workflow signals that make ownership easier to see.',
    feedMessages: [
      'Inbox notes routed into a shared operations queue.',
      'Open tasks assigned with visible owner and due context.',
      'Status updates captured so the team can move without guesswork.',
    ],
  },
  {
    title: 'Using modern tools to make execution smarter and more efficient',
    descriptor: 'A weekly rhythm for using tools with intention, not noise.',
    scheduleSteps: [
      { day: 'M', label: 'Review intake' },
      { day: 'W', label: 'Automate routine' },
      { day: 'F', label: 'Confirm follow-through' },
    ],
  },
];

export const projects = [
  {
    title: 'Financial Reporting System',
    summary:
      'Built a Google Form and spreadsheet system to capture daily cash sales, card sales, and expenses, then roll them into weekly store-level cash summaries and total income reporting.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.15q29sqgh7oe',
    featured: true,
  },
  {
    title: 'Messaging Script Library for Instagram and WhatsApp',
    summary:
      'Created reusable customer message templates for greetings, availability, pricing, payment instructions, waiting times, and follow-ups to make communication faster and more consistent.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.8h5on6rrhlzi',
    featured: false,
  },
  {
    title: 'Shared Light ERP and SOP Hub',
    summary:
      'Built a shared Google Doc that acted as a lightweight ERP and SOP hub, keeping customer orders, delivery details, internal records, and production-ready information in one accessible place.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.ohyt64dkqwcz',
    featured: false,
  },
  {
    title: 'Order Capture, Production Planning, and Shortfall Tracking System',
    summary:
      'Built a connected workflow that moved customer demand from chat into structured order capture, weekly production planning, stock allocation, and production shortage tracking.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.xkf5mhmjr4eg',
    featured: true,
  },
  {
    title: 'POS Implementation with Yoco and Company-Specific SOPs',
    summary:
      'Researched, registered, and rolled out Yoco POS across stores, then created step-by-step SOPs and delivered in-person demos so staff could use the system correctly.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.puu97b2e27ej',
    featured: false,
  },
  {
    title: 'Hiring Pipeline and Onboarding Tracker',
    summary:
      'Built a lightweight hiring and onboarding workflow using Google Drive and trackers to collect CVs and videos, tier candidates, coordinate interviews, and onboard new team members with SOPs.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.x62c0rxi5z4k',
    featured: false,
  },
  {
    title: 'Upwork Lead Qualification and Sourcing Workflow',
    summary:
      'Built the daily workflow for sourcing, filtering, and qualifying Upwork opportunities so the team could consistently identify relevant prospects for their service offering.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.3vnvxfr6wx0a',
    featured: false,
  },
  {
    title: 'Proposal Template System for Loom-Based Applications',
    summary:
      'Created proposal templates that worked alongside custom Loom videos to make applications clearer, more structured, and more persuasive.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.e3j8nggkzn64',
    featured: false,
  },
  {
    title: 'Service Positioning, Market Language Research, and Prospecting Strategy',
    summary:
      'Researched buyer language, tested prospecting routes, and built the GTM reasoning that clarified how SeedTech should position its service and where to find demand.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.myb1vcv3v1te',
    featured: false,
  },
  {
    title: 'Pricing Strategy, Target Market Logic, and Product Expansion Concepts',
    summary:
      'Built the commercial logic for MaT Sanitisation Solutions, including pricing structure, target-market reasoning, and added product concepts to strengthen market entry.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.vt3yujjxwt7z',
    featured: true,
  },
  {
    title: 'Domain and Business Email Setup',
    summary:
      'Purchased the domain and configured the branded email infrastructure for MaT Sanitisation Solutions to create a more credible and professional communication foundation.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.rf6w1wiowmxd',
    featured: false,
  },
  {
    title: 'Smart Recipe Costing and Menu Profit System',
    summary:
      'Built a spreadsheet-based system that calculated unit food cost, target selling price, and menu-level break-even logic for a local food business owner.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.l7swesqvyq0j',
    featured: false,
  },
  {
    title: 'Medical Negligence Practice Model and Lead Generation System',
    summary:
      'Designed a service model, pricing logic, lead-generation workflow, and outreach system for a proposed medical negligence legal practice.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.29w4lvzy81g',
    featured: false,
  },
  {
    title: 'Website Design & Build Projects',
    summary:
      'Built and launched three websites across personal branding and live business use cases, handling site structure, content direction, build workflows, deployment, and functional lead-generation elements from concept to launch.',
    href: 'https://docs.google.com/document/d/11Zv3kgXkBXPIZr0fLBfbB8N4pmoQhiv6GLIbTrU5aOw/edit?tab=t.382i70nd44tv',
    featured: true,
  },
];

export const skills = [
  'Operations systems design',
  'SOP creation and process documentation',
  'Workflow design',
  'Cross-functional coordination',
  'Lead research and qualification',
  'Pricing strategy and commercial logic',
  'Spreadsheet-based system building',
  'Customer communication workflows',
  'Stakeholder follow-through',
  'Record-keeping and reporting',
  'Vibe Coding',
  'Tool adoption and workflow experimentation',
];

export const tools = [
  'Google Sheets',
  'Google Docs',
  'Google Forms',
  'Google Drive',
  'Canva',
  'Yoco POS',
  'Upwork',
  'Loom',
  'Apollo',
  'BuiltWith',
  'Snov.io',
  'ChatGPT',
  'OpenAI Codex',
  'Google AI Studio',
  'WebSim',
  'Google Stitch',
  'Github',
  'Vercel',
  'Cloudflare',
  'AntiGravity',
  'VS Code',
];

export const protocolSteps = [
  {
    step: '01',
    title: 'Diagnose the bottleneck',
    description:
      'Look at the real operating friction first: where information gets lost, where handoffs break, and where the work becomes harder to manage than it should be.',
    type: 'helix',
  },
  {
    step: '02',
    title: 'Build the workflow',
    description:
      'Translate the problem into a system with visible steps, usable documentation, and a structure that makes coordination easier for the people doing the work.',
    type: 'scan',
  },
  {
    step: '03',
    title: 'Drive follow-through',
    description:
      'Use the workflow in practice, refine what creates friction, and keep the system tied to actual execution instead of static documentation.',
    type: 'wave',
  },
];
