import React, { useState } from 'react';
import { MapPin, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { OPPORTUNITIES } from '../data/opportunities';
import { Opportunity } from '../types';
import { OpportunityModal } from './OpportunityModal';

interface OpportunitiesProps {
  onInquire: (projectName: string) => void;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({ onInquire }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  const filters = ['All', 'Residential', 'Commercial', 'Land & Development'];

  const filteredOpportunities = activeFilter === 'All'
    ? OPPORTUNITIES
    : OPPORTUNITIES.filter((opp) => opp.assetType === activeFilter);

  return (
    <section id="opportunities" className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#DDD9D0]">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
                CURATED INVENTORY & MANDATES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]">
              SELECTED OPPORTUNITIES
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <span className="text-[10px] uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 border border-amber-200 font-semibold mb-2">
              Specimen Development Profiles
            </span>
            <p className="text-xs sm:text-sm text-[#555555] max-w-sm md:text-right font-light">
              High-value residential, commercial, and land assets structured for private investors and institutional mandates.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 my-8 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 border ${
                activeFilter === filter
                  ? 'bg-[#111111] text-[#F7F5F0] border-[#111111]'
                  : 'bg-white text-[#555555] border-[#DDD9D0] hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Opportunities Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              onClick={() => setSelectedOpportunity(opp)}
              className="group bg-white border border-[#DDD9D0] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-elevated hover:border-[#B08D57] cursor-pointer"
            >
              {/* Card Image Area with Status Badge */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/10">
                <img
                  src={opp.image}
                  alt={opp.projectName}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.95]"
                  loading="lazy"
                />
                {/* Top Badge: Specimen & Asset Type */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 bg-[#111111]/85 text-white backdrop-blur-sm border border-white/20">
                    {opp.assetType}
                  </span>
                  <span className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-amber-500/90 text-white backdrop-blur-sm">
                    Specimen
                  </span>
                </div>

                {/* Bottom Status Tag */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 bg-[#F7F5F0]/95 text-[#111111] border border-[#DDD9D0]">
                    {opp.status}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-[#555555] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B08D57] flex-shrink-0" />
                    <span className="truncate">{opp.location}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-[#111111] group-hover:text-[#B08D57] transition-colors leading-snug">
                    {opp.projectName}
                  </h3>

                  <p className="mt-3 text-xs text-[#555555] line-clamp-3 leading-relaxed">
                    {opp.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-[#DDD9D0] flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] group-hover:text-[#B08D57] transition-colors">
                    VIEW OPPORTUNITY
                  </span>
                  <div className="w-7 h-7 rounded-none border border-[#DDD9D0] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B08D57] group-hover:border-[#B08D57] group-hover:text-white">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Disclosure Notice */}
        <div className="mt-12 p-4 bg-white border border-[#DDD9D0] flex items-center justify-between text-xs text-[#555555]">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-[#B08D57] flex-shrink-0" />
            <span>
              All project titles and metrics shown are mock specimens for layout review. Direct mandates and off-market dossiers are shared selectively.
            </span>
          </div>
          <span className="hidden sm:inline text-[#B08D57] font-semibold uppercase tracking-wider text-[10px]">
            Strict Confidentiality
          </span>
        </div>
      </div>

      {/* Modal Inspector */}
      <OpportunityModal
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
