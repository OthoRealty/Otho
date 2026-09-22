import React from 'react';
import { X, Clock, BookOpen } from 'lucide-react';
import { InsightArticle } from '../types';

interface InsightModalProps {
  insight: InsightArticle | null;
  onClose: () => void;
  onConsult: (topic: string) => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({ insight, onClose, onConsult }) => {
  if (!insight) return null;

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
        <div className="p-6 sm:p-8 border-b border-[#DDD9D0] bg-white flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
                {insight.category} ADVISORY BRIEF
              </span>
              <span className="text-[10px] text-[#555555] uppercase tracking-wider">
                &bull; {insight.date}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#111111] leading-tight">
              {insight.title}
            </h3>
            <div className="flex items-center space-x-4 text-xs text-[#555555] mt-3">
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>{insight.readTime}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>By {insight.authorRole}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#111111] hover:text-[#B08D57] transition-colors border border-[#DDD9D0] bg-[#F7F5F0]"
            aria-label="Close reader"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Article Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Summary Callout */}
          <div className="p-5 bg-white border-l-2 border-[#B08D57] border-y border-r border-[#DDD9D0]">
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#B08D57] block mb-1">
              EXECUTIVE SUMMARY
            </span>
            <p className="text-sm font-medium text-[#111111] leading-relaxed">
              {insight.summary}
            </p>
          </div>

          {/* Key Strategic Takeaways */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#111111] mb-3">
              KEY STRATEGIC TAKEAWAYS
            </h4>
            <div className="space-y-2.5">
              {insight.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#555555] leading-relaxed">
                  <span className="font-mono text-[#B08D57] font-bold">0{idx + 1}.</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Analytical Body */}
          <div className="pt-4 border-t border-[#DDD9D0] space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-[#111111]">
              FULL STRATEGIC ANALYSIS
            </h4>
            {insight.fullBody.map((paragraph, idx) => (
              <p key={idx} className="text-sm text-[#555555] leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 sm:p-8 bg-white border-t border-[#DDD9D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#555555]">
            Need tailored micro-market research for your portfolio?
          </span>
          <button
            onClick={() => {
              onClose();
              onConsult(insight.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.16em] uppercase px-6 py-3 bg-[#111111] text-[#F7F5F0] hover:bg-[#B08D57] transition-colors"
          >
            <span>DISCUSS THIS REPORT</span>
          </button>
        </div>
      </div>
    </div>
  );
};
