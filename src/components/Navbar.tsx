import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  X,
  Linkedin,
  Github,
  Clock,
  LogIn,
  Calendar,
} from 'lucide-react';
import {
  XTwitterLogo,
} from './common/BrandLogos';

interface NavbarProps {
  theme: 'dark' | 'stone';
  setTheme: (t: 'dark' | 'stone') => void;
  onOpenIntake: () => void;
  onOpenAdmin: () => void;
  onSelectSubTopic?: (topicKey: string) => void;
}

const NAV_COLUMNS = [
  {
    key: 'home',
    title: 'Home',
    links: [
      { label: 'About Studio', subId: 'studio-about', href: '#about' },
      { label: 'Core Philosophy', subId: 'studio-philosophy', href: '#about' },
      { label: 'Tech Stack & Engines', subId: 'studio-tech', href: '#tech-stack' },
      { label: 'Work Process', subId: 'studio-process', href: '#about' },
      { label: 'Brand Assets & Media', subId: 'studio-brand', href: '#about' },
      { label: 'Contact Us', subId: 'studio-contact', href: '#about' },
    ],
  },
  {
    key: 'services',
    title: 'Services',
    links: [
      { label: 'Full-Stack MERN & Next.js', subId: 'service-fullstack', href: '#services' },
      { label: 'Autonomous AI Agents & RAG', subId: 'service-ai', href: '#services' },
      { label: 'n8n Enterprise Automations', subId: 'service-n8n', href: '#services' },
      { label: 'API & Microservices', subId: 'service-api', href: '#services' },
      { label: 'Multi-Tenant SaaS', subId: 'service-saas', href: '#services', badge: 'New' },
    ],
  },
  {
    key: 'projects',
    title: 'Projects',
    links: [
      { label: 'AI Agent Demo Assistant', subId: 'project-ai-demo', href: '#demos' },
      { label: 'Zappy SaaS Platform', subId: 'project-zappy', href: '#projects' },
      { label: 'Carpediem Tech Platform', subId: 'project-carpediem', href: '#projects' },
      { label: 'Client Proof (PDF Letter)', subId: 'project-proof', href: '#projects' },
    ],
  },
  {
    key: 'freelance',
    title: 'Freelance',
    links: [
      { label: 'Fiverr Top Rated Seller', subId: 'freelance-fiverr', href: '#freelance' },
      { label: 'Upwork Enterprise Expert', subId: 'freelance-upwork', href: '#freelance' },
      { label: 'Freelancer Verified', subId: 'freelance-freelancer', href: '#freelance' },
      { label: 'Direct WhatsApp Contract', subId: 'freelance-whatsapp', href: 'https://wa.me/918248960558' },
    ],
  },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onOpenIntake, onOpenAdmin, onSelectSubTopic }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeDateString, setTimeDateString] = useState('');

  // Live real-time date and clock update
  useEffect(() => {
    const updateTimeDate = () => {
      const now = new Date();
      const datePart = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      const timePart = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTimeDateString(`${datePart} • ${timePart}`);
    };

    updateTimeDate();
    const interval = setInterval(updateTimeDate, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ─── Clean Floating Pill Navbar (Only Avatar & Hamburger) ─── */}
      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[60] w-[94%] max-w-7xl">
        <div className={`p-1.5 rounded-[2rem] ring-1 transition-all duration-500 ${
          theme === 'dark'
            ? `bg-white/5 ring-white/10 backdrop-blur-2xl ${scrolled ? 'shadow-[0_16px_40px_rgba(0,0,0,0.9)]' : 'shadow-[0_8px_20px_rgba(0,0,0,0.5)]'}`
            : 'bg-black/5 ring-black/10 shadow-xl backdrop-blur-xl'
        }`}>
          <div className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-[calc(2rem-0.375rem)] flex items-center justify-between transition-colors ${
            theme === 'dark'
              ? 'bg-zinc-950/90 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
              : 'bg-[#E6E1DA] text-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]'
          }`}>

            {/* Brand Logo & Avatar (Using hero rounded image) */}
            <a href="#" onClick={close} className="flex items-center gap-3 group shrink-0" aria-label="Home">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[2px] transition-transform duration-500 group-hover:scale-105 shrink-0 overflow-hidden">
                <img
                  src="/assets/arun-hero-avatar.png"
                  alt="Arun Pandian"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/arun-headshot.webp';
                  }}
                />
              </div>
              <div className="shrink-0">
                <div className="font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1.5 font-syne whitespace-nowrap">
                  ARUN PANDIAN
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fda228] animate-pulse" />
                </div>
                <div className="text-[9px] text-zinc-400 font-mono-code uppercase tracking-widest whitespace-nowrap hidden xs:block">
                  SAAS · AI · AUTOMATION
                </div>
              </div>
            </a>

            {/* Clean Hamburger Menu Button on Right */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <X size={18} />
              ) : (
                <span className="flex flex-col gap-[5px] w-4">
                  <span className="block h-[1.5px] w-full bg-current rounded-full" />
                  <span className="block h-[1.5px] w-3/4 bg-current rounded-full ml-auto" />
                  <span className="block h-[1.5px] w-full bg-current rounded-full" />
                </span>
              )}
            </button>

          </div>
        </div>
      </header>

      {/* ─── Mega Menu Backdrop ─── */}
      <div
        className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-md transition-opacity duration-300"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        onClick={close}
        aria-hidden="true"
      />

      {/* ─── Mega Menu Panel ─── */}
      <div
        className="fixed inset-x-0 top-0 z-[70] transition-transform duration-500 ease-in-out p-3 sm:p-5"
        style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-115%)' }}
        role="dialog"
        aria-modal="true"
      >
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-[#F9F8F3] shadow-[0_32px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-zinc-200/80 text-zinc-900">

          {/* Top Bar: Clean Brand in Center & Close Button (No Globe Icon) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200/70">
            <div className="w-9 h-9" /> {/* Spacer to balance center alignment */}

            <a href="#" onClick={close} className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[1.5px] overflow-hidden">
                <img
                  src="/assets/arun-hero-avatar.png"
                  alt="Arun Pandian"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/arun-headshot.webp';
                  }}
                />
              </div>
              <span className="font-syne font-bold text-base sm:text-lg text-zinc-900 tracking-tight">
                Arun Pandian Studio
              </span>
            </a>

            <button
              onClick={close}
              className="w-9 h-9 rounded-full bg-zinc-950 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors cursor-pointer shadow-sm"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Nav Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* 4 Navigation Columns (7 cols on desktop) */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {NAV_COLUMNS.map((col) => (
                <div key={col.title} className="space-y-3">
                  <button
                    onClick={() => {
                      close();
                      navigate(`/topic/${col.key}`);
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-600 uppercase tracking-widest font-mono-code cursor-pointer"
                  >
                    <span>{col.title}</span>
                    <ArrowUpRight size={12} className="text-amber-700" />
                  </button>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <button
                          onClick={() => {
                            close();
                            if (link.href && link.href.startsWith('http')) {
                              window.open(link.href, '_blank', 'noopener,noreferrer');
                              return;
                            }
                            if (link.subId) {
                              navigate(`/topic/${col.key}/${link.subId}`);
                            } else {
                              const target = document.querySelector(link.href);
                              if (target) target.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="text-[14px] text-zinc-700 hover:text-zinc-950 font-medium transition-colors leading-snug flex items-center gap-1.5 cursor-pointer text-left"
                        >
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 text-[9px] font-bold uppercase">
                              {link.badge}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Column: Feature Card & Quick Action Buttons */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-4">
              
              {/* Feature Gradient Card */}
              <div
                onClick={() => {
                  onOpenIntake();
                  close();
                }}
                className="relative rounded-3xl overflow-hidden cursor-pointer group p-6 sm:p-8 flex flex-col justify-end min-h-[180px] shadow-lg transition-transform hover:scale-[1.01]"
                style={{
                  background: 'linear-gradient(145deg, #666669 0%, #2a2a2d 60%, #151517 100%)',
                }}
              >
                <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                  NEW
                </div>
                <div className="relative z-10 space-y-1">
                  <h3 className="text-white font-syne font-bold text-xl sm:text-2xl leading-tight">
                    Golden Architecture
                  </h3>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    Secure your future with autonomous AI agents &amp; multi-tenant SaaS platforms.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Start Project & Login inside Mega-Menu */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onOpenIntake();
                    close();
                  }}
                  className="py-3 px-4 rounded-xl bg-[#fda228] hover:bg-amber-400 text-black font-extrabold text-xs font-mono-code uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Project</span>
                  <ArrowUpRight size={14} className="stroke-[2.5]" />
                </button>

                <button
                  onClick={() => {
                    onOpenAdmin();
                    close();
                  }}
                  className="py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs font-mono-code uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn size={14} className="text-[#fda228]" />
                  <span>Login</span>
                </button>
              </div>

              {/* Bottom Social Icons + Live Realtime Date & Clock */}
              <div className="p-4 rounded-2xl bg-white/80 border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a href="https://linkedin.com/in/arunpandian-p" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors">
                    <Linkedin size={13} />
                  </a>
                  <a href="https://github.com/arun-pandian-p" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors">
                    <Github size={13} />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors">
                    <XTwitterLogo className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Realtime Date & Time Clock Display */}
                <div className="flex items-center gap-1.5 text-xs font-mono-code font-bold text-purple-700 bg-purple-50 border border-purple-200/60 px-3.5 py-1.5 rounded-full shadow-sm">
                  <Clock size={13} className="text-purple-600" />
                  <span>{timeDateString}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};
