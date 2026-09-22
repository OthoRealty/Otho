import { GrowthCorridor } from '../types';

export const GROWTH_CORRIDORS: GrowthCorridor[] = [
  {
    id: 'neopolis',
    name: 'NEOPOLIS',
    badge: 'Ultra-High-Density Central Business Vector',
    subtext: 'Hyderabad’s premier vertical growth node, master-planned for ultra-high-rise commercial and luxury residential towers.',
    description: 'Neopolis represents the next frontier of Hyderabad’s urban skyline. Designed as a high-density, greenfield master-planned ecosystem adjacent to Kokapet with 45-meter wide arterial access, Trumpet interchange connectivity to the Outer Ring Road (ORR), and unhindered floor space index (FSI) provisions.',
    dynamics: [
      'Pinnacle of luxury high-rise residential towers and global grade-A corporate headquarters.',
      'Direct grade-separated connectivity to Financial District and Rajiv Gandhi International Airport.',
      'Substantial corporate balance-sheet land investments by top-tier institutional developers.'
    ],
    keyDrivers: [
      'ORR Trumpet Interchange & Arterial Link Roads',
      'High-Density Commercial FSI Framework',
      'Proximity to Gandipet / Osman Sagar environmental buffer'
    ],
    assetClasses: ['Ultra-Luxury Residential', 'Grade-A Commercial HQ', 'Mixed-Use Institutional'],
    mapCoordinates: { x: 38, y: 52 }
  },
  {
    id: 'financial-district',
    name: 'FINANCIAL DISTRICT',
    badge: 'Institutional Financial & Technology Core',
    subtext: 'The financial engine of Telangana hosting global multinational corporations, US tech majors, and institutional capital.',
    description: 'The established anchor of West Hyderabad’s corporate prominence. Financial District (Nanakramguda) combines massive grade-A office absorption with premium lifestyle developments, global business schools, and hospitality infrastructure.',
    dynamics: [
      'Primary demand driver for executive housing and luxury rental yields.',
      'Sustained absorption by banking, financial services, insurance (BFSI), and tech conglomerates.',
      'Mature social infrastructure including international hospitals and 5-star hospitality.'
    ],
    keyDrivers: [
      'Concentration of Global Capability Centers (GCCs)',
      'Direct ORR Junction 19 Connectivity',
      'Phase 2 Metro Rail Expansion Alignment'
    ],
    assetClasses: ['Institutional Office Parks', 'Executive High-Rise Suites', 'Corporate Hospitality'],
    mapCoordinates: { x: 44, y: 44 }
  },
  {
    id: 'kokapet',
    name: 'KOKAPET',
    badge: 'Golden Mile Luxury Residential & Mixed-Use',
    subtext: 'Prime residential enclave of Hyderabad offering panoramic lake vistas and high-specification gated skyscraper communities.',
    description: 'Directly bordering the Financial District, Kokapet has transformed from an emerging belt into Hyderabad’s benchmark luxury residential destination, characterised by expansive tower footprints and private lifestyle infrastructure.',
    dynamics: [
      'Benchmark pricing for premium 3BHK, 4BHK, and penthouse residences.',
      'Direct linkage to Neopolis through upcoming master-plan arterial flyovers.',
      'High proportion of end-user NRI and corporate leadership buyer interest.'
    ],
    keyDrivers: [
      'Kokapet SEZ & Tech Park ecosystem',
      'Direct access to ORR Service Road network',
      'Proximity to elite educational academies'
    ],
    assetClasses: ['Gated Skyscraper Communities', 'Luxury Condominiums', 'High-Street Retail'],
    mapCoordinates: { x: 32, y: 50 }
  },
  {
    id: 'hitech-city',
    name: 'HITECH CITY',
    badge: 'The Established Technology Epicentre',
    subtext: 'The birthplace of Hyderabad’s modern IT economy, evolving into a dense commercial, retail, and transit-rich urban node.',
    description: 'Madhapur and HITEC City anchor the historical bedrock of the city’s technology revolution. As available land has condensed, the corridor has transitioned into high-value redevelopment, asset upgrades, and transit-oriented retail destinations.',
    dynamics: [
      'Unbroken institutional occupancy across prime technology parks.',
      'Dense lifestyle ecosystem with vibrant F&B and retail corridors.',
      'Consistently low commercial vacancy rates across established assets.'
    ],
    keyDrivers: [
      'Operational Hyderabad Metro Blue Line',
      'Proximity to Inorbit, Durgam Cheruvu cable bridge, and Jubilee Hills',
      'Established corporate cluster ecosystem'
    ],
    assetClasses: ['Commercial Tech Parks', 'Boutique Office Assets', 'Urban Retail & F&B Hubs'],
    mapCoordinates: { x: 55, y: 32 }
  },
  {
    id: 'gachibowli',
    name: 'GACHIBOWLI',
    badge: 'Enterprise Hub & Sports-Institutional District',
    subtext: 'Strategic crossroads bridging HITEC City, Financial District, and central Hyderabad with sports and healthcare complexes.',
    description: 'A pivotal zone with diverse institutional anchors, premier universities (HCU, ISB), sports complexes, and sprawling corporate campuses. Gachibowli serves as an essential residential catchment for executive workforces.',
    dynamics: [
      'Strong dual demand from corporate tenants and healthcare/academic professionals.',
      'Strategic arterial junction connecting Old Mumbai Highway to the ORR.',
      'Active commercial leasing across mid-to-large corporate office towers.'
    ],
    keyDrivers: [
      'Gachibowli Flyover & Bio-Diversity Junction grade separators',
      'Presence of Indian School of Business & University campuses',
      'Comprehensive multispecialty healthcare corridor'
    ],
    assetClasses: ['Mixed-Use Commercial', 'Mid-to-Luxury Gated Residences', 'Commercial Showrooms'],
    mapCoordinates: { x: 48, y: 38 }
  },
  {
    id: 'narsingi',
    name: 'NARSINGI',
    badge: 'Strategic Western Gateway & Residential Haven',
    subtext: 'The immediate residential buffer to Financial District and Kokapet, known for sprawling villa enclaves and tranquil connectivity.',
    description: 'Situated at Junction 18 of the Outer Ring Road, Narsingi acts as the gateway to Gandipet, Financial District, and the Airport Corridor. It bridges ultra-luxury low-density villa developments with emerging high-rise residential towers.',
    dynamics: [
      'Preferred address for premium low-density villa enclaves and family-centric communities.',
      'Zero-traffic transit to Kokapet and Financial District via service roads.',
      'Immediate access to international schools along the Puppalguda-Narsingi belt.'
    ],
    keyDrivers: [
      'Direct ORR Junction 18 Access',
      'Proximity to Osman Sagar & Musi riverfront rejuvenation',
      'Cluster of premier international K-12 institutions'
    ],
    assetClasses: ['Luxury Triplex Villas', 'Premium Mid-Rise Living', 'Boutique Neighborhood Retail'],
    mapCoordinates: { x: 40, y: 62 }
  },
  {
    id: 'airport-corridor',
    name: 'AIRPORT CORRIDOR',
    badge: 'Rapid Logistics, Aerospace & Hospitality Corridor',
    subtext: 'The southern growth axis connecting Shamshabad, GMR Aerospace & Logistics Park, and the emerging regional manufacturing nodes.',
    description: 'Anchored by Rajiv Gandhi International Airport and connected via the 8-lane expressway and ORR, this corridor is the epicenter for industrial parks, global logistics, aviation maintenance (MRO), and future hospitality districts.',
    dynamics: [
      'Massive land banks driving structured plotted developments and farmhouse retreats.',
      'Major expansion of aerospace SEZs and pharmaceutical logistics hubs.',
      'Strategic destination for long-term institutional land assembly.'
    ],
    keyDrivers: [
      'Direct Airport Express Connectivity & ORR Arterial',
      'GMR Aerospace, Aviation & Logistics SEZs',
      'Upcoming Regional Ring Road (RRR) Southern Interchange'
    ],
    assetClasses: ['Plotted Land Layouts', 'Aviation & Logistics Parks', 'Hospitality & Leisure Estates'],
    mapCoordinates: { x: 60, y: 78 }
  }
];
