import React from 'react';
import { FREELANCE_PLATFORMS } from '../data/cmsData';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const FreelanceChannelsSection: React.FC = () => {
  return (
    <section id="freelance" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 text-xs font-mono-code font-bold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-emerald-600" />
            Verified Freelance Channels
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
            Top Rated Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">
              Global Platforms
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Direct freelance contracts &amp; verified milestone execution on premier hiring marketplaces for Developer Arun Pandian.
          </p>
        </div>

        {/* 3 Column Grid — Fiverr, Upwork, Freelancer.com */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FREELANCE_PLATFORMS.map((platform, idx) => (
            <div
              key={idx}
              className="p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-6 sm:p-8 rounded-[calc(1.5rem-0.25rem)] bg-white border border-zinc-100 space-y-6 h-full flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Top Row — Brand Name & Rating */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-space-grotesk font-bold text-zinc-900 text-xl group-hover:text-amber-600 transition-colors">
                      {platform.name}
                    </h3>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono-code font-bold text-amber-800">
                      <Star size={13} className="fill-amber-500 text-amber-500" />
                      <span>5.0 ({platform.reviewCount})</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[11px] font-mono-code font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {platform.badgeText}
                  </span>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {platform.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono-code">
                  <span className="text-zinc-500 font-medium">Verified Account</span>
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-zinc-900 hover:text-amber-600 transition-colors"
                  >
                    <span>Hire On {platform.name}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
