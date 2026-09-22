import React, { useState } from 'react';
import { Search, Scale, CheckCircle2, AlertTriangle } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectReview } from '../types';

interface ProjectsExplorerProps {
  onCompare: (p1: ProjectReview, p2: ProjectReview) => void;
  onInquire: (projectName: string) => void;
  compareList: ProjectReview[];
  onToggleCompare: (project: ProjectReview) => void;
}

export const ProjectsExplorer: React.FC<ProjectsExplorerProps> = ({
  onCompare,
  onInquire,
  compareList,
  onToggleCompare,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [sortBy, setSortBy] = useState<'score' | 'loading' | 'realRate' | 'advertised'>('score');

  const localities = ['ALL', 'Kokapet', 'Neopolis, Kokapet', 'Gachibowli', 'Narsingi', 'Nallagandla', 'Kollur'];

  // Filter and sort logic
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.locality.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocality = selectedLocality === 'ALL' || p.locality === selectedLocality;
    const matchesStatus = selectedStatus === 'ALL' || p.status === selectedStatus;

    return matchesSearch && matchesLocality && matchesStatus;
  }).sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'loading') {
      const loadA = ((a.sba - a.carpet) / a.sba);
      const loadB = ((b.sba - b.carpet) / b.sba);
      return loadA - loadB; // lowest loading first
    }
    if (sortBy === 'realRate') {
      const rateA = (a.rate * a.sba) / a.carpet;
      const rateB = (b.rate * b.sba) / b.carpet;
      return rateA - rateB; // lowest real rate first
    }
    if (sortBy === 'advertised') return a.rate - b.rate;
    return 0;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#DDD9D0]">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C5A25D]" />
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A25D]">
                INDEPENDENT PROPERTY INTELLIGENCE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#0C1017]">
              WHAT’S WORTH BUYING<br />
              <span className="text-[#C5A25D]">IN HYDERABAD.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <span className="text-[10px] uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 border border-emerald-200 font-semibold mb-2">
              Verified Against TG-RERA
            </span>
            <p className="text-xs sm:text-sm text-[#4A5565] max-w-sm md:text-right font-light leading-relaxed">
              Real price per usable foot, true density, and the honest negatives nobody puts in a sales brochure.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="my-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Box */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#717D8D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by project name, developer, or corridor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#DDD9D0] text-xs sm:text-sm text-[#0C1017] placeholder-[#717D8D] focus:outline-none focus:border-[#C5A25D] transition-colors"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#DDD9D0] text-xs font-semibold text-[#0C1017] focus:outline-none focus:border-[#C5A25D]"
              >
                <option value="score">Sort: Highest OTHO Score</option>
                <option value="loading">Sort: Lowest Loading Factor %</option>
                <option value="realRate">Sort: Best Real Carpet Rate (Lowest)</option>
                <option value="advertised">Sort: Lowest Quoted Rate</option>
              </select>
            </div>

            {/* Status Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#DDD9D0] text-xs font-semibold text-[#0C1017] focus:outline-none focus:border-[#C5A25D]"
              >
                <option value="ALL">Status: All Projects</option>
                <option value="Ready to move">Ready to move</option>
                <option value="Under construction">Under construction</option>
                <option value="Newly launched">Newly launched</option>
              </select>
            </div>
          </div>

          {/* Locality Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {localities.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocality(loc)}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all border ${
                  selectedLocality === loc
                    ? 'bg-[#0C1017] text-[#FBF9F5] border-[#0C1017]'
                    : 'bg-white text-[#4A5565] border-[#DDD9D0] hover:border-[#0C1017] hover:text-[#0C1017]'
                }`}
              >
                {loc === 'ALL' ? 'All Localities' : loc}
              </button>
            ))}
          </div>
        </div>

        {/* 20 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isCompared = compareList.some((p) => p.id === project.id);
            const loadingFactor = Math.round(((project.sba - project.carpet) / project.sba) * 100);
            const realCarpetRate = Math.round((project.rate * project.sba) / project.carpet);

            return (
              <div
                key={project.id}
                className="group bg-white border border-[#DDD9D0] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-elevated hover:border-[#C5A25D]"
              >
                {/* Image Top */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                  />
                  {/* Score badge & Locality */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-[#0C1017]/85 text-white backdrop-blur-sm border border-white/20">
                      {project.locality}
                    </span>
                    <div className="flex items-center space-x-1 px-2.5 py-1 bg-[#C5A25D] text-[#0C1017] font-bold text-xs shadow-sm">
                      <span>OTHO {project.score}</span>
                    </div>
                  </div>

                  {/* Status & Loading Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 bg-[#FBF9F5]/90 text-[#0C1017] border border-[#DDD9D0]">
                      {project.status} ({project.progress}%)
                    </span>
                    <span className={`text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 ${
                      loadingFactor <= 30 ? 'bg-emerald-700 text-white' : 'bg-amber-700 text-white'
                    }`}>
                      {loadingFactor}% Loading
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-[#717D8D] uppercase block">
                      {project.developer}
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase text-[#0C1017] mt-0.5 group-hover:text-[#C5A25D] transition-colors">
                      {project.name}
                    </h3>

                    {/* Dual Rate Matrix: Brochure vs Real Usable */}
                    <div className="mt-4 p-3.5 bg-[#FBF9F5] border border-[#DDD9D0] grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#717D8D] block">
                          Quoted Brochure Rate:
                        </span>
                        <span className="font-mono font-semibold text-[#0C1017]">
                          ₹{project.rate.toLocaleString('en-IN')}/sft
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-amber-900 block font-semibold">
                          Real Usable Carpet Rate:
                        </span>
                        <span className="font-mono font-bold text-[#C5A25D]">
                          ₹{realCarpetRate.toLocaleString('en-IN')}/sft
                        </span>
                      </div>
                    </div>

                    {/* Quick Specs */}
                    <div className="mt-3 flex items-center justify-between text-[11px] text-[#4A5565] border-b border-[#DDD9D0] pb-3">
                      <span>{project.bhk} BHK &bull; {project.carpet} sq ft carpet</span>
                      <span>Land Share: <strong className="text-[#0C1017]">{project.landShare}</strong></span>
                    </div>

                    {/* Honest Positives & Flags */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start space-x-2 text-[11px] text-[#4A5565]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{project.positives[0]}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-[11px] text-[#4A5565]">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-amber-950 font-medium">{project.negatives[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="mt-6 pt-4 border-t border-[#DDD9D0] flex items-center justify-between gap-3">
                    <button
                      onClick={() => onToggleCompare(project)}
                      className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-wider border transition-colors flex items-center space-x-1.5 ${
                        isCompared
                          ? 'bg-[#0C1017] text-[#FBF9F5] border-[#0C1017]'
                          : 'bg-white text-[#4A5565] border-[#DDD9D0] hover:border-[#0C1017]'
                      }`}
                    >
                      <Scale className="w-3.5 h-3.5" />
                      <span>{isCompared ? 'Added' : 'Compare'}</span>
                    </button>

                    <button
                      onClick={() => onInquire(project.name)}
                      className="flex-1 py-2 text-[11px] font-semibold uppercase tracking-wider bg-[#C5A25D] text-[#0C1017] hover:bg-[#0C1017] hover:text-white transition-colors text-center"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Compare Action Bar if items selected */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0C1017] text-white px-6 py-4 shadow-modal border border-[#C5A25D] flex items-center space-x-6 animate-fade-in max-w-xl w-[90%] justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-full bg-[#C5A25D] text-[#0C1017] flex items-center justify-center font-bold text-xs">
                {compareList.length}
              </div>
              <div className="text-xs">
                <span className="font-semibold block uppercase">
                  {compareList.length === 1 ? '1 Project Selected' : '2 Projects Ready for Comparison'}
                </span>
                <span className="text-white/60 text-[10px]">
                  {compareList.map((p) => p.name).join(' vs. ')}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                disabled={compareList.length < 2}
                onClick={() => {
                  if (compareList.length >= 2) onCompare(compareList[0], compareList[1]);
                }}
                className="px-4 py-2 bg-[#C5A25D] text-[#0C1017] text-xs font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white transition-colors"
              >
                Compare Side-by-Side
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
