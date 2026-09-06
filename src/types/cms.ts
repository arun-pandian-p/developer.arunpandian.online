export interface ThemePreset {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  bgLight: string;
  textLight: string;
  previewColors: string[];
  fontHeading?: string;
  borderRadius?: string;
}

export interface HeroConfig {
  badgeText: string;
  headlineLine1: string;
  headlineOutline?: string;
  headlineHighlight: string;
  headlineLine2: string;
  bioText: string;
  location: string;
  statusText: string;
  statusColor: string;
  experienceYears: string;
  projectsCount: string;
  satisfactionRate: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  avatarUrl: string;
  bgImageUrl: string;
}

export interface PhilosophyCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName?: string;
  displayOrder: number;
  active: boolean;
}

export interface WorkProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconName?: string;
  displayOrder: number;
  active: boolean;
}

export interface TechToolItem {
  id?: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI & Automation' | 'DevOps & Tools';
  description: string;
  badge: string;
  badgeBg?: string;
  badgeText?: string;
  skillLevel?: 'Proficient' | 'Advanced' | 'Expert' | string;
  iconSvg?: string;
  displayOrder?: number;
  active?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  iconName?: string;
  heroImageUrl?: string;
  technologies: string[];
  features: string[];
  benefits?: string[];
  process?: string[];
  pricingDisplay?: string;
  ctaText: string;
  ctaLink: string;
  displayOrder: number;
  featured: boolean;
  active: boolean;
}

export interface SectionBackgroundConfig {
  type: 'default' | 'solid' | 'gradient' | 'image' | 'video';
  solidColor?: string;
  gradientColor1?: string;
  gradientColor2?: string;
  gradientDirection?: 'to-r' | 'to-b' | 'to-br' | 'to-tr' | 'to-l' | 'to-t';
  imageUrl?: string;
  imagePosition?: string;
  imageSize?: 'cover' | 'contain' | 'auto';
  overlayOpacity?: number;
  blur?: number;
  brightness?: number;
}

export interface ProjectMetricItem {
  label: string;
  value: string;
  icon?: string;
}

export interface ProjectCapabilityCard {
  title: string;
  description: string;
  badge?: string;
  icon?: string;
}

export interface ProjectSectionItem {
  id: string;
  type:
    | 'hero'
    | 'overview'
    | 'metrics'
    | 'capabilities'
    | 'features'
    | 'techStack'
    | 'architecture'
    | 'screenshots'
    | 'documentation'
    | 'clientProof'
    | 'cta'
    | 'custom';
  title: string;
  subtitle?: string;
  description?: string;
  visible: boolean;
  background?: SectionBackgroundConfig;
  images?: Array<{ url: string; caption?: string; altText?: string }>;
  metrics?: ProjectMetricItem[];
  capabilities?: ProjectCapabilityCard[];
  features?: string[];
  techStack?: string[];
  ctaText?: string;
  ctaLink?: string;
  content?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  badge?: string;
  subtitle?: string;
  shortDescription: string;
  fullCaseStudy?: string;
  category: string;
  technologies: string[];
  thumbnailUrl: string;
  featuredImageUrl?: string;
  galleryUrls?: string[];
  galleryLayout?: 'grid' | 'masonry' | 'carousel' | 'two-column' | 'full-width';
  demoUrl?: string;
  githubUrl?: string;
  clientUrl?: string;
  pdfUrl?: string;
  status: 'Live Production' | 'Live' | 'Completed' | 'In Progress' | 'Archived';
  completionDate?: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  sections?: ProjectSectionItem[];
  metrics?: ProjectMetricItem[];
  capabilities?: ProjectCapabilityCard[];
}

export interface DocumentItem {
  id: string;
  title: string;
  description?: string;
  fileUrl: string;
  thumbnailUrl?: string;
  category: 'Recommendation' | 'Case Study' | 'Technical' | 'Certificate' | 'Report' | 'Other';
  date?: string;
  version?: string;
  isPublic: boolean;
  featured: boolean;
  downloadEnabled: boolean;
  previewEnabled: boolean;
  displayOrder: number;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  quote: string;
  ratingText?: string;
  avatarUrl?: string;
  pdfDocumentUrl?: string;
  verificationStatus: 'Verified' | 'Pending' | 'Official';
  featured: boolean;
  displayOrder: number;
}

export interface ClientProofConfig {
  companyName: string;
  projectTitle: string;
  quote: string;
  clientName: string;
  role: string;
  pdfDocumentUrl: string;
  screenshotUrl: string;
  liveUrl: string;
  summary: string;
  ratingText: string;
  isPubliclyVisible?: boolean;
}

export interface FreelanceProfileItem {
  id: string;
  name: string;
  badgeText: string;
  rating?: number;
  reviewCount?: number;
  profileUrl: string;
  ctaText?: string;
  ctaLink?: string;
  description?: string;
  color?: string;
  highlights?: string[];
  displayOrder: number;
  active: boolean;
  isWhatsApp?: boolean;
  whatsappNumber?: string;
  prefilledMessage?: string;
}

export interface VerticalShowcaseItem {
  id: string;
  title: string;
  category: string;
  caption?: string;
  imageUrl: string;
  targetUrl?: string;
  projectSlug?: string;
  altText?: string;
  displayOrder: number;
  active: boolean;
  featured?: boolean;
}

export interface VerticalShowcaseConfig {
  enabled: boolean;
  sectionBadge: string;
  heading: string;
  highlightText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  speed: 'slow' | 'medium' | 'fast';
  direction: 'up' | 'down';
  gapPixels: number;
  borderRadius: string;
  showCaptions: boolean;
  autoAnimate: boolean;
  mobileAnimate: boolean;
  items: VerticalShowcaseItem[];
}

export interface ContactConfig {
  heading: string;
  description: string;
  email: string;
  whatsappNumber: string;
  whatsappPrefilledMessage: string;
  linkedinUrl: string;
  githubUrl: string;
  fiverrUrl?: string;
  upworkUrl?: string;
  ctaText: string;
  formRecipientEmail: string;
  formSuccessMessage: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read' | 'replied' | 'archived';
}

export interface PageSEOConfig {
  pagePath: string;
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex: boolean;
}

export interface SEOConfig {
  siteTitle: string;
  metaDescription: string;
  faviconUrl: string;
  ogImage: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  perPageSEO?: PageSEOConfig[];
}

export interface SocialLinksConfig {
  linkedin: string;
  github: string;
  twitter: string;
  whatsapp: string;
  email: string;
  fiverr: string;
  upwork: string;
  freelancer: string;
}

export interface NavigationColumn {
  id: string;
  key: string;
  title: string;
  links: Array<{
    label: string;
    subId?: string;
    href?: string;
    badge?: string;
  }>;
}

export interface AboutConfig {
  tagline: string;
  bioParagraph1: string;
  bioParagraph2: string;
  avatarUrl: string;
  whatsappNumber: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  availableForHire: boolean;
}

export interface ShowcaseSlideConfig {
  id: string;
  title: string;
  subtitle: string;
  type: 'ai-agent' | 'zappy-saas' | 'carpediem' | 'custom';
  tagline?: string;
  description?: string;
  mediaType?: 'image' | 'video' | 'pdf' | 'interactive';
  mediaUrl?: string;
  liveUrl?: string;
  tags?: string[];
  features?: string[];
  enabled: boolean;
}

export interface ServicePillarConfig {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  techStack?: string[];
  deliverables?: string[];
  iconName?: string;
}

export interface FreelanceChannelConfig {
  name: string;
  badgeText: string;
  rating?: number;
  reviewCount?: number;
  profileUrl?: string;
  url?: string;
  color?: string;
  highlights?: string[];
}

export interface MediaAssetItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'pdf' | 'document' | 'svg';
  url: string;
  altText?: string;
  uploadedAt: string;
  fileSizeBytes?: number;
  usageCount?: number;
}

export interface ElementStyleConfig {
  width?: number | string;
  height?: number | string;
  maxWidth?: string;
  minHeight?: number | string;
  aspectRatio?: string;
  scaleFactor?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  padding?: { top?: number; right?: number; bottom?: number; left?: number };
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  margin?: { top?: number; right?: number; bottom?: number; left?: number };
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  lineHeight?: number;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number | string;
  borderWidth?: string;
  borderColor?: string;
  opacity?: number;
  hoverAnimation?: 'float' | 'pulse' | 'bounce' | 'glitch' | 'wiggle' | 'none';
  boxShadow?: string;
}

export interface SiteCMSData {
  theme: {
    activePresetId: string;
    primaryColor: string;
    accentColor: string;
    fontFamily: string;
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | string;
    glassEffect: boolean;
    scaleFactor?: number;
    bgLight?: string;
    textLight?: string;
    animationPackage?: string;
    cursorType?: 'default' | 'dot' | 'bubble' | 'invert' | 'crosshair' | 'none';
  };
  seo: SEOConfig;
  hero: HeroConfig;
  about: AboutConfig;
  philosophies: PhilosophyCard[];
  workProcesses: WorkProcessStep[];
  techTools: TechToolItem[];
  servicesList: ServiceItem[];
  projectsList: ProjectItem[];
  clientProof: ClientProofConfig;
  freelanceProfiles: FreelanceProfileItem[];
  contact: ContactConfig;
  contactSubmissions: ContactSubmission[];
  socialLinks: SocialLinksConfig;
  navigation: NavigationColumn[];
  customMediaList: MediaAssetItem[];
  mediaAssets?: MediaAssetItem[];
  elementVisibility?: Record<string, boolean>;
  elementStyles?: Record<string, ElementStyleConfig>;
  documentsList?: DocumentItem[];
  testimonialsList?: TestimonialItem[];
  verticalShowcase?: VerticalShowcaseConfig;
  // Backwards-compatible fields:
  showcaseSlides?: ShowcaseSlideConfig[];
  servicePillars?: ServicePillarConfig[];
  freelanceChannels?: FreelanceChannelConfig[];
  updatedAt: string;
}
