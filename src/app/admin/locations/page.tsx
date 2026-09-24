'use client';

import { useState } from 'react';
import { GROWTH_CORRIDORS } from '@/data/corridors';
import { Search, MapPin, Building, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdminLocations() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = GROWTH_CORRIDORS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.badge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Growth Corridors</h1>
          <p className="font-sans text-muted-foreground mt-1">
            Manage micro-market data, urban planning dynamics, and infrastructure status matrices.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl px-4 py-2.5 flex items-center gap-3 max-w-md">
        <Search size={16} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search corridors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent border-none outline-none font-sans text-sm w-full text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.map((corridor) => (
          <div
            key={corridor.id}
            className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    <h2 className="font-serif text-xl text-foreground font-medium">{corridor.name}</h2>
                  </div>
                  <p className="font-mono text-[11px] text-accent mt-1">{corridor.badge}</p>
                </div>
                <Link
                  href={`/locations/${corridor.slug}`}
                  target="_blank"
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded border border-border hover:border-accent text-foreground transition-colors inline-flex items-center gap-1"
                >
                  View Guide <ArrowUpRight size={12} />
                </Link>
              </div>

              <p className="font-sans text-sm text-muted-foreground line-clamp-2">{corridor.description}</p>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Infrastructure Projects ({corridor.infraStatus.length})
                </h3>
                <div className="space-y-1.5">
                  {corridor.infraStatus.map((infra, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs p-2 rounded bg-muted/60 border border-border/50"
                    >
                      <span className="font-sans text-foreground truncate mr-2">{infra.name}</span>
                      <span
                        className={cn(
                          'font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold shrink-0',
                          infra.status === 'CONFIRMED'
                            ? 'bg-green-500/10 text-green-500'
                            : infra.status === 'LIKELY'
                            ? 'bg-blue-500/10 text-blue-500'
                            : infra.status === 'UNFUNDED'
                            ? 'bg-amber-500/10 text-amber-500'
                            : 'bg-muted-foreground/10 text-muted-foreground'
                        )}
                      >
                        {infra.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                  Asset Classes
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {corridor.assetClasses.map((ac, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50"
                    >
                      {ac}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
