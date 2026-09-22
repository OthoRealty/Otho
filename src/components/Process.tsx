import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/process';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#111111] text-[#F7F5F0] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/15">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
                METHODOLOGY & DISCIPLINE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
              HOW WE WORK
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/70 max-w-md font-light leading-relaxed">
            A structured five-phase framework translating real-estate ambiguity into quantifiable, strategic execution.
          </p>
        </div>

        {/* Process Steps Bar (Interactive horizontal timeline) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-white/10 border-[#B08D57] text-white shadow-elevated'
                    : 'bg-white/[0.02] border-white/15 text-white/50 hover:border-white/40 hover:text-white/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-display text-sm font-semibold tracking-wider ${
                      isActive ? 'text-[#B08D57]' : 'text-white/40'
                    }`}
                  >
                    {step.number}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#B08D57]" />}
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-wide mt-2">
                  {step.name}
                </h3>
                <p className="text-[11px] tracking-wide mt-1 text-white/60 line-clamp-1">
                  {step.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-[#1A1A1A] border border-white/15 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 select-none pointer-events-none opacity-5">
            <span className="font-display text-[260px] font-bold text-white">
              {activeStep.number}
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#B08D57]">
                  STAGE {activeStep.number} METHODOLOGY
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
                {activeStep.name}: <span className="font-light text-[#B08D57]">{activeStep.tagline}</span>
              </h3>
              <p className="mt-5 text-base sm:text-lg text-white/80 font-light leading-relaxed">
                {activeStep.detail}
              </p>

              {/* Step Navigation Controls */}
              <div className="mt-8 flex items-center space-x-4">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 border border-white/20 text-xs tracking-wider uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  PREVIOUS STAGE
                </button>
                <button
                  disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-5 py-2 bg-[#B08D57] text-[#111111] text-xs font-semibold tracking-wider uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors"
                >
                  NEXT STAGE
                </button>
              </div>
            </div>

            {/* Deliverables Checklist for Current Step */}
            <div className="lg:col-span-5 bg-black/40 border border-white/10 p-6 sm:p-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08D57] block mb-4">
                STAGE DELIVERABLES
              </span>
              <div className="space-y-3.5">
                {activeStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-white/85">
                    <CheckCircle2 className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
