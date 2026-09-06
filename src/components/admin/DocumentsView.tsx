import React, { useState, useRef } from 'react';
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Copy,
  Plus,
  Search,
  RefreshCw,
  ExternalLink,
  Eye,
  FileCheck,
  Award,
} from 'lucide-react';
import { DocumentItem } from '../../types/cms';

interface DocumentsViewProps {
  documents: DocumentItem[];
  onSaveDocuments: (docs: DocumentItem[]) => void;
  onUploadMedia: (file: File) => Promise<string>;
}

export const DocumentsView: React.FC<DocumentsViewProps> = ({
  documents,
  onSaveDocuments,
  onUploadMedia,
}) => {
  const [docsList, setDocsList] = useState<DocumentItem[]>(
    documents && documents.length > 0
      ? documents
      : [
          {
            id: 'doc-1',
            title: 'Official Client Recommendation Letter (Carpediem Tech)',
            description: 'Signed and stamped official appreciation letter recognizing full-stack platform execution.',
            fileUrl: '/assets/carpediem-proof.pdf',
            category: 'Recommendation',
            date: '2024-09',
            version: 'v1.0 (Official)',
            isPublic: true,
            featured: true,
            downloadEnabled: true,
            previewEnabled: true,
            displayOrder: 1,
          },
          {
            id: 'doc-2',
            title: 'Zappy SaaS Multi-Tenant Architecture Whitepaper',
            description: 'Technical document covering Row-Level Security, multi-tenant isolation & Stripe metering.',
            fileUrl: '/assets/carpediem-proof.pdf',
            category: 'Technical',
            date: '2025-01',
            version: 'v2.1',
            isPublic: true,
            featured: false,
            downloadEnabled: true,
            previewEnabled: true,
            displayOrder: 2,
          },
        ]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Recommendation', 'Technical', 'Certificate', 'Case Study'];

  const filteredDocs = docsList.filter((d) => {
    const matchesSearch =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleUploadNewDoc = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const url = await onUploadMedia(file);
      const newDoc: DocumentItem = {
        id: 'doc-' + Date.now(),
        title: file.name.replace(/\.[^/.]+$/, ''),
        description: 'Uploaded document asset.',
        fileUrl: url,
        category: file.name.toLowerCase().includes('letter') ? 'Recommendation' : 'Technical',
        date: new Date().toISOString().split('T')[0],
        version: 'v1.0',
        isPublic: true,
        featured: false,
        downloadEnabled: true,
        previewEnabled: true,
        displayOrder: docsList.length + 1,
      };
      const updated = [newDoc, ...docsList];
      setDocsList(updated);
      onSaveDocuments(updated);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteDoc = (id: string) => {
    const updated = docsList.filter((d) => d.id !== id);
    setDocsList(updated);
    onSaveDocuments(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Documents &amp; Verified PDFs</span>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E8824A] text-xs font-mono font-bold">
              {docsList.length} Files
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage client recommendation letters, case studies, technical whitepapers, and certificates.
          </p>
        </div>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleUploadNewDoc}
            className="hidden"
            accept="application/pdf,.doc,.docx"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
          >
            {isUploading ? <RefreshCw size={14} className="animate-spin" /> : <Upload size={14} />}
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      {/* ── Search & Filter ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documents by name or description..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs focus:outline-hidden"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Document Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#F29F67]/50 transition-all p-5 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200 text-[#E8824A] flex items-center justify-center font-bold shadow-2xs">
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase">
                      {doc.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono ml-2">{doc.date}</span>
                  </div>
                </div>
                {doc.version && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold">
                    {doc.version}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900 leading-snug">{doc.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1">{doc.description}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download size={13} />
                <span>Download / Preview</span>
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(doc.fileUrl);
                  alert('Copied URL');
                }}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
                title="Copy Link"
              >
                <Copy size={13} />
              </button>

              <button
                onClick={() => {
                  if (confirm(`Delete document "${doc.title}"?`)) handleDeleteDoc(doc.id);
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 cursor-pointer"
                title="Delete"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
