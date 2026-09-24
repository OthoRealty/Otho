import type { Metadata } from 'next';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';

export const metadata: Metadata = {
  title: 'Curated Project Reviews | OTHO Realty',
  description: 'Independent, transparent reviews of Hyderabad\'s premium residential projects. Loading factors, RERA verification, honest analysis.',
};

export default function CurationPage() {
  const publishedProjects = PROJECTS.filter(p => p.publishStatus === 'published');

  return (
    <main className="min-h-screen bg-background">
      <section className="py-32 lg:py-40 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent">
            CURATED COLLECTION
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 leading-tight">
            Independent project intelligence
          </h1>
          <p className="font-sans text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            Every review includes verified RERA data, honest drawbacks, and loading factor analysis. No sponsored content. No developer influence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24">
          {publishedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
