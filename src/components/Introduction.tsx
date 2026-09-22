import React from 'react';
import { ArrowRight, Target, Compass, ShieldCheck } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="w-8 h-[1px] bg-[#C5A25D]" />
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A25D]">
            PERSPECTIVE & INTEGRITY
          </span>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Typography */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] uppercase text-[#0C1017]">
              REAL ESTATE<br />
              IS MORE THAN<br />
              <span className="text-[#C5A25D]">BROCHURES.</span>
            </h2>

            <div className="mt-8 pt-8 border-t border-[#EAE6DF] max-w-xl">
              <blockquote className="text-xl sm:text-2xl font-light text-[#0C1017] leading-relaxed italic">
                “OTHO doesn’t sell square feet for sales commissions. We audit loading factors, verify RERA filings, and advise investors with fiduciary clarity.”
              </blockquote>
            </div>

            <div className="mt-8">
              <p className="text-base sm:text-lg text-[#4A5568] font-normal leading-relaxed max-w-xl">
                Hyderabad’s property landscape is expanding at record velocity, but marketing materials rarely tell the full story. Between bloated super-built-up areas, concealed density bottlenecks, and delayed infrastructure lines, informed capital requires uncompromised truth.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Inviolate Fiduciary Commitments */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1E3A8A] block mb-3">
                OUR THREE INVIOLATE COMMITMENTS
              </span>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Every client interaction and published project review adheres to non-negotiable operational standards.
              </p>
            </div>

            <div className="space-y-4">
              {/* Commitment 1 */}
              <div className="p-5 bg-white border border-[#EAE6DF] transition-all duration-300 hover:border-[#C5A25D] hover:shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#EAE6DF] text-[#C5A25D]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#0C1017]">
                      1. Your Number Is Never Shared
                    </h4>
                    <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                      Zero broker spam. No call center harassment. You consult directly with our senior research team under complete professional confidentiality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Commitment 2 */}
              <div className="p-5 bg-white border border-[#EAE6DF] transition-all duration-300 hover:border-[#C5A25D] hover:shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#EAE6DF] text-[#C5A25D]">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#0C1017]">
                      2. We Publish The Negatives
                    </h4>
                    <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                      Brochures show infinity pools. We publish the 29% loading factors, low UDS percentages, lift shortages, and unapproved approach roads that developers omit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Commitment 3 */}
              <div className="p-5 bg-white border border-[#EAE6DF] transition-all duration-300 hover:border-[#C5A25D] hover:shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#EAE6DF] text-[#C5A25D]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-[#0C1017]">
                      3. Checked Against Telangana RERA
                    </h4>
                    <p className="mt-1 text-xs text-[#555555] leading-relaxed">
                      Every project metric, carpet ratio, sanctioned plan, and completion timeline is audited against statutory RERA registration filings before publication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#0C1017] hover:text-[#C5A25D] transition-colors group"
              >
                <span>EXPLORE PROJECT REVIEWS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#expertise"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#4A5568] hover:text-[#0C1017] transition-colors"
              >
                <span>INSTITUTIONAL ADVISORY</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
