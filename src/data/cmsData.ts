import { ServicePillar, ProjectItem, ClientProof, FreelancePlatform, WorkflowNode, AIReasoningStep } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'saas-development',
    title: 'SaaS Development',
    subtitle: 'Multi-Tenant Platforms & AI SaaS',
    badge: 'Pillar 01',
    description: 'Full-stack development of scalable, multi-tenant SaaS platforms with authentication, workspace isolation, role-based access control, and Stripe subscription engine.',
    features: [
      'Multi-tenant workspace isolation & tenant resolution',
      'Stripe subscription & usage-based billing integration',
      'Role-Based Access Control (RBAC) & permissions',
      'Admin dashboards, client portals & analytics UIs',
      'Serverless scalable infrastructure on Vercel/Supabase'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Prisma', 'Stripe', 'Docker'],
    deliverables: ['Production SaaS Platform', 'Admin Dashboard', 'API Documentation', 'Stripe Billing Portal'],
    iconName: 'Layers'
  },
  {
    id: 'website-development',
    title: 'Website Development',
    subtitle: 'High-Performance & Agency-Grade Web Apps',
    badge: 'Pillar 02',
    description: 'Custom, ultra-fast websites and web applications designed with high-end aesthetic visual standards, fluid animations, Neumorphic depth, and conversion optimization.',
    features: [
      'Agency-grade original visual design & responsive layouts',
      '3D Scroll canvas sequences & Lenis physics smooth scroll',
      'Core Web Vitals optimization (100/100 Lighthouse target)',
      'SEO architecture & semantic HTML structure',
      'Micro-animations with Framer Motion & GSAP'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Lenis', 'Shadcn UI'],
    deliverables: ['Responsive Web App', 'Design System Tokens', 'SEO Setup', 'CMS Integration'],
    iconName: 'Globe'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    subtitle: 'Autonomous AI Assistants & RAG Systems',
    badge: 'Pillar 03',
    description: 'Intelligent AI agents that reason, plan, call external APIs, query vector databases, and perform complex automated tasks for business operations.',
    features: [
      'Custom LLM agent workflows with tool & function calling',
      'Retrieval-Augmented Generation (RAG) over private docs',
      'Model Context Protocol (MCP) server & client integration',
      'WhatsApp & Telegram customer support AI bots',
      'Autonomous lead qualification & email outreach agents'
    ],
    techStack: ['OpenAI', 'Claude', 'Gemini', 'LangChain', 'LangGraph', 'Pinecone', 'FastAPI', 'Python', 'MCP'],
    deliverables: ['AI Agent Backend', 'Vector Database Index', 'WhatsApp/API Connector', 'Monitoring Dashboard'],
    iconName: 'Bot'
  },
  {
    id: 'n8n-automation',
    title: 'n8n Automation',
    subtitle: 'Business Process & Workflow Systems',
    badge: 'Pillar 04',
    description: 'Automated digital workflows connecting CRMs, databases, AI models, messaging platforms, and webhooks to eliminate manual repetitive work.',
    features: [
      'End-to-end n8n self-hosted & cloud workflow deployment',
      'Webhook triggers & multi-step data synchronization',
      'AI-powered lead scoring, qualification & routing',
      'Automated WhatsApp, Telegram & Email notification pipelines',
      'Custom API integrations & OAuth authentication'
    ],
    techStack: ['n8n', 'Webhooks', 'REST APIs', 'WhatsApp Business API', 'Telegram API', 'PostgreSQL', 'Airtable'],
    deliverables: ['n8n Workflow Blueprint', 'Webhook Handlers', 'API Bridges', 'Error Alerting System'],
    iconName: 'Workflow'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'zappy-saas',
    slug: 'zappy',
    name: 'Zappy Multi-Tenant SaaS',
    category: 'SaaS',
    tagline: 'One Platform. Multiple Workspaces. Seamless Tenant Isolation.',
    description: 'Zappy (zappy.ind.in) is a scalable multi-tenant SaaS platform engineered for modern organizations. Built with workspace isolation, tenant domain resolution, subscription billing, and role-based administration.',
    problem: 'Businesses struggle to manage multi-client workflows, billing, and strict data isolation in single-tenant legacy software.',
    solution: 'Engineered a modern multi-tenant architecture using Next.js, Supabase, and Stripe with instant workspace provisioning and dynamic tenant branding.',
    role: 'SaaS Architect & Lead Full-Stack Developer',
    status: 'Live Production Platform',
    liveUrl: 'https://zappy.ind.in',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS', 'Vercel'],
    features: [
      'Instant Tenant Isolation & Domain Resolver',
      'Role-Based Access Control (Admin, Manager, Member, Guest)',
      'Multi-Workspace Switcher with custom branding',
      'Stripe Subscription & Tiered Usage Billing',
      'Real-time Analytics Dashboard & Audit Logging'
    ],
    isFeatured: true,
    image: '/assets/arun-studio-dark.png',
    multiTenantFeatures: {
      tenantCount: 3,
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
    tagline: 'High-Performance Corporate Web Platform',
    description: 'Designed and developed a premium, responsive corporate web platform for Carpediem Tech Innovations, featuring fluid animations, clear value proposition hierarchy, and client appreciation recognition.',
    problem: 'The client needed a modern, highly trustworthy digital web presence to showcase technology solutions and capture enterprise inquiries.',
    solution: 'Delivered an agency-grade web application featuring modern visual typography, Neumorphic card layouts, fast page loads, and seamless contact conversion funnels.',
    role: 'Website Developer & Full-Stack Contributor',
    status: 'Completed & Client Verified',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'],
    features: [
      'Custom Corporate Visual Identity & Design System',
      'Responsive Cross-Device Layouts',
      'High-Speed Core Web Vitals Performance',
      'Interactive Project Showcase & Service Modules',
      'Client Appreciation Letter Proof'
    ],
    isFeatured: true,
    image: '/assets/hero-design-ref.png'
  }
];

export const CLIENT_PROOF: ClientProof = {
  id: 'carpediem-appreciation',
  clientName: 'Management Team',
  companyName: 'Carpediem Tech Innovations',
  role: 'Client Leadership',
  projectTitle: 'Company Website Development & Solution Delivery',
  appreciationLetterUrl: '/assets/carpediem-appreciation-letter.png',
  summary: 'Official letter of appreciation commending Arun Pandian for exceptional technical expertise, dedication to detail, responsive design execution, and timely delivery of full-stack web solutions.',
  keyDeliverables: [
    'Complete website design and full-stack development',
    'Responsive across all device viewports',
    'User-friendly experience with attention to technical detail',
    'Delivered within expected project timeline'
  ],
  quote: 'We appreciate Arun Pandian for his technical expertise, dedication, and high-quality full-stack execution on our company website project.'
};

export const FREELANCE_PLATFORMS: FreelancePlatform[] = [
  {
    name: 'Fiverr',
    profileUrl: 'https://fiverr.com',
    rating: 5.0,
    reviewCount: 48,
    badgeText: 'Top Rated Specialist',
    highlights: ['Fast 1-hour response time', 'SaaS MVP & AI Agent Gig Packages', '100% On-Time Delivery'],
    color: '#1dbf73'
  },
  {
    name: 'Upwork',
    profileUrl: 'https://upwork.com',
    rating: 5.0,
    reviewCount: 36,
    badgeText: 'Top Rated Freelancer',
    highlights: ['100% Job Success Score', 'Expert Vetted in Next.js & AI Automation', 'Over 1,200+ Client Hours'],
    color: '#14a800'
  },
  {
    name: 'Freelancer.com',
    profileUrl: 'https://freelancer.com',
    rating: 5.0,
    reviewCount: 24,
    badgeText: 'Preferred Freelancer',
    highlights: ['Verified Full-Stack & AI Specialist', 'Milestone-Based Transparent Delivery', '5-Star Milestone Reviews'],
    color: '#29b2fe'
  }
];

export const N8N_NODES: WorkflowNode[] = [
  { id: '1', label: 'New Lead Webhook', type: 'trigger', description: 'Receives instant lead webhook payload from website intake form', icon: 'Zap' },
  { id: '2', label: 'n8n Workflow Engine', type: 'tool', description: 'Parses payload, validates email & structures project requirements', icon: 'Workflow' },
  { id: '3', label: 'AI Agent Qualification', type: 'ai', description: 'OpenAI / Claude evaluates lead intent, budget fit & generates summary', icon: 'Bot' },
  { id: '4', label: 'CRM & Database Sync', type: 'crm', description: 'Inserts lead record into Supabase PostgreSQL database & CRM pipeline', icon: 'Database' },
  { id: '5', label: 'WhatsApp Instant Alert', type: 'action', description: 'Sends structured WhatsApp notification with quick reply actions to Arun', icon: 'MessageSquare' }
];

export const AI_REASONING_STEPS: AIReasoningStep[] = [
  { step: 1, phase: 'User Input', detail: 'Received lead request: "Need an AI Agent to automate customer support and sync leads with our CRM."', timestamp: '00.01s' },
  { step: 2, phase: 'Reasoning', detail: 'Analyzing request intent -> Identified dual goal: Customer Support AI Bot + n8n CRM Data Sync.', timestamp: '00.12s' },
  { step: 3, phase: 'Tool Selection', detail: 'Selecting tools: `search_knowledge_base`, `calculate_quote`, `dispatch_whatsapp_alert`.', codeSnippet: 'tools: ["mcp_rag", "supabase_crm", "n8n_webhook"]', timestamp: '00.28s' },
  { step: 4, phase: 'API Call', detail: 'Executed LangGraph RAG query & generated qualified scope summary.', timestamp: '00.45s' },
  { step: 5, phase: 'Action Executed', detail: 'Qualified Lead generated -> WhatsApp notification dispatched to +91 8248960558.', timestamp: '00.62s' }
];

export const WORK_PROCESS_STEPS = [
  { number: '01', title: 'DISCOVER', desc: 'Deep dive into your product goals, target audience, technical requirements, and business logic.' },
  { number: '02', title: 'PLAN', desc: 'Architect the system design, tech stack selection, API contracts, multi-tenant schemas, and milestone roadmap.' },
  { number: '03', title: 'DESIGN', desc: 'Craft high-end, responsive UI/UX experiences, neumorphic card depth, design tokens, and smooth motion.' },
  { number: '04', title: 'BUILD', desc: 'Develop clean, modular TypeScript code using Next.js/React, FastAPI, and robust database layers.' },
  { number: '05', title: 'INTEGRATE', desc: 'Connect OpenAI/Claude LLMs, RAG vector search, n8n automation workflows, and Stripe payment engines.' },
  { number: '06', title: 'TEST', desc: 'Perform strict security audits, cross-device responsive checks, Lighthouse speed testing, and load tests.' },
  { number: '07', title: 'DEPLOY', desc: 'Launch to Vercel/Docker serverless production with zero-downtime CI/CD and SSL configuration.' },
  { number: '08', title: 'SUPPORT', desc: 'Continuous monitoring, performance tuning, new feature additions, and ongoing workflow updates.' }
];
