import React from 'react';
import { Sparkles, MessageSquare, ArrowDownRight, ArrowRight, ShieldCheck, Layers, Zap, Bot, Workflow } from 'lucide-react';

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">
      
      {/* Background Yellow Editorial Gradient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#fda228]/30 via-amber-500/20 to-transparent rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 anime-grid-bg opacity-40"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Giant Vertical Display Typography (Matched to Reference Image) */}
        <div className="lg:col-span-5 space-y-3 uppercase font-syne select-none">
          <div className="text-xs font-mono-code tracking-widest text-amber-400 font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            ARUN PANDIAN STUDIO
          </div>

          <div className="space-y-1">
            <div className="text-[3.2rem] sm:text-[5rem] lg:text-[4.2rem] xl:text-[5.4rem] 2xl:text-[6.5rem] font-black leading-[0.85] tracking-tighter text-white whitespace-nowrap">
              FOR
            </div>
            <div className="text-[3.2rem] sm:text-[5rem] lg:text-[4.2rem] xl:text-[5.4rem] 2xl:text-[6.5rem] font-black leading-[0.85] tracking-tighter text-stroke-2 hover:text-white transition-all whitespace-nowrap">
              SAAS &
            </div>
            <div className="text-[3.2rem] sm:text-[5rem] lg:text-[4.2rem] xl:text-[5.4rem] 2xl:text-[6.5rem] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 whitespace-nowrap">
              AI WORK
            </div>
          </div>

          {/* Quick Pillar Tags */}
          <div className="flex flex-wrap gap-2 pt-4 font-mono-code text-[11px] text-zinc-300">
            <span className="px-3 py-1 rounded-lg bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
              <Layers size={13} className="text-amber-400" /> SaaS Development
            </span>
            <span className="px-3 py-1 rounded-lg bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
              <Bot size={13} className="text-emerald-400" /> AI Agents
            </span>
            <span className="px-3 py-1 rounded-lg bg-zinc-900/90 border border-white/10 flex items-center gap-1.5">
              <Workflow size={13} className="text-sky-400" /> n8n Automation
            </span>
          </div>
        </div>

        {/* Center Column: High Contrast Magnifying Glass Duotone Portrait */}
        <div className="lg:col-span-4 relative flex justify-center py-4 lg:py-0">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-[0_0_50px_rgba(253,162,40,0.25)] group neumorphic-card">
            
            {/* Duotone Overlay Gradient matching reference image */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-amber-500/10 z-10 pointer-events-none"></div>

            {/* High Resolution Duotone Hero Portrait */}
            <img 
              src="/assets/arun-hero-duotone.png" 
              alt="Arun Pandian - SaaS & AI Agent Engineer" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Precision Badge Overlay */}
            <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono-code text-amber-400 font-bold uppercase">Precision Engineering</span>
                <ShieldCheck size={16} className="text-emerald-400" />
              </div>
              <div className="text-xs font-semibold text-white">Inspecting Every Detail from Architecture to Code</div>
            </div>
          </div>
        </div>

        {/* Right Column: Minimalist Bio Statement & Arrow Icon (Matched to Reference Image) */}
        <div className="lg:col-span-3 space-y-8 flex flex-col justify-between">
          
          <div className="space-y-6">
            {/* Custom Down-Right Arrow Icon */}
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-amber-400/20">
              <ArrowDownRight size={28} className="stroke-[2.5]" />
            </div>

            {/* Minimalist Bio Copy */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              A freelance <strong className="text-white font-semibold">SaaS developer, AI agent engineer and n8n automation specialist</strong> based in India. Specializing in contemporary web platforms, intelligent AI systems, and automated workflows, I bring digital products to life with purposeful, high-performance solutions.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <button
              onClick={onOpenIntake}
              className="w-full py-4 rounded-2xl bg-[#fda228] hover:bg-amber-400 text-black font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
            >
              <Sparkles size={16} />
              <span>Start a Project</span>
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full py-3.5 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-semibold text-xs font-mono-code flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare size={15} className="fill-emerald-400 text-emerald-400" />
              <span>WhatsApp Me (+91 8248960558)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
