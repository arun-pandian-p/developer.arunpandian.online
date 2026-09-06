import React, { useState } from 'react';
import {
  Sparkles,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Upload,
  Image as ImageIcon,
  ExternalLink,
  Eye,
  EyeOff,
  Sliders,
  Play,
  Pause,
  Layers,
  CheckCircle2,
  Edit2,
  Save,
  X,
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { VerticalShowcaseConfig, VerticalShowcaseItem } from '../../types/cms';

export const VerticalShowcaseEditor: React.FC = () => {
  const { cmsData, updateField, uploadMedia } = useCMS();
  const config = cmsData.verticalShowcase || {
    enabled: true,
    sectionBadge: 'SELECTED WORK & DELIVERABLES',
    heading: 'Digital Products,',
    highlightText: 'SaaS Platforms',
    description: 'High-velocity software engineering across multi-tenant web applications, autonomous LLM agent pipelines, and enterprise automation backends built for scale.',
    ctaText: 'View All Projects',
    ctaLink: '/projects',
    speed: 'medium',
    direction: 'up',
    gapPixels: 20,
    borderRadius: '24px',
    showCaptions: true,
    autoAnimate: true,
    mobileAnimate: true,
    items: [],
  };

  const [editingItem, setEditingItem] = useState<VerticalShowcaseItem | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<'items' | 'settings'>('items');

  const items = config.items || [];

  const updateConfig = (partial: Partial<VerticalShowcaseConfig>) => {
    updateField('verticalShowcase', {
      ...config,
      ...partial,
    });
  };

  const handleAddItem = () => {
    const newItem: VerticalShowcaseItem = {
      id: `showcase-${Date.now()}`,
      title: 'New Showcase Project',
      category: 'SaaS Platform',
      caption: 'Interactive live demo & cloud architecture',
      imageUrl: '/assets/zappy-hero-preview.webp',
      projectSlug: 'project-zappy',
      displayOrder: items.length + 1,
      active: true,
      featured: false,
    };

    updateConfig({
      items: [...items, newItem],
    });
    setEditingItem(newItem);
  };

  const handleUpdateItem = (updatedItem: VerticalShowcaseItem) => {
    const newItems = items.map((item) => (item.id === updatedItem.id ? updatedItem : item));
    updateConfig({ items: newItems });
    setEditingItem(null);
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm('Are you sure you want to delete this showcase item?')) {
      const newItems = items.filter((item) => item.id !== id);
      updateConfig({ items: newItems });
      if (editingItem?.id === id) setEditingItem(null);
    }
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;

    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;

    // re-assign display orders
    newItems.forEach((item, idx) => {
      item.displayOrder = idx + 1;
    });

    updateConfig({ items: newItems });
  };

  const handleToggleActive = (id: string) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, active: item.active === false ? true : false } : item
    );
    updateConfig({ items: newItems });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, forEditing: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const url = await uploadMedia(file);
      if (forEditing && editingItem) {
        setEditingItem({ ...editingItem, imageUrl: url });
      }
    } catch (err) {
      console.error('Image upload failed', err);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Main Toggle */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-50 text-[#F29F67]">
              <Sparkles size={20} />
            </span>
            <h2 className="text-xl font-bold text-slate-800">Vertical Project Showcase</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Infinite vertical loop marquee appearing immediately after Hero with project screenshot cards.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.enabled !== false}
              onChange={(e) => updateConfig({ enabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F29F67]"></div>
            <span className="ml-3 text-xs font-bold text-slate-700">
              {config.enabled !== false ? 'Showcase Enabled' : 'Showcase Disabled'}
            </span>
          </label>

          <button
            onClick={handleAddItem}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F29F67] hover:bg-[#E8824A] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            <Plus size={16} />
            <span>Add Screenshot</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('items')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'items'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Showcase Items ({items.length})
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Animation &amp; Layout Settings
        </button>
      </div>

      {/* TAB 1: SHOWCASE ITEMS */}
      {activeTab === 'items' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-4 border transition-all ${
                  item.active === false
                    ? 'border-slate-200 opacity-60 bg-slate-50'
                    : 'border-slate-200 hover:border-amber-300 shadow-sm'
                }`}
              >
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-28 h-20 rounded-xl bg-slate-900 overflow-hidden shrink-0 border border-slate-200 relative group">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/zappy-hero-preview.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => setEditingItem(item)}
                        className="p-1 rounded-full bg-white text-slate-800 text-[10px] font-bold"
                      >
                        <Edit2 size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-mono-code font-bold">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 truncate">{item.title}</h4>
                    <p className="text-xs text-slate-500 truncate">{item.caption || 'No caption'}</p>
                    <p className="text-[10px] text-slate-400 font-mono-code truncate">
                      Link: {item.projectSlug ? `Slug: ${item.projectSlug}` : item.targetUrl || 'Default'}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleMove(index, 'up')}
                      disabled={index === 0}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-30 cursor-pointer"
                      title="Move Up"
                    >
                      <ChevronUp size={14} />
                    </button>
                    <button
                      onClick={() => handleMove(index, 'down')}
                      disabled={index === items.length - 1}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-30 cursor-pointer"
                      title="Move Down"
                    >
                      <ChevronDown size={14} />
                    </button>
                    <button
                      onClick={() => handleToggleActive(item.id)}
                      className={`p-1.5 rounded-lg border text-xs font-medium cursor-pointer ${
                        item.active !== false
                          ? 'border-emerald-200 text-emerald-600 bg-emerald-50'
                          : 'border-slate-200 text-slate-400'
                      }`}
                      title="Toggle Active/Hidden"
                    >
                      {item.active !== false ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                      title="Delete Item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: ANIMATION & LAYOUT SETTINGS */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Section Badges & Headings */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Showcase Typography</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                  <input
                    type="text"
                    value={config.sectionBadge || ''}
                    onChange={(e) => updateConfig({ sectionBadge: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                    placeholder="SELECTED WORK & DELIVERABLES"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Heading Prefix</label>
                  <input
                    type="text"
                    value={config.heading || ''}
                    onChange={(e) => updateConfig({ heading: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                    placeholder="Digital Products,"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Highlighted Text</label>
                  <input
                    type="text"
                    value={config.highlightText || ''}
                    onChange={(e) => updateConfig({ highlightText: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                    placeholder="SaaS Platforms"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={config.description || ''}
                  onChange={(e) => updateConfig({ description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                  placeholder="High-velocity software engineering..."
                />
              </div>
            </div>

            {/* Animation Behavior */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Animation Motion</h3>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Speed</label>
                <select
                  value={config.speed || 'medium'}
                  onChange={(e) => updateConfig({ speed: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none cursor-pointer"
                >
                  <option value="slow">Slow (45s continuous cycle)</option>
                  <option value="medium">Medium (30s continuous cycle)</option>
                  <option value="fast">Fast (20s continuous cycle)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Scroll Direction</label>
                <select
                  value={config.direction || 'up'}
                  onChange={(e) => updateConfig({ direction: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none cursor-pointer"
                >
                  <option value="up">Upward Continuous Motion</option>
                  <option value="down">Downward Continuous Motion</option>
                </select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-700">Auto Loop Animation</span>
                <input
                  type="checkbox"
                  checked={config.autoAnimate !== false}
                  onChange={(e) => updateConfig({ autoAnimate: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Mobile Animation</span>
                <input
                  type="checkbox"
                  checked={config.mobileAnimate !== false}
                  onChange={(e) => updateConfig({ mobileAnimate: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Layout Aesthetics */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Card Styling &amp; Geometry</h3>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Gap Between Cards (px)</label>
                <input
                  type="number"
                  value={config.gapPixels || 20}
                  onChange={(e) => updateConfig({ gapPixels: parseInt(e.target.value) || 20 })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Card Border Radius</label>
                <select
                  value={config.borderRadius || '24px'}
                  onChange={(e) => updateConfig({ borderRadius: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none cursor-pointer"
                >
                  <option value="16px">16px (Rounded)</option>
                  <option value="20px">20px (Smooth Rounded)</option>
                  <option value="24px">24px (Pill Sleek)</option>
                  <option value="32px">32px (Ultra Modern)</option>
                </select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-700">Show Screenshot Captions</span>
                <input
                  type="checkbox"
                  checked={config.showCaptions !== false}
                  onChange={(e) => updateConfig({ showCaptions: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
              </div>
            </div>

          </div>
        </div>
      )}

      {/* EDIT MODAL DIALOG */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-800">Edit Showcase Screenshot</h3>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Preview & Upload */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">Screenshot Preview &amp; Upload</label>
              <div className="relative aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 group">
                <img
                  src={editingItem.imageUrl}
                  alt={editingItem.title}
                  className="w-full h-full object-cover"
                />
                <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer gap-2">
                  <Upload size={24} />
                  <span className="text-xs font-bold">Upload New Screenshot</span>
                  <span className="text-[10px] text-slate-300">PNG, JPG, WEBP, SVG</span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    onChange={(e) => handleImageUpload(e, true)}
                    className="hidden"
                  />
                </label>
              </div>
              <input
                type="text"
                value={editingItem.imageUrl}
                onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                placeholder="Or paste image URL (e.g. /assets/zappy-hero-preview.webp)"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none font-mono-code"
              />
            </div>

            {/* Title & Category */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Title</label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                  placeholder="Zappy Multi-Tenant SaaS"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category Badge</label>
                <input
                  type="text"
                  value={editingItem.category}
                  onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                  placeholder="SaaS Platform"
                />
              </div>
            </div>

            {/* Caption */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Caption / Subtitle</label>
              <input
                type="text"
                value={editingItem.caption || ''}
                onChange={(e) => setEditingItem({ ...editingItem, caption: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="Real-time Restaurant Canvas & Stripe Billing"
              />
            </div>

            {/* Target Project Slug or URL */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Slug Link</label>
                <select
                  value={editingItem.projectSlug || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, projectSlug: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none"
                >
                  <option value="">None (Use Custom URL)</option>
                  <option value="project-zappy">Zappy SaaS Platform</option>
                  <option value="project-ai-demo">AI Agent Demo Assistant</option>
                  <option value="project-carpediem">Carpediem Tech Platform</option>
                  <option value="project-proof">Client Proof &amp; Letter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Custom Target URL</label>
                <input
                  type="text"
                  value={editingItem.targetUrl || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, targetUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-400 outline-none font-mono-code"
                  placeholder="https://..."
                />
              </div>
            </div>

            {/* Alt text & Featured Toggle */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingItem.featured || false}
                  onChange={(e) => setEditingItem({ ...editingItem, featured: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
                <span className="text-xs font-bold text-slate-700">Mark as Featured</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={editingItem.active !== false}
                  onChange={(e) => setEditingItem({ ...editingItem, active: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                />
                <span className="text-xs font-bold text-slate-700">Active (Visible)</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateItem(editingItem)}
                className="px-5 py-2 rounded-xl bg-[#F29F67] hover:bg-[#E8824A] text-white text-xs font-bold shadow-sm flex items-center gap-1.5"
              >
                <Save size={14} />
                <span>Save Screenshot</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
