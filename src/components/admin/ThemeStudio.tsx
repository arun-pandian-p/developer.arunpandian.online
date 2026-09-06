import React, { useState, useRef, useEffect } from 'react';
import { useCMS } from '../../context/CMSContext';
import { THEME_PRESETS, ExtendedThemePreset } from '../../data/themePresets';
import {
  Sparkles,
  Layout,
  Palette,
  Smartphone,
  Monitor,
  Eye,
  EyeOff,
  Check,
  RotateCcw,
  ArrowRight,
  Upload,
  Image as ImageIcon,
  FileText,
  Trash2,
  Plus,
  X,
  ExternalLink,
  Save,
  Globe,
  Settings,
  Search,
  Mail,
  UserRound,
  Wrench,
  Award,
  FolderOpen,
  Briefcase,
  PenTool,
  Sun,
  Moon,
  LogOut,
  UploadCloud,
  CheckCircle2,
  RefreshCw,
  Copy,
  Layers,
  Star,
  CheckCheck,
  Sliders,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Share2,
  Download,
  Calendar,
  ChevronDown,
  TrendingUp,
  PanelLeftClose,
  PanelLeftOpen,
  Code,
  LayoutGrid,
  Bot,
  Zap,
  ShieldCheck,
  Send,
  Link as LinkIcon,
  Compass,
  MessageSquare,
  Filter,
  FileCode,
  FileCheck,
  PhoneCall,
  Clock,
  Menu,
} from 'lucide-react';
import { WhatsappLogo } from '../common/BrandLogos';
import {
  PhilosophyCard,
  WorkProcessStep,
  TechToolItem,
  ServiceItem,
  ProjectItem,
  FreelanceProfileItem,
  ContactSubmission,
  PageSEOConfig,
  MediaAssetItem,
  DocumentItem,
  ClientProofConfig,
} from '../../types/cms';

import { ProjectCardsView } from './ProjectCardsView';
import { ProjectDetailEditor } from './ProjectDetailEditor';
import { ServiceCardsView } from './ServiceCardsView';
import { ClientProofView } from './ClientProofView';
import { FreelanceCardsView } from './FreelanceCardsView';
import { DocumentsView } from './DocumentsView';
import { MediaLibraryView } from './MediaLibraryView';
import { PageBuilderView } from './PageBuilderView';
import { VerticalShowcaseEditor } from './VerticalShowcaseEditor';

export interface ThemeStudioProps {
  isOpen: boolean;
  onClose: () => void;
}

export type AdminSection =
  | 'dashboard'
  // Website
  | 'web-about'
  | 'web-showcase'
  | 'web-philosophy'
  | 'web-tech'
  | 'web-process'
  | 'web-brand'
  | 'web-contact'
  | 'web-inbox'
  // Services
  | 'srv-all'
  // Projects
  | 'proj-all'
  // Content
  | 'cnt-proof'
  | 'cnt-documents'
  | 'cnt-media'
  // Freelance
  | 'fl-all'
  // Page Builder
  | 'page-builder'
  // Settings
  | 'theme-studio'
  | 'set-profile'
  | 'set-seo'
  | 'set-social'
  | 'set-nav'
  | 'set-general';

type DeviceViewport = 'desktop' | 'mobile';

const GOOGLE_FONTS = [
  { name: 'Space Grotesk', category: 'Sans' },
  { name: 'Inter', category: 'Sans' },
  { name: 'Roboto', category: 'Sans' },
  { name: 'Plus Jakarta Sans', category: 'Sans' },
  { name: 'Outfit', category: 'Sans' },
  { name: 'Sora', category: 'Sans' },
  { name: 'Syne', category: 'Sans' },
  { name: 'Playfair Display', category: 'Serif' },
  { name: 'JetBrains Mono', category: 'Mono' },
  { name: 'Fira Code', category: 'Mono' },
];

export const ThemeStudio: React.FC<ThemeStudioProps> = ({ isOpen, onClose }) => {
  const {
    cmsData,
    updateField,
    isElementVisible,
    toggleElementVisibility,
    saveToSupabase,
    resetToDefaults,
    uploadMedia,
  } = useCMS();

  // Navigation & View State
  const [activeSection, setActiveSection] = useState<AdminSection>('proj-all');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [deviceViewport, setDeviceViewport] = useState<DeviceViewport>('desktop');
  const [isPreviewOn, setIsPreviewOn] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [previewKey, setPreviewKey] = useState(0);

  // Dedicated Active Editing Project State
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  // Group Expand / Collapse State
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    website: true,
    services: true,
    projects: true,
    content: true,
    freelance: true,
    settings: true,
  });

  // Tech Stack Active Tab
  const [techCategoryTab, setTechCategoryTab] = useState<string>('All');

  // Contact Inquiries Tab / Filter
  const [inboxStatusFilter, setInboxStatusFilter] = useState<string>('all');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const toggleGroup = (grp: string) => {
    setExpandedGroups((prev) => ({ ...prev, [grp]: !prev[grp] }));
  };

  const handlePublish = async () => {
    setIsSaving(true);
    const success = await saveToSupabase();
    setIsSaving(false);
    if (success) {
      showToast('✦ Published to Supabase & Live CDN successfully!');
      setPreviewKey((k) => k + 1);
    } else {
      showToast('⚠️ Saved locally to cache.');
    }
  };

  const handleApplyPreset = (preset: ExtendedThemePreset) => {
    updateField('theme', {
      activePresetId: preset.id,
      primaryColor: preset.primary,
      accentColor: preset.accent,
      fontFamily: preset.fontHeading || 'Space Grotesk',
      borderRadius: preset.borderRadius || '16px',
    });
    showToast(`Applied preset: ${preset.name}`);
  };

  if (!isOpen) return null;

  const getViewportWidth = () => {
    return deviceViewport === 'mobile' ? '390px' : '100%';
  };

  // ---------------------------------------------------------------------------
  // SIDEBAR NAVIGATION CONFIGURATION
  // ---------------------------------------------------------------------------
  const sidebarSections = [
    {
      groupKey: 'website',
      groupTitle: 'Website Content',
      groupIcon: Globe,
      items: [
        { id: 'web-about' as AdminSection, label: 'About Studio', icon: FileText },
        { id: 'web-showcase' as AdminSection, label: 'Hero Showcase (Vertical)', icon: Sparkles, badge: 'NEW' },
        { id: 'web-philosophy' as AdminSection, label: 'Core Philosophy', icon: Sparkles },
        { id: 'web-tech' as AdminSection, label: 'Tech Stack & Engines', icon: Code },
        { id: 'web-process' as AdminSection, label: 'Work Process', icon: Layers },
        { id: 'web-brand' as AdminSection, label: 'Brand Assets & Media', icon: ImageIcon },
        { id: 'web-contact' as AdminSection, label: 'Contact Us', icon: Mail },
        {
          id: 'web-inbox' as AdminSection,
          label: 'Contact Submissions',
          icon: MessageSquare,
          badge: `${cmsData.contactSubmissions?.filter((s) => s.status === 'unread').length || 0}`,
        },
      ],
    },
    {
      groupKey: 'services',
      groupTitle: 'Services',
      groupIcon: Layers,
      items: [
        { id: 'srv-all' as AdminSection, label: 'All Services (Cards)', icon: LayoutGrid },
      ],
    },
    {
      groupKey: 'projects',
      groupTitle: 'Projects',
      groupIcon: FolderOpen,
      items: [
        { id: 'proj-all' as AdminSection, label: 'All Projects (Cards)', icon: LayoutGrid, badge: `${cmsData.projectsList?.length || 4}` },
      ],
    },
    {
      groupKey: 'content',
      groupTitle: 'Content & Proof',
      groupIcon: FileCheck,
      items: [
        { id: 'cnt-proof' as AdminSection, label: 'Client Proof (Letter)', icon: FileCheck, badge: 'PDF' },
        { id: 'cnt-documents' as AdminSection, label: 'Documents & PDFs', icon: FileText },
        { id: 'cnt-media' as AdminSection, label: 'Media Library', icon: ImageIcon },
      ],
    },
    {
      groupKey: 'freelance',
      groupTitle: 'Freelance / Trust',
      groupIcon: Award,
      items: [
        { id: 'fl-all' as AdminSection, label: 'All Channels & WhatsApp', icon: Star },
      ],
    },
    {
      groupKey: 'settings',
      groupTitle: 'Settings',
      groupIcon: Settings,
      items: [
        { id: 'page-builder' as AdminSection, label: 'Page Builder (Sections)', icon: Layout, badge: 'CMS' },
        { id: 'theme-studio' as AdminSection, label: 'Theme Studio (Design OS)', icon: Palette, badge: 'PRO' },
        { id: 'set-profile' as AdminSection, label: 'Profile Settings', icon: UserRound },
        { id: 'set-seo' as AdminSection, label: 'SEO Management', icon: Globe },
        { id: 'set-social' as AdminSection, label: 'Social Links', icon: Share2 },
        { id: 'set-nav' as AdminSection, label: 'Navigation Menu', icon: Compass },
        { id: 'set-general' as AdminSection, label: 'General & Backup', icon: Sliders },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex bg-[#F0F4F8] text-slate-800 font-sans overflow-hidden animate-in fade-in duration-200">
      
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR */}
      {/* ========================================================================= */}
      <aside
        className={`bg-white border-r border-slate-200/80 flex flex-col shrink-0 transition-all duration-300 ease-in-out z-20 shadow-[2px_0_16px_rgba(0,0,0,0.03)] ${
          isSidebarCollapsed ? 'w-20 items-center' : 'w-72'
        }`}
      >
        {/* Top Control Header & Close Button */}
        <div className={`p-4 pb-2 flex items-center ${isSidebarCollapsed ? 'flex-col gap-3 justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400 hover:opacity-80 transition-opacity cursor-pointer shadow-2xs" onClick={onClose} title="Exit Studio" />
            <span className="w-3 h-3 rounded-full bg-amber-400 hover:opacity-80 transition-opacity cursor-pointer shadow-2xs" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 hover:opacity-80 transition-opacity cursor-pointer shadow-2xs" />
          </div>
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isSidebarCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </button>
        </div>

        {/* Brand Avatar Card */}
        <div className={`px-4 py-2 ${isSidebarCollapsed ? 'my-1' : ''}`}>
          <div
            onClick={() => setActiveSection('dashboard')}
            className={`p-3 rounded-3xl bg-slate-50/90 border border-slate-100 flex items-center justify-between hover:bg-slate-100/80 transition-colors shadow-2xs cursor-pointer ${
              activeSection === 'dashboard' ? 'ring-2 ring-[#F29F67]' : ''
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#F29F67] to-amber-400 shadow-sm overflow-hidden">
                  <img
                    src={cmsData.hero.avatarUrl || '/assets/arun-hero-avatar.png'}
                    alt="Arun Pandian Logo"
                    className="w-full h-full object-cover rounded-full bg-slate-900"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              {!isSidebarCollapsed && (
                <div className="min-w-0">
                  <div className="text-xs font-black text-slate-900 truncate tracking-tight flex items-center gap-1">
                    <span>Arun Pandian</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8824A]" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold truncate">CMS Control Room</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Global Quick Search Input */}
        {!isSidebarCollapsed && (
          <div className="px-4 py-1.5">
            <div className="relative">
              <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search CMS sections..."
                className="w-full pl-9 pr-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/60 focus:border-[#F29F67] focus:bg-white text-xs text-slate-800 placeholder-slate-400 outline-hidden transition-all shadow-2xs"
              />
            </div>
          </div>
        )}

        {/* Navigation Groups List */}
        <div className={`flex-1 overflow-y-auto py-2 space-y-3 scrollbar-none ${isSidebarCollapsed ? 'px-2 flex flex-col items-center' : 'px-3'}`}>
          {/* Dashboard Direct Capsule */}
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`w-full px-4 py-2.5 rounded-full text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
              activeSection === 'dashboard'
                ? 'bg-gradient-to-r from-[#F29F67] to-[#E8824A] text-white shadow-md shadow-orange-500/20'
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Layout size={15} />
              {!isSidebarCollapsed && <span>Dashboard Overview</span>}
            </div>
          </button>

          {/* Grouped Sidebar Items */}
          {sidebarSections.map((grp) => {
            const filteredItems = grp.items.filter((item) =>
              item.label.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (filteredItems.length === 0) return null;

            const isExpanded = expandedGroups[grp.groupKey] !== false;

            return (
              <div key={grp.groupKey} className="space-y-1">
                {!isSidebarCollapsed && (
                  <button
                    onClick={() => toggleGroup(grp.groupKey)}
                    className="w-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-700 flex items-center justify-between cursor-pointer"
                  >
                    <span>{grp.groupTitle}</span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${isExpanded ? '' : '-rotate-90'}`} />
                  </button>
                )}

                {isExpanded &&
                  filteredItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        title={item.label}
                        className={`transition-all cursor-pointer ${
                          isSidebarCollapsed
                            ? `w-10 h-10 rounded-full flex items-center justify-center my-1 ${
                                isActive
                                  ? 'bg-gradient-to-r from-[#F29F67] to-[#E8824A] text-white shadow-md'
                                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                              }`
                            : `w-full px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center justify-between ${
                                isActive
                                  ? 'bg-orange-50 border border-orange-200 text-[#E8824A] shadow-xs'
                                  : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                              }`
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Icon size={15} className={isActive ? 'text-[#E8824A]' : 'text-slate-500'} />
                          {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                        </div>
                        {!isSidebarCollapsed && (item as any).badge && (
                          <span
                            className={`px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase ${
                              isActive ? 'bg-[#E8824A] text-white' : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {(item as any).badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-200/80 flex items-center justify-between">
          {!isSidebarCollapsed ? (
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] text-slate-400 font-mono font-semibold">v3.0 Visual CMS</span>
              <button
                onClick={onClose}
                className="px-3 py-1.5 rounded-full bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <LogOut size={13} />
                <span>Exit</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              title="Exit Studio"
            >
              <LogOut size={15} />
            </button>
          )}
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN WORKSPACE WITH DUAL-PANE & REAL-TIME IFRAME PREVIEW */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header Bar */}
        <header className="h-16 px-6 bg-white border-b border-slate-200/80 flex items-center justify-between shrink-0 z-10 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 flex items-center gap-2 shadow-2xs">
              <div className="w-5 h-5 rounded-full bg-orange-100 text-[#E8824A] flex items-center justify-center text-[10px] font-black">
                ✦
              </div>
              <span className="text-xs font-bold text-slate-500">Control Room</span>
              <span className="text-slate-300">/</span>
              <span className="text-xs font-black text-slate-900 capitalize">
                {activeSection.replace('web-', '').replace('srv-', '').replace('proj-', '').replace('cnt-', '').replace('fl-', '').replace('set-', '').replace('-', ' ')}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 text-[10px] font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Supabase Realtime
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPreviewOn(!isPreviewOn)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                isPreviewOn ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-white'
              }`}
            >
              {isPreviewOn ? <Eye size={13} /> : <EyeOff size={13} />}
              <span>{isPreviewOn ? 'Preview On' : 'Preview Off'}</span>
            </button>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all"
            >
              <ExternalLink size={13} />
              <span>Public Site</span>
            </a>

            <button
              onClick={handlePublish}
              disabled={isSaving}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#F29F67] via-[#E8824A] to-amber-500 hover:opacity-95 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-orange-500/25 flex items-center gap-2 cursor-pointer transition-all active:scale-98"
            >
              {isSaving ? <RefreshCw size={13} className="animate-spin" /> : <Save size={13} />}
              <span>{isSaving ? 'Publishing...' : 'Publish to Live'}</span>
            </button>
          </div>
        </header>

        {/* Dual-Pane Workspace */}
        <div className="flex-1 flex gap-4 p-4 min-h-0 overflow-hidden">
          
          {/* LEFT PANE: EDITING FORMS & CONTENT MANAGEMENT MODULES */}
          <div className={`flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden ${
            isPreviewOn ? 'w-full lg:w-[480px] xl:w-[540px]' : 'w-full max-w-5xl mx-auto'
          }`}>
            <div className="h-12 px-5 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Sliders size={14} className="text-[#E8824A]" />
                <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                  {activeSection.replace('web-', 'Website: ').replace('srv-', 'Services: ').replace('proj-', 'Projects: ').replace('cnt-', 'Content: ').replace('fl-', 'Freelance: ').replace('set-', 'Settings: ').replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-none">
              
              {/* 1. DASHBOARD */}
              {activeSection === 'dashboard' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200/80 text-center">
                      <div className="text-2xl font-black text-[#E8824A]">{cmsData.servicesList?.length || 5}</div>
                      <div className="text-[10px] text-orange-900 font-bold uppercase mt-1">Active Services</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-center">
                      <div className="text-2xl font-black text-blue-600">{cmsData.projectsList?.length || 4}</div>
                      <div className="text-[10px] text-blue-900 font-bold uppercase mt-1">Total Projects</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-center">
                      <div className="text-2xl font-black text-emerald-600">{cmsData.techTools?.length || 18}</div>
                      <div className="text-[10px] text-emerald-900 font-bold uppercase mt-1">Verified Tech</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        Supabase DB Engine Active
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">PostgreSQL Realtime</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Every change made in this dashboard automatically broadcasts to your public portfolio, subpages, and live responsive preview frame.
                    </p>
                  </div>
                </div>
              )}

              {/* 2. PROJECTS (CARD-BASED CMS CATALOG) */}
              {activeSection === 'proj-all' && (
                <ProjectCardsView
                  projects={cmsData.projectsList || []}
                  onSelectProject={(proj) => setEditingProject(proj)}
                  onCreateProject={() => {
                    const newProj: ProjectItem = {
                      id: 'proj-' + Date.now(),
                      title: 'New SaaS Project',
                      slug: 'project-' + Date.now(),
                      category: 'SaaS Platform',
                      badge: 'NEW DELIVERABLE',
                      shortDescription: 'Project case study description and architectural scope.',
                      fullCaseStudy: 'Comprehensive technical case study covering challenges, system architecture, and client outcomes.',
                      technologies: ['React 19', 'Next.js', 'PostgreSQL', 'TypeScript'],
                      thumbnailUrl: '/assets/zappy-hero-preview.webp',
                      status: 'Live Production',
                      featured: true,
                      published: true,
                      displayOrder: (cmsData.projectsList || []).length + 1,
                      metrics: [
                        { label: 'Latency', value: '< 500ms' },
                        { label: 'Uptime', value: '99.99%' },
                      ],
                    };
                    const updated = [...(cmsData.projectsList || []), newProj];
                    updateField('projectsList', updated);
                    setEditingProject(newProj);
                  }}
                  onDuplicateProject={(proj) => {
                    const dup: ProjectItem = {
                      ...proj,
                      id: 'proj-' + Date.now(),
                      title: proj.title + ' (Copy)',
                      slug: proj.slug + '-copy',
                      displayOrder: (cmsData.projectsList || []).length + 1,
                    };
                    const updated = [...(cmsData.projectsList || []), dup];
                    updateField('projectsList', updated);
                    showToast('Duplicated project');
                  }}
                  onDeleteProject={(id) => {
                    const updated = (cmsData.projectsList || []).filter((p) => p.id !== id);
                    updateField('projectsList', updated);
                    showToast('Deleted project');
                  }}
                  onToggleFeatured={(proj) => {
                    const updated = (cmsData.projectsList || []).map((p) =>
                      p.id === proj.id ? { ...p, featured: !p.featured } : p
                    );
                    updateField('projectsList', updated);
                    showToast(proj.featured ? 'Removed featured' : 'Marked featured');
                  }}
                  onTogglePublished={(proj) => {
                    const updated = (cmsData.projectsList || []).map((p) =>
                      p.id === proj.id ? { ...p, published: !p.published } : p
                    );
                    updateField('projectsList', updated);
                    showToast(proj.published ? 'Unpublished' : 'Published');
                  }}
                />
              )}

              {/* 3. SERVICES (CARD-BASED CMS CATALOG) */}
              {activeSection === 'srv-all' && (
                <ServiceCardsView
                  services={cmsData.servicesList || []}
                  onSaveServices={(updated) => updateField('servicesList', updated)}
                />
              )}

              {/* 4. CLIENT PROOF & RECOMMENDATION LETTERS */}
              {activeSection === 'cnt-proof' && (
                <ClientProofView
                  clientProof={cmsData.clientProof}
                  onSaveClientProof={(updated) => updateField('clientProof', updated)}
                  onUploadMedia={uploadMedia}
                />
              )}

              {/* 5. DOCUMENTS & PDFS REPOSITORY */}
              {activeSection === 'cnt-documents' && (
                <DocumentsView
                  documents={cmsData.documentsList || []}
                  onSaveDocuments={(docs) => updateField('documentsList', docs)}
                  onUploadMedia={uploadMedia}
                />
              )}

              {/* 6. MEDIA LIBRARY */}
              {activeSection === 'cnt-media' && (
                <MediaLibraryView
                  mediaList={cmsData.customMediaList || []}
                  onSaveMediaList={(media) => updateField('customMediaList', media)}
                  onUploadMedia={uploadMedia}
                />
              )}

              {/* 7. FREELANCE PROFILES & DIRECT WHATSAPP */}
              {activeSection === 'fl-all' && (
                <FreelanceCardsView
                  profiles={cmsData.freelanceProfiles || []}
                  onSaveProfiles={(profs) => updateField('freelanceProfiles', profs)}
                />
              )}

              {/* 8. PAGE BUILDER / SECTION MANAGER */}
              {activeSection === 'page-builder' && (
                <PageBuilderView />
              )}

              {/* 9. ABOUT STUDIO */}
              {activeSection === 'web-about' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Tagline / Professional Headline</label>
                    <input
                      type="text"
                      value={cmsData.about.tagline}
                      onChange={(e) => updateField('about', { tagline: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Bio Paragraph 1 (Introduction &amp; Expertise)</label>
                    <textarea
                      rows={3}
                      value={cmsData.about.bioParagraph1}
                      onChange={(e) => updateField('about', { bioParagraph1: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Bio Paragraph 2 (Platform &amp; Architecture Focus)</label>
                    <textarea
                      rows={3}
                      value={cmsData.about.bioParagraph2}
                      onChange={(e) => updateField('about', { bioParagraph2: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none"
                    />
                  </div>
                </div>
              )}

              {/* VERTICAL PROJECT SHOWCASE (CONTINUOUS MARQUEE) */}
              {activeSection === 'web-showcase' && (
                <VerticalShowcaseEditor />
              )}

              {/* 10. CORE PHILOSOPHY */}
              {activeSection === 'web-philosophy' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      Philosophy Pillars ({(cmsData.philosophies || []).length})
                    </span>
                  </div>
                  {(cmsData.philosophies || []).map((card, idx) => (
                    <div key={card.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <input
                          type="text"
                          value={card.title}
                          onChange={(e) => {
                            const copy = [...(cmsData.philosophies || [])];
                            copy[idx] = { ...copy[idx], title: e.target.value };
                            updateField('philosophies', copy);
                          }}
                          className="p-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold flex-1"
                        />
                      </div>
                      <textarea
                        rows={2}
                        value={card.description}
                        onChange={(e) => {
                          const copy = [...(cmsData.philosophies || [])];
                          copy[idx] = { ...copy[idx], description: e.target.value };
                          updateField('philosophies', copy);
                        }}
                        className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs resize-none"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* 11. TECH STACK & ENGINES */}
              {activeSection === 'web-tech' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      Verified Tooling ({(cmsData.techTools || []).length})
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {(cmsData.techTools || []).map((tool, idx) => (
                      <div key={tool.name} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="text-xs font-bold text-slate-900">{tool.name}</div>
                        <div className="text-[10px] text-slate-500">{tool.category}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 12. WORK PROCESS */}
              {activeSection === 'web-process' && (
                <div className="space-y-4">
                  {(cmsData.workProcesses || []).map((step, idx) => (
                    <div key={step.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-xs">
                          {step.stepNumber}
                        </span>
                        <input
                          type="text"
                          value={step.title}
                          onChange={(e) => {
                            const copy = [...(cmsData.workProcesses || [])];
                            copy[idx] = { ...copy[idx], title: e.target.value };
                            updateField('workProcesses', copy);
                          }}
                          className="flex-1 p-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                        />
                      </div>
                      <textarea
                        rows={2}
                        value={step.description}
                        onChange={(e) => {
                          const copy = [...(cmsData.workProcesses || [])];
                          copy[idx] = { ...copy[idx], description: e.target.value };
                          updateField('workProcesses', copy);
                        }}
                        className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs resize-none"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* 13. BRAND ASSETS */}
              {activeSection === 'web-brand' && (
                <MediaLibraryView
                  mediaList={cmsData.customMediaList || []}
                  onSaveMediaList={(media) => updateField('customMediaList', media)}
                  onUploadMedia={uploadMedia}
                />
              )}

              {/* 14. CONTACT US & INQUIRIES */}
              {(activeSection === 'web-contact' || activeSection === 'web-inbox') && (
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <span className="text-xs font-black text-slate-900 block">Direct Contact Channels</span>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Email</label>
                      <input
                        type="email"
                        value={cmsData.contact.email}
                        onChange={(e) => updateField('contact', { email: e.target.value })}
                        className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp Number (+Country Code)</label>
                      <input
                        type="text"
                        value={cmsData.contact.whatsappNumber}
                        onChange={(e) => updateField('contact', { whatsappNumber: e.target.value })}
                        className="w-full p-2 rounded-lg bg-white border border-slate-200 text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* Submissions Inbox */}
                  <div className="space-y-3">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                      Client Inquiries ({cmsData.contactSubmissions?.length || 0})
                    </span>
                    <div className="space-y-2">
                      {(cmsData.contactSubmissions || []).map((sub) => (
                        <div key={sub.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-xs text-slate-900">{sub.name} ({sub.email})</div>
                            <span className="text-[10px] text-slate-400 font-mono">{sub.createdAt.split('T')[0]}</span>
                          </div>
                          <div className="text-xs font-bold text-[#E8824A]">{sub.subject}</div>
                          <p className="text-xs text-slate-700 bg-white p-2 rounded-lg border border-slate-100">{sub.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 15. THEME STUDIO (17 PRESETS) */}
              {activeSection === 'theme-studio' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {THEME_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => handleApplyPreset(preset)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          cmsData.theme.activePresetId === preset.id
                            ? 'bg-orange-50 border-[#F29F67] ring-1 ring-[#F29F67] shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-2">
                          {preset.previewColors.map((col, i) => (
                            <span key={i} className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: col }} />
                          ))}
                        </div>
                        <div className="text-xs font-black text-slate-900">{preset.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 16. SEO MANAGEMENT */}
              {activeSection === 'set-seo' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Global Site Title</label>
                    <input
                      type="text"
                      value={cmsData.seo.siteTitle}
                      onChange={(e) => updateField('seo', { siteTitle: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Meta Description</label>
                    <textarea
                      rows={3}
                      value={cmsData.seo.metaDescription}
                      onChange={(e) => updateField('seo', { metaDescription: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs resize-none"
                    />
                  </div>
                </div>
              )}

              {/* 17. GENERAL & BACKUP */}
              {activeSection === 'set-general' && (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      if (confirm('Reset CMS configuration to default initial state?')) {
                        resetToDefaults();
                        showToast('Reset to default values');
                      }
                    }}
                    className="w-full py-3 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs border border-red-200 transition-colors cursor-pointer"
                  >
                    Reset All to Factory Defaults
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT PANE: RESPONSIVE IFRAME PREVIEW */}
          {isPreviewOn && (
            <div className="flex-1 flex flex-col bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden min-w-0">
              <div className="h-12 px-5 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 ml-2">Live Public Preview</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDeviceViewport('desktop')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      deviceViewport === 'desktop' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title="Desktop (100%)"
                  >
                    <Monitor size={15} />
                  </button>
                  <button
                    onClick={() => setDeviceViewport('mobile')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      deviceViewport === 'mobile' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title="Mobile Viewport (390px)"
                  >
                    <Smartphone size={15} />
                  </button>
                  <button
                    onClick={() => setPreviewKey((k) => k + 1)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Reload Preview"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>

              {/* Viewport Frame */}
              <div className="flex-1 bg-slate-950 p-2 sm:p-4 flex items-center justify-center overflow-hidden">
                <div
                  style={{ width: getViewportWidth(), height: '100%' }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 relative border border-slate-800"
                >
                  <iframe
                    key={previewKey}
                    src="/"
                    title="Live CMS Preview"
                    className="w-full h-full border-none"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. DEDICATED INDEPENDENT PROJECT DETAIL EDITOR MODAL */}
      {/* ========================================================================= */}
      {editingProject && (
        <ProjectDetailEditor
          project={editingProject}
          onSave={(updated) => {
            const nextList = (cmsData.projectsList || []).map((p) =>
              p.id === updated.id ? updated : p
            );
            updateField('projectsList', nextList);
            setEditingProject(null);
            showToast(`Saved "${updated.title}" successfully!`);
            setPreviewKey((k) => k + 1);
          }}
          onClose={() => setEditingProject(null)}
          onUploadMedia={uploadMedia}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[200] px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold shadow-2xl flex items-center gap-2 border border-slate-700 animate-in slide-in-from-bottom-3 duration-200">
          <Sparkles size={14} className="text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
