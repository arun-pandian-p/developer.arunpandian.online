import React from 'react';
import { Cpu, Database, Bot, Workflow, Layers, Code, Globe, Shield } from 'lucide-react';

const TECH_CATEGORIES = [
  {
    category: 'SaaS Engineering',
    color: '#fda228',
    items: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'Prisma', 'MongoDB', 'Stripe', 'Docker']
  },
  {
    category: 'AI & Agent Architecture',
    color: '#10b981',
    items: ['OpenAI GPT-4o', 'Claude 3.7 Sonnet', 'Gemini 2.5', 'LangChain', 'LangGraph', 'Pinecone', 'RAG Vector Search', 'MCP Protocol', 'Tool Calling']
  },
  {
    category: 'n8n & Workflow Automation',
    color: '#38bdf8',
    items: ['n8n Self-Hosted', 'Webhooks', 'REST APIs', 'WhatsApp Business API', 'Telegram API', 'Airtable Sync', 'CRM Lead Automation']
  },
  {
    category: 'Web & Interface Design',
    color: '#818cf8',
    items: ['Tailwind CSS v4', 'Framer Motion 12', 'GSAP ScrollTrigger', 'Lenis Smooth Scroll', 'Canvas 3D', 'Shadcn UI', 'SEO Optimization']
  }
];

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-amber-400 text-xs font-mono-code uppercase tracking-wider">
          <Cpu size={14} />
          Technology Stack
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          Engineered With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-indigo-400 to-emerald-400">Modern Production Tools</span>
        </h2>
        <p className="text-zinc-400 text-base font-light leading-relaxed">
          Focused exclusively on technologies that deliver fast, reliable, multi-tenant SaaS platforms, intelligent AI agents, and resilient automated pipelines.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TECH_CATEGORIES.map((cat, idx) => (
          <div 
            key={idx}
            className="p-8 rounded-3xl neumorphic-card border border-white/10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></span>
              <h3 className="text-lg font-bold text-white font-syne">{cat.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {cat.items.map((item, i) => (
                <span 
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono-code text-zinc-300 hover:border-amber-500/40 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
