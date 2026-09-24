'use client';

import { Users } from 'lucide-react';

export default function LeadsManager() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="font-serif text-3xl text-foreground">Leads</h1>
        <p className="font-sans text-muted-foreground mt-1">Manage advisory intake submissions.</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-16 flex flex-col items-center justify-center text-center">
        <Users className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="font-serif text-xl text-foreground">No leads yet</h2>
        <p className="font-sans text-sm text-muted-foreground mt-2 max-w-md">
          Leads will appear here when visitors submit the advisory intake form.
        </p>
      </div>
    </div>
  );
}
