import React, { useState } from 'react';
import { CLIENT_PROOF, PROJECTS } from '../data/cmsData';
import { Award, FileText, CheckCircle2, ExternalLink, Eye, X, Shield } from 'lucide-react';

export const CarpediemShowcase: React.FC = () => {
  const carpediem = PROJECTS.find(p => p.id === 'carpediem-tech') || PROJECTS[1];
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono-code uppercase tracking-wider">
          <Award size={14} />
          Client Project & Proof
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          Carpediem Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">Innovations</span>
        </h2>
        <p className="text-zinc-400 text-base font-light leading-relaxed">
          Company Website Development for Carpediem Tech Innovations, validated by an official client letter of appreciation praising technical execution, responsive design, and timely delivery.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Project Details */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl neumorphic-card border border-white/10 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <span className="text-xs font-mono-code text-indigo-400 font-semibold">Client Project</span>
                <h3 className="text-2xl font-bold text-white font-syne">{carpediem.name}</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono-code text-zinc-300">
                {carpediem.status}
              </span>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              {carpediem.description}
            </p>

            {/* Problem / Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-2">
                <div className="text-xs font-mono-code text-amber-400 font-bold uppercase">The Problem</div>
                <p className="text-xs text-zinc-400 leading-relaxed">{carpediem.problem}</p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-2">
                <div className="text-xs font-mono-code text-emerald-400 font-bold uppercase">The Solution</div>
                <p className="text-xs text-zinc-400 leading-relaxed">{carpediem.solution}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <div className="text-xs font-mono-code text-zinc-500 uppercase font-semibold">Technologies Used</div>
              <div className="flex flex-wrap gap-2">
                {carpediem.technologies.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono-code text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono-code">Role: {carpediem.role}</span>
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs font-mono-code flex items-center gap-2 transition-all shadow-lg"
            >
              <FileText size={15} />
              <span>View Client Appreciation</span>
            </button>
          </div>
        </div>

        {/* Right: Client Appreciation Letter Box */}
        <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/30 space-y-6 flex flex-col justify-between neumorphic-card">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-syne">Official Client Recognition</h4>
                <p className="text-xs text-amber-400 font-mono-code">Carpediem Tech Innovations</p>
              </div>
            </div>

            <blockquote className="p-5 rounded-2xl bg-zinc-950 border border-white/10 text-xs text-zinc-300 italic leading-relaxed">
              "{CLIENT_PROOF.quote}"
            </blockquote>

            <div className="space-y-2">
              <div className="text-xs font-mono-code text-zinc-500 uppercase font-semibold">Recognized Achievements</div>
              {CLIENT_PROOF.keyDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-amber-500/30 text-amber-400 font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <Eye size={15} />
            <span>Open Appreciation Document</span>
          </button>
        </div>

      </div>

      {/* Client Appreciation Lightbox Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-amber-500/40 shadow-2xl space-y-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3">
              <Shield className="text-amber-400" size={24} />
              <div>
                <h3 className="text-xl font-bold text-white font-syne">Client Appreciation Letter</h3>
                <p className="text-xs text-zinc-400 font-mono-code">Carpediem Tech Innovations · Web Development</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-4 text-xs font-mono-code text-zinc-300 leading-relaxed">
              <div className="text-amber-400 font-bold uppercase border-b border-zinc-900 pb-2">Verified Letter Transcript</div>
              <p>
                "This letter serves to recognize and appreciate <strong className="text-white">Arun Pandian</strong> for his outstanding contributions in designing and developing our company website."
              </p>
              <p>
                "Arun demonstrated exceptional technical expertise, dedication to detail, responsive layout optimization, and timely execution within our expected delivery timeline."
              </p>
              <p className="text-zinc-500 italic">
                Signed by Management, Carpediem Tech Innovations.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs font-mono-code"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
