import React, { useState } from 'react';
import { PROJECTS, SERVICE_PILLARS, CLIENT_PROOF } from '../data/cmsData';
import { X, Layers, Plus, Trash2, Edit3, Save, ShieldCheck, Database, Check } from 'lucide-react';

interface AdminCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminCMSModal: React.FC<AdminCMSModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'services' | 'clientProof'>('projects');
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Layers size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-syne">Studio CMS Admin Dashboard</h3>
              <p className="text-xs text-zinc-400 font-mono-code">Manage Projects, Service Pillars & Client Proof</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {savedNotice && (
              <span className="text-xs font-mono-code text-emerald-400 flex items-center gap-1">
                <Check size={14} /> Changes Saved!
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs font-mono-code flex items-center gap-2"
            >
              <Save size={14} />
              <span>Save CMS State</span>
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 border-b border-zinc-800 pb-3 font-mono-code text-xs">
          {(['projects', 'services', 'clientProof'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl capitalize font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-zinc-800 text-amber-400 border border-white/10'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'projects' && (
          <div className="space-y-4 font-mono-code text-xs">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400 uppercase font-semibold">Active Project Showcase ({PROJECTS.length})</span>
              <button className="flex items-center gap-1 text-emerald-400 hover:underline">
                <Plus size={14} /> Add New Project
              </button>
            </div>

            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-bold text-white font-syne">{proj.name} ({proj.category})</div>
                    <div className="text-zinc-500 text-[11px]">{proj.tagline}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300">
                      <Edit3 size={14} />
                    </button>
                    <button className="p-2 rounded-lg bg-zinc-900 hover:bg-red-950 text-red-400">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-4 font-mono-code text-xs">
            <span className="text-zinc-400 uppercase font-semibold">4 Service Pillars Config</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICE_PILLARS.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                  <div className="font-bold text-amber-400">{p.title}</div>
                  <div className="text-zinc-400 text-[11px]">{p.subtitle}</div>
                  <div className="text-zinc-500 text-[10px]">Stack: {p.techStack.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'clientProof' && (
          <div className="space-y-4 font-mono-code text-xs">
            <span className="text-zinc-400 uppercase font-semibold">Client Proof & Recognition</span>
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <div className="font-bold text-white">{CLIENT_PROOF.companyName}</div>
              <div className="text-amber-400 text-[11px]">{CLIENT_PROOF.projectTitle}</div>
              <div className="text-zinc-400 text-[11px] font-italic">"{CLIENT_PROOF.quote}"</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
