import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  Search,
  Copy,
  Trash2,
  FileText,
  Image as ImageIcon,
  Video,
  FileCode,
  Download,
  ExternalLink,
  RefreshCw,
  Plus,
  Check,
} from 'lucide-react';
import { MediaAssetItem } from '../../types/cms';

interface MediaLibraryViewProps {
  mediaList: MediaAssetItem[];
  onSaveMediaList: (media: MediaAssetItem[]) => void;
  onUploadMedia: (file: File) => Promise<string>;
}

export const MediaLibraryView: React.FC<MediaLibraryViewProps> = ({
  mediaList,
  onSaveMediaList,
  onUploadMedia,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'image' | 'svg' | 'video' | 'pdf' | 'document'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredMedia = (mediaList || []).filter((item) => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.altText || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const url = await onUploadMedia(file);
      const isPdf = file.type.includes('pdf') || file.name.endsWith('.pdf');
      const isSvg = file.type.includes('svg') || file.name.endsWith('.svg');
      const isVideo = file.type.includes('video');

      const newAsset: MediaAssetItem = {
        id: 'media-' + Date.now(),
        name: file.name,
        type: isPdf ? 'pdf' : isSvg ? 'svg' : isVideo ? 'video' : 'image',
        url,
        altText: file.name.replace(/\.[^/.]+$/, ''),
        uploadedAt: new Date().toISOString(),
        fileSizeBytes: file.size,
      };

      const updated = [newAsset, ...(mediaList || [])];
      onSaveMediaList(updated);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this asset from library?')) {
      onSaveMediaList((mediaList || []).filter((m) => m.id !== id));
    }
  };

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* ── Header Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Global Media &amp; Brand Assets</span>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E8824A] text-xs font-mono font-bold">
              {(mediaList || []).length} Assets
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Cloud-synced images, SVGs, brand avatars, video demos, and PDF documentation.
          </p>
        </div>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            accept="image/*,video/*,application/pdf,.svg"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
          >
            {isUploading ? <RefreshCw size={14} className="animate-spin" /> : <UploadCloud size={14} />}
            <span>Upload New Asset</span>
          </button>
        </div>
      </div>

      {/* ── Search & Filter Tabs ── */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assets by file name or alt text..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden"
            />
          </div>

          {/* Type Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'ALL' },
              { id: 'image', label: 'IMAGES' },
              { id: 'svg', label: 'SVG' },
              { id: 'video', label: 'VIDEOS' },
              { id: 'pdf', label: 'PDF' },
              { id: 'document', label: 'DOCUMENTS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Media Assets Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredMedia.map((asset) => (
          <div
            key={asset.id}
            className="group bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#F29F67]/50 transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Preview Box */}
            <div className="aspect-video bg-slate-950 relative flex items-center justify-center overflow-hidden">
              {asset.type === 'pdf' || asset.type === 'document' ? (
                <FileText size={32} className="text-amber-400" />
              ) : asset.type === 'video' ? (
                <Video size={32} className="text-blue-400" />
              ) : (
                <img
                  src={asset.url}
                  alt={asset.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[9px] font-mono font-bold text-white uppercase">
                {asset.type}
              </span>
            </div>

            {/* Asset Metadata */}
            <div className="p-3 space-y-2">
              <div className="text-xs font-bold text-slate-900 truncate" title={asset.name}>
                {asset.name}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleCopyUrl(asset.id, asset.url)}
                  className="text-[10px] font-bold text-[#E8824A] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copiedId === asset.id ? (
                    <>
                      <Check size={11} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDelete(asset.id)}
                  className="p-1 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 cursor-pointer"
                  title="Delete Asset"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-2">
          <ImageIcon size={32} className="mx-auto text-slate-400" />
          <p className="text-xs font-bold text-slate-700">No media assets found</p>
          <p className="text-[11px] text-slate-400">Upload images or adjust your search filters above.</p>
        </div>
      )}
    </div>
  );
};
