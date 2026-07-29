import React from 'react';
import {
  NextjsLogo,
  ReactLogo,
  TypescriptLogo,
  OpenAILogo,
  ClaudeLogo,
  N8nLogo,
  SupabaseLogo,
  FastapiLogo,
  StripeLogo,
  DockerLogo,
  TailwindLogo
} from './common/BrandLogos';

interface TechItem {
  name: string;
  label: string;
  category: string;
  badgeBg: string;
  badgeText: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: 'Next.js 16',
    label: 'Framework',
    category: 'Full-Stack',
    badgeBg: 'bg-zinc-100',
    badgeText: 'text-zinc-700',
    icon: <NextjsLogo className="w-5 h-5 text-black shrink-0" />
  },
  {
    name: 'React 19',
    label: 'UI Core',
    category: 'Frontend',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-700',
    icon: <ReactLogo className="w-5 h-5 shrink-0" />
  },
  {
    name: 'TypeScript',
    label: 'Language',
    category: 'Core',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    icon: <TypescriptLogo className="w-5 h-5 shrink-0" />
  },
  {
    name: 'OpenAI',
    label: 'LLM Engine',
    category: 'AI / ML',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    icon: <OpenAILogo className="w-5 h-5 text-[#10A37F] shrink-0" />
  },
  {
    name: 'Claude 3.7',
    label: 'AI Reasoning',
    category: 'AI / ML',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    icon: <ClaudeLogo className="w-5 h-5 text-[#D97706] shrink-0" />
  },
  {
    name: 'n8n',
    label: 'Workflow Engine',
    category: 'Automation',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    icon: <N8nLogo className="w-5 h-5 shrink-0" />
  },
  {
    name: 'Supabase',
    label: 'PostgreSQL DB',
    category: 'Database',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    icon: <SupabaseLogo className="w-5 h-5 text-[#3ECF8E] shrink-0" />
  },
  {
    name: 'FastAPI',
    label: 'Python Backend',
    category: 'Backend',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    icon: <FastapiLogo className="w-5 h-5 text-teal-600 shrink-0" />
  },
  {
    name: 'Stripe',
    label: 'Billing Engine',
    category: 'Payments',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    icon: <StripeLogo className="w-5 h-5 text-[#635BFF] shrink-0" />
  },
  {
    name: 'Docker',
    label: 'Containers',
    category: 'DevOps',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    icon: <DockerLogo className="w-5 h-5 text-[#2496ED] shrink-0" />
  },
  {
    name: 'Tailwind CSS',
    label: 'Styling',
    category: 'Design System',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-800',
    icon: <TailwindLogo className="w-5 h-5 text-[#06B6D4] shrink-0" />
  }
];

export const TrustMarquee: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFC] border-y border-zinc-200/90 py-8 sm:py-12 overflow-hidden relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Eyebrow Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            PRODUCTION STACK & ECOSYSTEM
          </div>
        </div>

        {/* Right Capability Badge */}
        <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-600">
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
          <span className="font-syne font-bold uppercase tracking-widest text-[11px] text-zinc-800">
            12 Active Enterprise Engines
          </span>
          <span className="text-zinc-400 text-[10px] hidden md:inline">| Built For Scale</span>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative z-10">
        {/* Left White Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent z-20 pointer-events-none"></div>
        {/* Right White Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Loop */}
        <div className="flex space-x-4 sm:space-x-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-2" aria-label="Technology Stack Marquee">
          {[...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS].map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex shrink-0 p-1.5 sm:p-2 rounded-2xl bg-zinc-100/90 border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-amber-400/60 hover:bg-amber-500/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              {/* Double Bezel Inner Core */}
              <div className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-[calc(1rem-0.25rem)] bg-white border border-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_1px_3px_rgba(0,0,0,0.04)] flex items-center gap-3 sm:gap-3.5">
                <div className="p-1.5 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {tech.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-zinc-900 text-xs sm:text-sm tracking-tight group-hover:text-amber-600 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono-code text-zinc-500 font-medium">
                    {tech.label}
                  </span>
                </div>
                <span className={`ml-2 text-[9px] font-mono-code uppercase font-semibold px-2 py-0.5 rounded-md ${tech.badgeBg} ${tech.badgeText} border border-zinc-200/60 hidden xs:inline-block`}>
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
