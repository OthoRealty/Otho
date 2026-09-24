'use client';

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Clock,
  Smartphone,
  Laptop,
  Tablet,
  Globe2,
  Calculator,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  MapPin,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type TimeRange = '24h' | '7d' | '30d' | 'ytd';

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');

  // Realistic telemetry data adapted per timeframe
  const metricsByRange = {
    '24h': {
      visitors: '642',
      visitorsDelta: '+12.4%',
      views: '2,180',
      viewsDelta: '+15.1%',
      avgTime: '3m 48s',
      conversions: '5',
      calculatorUsage: '84',
      bounceRate: '24.2%',
    },
    '7d': {
      visitors: '4,120',
      visitorsDelta: '+18.6%',
      views: '14,890',
      viewsDelta: '+21.3%',
      avgTime: '4m 12s',
      conversions: '29',
      calculatorUsage: '612',
      bounceRate: '23.8%',
    },
    '30d': {
      visitors: '16,840',
      visitorsDelta: '+24.1%',
      views: '61,200',
      viewsDelta: '+28.0%',
      avgTime: '4m 35s',
      conversions: '118',
      calculatorUsage: '2,490',
      bounceRate: '22.5%',
    },
    'ytd': {
      visitors: '82,400',
      visitorsDelta: '+34.5%',
      views: '312,000',
      viewsDelta: '+41.2%',
      avgTime: '4m 42s',
      conversions: '540',
      calculatorUsage: '11,800',
      bounceRate: '21.9%',
    },
  };

  const current = metricsByRange[timeRange];

  // Daily volume distribution
  const chartDays = [
    { label: 'Mon', value: 68 },
    { label: 'Tue', value: 84 },
    { label: 'Wed', value: 92 },
    { label: 'Thu', value: 76 },
    { label: 'Fri', value: 88 },
    { label: 'Sat', value: 62 },
    { label: 'Sun', value: 55 },
  ];

  // Corridors demand distribution
  const corridorDemand = [
    { name: 'Kokapet (Golden Mile)', share: 38, inquiries: 14, color: 'bg-accent' },
    { name: 'Neopolis High-Density Vector', share: 29, inquiries: 9, color: 'bg-blue-500' },
    { name: 'Financial District / Nanakramguda', share: 18, inquiries: 4, color: 'bg-emerald-500' },
    { name: 'HITEC City & Madhapur', share: 9, inquiries: 2, color: 'bg-purple-500' },
    { name: 'Narsingi & Gandipet', share: 6, inquiries: 0, color: 'bg-amber-500' },
  ];

  // Top Pages
  const topPages = [
    { path: '/curation/rajapushpa-regalia', views: '2,840', avgTime: '4m 50s', bounce: '19%' },
    { path: '/intelligence/loading-factor-calculator', views: '2,410', avgTime: '6m 12s', bounce: '14%' },
    { path: '/curation/candeur-skyline', views: '1,950', avgTime: '3m 40s', bounce: '22%' },
    { path: '/locations/neopolis', views: '1,620', avgTime: '3m 15s', bounce: '26%' },
    { path: '/intelligence/the-vertical-evolution-of-west-hyderabad', views: '1,380', avgTime: '5m 02s', bounce: '21%' },
  ];

  // Real-time live feed
  const liveFeed = [
    { city: 'Hyderabad', page: 'Loading Factor Calculator', device: 'Desktop', time: 'Just now' },
    { city: 'Dubai, UAE', page: 'Rajapushpa Aurelia Dossier', device: 'Mobile', time: '3 min ago' },
    { city: 'Bengaluru', page: 'Neopolis Corridor Guide', device: 'Desktop', time: '7 min ago' },
    { city: 'Singapore', page: 'Advisory Intake Desk', device: 'Mobile', time: '14 min ago' },
    { city: 'Mumbai', page: 'Rajapushpa Regalia Dossier', device: 'Desktop', time: '21 min ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground flex items-center gap-3">
            <BarChart3 className="text-accent" /> Sovereign Web Analytics
          </h1>
          <p className="font-sans text-muted-foreground mt-1">
            Real-time telemetry, visitor intelligence, micro-market demand vectors, and lead conversion rates.
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex bg-card border border-border rounded-lg p-1 self-start sm:self-auto">
          {[
            { key: '24h', label: '24 Hours' },
            { key: '7d', label: '7 Days' },
            { key: '30d', label: '30 Days' },
            { key: 'ytd', label: 'Year to Date' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setTimeRange(item.key as TimeRange)}
              className={cn(
                'px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider transition-colors',
                timeRange === item.key
                  ? 'bg-accent text-accent-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-[10px] uppercase tracking-widest">Unique Visitors</span>
            <Users size={18} className="text-accent" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-medium text-foreground">{current.visitors}</span>
            <span className="font-mono text-xs text-green-500 font-semibold inline-flex items-center">
              <ArrowUpRight size={14} /> {current.visitorsDelta}
            </span>
          </div>
          <p className="font-sans text-xs text-muted-foreground">High net-worth & institutional inquiries</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-[10px] uppercase tracking-widest">Page Impressions</span>
            <Eye size={18} className="text-blue-500" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-medium text-foreground">{current.views}</span>
            <span className="font-mono text-xs text-green-500 font-semibold inline-flex items-center">
              <ArrowUpRight size={14} /> {current.viewsDelta}
            </span>
          </div>
          <p className="font-sans text-xs text-muted-foreground">Deep dossier & article reading</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-[10px] uppercase tracking-widest">Avg Session Length</span>
            <Clock size={18} className="text-amber-500" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-medium text-foreground">{current.avgTime}</span>
            <span className="font-mono text-xs text-accent">Top 5% sector benchmark</span>
          </div>
          <p className="font-sans text-xs text-muted-foreground">Bounce rate steady at {current.bounceRate}</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="font-mono text-[10px] uppercase tracking-widest">Calculator Usage</span>
            <Calculator size={18} className="text-emerald-500" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-medium text-foreground">{current.calculatorUsage}</span>
            <span className="font-mono text-xs text-emerald-500 font-semibold">{current.conversions} leads</span>
          </div>
          <p className="font-sans text-xs text-muted-foreground">High-intent true cost calculations</p>
        </div>
      </div>

      {/* Traffic Trend Visualizer + Corridor Demand */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Bar Chart */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-lg text-foreground font-medium">Weekly Visitor Trajectory</h2>
              <p className="font-sans text-xs text-muted-foreground">Daily traffic volume and engagement peaks</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-muted border border-border text-foreground">
              Peak: Wednesday (920 sessions)
            </span>
          </div>

          {/* SVG Bar Visualization */}
          <div className="h-56 flex items-end justify-between gap-4 pt-4 border-b border-border/60 pb-2">
            {chartDays.map((d) => (
              <div key={d.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="font-mono text-[10px] text-muted-foreground group-hover:text-accent transition-colors">
                  {d.value * 10}
                </span>
                <div
                  style={{ height: `${d.value}%` }}
                  className="w-full max-w-[48px] bg-accent/30 group-hover:bg-accent rounded-t transition-all duration-300"
                />
                <span className="font-mono text-xs text-muted-foreground font-medium">{d.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 text-xs font-mono text-muted-foreground">
            <span>Aggregated across all 60 static & dynamic routes</span>
            <span className="text-accent font-semibold">99.98% Platform Uptime</span>
          </div>
        </div>

        {/* Micro-Market Demand Split */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-5">
          <div>
            <h2 className="font-serif text-lg text-foreground font-medium">Micro-Market Interest</h2>
            <p className="font-sans text-xs text-muted-foreground">Visitor distribution across Hyderabad vectors</p>
          </div>

          <div className="space-y-4">
            {corridorDemand.map((cd) => (
              <div key={cd.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-sans">
                  <span className="font-medium text-foreground truncate mr-2">{cd.name}</span>
                  <span className="font-mono text-accent font-semibold">{cd.share}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div style={{ width: `${cd.share}%` }} className={cn('h-full rounded-full', cd.color)} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-muted rounded-lg border border-border/60 text-xs font-sans text-muted-foreground">
            <span className="text-foreground font-semibold">Kokapet & Neopolis</span> generate 67% of all advisory inquiry mandates.
          </div>
        </div>
      </div>

      {/* Lower Section: Top Content & Real-time Live Stream */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performing Content */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg text-foreground font-medium">Top Performing Dossiers & Tools</h2>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Ranked by Depth</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <th className="pb-3">Path / Resource</th>
                  <th className="pb-3 text-right">Views</th>
                  <th className="pb-3 text-right">Avg Time</th>
                  <th className="pb-3 text-right">Bounce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-xs">
                {topPages.map((tp) => (
                  <tr key={tp.path} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 font-mono text-foreground font-medium truncate max-w-xs">{tp.path}</td>
                    <td className="py-3 font-mono text-muted-foreground text-right">{tp.views}</td>
                    <td className="py-3 font-mono text-accent text-right font-medium">{tp.avgTime}</td>
                    <td className="py-3 font-mono text-muted-foreground text-right">{tp.bounce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real-Time Live Activity Stream */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <h2 className="font-serif text-lg text-foreground font-medium">Live Activity Feed</h2>
            </div>
            <span className="font-mono text-[10px] text-green-500 uppercase tracking-widest">Active</span>
          </div>

          <div className="space-y-3">
            {liveFeed.map((lf, i) => (
              <div key={i} className="p-3 bg-muted/50 rounded-lg border border-border/50 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground flex items-center gap-1">
                    <MapPin size={11} className="text-accent" /> {lf.city}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">{lf.time}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="truncate max-w-[160px] font-sans">{lf.page}</span>
                  <span className="font-mono text-[10px] bg-background px-1.5 py-0.5 rounded border border-border">
                    {lf.device}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/admin/leads"
            className="block text-center font-mono text-[11px] uppercase tracking-wider text-accent hover:text-accent/80 transition-colors pt-2 border-t border-border/60"
          >
            Review Inbound Leads Queue &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
