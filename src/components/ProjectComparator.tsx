import React from 'react';
import { X, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';
import { ProjectReview } from '../types';

interface ProjectComparatorProps {
  projectA: ProjectReview;
  projectB: ProjectReview;
  allProjects: ProjectReview[];
  onSelectProjectA: (project: ProjectReview) => void;
  onSelectProjectB: (project: ProjectReview) => void;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectComparator: React.FC<ProjectComparatorProps> = ({
  projectA,
  projectB,
  allProjects,
  onSelectProjectA,
  onSelectProjectB,
  onClose,
  onInquire,
}) => {
  // Metric calculations
  const loadA = Math.round(((projectA.sba - projectA.carpet) / projectA.sba) * 100);
  const loadB = Math.round(((projectB.sba - projectB.carpet) / projectB.sba) * 100);

  const realRateA = Math.round((projectA.rate * projectA.sba) / projectA.carpet);
  const realRateB = Math.round((projectB.rate * projectB.sba) / projectB.carpet);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0C1017]/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF9F5] border border-[#DDD9D0] w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-modal flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Comparator Header */}
        <div className="p-6 sm:p-8 bg-white border-b border-[#DDD9D0] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-[#C5A25D]/15 border border-[#C5A25D] text-[#C5A25D]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C5A25D]">
                HEAD-TO-HEAD COMPARISON
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#0C1017]">
                PROJECT SPECIFICATION MATRIX
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[#DDD9D0] text-[#0C1017] hover:text-[#C5A25D] transition-colors"
            aria-label="Close comparison modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Dropdown Pickers */}
        <div className="p-6 sm:p-8 bg-[#F5F3ED] border-b border-[#DDD9D0] grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project A Picker */}
          <div>
            <label className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#717D8D] block mb-1.5">
              SELECT FIRST PROJECT
            </label>
            <select
              value={projectA.id}
              onChange={(e) => {
                const found = allProjects.find((p) => p.id === Number(e.target.value));
                if (found) onSelectProjectA(found);
              }}
              className="w-full px-4 py-2.5 bg-white border border-[#DDD9D0] text-sm font-semibold text-[#0C1017] focus:outline-none focus:border-[#C5A25D]"
            >
              {allProjects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.locality} &bull; ₹{p.rate.toLocaleString('en-IN')}/sq ft)
                </option>
              ))}
            </select>
          </div>

          {/* Project B Picker */}
          <div>
            <label className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#717D8D] block mb-1.5">
              SELECT SECOND PROJECT
            </label>
            <select
              value={projectB.id}
              onChange={(e) => {
                const found = allProjects.find((p) => p.id === Number(e.target.value));
                if (found) onSelectProjectB(found);
              }}
              className="w-full px-4 py-2.5 bg-white border border-[#DDD9D0] text-sm font-semibold text-[#0C1017] focus:outline-none focus:border-[#C5A25D]"
            >
              {allProjects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.locality} &bull; ₹{p.rate.toLocaleString('en-IN')}/sq ft)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Metric Comparison Table */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#DDD9D0]">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-[#717D8D] w-1/3">
                    Metric / Attribute
                  </th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-[#0C1017] w-1/3 bg-white/60">
                    {projectA.name}
                  </th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-[#0C1017] w-1/3 bg-white/60">
                    {projectB.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD9D0]">
                {/* Developer */}
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#4A5565]">Developer</td>
                  <td className="py-3.5 px-4 font-semibold text-[#0C1017]">{projectA.developer}</td>
                  <td className="py-3.5 px-4 font-semibold text-[#0C1017]">{projectB.developer}</td>
                </tr>

                {/* Locality */}
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#4A5565]">Locality</td>
                  <td className="py-3.5 px-4 font-semibold text-[#0C1017]">{projectA.locality}</td>
                  <td className="py-3.5 px-4 font-semibold text-[#0C1017]">{projectB.locality}</td>
                </tr>

                {/* Quoted Rate */}
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#4A5565]">Quoted Rate (per SBA)</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#0C1017]">
                    ₹{projectA.rate.toLocaleString('en-IN')} / sq ft
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#0C1017]">
                    ₹{projectB.rate.toLocaleString('en-IN')} / sq ft
                  </td>
                </tr>

                {/* Real Carpet Rate */}
                <tr className="bg-amber-50/50">
                  <td className="py-3.5 px-4 font-bold text-[#0C1017]">
                    Real Rate on Usable Carpet
                    <span className="block text-[10px] font-normal text-[#717D8D]">
                      What you actually pay per usable foot
                    </span>
                  </td>
                  <td className={`py-3.5 px-4 font-mono font-bold ${
                    realRateA <= realRateB ? 'text-emerald-700 bg-emerald-50/60' : 'text-[#0C1017]'
                  }`}>
                    ₹{realRateA.toLocaleString('en-IN')} / sq ft
                    {realRateA <= realRateB && <span className="ml-2 text-[10px] text-emerald-700">★ Lower</span>}
                  </td>
                  <td className={`py-3.5 px-4 font-mono font-bold ${
                    realRateB <= realRateA ? 'text-emerald-700 bg-emerald-50/60' : 'text-[#0C1017]'
                  }`}>
                    ₹{realRateB.toLocaleString('en-IN')} / sq ft
                    {realRateB <= realRateA && <span className="ml-2 text-[10px] text-emerald-700">★ Lower</span>}
                  </td>
                </tr>

                {/* Loading Factor */}
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#4A5565]">Loading Factor %</td>
                  <td className={`py-3.5 px-4 font-mono font-bold ${
                    loadA <= loadB ? 'text-emerald-700' : 'text-amber-800'
                  }`}>
                    {loadA}%
                  </td>
                  <td className={`py-3.5 px-4 font-mono font-bold ${
                    loadB <= loadA ? 'text-emerald-700' : 'text-amber-800'
                  }`}>
                    {loadB}%
                  </td>
                </tr>

                {/* RERA Carpet Area */}
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#4A5565]">RERA Carpet vs SBA</td>
                  <td className="py-3.5 px-4 text-[#0C1017]">
                    {projectA.carpet} sq ft <span className="text-[#717D8D]">({projectA.sba} SBA)</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#0C1017]">
                    {projectB.carpet} sq ft <span className="text-[#717D8D]">({projectB.sba} SBA)</span>
                  </td>
                </tr>

                {/* Land Share */}
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#4A5565]">Land Share per Unit</td>
                  <td className={`py-3.5 px-4 font-mono font-bold ${
                    projectA.landShare >= projectB.landShare ? 'text-emerald-700' : 'text-[#0C1017]'
                  }`}>
                    {projectA.landShare}
                  </td>
                  <td className={`py-3.5 px-4 font-mono font-bold ${
                    projectB.landShare >= projectA.landShare ? 'text-emerald-700' : 'text-[#0C1017]'
                  }`}>
                    {projectB.landShare}
                  </td>
                </tr>

                {/* Status & Progress */}
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#4A5565]">Construction Progress</td>
                  <td className="py-3.5 px-4 text-[#0C1017]">
                    {projectA.progress}% complete ({projectA.status} &bull; {projectA.possession})
                  </td>
                  <td className="py-3.5 px-4 text-[#0C1017]">
                    {projectB.progress}% complete ({projectB.status} &bull; {projectB.possession})
                  </td>
                </tr>

                {/* Overall Score */}
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#0C1017]">OTHO Index Score</td>
                  <td className="py-3.5 px-4 font-display text-base font-bold text-[#C5A25D]">
                    {projectA.score} / 10
                  </td>
                  <td className="py-3.5 px-4 font-display text-base font-bold text-[#C5A25D]">
                    {projectB.score} / 10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Qualitative Honest Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#DDD9D0]">
            {/* Project A Positives & Negatives */}
            <div className="p-5 bg-white border border-[#DDD9D0] space-y-4">
              <h4 className="font-display text-sm font-bold uppercase text-[#0C1017]">
                {projectA.name} Due Diligence
              </h4>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-800 block">
                  Honest Positives:
                </span>
                {projectA.positives.map((pos, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#4A5565]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pos}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-2 border-t border-[#DDD9D0]/60">
                <span className="text-[10px] font-bold tracking-wider uppercase text-amber-900 block">
                  Honest Negatives / Flags:
                </span>
                {projectA.negatives.map((neg, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#4A5565]">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>{neg}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  onClose();
                  onInquire(projectA.name);
                }}
                className="w-full mt-4 py-2.5 bg-[#0C1017] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A25D] transition-colors"
              >
                Inquire on {projectA.name}
              </button>
            </div>

            {/* Project B Positives & Negatives */}
            <div className="p-5 bg-white border border-[#DDD9D0] space-y-4">
              <h4 className="font-display text-sm font-bold uppercase text-[#0C1017]">
                {projectB.name} Due Diligence
              </h4>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-800 block">
                  Honest Positives:
                </span>
                {projectB.positives.map((pos, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#4A5565]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pos}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-2 border-t border-[#DDD9D0]/60">
                <span className="text-[10px] font-bold tracking-wider uppercase text-amber-900 block">
                  Honest Negatives / Flags:
                </span>
                {projectB.negatives.map((neg, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#4A5565]">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>{neg}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  onClose();
                  onInquire(projectB.name);
                }}
                className="w-full mt-4 py-2.5 bg-[#0C1017] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A25D] transition-colors"
              >
                Inquire on {projectB.name}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#DDD9D0] flex items-center justify-between text-xs text-[#717D8D]">
          <span>Data verified against official TG-RERA filings.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 border border-[#DDD9D0] text-[#0C1017] uppercase tracking-wider font-semibold hover:bg-[#FBF9F5]"
          >
            Close Comparator
          </button>
        </div>
      </div>
    </div>
  );
};
