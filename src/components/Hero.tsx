import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Compass, BarChart3 } from 'lucide-react';

interface HeroProps {
  onExploreOpportunities: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreOpportunities, onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#111111] text-white overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
      {/* Background Architectural Imagery with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
          alt="Modern architectural towers in Hyderabad"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Subtle architectural gradient tinting */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-[#111111]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#111111]/20 to-[#111111]/80" />
      </div>

      {/* Decorative Fine Architectural Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-[#DDD9D0]/20 flex justify-between">
          <div className="w-1/3 border-r border-[#DDD9D0]/10 hidden md:block" />
          <div className="w-1/3 border-r border-[#DDD9D0]/10 hidden lg:block" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Metadata pill */}
          <div className="inline-flex items-center space-x-3 mb-8 px-3.5 py-1.5 border border-[#B08D57]/40 bg-[#111111]/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-pulse-subtle" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-[#F7F5F0]">
              Advisory &bull; Capital &bull; Hyderabad
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.04] tracking-[-0.03em] uppercase text-[#F7F5F0]">
            REAL ESTATE,<br />
            <span className="text-[#F7F5F0]/90">WITH A CLEARER</span><br />
            <span className="text-[#B08D57] font-medium">PERSPECTIVE.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-8 text-lg sm:text-xl text-[#F7F5F0]/80 font-light max-w-2xl leading-relaxed">
            Strategic real-estate advisory and property opportunities across Hyderabad.
          </p>

          {/* CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button
              onClick={onExploreOpportunities}
              className="inline-flex items-center justify-center space-x-3 text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 bg-[#F7F5F0] text-[#111111] hover:bg-[#B08D57] hover:text-white transition-all duration-300 shadow-elevated group"
            >
              <span>EXPLORE OPPORTUNITIES</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center space-x-3 text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 border border-[#F7F5F0]/60 text-[#F7F5F0] hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <span>TALK TO OTHO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Footer Bar with Qualitative Pillars & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 border-t border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {/* Qualitative Pillars (No Fake Numbers) */}
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-4 h-4 text-[#B08D57] flex-shrink-0" />
            <span className="text-xs tracking-wider text-white/75 font-light uppercase">
              Rigorous Diligence & Structuring
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Compass className="w-4 h-4 text-[#B08D57] flex-shrink-0" />
            <span className="text-xs tracking-wider text-white/75 font-light uppercase">
              Micro-Market Corridor Focus
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-4 h-4 text-[#B08D57] flex-shrink-0" />
            <span className="text-xs tracking-wider text-white/75 font-light uppercase">
              Capital Alignment & Value Creation
            </span>
          </div>

          {/* Scroll Cue */}
          <div className="flex md:justify-end items-center space-x-3">
            <a
              href="#introduction"
              className="inline-flex items-center space-x-2 text-[10px] tracking-[0.24em] text-white/60 hover:text-[#B08D57] transition-colors uppercase"
            >
              <span>SCROLL TO DISCOVER</span>
              <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
                <span className="w-1 h-1.5 rounded-full bg-[#B08D57] animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
