import { ProcessStepItem } from '../types';

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    name: 'IDENTIFY',
    tagline: 'Find the right opportunity.',
    detail: 'We scan growth corridors, evaluate land parcels, review project mandates, and source off-market assets that align with defined capital and commercial criteria.',
    deliverables: [
      'Micro-market corridor screening',
      'Asset inventory & off-market discovery',
      'Initial feasibility & alignment audit'
    ]
  },
  {
    number: '02',
    name: 'ANALYSE',
    tagline: 'Study location, market, asset and commercial potential.',
    detail: 'We conduct rigorous ground-level diligence: dissecting infrastructure catalysts, catchment demographics, zoning regulations, legal titling, and financial yield dynamics.',
    deliverables: [
      'Infrastructure impact & zoning audit',
      'Comparative pricing & absorption analysis',
      'Risk profiling & yield scenario models'
    ]
  },
  {
    number: '03',
    name: 'STRATEGISE',
    tagline: 'Build the right positioning and route to market.',
    detail: 'We design clear positioning, pricing architecture, transaction structures, or marketing go-to-market strategies tailored specifically to the asset class.',
    deliverables: [
      'Product typologies & pricing matrix',
      'Target buyer & tenant personas',
      'Transaction structure & exit roadmaps'
    ]
  },
  {
    number: '04',
    name: 'EXECUTE',
    tagline: 'Move from opportunity to measurable action.',
    detail: 'We execute with institutional precision: deploying high-velocity project marketing, coordinating deal documentation, and facilitating smooth stakeholder closing.',
    deliverables: [
      'Multi-channel marketing deployment',
      'High-intent qualified engagement',
      'Transaction advisory & documentation support'
    ]
  },
  {
    number: '05',
    name: 'GROW',
    tagline: 'Build long-term value.',
    detail: 'Real estate value unfolds over time. We maintain relationship continuity, tracking micro-market shifts, lease renewals, and strategic capital reallocations.',
    deliverables: [
      'Post-acquisition portfolio review',
      'Corridor growth monitoring',
      'Capital reinvestment & secondary advisory'
    ]
  }
];
