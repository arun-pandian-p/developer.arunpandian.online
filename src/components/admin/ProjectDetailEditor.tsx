import React, { useState, useRef } from 'react';
import {
  X,
  Save,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Upload,
  Plus,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Layers,
  Palette,
  CheckCircle2,
  ExternalLink,
  FileText,
  FileCheck,
  Zap,
  Sliders,
  Maximize2,
  RefreshCw,
  Star,
  Download,
  ShieldCheck,
  Bot,
  Globe,
  Code,
  ArrowRight,
} from 'lucide-react';
import { ProjectItem, ProjectSectionItem, SectionBackgroundConfig, ProjectMetricItem, ProjectCapabilityCard } from '../../types/cms';

interface ProjectDetailEditorProps {
  project: ProjectItem;
  onSave: (updatedProject: ProjectItem) => void;
  onClose: () => void;
  onUploadMedia: (file: File) => Promise<string>;
}

export const ProjectDetailEditor: React.FC<ProjectDetailEditorProps> = ({
  project: initialProject,
  onSave,
  onClose,
  onUploadMedia,
}) => {
  const [project, setProject] = useState<ProjectItem>({
    ...initialProject,
    technologies: initialProject.technologies || [],
    galleryUrls: initialProject.galleryUrls || [],
    metrics: initialProject.metrics || [
      { label: 'Response Speed', value: '< 600ms' },
      { label: 'Accuracy', value: '99.2%' },
    ],
    capabilities: initialProject.capabilities || [
      { title: 'Vector Search RAG', description: 'Semantic search with in-memory embeddings matching.', badge: 'CORE' },
      { title: 'Real-time Streaming', description: 'Low latency SSE streaming with token control.', badge: 'SPEED' },
    ],
    sections: initialProject.sections || [
      {
        id: 'sec-hero',
        type: 'hero',
        title: initialProject.title,
        subtitle: initialProject.shortDescription,
        visible: true,
        background: { type: 'gradient', gradientColor1: '#09090b', gradientColor2: '#18181b', gradientDirection: 'to-b' },
      },
      {
        id: 'sec-overview',
        type: 'overview',
        title: 'Project Overview & Architectural Scope',
        description: initialProject.fullCaseStudy || initialProject.shortDescription,
        visible: true,
        background: { type: 'default' },
      },
      {
        id: 'sec-metrics',
        type: 'metrics',
        title: 'Key Metrics & Performance SLA',
        visible: true,
        metrics: [
          { label: 'Response Speed', value: '< 600ms' },
          { label: 'Accuracy', value: '99.2%' },
        ],
        background: { type: 'default' },
      },
      {
        id: 'sec-capabilities',
        type: 'capabilities',
        title: 'Core Capabilities & Engineering Standards',
        visible: true,
        capabilities: [
          { title: 'High Concurrency Architecture', description: 'Engineered for sub-second responses and high throughput.', badge: 'SPEED' },
          { title: 'Type-Safe Contracts', description: 'Strict end-to-end data contracts with TypeScript & Zod.', badge: 'SECURITY' },
        ],
        background: { type: 'default' },
      },
      {
        id: 'sec-tech',
        type: 'techStack',
        title: 'Technology Stack & Tooling',
        visible: true,
        techStack: initialProject.technologies || ['React 19', 'Next.js', 'PostgreSQL', 'TypeScript'],
        background: { type: 'default' },
      },
      {
        id: 'sec-cta',
        type: 'cta',
        title: 'Ready to build something exceptional?',
        description: 'Available for immediate sprint engagement, milestone contracts, and technical consultation.',
        visible: true,
        ctaText: 'Start Project Intake',
        ctaLink: '/contact',
        background: { type: 'gradient', gradientColor1: '#18181b', gradientColor2: '#09090b', gradientDirection: 'to-r' },
      },
    ],
  });

  const [activeTab, setActiveTab] = useState<'basic' | 'sections' | 'gallery' | 'links'>('basic');
  const [activeEditingSectionId, setActiveEditingSectionId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [newTechInput, setNewTechInput] = useState('');
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const sectionBgInputRef = useRef<HTMLInputElement>(null);

  // File Upload Handlers
  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const url = await onUploadMedia(file);
      setProject((prev) => ({ ...prev, thumbnailUrl: url }));
    } finally {
      setIsUploading(false);
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsUploading(true);
    try {
      const newUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const url = await onUploadMedia(files[i]);
        newUrls.push(url);
      }
      setProject((prev) => ({
        ...prev,
        galleryUrls: [...(prev.galleryUrls || []), ...newUrls],
      }));
    } finally {
      setIsUploading(false);
    }
  };

  // Section Management Handlers
  const handleAddSection = (type: ProjectSectionItem['type']) => {
    const newSection: ProjectSectionItem = {
      id: 'sec-' + Date.now(),
      type,
      title: type.toUpperCase() + ' Section',
      description: 'Section description and architectural notes.',
      visible: true,
      background: { type: 'default' },
      metrics: type === 'metrics' ? [{ label: 'Metric', value: '100%' }] : undefined,
      capabilities: type === 'capabilities' ? [{ title: 'Capability Title', description: 'Description', badge: 'NEW' }] : undefined,
      features: type === 'features' ? ['Feature 1', 'Feature 2'] : undefined,
      techStack: type === 'techStack' ? ['Next.js', 'React'] : undefined,
    };
    setProject((prev) => ({
      ...prev,
      sections: [...(prev.sections || []), newSection],
    }));
    setActiveEditingSectionId(newSection.id);
  };

  const handleDuplicateSection = (secId: string) => {
    const sec = (project.sections || []).find((s) => s.id === secId);
    if (!sec) return;
    const duplicated: ProjectSectionItem = {
      ...sec,
      id: 'sec-' + Date.now(),
      title: sec.title + ' (Copy)',
    };
    setProject((prev) => ({
      ...prev,
      sections: [...(prev.sections || []), duplicated],
    }));
  };

  const handleDeleteSection = (secId: string) => {
    setProject((prev) => ({
      ...prev,
      sections: (prev.sections || []).filter((s) => s.id !== secId),
    }));
    if (activeEditingSectionId === secId) setActiveEditingSectionId(null);
  };

  const handleMoveSection = (index: number, direction: 'up' | 'down') => {
    const sections = [...(project.sections || [])];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sections.length) return;
    const temp = sections[index];
    sections[index] = sections[targetIndex];
    sections[targetIndex] = temp;
    setProject((prev) => ({ ...prev, sections }));
  };

  const handleToggleSectionVisibility = (secId: string) => {
    setProject((prev) => ({
      ...prev,
      sections: (prev.sections || []).map((s) => (s.id === secId ? { ...s, visible: !s.visible } : s)),
    }));
  };

  const handleUpdateSection = (secId: string, patch: Partial<ProjectSectionItem>) => {
    setProject((prev) => ({
      ...prev,
      sections: (prev.sections || []).map((s) => (s.id === secId ? { ...s, ...patch } : s)),
    }));
  };

  return (
    <div className="fixed inset-0 z-[120] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden text-slate-800">
        
        {/* ── 1. Top Header Bar ── */}
        <div className="h-16 px-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#F29F67] to-[#E8824A] text-white flex items-center justify-center font-black text-sm shadow-sm shrink-0">
              ✦
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-black text-slate-900 truncate tracking-tight">{project.title}</h2>
                <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-mono font-bold">
                  {project.slug}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold">Independent Project Case Study Editor</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onSave(project)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer transition-all active:scale-98"
            >
              <Save size={13} />
              <span>Save &amp; Apply</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              title="Close Editor"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── 2. Sub-Tabs Bar ── */}
        <div className="px-6 bg-white border-b border-slate-200 flex items-center gap-1 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'basic' ? 'border-[#E8824A] text-[#E8824A]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sliders size={13} /> Basic Information
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'sections' ? 'border-[#E8824A] text-[#E8824A]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers size={13} /> Visual Section Builder ({(project.sections || []).length})
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'gallery' ? 'border-[#E8824A] text-[#E8824A]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ImageIcon size={13} /> Media &amp; Gallery ({(project.galleryUrls || []).length})
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'links' ? 'border-[#E8824A] text-[#E8824A]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ExternalLink size={13} /> Live URLs &amp; PDFs
          </button>
        </div>

        {/* ── 3. Tab Content Workspace ── */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none">
          
          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* TAB 1: BASIC INFORMATION */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'basic' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              {/* Title & Slug */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Project Title</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => setProject({ ...project, title: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold focus:bg-white focus:border-[#F29F67] outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={project.slug}
                    onChange={(e) => setProject({ ...project, slug: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono focus:bg-white focus:border-[#F29F67] outline-hidden"
                  />
                </div>
              </div>

              {/* Category, Badge & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Category</label>
                  <input
                    type="text"
                    value={project.category}
                    onChange={(e) => setProject({ ...project, category: e.target.value })}
                    placeholder="e.g. SaaS Platform, AI & Intelligence"
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#F29F67] outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Header Badge</label>
                  <input
                    type="text"
                    value={project.badge || ''}
                    onChange={(e) => setProject({ ...project, badge: e.target.value })}
                    placeholder="e.g. AI AGENT DEMO"
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-[#F29F67] outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Delivery Status</label>
                  <select
                    value={project.status}
                    onChange={(e) => setProject({ ...project, status: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold focus:bg-white focus:border-[#F29F67] outline-hidden cursor-pointer"
                  >
                    <option value="Live Production">Live Production</option>
                    <option value="Live">Live</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Short Summary (Card Preview)</label>
                <textarea
                  rows={2}
                  value={project.shortDescription}
                  onChange={(e) => setProject({ ...project, shortDescription: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none focus:bg-white focus:border-[#F29F67] outline-hidden"
                />
              </div>

              {/* Full Case Study */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Case Study &amp; Architecture Notes</label>
                <textarea
                  rows={5}
                  value={project.fullCaseStudy || ''}
                  onChange={(e) => setProject({ ...project, fullCaseStudy: e.target.value })}
                  placeholder="Comprehensive case study breakdown, business requirements, and engineering execution..."
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none focus:bg-white focus:border-[#F29F67] outline-hidden"
                />
              </div>

              {/* Featured Image / Thumbnail */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-800 block">Featured Project Thumbnail</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-20 rounded-xl bg-slate-900 overflow-hidden shrink-0 border border-slate-200">
                    <img
                      src={project.thumbnailUrl || '/assets/zappy-hero-preview.webp'}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/zappy-hero-preview.webp';
                      }}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      value={project.thumbnailUrl}
                      onChange={(e) => setProject({ ...project, thumbnailUrl: e.target.value })}
                      placeholder="Image URL"
                      className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs font-mono"
                    />
                    <input
                      ref={thumbnailInputRef}
                      type="file"
                      onChange={handleThumbnailUpload}
                      className="hidden"
                      accept="image/*"
                    />
                    <button
                      onClick={() => thumbnailInputRef.current?.click()}
                      disabled={isUploading}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      {isUploading ? <RefreshCw size={12} className="animate-spin" /> : <Upload size={12} />}
                      <span>Upload Local Image</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-slate-800 block">Technology Stack Pills</span>
                <div className="flex flex-wrap gap-1.5">
                  {(project.technologies || []).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>{tech}</span>
                      <button
                        onClick={() => {
                          const updated = (project.technologies || []).filter((_, i) => i !== idx);
                          setProject({ ...project, technologies: updated });
                        }}
                        className="text-slate-400 hover:text-red-500"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTechInput}
                    onChange={(e) => setNewTechInput(e.target.value)}
                    placeholder="Add technology (e.g. LangChain, Next.js, Redis)..."
                    className="flex-1 p-2 rounded-lg bg-white border border-slate-200 text-xs"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && newTechInput.trim()) {
                        e.preventDefault();
                        setProject({
                          ...project,
                          technologies: [...(project.technologies || []), newTechInput.trim()],
                        });
                        setNewTechInput('');
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      if (newTechInput.trim()) {
                        setProject({
                          ...project,
                          technologies: [...(project.technologies || []), newTechInput.trim()],
                        });
                        setNewTechInput('');
                      }
                    }}
                    className="px-3 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold cursor-pointer"
                  >
                    Add Tag
                  </button>
                </div>
              </div>

              {/* Visibility & Featured Toggles */}
              <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={project.featured}
                    onChange={(e) => setProject({ ...project, featured: e.target.checked })}
                    className="w-4 h-4 rounded text-orange-500 focus:ring-orange-400"
                  />
                  <span>Featured on Home Page</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={project.published}
                    onChange={(e) => setProject({ ...project, published: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>Published &amp; Publicly Visible</span>
                </label>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* TAB 2: VISUAL SECTION BUILDER */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'sections' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    Project Section Architecture
                  </h3>
                  <p className="text-xs text-slate-500">
                    Each section renders independently with its own background, content blocks, and visibility.
                  </p>
                </div>

                {/* Add Section Dropdown / Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAddSection('overview')}
                    className="px-3 py-1.5 rounded-xl bg-[#F29F67] hover:bg-orange-500 text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer"
                  >
                    <Plus size={13} /> Add Section
                  </button>
                </div>
              </div>

              {/* List of Independent Section Cards */}
              <div className="space-y-4">
                {(project.sections || []).map((sec, idx) => {
                  const isEditing = activeEditingSectionId === sec.id;
                  return (
                    <div
                      key={sec.id}
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                        isEditing
                          ? 'border-[#F29F67] ring-2 ring-orange-500/20 shadow-md'
                          : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      {/* Section Card Header */}
                      <div className="p-4 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-mono font-bold">
                            0{idx + 1}
                          </span>
                          <div className="min-w-0">
                            <span className="text-xs font-black text-slate-900 truncate block">
                              {sec.title}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">
                              Type: {sec.type}
                            </span>
                          </div>
                        </div>

                        {/* Section Quick Controls */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleMoveSection(idx, 'up')}
                            disabled={idx === 0}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 disabled:opacity-30 cursor-pointer"
                            title="Move Up"
                          >
                            <ChevronUp size={14} />
                          </button>
                          <button
                            onClick={() => handleMoveSection(idx, 'down')}
                            disabled={idx === (project.sections || []).length - 1}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 disabled:opacity-30 cursor-pointer"
                            title="Move Down"
                          >
                            <ChevronDown size={14} />
                          </button>
                          <button
                            onClick={() => handleToggleSectionVisibility(sec.id)}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
                            title="Toggle Visibility"
                          >
                            {sec.visible ? <Eye size={14} className="text-emerald-600" /> : <EyeOff size={14} className="text-slate-400" />}
                          </button>
                          <button
                            onClick={() => handleDuplicateSection(sec.id)}
                            className="p-1 rounded-md text-slate-400 hover:text-blue-600 cursor-pointer"
                            title="Duplicate Section"
                          >
                            <Copy size={13} />
                          </button>
                          <button
                            onClick={() => handleDeleteSection(sec.id)}
                            className="p-1 rounded-md text-slate-400 hover:text-red-500 cursor-pointer"
                            title="Delete Section"
                          >
                            <Trash2 size={13} />
                          </button>
                          <button
                            onClick={() => setActiveEditingSectionId(isEditing ? null : sec.id)}
                            className={`ml-2 px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                              isEditing ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                            }`}
                          >
                            {isEditing ? 'Done' : 'Edit Section'}
                          </button>
                        </div>
                      </div>

                      {/* Section Card Deep Editor (When active) */}
                      {isEditing && (
                        <div className="p-5 space-y-5 bg-white">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-[11px] font-bold text-slate-700 block mb-1">Section Title</label>
                              <input
                                type="text"
                                value={sec.title}
                                onChange={(e) => handleUpdateSection(sec.id, { title: e.target.value })}
                                className="w-full p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold"
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-bold text-slate-700 block mb-1">Section Subtitle / Tagline</label>
                              <input
                                type="text"
                                value={sec.subtitle || ''}
                                onChange={(e) => handleUpdateSection(sec.id, { subtitle: e.target.value })}
                                className="w-full p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-[11px] font-bold text-slate-700 block mb-1">Section Description / Content</label>
                            <textarea
                              rows={3}
                              value={sec.description || ''}
                              onChange={(e) => handleUpdateSection(sec.id, { description: e.target.value })}
                              className="w-full p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs resize-none"
                            />
                          </div>

                          {/* ── Background Editor for this specific section ── */}
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <Palette size={13} className="text-[#E8824A]" />
                              Section Background Settings
                            </span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {['default', 'solid', 'gradient', 'image'].map((bgT) => (
                                <button
                                  key={bgT}
                                  onClick={() =>
                                    handleUpdateSection(sec.id, {
                                      background: { ...(sec.background || {}), type: bgT as any },
                                    })
                                  }
                                  className={`p-2 rounded-lg text-xs font-bold capitalize transition-colors cursor-pointer border ${
                                    (sec.background?.type || 'default') === bgT
                                      ? 'bg-slate-900 text-white border-slate-900'
                                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                                  }`}
                                >
                                  {bgT}
                                </button>
                              ))}
                            </div>

                            {/* Solid Color Settings */}
                            {sec.background?.type === 'solid' && (
                              <div className="flex items-center gap-3">
                                <label className="text-xs font-bold text-slate-700">Solid Color:</label>
                                <input
                                  type="color"
                                  value={sec.background?.solidColor || '#09090b'}
                                  onChange={(e) =>
                                    handleUpdateSection(sec.id, {
                                      background: { ...(sec.background || {}), type: 'solid', solidColor: e.target.value },
                                    })
                                  }
                                  className="w-8 h-8 rounded cursor-pointer"
                                />
                                <input
                                  type="text"
                                  value={sec.background?.solidColor || '#09090b'}
                                  onChange={(e) =>
                                    handleUpdateSection(sec.id, {
                                      background: { ...(sec.background || {}), type: 'solid', solidColor: e.target.value },
                                    })
                                  }
                                  className="p-1.5 rounded bg-white border border-slate-200 text-xs font-mono w-28"
                                />
                              </div>
                            )}

                            {/* Gradient Settings */}
                            {sec.background?.type === 'gradient' && (
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Color 1</label>
                                  <input
                                    type="text"
                                    value={sec.background?.gradientColor1 || '#09090b'}
                                    onChange={(e) =>
                                      handleUpdateSection(sec.id, {
                                        background: { ...(sec.background || {}), type: 'gradient', gradientColor1: e.target.value },
                                      })
                                    }
                                    className="w-full p-1.5 rounded bg-white border border-slate-200 text-xs font-mono"
                                  />
                                </div>
                                <div>
                                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Color 2</label>
                                  <input
                                    type="text"
                                    value={sec.background?.gradientColor2 || '#18181b'}
                                    onChange={(e) =>
                                      handleUpdateSection(sec.id, {
                                        background: { ...(sec.background || {}), type: 'gradient', gradientColor2: e.target.value },
                                      })
                                    }
                                    className="w-full p-1.5 rounded bg-white border border-slate-200 text-xs font-mono"
                                  />
                                </div>
                                <div>
                                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Direction</label>
                                  <select
                                    value={sec.background?.gradientDirection || 'to-b'}
                                    onChange={(e) =>
                                      handleUpdateSection(sec.id, {
                                        background: { ...(sec.background || {}), type: 'gradient', gradientDirection: e.target.value as any },
                                      })
                                    }
                                    className="w-full p-1.5 rounded bg-white border border-slate-200 text-xs font-bold"
                                  >
                                    <option value="to-r">Left to Right (to-r)</option>
                                    <option value="to-b">Top to Bottom (to-b)</option>
                                    <option value="to-br">Top-Left to Bottom-Right</option>
                                  </select>
                                </div>
                              </div>
                            )}

                            {/* Image Background Settings */}
                            {sec.background?.type === 'image' && (
                              <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase block">Background Image URL</label>
                                <input
                                  type="text"
                                  value={sec.background?.imageUrl || ''}
                                  onChange={(e) =>
                                    handleUpdateSection(sec.id, {
                                      background: { ...(sec.background || {}), type: 'image', imageUrl: e.target.value },
                                    })
                                  }
                                  placeholder="https://..."
                                  className="w-full p-2 rounded bg-white border border-slate-200 text-xs font-mono"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* TAB 3: MEDIA & GALLERY */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'gallery' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    Project Media Gallery
                  </h3>
                  <p className="text-xs text-slate-500">
                    Upload multiple screenshots, design mockups, and client deliverables.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    ref={galleryInputRef}
                    type="file"
                    multiple
                    onChange={handleGalleryUpload}
                    className="hidden"
                    accept="image/*"
                  />
                  <button
                    onClick={() => galleryInputRef.current?.click()}
                    disabled={isUploading}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    {isUploading ? <RefreshCw size={12} className="animate-spin" /> : <Upload size={12} />}
                    <span>Upload Images</span>
                  </button>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {(project.galleryUrls || []).map((url, idx) => (
                  <div key={idx} className="group relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-200 shadow-2xs">
                    <img src={url} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          const updated = (project.galleryUrls || []).filter((_, i) => i !== idx);
                          setProject({ ...project, galleryUrls: updated });
                        }}
                        className="p-2 rounded-full bg-red-600 hover:bg-red-500 text-white cursor-pointer shadow-md"
                        title="Delete Image"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {(project.galleryUrls || []).length === 0 && (
                <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 text-center space-y-2">
                  <ImageIcon size={32} className="mx-auto text-slate-400" />
                  <p className="text-xs font-bold text-slate-700">No gallery images uploaded yet</p>
                  <p className="text-[11px] text-slate-400">Click upload above to add screenshots.</p>
                </div>
              )}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* TAB 4: LIVE URLS & PDF ATTACHMENTS */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'links' && (
            <div className="space-y-5 max-w-3xl mx-auto">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Live Demo / Production URL</label>
                <input
                  type="text"
                  value={project.demoUrl || ''}
                  onChange={(e) => setProject({ ...project, demoUrl: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono focus:bg-white focus:border-[#F29F67] outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">GitHub Repository URL</label>
                <input
                  type="text"
                  value={project.githubUrl || ''}
                  onChange={(e) => setProject({ ...project, githubUrl: e.target.value })}
                  placeholder="https://github.com/..."
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono focus:bg-white focus:border-[#F29F67] outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Client Official Domain URL</label>
                <input
                  type="text"
                  value={project.clientUrl || ''}
                  onChange={(e) => setProject({ ...project, clientUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono focus:bg-white focus:border-[#F29F67] outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Official PDF Letter / Documentation Download URL</label>
                <input
                  type="text"
                  value={project.pdfUrl || ''}
                  onChange={(e) => setProject({ ...project, pdfUrl: e.target.value })}
                  placeholder="/assets/proof.pdf or CDN link"
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono focus:bg-white focus:border-[#F29F67] outline-hidden"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
