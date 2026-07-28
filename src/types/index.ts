export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: 'SaaS' | 'Website' | 'AI Agent' | 'n8n Automation';
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  isFeatured: boolean;
  image: string;
  multiTenantFeatures?: {
    tenantCount: number;
    roles: string[];
    workspaceIsolation: boolean;
    tenantSwitchingDemo: boolean;
  };
}

export interface ClientProof {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  projectTitle: string;
  appreciationLetterUrl?: string;
  summary: string;
  keyDeliverables: string[];
  quote: string;
}

export interface FreelancePlatform {
  name: 'Fiverr' | 'Upwork' | 'Freelancer.com';
  profileUrl: string;
  rating: number;
  reviewCount: number;
  badgeText: string;
  highlights: string[];
  color: string;
}

export interface WorkflowNode {
  id: string;
  label: string;
  type: 'trigger' | 'ai' | 'tool' | 'action' | 'crm';
  description: string;
  icon: string;
}

export interface AIReasoningStep {
  step: number;
  phase: 'User Input' | 'Reasoning' | 'Tool Selection' | 'API Call' | 'Action Executed';
  detail: string;
  codeSnippet?: string;
  timestamp: string;
}
