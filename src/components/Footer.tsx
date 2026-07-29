import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { WhatsappLogo, GithubLogo, LinkedinLogo } from './common/BrandLogos';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-12 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        
        {/* CTA Banner */}
        <div className="p-1.5 sm:p-2 rounded-[1.5rem] sm:rounded-[2.5rem] bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-amber-500/20 ring-1 ring-white/10 shadow-2xl">
          <div className="p-6 sm:p-12 rounded-[calc(1.5rem-0.375rem)] sm:rounded-[calc(2.5rem-0.5rem)] bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-6 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-8">
            
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-mono-code text-amber-400 font-bold uppercase tracking-[0.2em]">Start A Collaboration</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase font-syne leading-tight">
                Let's Build Something Exceptional
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light">
                Available for SaaS MVP development, custom website engineering, AI agents, and n8n workflow automation.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row sm:flex-col lg:flex-row items-stretch xs:items-center gap-3">
              <button
                onClick={onOpenIntake}
                className="group flex items-center justify-between pl-5 pr-2 py-2.5 rounded-full bg-[#fda228] hover:bg-amber-400 text-black font-bold text-xs font-mono-code uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 min-h-[48px] cursor-pointer"
                aria-label="Start a project"
              >
                <span>Start a Project</span>
                <div className="w-9 h-9 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={16} className="text-black" />
                </div>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="group flex items-center justify-between pl-5 pr-2.5 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs font-mono-code transition-all min-h-[48px] cursor-pointer"
                aria-label="Contact via WhatsApp"
              >
                <span>WhatsApp Me</span>
                <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsappLogo className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 text-xs font-mono-code">
          
          <div className="sm:col-span-2 lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#fda228] to-[#6366f1] p-[2px] shrink-0">
                <img src="/assets/arun-headshot.webp" alt="Developer Arun Pandian" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-sm font-bold text-white font-syne uppercase">ARUN PANDIAN</span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Freelance SaaS Developer, AI Agent Engineer &amp; n8n Automation Specialist. Delivering production-quality digital products for startups and founders worldwide.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
              <span>Available for freelance projects</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase">Core Pillars</div>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#services" className="hover:text-amber-400 transition-colors py-0.5 block">SaaS Development</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors py-0.5 block">Website Development</a></li>
              <li><a href="#demos" className="hover:text-amber-400 transition-colors py-0.5 block">AI Agents &amp; RAG</a></li>
              <li><a href="#demos" className="hover:text-amber-400 transition-colors py-0.5 block">n8n Workflow Automation</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="text-white font-bold uppercase">Direct Acquisition Channels</div>
            <div className="text-zinc-400 leading-relaxed space-y-1">
              <div>WhatsApp: <span className="text-white font-bold">+91 8248960558</span></div>
              <div>Platforms: Fiverr · Upwork · Freelancer.com</div>
              <div>Location: India (Remote Worldwide)</div>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-10 h-10 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GithubLogo className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-10 h-10 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-white/5 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo className="w-4 h-4 text-[#0A66C2]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] font-mono-code text-zinc-500">
          <div>© {new Date().getFullYear()} Arun Pandian Digital Product Studio. All rights reserved.</div>
          <div className="text-zinc-600">Built with React, Tailwind CSS v4, Lenis &amp; GSAP Motion</div>
        </div>

      </div>
    </footer>
  );
};
