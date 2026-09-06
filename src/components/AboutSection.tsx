import React from 'react';
import { User, ArrowUpRight, ShieldCheck, Code, Bot, Workflow } from 'lucide-react';
import { WhatsappLogo, GithubLogo, LinkedinLogo } from './common/BrandLogos';
import { useCMS } from '../context/CMSContext';

interface AboutSectionProps {
  onOpenWhatsApp: () => void;
  onOpenIntake: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenWhatsApp, onOpenIntake }) => {
  const { cmsData, isElementVisible } = useCMS();
  const about = cmsData.about;

  if (!isElementVisible('aboutSection', true)) return null;

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* Background White Grid Texture */}
      <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column — Portrait Card */}
          {isElementVisible('aboutPortrait', true) && (
            <div className="lg:col-span-5">
              <div className="p-2 rounded-3xl bg-zinc-100/90 border border-zinc-200/90 shadow-sm relative group">
                <div className="relative aspect-[3/4] rounded-[calc(1.5rem-0.25rem)] overflow-hidden bg-zinc-900 border border-zinc-200">
                  <img 
                    src={about.avatarUrl || '/assets/arun-studio-dark.webp'} 
                    alt="Developer Arun Pandian - MERN Stack & AI Automation Engineer" 
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Floating Bio Pill */}
                  {isElementVisible('aboutTagline', true) && (
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg space-y-1">
                      <div className="text-sm font-bold font-space-grotesk text-zinc-900">
                        Developer Arun Pandian
                      </div>
                      <div className="text-xs text-amber-700 font-mono-code font-semibold">
                        {about.tagline || 'MERN Stack · AI Automation · n8n Specialist'}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Right Column — Narrative & Expertise */}
          <div className={`${isElementVisible('aboutPortrait', true) ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-8`}>
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

              {isElementVisible('aboutBio1', true) && (
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {about.bioParagraph1 || "I am Arun Pandian, a passionate Full-Stack Engineer and AI Systems Architect based in Coimbatore, Tamil Nadu. I specialize in turning complex product specifications into resilient, high-converting digital realities."}
                </p>
              )}

              {isElementVisible('aboutBio2', true) && (
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {about.bioParagraph2 || "From building multi-tenant SaaS platforms like Zappy to autonomous LangChain RAG agents and n8n backend pipelines, I deliver end-to-end software solutions for founders and enterprises globally."}
                </p>
              )}
            </div>

            {/* Quick Badges Grid */}
            {isElementVisible('aboutBadges', true) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-code text-xs">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold">
                    <Code size={16} className="text-amber-600" /> Clean Code
                  </div>
                  <div className="text-[11px] text-zinc-500">TypeScript, Next.js &amp; PostgreSQL</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold">
                    <Bot size={16} className="text-emerald-600" /> AI Systems
                  </div>
                  <div className="text-[11px] text-zinc-500">GPT-4o, Claude &amp; RAG Vector DBs</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold">
                    <Workflow size={16} className="text-indigo-600" /> Workflows
                  </div>
                  <div className="text-[11px] text-zinc-500">n8n, Webhooks &amp; Automated APIs</div>
                </div>
              </div>
            )}

            {/* Direct Connect Actions */}
            {isElementVisible('aboutActions', true) && (
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200">
                <button
                  onClick={onOpenWhatsApp}
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-mono-code font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-[#25D366]/20 cursor-pointer"
                >
                  <WhatsappLogo className="w-4 h-4 text-white" />
                  <span>WhatsApp ({about.whatsappNumber || '+91 8248960558'})</span>
                </button>

                <button
                  onClick={onOpenIntake}
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono-code font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <span>Hire Arun Pandian</span>
                  <ArrowUpRight size={15} />
                </button>

                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href={about.githubUrl || 'https://github.com/arun-pandian-p'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubLogo className="w-4 h-4" />
                  </a>
                  <a
                    href={about.linkedinUrl || 'https://linkedin.com/in/arunpandian-p'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinLogo className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
