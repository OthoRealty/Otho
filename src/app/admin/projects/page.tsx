'use client';

import { useState, useEffect } from 'react';
import { PROJECTS as INITIAL_PROJECTS } from '@/data/projects';
import { ProjectReview } from '@/types';
import { Search, ArrowUpDown, Plus, Edit2, Trash2, ExternalLink, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type SortConfig = {
  key: keyof ProjectReview | 'loading';
  direction: 'asc' | 'desc';
} | null;

export default function ProjectsManager() {
  const [projects, setProjects] = useState<ProjectReview[]>(INITIAL_PROJECTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectReview | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    developer: '',
    locality: 'Kokapet',
    bhk: 4,
    sba: 3500,
    carpet: 2450,
    rate: 11000,
    priceRangeCr: '₹3.85 Cr – ₹4.50 Cr',
    luxuryTier: 'Ultra-Luxury High-Rise',
    landShare: 52,
    possession: 'Dec 2027',
    status: 'Under Construction',
    score: 8.5,
    summary: '',
    image: '/assets/img/proj-1.jpg',
  });

  // Load persisted projects
  useEffect(() => {
    const saved = localStorage.getItem('otho_admin_projects');
    if (saved) {
      try {
        setProjects(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved projects', e);
      }
    }
  }, []);

  const saveProjects = (updated: ProjectReview[]) => {
    setProjects(updated);
    localStorage.setItem('otho_admin_projects', JSON.stringify(updated));
  };

  const handleOpenAdd = () => {
    setEditingProject(null);
    setFormData({
      name: '',
      developer: '',
      locality: 'Kokapet',
      bhk: 4,
      sba: 3500,
      carpet: 2450,
      rate: 11000,
      priceRangeCr: '₹3.85 Cr – ₹4.50 Cr',
      luxuryTier: 'Ultra-Luxury High-Rise',
      landShare: 52,
      possession: 'Dec 2027',
      status: 'Under Construction',
      score: 8.5,
      summary: '',
      image: '/assets/img/proj-1.jpg',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project: ProjectReview) => {
    setEditingProject(project);
    setFormData({
      name: project.name,
      developer: project.developer,
      locality: project.locality,
      bhk: project.bhk,
      sba: project.sba,
      carpet: project.carpet,
      rate: project.rate,
      priceRangeCr: project.priceRangeCr,
      luxuryTier: project.luxuryTier,
      landShare: project.landShare,
      possession: project.possession,
      status: project.status,
      score: project.score,
      summary: project.summary,
      image: project.image,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to remove this project?')) {
      const updated = projects.filter((p) => p.id !== id);
      saveProjects(updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.developer) return;

    if (editingProject) {
      const updated = projects.map((p) =>
        p.id === editingProject.id
          ? {
              ...p,
              ...formData,
              bhk: Number(formData.bhk),
              sba: Number(formData.sba),
              carpet: Number(formData.carpet),
              rate: Number(formData.rate),
              landShare: Number(formData.landShare),
              score: Number(formData.score),
            }
          : p
      );
      saveProjects(updated);
    } else {
      const slug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

      const newProject: ProjectReview = {
        id: Date.now(),
        slug: slug || `project-${Date.now()}`,
        publishStatus: 'published',
        name: formData.name,
        developer: formData.developer,
        locality: formData.locality,
        bhk: Number(formData.bhk),
        sba: Number(formData.sba),
        carpet: Number(formData.carpet),
        rate: Number(formData.rate),
        priceRangeCr: formData.priceRangeCr,
        luxuryTier: formData.luxuryTier,
        landShare: Number(formData.landShare),
        possession: formData.possession,
        status: formData.status,
        progress: 40,
        score: Number(formData.score),
        amenities: ['Clubhouse', 'Olympic Pool', 'Private Theater', 'Spa', 'Sports Arena'],
        summary: formData.summary || `${formData.name} by ${formData.developer} located in ${formData.locality}.`,
        positives: ['Prime micro-market positioning', 'Spacious floor layout', 'Institutional developer covenant'],
        negatives: ['Density of surrounding developments under construction', 'Traffic congestion during peak office hours'],
        image: formData.image || '/assets/img/proj-1.jpg',
      };
      saveProjects([newProject, ...projects]);
    }

    setIsModalOpen(false);
  };

  let filteredProjects = [...projects];

  if (searchTerm) {
    const lower = searchTerm.toLowerCase();
    filteredProjects = filteredProjects.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.developer.toLowerCase().includes(lower) ||
        p.locality.toLowerCase().includes(lower)
    );
  }

  if (sortConfig) {
    filteredProjects.sort((a, b) => {
      let aVal: number | string = 0;
      let bVal: number | string = 0;

      if (sortConfig.key === 'loading') {
        aVal = Math.round((1 - a.carpet / a.sba) * 100);
        bVal = Math.round((1 - b.carpet / b.sba) * 100);
      } else {
        aVal = a[sortConfig.key] as number | string;
        bVal = b[sortConfig.key] as number | string;
      }

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const handleSort = (key: keyof ProjectReview | 'loading') => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="space-y-6 max-w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Projects Directory</h1>
          <p className="font-sans text-muted-foreground mt-1">
            Manage residential project dossiers, RERA specifications, and loading factor metrics ({projects.length} Total).
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 bg-foreground text-background font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
        >
          <Plus size={14} /> Add Project
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 flex items-center space-x-3">
        <Search className="text-muted-foreground h-5 w-5" />
        <input
          type="text"
          placeholder="Search by project name, developer, or locality..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent border-none outline-none font-sans text-sm w-full text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground w-12">#</th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('name')}
              >
                Name
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('developer')}
              >
                Developer
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('locality')}
              >
                Locality
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('bhk')}
              >
                BHK
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('sba')}
              >
                SBA (Sq Ft)
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('carpet')}
              >
                Carpet (Sq Ft)
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('loading')}
              >
                Loading %
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('rate')}
              >
                Rate / Sq Ft
              </th>
              <th
                className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => handleSort('score')}
              >
                Score
              </th>
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, i) => {
              const loadingFactor = Math.round((1 - project.carpet / project.sba) * 100);
              return (
                <tr key={project.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-mono text-xs text-muted-foreground">{i + 1}</td>
                  <td className="p-4 font-sans text-sm text-foreground font-medium">{project.name}</td>
                  <td className="p-4 font-sans text-sm text-muted-foreground">{project.developer}</td>
                  <td className="p-4 font-sans text-sm text-muted-foreground">{project.locality}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{project.bhk} BHK</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{project.sba?.toLocaleString('en-IN')}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{project.carpet?.toLocaleString('en-IN')}</td>
                  <td className="p-4">
                    <span
                      className={cn(
                        'font-mono text-xs font-semibold px-2 py-0.5 rounded',
                        loadingFactor < 25
                          ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                          : loadingFactor <= 30
                          ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                          : 'bg-red-500/10 text-red-500 border border-red-500/20'
                      )}
                    >
                      {loadingFactor}%
                    </span>
                  </td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">
                    ₹{project.rate?.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-accent/15 text-accent font-mono text-xs font-bold border border-accent/30">
                      {project.score}/10
                    </span>
                  </td>
                  <td className="p-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {project.status}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/curation/${project.slug}`}
                        target="_blank"
                        title="View Public Dossier"
                        className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={14} />
                      </Link>
                      <button
                        onClick={() => handleOpenEdit(project)}
                        title="Edit Project"
                        className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        title="Delete Project"
                        className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {filteredProjects.length === 0 && (
              <tr>
                <td colSpan={12} className="p-8 text-center text-muted-foreground font-sans text-sm">
                  No projects match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-serif text-xl text-foreground">
                {editingProject ? `Edit ${editingProject.name}` : 'Add New Project Dossier'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-mono"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajapushpa Aurelia"
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Developer *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.developer}
                    onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                    placeholder="e.g. Rajapushpa Properties"
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Locality
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    BHK Config
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    required
                    value={formData.bhk}
                    onChange={(e) => setFormData({ ...formData, bhk: Number(e.target.value) })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Otho Score (0-10)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    required
                    value={formData.score}
                    onChange={(e) => setFormData({ ...formData, score: Number(e.target.value) })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    SBA (Sq Ft)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.sba}
                    onChange={(e) => setFormData({ ...formData, sba: Number(e.target.value) })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Carpet (Sq Ft)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.carpet}
                    onChange={(e) => setFormData({ ...formData, carpet: Number(e.target.value) })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Quoted Rate (₹/Sq Ft)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.rate}
                    onChange={(e) => setFormData({ ...formData, rate: Number(e.target.value) })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="p-3 bg-muted rounded border border-border/80 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Calculated Loading Factor:</span>
                <span className="text-accent font-bold text-sm">
                  {formData.sba > 0 ? Math.round((1 - formData.carpet / formData.sba) * 100) : 0}%
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Price Range
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.priceRangeCr}
                    onChange={(e) => setFormData({ ...formData, priceRangeCr: e.target.value })}
                    placeholder="₹3.20 Cr – ₹4.80 Cr"
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Possession
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.possession}
                    onChange={(e) => setFormData({ ...formData, possession: e.target.value })}
                    placeholder="e.g. Dec 2027"
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="Under Construction">Under Construction</option>
                    <option value="Ready to move">Ready to move</option>
                    <option value="Pre-Launch / Foundation">Pre-Launch / Foundation</option>
                    <option value="Mid-Stage Elevation">Mid-Stage Elevation</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Image Asset Path / URL
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/assets/img/proj-1.jpg"
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Executive Dossier Summary
                </label>
                <textarea
                  rows={3}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Provide analytical summary of project architecture, density, and specifications..."
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-border rounded text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="font-mono text-xs uppercase tracking-wider px-5 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground font-semibold rounded"
                >
                  {editingProject ? 'Save Modifications' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
