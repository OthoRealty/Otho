import { GROWTH_CORRIDORS } from '@/data/corridors';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export async function generateStaticParams() {
  return GROWTH_CORRIDORS.map((corridor) => ({
    slug: corridor.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const corridor = GROWTH_CORRIDORS.find((c) => c.slug === slug);

  if (!corridor) {
    return { title: 'Corridor Not Found | OTHO Realty' };
  }

  return {
    title: `${corridor.name} Real Estate Outlook | OTHO Realty`,
    description: corridor.description,
  };
}

export default async function CorridorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const corridor = GROWTH_CORRIDORS.find((c) => c.slug === slug);

  if (!corridor) {
    notFound();
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMED': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'LIKELY': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'UNFUNDED': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'UNCERTAIN': return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
      default: return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: corridor.name }
          ]} 
          className="mb-16"
        />

        <div className="max-w-4xl mb-24">
          <span className="inline-block font-mono text-xs uppercase tracking-widest bg-muted text-foreground px-4 py-2 rounded mb-8">
            {corridor.badge}
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl text-foreground -tracking-[0.02em] leading-tight mb-10">
            {corridor.name}
          </h1>
          <p className="font-sans text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
            {corridor.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-2 space-y-24">
            <section>
              <h2 className="font-serif text-3xl text-foreground mb-8">Market Dynamics</h2>
              <ul className="space-y-6">
                {corridor.dynamics.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-4 mt-2 h-1.5 w-1.5 bg-accent rounded-full shrink-0"></span>
                    <span className="font-sans text-lg text-foreground font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-foreground mb-8">Infrastructure Matrix</h2>
              <div className="border border-border rounded-lg overflow-hidden bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-sm">
                    <thead className="bg-muted font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      <tr>
                        <th className="px-6 py-4 font-normal">Project</th>
                        <th className="px-6 py-4 font-normal">Detail</th>
                        <th className="px-6 py-4 font-normal">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {corridor.infraStatus.map((item, idx) => (
                        <tr key={idx} className="hover:bg-muted/50 transition-colors">
                          <td className="px-6 py-5 font-medium text-foreground">{item.name}</td>
                          <td className="px-6 py-5 text-muted-foreground font-light">{item.detail}</td>
                          <td className="px-6 py-5">
                            <span className={cn("px-3 py-1 rounded text-[10px] font-mono tracking-wider border", getStatusColor(item.status))}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-16">
            <section className="bg-muted p-8 rounded-lg">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Key Drivers</h3>
              <ul className="space-y-4">
                {corridor.keyDrivers.map((driver, idx) => (
                  <li key={idx} className="font-sans text-sm text-foreground font-light pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    {driver}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-muted p-8 rounded-lg">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Asset Classes</h3>
              <div className="flex flex-wrap gap-2">
                {corridor.assetClasses.map((ac, idx) => (
                  <span key={idx} className="font-sans text-xs bg-card border border-border px-3 py-1.5 rounded text-foreground">
                    {ac}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="bg-card border border-border p-12 lg:p-16 rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground mb-6">Explore {corridor.name} Opportunities</h2>
          <p className="font-sans text-lg text-muted-foreground font-light mb-10 max-w-xl mx-auto">
            Engage with our advisory desk for tailored insights and curated asset opportunities in this corridor.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Consult Advisory Desk
          </Link>
        </div>
      </div>
    </main>
  );
}
