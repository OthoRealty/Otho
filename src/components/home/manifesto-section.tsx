'use client';

import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function ManifestoSection() {
  return (
    <section className="py-32 lg:py-40 bg-bone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start mb-16 lg:mb-0">
            <p className="font-mono text-[13px] uppercase tracking-widest text-gold-500 mb-6">
              THE OTHO THESIS
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mb-6 leading-tight tracking-[-0.02em]">
              Every property platform tells you what's for sale. OTHO tells you what's worth buying.
            </h2>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-md">
              We are not a brokerage. We are an independent advisory. Our mandate is to protect capital, surface asymmetry, and deliver intelligence that the market conceals behind brochure language.
            </p>
          </div>

          {/* Right Column - Scrolling */}
          <div className="space-y-12">
            <ScrollReveal>
              <div className="border-l-2 border-gold-500 pl-8">
                <span className="font-mono text-[13px] text-gold-500">01</span>
                <h3 className="font-serif text-2xl text-navy-900 mt-2 mb-4">Your Number Is Never Shared</h3>
                <p className="font-sans text-base text-slate-500 leading-relaxed">
                  Zero broker spam. Your enquiry stays with senior research principals. No call centres, no third-party forwarding, no exceptions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="border-l-2 border-gold-500 pl-8">
                <span className="font-mono text-[13px] text-gold-500">02</span>
                <h3 className="font-serif text-2xl text-navy-900 mt-2 mb-4">We Publish The Negatives</h3>
                <p className="font-sans text-base text-slate-500 leading-relaxed">
                  Every project review includes honest drawbacks — loading factors above 30%, narrow approach roads, delayed possessions, low undivided share of land. The industry hides these. We surface them.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-l-2 border-gold-500 pl-8">
                <span className="font-mono text-[13px] text-gold-500">03</span>
                <h3 className="font-serif text-2xl text-navy-900 mt-2 mb-4">Checked Against Telangana RERA</h3>
                <p className="font-sans text-base text-slate-500 leading-relaxed">
                  All carpet areas, sanctioned approvals, and possession timelines are vetted against statutory TG-RERA filings. Not developer claims — government records.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
