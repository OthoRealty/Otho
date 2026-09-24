'use client';

import { useState, useEffect } from 'react';
import { INSIGHTS as INITIAL_INSIGHTS } from '@/data/insights';
import { InsightArticle } from '@/types';
import { Search, Plus, Calendar, Clock, Tag, Edit2, Trash2, ExternalLink, X, CheckCircle2, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdminIntelligence() {
  const [articles, setArticles] = useState<InsightArticle[]>(INITIAL_INSIGHTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<InsightArticle | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'MARKET' as InsightArticle['category'],
    readTime: '6 MIN READ',
    authorRole: 'Head of Advisory & Research',
    summary: '',
    keyTakeawaysText: '',
    fullBodyText: '',
    publishStatus: 'published' as 'published' | 'draft',
  });

  // Load persisted articles
  useEffect(() => {
    const saved = localStorage.getItem('otho_admin_articles');
    if (saved) {
      try {
        setArticles(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved articles', e);
      }
    }
  }, []);

  const saveArticles = (updated: InsightArticle[]) => {
    setArticles(updated);
    localStorage.setItem('otho_admin_articles', JSON.stringify(updated));
  };

  const handleOpenAdd = () => {
    setEditingArticle(null);
    setFormData({
      title: '',
      category: 'MARKET',
      readTime: '5 MIN READ',
      authorRole: 'Senior Research Principal',
      summary: '',
      keyTakeawaysText: '',
      fullBodyText: '',
      publishStatus: 'published',
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (article: InsightArticle) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      category: article.category,
      readTime: article.readTime,
      authorRole: article.authorRole,
      summary: article.summary,
      keyTakeawaysText: (article.keyTakeaways || []).join('\n'),
      fullBodyText: (article.fullBody || []).join('\n\n'),
      publishStatus: article.publishStatus || 'published',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this publication?')) {
      const updated = articles.filter((a) => a.id !== id);
      saveArticles(updated);
    }
  };

  const handleToggleStatus = (id: string) => {
    const updated = articles.map((a) =>
      a.id === id
        ? {
            ...a,
            publishStatus: (a.publishStatus === 'published' ? 'draft' : 'published') as 'published' | 'draft',
          }
        : a
    );
    saveArticles(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.summary) return;

    const takeaways = formData.keyTakeawaysText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const bodyParagraphs = formData.fullBodyText
      .split('\n\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingArticle) {
      const updated = articles.map((a) =>
        a.id === editingArticle.id
          ? {
              ...a,
              title: formData.title,
              category: formData.category,
              readTime: formData.readTime,
              authorRole: formData.authorRole,
              summary: formData.summary,
              keyTakeaways: takeaways.length > 0 ? takeaways : a.keyTakeaways,
              fullBody: bodyParagraphs.length > 0 ? bodyParagraphs : a.fullBody,
              publishStatus: formData.publishStatus,
            }
          : a
      );
      saveArticles(updated);
    } else {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

      const newArticle: InsightArticle = {
        id: `art-${Date.now()}`,
        slug: slug || `article-${Date.now()}`,
        title: formData.title,
        category: formData.category,
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        readTime: formData.readTime,
        authorRole: formData.authorRole,
        summary: formData.summary,
        keyTakeaways: takeaways.length > 0 ? takeaways : ['Institutional research milestone', 'Fiduciary market analysis'],
        fullBody: bodyParagraphs.length > 0 ? bodyParagraphs : [formData.summary],
        publishStatus: formData.publishStatus,
      };

      saveArticles([newArticle, ...articles]);
    }

    setIsModalOpen(false);
  };

  const categories = ['ALL', 'MARKET', 'INVESTMENT', 'DEVELOPMENT', 'HYDERABAD', 'ADVISORY'];

  const filtered = articles.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Market Intelligence</h1>
          <p className="font-sans text-muted-foreground mt-1">
            Publish research analyses, market cycle commentaries, and institutional whitepapers ({articles.length} Total).
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 bg-foreground text-background font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
        >
          <Plus size={14} /> Create Article
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="bg-card border border-border rounded-xl px-4 py-2.5 flex items-center gap-3 flex-1 max-w-md">
          <Search size={16} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none font-sans text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-3 py-1.5 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-colors',
                selectedCategory === cat
                  ? 'bg-accent text-accent-foreground font-semibold'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered.map((article) => (
          <div
            key={article.id}
            className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-accent font-semibold px-2 py-0.5 rounded bg-accent/10">
                  <Tag size={10} /> {article.category}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} /> {article.date}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {article.readTime}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  By {article.authorRole}
                </span>
              </div>
              <h2 className="font-serif text-lg text-foreground font-medium">{article.title}</h2>
              <p className="font-sans text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
            </div>

            <div className="flex items-center gap-3 self-end md:self-center shrink-0">
              <button
                onClick={() => handleToggleStatus(article.id)}
                className={cn(
                  'font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-semibold border transition-colors cursor-pointer',
                  article.publishStatus === 'published'
                    ? 'bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20'
                    : 'bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20'
                )}
                title="Click to toggle status"
              >
                {article.publishStatus === 'published' ? 'Published' : 'Draft'}
              </button>

              <Link
                href={`/intelligence/${article.slug}`}
                target="_blank"
                title="View on site"
                className="p-2 rounded border border-border hover:border-accent text-foreground transition-colors inline-flex items-center justify-center"
              >
                <ExternalLink size={14} />
              </Link>

              <button
                onClick={() => handleOpenEdit(article)}
                title="Edit Article"
                className="p-2 rounded border border-border hover:border-accent text-muted-foreground hover:text-accent transition-colors inline-flex items-center justify-center"
              >
                <Edit2 size={14} />
              </button>

              <button
                onClick={() => handleDelete(article.id)}
                title="Delete Article"
                className="p-2 rounded border border-border hover:border-red-500 text-muted-foreground hover:text-red-500 transition-colors inline-flex items-center justify-center"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="bg-card border border-border rounded-xl p-12 text-center text-muted-foreground">
            No articles match your search criteria.
          </div>
        )}
      </div>

      {/* Add / Edit Article Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-serif text-xl text-foreground">
                {editingArticle ? 'Edit Intelligence Publication' : 'Create Intelligence Publication'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-mono"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Grade-A Absorption and FSI Dynamics in Kokapet"
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as InsightArticle['category'] })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="MARKET">MARKET</option>
                    <option value="INVESTMENT">INVESTMENT</option>
                    <option value="DEVELOPMENT">DEVELOPMENT</option>
                    <option value="HYDERABAD">HYDERABAD</option>
                    <option value="ADVISORY">ADVISORY</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Read Time
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="e.g. 5 MIN READ"
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Status
                  </label>
                  <select
                    value={formData.publishStatus}
                    onChange={(e) => setFormData({ ...formData, publishStatus: e.target.value as 'published' | 'draft' })}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Author Role
                </label>
                <input
                  type="text"
                  required
                  value={formData.authorRole}
                  onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                  placeholder="e.g. Senior Research Principal"
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Executive Summary *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Brief high-level summary of the research article..."
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Key Takeaways (one per line)
                </label>
                <textarea
                  rows={3}
                  value={formData.keyTakeawaysText}
                  onChange={(e) => setFormData({ ...formData, keyTakeawaysText: e.target.value })}
                  placeholder="Takeaway 1&#10;Takeaway 2&#10;Takeaway 3"
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent resize-none font-mono"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Full Article Body (separate paragraphs with blank line)
                </label>
                <textarea
                  rows={6}
                  value={formData.fullBodyText}
                  onChange={(e) => setFormData({ ...formData, fullBodyText: e.target.value })}
                  placeholder="First paragraph of in-depth editorial analysis...&#10;&#10;Second paragraph covering infrastructure and capitalization..."
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
                  {editingArticle ? 'Save Modifications' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
