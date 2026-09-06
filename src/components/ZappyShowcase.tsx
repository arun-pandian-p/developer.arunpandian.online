import React, { useState } from 'react';
import { Layers, ShieldCheck, ArrowUpRight, CheckCircle2, Globe, Sparkles, Building2, Users, CreditCard, ExternalLink, Star } from 'lucide-react';
import {
  NextjsLogo,
  ReactLogo,
  TypescriptLogo,
  SupabaseLogo,
  PostgresqlLogo,
  PrismaLogo,
  StripeLogo,
  TailwindLogo,
  VercelLogo
} from './common/BrandLogos';
import { useCMS } from '../context/CMSContext';

export const ZappyShowcase: React.FC = () => {
  const { cmsData } = useCMS();
  const zappySlide = (cmsData.showcaseSlides || []).find((s) => s.id === 'zappy-saas-slide' || s.type === 'zappy-saas');

  const [activeWorkspace, setActiveWorkspace] = useState<'acme' | 'stark' | 'apex'>('acme');

  const title = zappySlide?.title || 'Zappy Multi-Tenant SaaS Architecture';
  const tagline = zappySlide?.tagline || 'Multi-Tenant Architecture with Tenant Isolation & Metered Subscriptions';
  const description = zappySlide?.description || 'Live multi-workspace SaaS application built for organizations requiring workspace isolation, custom subscription tiers, and domain routing.';
  const previewImage = zappySlide?.mediaUrl || '/assets/zappy-hero-preview.webp';
  const liveUrl = zappySlide?.liveUrl || 'https://zappy.ind.in';

  const workspaces = {
    acme: { name: 'Acme Corp Studio', plan: 'Enterprise Pro', members: 24, revenue: '$14,800/mo', color: 'border-amber-500 text-amber-700 bg-amber-50' },
    stark: { name: 'Stark AI Labs', plan: 'Scale Tier', members: 12, revenue: '$8,400/mo', color: 'border-emerald-500 text-emerald-700 bg-emerald-50' },
    apex: { name: 'Apex Digital Global', plan: 'Growth Tier', members: 8, revenue: '$4,200/mo', color: 'border-indigo-500 text-indigo-700 bg-indigo-50' }
  };

  return (
    <section id="saas-showcase" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono-code font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-amber-600" />
              Featured Flagship SaaS Project
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
              {title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600">
                SaaS Architecture
              </span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono-code font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer shrink-0"
          >
            <Globe size={16} />
            <span>Launch Live App ({liveUrl.replace('https://', '')})</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Hero Half-Image & Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column — Hero Image Screen Capture Card (Half Width) */}
          <div className="lg:col-span-6 p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div className="p-4 sm:p-5 rounded-[calc(1.5rem-0.25rem)] bg-white border border-zinc-100 flex-1 flex flex-col space-y-4">
              
              {/* Fake Browser Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-[11px] font-mono-code text-zinc-700 flex items-center gap-1.5 transition-colors font-medium truncate max-w-[200px]"
                >
                  <Globe size={12} className="text-emerald-600 shrink-0" />
                  <span className="truncate">{liveUrl}</span>
                  <ExternalLink size={11} className="text-zinc-400 shrink-0" />
                </a>
                <span className="text-[10px] font-mono-code text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200 shrink-0">
                  Live SaaS
                </span>
              </div>

              {/* Hero Screenshot Preview Image */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 group shadow-md flex-1 min-h-[260px] bg-zinc-950">
                <img
                  src={previewImage}
                  alt={`${title} Interface Capture`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/zappy-hero-preview.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-mono-code font-bold text-zinc-900 truncate">
                      {liveUrl.replace('https://', '')} Screen Capture
                    </span>
                  </div>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono-code text-amber-700 font-bold hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Client Live Feedback Badge */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between text-xs font-mono-code text-zinc-800">
                <div className="flex items-center gap-2">
                  <Star size={15} className="text-amber-500 fill-amber-400" />
                  <span className="font-bold">Client Production Feedback:</span>
                </div>
                <span className="text-zinc-600 font-medium">"99.9% Uptime · Multi-Tenant Ready"</span>
              </div>

            </div>
          </div>

          {/* Right Column — Architecture Overview & Tenant Switcher (Half Width) */}
          <div className="lg:col-span-6 p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[calc(1.5rem-0.25rem)] bg-white border border-zinc-100 space-y-6 flex-1">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Live Production Architecture
                  </span>
                  <a
                    href="https://zappy.ind.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-code text-zinc-500 hover:text-amber-600 flex items-center gap-1 font-semibold"
                  >
                    <span>zappy.ind.in</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900">
                  {tagline}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(zappySlide?.features || [
                  'Subdomain Multi-Tenant Isolation',
                  'Enterprise Role-Based Access Control',
                  'Automated Stripe Recurring Billing',
                  'PostgreSQL Row-Level Security'
                ]).map((feat: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-800 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Live Tenant Switcher Box */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <Building2 size={15} className="text-amber-600" />
                    <span className="text-xs font-mono-code font-bold text-zinc-900 uppercase">
                      Live Tenant Workspace Switcher
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded font-semibold">
                    Multi-Tenant Active
                  </span>
                </div>

                {/* Workspace Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  {(['acme', 'stark', 'apex'] as const).map((wsKey) => (
                    <button
                      key={wsKey}
                      onClick={() => setActiveWorkspace(wsKey)}
                      className={`p-2 rounded-xl border text-center font-mono-code text-xs transition-all cursor-pointer ${
                        activeWorkspace === wsKey
                          ? 'bg-white border-amber-400 font-bold text-zinc-900 shadow-xs'
                          : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      {wsKey.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Selected Workspace Card */}
                <div className={`p-3.5 rounded-xl border ${workspaces[activeWorkspace].color} space-y-2 transition-all`}>
                  <div className="flex items-center justify-between">
                    <span className="font-space-grotesk font-bold text-xs sm:text-sm text-zinc-900">
                      {workspaces[activeWorkspace].name}
                    </span>
                    <span className="text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-700">
                      {workspaces[activeWorkspace].plan}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-code text-zinc-600 pt-2 border-t border-zinc-200/60">
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Team Members:</span>
                      <span className="font-bold text-zinc-800">{workspaces[activeWorkspace].members} Users</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Workspace Billing:</span>
                      <span className="font-bold text-zinc-800">{workspaces[activeWorkspace].revenue}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Official Production Tech Stack Badges */}
        <div className="p-6 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 space-y-3">
          <h4 className="text-xs font-mono-code font-bold text-zinc-900 uppercase tracking-wider">
            Official Technologies Used in Zappy SaaS
          </h4>
          <div className="flex flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <NextjsLogo className="w-4 h-4 text-black" />
              <span>Next.js 16</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <ReactLogo className="w-4 h-4 text-[#00D8FF]" />
              <span>React 19</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <TypescriptLogo className="w-4 h-4" />
              <span>TypeScript</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <SupabaseLogo className="w-4 h-4 text-[#3ECF8E]" />
              <span>Supabase DB</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <PrismaLogo className="w-4 h-4 text-indigo-600" />
              <span>Prisma ORM</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <StripeLogo className="w-4 h-4 text-[#635BFF]" />
              <span>Stripe Engine</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <TailwindLogo className="w-4 h-4 text-[#38BDF8]" />
              <span>Tailwind CSS</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <VercelLogo className="w-4 h-4 text-black" />
              <span>Vercel Platform</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
