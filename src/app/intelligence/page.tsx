import { INSIGHTS } from '@/data/insights';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Intelligence | OTHO Realty',
  description: 'Data-driven market perspective, analytical reviews, and real estate intelligence from the OTHO Advisory desk.',
};

export default function IntelligencePage() {
  const publishedInsights = INSIGHTS.filter(insight => insight.publishStatus === 'published');

  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-24 max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
          Intelligence
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl text-foreground -tracking-[0.02em] leading-tight mb-8">
          Data-driven market perspective
        </h1>
        <p className="font-sans text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
          Analytical rigor and strategic clarity applied to the Hyderabad real estate market. Authored by the OTHO advisory desk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publishedInsights.map((insight) => (
          <Link
            key={insight.id}
            href={`/intelligence/${insight.slug}`}
            className="group bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded">
                {insight.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {insight.readTime}
              </span>
            </div>
            
            <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-4 group-hover:text-accent transition-colors leading-snug">
              {insight.title}
            </h2>
            
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow line-clamp-4">
              {insight.summary}
            </p>
            
            <div className="pt-6 border-t border-border mt-auto flex justify-between items-center">
              <span className="font-sans text-xs text-muted-foreground italic">
                {insight.authorRole}
              </span>
              <span className="font-mono text-xs text-foreground group-hover:text-accent transition-colors flex items-center">
                Read
                <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
