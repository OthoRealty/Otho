'use client';

import {
  Building2,
  Newspaper,
  MapPin,
  Briefcase,
  BarChart3,
  Users,
  Eye,
  ArrowUpRight,
  Plus,
  UploadCloud,
  UserCog,
  Calculator,
  ExternalLink
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { INSIGHTS } from '@/data/insights';
import { GROWTH_CORRIDORS } from '@/data/corridors';
import { SERVICES } from '@/data/services';
import Link from 'next/link';

export default function AdminDashboard() {
  const publishedInsights = INSIGHTS.filter((i) => i.publishStatus === 'published');

  const contentStats = [
    { label: 'Curated Projects', value: PROJECTS.length, icon: Building2, href: '/admin/projects' },
    { label: 'Published Articles', value: publishedInsights.length, icon: Newspaper, href: '/admin/intelligence' },
    { label: 'Growth Corridors', value: GROWTH_CORRIDORS.length, icon: MapPin, href: '/admin/locations' },
    { label: 'Advisory Verticals', value: SERVICES.length, icon: Briefcase, href: '/admin/services' },
  ];

  const recentProjects = [...PROJECTS].slice(0, 5);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl text-foreground">Executive Control Desk</h1>
          <p className="font-sans text-muted-foreground mt-1">
            Real-time platform status, audience telemetry, and advisory content administration.
          </p>
        </div>

        {/* Quick Action Triggers */}
        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-foreground text-background font-mono text-[11px] uppercase tracking-wider rounded font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Plus size={13} /> Project
          </Link>
          <Link
            href="/admin/intelligence"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-card border border-border text-foreground font-mono text-[11px] uppercase tracking-wider rounded font-medium hover:border-accent transition-colors"
          >
            <Plus size={13} /> Article
          </Link>
          <Link
            href="/admin/media"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-card border border-border text-foreground font-mono text-[11px] uppercase tracking-wider rounded font-medium hover:border-accent transition-colors"
          >
            <UploadCloud size={13} /> Media
          </Link>
          <Link
            href="/admin/users"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-card border border-border text-foreground font-mono text-[11px] uppercase tracking-wider rounded font-medium hover:border-accent transition-colors"
          >
            <UserCog size={13} /> User
          </Link>
        </div>
      </div>

      {/* Web Analytics Snapshot Card */}
      <div className="bg-gradient-to-r from-card to-muted border border-border rounded-xl p-6 lg:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/15 text-accent">
              <BarChart3 size={24} />
            </div>
            <div>
              <h2 className="font-serif text-xl text-foreground font-medium">Audience & Web Telemetry (Last 7 Days)</h2>
              <p className="font-sans text-xs text-muted-foreground">Real-time visitor volume and engagement</p>
            </div>
          </div>
          <Link
            href="/admin/analytics"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-accent font-semibold hover:underline"
          >
            Open Full Analytics Suite <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <Users size={12} className="text-accent" /> Unique Visitors
            </span>
            <div className="font-serif text-2xl lg:text-3xl text-foreground font-medium">4,120</div>
            <span className="font-mono text-xs text-green-500 font-semibold inline-flex items-center">
              <ArrowUpRight size={12} /> +18.6%
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <Eye size={12} className="text-blue-500" /> Page Impressions
            </span>
            <div className="font-serif text-2xl lg:text-3xl text-foreground font-medium">14,890</div>
            <span className="font-mono text-xs text-green-500 font-semibold inline-flex items-center">
              <ArrowUpRight size={12} /> +21.3%
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <Calculator size={12} className="text-emerald-500" /> Calculator Queries
            </span>
            <div className="font-serif text-2xl lg:text-3xl text-foreground font-medium">612</div>
            <span className="font-mono text-xs text-accent">High Purchase Intent</span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <Briefcase size={12} className="text-purple-500" /> Inbound Mandates
            </span>
            <div className="font-serif text-2xl lg:text-3xl text-foreground font-medium">29</div>
            <Link href="/admin/leads" className="font-mono text-xs text-accent hover:underline block">
              View Leads Queue &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Content Counts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contentStats.map((stat, i) => (
          <Link
            key={i}
            href={stat.href}
            className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors block"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="text-accent h-6 w-6" />
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <div className="font-serif text-3xl text-foreground mt-4">{stat.value}</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
              {stat.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Projects Table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-2xl text-foreground">Recently Reviewed Projects</h2>
          <Link
            href="/admin/projects"
            className="font-mono text-xs uppercase tracking-wider text-accent hover:underline"
          >
            View All ({PROJECTS.length}) &rarr;
          </Link>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Developer</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Locality</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Loading Factor</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Otho Score</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">Dossier</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project) => {
                const loadingFactor = Math.round((1 - project.carpet / project.sba) * 100);
                return (
                  <tr key={project.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-sans text-sm text-foreground font-medium">{project.name}</td>
                    <td className="p-4 font-sans text-sm text-muted-foreground">{project.developer}</td>
                    <td className="p-4 font-sans text-sm text-muted-foreground">{project.locality}</td>
                    <td className="p-4 font-mono text-xs font-semibold">
                      <span className={loadingFactor <= 30 ? 'text-green-500' : 'text-amber-500'}>
                        {loadingFactor}%
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-accent/10 text-accent font-mono text-xs font-bold border border-accent/20">
                        {project.score}/10
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/curation/${project.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors"
                      >
                        Inspect <ExternalLink size={12} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
