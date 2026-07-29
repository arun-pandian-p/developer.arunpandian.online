import React, { useState } from 'react';
import { SERVICE_PILLARS } from '../data/cmsData';
import { Layers, Globe, Bot, Workflow, CheckCircle2, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  NodejsLogo,
  ExpressLogo,
  MongodbLogo,
  PostgresqlLogo,
  TailwindLogo,
  DockerLogo,
  OpenAILogo,
  ClaudeLogo,
  N8nLogo,
  StripeLogo,
  SupabaseLogo,
  FastapiLogo,
  PythonLogo
} from './common/BrandLogos';

interface WhatIBuildSectionProps {
  onOpenIntake: () => void;
}

export const WhatIBuildSection: React.FC<WhatIBuildSectionProps> = ({ onOpenIntake }) => {
  const [activePillar, setActivePillar] = useState(SERVICE_PILLARS[0].id);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(SERVICE_PILLARS[0].id);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'fullstack-mern': return <Globe size={22} className="text-amber-600" />;
      case 'ai-automation': return <Bot size={22} className="text-emerald-600" />;
      case 'n8n-workflows': return <Workflow size={22} className="text-rose-600" />;
      case 'api-saas-integrations': return <Layers size={22} className="text-indigo-600" />;
      default: return <Sparkles size={22} className="text-amber-600" />;
    }
  };

  const renderTechLogo = (techName: string) => {
    switch (techName) {
      case 'React': return <ReactLogo className="w-4 h-4 text-[#00D8FF]" />;
      case 'Next.js': return <NextjsLogo className="w-4 h-4 text-black" />;
      case 'TypeScript': return <TypescriptLogo className="w-4 h-4" />;
      case 'Node.js': return <NodejsLogo className="w-4 h-4 text-[#68A063]" />;
      case 'Express': return <ExpressLogo className="w-4 h-4 text-zinc-900" />;
      case 'MongoDB': return <MongodbLogo className="w-4 h-4 text-[#47A248]" />;
      case 'PostgreSQL': return <PostgresqlLogo className="w-4 h-4 text-[#336791]" />;
      case 'Tailwind CSS': return <TailwindLogo className="w-4 h-4 text-[#38BDF8]" />;
      case 'Docker': return <DockerLogo className="w-4 h-4 text-[#2496ED]" />;
      case 'OpenAI': return <OpenAILogo className="w-4 h-4 text-emerald-600" />;
      case 'Claude 3.7': case 'Claude': return <ClaudeLogo className="w-4 h-4 text-amber-600" />;
      case 'n8n': return <N8nLogo className="w-4 h-4 text-rose-500" />;
      case 'Stripe': return <StripeLogo className="w-4 h-4 text-[#635BFF]" />;
      case 'Supabase': return <SupabaseLogo className="w-4 h-4 text-[#3ECF8E]" />;
      case 'FastAPI': return <FastapiLogo className="w-4 h-4 text-teal-600" />;
      case 'Python': return <PythonLogo className="w-4 h-4 text-amber-600" />;
      default: return <span className="w-2 h-2 rounded-full bg-amber-400"></span>;
    }
  };

  const currentPillar = SERVICE_PILLARS.find(p => p.id === activePillar) || SERVICE_PILLARS[0];

  const toggleMobileExpand = (id: string) => {
    setMobileExpanded(mobileExpanded === id ? null : id);
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono-code font-bold uppercase tracking-wider">
            <Sparkles size={13} className="text-amber-600" />
            Core Engineering Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
            Digital Solutions Built For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600">
              Modern Businesses
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Delivering end-to-end software development — from full-stack MERN &amp; Next.js SaaS platforms to autonomous AI agents and automated n8n business pipelines.
          </p>
        </div>

        {/* ─── DESKTOP VIEW (lg and above) ─── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column — Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {SERVICE_PILLARS.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-white border-amber-400/80 shadow-md shadow-amber-500/5 -translate-y-0.5'
                      : 'bg-zinc-50/80 border-zinc-200/80 hover:bg-zinc-100 hover:border-zinc-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isActive ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-zinc-200/50'}`}>
                    {getPillarIcon(pillar.id)}
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-amber-700">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className={`text-base font-bold font-space-grotesk truncate ${isActive ? 'text-zinc-900' : 'text-zinc-700'}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-500 line-clamp-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column — Active Pillar Card */}
          <div className="lg:col-span-8">
            <div className="p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm">
              <div className="p-8 sm:p-10 rounded-[calc(1.5rem-0.25rem)] bg-white border border-zinc-100 space-y-8">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-zinc-100">
                  <div className="space-y-2">
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {currentPillar.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-space-grotesk text-zinc-900">
                      {currentPillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono-code text-zinc-500">
                      {currentPillar.subtitle}
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
                    {getPillarIcon(currentPillar.id)}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {currentPillar.description}
                </p>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono-code font-bold text-zinc-900 uppercase tracking-wider">
                    Core Technical Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPillar.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50/90 border border-zinc-100">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-700 leading-normal font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges with Official Logos */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono-code font-bold text-zinc-900 uppercase tracking-wider">
                    Official Production Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPillar.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs"
                      >
                        {renderTechLogo(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Action */}
                <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-code uppercase font-semibold text-zinc-400">Target Deliverables</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {currentPillar.deliverables.map((del, i) => (
                        <span key={i} className="text-xs text-zinc-700 font-medium">
                          {del}{i < currentPillar.deliverables.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenIntake}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono-code text-xs font-bold transition-all shadow-md cursor-pointer shrink-0"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ─── MOBILE VIEW (below lg) ─── */}
        <div className="lg:hidden space-y-4">
          {SERVICE_PILLARS.map((pillar) => {
            const isExpanded = mobileExpanded === pillar.id;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl bg-zinc-50 border border-zinc-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleMobileExpand(pillar.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-white border border-zinc-200 shrink-0">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono-code font-bold uppercase text-amber-700">
                        {pillar.badge}
                      </span>
                      <h3 className="text-base font-bold font-space-grotesk text-zinc-900 truncate">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-zinc-500 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-zinc-200/80 space-y-6 bg-white">
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-[11px] font-mono-code font-bold text-zinc-900 uppercase">Features</h4>
                      <div className="space-y-2">
                        {pillar.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[11px] font-mono-code font-bold text-zinc-900 uppercase">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.techStack.map((tech, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-[11px] font-mono-code text-zinc-800">
                            {renderTechLogo(tech)}
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={onOpenIntake}
                      className="w-full py-3 rounded-xl bg-zinc-900 text-white font-mono-code text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Start {pillar.title}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
