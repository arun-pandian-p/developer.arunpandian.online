import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/cmsData';
import { Workflow, Sparkles } from 'lucide-react';

export const WorkProcessSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono-code font-bold uppercase tracking-wider">
            <Workflow size={14} className="text-amber-600" />
            Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
            Structured 8-Step{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600">
              Delivery Process
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            From initial product discovery to production deployment and ongoing support, every stage is driven by rigorous quality control and technical transparency.
          </p>
        </div>

        {/* 8 Step Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-1.5 rounded-2xl bg-zinc-100/90 border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-amber-400/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-5 sm:p-6 rounded-[calc(1rem-0.25rem)] bg-white border border-zinc-100 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-space-grotesk text-amber-600">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-space-grotesk font-bold text-zinc-900 text-base group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
