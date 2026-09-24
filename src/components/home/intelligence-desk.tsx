import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { INSIGHTS } from '@/data/insights';

export function IntelligenceDesk() {
  const latestInsights = INSIGHTS.slice(0, 3);

  return (
    <section className="py-32 lg:py-40 px-6 lg:px-16 bg-bone-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-widest text-gold-500">
              MARKET INTELLIGENCE
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy-900 mt-4 tracking-[-0.02em]">
              Data-driven insights for informed decisions
            </h2>
          </div>
          <Link 
            href="/intelligence" 
            className="font-sans text-sm uppercase tracking-wider text-gold-600 hover:text-gold-500 transition-colors whitespace-nowrap font-medium"
          >
            Explore Intelligence &rarr;
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestInsights.map((article) => (
              <Link key={article.id} href={`/intelligence/${article.slug}`} className="block h-full">
                <div className="bg-white border border-bone-200 rounded-lg p-8 h-full group hover:border-gold-500/30 hover:shadow-sm transition-all duration-300 flex flex-col">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold-500 mb-4">
                    {article.category}
                  </p>
                  <h3 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-gold-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-mono text-[11px] uppercase text-slate-400 mt-auto pt-4 border-t border-bone-100">
                    {article.date} &bull; {article.readTime}
                  </p>
                  <p className="font-sans text-sm text-slate-500 mt-4 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-1 h-full">
            <div className="bg-gold-500/5 border border-gold-500/20 rounded-lg p-8 h-full flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 text-gold-600">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-navy-900 mb-4">
                Loading Factor Calculator
              </h3>
              <p className="font-sans text-sm text-slate-600 mb-8 leading-relaxed">
                Discover the true cost per usable square foot. Compare SBA vs RERA carpet area.
              </p>
              <Link 
                href="/intelligence/loading-factor-calculator"
                className="w-full py-3 px-4 border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest rounded text-center"
              >
                Calculate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
