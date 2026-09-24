import { SERVICES } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found | OTHO Realty' };
  }

  return {
    title: `${service.title} Advisory | OTHO Realty`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Advisory', href: '/advisory' },
            { label: service.title }
          ]} 
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
              Advisory {service.number}
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-foreground -tracking-[0.02em] leading-tight mb-8">
              {service.title}
            </h1>
            <p className="font-sans text-xl text-muted-foreground font-light leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-lg overflow-hidden bg-muted">
            <Image 
              src={service.image} 
              alt={service.title} 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mb-32">
          <h2 className="font-serif text-3xl text-foreground mb-12">Scope of Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {service.scope.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-mono text-sm tracking-widest text-accent mb-4 block">
                  0{idx + 1}
                </span>
                <p className="font-sans text-lg text-foreground font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border p-12 lg:p-16 rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground mb-6">Require Strategic Counsel?</h2>
          <p className="font-sans text-lg text-muted-foreground font-light mb-10 max-w-xl mx-auto">
            Speak with our advisory desk to discuss your specific requirements and explore how we can align our expertise with your objectives.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
