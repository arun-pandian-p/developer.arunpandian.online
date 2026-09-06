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
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  { name: 'Next.js',      icon: <NextjsLogo      className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" color="#FFFFFF" /> },
  { name: 'React 19',     icon: <ReactLogo       className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" /> },
  { name: 'TypeScript',   icon: <TypescriptLogo  className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" /> },
  { name: 'OpenAI',       icon: <OpenAILogo      className="w-7 h-7 sm:w-8 sm:h-8 text-[#10A37F] shrink-0" /> },
  { name: 'Claude 3.7',   icon: <ClaudeLogo      className="w-7 h-7 sm:w-8 sm:h-8 text-[#D97706] shrink-0" /> },
  { name: 'n8n',          icon: <N8nLogo         className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" /> },
  { name: 'Supabase',     icon: <SupabaseLogo    className="w-7 h-7 sm:w-8 sm:h-8 text-[#3ECF8E] shrink-0" /> },
  { name: 'FastAPI',      icon: <FastapiLogo     className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400 shrink-0" /> },
  { name: 'Stripe',       icon: <StripeLogo      className="w-7 h-7 sm:w-8 sm:h-8 text-[#635BFF] shrink-0" /> },
  { name: 'Docker',       icon: <DockerLogo      className="w-7 h-7 sm:w-8 sm:h-8 text-[#2496ED] shrink-0" /> },
  { name: 'Tailwind CSS', icon: <TailwindLogo    className="w-7 h-7 sm:w-8 sm:h-8 text-[#06B6D4] shrink-0" /> },
];

// Triple-duplicate for seamless infinite loop
const ITEMS = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

export const TrustMarquee: React.FC = () => {
  return (
    <section
      className="w-full py-6 sm:py-8 overflow-hidden bg-[#09090b] border-b border-zinc-800/80 relative z-20"
      aria-label="Technology Stack"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider w-fit">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Production Stack &amp; Ecosystem
        </div>
        <span className="text-[11px] font-mono-code text-zinc-400 uppercase tracking-widest">
          12 Active Enterprise Engines · Built For Scale
        </span>
      </div>

      {/* Marquee Row 1 — scrolls LEFT */}
      <div className="relative">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-r from-[#09090b] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-l from-[#09090b] to-transparent" />

        <div
          className="flex items-center gap-8 sm:gap-14 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-2"
          aria-hidden="false"
        >
          {ITEMS.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col items-center gap-2 shrink-0 group cursor-default select-none px-3 py-2 rounded-xl transition-all duration-300 hover:bg-zinc-800/40"
            >
              <div className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 drop-shadow-sm">
                {tech.icon}
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono-code text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 tracking-wide uppercase whitespace-nowrap font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
