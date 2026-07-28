import React from 'react';
import { User, Github, Linkedin, MessageSquare, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

interface AboutSectionProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Photo: Cinematic Studio Dark Portrait (lpb0j8p0xp7) */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden neumorphic-card border border-amber-500/20 group">
            <img 
              src="/assets/arun-studio-dark.png" 
              alt="Arun Pandian - Digital Product Studio Founder" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 space-y-1">
              <div className="text-sm font-bold text-white font-syne">Arun Pandian</div>
              <div className="text-xs text-amber-400 font-mono-code">SaaS Developer · AI Agent Builder · n8n Specialist</div>
            </div>
          </div>
        </div>

        {/* Right Content: Bio & Positioning Statement */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code uppercase tracking-wider">
              <User size={14} />
              About Arun Pandian
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
              I Don't Just Build Websites. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-400">
                I Build Digital Products & Systems.
              </span>
            </h2>

            <p className="text-zinc-300 text-base font-light leading-relaxed">
              I operate as an independent freelance product studio for founders, startups, and growing businesses worldwide. I bridge the gap between high-end aesthetic website design, complex multi-tenant SaaS architecture, autonomous AI agents, and resilient n8n workflow automation.
            </p>
          </div>

          {/* Core Operating Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-1.5">
              <div className="text-xs font-mono-code text-amber-400 font-bold uppercase">Zero Template Slop</div>
              <p className="text-xs text-zinc-400 leading-relaxed">Every interface is custom designed for speed, responsive accuracy, and conversion optimization.</p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 space-y-1.5">
              <div className="text-xs font-mono-code text-indigo-400 font-bold uppercase">Production Quality</div>
              <p className="text-xs text-zinc-400 leading-relaxed">Strict TypeScript, security best practices, multi-tenant workspace isolation, and automated CI/CD.</p>
            </div>
          </div>

          {/* Social & Contact Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800">
            <button
              onClick={onOpenWhatsApp}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono-code flex items-center gap-2 transition-all shadow-lg"
            >
              <MessageSquare size={16} className="fill-black" />
              <span>WhatsApp Direct (+91 8248960558)</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white transition-colors"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <button
              onClick={onOpenIntake}
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 font-semibold text-xs font-mono-code flex items-center gap-2"
            >
              <span>Project Intake Form</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
