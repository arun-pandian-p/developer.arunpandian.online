import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ExternalLink, Eye, Layers, ShieldCheck, Zap } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { VerticalShowcaseItem } from '../types/cms';

const DEFAULT_SHOWCASE_ITEMS: VerticalShowcaseItem[] = [
  {
    id: 'showcase-1',
    title: 'Zappy Multi-Tenant SaaS Platform',
    category: 'SaaS Platform',
    caption: 'Real-time Restaurant Canvas & Stripe Billing',
    imageUrl: '/assets/zappy-hero-preview.webp',
    projectSlug: 'project-zappy',
    displayOrder: 1,
    active: true,
  },
  {
    id: 'showcase-2',
    title: 'AI Agent Demo Assistant & Document RAG',
    category: 'Autonomous AI',
    caption: 'Vector Retrieval with LangChain & Claude 3.7',
    imageUrl: '/assets/arun-banner-brand.png',
    projectSlug: 'project-ai-demo',
    displayOrder: 2,
    active: true,
  },
  {
    id: 'showcase-3',
    title: 'Carpediem Tech Corporate Platform',
    category: 'Enterprise Web',
    caption: 'Agency-grade Performance & Verified Client MSME',
    imageUrl: '/assets/carpediem-hero-preview.webp',
    projectSlug: 'project-carpediem',
    displayOrder: 3,
    active: true,
  },
  {
    id: 'showcase-4',
    title: 'Full-Stack MERN & Next.js Architecture',
    category: 'Full-Stack Engine',
    caption: 'High-Concurrency PostgreSQL & Docker CI/CD',
    imageUrl: '/assets/hero.png',
    projectSlug: 'project-ai-demo',
    displayOrder: 4,
    active: true,
  },
  {
    id: 'showcase-5',
    title: 'Client Proof & Recommendation Letter',
    category: 'Client Verification',
    caption: 'Signed Official Appreciation Document (PDF)',
    imageUrl: '/assets/carpediem-hero-preview.webp',
    projectSlug: 'project-proof',
    displayOrder: 5,
    active: true,
  },
];

interface VerticalProjectShowcaseProps {
  onOpenIntake?: () => void;
  onOpenWhatsApp?: () => void;
}

export const VerticalProjectShowcase: React.FC<VerticalProjectShowcaseProps> = ({
  onOpenIntake,
  onOpenWhatsApp,
}) => {
  const navigate = useNavigate();
  const { cmsData, isElementVisible } = useCMS();
  const [isHovered, setIsHovered] = useState(false);

  const config = cmsData.verticalShowcase;
  if (config && config.enabled === false) return null;
  if (!isElementVisible('verticalShowcase', true)) return null;

  const rawItems = config?.items && config.items.length > 0 ? config.items : DEFAULT_SHOWCASE_ITEMS;
  const items = rawItems.filter((i) => i.active !== false);

  // Duplicate the items array for the seamless continuous vertical marquee loop
  const loopItems = [...items, ...items];

  const handleCardClick = (item: VerticalShowcaseItem) => {
    if (item.projectSlug) {
      navigate(`/topic/projects/${item.projectSlug}`);
    } else if (item.targetUrl) {
      if (item.targetUrl.startsWith('http')) {
        window.open(item.targetUrl, '_blank', 'noopener,noreferrer');
      } else {
        navigate(item.targetUrl);
      }
    } else {
      navigate('/projects');
    }
  };

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 lg:pb-28 bg-[#09090b] text-white border-b border-zinc-800/80 overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* 1. LEFT COLUMN: CONCISE HERO TYPOGRAPHY, VALUE METRICS & CTAS      */}
          {/* ─────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Section Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-code font-bold uppercase tracking-wider shadow-sm">
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              <span>{config?.sectionBadge || 'AVAILABLE FOR REMOTE & CONTRACT'}</span>
            </div>

            {/* Concise Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-space-grotesk tracking-tight text-white leading-[1.08]">
                {config?.heading || 'SaaS Platforms'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F29F67] via-amber-400 to-[#E8824A]">
                  {config?.highlightText || '& AI Systems.'}
                </span>
              </h1>
            </div>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light max-w-lg">
              {config?.description ||
                'Engineering high-performance web platforms, autonomous LLM agents, and automated enterprise pipelines that scale.'}
            </p>

            {/* Feature / Metric Highlight Pills */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-sm space-y-0.5">
                <div className="text-xl font-black text-[#F29F67] font-mono-code">20+ Projects</div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-bold uppercase">Shipped Production</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-sm space-y-0.5">
                <div className="text-xl font-black text-emerald-400 font-mono-code">&lt; 600ms</div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-bold uppercase">Average Latency</div>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => {
                  if (onOpenIntake) onOpenIntake();
                  else navigate('/projects');
                }}
                className="group flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-zinc-950 font-black text-xs sm:text-sm font-mono-code uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
              >
                <span>{config?.ctaText || 'DISCUSS A PROJECT'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onOpenWhatsApp) onOpenWhatsApp();
                  else window.open('https://wa.me/918248960558', '_blank');
                }}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm font-mono-code border border-zinc-700 transition-colors cursor-pointer min-h-[48px]"
              >
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* 2. RIGHT COLUMN: CONTINUOUS VERTICAL LOOP SHOWCASE (DUAL STAGGERED) */}
          {/* ─────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 relative h-[560px] sm:h-[640px] lg:h-[720px] w-full overflow-hidden">
            
            {/* Top & Bottom Fade Masks for the Seamless Infinite Illusion */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#09090b] via-[#09090b]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent z-20 pointer-events-none" />

            {/* Vertical Showcase Columns Container with Native CSS Loop */}
            <div
              className="h-full grid grid-cols-1 sm:grid-cols-2 gap-5 px-1 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              
              {/* ── Column 1: Upward Continuous Loop ── */}
              <div
                className={`flex flex-col gap-5 will-change-transform ${
                  isHovered ? 'animate-marquee-vertical-paused' : 'animate-marquee-vertical'
                }`}
                style={{
                  animationDuration: config?.speed === 'fast' ? '20s' : config?.speed === 'slow' ? '45s' : '30s',
                }}
              >
                {loopItems.map((item, idx) => (
                  <div
                    key={`col1-${item.id}-${idx}`}
                    onClick={() => handleCardClick(item)}
                    className="group relative bg-zinc-900/90 rounded-3xl border border-zinc-800/90 hover:border-[#F29F67]/60 shadow-2xl shadow-black/80 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden shrink-0"
                  >
                    {/* Image Box */}
                    <div className="aspect-[16/10] bg-zinc-950 relative overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.altText || item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/zappy-hero-preview.webp';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 text-[10px] font-mono-code font-bold uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Hover Arrow Icon */}
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={12} className="text-[#F29F67]" />
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                        <h4 className="text-xs font-black tracking-tight drop-shadow-sm text-white line-clamp-1">
                          {item.title}
                        </h4>
                        {item.caption && (
                          <p className="text-[10px] text-zinc-300 font-medium truncate">
                            {item.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Column 2: Staggered Upward Continuous Loop (Hidden on extra small mobile) ── */}
              <div
                className={`hidden sm:flex flex-col gap-5 will-change-transform ${
                  isHovered ? 'animate-marquee-vertical-paused' : 'animate-marquee-vertical-reverse'
                }`}
                style={{
                  animationDuration: config?.speed === 'fast' ? '24s' : config?.speed === 'slow' ? '48s' : '34s',
                }}
              >
                {[...loopItems].reverse().map((item, idx) => (
                  <div
                    key={`col2-${item.id}-${idx}`}
                    onClick={() => handleCardClick(item)}
                    className="group relative bg-zinc-900/90 rounded-3xl border border-zinc-800/90 hover:border-[#F29F67]/60 shadow-2xl shadow-black/80 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden shrink-0"
                  >
                    {/* Image Box */}
                    <div className="aspect-[16/10] bg-zinc-950 relative overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.altText || item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/carpediem-hero-preview.webp';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 text-[10px] font-mono-code font-bold uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Hover Arrow Icon */}
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={12} className="text-[#F29F67]" />
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                        <h4 className="text-xs font-black tracking-tight drop-shadow-sm text-white line-clamp-1">
                          {item.title}
                        </h4>
                        {item.caption && (
                          <p className="text-[10px] text-zinc-300 font-medium truncate">
                            {item.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
