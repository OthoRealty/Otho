export interface ServiceItem {
  slug: string;
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string[];
  image: string;
}

export interface GrowthCorridor {
  slug: string;
  id: string;
  name: string;
  badge: string;
  subtext: string;
  description: string;
  dynamics: string[];
  keyDrivers: string[];
  infraStatus: {
    name: string;
    detail: string;
    status: 'CONFIRMED' | 'LIKELY' | 'UNFUNDED' | 'UNCERTAIN';
  }[];
  assetClasses: string[];
  mapCoordinates: { x: number; y: number };
}

export interface ProjectReview {
  slug: string;
  publishStatus: 'published' | 'draft';
  featuredOrder?: number;
  id: number;
  name: string;
  developer: string;
  locality: string;
  bhk: number;
  sba: number; // Super built-up area (sq ft)
  carpet: number; // RERA usable carpet area (sq ft)
  rate: number; // Quoted rate ₹ / sq ft
  priceRangeCr: string; // Total investment range e.g. "₹2.68 Cr - ₹4.50 Cr"
  luxuryTier: string; // e.g. "Ultra-Luxury Skyscraper", "Signature Lakefront"
  landShare: number; // Land share per unit
  possession: string;
  status: string;
  progress: number;
  score: number;
  amenities: string[];
  summary: string;
  positives: string[];
  negatives: string[];
  image: string;
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
  slug: string;
  publishStatus: 'published' | 'draft';
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
