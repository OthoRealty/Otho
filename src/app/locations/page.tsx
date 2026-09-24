import { GROWTH_CORRIDORS } from '@/data/corridors';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyderabad Growth Corridors | OTHO Realty',
  description: 'Explore Hyderabad\'s premium real estate growth axes, including Neopolis, Financial District, Kokapet, and the Airport Corridor.',
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-24 max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
          Corridors
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl text-foreground -tracking-[0.02em] leading-tight mb-8">
          Hyderabad's premium growth axes
        </h1>
        <p className="font-sans text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
          Evaluating the master plans, infrastructure milestones, and capital deployment shaping the future of Hyderabad real estate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GROWTH_CORRIDORS.map((corridor) => (
          <Link
            key={corridor.id}
            href={`/locations/${corridor.slug}`}
            className="group bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
          >
            <div className="mb-8">
              <h2 className="font-serif text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {corridor.name}
              </h2>
              <span className="inline-block font-mono text-[10px] uppercase tracking-widest bg-muted text-foreground px-3 py-1 rounded">
                {corridor.badge}
              </span>
            </div>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow line-clamp-4">
              {corridor.subtext}
            </p>
            <div className="pt-6 border-t border-border mt-auto flex justify-between items-center">
              <span className="font-mono text-xs text-muted-foreground">
                {corridor.infraStatus.length} Infra Updates
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-foreground group-hover:text-accent transition-colors flex items-center">
                Explore
                <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
