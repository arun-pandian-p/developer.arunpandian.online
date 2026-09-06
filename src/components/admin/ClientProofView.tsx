import React, { useRef, useState } from 'react';
import {
  FileCheck,
  Upload,
  Download,
  ExternalLink,
  ShieldCheck,
  Star,
  RefreshCw,
  Edit,
  Trash2,
  Plus,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { ClientProofConfig } from '../../types/cms';

interface ClientProofViewProps {
  clientProof: ClientProofConfig;
  onSaveClientProof: (proof: ClientProofConfig) => void;
  onUploadMedia: (file: File) => Promise<string>;
}

export const ClientProofView: React.FC<ClientProofViewProps> = ({
  clientProof,
  onSaveClientProof,
  onUploadMedia,
}) => {
  const [proof, setProof] = useState<ClientProofConfig>(clientProof);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const url = await onUploadMedia(file);
      const updated = { ...proof, pdfDocumentUrl: url };
      setProof(updated);
      onSaveClientProof(updated);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFieldChange = <K extends keyof ClientProofConfig>(field: K, val: ClientProofConfig[K]) => {
    const updated = { ...proof, [field]: val };
    setProof(updated);
    onSaveClientProof(updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
          <span>Client Proof &amp; Recommendation Letters</span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold">
            VERIFIED OFFICIAL
          </span>
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Manage official corporate appreciation letters, testimonials, and client verification documentation.
        </p>
      </div>

      {/* ── Visual Document Card ── */}
      <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center font-black shadow-sm shrink-0">
              <FileCheck size={24} />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">{proof.companyName}</h3>
              <p className="text-xs text-amber-800 font-bold">{proof.projectTitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {proof.pdfDocumentUrl && (
              <a
                href={proof.pdfDocumentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <Download size={13} />
                <span>View / Download PDF</span>
              </a>
            )}

            <input
              ref={fileInputRef}
              type="file"
              onChange={handlePdfUpload}
              className="hidden"
              accept="application/pdf"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="px-3.5 py-2 rounded-xl bg-white border border-amber-300 text-amber-900 hover:bg-amber-100 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
            >
              {isUploading ? <RefreshCw size={13} className="animate-spin" /> : <Upload size={13} />}
              <span>Replace PDF Letter</span>
            </button>
          </div>
        </div>

        {/* ── Document Details Inputs ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Company / Organization Name</label>
            <input
              type="text"
              value={proof.companyName}
              onChange={(e) => handleFieldChange('companyName', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-amber-200 text-xs font-bold"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Project / Engagement Title</label>
            <input
              type="text"
              value={proof.projectTitle}
              onChange={(e) => handleFieldChange('projectTitle', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-amber-200 text-xs font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Signatory / Client Name</label>
            <input
              type="text"
              value={proof.clientName}
              onChange={(e) => handleFieldChange('clientName', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-amber-200 text-xs"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Signatory Role / Designation</label>
            <input
              type="text"
              value={proof.role}
              onChange={(e) => handleFieldChange('role', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-amber-200 text-xs"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Official Client Recommendation Quote</label>
          <textarea
            rows={3}
            value={proof.quote}
            onChange={(e) => handleFieldChange('quote', e.target.value)}
            className="w-full p-2.5 rounded-xl bg-white border border-amber-200 text-xs resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Live Verified Domain URL</label>
            <input
              type="text"
              value={proof.liveUrl}
              onChange={(e) => handleFieldChange('liveUrl', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-amber-200 text-xs font-mono"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Rating Display Text</label>
            <input
              type="text"
              value={proof.ratingText}
              onChange={(e) => handleFieldChange('ratingText', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-amber-200 text-xs font-bold text-amber-900"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
            <input
              type="checkbox"
              checked={proof.isPubliclyVisible !== false}
              onChange={(e) => handleFieldChange('isPubliclyVisible', e.target.checked)}
              className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
            />
            <span>Publicly Visible in Topic Detail &amp; Proof Deliverables</span>
          </label>
        </div>
      </div>
    </div>
  );
};
