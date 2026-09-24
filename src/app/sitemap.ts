import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';
import { GROWTH_CORRIDORS } from '@/data/corridors';
import { INSIGHTS } from '@/data/insights';
import { SERVICES } from '@/data/services';

const BASE_URL = 'https://otho.co.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/curation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/intelligence`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/advisory`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/intelligence/loading-factor-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = PROJECTS
    .filter((p) => p.publishStatus === 'published')
    .map((project) => ({
      url: `${BASE_URL}/curation/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const locationPages: MetadataRoute.Sitemap = GROWTH_CORRIDORS.map((corridor) => ({
    url: `${BASE_URL}/locations/${corridor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const intelligencePages: MetadataRoute.Sitemap = INSIGHTS
    .filter((i) => i.publishStatus === 'published')
    .map((insight) => ({
      url: `${BASE_URL}/intelligence/${insight.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/advisory/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...locationPages,
    ...intelligencePages,
    ...servicePages,
  ];
}
