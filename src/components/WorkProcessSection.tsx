import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/cmsData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const WorkProcessSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code uppercase tracking-wider">
          <ShieldCheck size={14} />
          Execution Methodology
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          8-Step Product Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-indigo-400">Workflow</span>
        </h2>
        <p className="text-zinc-400 text-base font-light leading-relaxed">
          From initial discovery to continuous production support, every project follows a structured engineering process.
        </p>
      </div>

      {/* 8 Step Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORK_PROCESS_STEPS.map((step, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-2xl neumorphic-card border border-white/5 hover:border-amber-500/40 transition-all duration-300 space-y-3 group"
          >
            <div className="flex items-center justify-between text-xs font-mono-code">
              <span className="text-amber-400 font-bold text-base">{step.number}</span>
              <span className="text-zinc-600 font-mono-code">PHASE</span>
            </div>

            <h3 className="text-lg font-bold text-white font-syne group-hover:text-amber-400 transition-colors">
              {step.title}
            </h3>

            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
