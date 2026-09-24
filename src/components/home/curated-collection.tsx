import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

export function CuratedCollection() {
  const featuredProjects = PROJECTS
    .filter((p) => p.featuredOrder !== undefined)
    .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0))
    .slice(0, 4);

  return (
    <section className="bg-bone-100 py-32 lg:py-40 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-widest text-gold-500">
              CURATED COLLECTION
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy-900 mt-4 tracking-[-0.02em]">
              Select project dossiers, independently reviewed
            </h2>
          </div>
          <Link 
            href="/curation" 
            className="font-sans text-sm uppercase tracking-wider text-gold-600 hover:text-gold-500 transition-colors whitespace-nowrap font-medium"
          >
            View Full Curation &rarr;
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {featuredProjects.map((project) => {
            const loadingFactor = Math.round((1 - project.carpet / project.sba) * 100);
            
            return (
              <Link key={project.id} href={`/curation/${project.slug}`} className="group block" data-cursor="DOSSIER">
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-navy-900">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                      {project.developer}
                    </p>
                    <h3 className="font-serif text-xl lg:text-2xl text-white mt-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-3 flex-wrap">
                      <span className="inline-block font-mono text-[11px] uppercase tracking-wider bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/90">
                        {project.locality}
                      </span>
                      <span className="font-mono text-[12px] text-gold-400">
                        {loadingFactor}% Loading Factor
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
