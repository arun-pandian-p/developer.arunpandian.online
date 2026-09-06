import React, { useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Copy,
  Layers,
  Sparkles,
  Bot,
  Workflow,
  Zap,
  Code,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Search,
} from 'lucide-react';
import { ServiceItem } from '../../types/cms';

interface ServiceCardsViewProps {
  services: ServiceItem[];
  onSaveServices: (services: ServiceItem[]) => void;
}

export const ServiceCardsView: React.FC<ServiceCardsViewProps> = ({
  services,
  onSaveServices,
}) => {
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.technologies || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCreateService = () => {
    const newSrv: ServiceItem = {
      id: 'srv-' + Date.now(),
      title: 'New Engineering Service',
      slug: 'service-' + Date.now(),
      badge: 'CUSTOM',
      shortDescription: 'Summary of engineering deliverables and architecture.',
      fullDescription: 'Comprehensive breakdown of client deliverables, service standards, and roadmap.',
      technologies: ['React 19', 'Next.js', 'PostgreSQL', 'TypeScript'],
      features: ['High velocity delivery', 'Type safe architecture', 'Production tested'],
      pricingDisplay: 'From $1,200 / sprint',
      ctaText: 'Start Project',
      ctaLink: '/services',
      displayOrder: services.length + 1,
      featured: true,
      active: true,
    };
    onSaveServices([...services, newSrv]);
    setEditingService(newSrv);
  };

  const handleSaveEditingService = (updated: ServiceItem) => {
    const next = services.map((s) => (s.id === updated.id ? updated : s));
    onSaveServices(next);
    setEditingService(null);
  };

  const handleDeleteService = (id: string) => {
    onSaveServices(services.filter((s) => s.id !== id));
    if (editingService?.id === id) setEditingService(null);
  };

  const handleDuplicateService = (srv: ServiceItem) => {
    const dup: ServiceItem = {
      ...srv,
      id: 'srv-' + Date.now(),
      title: srv.title + ' (Copy)',
      slug: srv.slug + '-copy',
      displayOrder: services.length + 1,
    };
    onSaveServices([...services, dup]);
  };

  return (
    <div className="space-y-6">
      {/* ── Header Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Engineering Service Pillars</span>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E8824A] text-xs font-mono font-bold">
              {services.length} Total
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage individual engineering solutions, pricing displays, and capabilities.
          </p>
        </div>

        <button
          onClick={handleCreateService}
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shrink-0"
        >
          <Plus size={15} />
          <span>Add New Service</span>
        </button>
      </div>

      {/* ── Search Bar ── */}
      <div className="relative">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search services by title or tech stack..."
          className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#F29F67] shadow-2xs"
        />
      </div>

      {/* ── Independent Service Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#F29F67]/50 transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 text-[#E8824A] flex items-center justify-center font-bold text-xs">
                    ✦
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase">
                    {service.badge || 'SERVICE'}
                  </span>
                </div>
                <div className="text-xs font-black text-[#E8824A] font-mono">
                  {service.pricingDisplay || 'Milestone Based'}
                </div>
              </div>

              <div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#E8824A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1">
                  {service.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(service.technologies || []).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setEditingService(service)}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Edit size={12} />
                <span>Edit Service</span>
              </button>
              <button
                onClick={() => handleDuplicateService(service)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                title="Duplicate"
              >
                <Copy size={13} />
              </button>
              <button
                onClick={() => {
                  if (confirm(`Delete "${service.title}"?`)) handleDeleteService(service.id);
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                title="Delete"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Independent Service Editor Modal ── */}
      {editingService && (
        <div className="fixed inset-0 z-[130] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="h-14 px-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
              <span className="text-sm font-black text-slate-900">Edit Engineering Service</span>
              <button
                onClick={() => setEditingService(null)}
                className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-none">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Service Title</label>
                  <input
                    type="text"
                    value={editingService.title}
                    onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Badge</label>
                  <input
                    type="text"
                    value={editingService.badge || ''}
                    onChange={(e) => setEditingService({ ...editingService, badge: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={editingService.shortDescription}
                  onChange={(e) => setEditingService({ ...editingService, shortDescription: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Description &amp; Scope</label>
                <textarea
                  rows={4}
                  value={editingService.fullDescription}
                  onChange={(e) => setEditingService({ ...editingService, fullDescription: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Pricing Display</label>
                  <input
                    type="text"
                    value={editingService.pricingDisplay || ''}
                    onChange={(e) => setEditingService({ ...editingService, pricingDisplay: e.target.value })}
                    placeholder="e.g. From $1,200"
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#E8824A]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">CTA Text</label>
                  <input
                    type="text"
                    value={editingService.ctaText}
                    onChange={(e) => setEditingService({ ...editingService, ctaText: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2 shrink-0">
              <button
                onClick={() => setEditingService(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveEditingService(editingService)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#F29F67] to-[#E8824A] text-white text-xs font-bold shadow-md cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
