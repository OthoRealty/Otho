import Image from 'next/image';
import Link from 'next/link';
import { ProjectReview } from '@/types';

export function ProjectCard({ project }: { project: ProjectReview }) {
  const loadingFactor = Math.round((1 - project.carpet / project.sba) * 100);
  
  let loadingColor = 'text-green-500';
  if (loadingFactor >= 30) {
    loadingColor = 'text-red-500';
  } else if (loadingFactor >= 25) {
    loadingColor = 'text-amber-500';
  }

  return (
    <Link href={`/curation/${project.slug}`} className="group block h-full">
      <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col group hover:border-accent/30 transition-all duration-300">
        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
          <Image 
            src={project.image} 
            alt={project.name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent">
              {project.locality}
            </span>
            <span className="font-mono text-xs md:text-sm text-foreground bg-muted px-2 py-1 rounded">
              {project.score.toFixed(1)}/10
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl text-foreground mt-4">{project.name}</h3>
          <p className="font-sans text-sm md:text-base text-muted-foreground mt-2">{project.developer}</p>
          
          <div className="mt-auto pt-6">
            <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground">
              {project.priceRangeCr}
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest">
                Loading: <span className={loadingColor}>{loadingFactor}%</span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
