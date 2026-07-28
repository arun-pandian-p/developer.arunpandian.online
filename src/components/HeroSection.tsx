import React, { useEffect, useState } from 'react';
import { Sparkles, MessageSquare, ArrowDownRight, ArrowRight, ShieldCheck, Layers, Bot, Workflow } from 'lucide-react';

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
  isReady?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, onOpenIntake, isReady = true }) => {
  const [revealStep, setRevealStep] = useState(0);

  // Staggered Sequential Launch Reveal
  useEffect(() => {
    if (!isReady) return;

    const timers = [
      setTimeout(() => setRevealStep(1), 100),  // Eyebrow badge
      setTimeout(() => setRevealStep(2), 250),  // FOR
      setTimeout(() => setRevealStep(3), 400),  // SAAS
      setTimeout(() => setRevealStep(4), 550),  // & AI
      setTimeout(() => setRevealStep(5), 700),  // Center Duotone Portrait
      setTimeout(() => setRevealStep(6), 850),  // Pillars
      setTimeout(() => setRevealStep(7), 1000), // Right copy
      setTimeout(() => setRevealStep(8), 1150)  // CTAs
    ];

    return () => timers.forEach(clearTimeout);
  }, [isReady]);

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">
      
      {/* Background Yellow Editorial Gradient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#fda228]/25 via-amber-500/15 to-transparent rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 anime-grid-bg opacity-30"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Unclipped 3-Line Vertical Display Stack */}
        <div className="lg:col-span-5 space-y-4 uppercase font-syne select-none">
          
          {/* Step 1: Eyebrow Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono-code uppercase tracking-[0.2em] transition-all duration-500 ${
            revealStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            ARUN PANDIAN STUDIO
          </div>

          {/* Steps 2-4: Sequential Staggered Display Stack */}
          <div className="space-y-0.5">
            {/* Step 2: FOR */}
            <div className={`text-[4rem] sm:text-[6rem] lg:text-[4.8rem] xl:text-[6rem] font-black leading-[0.85] tracking-tight text-white transition-all duration-600 ${
              revealStep >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
              FOR
            </div>

            {/* Step 3: SAAS */}
            <div className={`text-[4rem] sm:text-[6rem] lg:text-[4.8rem] xl:text-[6rem] font-black leading-[0.85] tracking-tight text-stroke-2 hover:text-white transition-all duration-600 ${
              revealStep >= 3 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
              SAAS
            </div>

            {/* Step 4: & AI */}
            <div className={`text-[4rem] sm:text-[6rem] lg:text-[4.8rem] xl:text-[6rem] font-black leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 transition-all duration-600 ${
              revealStep >= 4 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
              & AI
            </div>
          </div>

          {/* Step 6: Quick Pillar Pills */}
          <div className={`flex flex-wrap gap-2 pt-2 font-mono-code text-[11px] text-zinc-300 transition-all duration-500 ${
            revealStep >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
              <Layers size={13} className="text-amber-400" /> SaaS Development
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
              <Bot size={13} className="text-emerald-400" /> AI Agents
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
              <Workflow size={13} className="text-sky-400" /> n8n Automation
            </span>
          </div>
        </div>

        {/* Center Column: Step 5 — Double-Bezel Duotone Portrait */}
        <div className={`lg:col-span-4 relative flex justify-center py-2 lg:py-0 transition-all duration-700 ${
          revealStep >= 5 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
        }`}>
          <div className="p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10 shadow-[0_0_50px_rgba(253,162,40,0.25)] w-full max-w-xs sm:max-w-sm xl:max-w-md">
            <div className="relative aspect-[4/5] rounded-[calc(2rem-0.5rem)] overflow-hidden bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group">
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-amber-500/10 z-10 pointer-events-none"></div>

              <img 
                src="/assets/arun-hero-duotone.png" 
                alt="Arun Pandian - SaaS & AI Developer" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl glass-panel border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-code text-amber-400 font-bold uppercase">Precision Engineering</span>
                  <ShieldCheck size={16} className="text-emerald-400" />
                </div>
                <div className="text-xs font-semibold text-white">Inspecting Every Detail from Architecture to Code</div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Steps 7 & 8 — Minimalist Copy & Island Action Buttons */}
        <div className="lg:col-span-3 space-y-6 flex flex-col justify-between">
          
          {/* Step 7: Minimalist Copy */}
          <div className={`space-y-5 transition-all duration-500 ${
            revealStep >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-amber-400/20">
              <ArrowDownRight size={28} className="stroke-[2.5]" />
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
              A freelance <strong className="text-white font-semibold">SaaS developer, AI agent engineer and n8n automation specialist</strong> based in India. Specializing in contemporary web platforms, intelligent AI systems, and automated workflows, I bring digital products to life with purposeful, high-performance solutions.
            </p>
          </div>

          {/* Step 8: Action CTAs */}
          <div className={`space-y-3 pt-3 border-t border-zinc-800 transition-all duration-500 ${
            revealStep >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={onOpenIntake}
              className="w-full group flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#fda228] hover:bg-amber-400 text-black font-bold text-xs font-mono-code uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Start a Project</span>
              <div className="w-9 h-9 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <Sparkles size={16} className="text-black" />
              </div>
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full group flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-semibold text-xs font-mono-code transition-all"
            >
              <span>WhatsApp Me</span>
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare size={15} className="fill-emerald-400 text-emerald-400" />
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
