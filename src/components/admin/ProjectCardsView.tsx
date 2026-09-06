import React, { useState } from 'react';
import {
  Search,
  Plus,
  Grid,
  List,
  ExternalLink,
  MoreVertical,
  Edit,
  Eye,
  Copy,
  Trash2,
  Sparkles,
  CheckCircle2,
  Clock,
  Archive,
  FileText,
  Layers,
  ArrowUpDown,
  Tag,
  Star,
} from 'lucide-react';
import { ProjectItem } from '../../types/cms';

interface ProjectCardsViewProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onCreateProject: () => void;
  onDuplicateProject: (project: ProjectItem) => void;
  onDeleteProject: (projectId: string) => void;
  onToggleFeatured: (project: ProjectItem) => void;
  onTogglePublished: (project: ProjectItem) => void;
}

export const ProjectCardsView: React.FC<ProjectCardsViewProps> = ({
  projects,
  onSelectProject,
  onCreateProject,
  onDuplicateProject,
  onDeleteProject,
  onToggleFeatured,
  onTogglePublished,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'order' | 'title' | 'status' | 'date'>('order');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  // Extract all unique categories
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

  // Filter & Sort Logic
  const filteredProjects = projects
    .filter((proj) => {
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = categoryFilter === 'All' || proj.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'status') return a.status.localeCompare(b.status);
      if (sortBy === 'date') return (b.completionDate || '').localeCompare(a.completionDate || '');
      return (a.displayOrder || 0) - (b.displayOrder || 0);
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live Production':
      case 'Live':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Progress':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* ── 1. Top Action & Filter Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Project Deliverables &amp; Case Studies</span>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E8824A] text-xs font-mono font-bold">
              {projects.length} Total
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage independent project case studies, screenshots, metrics, and architecture.
          </p>
        </div>

        <button
          onClick={onCreateProject}
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shrink-0"
        >
          <Plus size={15} />
          <span>Add New Project</span>
        </button>
      </div>

      {/* ── 2. Filters & View Switcher ── */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title, tech stack, or description..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#F29F67] shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Sort Select */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 shadow-2xs">
              <ArrowUpDown size={13} className="text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-bold text-slate-700 bg-transparent outline-hidden cursor-pointer"
              >
                <option value="order">Default Order</option>
                <option value="title">Alphabetical (A-Z)</option>
                <option value="status">Status</option>
                <option value="date">Newest Date</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white border border-slate-200 rounded-xl p-0.5 shadow-2xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Grid View"
              >
                <Grid size={14} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
                title="List View"
              >
                <List size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = categoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 3. Cards Grid View ── */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#F29F67]/50 transition-all duration-200 flex flex-col overflow-hidden relative"
            >
              {/* Card Thumbnail / Header */}
              <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden shrink-0">
                <img
                  src={project.thumbnailUrl || '/assets/zappy-hero-preview.webp'}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/zappy-hero-preview.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono font-black uppercase tracking-wider shadow-sm">
                    {project.category || 'Deliverable'}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold flex items-center gap-1 shadow-sm">
                      <Star size={10} className="fill-slate-950" /> Featured
                    </span>
                  )}
                </div>

                {/* Status Pill */}
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-md shadow-xs ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Context Menu Trigger */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(activeMenuId === project.id ? null : project.id);
                    }}
                    className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <MoreVertical size={14} />
                  </button>

                  {/* Dropdown Popup Menu */}
                  {activeMenuId === project.id && (
                    <div
                      className="absolute right-0 top-9 w-44 rounded-2xl bg-white border border-slate-200 shadow-xl py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => {
                          onSelectProject(project);
                          setActiveMenuId(null);
                        }}
                        className="w-full px-3.5 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Edit size={13} className="text-[#E8824A]" /> Edit Case Study
                      </button>
                      <button
                        onClick={() => {
                          onToggleFeatured(project);
                          setActiveMenuId(null);
                        }}
                        className="w-full px-3.5 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Star size={13} className="text-amber-500" />
                        {project.featured ? 'Remove Featured' : 'Mark as Featured'}
                      </button>
                      <button
                        onClick={() => {
                          onDuplicateProject(project);
                          setActiveMenuId(null);
                        }}
                        className="w-full px-3.5 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Copy size={13} className="text-blue-500" /> Duplicate
                      </button>
                      <button
                        onClick={() => {
                          onTogglePublished(project);
                          setActiveMenuId(null);
                        }}
                        className="w-full px-3.5 py-2 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Eye size={13} className="text-emerald-500" />
                        {project.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <div className="h-px bg-slate-100 my-1" />
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${project.title}"?`)) {
                            onDeleteProject(project.id);
                          }
                          setActiveMenuId(null);
                        }}
                        className="w-full px-3.5 py-2 text-left text-xs font-bold text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Trash2 size={13} /> Delete Project
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-900 tracking-tight group-hover:text-[#E8824A] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {(project.technologies || []).slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.technologies || []).length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-mono font-bold">
                      +{(project.technologies || []).length - 4}
                    </span>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Edit size={12} />
                    <span>Edit Project</span>
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors cursor-pointer"
                      title="Visit Live URL"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── 4. List View Mode ── */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-16 h-12 rounded-xl bg-slate-950 overflow-hidden shrink-0">
                  <img
                    src={project.thumbnailUrl || '/assets/zappy-hero-preview.webp'}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black text-slate-900 truncate">{project.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate max-w-lg mt-0.5">{project.shortDescription}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>

                <button
                  onClick={() => onSelectProject(project)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Edit size={12} /> Edit
                </button>

                <button
                  onClick={() => onDuplicateProject(project)}
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  title="Duplicate"
                >
                  <Copy size={13} />
                </button>

                <button
                  onClick={() => {
                    if (confirm(`Delete "${project.title}"?`)) onDeleteProject(project.id);
                  }}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  title="Delete"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <Layers size={36} className="mx-auto text-slate-400" />
          <h3 className="text-sm font-bold text-slate-800">No projects found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No projects matched your search criteria. Try adjusting your keywords or category filter.
          </p>
          <button
            onClick={onCreateProject}
            className="px-4 py-2 rounded-xl bg-[#F29F67] text-white text-xs font-bold cursor-pointer"
          >
            Create New Project
          </button>
        </div>
      )}
    </div>
  );
};
