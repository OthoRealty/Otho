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
          {/* Metadata pill with Royal Crest Emblem */}
          <div className="inline-flex items-center space-x-3 mb-8 px-4 py-2 border border-[#C5A25D]/50 bg-[#0C1017]/80 backdrop-blur-md shadow-lg">
            <img
              src="/assets/otho-crest-logo.jpg"
              alt="OTHO Emblem"
              className="w-5 h-5 object-contain rounded-full border border-[#C5A25D]"
            />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25D] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#FBF9F5]">
              INDEPENDENT ADVISORY &bull; RERA AUDITED INTELLIGENCE &bull; HYDERABAD
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.04] tracking-[-0.03em] uppercase text-[#FBF9F5]">
            REAL ESTATE,<br />
            <span className="text-[#FBF9F5]/90">WITH A CLEARER</span><br />
            <span className="text-[#C5A25D] font-normal italic">PERSPECTIVE.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-8 text-lg sm:text-xl text-[#FBF9F5]/85 font-light max-w-2xl leading-relaxed">
            Hyderabad’s flagship property intelligence and institutional advisory. Honest RERA carpet audits, 20+ verified project reviews, and fiduciary capital guidance.
          </p>

          {/* CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button
              onClick={onExploreOpportunities}
              className="inline-flex items-center justify-center space-x-3 text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 bg-[#C5A25D] text-[#0C1017] hover:bg-[#D4B574] transition-all duration-300 shadow-xl group"
            >
              <span>EXPLORE 20+ VERIFIED PROJECTS</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center space-x-3 text-xs font-semibold tracking-[0.18em] uppercase px-8 py-4 border border-[#FBF9F5]/60 text-[#FBF9F5] hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <span>TALK TO OTHO ADVISORY</span>
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
            <ShieldCheck className="w-4 h-4 text-[#C5A25D] flex-shrink-0" />
            <span className="text-xs tracking-wider text-white/75 font-light uppercase">
              Rigorous Diligence & Structuring
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Compass className="w-4 h-4 text-[#C5A25D] flex-shrink-0" />
            <span className="text-xs tracking-wider text-white/75 font-light uppercase">
              Micro-Market Corridor Focus
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-4 h-4 text-[#C5A25D] flex-shrink-0" />
            <span className="text-xs tracking-wider text-white/75 font-light uppercase">
              Capital Alignment & Value Creation
            </span>
          </div>

          {/* Scroll Cue */}
          <div className="flex md:justify-end items-center space-x-3">
            <a
              href="#introduction"
              className="inline-flex items-center space-x-2 text-[10px] tracking-[0.24em] text-white/60 hover:text-[#C5A25D] transition-colors uppercase"
            >
              <span>SCROLL TO DISCOVER</span>
              <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
                <span className="w-1 h-1.5 rounded-full bg-[#C5A25D] animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
