import React, { useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { INSIGHTS } from '../data/insights';
import { InsightArticle } from '../types';
import { InsightModal } from './InsightModal';

interface MarketIntelligenceProps {
  onConsultInsight: (topic: string) => void;
}

export const MarketIntelligence: React.FC<MarketIntelligenceProps> = ({ onConsultInsight }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedInsight, setSelectedInsight] = useState<InsightArticle | null>(null);

  const categories = ['ALL', 'HYDERABAD', 'INVESTMENT', 'DEVELOPMENT', 'MARKET', 'ADVISORY'];

  const filteredInsights = activeCategory === 'ALL'
    ? INSIGHTS
    : INSIGHTS.filter((item) => item.category === activeCategory);

  return (
    <section id="insights" className="py-24 sm:py-32 bg-[#F7F5F0] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#DDD9D0]">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B08D57]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#B08D57]">
                INTELLIGENCE & ANALYSIS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]">
              INSIGHTS THAT MOVE<br />
              <span className="text-[#B08D57]">WITH THE MARKET.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#555555] max-w-sm md:text-right font-light leading-relaxed">
            Objective research, regulatory breakdowns, and micro-market intelligence to inform high-value capital allocation across Hyderabad.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center space-x-2 my-8 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 border ${
                activeCategory === category
                  ? 'bg-[#111111] text-[#F7F5F0] border-[#111111]'
                  : 'bg-white text-[#555555] border-[#DDD9D0] hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Editorial Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map((insight) => (
            <article
              key={insight.id}
              onClick={() => setSelectedInsight(insight)}
              className="group bg-white border border-[#DDD9D0] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-elevated hover:border-[#B08D57] cursor-pointer"
            >
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DDD9D0]">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08D57]">
                    {insight.category}
                  </span>
                  <div className="flex items-center space-x-1.5 text-[11px] text-[#555555]">
                    <Clock className="w-3 h-3 text-[#B08D57]" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold uppercase text-[#111111] mt-5 group-hover:text-[#B08D57] transition-colors leading-snug">
                  {insight.title}
                </h3>

                {/* Summary */}
                <p className="mt-4 text-xs sm:text-sm text-[#555555] line-clamp-3 leading-relaxed font-light">
                  {insight.summary}
                </p>

                {/* Key takeaway snippet */}
                <div className="mt-5 p-3 bg-[#F7F5F0] border-l border-[#B08D57] text-[11px] text-[#111111]">
                  <span className="font-semibold block uppercase text-[10px] text-[#555555] mb-0.5">
                    Core Observation:
                  </span>
                  <p className="line-clamp-2 italic">"{insight.keyTakeaways[0]}"</p>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-[#DDD9D0] flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] group-hover:text-[#B08D57] transition-colors">
                  READ ANALYSIS
                </span>
                <div className="w-7 h-7 border border-[#DDD9D0] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B08D57] group-hover:border-[#B08D57] group-hover:text-white">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      <InsightModal
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
        onConsult={onConsultInsight}
      />
    </section>
  );
};
