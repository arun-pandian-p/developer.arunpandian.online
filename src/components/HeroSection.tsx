import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Layers, Bot, Workflow } from 'lucide-react';
import { WhatsappLogo } from './common/BrandLogos';
import { useCMS } from '../context/CMSContext';

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
  isReady?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhatsApp, onOpenIntake, isReady = true }) => {
  const [revealStep, setRevealStep] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const { cmsData, isElementVisible } = useCMS();
  const hero = cmsData.hero;

  // Staggered Sequential Launch Reveal
  useEffect(() => {
    if (!isReady) return;

    const timers = [
      setTimeout(() => setRevealStep(1), 100),
      setTimeout(() => setRevealStep(2), 250),
      setTimeout(() => setRevealStep(3), 400),
      setTimeout(() => setRevealStep(4), 550),
      setTimeout(() => setRevealStep(5), 700),
      setTimeout(() => setRevealStep(6), 850),
      setTimeout(() => setRevealStep(7), 1000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isReady]);

  // Parallax: image moves smoothly with scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrollY = window.scrollY;
      imgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#09090b]">

      {/* ── Full-bleed Background Image with Deep Contrast Overlay & Amber Glow ── */}
      {isElementVisible('heroBg') && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            ref={imgRef}
            src={hero.bgImageUrl || '/assets/arun-banner-brand.png'}
            alt="Arun Pandian - Senior SaaS Developer & AI Automation Engineer"
            fetchPriority="high"
            className="w-full h-full object-cover object-right sm:object-center scale-105 will-change-transform opacity-85"
            style={{ transformOrigin: 'center top' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/hero.png';
            }}
          />
          {/* Cinematic dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/40 to-transparent" />
          {/* Warm Golden/Amber radial glow from bottom-center */}
          <div className="absolute bottom-[-10%] left-1/3 w-[700px] h-[450px] bg-gradient-to-t from-amber-500/20 via-amber-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
        </div>
      )}

      {/* ── Content with Generous Bottom Padding so Buttons are 100% Unclipped ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-24 sm:pb-28 lg:pb-32">

        {/* Eyebrow Badge */}
        {isElementVisible('heroBadge') && (
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#fda228] text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-[0.18em] backdrop-blur-md transition-all duration-500 ${
            revealStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#fda228] animate-pulse shrink-0" />
            {hero.badgeText ?? 'AVAILABLE FOR REMOTE & CONTRACT ENGINEERING'}
          </div>
        )}

        {/* Big Bold Headline with Fluid Clamp Scale */}
        <div className="space-y-1 font-syne select-none mb-6">
          {isElementVisible('heroHeadline1') && (
            <div className={`text-[clamp(2rem,5.5vw,5.2rem)] font-black leading-[0.92] tracking-tight text-white drop-shadow-2xl transition-all duration-600 ${
              revealStep >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
              {hero.headlineLine1 ?? 'FULL-STACK DEVELOPER &'}
            </div>
          )}
          {isElementVisible('heroOutline') && (
            <div className={`text-[clamp(2rem,5.5vw,5.2rem)] font-black leading-[0.92] tracking-tight text-stroke-2 text-transparent hover:text-white drop-shadow-2xl transition-all duration-600 ${
              revealStep >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}>
              {hero.headlineOutline ?? 'SAAS'}
            </div>
          )}
          {isElementVisible('heroHighlight') && (
            <div
              className={`text-[clamp(2rem,5.5vw,5.2rem)] font-black leading-[0.92] tracking-tight drop-shadow-2xl transition-all duration-600 ${
                revealStep >= 3 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}
              style={{ color: cmsData.theme.accentColor || '#fda228' }}
            >
              {hero.headlineHighlight ?? '& AI AUTOMATION'}
            </div>
          )}
        </div>

        {/* Subheading */}
        {isElementVisible('heroBio') && (
          <p className={`max-w-2xl text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light mb-7 transition-all duration-500 ${
            revealStep >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {hero.bioText ?? 'Building production MERN & Next.js SaaS platforms, autonomous LLM AI agents, and enterprise n8n workflow systems that scale.'}
          </p>
        )}

        {/* Feature Pills */}
        <div className={`flex flex-wrap gap-2.5 mb-8 font-mono-code text-[11px] text-zinc-300 transition-all duration-500 ${
          revealStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
            <span className="text-[#fda228]">⚡</span> SaaS Development
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
            <span className="text-emerald-400">🤖</span> AI Agents
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center gap-2">
            <span className="text-sky-400">🔄</span> n8n Automation
          </span>
        </div>

        {/* Action Buttons matching screenshot */}
        <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-500 ${
          revealStep >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {isElementVisible('heroPrimaryCta') && (
            <button
              onClick={onOpenIntake}
              className="group flex items-center justify-between sm:justify-center gap-4 pl-6 pr-3 py-3.5 rounded-full bg-[#fda228] hover:bg-amber-400 text-black font-extrabold text-xs sm:text-sm font-mono-code uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/45 min-h-[52px] cursor-pointer"
              aria-label="Discuss a Project"
            >
              <span>{hero.primaryCtaText ?? 'DISCUSS A PROJECT'}</span>
              <div className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={15} className="text-black stroke-[3]" />
              </div>
            </button>
          )}

          {isElementVisible('heroSecondaryCta') && (
            <button
              onClick={onOpenWhatsApp}
              className="group flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 rounded-full bg-[#1b382b]/80 hover:bg-[#1b382b] border border-[#25D366]/40 text-[#25D366] font-bold text-xs sm:text-sm font-mono-code transition-all min-h-[52px] cursor-pointer backdrop-blur-md"
              aria-label="Chat on WhatsApp"
            >
              <WhatsappLogo className="w-5 h-5" />
              <span>{hero.secondaryCtaText ?? 'Chat on WhatsApp'}</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
