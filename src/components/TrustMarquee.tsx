import React from 'react';

const TECH_LOGOS = [
  { name: 'Next.js 16', label: 'Framework' },
  { name: 'React 19', label: 'UI Core' },
  { name: 'TypeScript', label: 'Language' },
  { name: 'OpenAI', label: 'LLM Engine' },
  { name: 'Claude 3.7', label: 'AI Reasoning' },
  { name: 'n8n', label: 'Workflow Engine' },
  { name: 'Supabase', label: 'PostgreSQL DB' },
  { name: 'FastAPI', label: 'Python Backend' },
  { name: 'LangChain', label: 'AI Agent RAG' },
  { name: 'Stripe', label: 'Billing Engine' },
  { name: 'Docker', label: 'Containers' },
  { name: 'Tailwind CSS', label: 'Styling' }
];

export const TrustMarquee: React.FC = () => {
  return (
    <div className="w-full py-8 bg-zinc-950 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between text-xs font-mono-code text-zinc-500 uppercase tracking-widest">
        <span>Production Stack & Ecosystem</span>
        <span>Trusted Tech Capabilities</span>
      </div>

      <div className="flex space-x-8 animate-marquee whitespace-nowrap">
        {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, idx) => (
          <div 
            key={idx} 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-xs font-mono-code text-zinc-300"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="font-bold text-white">{tech.name}</span>
            <span className="text-zinc-500 text-[10px]">({tech.label})</span>
          </div>
        ))}
      </div>
    </div>
  );
};
