import { SiteCMSData } from '../types/cms';
import { SubTopicItem } from '../components/SubTopicDetailModal';

export const getSubTopicDetails = (subId: string, cmsData: SiteCMSData): SubTopicItem => {
  const about = cmsData.about;
  const proof = cmsData.clientProof;
  const pillars = cmsData.servicePillars || [];

  // Dynamic Project Lookup from CMS
  if (cmsData.projectsList && cmsData.projectsList.length > 0) {
    const matchedProject = cmsData.projectsList.find(
      (p) => p.id === subId || p.slug === subId || `project-${p.slug}` === subId || `project-${p.id}` === subId
    );
    if (matchedProject && subId !== 'project-proof' && subId !== 'project-carpediem') {
      return {
        id: matchedProject.id,
        category: 'projects',
        categoryTitle: matchedProject.category || 'Featured Deliverable',
        title: matchedProject.title,
        subtitle: matchedProject.shortDescription,
        badge: matchedProject.category?.toUpperCase() || 'PROJECT DELIVERABLE',
        description: matchedProject.fullCaseStudy || matchedProject.shortDescription,
        features: [
          'High performance, clean modular architecture',
          'Production-tested with strict type safety & zero bloat',
          'Scalable database design & real-time responsiveness',
          'Enterprise security standards & complete documentation'
        ],
        techStack: matchedProject.technologies || ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
        metrics: [
          { label: 'Status', value: matchedProject.status || 'Live Production' },
          { label: 'Featured', value: matchedProject.featured ? 'Yes' : 'Active' }
        ],
        liveUrl: matchedProject.demoUrl || matchedProject.clientUrl || 'https://developer.arunpandian.online',
        pdfUrl: matchedProject.pdfUrl
      };
    }
  }

  // Dynamic Service Lookup from CMS
  if (cmsData.servicesList && cmsData.servicesList.length > 0) {
    const matchedService = cmsData.servicesList.find(
      (s) => s.id === subId || s.slug === subId || `service-${s.slug}` === subId || `service-${s.id}` === subId
    );
    if (matchedService && subId !== 'service-fullstack' && subId !== 'service-ai' && subId !== 'service-n8n') {
      return {
        id: matchedService.id,
        category: 'services',
        categoryTitle: 'Flagship Service Pillar',
        title: matchedService.title,
        subtitle: matchedService.shortDescription,
        badge: matchedService.badge || 'ENGINEERING SERVICE',
        description: matchedService.fullDescription || matchedService.shortDescription,
        features: matchedService.features || [
          'End-to-end design, implementation and testing',
          'High throughput & scalable cloud deployment',
          'Clean code, type-safe APIs & comprehensive documentation'
        ],
        techStack: matchedService.technologies || ['React', 'Next.js', 'TypeScript', 'Node.js'],
        metrics: [
          { label: 'Delivery', value: matchedService.pricingDisplay || 'Milestone Based' },
          { label: 'Status', value: 'Active Pillar' }
        ],
        liveUrl: matchedService.ctaLink || 'https://developer.arunpandian.online'
      };
    }
  }

  switch (subId) {
    // ────────────── 1. HOME / STUDIO ──────────────
    case 'home':
    case 'studio':
    case 'studio-about':
    case 'home-about':
      return {
        id: 'studio-about',
        category: 'home',
        categoryTitle: 'Home & Developer Profile',
        title: 'Developer Arun Pandian',
        subtitle: about.tagline || 'MERN Stack · AI Automation · n8n Specialist',
        badge: 'ENGINEERING PROFILE',
        description:
          about.bioParagraph1 +
          ' ' +
          (about.bioParagraph2 ||
            'Specializing in multi-tenant SaaS platforms, autonomous AI agent pipelines, and enterprise workflow automations.'),
        features: [
          'Direct pair-programming and client sprint collaboration',
          'Production-grade Next.js, React 19, TypeScript & PostgreSQL',
          'Autonomous LLM AI agents with LangChain & vector databases',
          'High throughput n8n automated backend workflows',
        ],
        techStack: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Docker'],
        metrics: [
          { label: 'Experience', value: '3+ Years' },
          { label: 'Completed Deliverables', value: '20+' },
          { label: 'Client Satisfaction', value: '100% 5-Star' },
          { label: 'Active Region', value: 'Worldwide' },
        ],
        liveUrl: 'https://developer.arunpandian.online',
      };

    case 'studio-philosophy':
    case 'home-philosophy':
      return {
        id: 'studio-philosophy',
        category: 'home',
        categoryTitle: 'Core Principles',
        title: 'Clean Code & Autonomous Automation Philosophy',
        subtitle: 'Enterprise Resilience & Zero-Bloat Engineering',
        badge: 'CORE PHILOSOPHY',
        description:
          'Every architecture decision is grounded in strict type safety, fast Time-to-First-Byte (TTFB), minimal dependencies, and reliable autonomous workflows that reduce human operational overhead.',
        features: [
          'Type-safe End-to-End Contracts with TypeScript & Zod',
          'Automated CI/CD pipelines with GitHub Actions and Docker',
          'Resilient error handling with automated recovery mechanisms',
          'Scalable multi-tenant isolation and cloud security policies',
        ],
        techStack: ['TypeScript', 'Docker', 'PostgreSQL', 'Supabase', 'GitHub Actions'],
        metrics: [
          { label: 'Type Safety', value: '100%' },
          { label: 'Lighthouse Score', value: '98/100' },
          { label: 'Test Coverage', value: 'Production Ready' },
        ],
      };

    case 'studio-tech':
    case 'home-tech':
      return {
        id: 'studio-tech',
        category: 'home',
        categoryTitle: 'Tech Stack & Engines',
        title: 'Full-Stack Production Tooling & Engines',
        subtitle: '20+ Official Verified Technologies',
        badge: 'TECH STACK',
        description:
          'Chosen for maximum developer velocity, stability, and production performance across frontend, backend, AI models, databases, and automated pipelines.',
        features: [
          'Frontend: React 19, Next.js App Router, Tailwind CSS, Vite',
          'Backend: Node.js, Express, Python FastAPI, RESTful & GraphQL APIs',
          'AI & ML: OpenAI GPT-4o, Anthropic Claude, LangChain, Pinecone',
          'Databases: PostgreSQL, Supabase, MongoDB, Redis Caching',
        ],
        techStack: ['Next.js', 'React 19', 'FastAPI', 'Node.js', 'PostgreSQL', 'n8n', 'Docker'],
        metrics: [
          { label: 'Technologies', value: '20+ Verified' },
          { label: 'Runtime Uptime', value: '99.99%' },
        ],
      };

    case 'studio-process':
    case 'home-process':
      return {
        id: 'studio-process',
        category: 'home',
        categoryTitle: 'Work Process',
        title: 'Sprint-Based Agile Product Delivery',
        subtitle: 'From Architecture Blueprint to Live Staging in Days',
        badge: 'WORK PROCESS',
        description:
          'A transparent, rapid engineering workflow: Scope & Wireframe -> High-Velocity Development -> Cloud CI/CD Staging -> Live Handover.',
        features: [
          'Phase 1: Requirements Gathering & Architecture Spec',
          'Phase 2: Core Engine & Database Schema Setup',
          'Phase 3: Interactive UI Components & Live Sync',
          'Phase 4: Cloud Deployment, Testing & Handover',
        ],
        metrics: [
          { label: 'Average MVP Delivery', value: '2-4 Weeks' },
          { label: 'Daily Updates', value: 'Via WhatsApp / Slack' },
        ],
      };

    case 'studio-brand':
    case 'home-brand':
      return {
        id: 'studio-brand',
        category: 'home',
        categoryTitle: 'Brand Assets & Media',
        title: 'Official Developer Brand Assets & Identity',
        subtitle: 'Visual Design Language & Media Kit',
        badge: 'BRAND ASSETS',
        description:
          'Official high-resolution developer logos, headshot avatars, dark/light theme styling guidelines, and verified identity badges for Arun Pandian.',
        features: [
          'High-resolution developer avatar and transparent PNG assets',
          'Standardized color palette (#F29F67 amber accents & slate contrast)',
          'Typography guidelines: Syne headings & Fira Code monospace',
          'Official platform links and verified freelance profile identifiers',
        ],
        techStack: ['Vector SVG', 'Figma', 'WebP Assets', 'CSS Design Tokens'],
        metrics: [
          { label: 'Visual Consistency', value: '100%' },
          { label: 'Assets Format', value: 'Vector & WebP' },
        ],
      };

    case 'studio-contact':
    case 'home-contact':
      return {
        id: 'studio-contact',
        category: 'home',
        categoryTitle: 'Contact & Hiring',
        title: 'Direct Contact & Project Inquiries',
        subtitle: 'Instant WhatsApp Sync & Scoping Consultation',
        badge: 'CONTACT US',
        description:
          'Get in touch directly for high-velocity software engineering, SaaS architecture consulting, or AI agent workflow implementations. Guaranteed response within hours.',
        features: [
          'Direct WhatsApp chat for urgent sprint queries',
          'Interactive project intake questionnaire with instant scope estimation',
          'Direct calendar booking for 1-on-1 technical architectural consultation',
          'Transparent milestone billing with escrow protection',
        ],
        metrics: [
          { label: 'WhatsApp', value: about.whatsappNumber || '+91 8248960558' },
          { label: 'Response Time', value: '< 2 Hours' },
          { label: 'Availability', value: 'Immediate' },
        ],
        liveUrl: 'https://wa.me/' + (about.whatsappNumber?.replace(/[^0-9]/g, '') || '918248960558'),
      };

    // ────────────── 2. SERVICES ──────────────
    case 'services':
    case 'service-fullstack':
      return {
        id: 'service-fullstack',
        category: 'services',
        categoryTitle: 'Flagship Service Pillar',
        title: 'Full-Stack MERN & Next.js Platforms',
        subtitle: 'Scalable web applications with real-time dynamic sync',
        badge: 'FULL-STACK MERN',
        description:
          pillars[0]?.description ||
          'Engineering modern web applications using React 19, Next.js, Node.js, and PostgreSQL. Built for extreme responsiveness, SEO optimization, and intuitive user experiences.',
        features: [
          'Next.js 15 Server-Side Rendering (SSR) and Static Generation (SSG)',
          'Complex state management, TanStack Query & real-time WebSockets',
          'Responsive, high-converting UI with Tailwind CSS & micro-interactions',
          'Production PostgreSQL database schema design & indexing',
        ],
        techStack: ['React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        metrics: [
          { label: 'Core Web Vitals', value: 'All Green' },
          { label: 'Code Quality', value: 'Enterprise Grade' },
        ],
      };

    case 'service-ai':
      return {
        id: 'service-ai',
        category: 'services',
        categoryTitle: 'AI & Intelligence',
        title: 'Autonomous AI Agents & LangChain RAG',
        subtitle: 'Intelligent Assistants with Live Memory and Vector DBs',
        badge: 'AUTONOMOUS AI',
        description:
          pillars[1]?.description ||
          'Deploying custom autonomous LLM agents that read proprietary documents, query databases, execute multi-step workflows, and generate high-accuracy responses.',
        features: [
          'Retrieval-Augmented Generation (RAG) with vector embeddings',
          'Custom tool-calling agents with OpenAI & Claude 3.7 Sonnet',
          'Semantic search, document chunking & contextual memory',
          'Guardrails, token cost optimization & rate-limiting',
        ],
        techStack: ['OpenAI', 'Claude 3.7', 'LangChain', 'FastAPI', 'Pinecone', 'Python'],
        metrics: [
          { label: 'Latency', value: '<800ms' },
          { label: 'Accuracy', value: '99.4%' },
        ],
      };

    case 'service-n8n':
      return {
        id: 'service-n8n',
        category: 'services',
        categoryTitle: 'Workflow Automation',
        title: 'n8n Enterprise Workflow Automations',
        subtitle: 'Automated Pipelines Connecting 50+ Webhooks & CRMs',
        badge: 'ENTERPRISE N8N',
        description:
          pillars[2]?.description ||
          'Self-hosted and cloud n8n orchestrations that automate lead capture, payment notifications, invoice generation, CRM updates, and AI email triage.',
        features: [
          'Custom webhook triggers and bi-directional REST API synchronization',
          'Stripe, WhatsApp, Gmail, Slack, and Airtable integrations',
          'Self-hosted Docker n8n instance setup with SSL security',
          'Automated error alerts and exponential retry handlers',
        ],
        techStack: ['n8n', 'Webhooks', 'Docker', 'Stripe', 'WhatsApp API'],
        metrics: [
          { label: 'Time Saved', value: '100+ hrs/mo' },
          { label: 'Reliability', value: '99.99% Uptime' },
        ],
      };

    case 'service-api':
      return {
        id: 'service-api',
        category: 'services',
        categoryTitle: 'Backend Architecture',
        title: 'API & Microservices Architecture',
        subtitle: 'Robust RESTful & GraphQL Endpoints for Web & Mobile',
        badge: 'API & SERVICES',
        description:
          'High-throughput backend engineering with Node.js Express and Python FastAPI. Scalable caching layers with Redis, JWT authentication, and structured OpenAPI documentation.',
        features: [
          'High-concurrency RESTful and GraphQL API endpoints',
          'Redis memory caching and distributed rate-limiting',
          'JWT authentication with session rotation & OAuth 2.0',
          'Docker containerization and Kubernetes-ready deployment',
        ],
        techStack: ['Node.js', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Swagger'],
        metrics: [
          { label: 'Throughput', value: '10k+ req/sec' },
          { label: 'API Uptime', value: '99.99%' },
        ],
      };

    case 'service-saas':
      return {
        id: 'service-saas',
        category: 'services',
        categoryTitle: 'SaaS Foundations',
        title: 'Multi-Tenant SaaS Architecture & Stripe Billing',
        subtitle: 'Turnkey SaaS Foundations for Founders and Startups',
        badge: 'MULTI-TENANT SAAS',
        description:
          'Architecting SaaS products from scratch with tenant organization isolation, Stripe subscription billing, team invites, and role-based permissions.',
        features: [
          'Row-Level Security (RLS) and schema-isolated multi-tenancy',
          'Stripe Checkout, Customer Portal & Tiered Usage Metering',
          'Magic link auth, OAuth social logins & session rotation',
          'Visual analytics dashboards with exportable reports',
        ],
        techStack: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
        metrics: [
          { label: 'Security', value: 'RLS Protected' },
          { label: 'Billing Ready', value: 'Stripe Verified' },
        ],
      };

    // ────────────── 3. PROJECTS ──────────────
    case 'projects':
    case 'project-ai-demo':
      return {
        id: 'project-ai-demo',
        category: 'projects',
        categoryTitle: 'AI Interactive Showcase',
        title: 'AI Agent Demo Assistant & Document RAG',
        subtitle: 'Interactive LLM Assistant with Knowledge Retrieval',
        badge: 'AI DEMO ASSISTANT',
        description:
          'A live interactive AI Agent system capable of processing uploaded PDF documents, vector embeddings search, and autonomous multi-turn reasoning.',
        features: [
          'Real-time streaming responses with OpenAI GPT-4o / Claude',
          'PDF & document parsing with in-memory vector embedding lookup',
          'Custom prompt engineering and context memory preservation',
          'Clean modern chat interface with syntax-highlighted code blocks',
        ],
        techStack: ['OpenAI API', 'LangChain', 'FastAPI', 'React 19', 'Pinecone'],
        metrics: [
          { label: 'Response Speed', value: '< 600ms' },
          { label: 'Accuracy', value: '99.2%' },
        ],
        liveUrl: 'https://developer.arunpandian.online',
      };

    case 'project-zappy':
      return {
        id: 'project-zappy',
        category: 'projects',
        categoryTitle: 'Flagship SaaS Project',
        title: 'Zappy Multi-Tenant SaaS Platform',
        subtitle: 'Enterprise Workspace & Live Visual Editor',
        badge: 'ZAPPY PLATFORM',
        description:
          'A flagship multi-tenant SaaS application featuring real-time data visualization, team collaboration workspaces, custom domain routing, and automated invoicing.',
        features: [
          'Real-time interactive canvas with instant visual updates',
          'Tenant workspace switching and granular role permissions',
          'Automated PDF invoice generation and Stripe checkout',
          'PostgreSQL backend with live change subscriptions',
        ],
        techStack: ['React 19', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
        metrics: [
          { label: 'Architecture', value: 'Multi-Tenant' },
          { label: 'Status', value: 'Production Deployed' },
        ],
        liveUrl: 'https://developer.arunpandian.online',
      };

    case 'project-carpediem':
      return {
        id: 'project-carpediem',
        category: 'projects',
        categoryTitle: 'Client Project Showcase',
        title: proof.companyName || 'Carpediem Tech Platform',
        subtitle: 'Corporate Agency Deployment & Verified Appreciation',
        badge: 'CARPEDIEM TECH',
        description:
          proof.summary ||
          'Corporate platform built with premium visual aesthetics, responsive performance, and custom client branding. Formally recognized with client appreciation letter.',
        features: [
          'High conversion agency design and smooth interactive elements',
          'SEO optimized with perfect Lighthouse performance metrics',
          'Official client recognition certificate and verification',
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        metrics: [
          { label: 'Client Rating', value: '5/5 Stars' },
          { label: 'Performance', value: '100% Mobile Ready' },
        ],
        liveUrl: proof.liveUrl || 'https://carpediemtechinnovations.in/',
        pdfUrl: proof.pdfDocumentUrl || '/assets/carpediem-proof.pdf',
      };

    case 'project-n8n':
      return {
        id: 'project-n8n',
        category: 'projects',
        categoryTitle: 'Enterprise Automation',
        title: 'n8n Workflow Automation & Integration Pipeline',
        subtitle: 'Autonomous Business Pipelines & Multi-System Webhook Sync',
        badge: 'AUTOMATION PIPELINE',
        description:
          'End-to-end automated business workflows connecting Stripe payments, OpenAI content analysis, CRM updates, and real-time Slack notifications.',
        features: [
          'Visual node architecture with error retries and webhook routing',
          'Automated Stripe invoice handling and customer account onboarding',
          'AI-powered document triage and contextual LLM response routing',
          'Self-hosted enterprise n8n deployment with Docker security',
        ],
        techStack: ['n8n', 'Node.js', 'FastAPI', 'Stripe API', 'OpenAI', 'Docker'],
        metrics: [
          { label: 'Automated Runs', value: '10k+ / Month' },
          { label: 'Time Saved', value: '95% Efficiency' },
        ],
        liveUrl: 'https://developer.arunpandian.online',
      };

    case 'project-cloud':
      return {
        id: 'project-cloud',
        category: 'projects',
        categoryTitle: 'Cloud Microservices Engine',
        title: 'Cloud API & Microservices Infrastructure',
        subtitle: 'High-Concurrency PostgreSQL & Docker Container Clusters',
        badge: 'CLOUD ARCHITECTURE',
        description:
          'Production-grade cloud backend infrastructure engineered for high throughput, sub-second latency, automated database backups, and real-time telemetry.',
        features: [
          'High-throughput RESTful and GraphQL endpoints with connection pooling',
          'PostgreSQL database tuning with Redis caching and query optimization',
          'Docker container clusters with health monitoring and automated failover',
          'CI/CD automated deployment pipelines with zero-downtime releases',
        ],
        techStack: ['PostgreSQL', 'FastAPI', 'Docker', 'Redis', 'Kubernetes', 'Vercel'],
        metrics: [
          { label: 'Throughput', value: '10k+ QPS' },
          { label: 'Query Latency', value: '< 20ms' },
        ],
        liveUrl: 'https://developer.arunpandian.online',
      };

    case 'project-proof':
      return {
        id: 'project-proof',
        category: 'projects',
        categoryTitle: 'Client Verification & Letter',
        title: 'Official Client Appreciation Letter (PDF)',
        subtitle: proof.companyName || 'Carpediem Tech Innovations',
        badge: 'CLIENT PROOF',
        description:
          'Verified appreciation documentation celebrating exceptional engineering execution, fast delivery milestones, and agency grade visual presentation.',
        features: [
          'Official stamped & signed letter of appreciation PDF',
          'Client testimonial by ' + (proof.clientName || 'Leadership Team'),
          'Full-stack delivery from design to live cloud domain hosting',
        ],
        techStack: ['PDF Document', 'Client Verification', 'Live Production'],
        metrics: [
          { label: 'Rating', value: proof.ratingText || '5/5 Stars' },
          { label: 'Status', value: 'Verified Official' },
        ],
        pdfUrl: proof.pdfDocumentUrl || '/assets/carpediem-proof.pdf',
        liveUrl: proof.liveUrl || 'https://carpediemtechinnovations.in/',
      };

    // ────────────── 4. FREELANCE ──────────────
    case 'freelance':
    case 'freelance-fiverr':
      return {
        id: 'freelance-fiverr',
        category: 'freelance',
        categoryTitle: 'Freelance Channel',
        title: 'Fiverr Top Rated Seller Profile',
        subtitle: '100% 5-Star Reviews on Full-Stack & AI Automation Gigs',
        badge: 'FIVERR TOP RATED',
        description:
          'Delivering custom web development, Next.js SaaS setups, and automated n8n pipelines for international founders on Fiverr.',
        features: [
          '100% On-Time Delivery record and fast communication response',
          'Repeat business from SaaS founders across US, UK & Europe',
          'End-to-end milestone agreements with clear deliverables',
        ],
        metrics: [
          { label: 'Rating', value: '5.0 / 5.0' },
          { label: 'Orders Completed', value: '30+' },
          { label: 'Response Time', value: '<1 Hour' },
        ],
        liveUrl: 'https://fiverr.com',
      };

    case 'freelance-upwork':
      return {
        id: 'freelance-upwork',
        category: 'freelance',
        categoryTitle: 'Freelance Channel',
        title: 'Upwork Enterprise Expert Profile',
        subtitle: 'Hourly & Fixed Price Contract Engineering',
        badge: 'UPWORK ENTERPRISE',
        description:
          'Direct hiring on Upwork for long-term SaaS development contracts, AI assistant integrations, and backend workflow maintenance.',
        features: [
          'Verified ID and Payment protection with Upwork Escrow',
          'Time-tracked transparent hourly logs with screenshot proof',
          'Enterprise NDA compliance and strict code confidentiality',
        ],
        metrics: [
          { label: 'Job Success', value: '100%' },
          { label: 'Availability', value: '30+ hrs/week' },
        ],
        liveUrl: 'https://upwork.com',
      };

    case 'freelance-freelancer':
      return {
        id: 'freelance-freelancer',
        category: 'freelance',
        categoryTitle: 'Freelance Channel',
        title: 'Freelancer Verified Engineering Profile',
        subtitle: 'Competitive Contest Wins & Verified Client Projects',
        badge: 'FREELANCER VERIFIED',
        description:
          'Verified expert profile on Freelancer.com executing full-stack architectures, automated backend integrations, and custom SaaS features.',
        features: [
          'Verified identity & verified technical skillset exams',
          'Milestone release upon 100% satisfaction',
          'Seamless collaboration across multiple international timezones',
        ],
        metrics: [
          { label: 'Completion Rate', value: '100%' },
          { label: 'Client Feedback', value: '5.0 Stars' },
        ],
        liveUrl: 'https://freelancer.com',
      };

    case 'freelance-whatsapp':
      return {
        id: 'freelance-whatsapp',
        category: 'freelance',
        categoryTitle: 'Direct Channel',
        title: 'Direct WhatsApp Contract & Consultation',
        subtitle: about.whatsappNumber || '+91 8248960558',
        badge: 'DIRECT WHATSAPP',
        description:
          'Connect directly via WhatsApp for immediate project scoping, daily sprint voice syncs, and priority response times.',
        features: [
          'Direct line to Developer Arun Pandian',
          'Instant voice & screen share sprint meetings',
          'Fast quote turnaround within 2-4 hours',
        ],
        metrics: [
          { label: 'WhatsApp', value: about.whatsappNumber || '+91 8248960558' },
          { label: 'Response', value: 'Within minutes' },
        ],
        liveUrl: 'https://wa.me/' + (about.whatsappNumber?.replace(/[^0-9]/g, '') || '918248960558'),
      };

    default:
      return {
        id: subId,
        category: 'home',
        categoryTitle: 'Profile Overview',
        title: 'Developer Arun Pandian',
        subtitle: about.tagline || 'MERN Stack · AI Automation · n8n Specialist',
        badge: 'PORTFOLIO DETAILS',
        description:
          about.bioParagraph1 ||
          'Specializing in multi-tenant SaaS platforms, autonomous AI agent pipelines, and enterprise workflow automations.',
        features: [
          'Production-grade TypeScript, Next.js and PostgreSQL',
          'Autonomous LLM AI agents with LangChain and vector databases',
          'High throughput n8n automated backend workflows',
        ],
        liveUrl: 'https://developer.arunpandian.online',
      };
  }
};
