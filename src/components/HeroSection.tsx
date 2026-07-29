import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, Layers, Bot, Workflow } from 'lucide-react';
import { WhatsappLogo } from './common/BrandLogos';

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
      setTimeout(() => setRevealStep(1), 100),   // Eyebrow badge
      setTimeout(() => setRevealStep(2), 250),   // BUILDING
      setTimeout(() => setRevealStep(3), 400),   // SaaS
      setTimeout(() => setRevealStep(4), 550),   // & AI
      setTimeout(() => setRevealStep(5), 700),   // Center Portrait
      setTimeout(() => setRevealStep(6), 850),   // Pillars
      setTimeout(() => setRevealStep(7), 1000),  // Subheading & Right Card
      setTimeout(() => setRevealStep(8), 1150)   // CTAs
    ];

    return () => timers.forEach(clearTimeout);
  }, [isReady]);

  return (
    <section className="relative min-h-[100dvh] pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">
      
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[750px] h-[300px] sm:h-[500px] lg:h-[750px] bg-gradient-to-tr from-[#fda228]/20 via-amber-500/10 to-transparent rounded-full blur-[100px] sm:blur-[140px]"></div>
        <div className="absolute inset-0 anime-grid-bg opacity-20 sm:opacity-30"></div>
      </div>

      <div className="relative z-10">
        {/* ─── MOBILE LAYOUT (below lg) ─── */}
        <div className="lg:hidden space-y-6">
          
          {/* Eyebrow Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono-code uppercase tracking-[0.2em] transition-all duration-500 ${
            revealStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"></span>
            ARUN PANDIAN STUDIO
          </div>

          {/* Display Type — Mobile stacked */}
          <div className={`space-y-[-4px] uppercase font-syne select-none transition-all duration-600 ${
            revealStep >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
          }`}>
            <div className="text-[3.2rem] xs:text-[3.8rem] sm:text-[5rem] font-black leading-[0.85] tracking-tight text-white">
              BUILDING
            </div>
            <div className={`text-[3.2rem] xs:text-[3.8rem] sm:text-[5rem] font-black leading-[0.85] tracking-tight text-stroke-2 transition-all duration-600 ${
              revealStep >= 3 ? 'opacity-100' : 'opacity-0'
            }`}>
              SaaS
            </div>
            <div className={`text-[3.2rem] xs:text-[3.8rem] sm:text-[5rem] font-black leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 transition-all duration-600 ${
              revealStep >= 4 ? 'opacity-100' : 'opacity-0'
            }`}>
              &amp; AI
            </div>
          </div>

          {/* Subheading */}
          <p className={`text-zinc-300 text-sm sm:text-base leading-relaxed font-light transition-all duration-500 ${
            revealStep >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            I build scalable SaaS platforms, AI agents, and n8n automations that help startups launch faster, automate workflows, and grow with confidence.
          </p>

          {/* Portrait — Mobile centered */}
          <div className={`relative flex justify-center transition-all duration-700 ${
            revealStep >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="p-1.5 rounded-[1.5rem] bg-white/5 ring-1 ring-white/10 shadow-[0_0_40px_rgba(253,162,40,0.2)] w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[340px]">
              <div className="relative aspect-[4/5] rounded-[calc(1.5rem-0.375rem)] overflow-hidden bg-zinc-950 group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-amber-500/10 z-10 pointer-events-none"></div>
                <img 
                  src="/assets/arun-hero-duotone.png" 
                  alt="Arun Pandian - SaaS & AI Developer" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl glass-panel border border-white/10 space-y-0.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono-code text-amber-400 font-bold uppercase text-[10px]">PRECISION ENGINEERING</span>
                    <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-[11px] font-semibold text-white">Building Fast. Secure. Scalable.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pills — Mobile */}
          <div className={`flex flex-wrap gap-2 transition-all duration-500 ${
            revealStep >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5 text-xs font-mono-code text-zinc-300">
              <Layers size={12} className="text-amber-400 shrink-0" /> SaaS Development
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5 text-xs font-mono-code text-zinc-300">
              <Bot size={12} className="text-emerald-400 shrink-0" /> AI Agents
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5 text-xs font-mono-code text-zinc-300">
              <Workflow size={12} className="text-sky-400 shrink-0" /> n8n Automation
            </span>
          </div>

          {/* Right Card Text — Mobile */}
          <div className={`p-4 rounded-2xl bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 font-light leading-relaxed transition-all duration-500 ${
            revealStep >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            AI-powered solutions engineered for performance, automation, and long-term scalability—from idea to production.
          </div>

          {/* CTAs — Mobile full-width */}
          <div className={`space-y-3 transition-all duration-500 ${
            revealStep >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={onOpenIntake}
              className="w-full group flex items-center justify-between pl-6 pr-3 py-3.5 rounded-full bg-[#fda228] hover:bg-amber-400 text-black font-bold text-sm font-mono-code uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 min-h-[52px] cursor-pointer"
              aria-label="Start Your Project"
            >
              <span>Start Your Project</span>
              <div className="w-9 h-9 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} className="text-black" />
              </div>
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full group flex items-center justify-between pl-6 pr-3 py-3.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-sm font-mono-code transition-all min-h-[52px] cursor-pointer"
              aria-label="Chat on WhatsApp"
            >
              <span>Chat on WhatsApp</span>
              <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <WhatsappLogo className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* ─── DESKTOP LAYOUT (lg+) ─── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column */}
          <div className="col-span-5 space-y-5">
            
            {/* Eyebrow Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono-code uppercase tracking-[0.2em] transition-all duration-500 ${
              revealStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0"></span>
              ARUN PANDIAN STUDIO
            </div>

            {/* Headline Display Stack */}
            <div className="space-y-0.5 uppercase font-syne select-none">
              <div className={`text-[4.2rem] xl:text-[5.2rem] 2xl:text-[6.2rem] font-black leading-[0.85] tracking-tight text-white transition-all duration-600 ${
                revealStep >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}>
                BUILDING
              </div>
              <div className={`text-[4.2rem] xl:text-[5.2rem] 2xl:text-[6.2rem] font-black leading-[0.85] tracking-tight text-stroke-2 hover:text-white transition-all duration-600 ${
                revealStep >= 3 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}>
                SaaS
              </div>
              <div className={`text-[4.2rem] xl:text-[5.2rem] 2xl:text-[6.2rem] font-black leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 transition-all duration-600 ${
                revealStep >= 4 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}>
                &amp; AI
              </div>
            </div>

            {/* Feature Pills */}
            <div className={`flex flex-wrap gap-2 pt-1 font-mono-code text-[11px] text-zinc-300 transition-all duration-500 ${
              revealStep >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
                <Layers size={13} className="text-amber-400 shrink-0" /> SaaS Development
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
                <Bot size={13} className="text-emerald-400 shrink-0" /> AI Agents
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
                <Workflow size={13} className="text-sky-400 shrink-0" /> n8n Automation
              </span>
            </div>

          </div>

          {/* Center Column: Portrait */}
          <div className={`col-span-4 relative flex justify-center py-2 transition-all duration-700 ${
            revealStep >= 5 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
          }`}>
            <div className="p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10 shadow-[0_0_50px_rgba(253,162,40,0.25)] w-full max-w-xs xl:max-w-sm">
              <div className="relative aspect-[4/5] rounded-[calc(2rem-0.5rem)] overflow-hidden bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-amber-500/10 z-10 pointer-events-none"></div>
                <img 
                  src="/assets/arun-hero-duotone.png" 
                  alt="Arun Pandian - SaaS & AI Developer" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl glass-panel border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono-code text-amber-400 font-bold uppercase">PRECISION ENGINEERING</span>
                    <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-xs font-semibold text-white">Building Fast. Secure. Scalable.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Subheading, Right Card & CTAs */}
          <div className="col-span-3 space-y-6 flex flex-col justify-between">
            
            <div className={`space-y-4 transition-all duration-500 ${
              revealStep >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {/* Subheading */}
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                I build scalable SaaS platforms, AI agents, and n8n automations that help startups launch faster, automate workflows, and grow with confidence.
              </p>

              {/* Right Card */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-white/10 text-xs text-zinc-400 font-light leading-relaxed shadow-lg">
                AI-powered solutions engineered for performance, automation, and long-term scalability—from idea to production.
              </div>
            </div>

            {/* CTAs */}
            <div className={`space-y-3 pt-3 border-t border-zinc-800 transition-all duration-500 ${
              revealStep >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button
                onClick={onOpenIntake}
                className="w-full group flex items-center justify-between pl-5 pr-2.5 py-2.5 rounded-full bg-[#fda228] hover:bg-amber-400 text-black font-bold text-xs font-mono-code uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 min-h-[46px] cursor-pointer"
                aria-label="Start Your Project"
              >
                <span>Start Your Project</span>
                <div className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={15} className="text-black" />
                </div>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="w-full group flex items-center justify-between pl-5 pr-2.5 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs font-mono-code transition-all min-h-[46px] cursor-pointer"
                aria-label="Chat on WhatsApp"
              >
                <span>Chat on WhatsApp</span>
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsappLogo className="w-4 h-4" />
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
