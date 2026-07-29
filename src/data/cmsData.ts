import { ServicePillar, ProjectItem, ClientProof, FreelancePlatform, WorkflowNode, AIReasoningStep } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'fullstack-mern',
    title: 'Full-Stack MERN & Next.js',
    subtitle: 'SaaS Platforms & Production Web Applications',
    badge: 'Pillar 01',
    description: 'Engineering scalable, multi-tenant web applications and SaaS platforms with React 19, Next.js, Node.js, Express, MongoDB, and PostgreSQL database layers.',
    features: [
      'Multi-tenant workspace isolation & custom domain routing',
      'Stripe subscription engine with tiered usage billing',
      'Role-Based Access Control (RBAC) & JWT/OAuth Security',
      'High-performance REST & GraphQL API architecture',
      'Serverless infrastructure deployment on Vercel & Docker'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'Docker'],
    deliverables: ['Production SaaS App', 'Admin Dashboard', 'Swagger API Docs', 'Stripe Billing System'],
    iconName: 'Globe'
  },
  {
    id: 'ai-automation',
    title: 'Autonomous AI Agents',
    subtitle: 'Custom LLM Workflows & RAG Vector Systems',
    badge: 'Pillar 02',
    description: 'Building intelligent AI agents powered by OpenAI GPT-4o, Claude 3.7, and LangChain that query vector databases, execute API tools, and automate business logic.',
    features: [
      'Retrieval-Augmented Generation (RAG) over corporate documents',
      'Function calling & automated JSON tool execution pipelines',
      'Model Context Protocol (MCP) server & client integration',
      'WhatsApp & Telegram AI support & lead capture bots',
      'Autonomous lead scoring, qualification & email outreach'
    ],
    techStack: ['OpenAI', 'Claude 3.7', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'Supabase Vector', 'MCP'],
    deliverables: ['AI Agent Backend', 'Vector Database Index', 'Messaging Connector', 'Analytics Console'],
    iconName: 'Bot'
  },
  {
    id: 'n8n-workflows',
    title: 'n8n Workflow Systems',
    subtitle: 'Enterprise API & Business Process Automation',
    badge: 'Pillar 03',
    description: 'Deploying self-hosted and cloud n8n automated pipelines connecting CRMs, databases, AI models, payment gateways, and webhooks to eliminate repetitive work.',
    features: [
      'End-to-end n8n workflow design, testing & self-hosted setup',
      'Real-time webhook handlers & multi-app data synchronization',
      'Automated WhatsApp, Telegram & Email notification pipelines',
      'CRM integration with Airtable, Supabase, Hubspot & Salesforce',
      'Resilient retry logic, error alerting & audit logging'
    ],
    techStack: ['n8n', 'Webhooks', 'REST APIs', 'WhatsApp API', 'Telegram API', 'PostgreSQL', 'Airtable', 'Docker'],
    deliverables: ['n8n Blueprint Package', 'Webhook Handlers', 'API Connectors', 'Alerting System'],
    iconName: 'Workflow'
  },
  {
    id: 'api-saas-integrations',
    title: 'API & SaaS Integrations',
    subtitle: 'Custom Webhooks, Payment & CRM Pipelines',
    badge: 'Pillar 04',
    description: 'Designing robust API middleware and SaaS integrations connecting disparate software services into smooth, automated business workflows.',
    features: [
      'Custom RESTful & GraphQL API development and documentation',
      'Third-party SaaS API connectors (Stripe, OpenAI, Twilio, Slack)',
      'High-speed async data pipelines with Node.js & FastAPI',
      'OAuth2 authentication flows & encrypted credential storage',
      'Database synchronization between MongoDB & PostgreSQL'
    ],
    techStack: ['Node.js', 'FastAPI', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Webhooks', 'Docker', 'Vercel'],
    deliverables: ['API Middleware', 'Integration Documentation', 'Webhook Listener', 'Monitoring Setup'],
    iconName: 'Layers'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'zappy-saas',
    slug: 'zappy',
    name: 'Zappy Multi-Tenant SaaS Platform',
    category: 'SaaS',
    tagline: 'Run Your Entire Restaurant from One Dashboard',
    description: 'Zappy (zappy.ind.in) is a scalable multi-tenant SaaS application built for modern restaurant operations. Features intelligent digital ordering, real-time kitchen sync, workspace isolation, and powerful analytics.',
    problem: 'Restaurant owners struggle with fragmented ordering systems, delayed kitchen communication, and manual menu updates.',
    solution: 'Architected a multi-tenant SaaS platform (zappy.ind.in) with QR digital menus, real-time order processing, Stripe billing, and instant multi-workspace switching.',
    role: 'Full-Stack Developer & SaaS Architect',
    status: 'Live Production Platform',
    liveUrl: 'https://zappy.ind.in',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS', 'Vercel'],
    features: [
      'Run Your Entire Restaurant from One Dashboard',
      'Intelligent Digital Ordering & QR Menu System',
      'Real-Time Kitchen Sync & Operations Analytics',
      'Multi-Tenant Workspace & Role-Based Access Control',
      'Stripe Subscription & Metered Billing Integration'
    ],
    isFeatured: true,
    image: '/assets/zappy-hero-preview.png',
    multiTenantFeatures: {
      tenantCount: 4,
      roles: ['Platform SuperAdmin', 'Organization Admin', 'Team Member', 'Client Guest'],
      workspaceIsolation: true,
      tenantSwitchingDemo: true
    }
  },
  {
    id: 'carpediem-tech',
    slug: 'carpediem-tech-innovations',
    name: 'Carpediem Tech Innovations',
    category: 'Website',
    tagline: "Build What's Next. The Skills Behind Tomorrow's Technology.",
    description: "Coimbatore's premier software development and IT services platform (carpediemtechinnovations.in), engineering Full-Stack, AI, Cloud, and Cybersecurity solutions with 500+ projects delivered.",
    problem: 'The client required an enterprise-grade digital platform to showcase software services, institutional collaborations, and official MSME-registered credentials.',
    solution: 'Engineered a high-performance web platform for carpediemtechinnovations.in with modern visual typography, responsive cards, 100/100 Lighthouse speed, and integrated lead funnels.',
    role: 'Lead Full-Stack Web Developer',
    status: 'Completed & Client Verified',
    liveUrl: 'https://carpediemtechinnovations.in/',
    technologies: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO Architecture'],
    features: [
      "Build What's Next — Tomorrow's Technology Platform",
      'Full-Stack, AI, Cloud & Cybersecurity Architecture',
      '500+ Projects Delivered & 100+ Partnered Institutions',
      'MSME Registered & 10+ Years of Innovation',
      'Official Client Appreciation Document & Proof'
    ],
    isFeatured: true,
    image: '/assets/carpediem-hero-preview.png'
  }
];

export const CLIENT_PROOF: ClientProof = {
  id: 'carpediem-appreciation',
  clientName: 'Management Leadership',
  companyName: 'Carpediem Tech Innovations',
  role: 'Client Executive Team',
  projectTitle: 'Full-Stack Website Development & Engineering Delivery',
  appreciationLetterUrl: '/assets/carpediem-appreciation-letter.png',
  summary: 'Official appreciation letter commending Developer Arun Pandian for technical excellence, attention to detail, responsive design execution, and timely delivery of full-stack web solutions.',
  keyDeliverables: [
    'Complete website architecture & full-stack development',
    'Flawless responsive behavior across mobile, tablet & desktop',
    'User-friendly experience with attention to technical detail',
    'Delivered ahead of expected project deadline'
  ],
  quote: 'We appreciate Developer Arun Pandian for his technical expertise, dedication, and high-quality full-stack execution on our company website project.'
};

export const FREELANCE_PLATFORMS: FreelancePlatform[] = [
  {
    name: 'Fiverr',
    profileUrl: 'https://fiverr.com',
    rating: 5.0,
    reviewCount: 48,
    badgeText: 'Top Rated Specialist',
    highlights: ['Fast 1-hour average response time', 'MERN SaaS MVP & AI Agent Gig Packages', '100% On-Time Delivery Record'],
    color: '#1dbf73'
  },
  {
    name: 'Upwork',
    profileUrl: 'https://upwork.com',
    rating: 5.0,
    reviewCount: 36,
    badgeText: 'Top Rated Freelancer',
    highlights: ['100% Job Success Score', 'Expert Vetted in Next.js & AI Automation', 'Over 1,200+ Client Billed Hours'],
    color: '#14a800'
  },
  {
    name: 'Freelancer.com',
    profileUrl: 'https://freelancer.com',
    rating: 5.0,
    reviewCount: 24,
    badgeText: 'Preferred Freelancer',
    highlights: ['Verified Full-Stack & AI Automation Engineer', 'Transparent Milestone Delivery', '5.0-Star Milestone Ratings'],
    color: '#29b2fe'
  }
];

export const N8N_NODES: WorkflowNode[] = [
  { id: '1', label: 'Lead Webhook Trigger', type: 'trigger', description: 'Receives instant lead payload from website intake form or API webhook', icon: 'Zap' },
  { id: '2', label: 'n8n Workflow Engine', type: 'tool', description: 'Parses payload, validates email domain & structures lead requirements', icon: 'Workflow' },
  { id: '3', label: 'AI Agent Qualification', type: 'ai', description: 'OpenAI GPT-4o / Claude evaluates lead intent, budget & generates summary', icon: 'Bot' },
  { id: '4', label: 'CRM & Database Sync', type: 'crm', description: 'Inserts lead record into PostgreSQL / MongoDB database & CRM pipeline', icon: 'Database' },
  { id: '5', label: 'WhatsApp Instant Alert', type: 'action', description: 'Sends structured WhatsApp notification with quick reply action buttons', icon: 'MessageSquare' }
];

export const AI_REASONING_STEPS: AIReasoningStep[] = [
  { step: 1, phase: 'User Input', detail: 'Received lead request: "Need an AI Agent & n8n workflow to capture leads and auto-sync with CRM."', timestamp: '00.01s' },
  { step: 2, phase: 'Reasoning', detail: 'Analyzing requirement -> Dual pipeline: Customer Support AI Bot + n8n PostgreSQL Sync.', timestamp: '00.12s' },
  { step: 3, phase: 'Tool Selection', detail: 'Selecting tools: `vector_search_rag`, `supabase_crm`, `whatsapp_notify_webhook`.', codeSnippet: 'tools: ["mcp_rag", "postgres_crm", "n8n_webhook"]', timestamp: '00.28s' },
  { step: 4, phase: 'API Call', detail: 'Executed LangChain RAG vector query & generated structured scope statement.', timestamp: '00.45s' },
  { step: 5, phase: 'Action Executed', detail: 'Qualified Lead generated -> WhatsApp notification dispatched to Developer Arun Pandian (+91 8248960558).', timestamp: '00.62s' }
];

export const WORK_PROCESS_STEPS = [
  { number: '01', title: 'DISCOVER', desc: 'Understand your product vision, user audience, technical scope, and core business targets.' },
  { number: '02', title: 'ARCHITECT', desc: 'Design system schema, tech stack selection, API contracts, multi-tenant databases, and roadmap.' },
  { number: '03', title: 'DESIGN', desc: 'Craft responsive, high-contrast UI/UX interfaces with double-bezel cards and clean typography.' },
  { number: '04', title: 'DEVELOP', desc: 'Write modular, clean TypeScript code using React 19, Next.js 16, Express, MongoDB, and PostgreSQL.' },
  { number: '05', title: 'INTEGRATE', desc: 'Connect OpenAI/Claude LLMs, vector search RAG, n8n automated workflows, and Stripe billing engines.' },
  { number: '06', title: 'TEST & AUDIT', desc: 'Execute strict security checks, responsive multi-device testing, speed optimization, and load checks.' },
  { number: '07', title: 'DEPLOY', desc: 'Deploy to Vercel/Docker serverless production with zero-downtime CI/CD and SSL configuration.' },
  { number: '08', title: 'SUPPORT', desc: 'Continuous performance monitoring, security updates, workflow optimizations, and feature expansions.' }
];
