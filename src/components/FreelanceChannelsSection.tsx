import React from 'react';
import { FREELANCE_PLATFORMS } from '../data/cmsData';
import { Star, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const FreelanceChannelsSection: React.FC = () => {
  return (
    <section id="freelance" className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-code uppercase tracking-wider">
          <ShieldCheck size={14} />
          Freelance Acquisition Channels
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          Available On The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Platforms You Trust</span>
        </h2>
        <p className="text-zinc-400 text-base font-light leading-relaxed">
          Hire me directly on Fiverr, Upwork, or Freelancer.com with escrow protection, milestone-based delivery, and 5-star verified reviews.
        </p>
      </div>

      {/* 3 Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FREELANCE_PLATFORMS.map((platform, idx) => (
          <div 
            key={idx}
            className="p-8 rounded-3xl neumorphic-card border border-white/10 space-y-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white font-syne">{platform.name}</span>
                <span 
                  className="px-3 py-1 rounded-full text-xs font-mono-code font-bold"
                  style={{ backgroundColor: `${platform.color}20`, color: platform.color, border: `1px solid ${platform.color}40` }}
                >
                  {platform.badgeText}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs font-mono-code">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">{platform.rating.toFixed(1)}</span>
                <span className="text-zinc-500">({platform.reviewCount} Reviews)</span>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-mono-code text-zinc-500 uppercase">Platform Highlights</div>
                {platform.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={platform.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-zinc-900 group-hover:bg-zinc-800 border border-white/10 text-white font-bold text-xs font-mono-code flex items-center justify-center gap-2 transition-all"
            >
              <span>View {platform.name} Profile</span>
              <ExternalLink size={14} className="text-zinc-400" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
