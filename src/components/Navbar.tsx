import React, { useState, useEffect } from 'react';
import { Layers, Sparkles, Moon, Sun, ArrowUpRight, Menu, X } from 'lucide-react';
import { WhatsappLogo } from './common/BrandLogos';

interface NavbarProps {
  theme: 'dark' | 'stone';
  setTheme: (t: 'dark' | 'stone') => void;
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
  onOpenAdmin: () => void;
}

const NAV_LINKS = [
  { href: '#services', label: 'SERVICES' },
  { href: '#demos', label: 'DEMOS' },
  { href: '#saas-showcase', label: 'SHOWCASE' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#freelance', label: 'PLATFORMS' },
  { href: '#about', label: 'ABOUT' },
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  onOpenWhatsApp,
  onOpenIntake,
  onOpenAdmin
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-300`}>
        {/* Outer Shell Double-Bezel */}
        <div className={`p-1.5 rounded-[2rem] ring-1 transition-all duration-500 ${
          theme === 'dark'
            ? `bg-white/5 ring-white/10 backdrop-blur-2xl ${scrolled ? 'shadow-[0_16px_40px_rgba(0,0,0,0.9)]' : 'shadow-[0_8px_20px_rgba(0,0,0,0.5)]'}`
            : 'bg-black/5 ring-black/10 shadow-xl backdrop-blur-xl'
        }`}>
          {/* Inner Core */}
          <div className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-[calc(2rem-0.375rem)] flex items-center justify-between transition-colors ${
            theme === 'dark'
              ? 'bg-zinc-950/90 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
              : 'bg-[#E6E1DA] text-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]'
          }`}>
            
            {/* Brand Identity */}
            <a href="#" className="flex items-center gap-2.5 group shrink-0" aria-label="Arun Pandian - Home">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[2px] transition-transform duration-500 group-hover:scale-105 shrink-0">
                <img 
                  src="/assets/arun-headshot.webp" 
                  alt="Developer Arun Pandian" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="shrink-0">
                <div className="font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1.5 font-syne whitespace-nowrap">
                  ARUN PANDIAN
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fda228] animate-pulse"></span>
                </div>
                <div className="text-[9px] text-zinc-400 font-mono-code uppercase tracking-widest whitespace-nowrap hidden xs:block">
                  SaaS · AI · Automation
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-[11px] font-mono-code uppercase tracking-wider whitespace-nowrap" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#fda228] transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'stone' : 'dark')}
                className="touch-target w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-amber-400 transition-colors flex items-center justify-center cursor-pointer"
                title="Toggle Theme"
                aria-label="Toggle color theme"
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </button>

              {/* Admin CMS Trigger - desktop only */}
              <button
                onClick={onOpenAdmin}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-mono-code rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 transition-colors min-h-[36px] cursor-pointer"
              >
                <Layers size={13} className="text-amber-400" />
                <span>CMS</span>
              </button>

              {/* WhatsApp Button - hidden on very small screens, visible on sm+ */}
              <button
                onClick={onOpenWhatsApp}
                className="hidden sm:flex group items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-bold font-mono-code rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] transition-all min-h-[36px] cursor-pointer"
                aria-label="Contact via WhatsApp"
              >
                <span className="hidden md:inline">WhatsApp</span>
                <span className="md:hidden">Chat</span>
                <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsappLogo className="w-4 h-4" />
                </div>
              </button>

              {/* Start Project Button - lg+ only */}
              <button
                onClick={onOpenIntake}
                className="hidden lg:flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-bold font-mono-code rounded-full bg-[#fda228] hover:bg-amber-400 text-black transition-all shadow-lg shadow-amber-500/20 group min-h-[36px] cursor-pointer"
                aria-label="Start a project"
              >
                <span>Start Project</span>
                <div className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight size={13} className="text-black" />
                </div>
              </button>

              {/* Hamburger Menu - visible below xl */}
              <button
                onClick={() => setMobileOpen(true)}
                className="xl:hidden touch-target w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={18} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          className="mobile-nav-overlay xl:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile Nav Drawer */}
      <div
        className={`mobile-nav-drawer xl:hidden ${mobileOpen ? 'open' : 'closed'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[2px]">
              <img src="/assets/arun-headshot.webp" alt="Developer Arun Pandian" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="font-bold text-sm text-white font-syne tracking-tight">ARUN PANDIAN</span>
          </div>
          <button
            onClick={closeMobile}
            className="touch-target w-9 h-9 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Status badge */}
        <div className="mx-5 mt-5 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span className="text-xs font-mono-code text-emerald-400">Available for freelance projects</span>
        </div>

        {/* Nav links */}
        <nav className="p-5 space-y-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-mono-code font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={14} className="text-zinc-600" />
            </a>
          ))}
        </nav>

        {/* Mobile CTAs */}
        <div className="px-5 pb-8 space-y-3 border-t border-white/10 pt-5">
          <button
            onClick={() => { onOpenIntake(); closeMobile(); }}
            className="w-full flex items-center justify-between pl-5 pr-2 py-3 rounded-full bg-[#fda228] hover:bg-amber-400 text-black font-bold text-sm font-mono-code uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 min-h-[52px] cursor-pointer"
          >
            <span>Start a Project</span>
            <div className="w-9 h-9 rounded-full bg-black/15 flex items-center justify-center">
              <Sparkles size={16} className="text-black" />
            </div>
          </button>

          <button
            onClick={() => { onOpenWhatsApp(); closeMobile(); }}
            className="w-full flex items-center justify-between pl-5 pr-2 py-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-sm font-mono-code transition-all min-h-[52px] cursor-pointer"
          >
            <span>WhatsApp Me</span>
            <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center">
              <WhatsappLogo className="w-5 h-5" />
            </div>
          </button>

          <button
            onClick={() => { onOpenAdmin(); closeMobile(); }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 text-xs font-mono-code transition-all min-h-[44px] cursor-pointer"
          >
            <Layers size={14} className="text-amber-400" />
            <span>Admin CMS</span>
          </button>
        </div>
      </div>
    </>
  );
};
