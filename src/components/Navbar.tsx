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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl">
      <div className={`px-6 py-3.5 rounded-full flex items-center justify-between transition-all duration-300 ${
        theme === 'dark'
          ? 'glass-panel border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-[#E6E1DA]/90 border-black/10 shadow-lg text-black backdrop-blur-md'
      }`}>
        
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[2px] transition-transform duration-300 group-hover:scale-105">
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
            <div className="text-[9px] sm:text-[10px] text-zinc-400 font-mono-code uppercase tracking-wider whitespace-nowrap">
              SaaS · AI · Automation
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-[11px] font-medium tracking-wider font-mono-code whitespace-nowrap">
          <a href="#services" className="hover:text-[#fda228] transition-colors">WHAT I BUILD</a>
          <a href="#demos" className="hover:text-[#fda228] transition-colors">DEMOS</a>
          <a href="#saas-showcase" className="hover:text-[#fda228] transition-colors">SAAS SHOWCASE</a>
          <a href="#projects" className="hover:text-[#fda228] transition-colors">PROJECTS</a>
          <a href="#freelance" className="hover:text-[#fda228] transition-colors">PLATFORMS</a>
          <a href="#about" className="hover:text-[#fda228] transition-colors">ABOUT</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'stone' : 'dark')}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-zinc-800/80 hover:bg-zinc-700 text-amber-400' : 'bg-stone-300 hover:bg-stone-400 text-stone-900'
            }`}
            title="Toggle Visual Theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Admin CMS Trigger */}
          <button
            onClick={onOpenAdmin}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code rounded-lg bg-zinc-800/60 hover:bg-zinc-700/80 border border-white/10 text-zinc-300 transition-colors"
          >
            <Layers size={13} className="text-amber-400" />
            CMS Admin
          </button>

          {/* WhatsApp Direct CTA */}
          <button
            onClick={onOpenWhatsApp}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#fda228] hover:bg-amber-400 text-black shadow-md transition-all duration-300 hover:scale-105"
          >
            <MessageSquare size={14} className="fill-black" />
            <span>WhatsApp Me</span>
          </button>

          {/* Start Project Primary Button */}
          <button
            onClick={onOpenIntake}
            className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all duration-300 hover:scale-105"
          >
            <Sparkles size={14} />
            <span>Start a Project</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </header>
  );
};
