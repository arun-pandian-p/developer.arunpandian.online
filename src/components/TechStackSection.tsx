import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  JavascriptLogo,
  NodejsLogo,
  ExpressLogo,
  MongodbLogo,
  PostgresqlLogo,
  TailwindLogo,
  DockerLogo,
  GithubLogo,
  GithubActionsLogo,
  OpenAILogo,
  ClaudeLogo,
  N8nLogo,
  VercelLogo,
  AwsLogo,
  FigmaLogo,
  SupabaseLogo,
  FastapiLogo,
  PythonLogo,
  StripeLogo,
  PrismaLogo
} from './common/BrandLogos';

interface TechTool {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & Automation' | 'DevOps & Tools';
  description: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  icon: React.ReactNode;
}

const TECH_TOOLS: TechTool[] = [
  {
    name: 'React 19',
    category: 'Frontend',
    description: 'Component architecture, Hooks, Context, Server Components',
    badge: 'UI Library',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-700',
    icon: <ReactLogo className="w-9 h-9" />
  },
  {
    name: 'Next.js 16',
    category: 'Frontend',
    description: 'App Router, SSR, SSG, Server Actions & API Routes',
    badge: 'Full-Stack Framework',
    badgeBg: 'bg-zinc-100',
    badgeText: 'text-zinc-800',
    icon: <NextjsLogo className="w-9 h-9" />
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Strict type safety, Generics, Interfaces, Enterprise Codebase',
    badge: 'Language',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    icon: <TypescriptLogo className="w-9 h-9" />
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    description: 'ES6+ Async/Await, Web APIs, Dynamic DOM manipulation',
    badge: 'Language',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    icon: <JavascriptLogo className="w-9 h-9" />
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first CSS, Responsive Layouts, Custom Design Tokens',
    badge: 'Styling',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    icon: <TailwindLogo className="w-9 h-9" />
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'RESTful APIs, Microservices, Event Loop Performance',
    badge: 'Runtime',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    icon: <NodejsLogo className="w-9 h-9" />
  },
  {
    name: 'Express.js',
    category: 'Backend',
    description: 'Lightweight web server, Middleware pipeline, JWT Auth',
    badge: 'Framework',
    badgeBg: 'bg-zinc-100',
    badgeText: 'text-zinc-700',
    icon: <ExpressLogo className="w-9 h-9" />
  },
  {
    name: 'Python',
    category: 'Backend',
    description: 'Data processing, Automation, Machine Learning & Scripts',
    badge: 'Language',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    icon: <PythonLogo className="w-9 h-9" />
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    description: 'High-speed Async AI Backends, Pydantic, OpenAPI schemas',
    badge: 'Framework',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    icon: <FastapiLogo className="w-9 h-9" />
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    description: 'NoSQL Document Store, Aggregation Pipelines, Mongoose ORM',
    badge: 'Database',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    icon: <MongodbLogo className="w-9 h-9" />
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    description: 'Relational DB, ACIS Compliance, Complex SQL & Indexing',
    badge: 'Database',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    icon: <PostgresqlLogo className="w-9 h-9" />
  },
  {
    name: 'Supabase',
    category: 'Backend',
    description: 'PostgreSQL BaaS, Row Level Security, Real-time Webhooks & RAG',
    badge: 'BaaS & DB',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    icon: <SupabaseLogo className="w-9 h-9" />
  },
  {
    name: 'Prisma ORM',
    category: 'Backend',
    description: 'Type-safe Database Client, Schema Migrations, Multi-tenant queries',
    badge: 'ORM Tool',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-700',
    icon: <PrismaLogo className="w-9 h-9" />
  },
  {
    name: 'Stripe',
    category: 'Backend',
    description: 'Multi-tenant subscription billing, Checkout sessions, Webhook sync',
    badge: 'Billing Engine',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    icon: <StripeLogo className="w-9 h-9" />
  },
  {
    name: 'OpenAI',
    category: 'AI & Automation',
    description: 'GPT-4o Function calling, Tool execution, JSON Structured Outputs',
    badge: 'LLM Engine',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    icon: <OpenAILogo className="w-9 h-9" />
  },
  {
    name: 'Claude AI (Anthropic)',
    category: 'AI & Automation',
    description: 'Complex reasoning, Long context synthesis, AI Agent logic',
    badge: 'AI Reasoning',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    icon: <ClaudeLogo className="w-9 h-9" />
  },
  {
    name: 'n8n',
    category: 'AI & Automation',
    description: 'Self-hosted automation, Webhooks, CRM Sync, WhatsApp Bots',
    badge: 'Automation',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    icon: <N8nLogo className="w-9 h-9" />
  },
  {
    name: 'Docker',
    category: 'DevOps & Tools',
    description: 'Containerization, Multi-stage builds, Docker Compose stack',
    badge: 'Containers',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    icon: <DockerLogo className="w-9 h-9" />
  },
  {
    name: 'GitHub',
    category: 'DevOps & Tools',
    description: 'Git workflows, Code reviews, Repository management & Security',
    badge: 'Version Control',
    badgeBg: 'bg-zinc-100',
    badgeText: 'text-zinc-800',
    icon: <GithubLogo className="w-9 h-9" />
  },
  {
    name: 'GitHub Actions',
    category: 'DevOps & Tools',
    description: 'Automated CI/CD pipelines, Automated testing & Cloud releases',
    badge: 'CI/CD Pipeline',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    icon: <GithubActionsLogo className="w-9 h-9" />
  },
  {
    name: 'Vercel',
    category: 'DevOps & Tools',
    description: 'Zero-config Next.js deployments, Edge Functions, Analytics',
    badge: 'Cloud Platform',
    badgeBg: 'bg-zinc-100',
    badgeText: 'text-zinc-900',
    icon: <VercelLogo className="w-9 h-9" />
  },
  {
    name: 'AWS',
    category: 'DevOps & Tools',
    description: 'S3 static hosting, EC2 instances, Lambda serverless triggers',
    badge: 'Cloud Host',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-900',
    icon: <AwsLogo className="w-9 h-9" />
  },
  {
    name: 'Figma',
    category: 'DevOps & Tools',
    description: 'UI/UX wireframing, Interactive prototypes, Design tokens export',
    badge: 'Design Tool',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    icon: <FigmaLogo className="w-9 h-9" />
  }
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'AI & Automation', 'DevOps & Tools'] as const;

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTools = selectedCategory === 'All' 
    ? TECH_TOOLS 
    : TECH_TOOLS.filter(t => t.category === selectedCategory);

  return (
    <section id="tech-stack" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Pattern */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono-code font-bold uppercase tracking-wider">
              <Cpu size={14} className="text-amber-600" />
              Technical Stack &amp; Capability
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
              Production Tools &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600">
                Official Technologies
              </span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Every tool in my stack is chosen for performance, security, and scalability — powering full-stack web applications, autonomous AI agents, and enterprise automation systems.
            </p>
          </div>

          {/* Capability pill count */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-zinc-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold font-space-grotesk text-zinc-900">20+ Official Brand Engines</span>
            <span className="text-zinc-400">| 100% Type-Safe</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 border border-zinc-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Track */}
        <div className="relative">
          {/* Scrollable Container */}
          <div className="flex space-x-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-zinc-100">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] p-2 rounded-2xl bg-zinc-100/90 border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-amber-400/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                {/* Inner Bezel Core */}
                <div className="p-5 rounded-[calc(1rem-0.25rem)] bg-white border border-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 group-hover:scale-110 transition-transform flex items-center justify-center">
                        {tool.icon}
                      </div>
                      <span className={`text-[10px] font-mono-code font-semibold px-2.5 py-0.5 rounded-full ${tool.badgeBg} ${tool.badgeText} border border-zinc-200/60`}>
                        {tool.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-space-grotesk font-bold text-zinc-900 text-base group-hover:text-amber-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed font-normal mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono-code text-zinc-400">
                    <span>Category</span>
                    <span className="font-semibold text-zinc-700">{tool.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
