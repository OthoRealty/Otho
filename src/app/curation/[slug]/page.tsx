import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, AlertTriangle } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export async function generateStaticParams() {
  return PROJECTS.filter(p => p.publishStatus === 'published').map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(p => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.developer} | OTHO Realty`,
    description: project.summary,
  };
}

export default async function ProjectDossierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project || project.publishStatus !== 'published') {
    notFound();
  }

  const loadingFactor = Math.round((1 - project.carpet / project.sba) * 100);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="h-[60vh] relative w-full flex items-end">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-16">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Curation', href: '/curation' },
              { label: project.name }
            ]} 
            className="mb-8"
          />
          <div className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
            {project.developer}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-4">
            {project.name}
          </h1>
          <div className="flex flex-wrap gap-4 items-center font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <span>{project.locality}</span>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <span>{project.priceRangeCr}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        {/* Summary */}
        <div className="font-sans text-lg md:text-xl text-foreground leading-relaxed border-l-2 border-accent pl-6 md:pl-8 mb-16 max-w-3xl">
          {project.summary}
        </div>

        {/* Fact Table & Score */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-muted border-b border-border">
                <h2 className="font-mono text-sm uppercase tracking-widest text-foreground">Institutional Fact Sheet</h2>
              </div>
              <div className="divide-y divide-border">
                {[
                  ['Configuration', `${project.bhk} BHK ${project.luxuryTier}`],
                  ['Super Built-Up Area', `${project.sba} sq ft`],
                  ['RERA Carpet Area', `${project.carpet} sq ft`],
                  ['Loading Factor', `${loadingFactor}%`],
                  ['Quoted Rate', `₹${project.rate.toLocaleString()}/sq ft`],
                  ['Total Investment', project.priceRangeCr],
                  ['Land Share Per Unit', `${project.landShare} units/acre equiv.`],
                  ['Possession', project.possession],
                  ['Status', project.status],
                  ['Construction Progress', `${project.progress}%`],
                ].map(([label, value], i) => (
                  <div key={label} className={`flex justify-between items-center p-4 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
                    <span className="font-sans text-sm text-muted-foreground">{label}</span>
                    <span className="font-mono text-sm text-foreground text-right ml-4">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center h-full text-center">
              <div className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4">Otho Score</div>
              <div className="text-6xl font-serif text-accent">{project.score.toFixed(1)}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4">Out of 10</div>
            </div>
          </div>
        </div>

        {/* Positives and Negatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
              <Check className="w-6 h-6 text-green-500" />
              Investment Strengths
            </h3>
            <ul className="space-y-4">
              {project.positives.map((point, i) => (
                <li key={i} className="font-sans text-muted-foreground flex gap-3">
                  <span className="text-accent mt-1.5 min-w-2 w-2 h-2 rounded-full bg-accent/20 border border-accent flex-shrink-0"></span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Points of Caution
            </h3>
            <ul className="space-y-4">
              {project.negatives.map((point, i) => (
                <li key={i} className="font-sans text-muted-foreground flex gap-3">
                  <span className="text-amber-500 mt-1.5 min-w-2 w-2 h-2 rounded-full bg-amber-500/20 border border-amber-500 flex-shrink-0"></span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-24">
          <h3 className="font-serif text-2xl text-foreground mb-8">Lifestyle & Infrastructure</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.amenities.map(amenity => (
              <div key={amenity} className="font-sans text-sm text-foreground bg-muted/50 border border-border/50 px-4 py-3 rounded text-center">
                {amenity}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card border border-border p-10 md:p-16 rounded-xl text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Interested in {project.name}?</h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto mb-8">
            Get an independent perspective on pricing, negotiate from a position of strength, or compare it against alternatives.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-accent hover:text-foreground transition-colors duration-300">
            Request Advisory Callback
          </Link>
        </div>
      </section>
    </main>
  );
}
