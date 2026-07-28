import React from 'react';
import { Layers, MessageSquare, ArrowUpRight, Github, Linkedin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/30 flex flex-wrap items-center justify-between gap-8 neumorphic-card">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono-code text-amber-400 font-bold uppercase tracking-wider">Start A Collaboration</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase font-syne">
              Let's Build Something Exceptional
            </h3>
            <p className="text-zinc-400 text-sm font-light">
              Available for SaaS MVP development, custom website engineering, AI agents, and n8n workflow automation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenIntake}
              className="px-8 py-4 rounded-2xl bg-[#fda228] text-black font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="px-6 py-4 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} className="fill-emerald-400 text-emerald-400" />
              <span>WhatsApp Direct (+91 8248960558)</span>
            </button>
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white">
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
