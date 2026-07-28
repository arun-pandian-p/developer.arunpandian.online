import React from 'react';
import { Layers, MessageSquare, Sparkles, Moon, Sun, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'stone';
  setTheme: (t: 'dark' | 'stone') => void;
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  onOpenWhatsApp,
  onOpenIntake,
  onOpenAdmin
}) => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl">
      {/* Outer Shell Double-Bezel */}
      <div className={`p-1.5 rounded-[2rem] ring-1 transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-white/5 ring-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl'
          : 'bg-black/5 ring-black/10 shadow-xl backdrop-blur-xl'
      }`}>
        {/* Inner Core */}
        <div className={`px-5 py-3 rounded-[calc(2rem-0.375rem)] flex items-center justify-between transition-colors ${
          theme === 'dark'
            ? 'bg-zinc-950/90 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
            : 'bg-[#E6E1DA] text-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]'
        }`}>
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[2px] transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/assets/arun-headshot.png" 
                alt="Arun Pandian" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="shrink-0">
              <div className="font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1.5 font-syne whitespace-nowrap">
                ARUN PANDIAN
                <span className="w-2 h-2 rounded-full bg-[#fda228] animate-pulse"></span>
              </div>
              <div className="text-[9px] text-zinc-400 font-mono-code uppercase tracking-widest whitespace-nowrap">
                SaaS · AI · Automation
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[11px] font-mono-code uppercase tracking-wider whitespace-nowrap">
            <a href="#services" className="hover:text-[#fda228] transition-colors">WHAT I BUILD</a>
            <a href="#demos" className="hover:text-[#fda228] transition-colors">DEMOS</a>
            <a href="#saas-showcase" className="hover:text-[#fda228] transition-colors">SAAS SHOWCASE</a>
            <a href="#projects" className="hover:text-[#fda228] transition-colors">PROJECTS</a>
            <a href="#freelance" className="hover:text-[#fda228] transition-colors">PLATFORMS</a>
            <a href="#about" className="hover:text-[#fda228] transition-colors">ABOUT</a>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'stone' : 'dark')}
              className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-amber-400 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Admin CMS Trigger */}
            <button
              onClick={onOpenAdmin}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 transition-colors"
            >
              <Layers size={13} className="text-amber-400" />
              <span>CMS</span>
            </button>

            {/* WhatsApp Nested Island Button */}
            <button
              onClick={onOpenWhatsApp}
              className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-bold font-mono-code rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 transition-all"
            >
              <span>WhatsApp Me</span>
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare size={13} className="fill-emerald-400 text-emerald-400" />
              </div>
            </button>

            {/* Start Project Primary Island Button */}
            <button
              onClick={onOpenIntake}
              className="hidden lg:flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-bold font-mono-code rounded-full bg-[#fda228] hover:bg-amber-400 text-black transition-all shadow-lg shadow-amber-500/20 group"
            >
              <span>Start Project</span>
              <div className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight size={13} className="text-black" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
