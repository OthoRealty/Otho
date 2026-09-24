'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn, formatCurrency } from '@/lib/utils';
import { PROJECTS } from '@/data/projects';

export default function LoadingFactorCalculator() {
  const [rateStr, setRateStr] = useState('');
  const [sbaStr, setSbaStr] = useState('');
  const [carpetStr, setCarpetStr] = useState('');

  const formatNumberInput = (value: string) => {
    const cleanValue = value.replace(/,/g, '');
    if (cleanValue === '') return '';
    const num = parseInt(cleanValue, 10);
    if (isNaN(num)) return '';
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRateStr(formatNumberInput(e.target.value));
  };
  const handleSbaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSbaStr(formatNumberInput(e.target.value));
  };
  const handleCarpetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarpetStr(formatNumberInput(e.target.value));
  };

  const rate = parseInt(rateStr.replace(/,/g, ''), 10);
  const sba = parseInt(sbaStr.replace(/,/g, ''), 10);
  const carpet = parseInt(carpetStr.replace(/,/g, ''), 10);

  const hasValidInputs = !isNaN(rate) && rate > 0 && !isNaN(sba) && sba > 0 && !isNaN(carpet) && carpet > 0 && sba >= carpet;

  let loadingFactor = 0;
  let trueRate = 0;
  let premium = 0;
  let totalInvestment = 0;

  if (hasValidInputs) {
    loadingFactor = Math.round((1 - carpet / sba) * 100);
    trueRate = Math.round((rate * sba) / carpet);
    premium = Math.round(((rate * sba / carpet) / rate - 1) * 100);
    totalInvestment = rate * sba;
  }

  const getLoadingFactorColor = (factor: number) => {
    if (factor < 25) return 'text-green-600 dark:text-green-500';
    if (factor <= 30) return 'text-amber-500';
    return 'text-red-500';
  };

  const sortedProjects = [...PROJECTS].sort((a, b) => {
    const lfA = (1 - a.carpet / a.sba) * 100;
    const lfB = (1 - b.carpet / b.sba) * 100;
    return lfA - lfB;
  });

  return (
    <main className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-muted py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Intelligence Tool
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mt-4">
            Loading Factor Calculator
          </h1>
          <p className="font-sans text-lg text-muted-foreground mt-4 max-w-2xl">
            Developers quote rates on Super Built-Up Area. You live in RERA Carpet Area. This calculator reveals the gap — and what you're actually paying per usable square foot.
          </p>
        </div>
      </section>

      {/* Calculator Panel */}
      <section className="px-6 lg:px-16">
        <div className="bg-card border border-border rounded-xl p-8 lg:p-12 max-w-3xl mx-auto -mt-8 relative z-10 shadow-lg">
          <div className="space-y-8">
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Quoted Rate (₹/sq ft on SBA)
              </label>
              <input
                type="text"
                placeholder="10,800"
                value={rateStr}
                onChange={handleRateChange}
                className="w-full bg-transparent border-b-2 border-border py-3 text-2xl font-mono text-foreground placeholder:text-muted-foreground/30 focus:border-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Super Built-Up Area (sq ft)
              </label>
              <input
                type="text"
                placeholder="2,480"
                value={sbaStr}
                onChange={handleSbaChange}
                className="w-full bg-transparent border-b-2 border-border py-3 text-2xl font-mono text-foreground placeholder:text-muted-foreground/30 focus:border-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                RERA Carpet Area (sq ft)
              </label>
              <input
                type="text"
                placeholder="1,735"
                value={carpetStr}
                onChange={handleCarpetChange}
                className="w-full bg-transparent border-b-2 border-border py-3 text-2xl font-mono text-foreground placeholder:text-muted-foreground/30 focus:border-accent outline-none transition-colors"
              />
            </div>
          </div>

          {/* Results Panel */}
          {hasValidInputs && (
            <div className="mt-12 bg-muted rounded-xl p-8 lg:p-12 animate-in slide-in-from-bottom-4 fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Loading Factor</p>
                  <p className={cn("font-serif text-4xl", getLoadingFactorColor(loadingFactor))}>
                    {loadingFactor}%
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">True Rate per Usable Sq Ft</p>
                  <p className="font-serif text-4xl text-accent">
                    ₹{new Intl.NumberFormat('en-IN').format(trueRate)}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Premium Over Quoted Rate</p>
                  <p className="font-serif text-4xl text-foreground">
                    {premium}%
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Total Investment</p>
                  <p className="font-serif text-4xl text-foreground">
                    {formatCurrency(totalInvestment)}
                  </p>
                </div>
              </div>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mt-8">
                {loadingFactor < 25
                  ? "This loading factor is within efficient benchmarks. The gap between quoted and effective rate is manageable."
                  : loadingFactor <= 30
                  ? `This loading factor is moderate. For every ₹${new Intl.NumberFormat('en-IN').format(rate)} quoted, you're effectively paying ₹${new Intl.NumberFormat('en-IN').format(trueRate)} per usable square foot — a ${premium}% premium.`
                  : `This loading factor exceeds 30% — significantly above efficient benchmarks. The effective cost per usable square foot is ₹${new Intl.NumberFormat('en-IN').format(trueRate)}, a ${premium}% premium over the quoted rate. Examine whether the quoted SBA includes excessive common areas.`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mt-16 px-6 lg:px-16 max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl text-foreground mb-8">How Hyderabad Projects Compare</h2>
        <div className="w-full bg-card border border-border rounded-xl overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Project</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Developer</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">SBA (sq ft)</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Carpet (sq ft)</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Loading Factor</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Quoted Rate</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">True Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sortedProjects.map((project, index) => {
                const lf = Math.round((1 - project.carpet / project.sba) * 100);
                const trueR = Math.round((project.rate * project.sba) / project.carpet);
                return (
                  <tr key={project.id} className={cn("hover:bg-muted/50 transition-colors", index % 2 === 0 ? "bg-transparent" : "bg-muted/20")}>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <Link href={`/curation/${project.slug}`} className="text-foreground hover:text-accent transition-colors">
                        {project.name}
                      </Link>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground whitespace-nowrap">{project.developer}</td>
                    <td className="py-4 px-6 text-foreground whitespace-nowrap">{new Intl.NumberFormat('en-IN').format(project.sba)}</td>
                    <td className="py-4 px-6 text-foreground whitespace-nowrap">{new Intl.NumberFormat('en-IN').format(project.carpet)}</td>
                    <td className={cn("py-4 px-6 whitespace-nowrap", getLoadingFactorColor(lf))}>{lf}%</td>
                    <td className="py-4 px-6 text-foreground whitespace-nowrap">₹{new Intl.NumberFormat('en-IN').format(project.rate)}</td>
                    <td className="py-4 px-6 text-accent whitespace-nowrap">₹{new Intl.NumberFormat('en-IN').format(trueR)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-16 px-6 lg:px-16 max-w-3xl mx-auto space-y-4">
        <details className="group bg-card border border-border rounded-xl p-6 open:bg-muted/50 transition-colors">
          <summary className="font-serif text-lg text-foreground cursor-pointer list-none flex justify-between items-center">
            What is a loading factor?
            <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
          </summary>
          <div className="mt-4 font-sans text-muted-foreground leading-relaxed">
            The percentage of space you pay for but cannot use. It includes common areas like lobbies, corridors, lift shafts, and stairwells.
          </div>
        </details>
        
        <details className="group bg-card border border-border rounded-xl p-6 open:bg-muted/50 transition-colors">
          <summary className="font-serif text-lg text-foreground cursor-pointer list-none flex justify-between items-center">
            Why does the loading factor matter?
            <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
          </summary>
          <div className="mt-4 font-sans text-muted-foreground leading-relaxed">
            A 30% loading factor means you lose 30% of what you're paying for. Two apartments at the same quoted rate but different loading factors have vastly different true costs.
          </div>
        </details>

        <details className="group bg-card border border-border rounded-xl p-6 open:bg-muted/50 transition-colors">
          <summary className="font-serif text-lg text-foreground cursor-pointer list-none flex justify-between items-center">
            What is a good loading factor?
            <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
          </summary>
          <div className="mt-4 font-sans text-muted-foreground leading-relaxed">
            Below 25% is efficient. 25-30% is common in Hyderabad premium segment. Above 30% warrants scrutiny.
          </div>
        </details>
      </section>
    </main>
  );
}
