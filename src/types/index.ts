export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string[];
  image: string;
}

export interface GrowthCorridor {
  id: string;
  name: string;
  badge: string;
  subtext: string;
  description: string;
  dynamics: string[];
  keyDrivers: string[];
  assetClasses: string[];
  mapCoordinates: { x: number; y: number };
}

export interface Opportunity {
  id: string;
  projectName: string;
  isPlaceholder: boolean;
  location: string;
  corridor: string;
  assetType: 'Residential' | 'Commercial' | 'Land & Development' | 'Plotted';
  status: string;
  description: string;
  highlights: string[];
  scaleMetrics: {
    label: string;
    value: string;
  }[];
  image: string;
}

export interface InsightArticle {
  id: string;
  category: 'MARKET' | 'INVESTMENT' | 'DEVELOPMENT' | 'HYDERABAD' | 'ADVISORY';
  title: string;
  date: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  fullBody: string[];
  authorRole: string;
}

export interface ProcessStepItem {
  number: string;
  name: string;
  tagline: string;
  detail: string;
  deliverables: string[];
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}
