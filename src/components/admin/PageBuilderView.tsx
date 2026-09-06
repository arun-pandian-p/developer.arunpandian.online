import React, { useState } from 'react';
import {
  Layers,
  Eye,
  EyeOff,
  ChevronUp,
  ChevronDown,
  Palette,
  Plus,
  Trash2,
  Copy,
  Sparkles,
  Sliders,
  Maximize2,
  RotateCcw,
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

interface PageSectionDef {
  id: string;
  name: string;
  description: string;
  defaultBg: string;
}

const DEFAULT_PAGE_SECTIONS: PageSectionDef[] = [
  { id: 'heroSection', name: '01 Hero & Positioning', description: 'Headline, avatar, status beacon, bio & CTA buttons', defaultBg: '#09090b' },
  { id: 'trustMarquee', name: '02 Trust Marquee', description: 'Infinite ticker of core skills and enterprise standards', defaultBg: '#ffffff' },
  { id: 'whatIBuild', name: '03 Core Engineering Pillars', description: 'What I Build tabs: Full-Stack MERN, AI Agents & Automations', defaultBg: '#ffffff' },
  { id: 'projectsCarousel', name: '04 Flagship Projects Carousel', description: 'Interactive horizontal carousel (AI Demo, Zappy, Carpediem)', defaultBg: '#ffffff' },
  { id: 'freelanceSection', name: '05 Freelance & Verified Trust', description: 'Fiverr, Upwork, Freelancer and Direct WhatsApp cards', defaultBg: '#ffffff' },
  { id: 'techStackSection', name: '06 Tech Stack & Engines', description: '20+ verified technologies categorized by domain', defaultBg: '#ffffff' },
  { id: 'workProcessSection', name: '07 Agile Work Process', description: '8-stage sprint workflow from discovery to scaling', defaultBg: '#ffffff' },
  { id: 'aboutSection', name: '08 About Studio & Bio', description: 'Personal engineering philosophy, experience, and direct chat', defaultBg: '#ffffff' },
  { id: 'footerSection', name: '09 Global Footer', description: 'Navigation columns, legal copy, and contact links', defaultBg: '#09090b' },
];

export const PageBuilderView: React.FC = () => {
  const { isElementVisible, toggleElementVisibility, cmsData, updateField } = useCMS();
  const [sections, setSections] = useState<PageSectionDef[]>(DEFAULT_PAGE_SECTIONS);
  const [activeEditingSection, setActiveEditingSection] = useState<string | null>(null);

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const next = [...sections];
    const target = direction === 'up' ? index - 1 : index + 1;
    if (target < 0 || target >= next.length) return;
    const temp = next[index];
    next[index] = next[target];
    next[target] = temp;
    setSections(next);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Visual Page Builder &amp; Section Manager</span>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E8824A] text-xs font-mono font-bold">
              {sections.length} Sections
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Control homepage sections visibility, sequence ordering, and background styling.
          </p>
        </div>
      </div>

      {/* ── Section Cards List ── */}
      <div className="space-y-3.5">
        {sections.map((sec, idx) => {
          const isVisible = isElementVisible(sec.id, true);
          const isEditing = activeEditingSection === sec.id;

          return (
            <div
              key={sec.id}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isEditing
                  ? 'border-[#F29F67] ring-2 ring-orange-500/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="p-4 bg-slate-50/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-black text-slate-900 truncate">{sec.name}</h3>
                    <p className="text-[11px] text-slate-500 truncate">{sec.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleMove(idx, 'up')}
                    disabled={idx === 0}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 disabled:opacity-30 cursor-pointer"
                    title="Move Up"
                  >
                    <ChevronUp size={15} />
                  </button>
                  <button
                    onClick={() => handleMove(idx, 'down')}
                    disabled={idx === sections.length - 1}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 disabled:opacity-30 cursor-pointer"
                    title="Move Down"
                  >
                    <ChevronDown size={15} />
                  </button>
                  <button
                    onClick={() => toggleElementVisibility(sec.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                    title={isVisible ? 'Hide Section' : 'Show Section'}
                  >
                    {isVisible ? <Eye size={15} className="text-emerald-600" /> : <EyeOff size={15} className="text-slate-400" />}
                  </button>
                  <button
                    onClick={() => setActiveEditingSection(isEditing ? null : sec.id)}
                    className={`ml-2 px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      isEditing ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {isEditing ? 'Done' : 'Background'}
                  </button>
                </div>
              </div>

              {/* Background Drawer */}
              {isEditing && (
                <div className="p-5 bg-white border-t border-slate-100 space-y-4">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Palette size={13} className="text-[#E8824A]" />
                    Customize Background for {sec.name}
                  </span>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Background Type</label>
                      <select className="w-full p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold cursor-pointer">
                        <option value="default">Default Palette</option>
                        <option value="solid">Solid Color</option>
                        <option value="gradient">Linear Gradient</option>
                        <option value="image">Image Background</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Overlay Opacity</label>
                      <input type="range" min="0" max="100" defaultValue="80" className="w-full cursor-pointer mt-2" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Blur Filter</label>
                      <input type="range" min="0" max="20" defaultValue="0" className="w-full cursor-pointer mt-2" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
