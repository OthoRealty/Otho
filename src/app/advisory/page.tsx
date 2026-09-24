import { SERVICES } from '@/data/services';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advisory Services | OTHO Realty',
  description: 'OTHO Realty offers six verticals of independent counsel across residential, commercial, land, project marketing, and investment advisory in Hyderabad.',
};

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-24 max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
          Advisory Desk
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl text-foreground -tracking-[0.02em] leading-tight mb-8">
          Six verticals of independent counsel
        </h1>
        <p className="font-sans text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
          Delivering strategic clarity across residential, commercial, and land asset classes. We represent your interests through rigorous analysis and objective insights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={`/advisory/${service.slug}`}
            className="group bg-card border border-border rounded-lg p-8 lg:p-12 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
          >
            <div className="font-mono text-sm tracking-widest text-muted-foreground mb-8">
              {service.number}
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-accent transition-colors">
              {service.title}
            </h2>
            <p className="font-sans text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            <ul className="space-y-3 mb-10">
              {service.scope.slice(0, 3).map((item, idx) => (
                <li key={idx} className="font-sans text-sm text-foreground flex items-start">
                  <span className="text-accent mr-3 mt-1.5 h-1.5 w-1.5 bg-accent rounded-full shrink-0"></span>
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground flex items-center group-hover:text-accent transition-colors">
                Explore Advisory
                <svg className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
