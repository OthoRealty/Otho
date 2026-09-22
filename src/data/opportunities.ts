import { Opportunity } from '../types';

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    projectName: 'Neopolis High-Rise Residential Mandate',
    isPlaceholder: true,
    location: 'Neopolis, Kokapet, Hyderabad',
    corridor: 'Neopolis',
    assetType: 'Residential',
    status: 'Advisory & Mandate Evaluation',
    description: 'Ultra-luxury high-rise residential tower development comprising expansive 4BHK sky residences with panoramic views of the Osman Sagar reserve. Structured for private investor syndicates and end-user acquisition.',
    highlights: [
      'Strategic plot positioning with 45m arterial frontage',
      'Exclusive low-density footprint: 2 sky-residences per core',
      'Master clubhouse & private lifestyle deck planned across 50,000+ sft'
    ],
    scaleMetrics: [
      { label: 'Classification', value: 'Ultra-Luxury High-Rise' },
      { label: 'Typology', value: '4 BHK Sky Villas & Penthouses' },
      { label: 'Advisory Scope', value: 'Product Structuring & Sales Mandate' },
      { label: 'Corridor Node', value: 'Neopolis Zone 1' }
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'opp-2',
    projectName: 'Financial District Grade-A Commercial Asset',
    isPlaceholder: true,
    location: 'Nanakramguda, Financial District, Hyderabad',
    corridor: 'Financial District',
    assetType: 'Commercial',
    status: 'Institutional Advisory Stage',
    description: 'Pre-leased institutional office development designed to IGBC Platinum green standards, catering to Fortune 500 technology and global banking tenants seeking long-term operational leases.',
    highlights: [
      'Efficient 35,000 sft floor plates with column-free architectural layouts',
      'Double-height entrance atrium with integrated ESG-compliant MEP systems',
      'High-velocity destination-controlled elevator banks'
    ],
    scaleMetrics: [
      { label: 'Asset Class', value: 'Grade-A Commercial Office' },
      { label: 'Certification Spec', value: 'IGBC Platinum Benchmark' },
      { label: 'Advisory Scope', value: 'Pre-Lease Evaluation & Exit Strategy' },
      { label: 'Corridor Node', value: 'Financial District Core' }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'opp-3',
    projectName: 'Narsingi-Gandipet Gated Villa Enclave',
    isPlaceholder: true,
    location: 'Narsingi, Outer Ring Road, Hyderabad',
    corridor: 'Narsingi',
    assetType: 'Residential',
    status: 'Private Investor Evaluation',
    description: 'Bespoke enclave of contemporary triplex villas nestled in the serene Gandipet buffer, offering rapid commute to the Financial District while preserving tranquil, low-density green living.',
    highlights: [
      'Individual private gardens, private elevator shafts, and terrace sundecks',
      'Gated community with 100% underground cabling and stormwater management',
      '5-minute transit window to ORR Junction 18'
    ],
    scaleMetrics: [
      { label: 'Asset Class', value: 'Bespoke Triplex Gated Villas' },
      { label: 'Density', value: 'Low-Density Executive Enclave' },
      { label: 'Advisory Scope', value: 'Project Marketing & Investor Placement' },
      { label: 'Corridor Node', value: 'Narsingi-Gandipet Link' }
    ],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'opp-4',
    projectName: 'Shamshabad Airport Corridor Land Assembly',
    isPlaceholder: true,
    location: 'Shamshabad, Southern ORR, Hyderabad',
    corridor: 'Airport Corridor',
    assetType: 'Land & Development',
    status: 'Land Feasibility Study',
    description: 'Strategic contiguous land parcel earmarked for a curated plotted community and logistics-ancillary development, directly leveraging proximity to the international cargo and aerospace terminals.',
    highlights: [
      'Clear title parcel with direct arterial access to 8-lane express highway',
      'Favourable topography suitable for phased plotted layout execution',
      'High appreciation corridor driven by airport infrastructure and RRR alignment'
    ],
    scaleMetrics: [
      { label: 'Asset Class', value: 'Plotted Development Land' },
      { label: 'Feasibility Stage', value: 'HBU & Due Diligence' },
      { label: 'Advisory Scope', value: 'Joint Development & Positioning' },
      { label: 'Corridor Node', value: 'Shamshabad South' }
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'opp-5',
    projectName: 'Kokapet Golden Mile High-Street Retail & Suites',
    isPlaceholder: true,
    location: 'Kokapet Golden Mile, Hyderabad',
    corridor: 'Kokapet',
    assetType: 'Commercial',
    status: 'Project Marketing Mandate',
    description: 'Curated mixed-use development combining premium pedestrian high-street retail, experiential dining boulevards, and boutique serviced executive suites facing prime arterial flow.',
    highlights: [
      'Prime 200-ft road frontage capturing high-income Kokapet residential footfalls',
      'Tiered outdoor terrace dining with dedicated valet and subterranean parking',
      'High rental yield potential driven by surrounding ultra-dense luxury towers'
    ],
    scaleMetrics: [
      { label: 'Asset Class', value: 'High-Street Retail & Suites' },
      { label: 'Format', value: 'Mixed-Use Urban Destination' },
      { label: 'Advisory Scope', value: 'Retail Zoning & Investor Syndicate' },
      { label: 'Corridor Node', value: 'Kokapet Golden Mile' }
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'opp-6',
    projectName: 'HITEC-Madhapur Urban Redevelopment Opportunity',
    isPlaceholder: true,
    location: 'Madhapur Core, Hyderabad',
    corridor: 'Hitech City',
    assetType: 'Land & Development',
    status: 'Repositioning Advisory',
    description: 'Strategic brownfield asset evaluated for commercial repositioning into modern corporate headquarters or boutique healthcare-hospitality flagship in the prime technology heartland.',
    highlights: [
      'Rare unencumbered site in 100% occupied central Madhapur zone',
      'Transit proximity: 400m from operational Metro station',
      'Adaptive reuse or new-age vertical development potential'
    ],
    scaleMetrics: [
      { label: 'Asset Class', value: 'Urban Redevelopment Land' },
      { label: 'Zoning', value: 'Commercial / Institutional' },
      { label: 'Advisory Scope', value: 'Highest & Best Use Assessment' },
      { label: 'Corridor Node', value: 'Madhapur Tech Spine' }
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  }
];
