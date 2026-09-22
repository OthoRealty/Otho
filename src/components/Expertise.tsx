import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/services';

interface ExpertiseProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-[#111111] text-[#F7F5F0] relative overflow-hidden">
      {/* Background Architectural Vignette */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/15">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
                DISCIPLINES & PRACTICES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
              OUR EXPERTISE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/70 max-w-md font-light leading-relaxed">
            Institutional capabilities spanning transaction advisory, project marketing, and capital structuring for Hyderabad’s key market participants.
          </p>
        </div>

        {/* Master Interactive Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: Numbered Interactive Service List */}
          <div className="lg:col-span-7 divide-y divide-white/10">
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group py-8 transition-all duration-300 cursor-pointer ${
                    isActive ? 'bg-white/[0.03] px-4 -mx-4 border-l-2 border-[#B08D57]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6 sm:space-x-8">
                      {/* Animated Number */}
                      <span
                        className={`font-display text-2xl sm:text-3xl font-light transition-all duration-300 ${
                          isActive
                            ? 'text-[#B08D57] translate-x-1 font-semibold'
                            : 'text-white/40 group-hover:text-white/80'
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Title & Core Copy */}
                      <div>
                        <h3
                          className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors duration-200 ${
                            isActive ? 'text-white' : 'text-white/85 group-hover:text-white'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 font-light leading-relaxed max-w-xl">
                          {service.description}
                        </p>

                        {/* Mobile preview for active service */}
                        {isActive && (
                          <div className="mt-4 pt-4 border-t border-white/10 lg:hidden space-y-2">
                            {service.scope.map((item, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-xs text-[#B08D57]">
                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="text-white/80">{item}</span>
                              </div>
                            ))}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectService(service.title);
                              }}
                              className="mt-3 inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#B08D57] uppercase pt-2"
                            >
                              <span>ENGAGE THIS PRACTICE</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Interactive Arrow Indicator */}
                    <div className="pt-1 pl-4">
                      <div
                        className={`w-9 h-9 border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'border-[#B08D57] bg-[#B08D57] text-[#111111] translate-x-1 -translate-y-1'
                            : 'border-white/20 text-white/40 group-hover:border-white/60 group-hover:text-white'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Interactive Preview & Scope Card (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="bg-[#1A1A1A] border border-white/15 p-6 shadow-modal">
              {/* Image Preview with Smooth Transition */}
              <div className="relative aspect-[16/10] overflow-hidden border border-white/10 mb-6 bg-black">
                <img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover filter brightness-90 contrast-105 transition-opacity duration-500 animate-fade-in"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#111111]/80 backdrop-blur-sm border border-white/20">
                  <span className="text-[10px] tracking-[0.2em] font-medium text-[#B08D57] uppercase">
                    PRACTICE {activeService.number}
                  </span>
                </div>
              </div>

              {/* Service Title & Scope Checklist */}
              <div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#B08D57] font-semibold">
                  ADVISORY CAPABILITIES
                </span>
                <h4 className="font-display text-xl font-bold uppercase text-white mt-1 mb-4">
                  {activeService.title}
                </h4>

                <div className="space-y-3 py-4 border-y border-white/10">
                  {activeService.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(activeService.title)}
                    className="w-full inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase py-3.5 bg-[#B08D57] text-[#111111] hover:bg-white transition-colors duration-200"
                  >
                    <span>CONSULT ON {activeService.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
