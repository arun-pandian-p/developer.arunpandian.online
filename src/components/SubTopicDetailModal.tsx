import React from 'react';
import {
  X,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  FileText,
  Bot,
  Workflow,
  Globe,
  Layers,
  Star,
  Download,
  Calendar,
  Code,
  Award,
  AtSign,
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { WhatsappLogo, GithubLogo, LinkedinLogo } from './common/BrandLogos';

export interface SubTopicItem {
  id: string;
  category: 'home' | 'studio' | 'services' | 'projects' | 'freelance';
  categoryTitle: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  techStack?: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  pdfUrl?: string;
}

interface SubTopicDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtopic: SubTopicItem | null;
  onOpenIntake: () => void;
  onOpenWhatsApp: () => void;
}

export const SubTopicDetailModal: React.FC<SubTopicDetailModalProps> = ({
  isOpen,
  onClose,
  subtopic,
  onOpenIntake,
  onOpenWhatsApp,
}) => {
  const { cmsData } = useCMS();

  if (!isOpen || !subtopic) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl sm:rounded-[2.5rem] border border-zinc-200 shadow-2xl z-10 text-zinc-900 animate-fadeIn">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20 text-xs font-mono-code font-bold uppercase tracking-wider">
              {subtopic.categoryTitle}
            </span>
            <span className="text-zinc-300">/</span>
            <span className="text-xs font-mono-code font-semibold text-zinc-500 truncate max-w-[220px] sm:max-w-none">
              {subtopic.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Title and Narrative */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-space-grotesk tracking-tight text-zinc-950">
              {subtopic.title}
            </h2>
            <p className="text-base sm:text-lg text-amber-700 font-mono-code font-medium">
              {subtopic.subtitle}
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed pt-2">
              {subtopic.description}
            </p>
          </div>

          {/* Metrics Grid */}
          {subtopic.metrics && subtopic.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {subtopic.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                  <div className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider">{m.label}</div>
                  <div className="text-lg sm:text-xl font-bold font-space-grotesk text-zinc-900">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Key Features & Architecture Deliverables */}
          {subtopic.features && subtopic.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-zinc-800">
                Core Capabilities &amp; Architecture Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subtopic.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-700 font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          {subtopic.techStack && subtopic.techStack.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-zinc-800">
                Technologies &amp; Official Tooling
              </h3>
              <div className="flex flex-wrap gap-2">
                {subtopic.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-mono-code font-bold text-zinc-800 shadow-2xs"
                  >
                    ⚡ {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              {subtopic.liveUrl && (
                <a
                  href={subtopic.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono-code font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-600/20"
                >
                  <Globe size={15} />
                  <span>Visit Live URL</span>
                  <ArrowUpRight size={15} />
                </a>
              )}

              {subtopic.pdfUrl && (
                <a
                  href={subtopic.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono-code font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <FileText size={15} className="text-amber-400" />
                  <span>Inspect PDF</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenIntake();
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#fda228] hover:bg-amber-400 text-black font-mono-code font-extrabold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Discuss This Project
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenWhatsApp();
                }}
                className="px-4 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-mono-code font-bold text-xs transition-all cursor-pointer"
                title="Chat on WhatsApp"
              >
                <WhatsappLogo className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
