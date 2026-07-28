import React from 'react';
import { Sparkles, MessageSquare, ArrowUpRight, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Double-Bezel CTA Banner */}
        <div className="p-2 rounded-[2.5rem] bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-amber-500/20 ring-1 ring-white/10 shadow-2xl">
          <div className="p-8 sm:p-12 rounded-[calc(2.5rem-0.5rem)] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-wrap items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-mono-code text-amber-400 font-bold uppercase tracking-[0.2em]">Start A Collaboration</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-syne">
                Let's Build Something Exceptional
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light">
                Available for SaaS MVP development, custom website engineering, AI agents, and n8n workflow automation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenIntake}
                className="group flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#fda228] hover:bg-amber-400 text-black font-bold text-xs font-mono-code uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
              >
                <span>Start a Project</span>
                <div className="w-9 h-9 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={16} className="text-black" />
                </div>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="group flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-semibold text-xs font-mono-code transition-all"
              >
                <span>WhatsApp Me</span>
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare size={15} className="fill-emerald-400 text-emerald-400" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono-code">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[2px]">
                <img src="/assets/arun-headshot.png" alt="Arun Pandian" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-sm font-bold text-white font-syne uppercase">ARUN PANDIAN</span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Freelance SaaS Developer, AI Agent Engineer & n8n Automation Specialist. Delivering production-quality digital products for startups and founders worldwide.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>● Available for freelance projects</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase">Core Pillars</div>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">SaaS Development</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Website Development</a></li>
              <li><a href="#demos" className="hover:text-amber-400 transition-colors">AI Agents & RAG</a></li>
              <li><a href="#demos" className="hover:text-amber-400 transition-colors">n8n Workflow Automation</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-bold uppercase">Direct Acquisition Channels</div>
            <div className="text-zinc-400 leading-relaxed">
              WhatsApp: <span className="text-white font-bold">+91 8248960558</span><br />
              Platforms: Fiverr · Upwork · Freelancer.com<br />
              Location: India (Remote Worldwide)
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-white/5">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-white/5">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono-code text-zinc-500">
          <div>© {new Date().getFullYear()} Arun Pandian Digital Product Studio. All rights reserved.</div>
          <div>Built with Next.js / React, Tailwind CSS v4, Lenis & GSAP Motion</div>
        </div>

      </div>
    </footer>
  );
};
