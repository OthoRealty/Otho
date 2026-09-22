import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';

export const LoadingCalculator: React.FC = () => {
  const [sba, setSba] = useState<number>(2600);
  const [carpet, setCarpet] = useState<number>(1820);
  const [rate, setRate] = useState<number>(11000);

  // Derived calculations
  const loadingFactor = sba > 0 ? Math.round(((sba - carpet) / sba) * 100) : 0;
  const totalPrice = sba * rate;
  const realCarpetRate = carpet > 0 ? Math.round(totalPrice / carpet) : 0;
  const rateDifference = realCarpetRate - rate;
  const communalCost = (sba - carpet) * rate;

  const setPreset = (presetSba: number, presetCarpet: number, presetRate: number) => {
    setSba(presetSba);
    setCarpet(presetCarpet);
    setRate(presetRate);
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#11141A] text-[#FBF9F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#C5A25D_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/15">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C5A25D]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A25D]">
                INTELLIGENCE TOOL
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
              LOADING FACTOR<br />
              <span className="text-[#C5A25D]">CALCULATOR.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-white/70 max-w-sm md:text-right font-light leading-relaxed">
            Every price in Hyderabad is advertised on super built-up area. Uncover what you are actually paying for every square foot you can furnish.
          </p>
        </div>

        {/* Presets Bar */}
        <div className="flex items-center space-x-3 my-8 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-[11px] uppercase tracking-wider text-white/50 font-medium">
            Corridor Presets:
          </span>
          <button
            onClick={() => setPreset(2600, 1820, 11200)}
            className="px-3.5 py-1.5 text-xs bg-white/10 border border-white/20 hover:border-[#C5A25D] hover:text-[#C5A25D] transition-colors whitespace-nowrap"
          >
            Kokapet 3BHK (30% Loading)
          </button>
          <button
            onClick={() => setPreset(3400, 2244, 12200)}
            className="px-3.5 py-1.5 text-xs bg-white/10 border border-white/20 hover:border-[#C5A25D] hover:text-[#C5A25D] transition-colors whitespace-nowrap"
          >
            Neopolis High-Rise (34% Loading)
          </button>
          <button
            onClick={() => setPreset(2180, 1570, 8900)}
            className="px-3.5 py-1.5 text-xs bg-white/10 border border-white/20 hover:border-[#C5A25D] hover:text-[#C5A25D] transition-colors whitespace-nowrap"
          >
            Nallagandla Value (28% Loading)
          </button>
        </div>

        {/* Interactive Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-[#161B24] border border-white/15 p-6 sm:p-8 space-y-6">
            {/* Input 1: Super Built-up Area */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white">
                  Super Built-Up Area (SBA)
                </label>
                <span className="font-mono text-sm font-semibold text-[#C5A25D]">
                  {sba.toLocaleString('en-IN')} sq ft
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="6000"
                step="25"
                value={sba}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setSba(val);
                  if (carpet >= val) setCarpet(Math.round(val * 0.7));
                }}
                className="w-full accent-[#C5A25D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1">
                <span>1,000 sq ft</span>
                <span>6,000 sq ft</span>
              </div>
            </div>

            {/* Input 2: RERA Carpet Area */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white">
                  RERA Usable Carpet Area
                </label>
                <span className="font-mono text-sm font-semibold text-[#C5A25D]">
                  {carpet.toLocaleString('en-IN')} sq ft
                </span>
              </div>
              <input
                type="range"
                min="700"
                max={sba}
                step="25"
                value={carpet}
                onChange={(e) => setCarpet(Number(e.target.value))}
                className="w-full accent-[#C5A25D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1">
                <span>700 sq ft</span>
                <span>Max: {sba} sq ft</span>
              </div>
            </div>

            {/* Input 3: Advertised Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-white">
                  Quoted Brochure Rate (per SBA)
                </label>
                <span className="font-mono text-sm font-semibold text-[#C5A25D]">
                  ₹{rate.toLocaleString('en-IN')} / sq ft
                </span>
              </div>
              <input
                type="range"
                min="6000"
                max="20000"
                step="100"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[#C5A25D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1">
                <span>₹6,000 / sq ft</span>
                <span>₹20,000 / sq ft</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 text-xs text-white/70 leading-relaxed flex items-start space-x-2.5">
              <Info className="w-4 h-4 text-[#C5A25D] flex-shrink-0 mt-0.5" />
              <span>
                Tip: RERA carpet area must legally be declared in the builder's agreement. Super built-up area has no legal definition and includes lobbies, shafts, and clubhouses.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Realities & Findings */}
          <div className="lg:col-span-6 bg-[#161B24] border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#C5A25D] block mb-2">
                CALCULATED ANALYSIS
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-6">
                THE REAL COST OF THIS PROPERTY
              </h3>

              {/* Big Metric Box */}
              <div className="grid grid-cols-2 gap-4 p-5 bg-black/40 border border-white/10 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">
                    Loading Factor
                  </span>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <span className={`text-3xl sm:text-4xl font-display font-bold ${
                      loadingFactor <= 30 ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {loadingFactor}%
                    </span>
                  </div>
                  <span className="text-[10px] text-white/60 block mt-1">
                    {loadingFactor <= 30 ? 'Good efficiency for west Hyderabad' : 'High communal loading'}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">
                    Real Rate on Carpet
                  </span>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-[#C5A25D]">
                      ₹{realCarpetRate.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-white/60">/ sq ft</span>
                  </div>
                  <span className="text-[10px] text-white/60 block mt-1">
                    +₹{rateDifference.toLocaleString('en-IN')} / sq ft over brochure
                  </span>
                </div>
              </div>

              {/* Cost of Invisible Space */}
              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Total Base Price:</span>
                  <span className="font-mono font-semibold text-white">
                    ₹{(totalPrice / 10000000).toFixed(2)} Cr
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Non-Usable Communal Area:</span>
                  <span className="font-mono text-amber-300">
                    {(sba - carpet).toLocaleString('en-IN')} sq ft
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Money Paid for Communal Space:</span>
                  <span className="font-mono font-bold text-[#C5A25D]">
                    ₹{(communalCost / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
              </div>

              {/* Assessment Message */}
              <div className="mt-6">
                <p className="text-xs text-white/80 leading-relaxed">
                  {loadingFactor > 32
                    ? '⚠️ Warning: This loading factor is significantly higher than average. You are paying over a third of your purchase price for common corridors and amenities.'
                    : '✓ This loading factor is in line with or better than western corridor benchmarks.'}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/60">
                Want us to audit your builder agreement before you sign?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#C5A25D] hover:text-white uppercase transition-colors"
              >
                <span>REQUEST AUDIT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
