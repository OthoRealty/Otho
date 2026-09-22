import React from 'react';
import { X, MapPin, ShieldAlert, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Opportunity } from '../types';

interface OpportunityModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const OpportunityModal: React.FC<OpportunityModalProps> = ({
  opportunity,
  onClose,
  onInquire,
}) => {
  if (!opportunity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F5F0] border border-[#DDD9D0] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-modal flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#DDD9D0] flex items-start justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
                OPPORTUNITY DOSSIER
              </span>
              <span className="inline-flex items-center px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                Specimen Placeholder
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#111111]">
              {opportunity.projectName}
            </h3>
            <div className="flex items-center space-x-2 text-xs text-[#555555] mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>{opportunity.location}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#111111] hover:text-[#B08D57] transition-colors border border-[#DDD9D0] bg-[#F7F5F0]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#DDD9D0]">
            <img
              src={opportunity.image}
              alt={opportunity.projectName}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#111111]/85 backdrop-blur-sm px-3 py-1.5 border border-white/20">
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#B08D57] uppercase">
                STATUS: {opportunity.status}
              </span>
            </div>
          </div>

          {/* Transparent Specimen Notice */}
          <div className="p-4 bg-amber-50/60 border border-amber-200/80 flex items-start space-x-3 text-xs text-amber-900 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold uppercase tracking-wider block">Development Specimen</span>
              This profile represents a specimen advisory asset structuring format during development. Active, off-market, or confidential mandates are shared strictly under non-disclosure agreements (NDA).
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#111111] mb-2">
              ASSET PROFILE & SCOPE
            </h4>
            <p className="text-sm text-[#555555] leading-relaxed">
              {opportunity.description}
            </p>
          </div>

          {/* Scale Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#DDD9D0]">
            {opportunity.scaleMetrics.map((metric, idx) => (
              <div key={idx} className="p-3 bg-white border border-[#DDD9D0]">
                <span className="text-[10px] text-[#555555] uppercase tracking-wider block">
                  {metric.label}
                </span>
                <span className="text-xs font-semibold text-[#111111] mt-1 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Strategic Highlights */}
          <div className="pt-4 border-t border-[#DDD9D0]">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#111111] mb-3">
              STRATEGIC EVALUATION CRITERIA
            </h4>
            <div className="space-y-2">
              {opportunity.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs text-[#555555]">
                  <CheckCircle2 className="w-4 h-4 text-[#B08D57] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-6 sm:p-8 bg-white border-t border-[#DDD9D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#555555] text-center sm:text-left">
            Request asset memorandum, financial modeling, or due diligence dossier.
          </div>
          <button
            onClick={() => {
              onClose();
              onInquire(opportunity.projectName);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase px-6 py-3 bg-[#111111] text-[#F7F5F0] hover:bg-[#B08D57] transition-colors"
          >
            <span>INQUIRE ABOUT THIS ASSET</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
