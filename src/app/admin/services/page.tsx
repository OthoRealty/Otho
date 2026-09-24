'use client';

import { SERVICES } from '@/data/services';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminServices() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Advisory Verticals</h1>
          <p className="font-sans text-muted-foreground mt-1">
            Manage OTHO's 6 institutional advisory practices, service scopes, and client deliverables.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <span className="font-mono text-2xl text-accent font-light">{service.number}</span>
                <Link
                  href={`/advisory/${service.slug}`}
                  target="_blank"
                  className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border border-border hover:border-accent text-foreground transition-colors inline-flex items-center gap-1"
                >
                  View <ArrowUpRight size={12} />
                </Link>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground font-medium">{service.title}</h2>
                <p className="font-sans text-xs text-muted-foreground mt-2 line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-border/60 pt-4">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Scope & Deliverables
                </h3>
                <ul className="space-y-1.5">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-sans text-muted-foreground">
                      <CheckCircle2 size={12} className="text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
