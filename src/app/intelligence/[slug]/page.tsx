import { INSIGHTS } from '@/data/insights';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export async function generateStaticParams() {
  return INSIGHTS.filter(i => i.publishStatus === 'published').map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);

  if (!insight) {
    return { title: 'Insight Not Found | OTHO Realty' };
  }

  return {
    title: `${insight.title} | OTHO Intelligence`,
    description: insight.summary,
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug && i.publishStatus === 'published');

  if (!insight) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-32 lg:pt-40 lg:pb-40">
      <article className="max-w-4xl mx-auto px-6 lg:px-16">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Intelligence', href: '/intelligence' },
            { label: insight.title }
          ]} 
          className="mb-16"
        />

        <header className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded">
              {insight.category}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {insight.date}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {insight.readTime}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground -tracking-[0.02em] leading-tight mb-8">
            {insight.title}
          </h1>
          
          <p className="font-sans text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
            {insight.summary}
          </p>

          <div className="pt-8 border-t border-border flex items-center">
            <div className="font-sans text-sm text-foreground">
              By <span className="font-medium">{insight.authorRole}</span>
            </div>
          </div>
        </header>

        <div className="bg-muted rounded-lg p-8 lg:p-12 mb-16 border border-border/50">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">Key Takeaways</h3>
          <ul className="space-y-4">
            {insight.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-accent mr-4 mt-2 h-1.5 w-1.5 bg-accent rounded-full shrink-0"></span>
                <span className="font-sans text-lg text-foreground font-light leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {insight.fullBody.map((paragraph, idx) => (
            <p key={idx} className="font-sans text-lg lg:text-xl text-foreground font-light leading-loose mb-8">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-border text-center">
          <h2 className="font-serif text-2xl text-foreground mb-6">Discuss this perspective</h2>
          <p className="font-sans text-muted-foreground font-light mb-8">
            Engage with our advisory team to understand how these dynamics affect your portfolio.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Contact Advisory
          </Link>
        </div>
      </article>
    </main>
  );
}
