import React from 'react';
import { User, ArrowUpRight, ShieldCheck, Code, Bot, Workflow } from 'lucide-react';
import { WhatsappLogo, GithubLogo, LinkedinLogo } from './common/BrandLogos';

interface AboutSectionProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column — Portrait Card */}
          <div className="lg:col-span-5">
            <div className="p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm relative group">
              <div className="relative aspect-[3/4] rounded-[calc(1.5rem-0.25rem)] overflow-hidden bg-zinc-900 border border-zinc-200">
                <img 
                  src="/assets/arun-studio-dark.png" 
                  alt="Developer Arun Pandian - MERN Stack & AI Automation Engineer" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Bio Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg space-y-1">
                  <div className="text-sm font-bold font-space-grotesk text-zinc-900">
                    Developer Arun Pandian
                  </div>
                  <div className="text-xs text-amber-700 font-mono-code font-semibold">
                    MERN Stack · AI Automation · n8n Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Narrative & Expertise */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono-code font-bold uppercase tracking-wider">
                <User size={13} className="text-amber-600" />
                About Developer Arun Pandian
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-zinc-900 leading-tight">
                Building High-Impact Web Applications &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600">
                  Autonomous AI Systems
                </span>
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                I am a full-stack MERN stack developer and AI automation engineer. I help founders, startups, and enterprises engineer production-ready SaaS platforms, custom web applications, autonomous LLM agents, and automated n8n business workflows.
              </p>
            </div>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Code size={16} className="text-amber-600" />
                  <span className="text-xs font-mono-code font-bold text-zinc-900 uppercase">MERN &amp; Next.js SaaS</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  Multi-tenant workspace isolation, Stripe subscriptions, Role-Based Access Control, and clean REST/GraphQL APIs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Bot size={16} className="text-emerald-600" />
                  <span className="text-xs font-mono-code font-bold text-zinc-900 uppercase">AI Agents &amp; RAG Vector</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  Custom OpenAI &amp; Claude LLM agent workflows, Pinecone vector search, function calling, and WhatsApp bots.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Workflow size={16} className="text-rose-600" />
                  <span className="text-xs font-mono-code font-bold text-zinc-900 uppercase">n8n Workflow Automation</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  Self-hosted n8n deployment, webhook synchronization, CRM lead routing, and automated alert pipelines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-indigo-600" />
                  <span className="text-xs font-mono-code font-bold text-zinc-900 uppercase">Clean UI/UX Architecture</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  Space Grotesk &amp; Inter typography, responsive double-bezel cards, fast Core Web Vitals, and 0 dummy text.
                </p>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="pt-4 border-t border-zinc-200 space-y-4">
              <button
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-500 text-white font-mono-code text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <WhatsappLogo className="w-5 h-5" />
                <span>WhatsApp Direct (+91 8248960558)</span>
              </button>

              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 font-mono-code text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <GithubLogo className="w-4 h-4 text-black" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 font-mono-code text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <LinkedinLogo className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>

                <button
                  onClick={onOpenIntake}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono-code text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <span>Project Intake Form</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
