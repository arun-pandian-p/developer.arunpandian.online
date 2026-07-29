import React, { useState } from 'react';
import { PROJECTS, CLIENT_PROOF } from '../data/cmsData';
import { Award, FileText, CheckCircle2, X, ExternalLink, Sparkles, Building, ArrowUpRight, Globe, Star } from 'lucide-react';
import { NextjsLogo, ReactLogo, TypescriptLogo, TailwindLogo, VercelLogo } from './common/BrandLogos';

export const CarpediemShowcase: React.FC = () => {
  const carpediem = PROJECTS.find((p) => p.id === 'carpediem-tech') || PROJECTS[1];
  const [showLetterModal, setShowLetterModal] = useState(false);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-800 text-xs font-mono-code font-bold uppercase tracking-wider">
              <Award size={14} className="text-indigo-600" />
              Verified Client Project &amp; Live Deployment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
              Carpediem Tech{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600">
                Innovations Platform
              </span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Corporate web application engineered with agency visual design standards, fast Lighthouse performance, and official client appreciation recognition.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap shrink-0">
            <a
              href="https://carpediemtechinnovations.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono-code font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
            >
              <Globe size={16} />
              <span>Visit Live Website</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              onClick={() => setShowLetterModal(true)}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono-code font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <FileText size={16} className="text-amber-400" />
              <span>Inspect Document</span>
            </button>
          </div>
        </div>

        {/* Hero Half-Image & Proof Grid */}
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
                  href="https://carpediemtechinnovations.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-[11px] font-mono-code text-zinc-700 flex items-center gap-1.5 transition-colors font-medium"
                >
                  <Globe size={12} className="text-indigo-600" />
                  <span>https://carpediemtechinnovations.in/</span>
                  <ExternalLink size={11} className="text-zinc-400" />
                </a>
                <span className="text-[10px] font-mono-code text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-bold border border-indigo-200">
                  Live Site
                </span>
              </div>

              {/* Hero Screenshot Preview Image */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 group shadow-md flex-1 min-h-[260px] bg-zinc-950">
                <img
                  src="/assets/carpediem-hero-preview.png"
                  alt="Carpediem Tech Innovations Hero Interface Capture - Full-Stack Web Development"
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-mono-code font-bold text-zinc-900">carpediemtechinnovations.in Hero Screen Capture</span>
                  </div>
                  <a
                    href="https://carpediemtechinnovations.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono-code text-indigo-700 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Client Live Feedback Badge */}
              <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 flex items-center justify-between text-xs font-mono-code text-zinc-800">
                <div className="flex items-center gap-2">
                  <Star size={15} className="text-amber-500 fill-amber-400" />
                  <span className="font-bold">Live Client Feedback:</span>
                </div>
                <span className="text-zinc-600 font-medium">"5/5 Star Rating · Exceptional Quality"</span>
              </div>

            </div>
          </div>

          {/* Right Column — Project Overview & Official Proof Card (Half Width) */}
          <div className="lg:col-span-6 p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[calc(1.5rem-0.25rem)] bg-white border border-zinc-100 space-y-6 flex-1">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    Corporate Web Platform
                  </span>
                  <span className="text-xs font-mono-code text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
                    ✓ Client Verified
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk text-zinc-900">
                  {carpediem.tagline}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {carpediem.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {carpediem.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-800 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Appreciation Proof Card */}
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                    <Award size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-bold text-zinc-900 text-sm">
                      Official Client Proof
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-mono-code">
                      Carpediem Tech Innovations
                    </p>
                  </div>
                </div>

                <blockquote className="text-xs text-zinc-700 font-medium leading-relaxed italic p-3 rounded-xl bg-white border border-zinc-200/80">
                  "{CLIENT_PROOF.quote}"
                </blockquote>

                <div className="flex items-center justify-between text-xs font-mono-code pt-1">
                  <a
                    href="https://carpediemtechinnovations.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-bold flex items-center gap-1"
                  >
                    <span>carpediemtechinnovations.in</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <button
                    onClick={() => setShowLetterModal(true)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white font-mono-code text-[11px] font-bold cursor-pointer"
                  >
                    Inspect Document
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Official Tech Stack */}
        <div className="p-6 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 space-y-3">
          <h4 className="text-xs font-mono-code font-bold text-zinc-900 uppercase tracking-wider">
            Official Technologies Used in Carpediem Tech
          </h4>
          <div className="flex flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-800 font-semibold shadow-2xs">
              <NextjsLogo className="w-4 h-4 text-black" />
              <span>Next.js</span>
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

      {/* Client Appreciation Modal */}
      {showLetterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl bg-white rounded-3xl border border-zinc-200 shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-50 border border-amber-200">
                  <Award size={20} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold text-zinc-900 text-lg">
                    Client Appreciation Letter
                  </h3>
                  <p className="text-xs font-mono-code text-zinc-500">
                    Carpediem Tech Innovations (carpediemtechinnovations.in)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowLetterModal(false)}
                className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-zinc-700 leading-relaxed space-y-2">
                <p className="font-bold text-zinc-900">Official Commendation Summary:</p>
                <p>{CLIENT_PROOF.summary}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono-code font-bold text-zinc-900 uppercase">Key Project Deliverables</h4>
                <div className="space-y-2">
                  {CLIENT_PROOF.keyDeliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 font-medium">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
              <a
                href="https://carpediemtechinnovations.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-code text-indigo-600 hover:underline font-bold flex items-center gap-1"
              >
                <span>carpediemtechinnovations.in</span>
                <ArrowUpRight size={13} />
              </a>
              <button
                onClick={() => setShowLetterModal(false)}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white font-mono-code text-xs font-bold cursor-pointer"
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
