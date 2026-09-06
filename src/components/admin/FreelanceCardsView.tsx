import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Edit,
  ExternalLink,
  Plus,
  Trash2,
  Copy,
  MessageSquare,
} from 'lucide-react';
import { WhatsappLogo } from '../common/BrandLogos';
import { FreelanceProfileItem } from '../../types/cms';

interface FreelanceCardsViewProps {
  profiles: FreelanceProfileItem[];
  onSaveProfiles: (profiles: FreelanceProfileItem[]) => void;
}

export const FreelanceCardsView: React.FC<FreelanceCardsViewProps> = ({
  profiles,
  onSaveProfiles,
}) => {
  const [editingProfile, setEditingProfile] = useState<FreelanceProfileItem | null>(null);

  const getPlatformIcon = (name: string) => {
    if (name.toLowerCase().includes('whatsapp')) return <PhoneCall className="w-5 h-5 text-emerald-600" />;
    if (name.toLowerCase().includes('fiverr')) return <Star className="w-5 h-5 text-emerald-500" />;
    if (name.toLowerCase().includes('upwork')) return <ShieldCheck className="w-5 h-5 text-green-600" />;
    return <CheckCircle2 className="w-5 h-5 text-sky-500" />;
  };

  const handleSaveEditingProfile = (updated: FreelanceProfileItem) => {
    const next = profiles.map((p) => (p.id === updated.id ? updated : p));
    onSaveProfiles(next);
    setEditingProfile(null);
  };

  const handleCreateProfile = () => {
    const newProf: FreelanceProfileItem = {
      id: 'fl-' + Date.now(),
      name: 'New Platform Channel',
      badgeText: 'VERIFIED',
      rating: 5.0,
      reviewCount: 10,
      profileUrl: 'https://example.com',
      ctaText: 'Hire on Platform',
      ctaLink: 'https://example.com',
      description: 'Platform engagement terms, milestone guarantees, and verified ratings.',
      color: '#F29F67',
      highlights: ['100% On-Time Delivery', 'Direct Milestone Escrow'],
      displayOrder: profiles.length + 1,
      active: true,
    };
    onSaveProfiles([...profiles, newProf]);
    setEditingProfile(newProf);
  };

  const handleDeleteProfile = (id: string) => {
    onSaveProfiles(profiles.filter((p) => p.id !== id));
    if (editingProfile?.id === id) setEditingProfile(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Freelance Profiles &amp; Direct WhatsApp</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
              {profiles.length} Channels
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Independent management for Fiverr, Upwork, Freelancer, and direct client WhatsApp links.
          </p>
        </div>

        <button
          onClick={handleCreateProfile}
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shrink-0"
        >
          <Plus size={15} />
          <span>Add Channel</span>
        </button>
      </div>

      {/* ── Independent Channel Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#F29F67]/50 transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                    {getPlatformIcon(profile.name)}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900">{profile.name}</h3>
                    <span className="px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold">
                      {profile.badgeText}
                    </span>
                  </div>
                </div>

                {profile.rating && (
                  <div className="flex items-center gap-1 text-xs font-black text-amber-500 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                    <Star size={12} className="fill-amber-400" />
                    <span>{profile.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {profile.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1 pt-1">
                {(profile.highlights || []).map((h, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-semibold">
                    <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setEditingProfile(profile)}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Edit size={12} />
                <span>Edit Channel</span>
              </button>

              {profile.profileUrl && (
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors cursor-pointer"
                >
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={() => {
                  if (confirm(`Delete channel "${profile.name}"?`)) handleDeleteProfile(profile.id);
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

      {/* ── Independent Channel Editor Modal ── */}
      {editingProfile && (
        <div className="fixed inset-0 z-[130] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="h-14 px-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
              <span className="text-sm font-black text-slate-900">Edit Freelance Channel</span>
              <button
                onClick={() => setEditingProfile(null)}
                className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-none">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Platform Name</label>
                  <input
                    type="text"
                    value={editingProfile.name}
                    onChange={(e) => setEditingProfile({ ...editingProfile, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Badge Text</label>
                  <input
                    type="text"
                    value={editingProfile.badgeText}
                    onChange={(e) => setEditingProfile({ ...editingProfile, badgeText: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingProfile.description || ''}
                  onChange={(e) => setEditingProfile({ ...editingProfile, description: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Profile / Booking Link</label>
                  <input
                    type="text"
                    value={editingProfile.profileUrl}
                    onChange={(e) => setEditingProfile({ ...editingProfile, profileUrl: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">CTA Button Text</label>
                  <input
                    type="text"
                    value={editingProfile.ctaText || ''}
                    onChange={(e) => setEditingProfile({ ...editingProfile, ctaText: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                  />
                </div>
              </div>

              {editingProfile.isWhatsApp && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                  <span className="text-xs font-bold text-emerald-900 block">WhatsApp Direct Parameters</span>
                  <div>
                    <label className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">Phone Number (+Country Code)</label>
                    <input
                      type="text"
                      value={editingProfile.whatsappNumber || ''}
                      onChange={(e) => setEditingProfile({ ...editingProfile, whatsappNumber: e.target.value })}
                      className="w-full p-2 rounded-lg bg-white border border-emerald-200 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">Prefilled Message</label>
                    <input
                      type="text"
                      value={editingProfile.prefilledMessage || ''}
                      onChange={(e) => setEditingProfile({ ...editingProfile, prefilledMessage: e.target.value })}
                      className="w-full p-2 rounded-lg bg-white border border-emerald-200 text-xs"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2 shrink-0">
              <button
                onClick={() => setEditingProfile(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveEditingProfile(editingProfile)}
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
