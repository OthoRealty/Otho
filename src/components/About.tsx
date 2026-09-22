import React from 'react';
import { ShieldCheck, Compass, Eye, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <span className="w-8 h-[1px] bg-[#B08D57]" />
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
            ABOUT OTHO REALTY
          </span>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Core Narrative */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-[#111111]">
              BUILT AROUND<br />
              <span className="text-[#B08D57]">CLARITY.</span>
            </h2>

            <div className="mt-8 pt-8 border-t border-[#DDD9D0]">
              <p className="text-lg sm:text-xl text-[#111111] font-light leading-relaxed">
                OTHO Realty brings together market understanding, strategic thinking and execution to help clients navigate real estate with greater clarity.
              </p>
              <p className="mt-5 text-sm sm:text-base text-[#555555] leading-relaxed">
                Founded to address the lack of transparent, institutional advisory in rapidly accelerating property markets, OTHO operates at the intersection of capital discipline and ground-level intelligence.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#555555] leading-relaxed">
                We partner with high-net-worth investors, landowners, institutional developers, and commercial enterprises seeking objective guidance rather than generic sales pitches.
              </p>
            </div>
          </div>

          {/* Right Column: Corporate Principles & Operational Foundations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 bg-white border border-[#DDD9D0] shadow-fine">
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#B08D57] block mb-4">
                FOUNDATIONAL VALUES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 text-[#111111] mb-2">
                    <Eye className="w-4 h-4 text-[#B08D57]" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">
                      Radical Transparency
                    </h3>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Unbiased evaluations detailing downside risks, regulatory constraints, and realistic holding horizons before transaction commitments.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-[#111111] mb-2">
                    <Compass className="w-4 h-4 text-[#B08D57]" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">
                      Ground Intelligence
                    </h3>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Direct monitoring of Hyderabad infrastructure milestones, land titling histories, and micro-market absorption velocity.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-[#111111] mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">
                      Fiduciary Alignment
                    </h3>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Advisory recommendations shaped around client capital preservation and strategic goals rather than inventory quotas.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-[#111111] mb-2">
                    <Users className="w-4 h-4 text-[#B08D57]" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">
                      Stakeholder Breadth
                    </h3>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Cross-functional expertise serving property investors, landowners, developers, and corporate tenants across asset lifecycles.
                  </p>
                </div>
              </div>
            </div>

            {/* Qualitative Credibility Banner (Zero fake numbers) */}
            <div className="p-6 bg-[#111111] text-[#F7F5F0] border border-[#DDD9D0]">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08D57] block mb-2">
                ADVISORY MANDATE PHILOSOPHY
              </span>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                “Every property decision is a capital decision. Our responsibility is to replace market speculation with verifiable facts, disciplined positioning, and execution confidence.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
