import React, { useState } from 'react';
import { SERVICE_PILLARS } from '../data/cmsData';
import { Layers, Globe, Bot, Workflow, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface WhatIBuildSectionProps {
  onOpenIntake: () => void;
}

export const WhatIBuildSection: React.FC<WhatIBuildSectionProps> = ({ onOpenIntake }) => {
  const [activePillar, setActivePillar] = useState(SERVICE_PILLARS[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers size={20} className="text-amber-400" />;
      case 'Globe': return <Globe size={20} className="text-indigo-400" />;
      case 'Bot': return <Bot size={20} className="text-emerald-400" />;
      case 'Workflow': return <Workflow size={20} className="text-sky-400" />;
      default: return <Sparkles size={20} className="text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-28 lg:py-36 px-6 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono-code uppercase tracking-[0.2em]">
          <Sparkles size={13} />
          Core Pillars
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          Digital Products Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-indigo-400">Real Businesses</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
          Engineering scalable SaaS platforms, agency-grade web apps, autonomous AI agents and n8n automation systems.
        </p>
      </div>

      {/* 4 Interactive Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Pillar Navigation List */}
        <div className="lg:col-span-5 space-y-4">
          {SERVICE_PILLARS.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <div 
                key={pillar.id}
                className={`p-1.5 rounded-[2rem] ring-1 transition-all duration-500 ${
                  isActive
                    ? 'bg-white/10 ring-amber-500/40 shadow-2xl scale-[1.02]'
                    : 'bg-white/5 ring-white/5 hover:ring-white/15'
                }`}
              >
                <button
                  onClick={() => setActivePillar(pillar.id)}
                  className={`w-full text-left p-5 rounded-[calc(2rem-0.375rem)] transition-all flex items-start gap-4 ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]'
                      : 'bg-zinc-900/60 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 shrink-0">
                    {getIcon(pillar.iconName)}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono-code text-amber-400 font-bold uppercase tracking-wider">{pillar.badge}</div>
                    <div className="text-lg font-bold text-white font-syne">{pillar.title}</div>
                    <div className="text-xs text-zinc-400 font-light">{pillar.subtitle}</div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Pillar Active Detailed View (Double-Bezel Architecture) */}
        <div className="lg:col-span-7">
          {SERVICE_PILLARS.map((pillar) => {
            if (pillar.id !== activePillar) return null;
            return (
              <div 
                key={pillar.id}
                className="p-2 rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl animate-fadeIn"
              >
                <div className="p-8 sm:p-10 rounded-[calc(2.5rem-0.5rem)] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-8">
                  
                  <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                    <div className="flex items-center gap-3">
                      <div className="p-3.5 rounded-2xl bg-zinc-900 border border-white/10">
                        {getIcon(pillar.iconName)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white font-syne">{pillar.title}</h3>
                        <p className="text-xs text-amber-400 font-mono-code">{pillar.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code px-3.5 py-1.5 rounded-full bg-zinc-900 text-zinc-400 border border-white/10 uppercase tracking-widest">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider font-semibold">Key Capabilities & Features</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider font-semibold">Technologies Utilized</div>
                    <div className="flex flex-wrap gap-2">
                      {pillar.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono-code text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables & Action */}
                  <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400">
                      <span className="font-semibold text-white">Deliverables:</span> {pillar.deliverables.join(' · ')}
                    </div>

                    <button
                      onClick={onOpenIntake}
                      className="group flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono-code uppercase tracking-wider transition-all shadow-lg shadow-indigo-600/20"
                    >
                      <span>Request {pillar.title}</span>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={14} className="text-white" />
                      </div>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
