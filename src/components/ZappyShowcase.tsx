import React, { useState } from 'react';
import { PROJECTS } from '../data/cmsData';
import { Layers, ShieldCheck, ExternalLink, Building2, Check } from 'lucide-react';

export const ZappyShowcase: React.FC = () => {
  const zappy = PROJECTS.find(p => p.id === 'zappy-saas') || PROJECTS[0];
  const [selectedTenant, setSelectedTenant] = useState<'tenant-a' | 'tenant-b' | 'tenant-c'>('tenant-a');

  const tenantData = {
    'tenant-a': {
      name: 'Acme Enterprises',
      domain: 'acme.zappy.ind.in',
      plan: 'Enterprise Multi-Tenant',
      users: 142,
      mrr: '$4,850/mo',
      themeColor: '#fda228',
      role: 'Organization Owner'
    },
    'tenant-b': {
      name: 'TechLab Dynamics',
      domain: 'techlab.zappy.ind.in',
      plan: 'Pro Team Tier',
      users: 48,
      mrr: '$1,200/mo',
      themeColor: '#6366f1',
      role: 'Workspace Administrator'
    },
    'tenant-c': {
      name: 'Global Retail Systems',
      domain: 'globalretail.zappy.ind.in',
      plan: 'Growth Tier',
      users: 210,
      mrr: '$8,400/mo',
      themeColor: '#10b981',
      role: 'Platform SuperAdmin'
    }
  };

  const current = tenantData[selectedTenant];

  return (
    <section id="saas-showcase" className="py-28 lg:py-36 px-6 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono-code uppercase tracking-[0.2em]">
          <Layers size={13} />
          Primary SaaS Product Proof
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight font-syne">
          Zappy Multi-Tenant <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-400">SaaS Architecture</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
          Zappy (<span className="text-white font-mono-code font-bold">zappy.ind.in</span>) showcases full-stack multi-tenancy: dynamic tenant domain resolution, workspace isolation, role-based access control, and Stripe tiered billing.
        </p>
      </div>

      {/* Double-Bezel SaaS Showcase Container */}
      <div className="p-2 rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl">
        <div className="rounded-[calc(2.5rem-0.5rem)] bg-zinc-950 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
          
          {/* Browser Top Bar */}
          <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono-code text-zinc-400 px-3 py-1 rounded-full bg-zinc-950 border border-white/5">
                https://{current.domain}
              </span>
            </div>

            <a
              href={zappy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono-code font-semibold text-amber-400 hover:underline"
            >
              <span>Visit Live Platform (zappy.ind.in)</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Interactive Workspace Simulator Body */}
          <div className="p-8 sm:p-10 space-y-8 bg-zinc-950/60">
            
            {/* Tenant Selector Buttons */}
            <div className="space-y-3">
              <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider font-semibold">
                Interactive Workspace Switcher Demo — Try Clicking Tenants:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {(['tenant-a', 'tenant-b', 'tenant-c'] as const).map((key) => {
                  const item = tenantData[key];
                  const isSelected = selectedTenant === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedTenant(key)}
                      className={`p-4 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between ${
                        isSelected
                          ? 'bg-zinc-900 border-amber-400 shadow-lg scale-[1.02]'
                          : 'bg-zinc-950/80 border-white/5 hover:border-white/20 text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Building2 size={18} style={{ color: item.themeColor }} />
                        <div>
                          <div className="text-xs font-bold text-white font-mono-code">{item.name}</div>
                          <div className="text-[10px] text-zinc-500">{item.domain}</div>
                        </div>
                      </div>
                      {isSelected && <Check size={16} className="text-amber-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Workspace State Dashboard */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-xl font-bold text-white font-syne flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: current.themeColor }}></span>
                    {current.name} Workspace
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono-code mt-1">Tenant Domain: {current.domain}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-mono-code">
                    Workspace Isolated 200 OK
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase">Active Users</div>
                  <div className="text-xl font-bold text-white font-mono-code">{current.users}</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase">Subscription MRR</div>
                  <div className="text-xl font-bold text-amber-400 font-mono-code">{current.mrr}</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase">Plan Tier</div>
                  <div className="text-xs font-bold text-indigo-300 font-mono-code mt-1">{current.plan}</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase">Your Permission</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono-code mt-1">{current.role}</div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="pt-2">
                <div className="text-[10px] font-mono-code text-zinc-500 uppercase mb-3 font-semibold">Architectural Highlights</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                  {zappy.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
