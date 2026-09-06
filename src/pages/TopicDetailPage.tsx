import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { getSubTopicDetails } from '../data/subtopicsData';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppModal } from '../components/WhatsAppModal';
import { ProjectIntakeModal } from '../components/ProjectIntakeModal';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Send,
  Download,
  Play,
  Pause,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Video,
  FileCheck,
  FileText,
  Layers,
  Award,
} from 'lucide-react';
import { WhatsappLogo } from '../components/common/BrandLogos';

interface SubTopicNavDef {
  id: string;
  label: string;
  badge?: string;
  desc: string;
}

const TOPIC_CONFIG: Record<
  string,
  {
    key: string;
    title: string;
    badge: string;
    heroHeadline: string;
    heroSubtitle: string;
    subtopics: SubTopicNavDef[];
  }
> = {
  home: {
    key: 'home',
    title: 'Home',
    badge: 'HOME & ARCHITECTURE',
    heroHeadline: 'Developer Arun Pandian',
    heroSubtitle:
      'High-velocity software engineering, autonomous AI agent pipelines, and enterprise-grade web platforms built for scale.',
    subtopics: [
      { id: 'studio-about', label: 'About Studio', desc: 'Full-stack developer bio, background, and proven engineering track record.' },
      { id: 'studio-philosophy', label: 'Core Philosophy', desc: 'Type-safe contracts, minimal dependencies, and resilient zero-bloat architecture.' },
      { id: 'studio-tech', label: 'Tech Stack & Engines', desc: 'React 19, Next.js, FastAPI, PostgreSQL, Supabase, n8n, and Docker.' },
      { id: 'studio-process', label: 'Work Process', desc: 'Agile 4-phase delivery from architecture spec to live cloud deployment.' },
      { id: 'studio-brand', label: 'Brand Assets & Media', desc: 'Official studio logos, avatars, design system tokens, and media.' },
      { id: 'studio-contact', label: 'Contact Us', desc: 'Direct access to Arun Pandian via WhatsApp, Email, or Project Intake.' },
    ],
  },
  studio: {
    key: 'home',
    title: 'Home',
    badge: 'HOME & ARCHITECTURE',
    heroHeadline: 'Developer Arun Pandian',
    heroSubtitle:
      'High-velocity software engineering, autonomous AI agent pipelines, and enterprise-grade web platforms built for scale.',
    subtopics: [
      { id: 'studio-about', label: 'About Studio', desc: 'Full-stack developer bio, background, and proven engineering track record.' },
      { id: 'studio-philosophy', label: 'Core Philosophy', desc: 'Type-safe contracts, minimal dependencies, and resilient zero-bloat architecture.' },
      { id: 'studio-tech', label: 'Tech Stack & Engines', desc: 'React 19, Next.js, FastAPI, PostgreSQL, Supabase, n8n, and Docker.' },
      { id: 'studio-process', label: 'Work Process', desc: 'Agile 4-phase delivery from architecture spec to live cloud deployment.' },
      { id: 'studio-brand', label: 'Brand Assets & Media', desc: 'Official studio logos, avatars, design system tokens, and media.' },
      { id: 'studio-contact', label: 'Contact Us', desc: 'Direct access to Arun Pandian via WhatsApp, Email, or Project Intake.' },
    ],
  },
  services: {
    key: 'services',
    title: 'Services',
    badge: 'ENGINEERING SOLUTIONS',
    heroHeadline: 'Full-Stack & Autonomous AI Services',
    heroSubtitle:
      'Turnkey software development, custom LLM agents with RAG memory, n8n automated backends, and multi-tenant SaaS systems.',
    subtopics: [
      { id: 'service-fullstack', label: 'Full-Stack MERN & Next.js', desc: 'High-performance SSR/SSG web applications with real-time sync.' },
      { id: 'service-ai', label: 'Autonomous AI Agents & RAG', desc: 'Intelligent LLM assistants connected to custom vector embeddings.' },
      { id: 'service-n8n', label: 'n8n Enterprise Automations', desc: 'Orchestrating 50+ webhooks, CRMs, Stripe, and AI pipelines.' },
      { id: 'service-api', label: 'API & Microservices', desc: 'Scalable RESTful/GraphQL endpoints with PostgreSQL and Docker.' },
      { id: 'service-saas', label: 'Multi-Tenant SaaS', badge: 'New', desc: 'Turnkey SaaS foundations with Stripe billing, team roles, and RLS.' },
    ],
  },
  projects: {
    key: 'projects',
    title: 'Projects',
    badge: 'FLAGSHIP DELIVERABLES',
    heroHeadline: 'Featured Client & SaaS Projects',
    heroSubtitle:
      'Explore live applications, production SaaS platforms, AI agent demos, and verified client letters of recommendation.',
    subtopics: [
      { id: 'project-zappy', label: 'Zappy SaaS Platform', desc: 'Flagship multi-tenant SaaS application with real-time canvas.' },
      { id: 'project-ai-demo', label: 'AI Agent Demo Assistant', desc: 'Interactive LLM chat assistant with document query capabilities.' },
      { id: 'project-n8n', label: 'n8n Automation Pipeline', desc: 'Enterprise webhook orchestration and AI business pipelines.' },
      { id: 'project-carpediem', label: 'Carpediem Tech Platform', desc: 'Verified client project with agency grade design and 100% score.' },
      { id: 'project-cloud', label: 'Cloud API & Microservices', desc: 'High-concurrency PostgreSQL, Docker CI/CD and API telemetry.' },
      { id: 'project-proof', label: 'Client Proof (PDF Letter)', desc: 'Official signed and stamped corporate recommendation document.' },
    ],
  },
  freelance: {
    key: 'freelance',
    title: 'Freelance',
    badge: 'VERIFIED PLATFORMS',
    heroHeadline: 'Freelance Channels & Direct Contracts',
    heroSubtitle:
      'Available for hire across top global freelance platforms or direct milestone-based contracts with guaranteed delivery.',
    subtopics: [
      { id: 'freelance-fiverr', label: 'Fiverr Top Rated Seller', desc: '5.0-star rating across 30+ web development and AI orders.' },
      { id: 'freelance-upwork', label: 'Upwork Enterprise Expert', desc: 'Verified hourly contracts with transparent logs and escrow protection.' },
      { id: 'freelance-freelancer', label: 'Freelancer Verified', desc: 'Proven track record of delivering end-to-end technical projects.' },
      { id: 'freelance-whatsapp', label: 'Direct WhatsApp Contract', desc: 'Instant communication, daily voice sprints, and fast quotes.' },
    ],
  },
};

const ALL_PROJECT_CARDS = [
  {
    id: 'project-zappy',
    title: 'Zappy Multi-Tenant SaaS Platform',
    category: 'Multi-Tenant SaaS',
    tagline: 'Real-Time Restaurant Canvas & Stripe Billing',
    description: 'Flagship multi-tenant restaurant operating platform with workspace isolation, custom subscription tiers, and domain routing.',
    imageUrl: '/assets/zappy-hero-preview.png',
    status: 'Live Production',
    tags: ['Next.js 16', 'React 19', 'PostgreSQL', 'Stripe', 'Prisma'],
    liveUrl: 'https://zappy.ind.in',
  },
  {
    id: 'project-ai-demo',
    title: 'Autonomous AI Agent & Document RAG',
    category: 'Autonomous AI',
    tagline: 'Vector Retrieval, Tool Invocation & LLM Reasoning',
    description: 'Live interactive AI Agent system capable of PDF document ingestion, vector embeddings search, and autonomous multi-turn reasoning.',
    imageUrl: '/assets/ai-agent-preview.jpg',
    status: 'Interactive Demo',
    tags: ['GPT-4o', 'Claude 3.7', 'LangChain', 'FastAPI', 'Vector DB'],
    liveUrl: 'https://developer.arunpandian.online',
  },
  {
    id: 'project-n8n',
    title: 'n8n Enterprise Automation Pipeline',
    category: 'Workflow Automation',
    tagline: 'Multi-System Webhook Triggers & Automated Operations',
    description: 'End-to-end automated business workflows connecting Stripe payments, OpenAI content analysis, CRM updates, and real-time Slack notifications.',
    imageUrl: '/assets/n8n-workflow-preview.jpg',
    status: 'Automated 24/7',
    tags: ['n8n', 'Node.js', 'FastAPI', 'Stripe API', 'Docker'],
    liveUrl: 'https://developer.arunpandian.online',
  },
  {
    id: 'project-carpediem',
    title: 'Carpediem Tech Corporate Platform',
    category: 'Enterprise Web',
    tagline: 'Agency-Grade Visual Design & Verified Client MSME',
    description: 'Corporate platform engineered with agency-standard visual design, perfect Lighthouse performance metrics, and verified client letter.',
    imageUrl: '/assets/carpediem-hero-preview.png',
    status: 'Client Deployed',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://carpediemtechinnovations.in/',
    pdfUrl: '/assets/carpediem-proof.pdf',
  },
  {
    id: 'project-cloud',
    title: 'Cloud API & Microservices Infrastructure',
    category: 'Cloud Architecture',
    tagline: 'High-Concurrency PostgreSQL & Docker Clusters',
    description: 'Production-grade backend engineering with Docker container orchestration, Redis caching, connection pooling, and sub-20ms latency.',
    imageUrl: '/assets/cloud-api-preview.jpg',
    status: 'High Concurrency',
    tags: ['PostgreSQL', 'FastAPI', 'Docker', 'Redis', 'Kubernetes'],
    liveUrl: 'https://developer.arunpandian.online',
  },
  {
    id: 'project-proof',
    title: 'Official Client Proof & MSME Letter',
    category: 'Client Verification',
    tagline: 'Signed & Stamped Corporate Recommendation Document',
    description: 'Verified executive recommendation documentation celebrating on-time delivery, exceptional visual aesthetics, and resilient architecture.',
    imageUrl: '/assets/client-proof-preview.jpg',
    status: '5/5 Stars Verified',
    tags: ['Official MSME', 'PDF Letter', 'Client Certified', '5/5 Rating'],
    pdfUrl: '/assets/carpediem-proof.pdf',
    liveUrl: 'https://carpediemtechinnovations.in/',
  },
];

export interface TopicDetailPageProps {
  defaultTopic?: string;
}

export const TopicDetailPage: React.FC<TopicDetailPageProps> = ({ defaultTopic }) => {
  const { topicId: routeTopicId, subId: routeSubId } = useParams<{
    topicId?: string;
    subId?: string;
  }>();

  const navigate = useNavigate();
  const { cmsData } = useCMS();

  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'stone'>('dark');

  // Determine active topic key
  let currentTopicKey = defaultTopic || 'home';
  if (routeTopicId && TOPIC_CONFIG[routeTopicId]) {
    currentTopicKey = routeTopicId;
  } else if (routeSubId) {
    for (const [tKey, cfg] of Object.entries(TOPIC_CONFIG)) {
      if (cfg.subtopics.some((s) => s.id === routeSubId)) {
        currentTopicKey = tKey;
        break;
      }
    }
  } else if (routeTopicId) {
    for (const [tKey, cfg] of Object.entries(TOPIC_CONFIG)) {
      if (cfg.subtopics.some((s) => s.id === routeTopicId)) {
        currentTopicKey = tKey;
        break;
      }
    }
  }

  const topicConfig = TOPIC_CONFIG[currentTopicKey] || TOPIC_CONFIG.home;
  const defaultSub = topicConfig.subtopics[0]?.id || 'studio-about';

  const initialSubId =
    routeSubId ||
    (routeTopicId && !TOPIC_CONFIG[routeTopicId]
      ? routeTopicId
      : defaultSub);

  const [activeSubId, setActiveSubId] = useState<string>(initialSubId);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (routeSubId) {
      setActiveSubId(routeSubId);
    } else if (routeTopicId && !TOPIC_CONFIG[routeTopicId]) {
      setActiveSubId(routeTopicId);
    } else {
      setActiveSubId(topicConfig.subtopics[0]?.id || 'studio-about');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [routeTopicId, routeSubId, topicConfig]);

  const activeDetails = getSubTopicDetails(activeSubId, cmsData);

  const slideshowScreens = [
    {
      id: 'screen-1',
      title: 'Interactive Production Canvas & UI Interface',
      subtitle: 'Real-time responsive dashboard with sub-second state reconciliation and sleek dark theme.',
      imageUrl: activeDetails.id.includes('zappy')
        ? '/assets/zappy-hero-preview.webp'
        : activeDetails.id.includes('carpediem') || activeDetails.id.includes('proof')
        ? '/assets/carpediem-hero-preview.webp'
        : '/assets/arun-banner-brand.png',
      badge: 'LIVE UI CANVAS',
      tags: ['Next.js 16', 'React 19', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      id: 'screen-2',
      title: 'Autonomous LLM Intelligence & Document RAG Search',
      subtitle: 'Vector embeddings lookup with LangChain and OpenAI / Claude streaming token responses.',
      imageUrl: '/assets/arun-banner-brand.png',
      badge: 'AI RAG WORKFLOW',
      tags: ['GPT-4o', 'Claude 3.7', 'Vector DB', 'FastAPI'],
    },
    {
      id: 'screen-3',
      title: 'Enterprise Scalable System Architecture',
      subtitle: 'Strict type safety, minimal latency, and zero-bloat modular design with Docker CI/CD.',
      imageUrl: '/assets/zappy-hero-preview.webp',
      badge: 'ARCHITECTURE SPEC',
      tags: ['TypeScript', 'Docker', 'Redis', 'Supabase'],
    },
    {
      id: 'screen-4',
      title: 'Verified Deliverable & Staging Deployment',
      subtitle: '100% Mobile Ready with all-green Lighthouse performance benchmarks and SSL security.',
      imageUrl: '/assets/carpediem-hero-preview.webp',
      badge: 'PRODUCTION READY',
      tags: ['Vercel', 'CI/CD', 'SSL', '99.99% Uptime'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 1. Top Navbar */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenIntake={() => setIsIntakeOpen(true)}
        onOpenAdmin={() => navigate('/login')}
        onSelectSubTopic={(subId) => {
          if (TOPIC_CONFIG[subId]) {
            navigate(`/topic/${subId}`);
          } else {
            for (const [topKey, cfg] of Object.entries(TOPIC_CONFIG)) {
              if (cfg.subtopics.some((s) => s.id === subId)) {
                navigate(`/topic/${topKey}/${subId}`);
                return;
              }
            }
            navigate(`/subtopic/${subId}`);
          }
        }}
      />

      {/* 2. Sleek Dark Hero Section with High-Visibility Brand Photo Background */}
      <section className="relative pt-24 sm:pt-32 md:pt-36 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-b border-zinc-800/80 overflow-hidden">
        {/* Full-bleed High-Visibility Brand Photo Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/arun-banner-brand.png"
            alt="Arun Pandian - Build Automate Grow"
            className="w-full h-full object-cover object-right sm:object-center opacity-85 transition-opacity duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/hero.png';
            }}
          />
          {/* Enhanced Mobile Gradient to guarantee 100% text clarity across all mobile viewports */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/85 to-[#09090b]/40 sm:bg-gradient-to-r sm:from-[#09090b]/95 sm:via-[#09090b]/65 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent hidden sm:block" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono-code text-zinc-400 mb-4 sm:mb-6 flex-wrap">
            <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold">
              <ArrowLeft size={13} /> Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 font-bold uppercase">{topicConfig.title}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-amber-400 font-bold truncate max-w-[180px] sm:max-w-none">{activeDetails.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 max-w-3xl">
              {/* Pillar Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-mono-code uppercase tracking-wider font-bold">
                <Sparkles size={13} />
                <span>{topicConfig.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
                {topicConfig.heroHeadline}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base md:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl">
                {topicConfig.heroSubtitle}
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setIsIntakeOpen(true)}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-zinc-950 font-black text-xs font-mono-code uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>Start Project Intake</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-xs font-mono-code transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm min-h-[44px]"
              >
                <WhatsappLogo className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Subtopic Switcher Pills Bar with Touch Pan Momentum on Mobile */}
          <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-zinc-800/80 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x">
            {topicConfig.subtopics.map((sub) => {
              const isActive = activeSubId === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => {
                    setActiveSubId(sub.id);
                    navigate(`/topic/${currentTopicKey}/${sub.id}`);
                  }}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F29F67] to-[#E8824A] text-zinc-950 shadow-md font-black scale-102'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                  }`}
                >
                  <span>{sub.label}</span>
                  {sub.badge && (
                    <span className="px-1.5 py-0.2 rounded-full bg-zinc-950 text-amber-400 text-[9px] uppercase font-bold">
                      {sub.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2.5 ALL PROJECTS VISUAL GALLERY (BG WHITE & IMAGE-FIRST WITH ROUTE LINKS) ── */}
      {currentTopicKey === 'projects' && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-zinc-200 text-zinc-900 relative overflow-hidden">
          {/* Subtle White Grid Texture */}
          <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10 space-y-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono-code font-bold uppercase tracking-wider">
                  <Sparkles size={13} className="text-amber-600" />
                  Visual Project Gallery
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-zinc-900 tracking-tight">
                  Featured Applications &amp; Deliverables
                </h2>
              </div>
              <span className="text-xs font-mono-code text-zinc-500">
                Click any project image to inspect specs &amp; launch demo
              </span>
            </div>

            {/* Pure Image-Centric Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {ALL_PROJECT_CARDS.map((proj) => {
                const isCurrent = activeSubId === proj.id;
                return (
                  <div
                    key={proj.id}
                    onClick={() => {
                      setActiveSubId(proj.id);
                      navigate(`/topic/projects/${proj.id}`);
                      const el = document.getElementById('project-detail-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`group relative rounded-2xl overflow-hidden bg-zinc-100 border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                      isCurrent
                        ? 'border-amber-500 ring-2 ring-amber-500/40 shadow-md'
                        : 'border-zinc-200/90 hover:border-zinc-400'
                    }`}
                  >
                    {/* Full-bleed Project Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                      <img
                        src={proj.imageUrl}
                        alt={proj.title}
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 will-change-transform"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/arun-banner-brand.png';
                        }}
                      />

                      {/* Smooth dark gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Top Pill: Category */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono-code font-bold uppercase tracking-wider text-white shadow-sm">
                          {proj.category}
                        </span>
                      </div>

                      {/* Bottom Info Bar Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 text-white">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-bold font-space-grotesk text-white group-hover:text-amber-300 transition-colors truncate">
                            {proj.title}
                          </h3>
                          <ArrowRight size={16} className="text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
                        </div>
                        <p className="text-[11px] font-mono-code text-zinc-300 truncate">
                          {proj.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. Middle Content Section (Clean Crisp White Background with Dark Slate Typography) */}
      <section id="project-detail-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200 text-slate-900 relative overflow-hidden">
        {/* Background White Grid Pattern */}
        <div className="absolute inset-0 bg-white-grid opacity-60 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Primary Deep Dive Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
                
                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F29F67] via-amber-400 to-[#E8824A]" />

                {/* Title & Description */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E8824A] font-bold uppercase tracking-wider">
                    <span className="px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200">
                      {activeDetails.badge}
                    </span>
                    <span>•</span>
                    <span>{activeDetails.categoryTitle}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {activeDetails.title}
                  </h2>

                  <p className="text-lg font-bold text-[#E8824A]">
                    {activeDetails.subtitle}
                  </p>

                  <p className="text-base text-slate-700 leading-relaxed font-normal pt-2">
                    {activeDetails.description}
                  </p>
                </div>

                {/* Key Features & Standards */}
                {activeDetails.features && activeDetails.features.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono-code">
                      Core Capabilities & Engineering Standards
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeDetails.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 transition-colors hover:border-[#F29F67]"
                        >
                          <CheckCircle2 size={18} className="text-[#E8824A] shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-800 font-semibold leading-snug">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Official Tech Stack Pills */}
                {activeDetails.techStack && activeDetails.techStack.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono-code">
                      Technologies & Official Tooling
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeDetails.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono-code font-bold border border-slate-200 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  {activeDetails.liveUrl && (
                    <a
                      href={activeDetails.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-sm"
                    >
                      <span>Visit Live Project / Channel</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {activeDetails.pdfUrl && (
                    <a
                      href={activeDetails.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-orange-50 hover:bg-orange-100 border border-orange-200 text-[#E8824A] font-bold text-xs flex items-center gap-2 transition-all shadow-2xs"
                    >
                      <Download size={14} />
                      <span>Download Official PDF Letter</span>
                    </a>
                  )}

                  <button
                    onClick={() => setIsIntakeOpen(true)}
                    className="px-5 py-3 rounded-full bg-gradient-to-r from-[#F29F67] to-[#E8824A] text-white font-extrabold text-xs flex items-center gap-2 hover:opacity-95 transition-all shadow-md ml-auto cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Request Proposal for this Topic</span>
                  </button>
                </div>
              </div>

              {/* ── SECTION A: INTERACTIVE UI SCREEN SLIDESHOW ── */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#E8824A] font-bold uppercase tracking-wider mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#E8824A] animate-pulse" />
                      <span>Visual Showcase Gallery</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      UI Screens &amp; Architecture Slideshow
                    </h3>
                  </div>

                  {/* Slide Navigation Controls */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-code font-bold text-slate-500 mr-2">
                      0{currentSlideIndex + 1} / 0{slideshowScreens.length}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentSlideIndex((prev) => (prev === 0 ? slideshowScreens.length - 1 : prev - 1))
                      }
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                      title="Previous Screen"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentSlideIndex((prev) => (prev === slideshowScreens.length - 1 ? 0 : prev + 1))
                      }
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                      title="Next Screen"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Active Slide Display Frame */}
                <div className="group relative aspect-[16/9] rounded-2xl bg-slate-950 overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={slideshowScreens[currentSlideIndex].imageUrl}
                    alt={slideshowScreens[currentSlideIndex].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/hero.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/15 text-amber-400 text-xs font-mono-code font-bold uppercase tracking-wider">
                      {slideshowScreens[currentSlideIndex].badge}
                    </span>
                  </div>

                  {/* Zoom Fullscreen Trigger */}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setLightboxImage(slideshowScreens[currentSlideIndex].imageUrl)}
                      className="p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md hover:bg-slate-900 text-white transition-colors cursor-pointer shadow-md"
                      title="Expand Screen Fullscreen"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </div>

                  {/* Bottom Captions & Tech Tags */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                    <h4 className="text-lg font-black tracking-tight drop-shadow-md">
                      {slideshowScreens[currentSlideIndex].title}
                    </h4>
                    <p className="text-xs text-zinc-300 font-medium line-clamp-1">
                      {slideshowScreens[currentSlideIndex].subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {slideshowScreens[currentSlideIndex].tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md text-[10px] font-mono-code font-bold text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Slide Thumbnails Selector Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  {slideshowScreens.map((s, idx) => {
                    const isSelected = currentSlideIndex === idx;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`p-3 rounded-2xl text-left transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-orange-50 border-[#F29F67] shadow-sm ring-1 ring-[#F29F67]'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-[10px] font-mono-code font-black text-[#E8824A] block">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-800 line-clamp-1">
                          {s.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── SECTION B: 4K INTERACTIVE VIDEO WALKTHROUGH DEMO ── */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900 to-black text-white border border-zinc-800 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code font-bold uppercase">
                      <Video size={13} />
                      <span>Interactive Video Demo</span>
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      4K Video &amp; Architecture Walkthrough
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-mono-code font-bold border border-zinc-700 shrink-0">
                    03:45 · 4K 60FPS
                  </span>
                </div>

                {/* Video Player Display Container */}
                <div className="relative aspect-video rounded-2xl bg-zinc-950 overflow-hidden border border-zinc-800 group shadow-2xl">
                  <img
                    src="/assets/arun-banner-brand.png"
                    alt="Video Demo Preview"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isPlayingVideo ? 'scale-105 opacity-90 blur-none' : 'opacity-75 blur-[1px]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Glowing Center Play / Pause Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <button
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#F29F67] to-amber-400 text-zinc-950 flex items-center justify-center shadow-2xl shadow-orange-500/40 hover:scale-110 active:scale-95 transition-all cursor-pointer group-hover:ring-4 group-hover:ring-amber-400/30"
                      aria-label="Play Video Demo"
                    >
                      {isPlayingVideo ? (
                        <Pause size={28} className="fill-zinc-950" />
                      ) : (
                        <Play size={28} className="fill-zinc-950 translate-x-0.5" />
                      )}
                    </button>
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-300 bg-black/70 px-3 py-1 rounded-full border border-amber-400/20 backdrop-blur-md">
                      {isPlayingVideo ? 'Live Staging Stream Playing' : 'Click to Watch Architectural Walkthrough'}
                    </span>
                  </div>

                  {/* Player Timeline Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-code text-zinc-400">
                    <span>{isPlayingVideo ? '01:24' : '00:00'}</span>
                    <div className="flex-1 mx-3 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-[#F29F67] to-amber-400 transition-all duration-1000 ${
                          isPlayingVideo ? 'w-2/5' : 'w-0'
                        }`}
                      />
                    </div>
                    <span>03:45</span>
                  </div>
                </div>

                {/* Walkthrough Chapters Pill List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-zinc-800/80">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs space-y-1">
                    <div className="text-amber-400 font-mono-code font-bold">01. Architecture Spec</div>
                    <p className="text-zinc-400 text-[11px]">Database schema, multi-tenant isolation, RLS rules</p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs space-y-1">
                    <div className="text-amber-400 font-mono-code font-bold">02. Live AI Reasoning</div>
                    <p className="text-zinc-400 text-[11px]">Document parsing, chunking, and LangChain vector search</p>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs space-y-1">
                    <div className="text-amber-400 font-mono-code font-bold">03. Production Staging</div>
                    <p className="text-zinc-400 text-[11px]">Docker deployment, automated CI/CD &amp; sub-600ms latency</p>
                  </div>
                </div>
              </div>

              {/* ── SECTION C: VERIFIED PDF & CLIENT PROOF PREVIEW CARD ── */}
              <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/70 border border-amber-200/90 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-mono-code font-bold uppercase">
                      <FileCheck size={14} className="text-amber-800" />
                      <span>Official Client Verification</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      Verified Client Appreciation Document (PDF)
                    </h3>
                  </div>

                  <a
                    href={activeDetails.pdfUrl || '/assets/carpediem-proof.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs font-mono-code uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
                  >
                    <Download size={14} />
                    <span>Download PDF Document</span>
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Award size={18} className="text-amber-600 shrink-0" />
                        <h4 className="text-sm font-black text-slate-900">
                          {cmsData.clientProof?.companyName || 'Carpediem Tech Innovations'}
                        </h4>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          OFFICIAL STAMPED
                        </span>
                      </div>
                      <p className="text-xs text-amber-900 font-semibold font-mono-code">
                        Project: {cmsData.clientProof?.projectTitle || 'Web Platform & IT Architecture'}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono-code font-bold text-slate-500">Document ID</span>
                      <div className="text-xs font-mono-code font-black text-amber-900">MSME-CERT-2024</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                    "{cmsData.clientProof?.quote || 'Arun demonstrated remarkable technical clarity and diligence throughout our web platform development. Delivering exceptional visual aesthetics and resilient backend architecture on time.'}"
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 size={14} className="text-emerald-600" />
                      <span>Signatory: {cmsData.clientProof?.clientName || 'G. Sivabharathi'} ({cmsData.clientProof?.role || 'Managing Director'})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-[11px] text-amber-800 font-bold">{cmsData.clientProof?.ratingText || '5/5 Stars Verified'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore All Deliverables in this Pillar */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Explore All {topicConfig.title} Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topicConfig.subtopics.map((item) => {
                    const isCurrent = activeSubId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSubId(item.id);
                          navigate(`/topic/${currentTopicKey}/${item.id}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                          isCurrent
                            ? 'bg-orange-50/80 border-[#F29F67] shadow-md ring-1 ring-[#F29F67]'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-black text-slate-900">
                            {item.label}
                          </span>
                          <ArrowUpRight
                            size={16}
                            className={isCurrent ? 'text-[#E8824A]' : 'text-slate-400'}
                          />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Key Metrics Card */}
              {activeDetails.metrics && activeDetails.metrics.length > 0 && (
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono-code">
                    Key Metrics & SLA
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {activeDetails.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center"
                      >
                        <div className="text-lg font-black text-[#E8824A] font-mono-code">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Consultation / Booking Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 text-white shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={cmsData.about?.avatarUrl || '/assets/arun-hero-avatar.png'}
                      alt="Arun Pandian"
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-md"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/arun-headshot.webp';
                      }}
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-zinc-950 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Arun Pandian</h4>
                    <p className="text-xs text-amber-300 font-mono-code">
                      {cmsData.about?.availableForHire !== false ? 'Available for Sprint Hiring' : 'Engaged on Client Sprints'}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {cmsData.about?.bioParagraph2 || 'Need high-velocity engineering, autonomous AI agent workflows, or production Next.js architecture? Connect directly.'}
                </p>

                <div className="space-y-2.5">
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs font-mono-code flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <WhatsappLogo className="w-4 h-4 text-zinc-950" />
                    <span>WhatsApp Sprint Chat</span>
                  </button>

                  <button
                    onClick={() => setIsIntakeOpen(true)}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#F29F67] to-[#E8824A] hover:opacity-95 text-zinc-950 font-black text-xs font-mono-code flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <Calendar size={14} />
                    <span>Book Scoping Consultation</span>
                  </button>
                </div>

                <div className="pt-2 text-center text-[10px] text-zinc-400 font-mono-code flex items-center justify-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>100% NDA & Milestone Delivery Protected</span>
                </div>
              </div>

              {/* Other 3 Topic Pillars Quick Links */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono-code">
                  Other Topic Pillars
                </h3>
                <div className="space-y-2">
                  {Object.entries(TOPIC_CONFIG).map(([tKey, cfg]) => {
                    if (tKey === currentTopicKey) return null;
                    return (
                      <Link
                        key={tKey}
                        to={`/topic/${tKey}`}
                        className="p-3.5 rounded-2xl bg-slate-50 hover:bg-orange-50/80 hover:border-[#F29F67] border border-slate-200 flex items-center justify-between transition-all group"
                      >
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#E8824A]">
                          {cfg.title}
                        </span>
                        <ArrowRight size={13} className="text-slate-400 group-hover:text-[#E8824A]" />
                      </Link>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer
        onOpenIntake={() => setIsIntakeOpen(true)}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      {/* Modals */}
      <WhatsAppModal isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} />
      <ProjectIntakeModal isOpen={isIntakeOpen} onClose={() => setIsIntakeOpen(false)} />

      {/* Fullscreen Image Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img src={lightboxImage} alt="Fullscreen UI Preview" className="w-full h-full object-contain" />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/80 text-white hover:bg-black transition-colors cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDetailPage;
