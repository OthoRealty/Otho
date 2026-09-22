import React from 'react';
import { ArrowRight, Layers, Target, Compass } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="w-8 h-[1px] bg-[#B08D57]" />
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
            PERSPECTIVE & PURPOSE
          </span>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Typography */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] uppercase text-[#111111]">
              REAL ESTATE<br />
              IS MORE THAN<br />
              <span className="text-[#B08D57]">PROPERTY.</span>
            </h2>

            <div className="mt-8 pt-8 border-t border-[#DDD9D0] max-w-xl">
              <blockquote className="text-xl sm:text-2xl font-light text-[#111111] leading-relaxed italic">
                “OTHO doesn’t simply show properties. OTHO helps identify, evaluate and execute real-estate opportunities.”
              </blockquote>
            </div>
          </div>

          {/* Right Column: Narrative Body + Strategic Tenets */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                At OTHO Realty, we look beyond the asset. We study the location, the market, the opportunity and the people behind the transaction — bringing clarity to high-value real-estate decisions.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#555555] leading-relaxed">
                Whether structuring institutional land assemblies, evaluating commercial assets along the Outer Ring Road, or orchestrating launch mandates for landmark developments, our work is grounded in ground-truth intelligence and disciplined commercial execution.
              </p>
            </div>

            {/* Strategic Pillars (Qualitative, Institutional) */}
            <div className="grid grid-cols-1 gap-4 pt-6 border-t border-[#DDD9D0]">
              <div className="p-5 bg-white border border-[#DDD9D0] transition-colors hover:border-[#B08D57]">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#F7F5F0] border border-[#DDD9D0] text-[#B08D57]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]">
                      Beyond Brokerage
                    </h4>
                    <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                      Advisory structured around long-term portfolio growth rather than high-pressure transactional turnover.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white border border-[#DDD9D0] transition-colors hover:border-[#B08D57]">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#F7F5F0] border border-[#DDD9D0] text-[#B08D57]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]">
                      Corridor Specialisation
                    </h4>
                    <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                      Deep operational tracking of Hyderabad’s pivotal growth vectors from Neopolis to the Airport Corridor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white border border-[#DDD9D0] transition-colors hover:border-[#B08D57]">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-[#F7F5F0] border border-[#DDD9D0] text-[#B08D57]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-[#111111]">
                      Institutional Rigour
                    </h4>
                    <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                      Legal transparency, highest-and-best-use modeling, and risk audits prior to capital commitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#expertise"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] hover:text-[#B08D57] transition-colors group"
              >
                <span>EXPLORE OUR ADVISORY SERVICES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
