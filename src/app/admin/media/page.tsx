'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Copy, Check, UploadCloud, Search, ExternalLink, Edit2, Trash2, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaAsset {
  id: string;
  name: string;
  path: string;
  category: string;
  size: string;
  altText?: string;
}

const DEFAULT_MEDIA: MediaAsset[] = [
  { id: 'm-1', name: 'otho-crest-logo.jpg', path: '/assets/otho-crest-logo.jpg', category: 'Branding', size: '253 KB', altText: 'OTHO Crest Monogram' },
  { id: 'm-2', name: 'hero-skyline.jpg', path: '/assets/img/hero-skyline.jpg', category: 'Photography', size: '350 KB', altText: 'Hyderabad skyline at dusk' },
  { id: 'm-3', name: 'aerial.jpg', path: '/assets/img/aerial.jpg', category: 'Photography', size: '251 KB', altText: 'Aerial view of Financial District' },
  { id: 'm-4', name: 'construction.jpg', path: '/assets/img/construction.jpg', category: 'Photography', size: '255 KB', altText: 'High-rise structural elevation' },
  { id: 'm-5', name: 'interior-living.jpg', path: '/assets/img/interior-living.jpg', category: 'Interiors', size: '177 KB', altText: 'Luxury penthouse living hall' },
  { id: 'm-6', name: 'lobby.jpg', path: '/assets/img/lobby.jpg', category: 'Interiors', size: '124 KB', altText: 'Triple-height grand entrance lobby' },
  { id: 'm-7', name: 'amenity-pool.jpg', path: '/assets/img/amenity-pool.jpg', category: 'Amenities', size: '192 KB', altText: 'Infinity pool overlooking lake' },
  { id: 'm-8', name: 'amenity-gym.jpg', path: '/assets/img/amenity-gym.jpg', category: 'Amenities', size: '123 KB', altText: 'State-of-the-art wellness club' },
  { id: 'm-9', name: 'balcony.jpg', path: '/assets/img/balcony.jpg', category: 'Interiors', size: '113 KB', altText: 'Panoramic private skydeck' },
  { id: 'm-10', name: 'show-kitchen.jpg', path: '/assets/img/show-kitchen.jpg', category: 'Interiors', size: '108 KB', altText: 'Bespoke European show kitchen' },
  { id: 'm-11', name: 'advisory.jpg', path: '/assets/img/advisory.jpg', category: 'Editorial', size: '99 KB', altText: 'Private advisory desk consultation' },
  { id: 'm-12', name: 'hyderabad.jpg', path: '/assets/img/hyderabad.jpg', category: 'Corridors', size: '143 KB', altText: 'Outer Ring Road interchange' },
  { id: 'm-13', name: 'podcast.jpg', path: '/assets/img/podcast.jpg', category: 'Media', size: '61 KB', altText: 'Market intelligence briefing' },
  { id: 'm-14', name: 'proj-1.jpg', path: '/assets/img/proj-1.jpg', category: 'Projects', size: '103 KB', altText: 'Rajapushpa Regalia elevation' },
  { id: 'm-15', name: 'proj-2.jpg', path: '/assets/img/proj-2.jpg', category: 'Projects', size: '139 KB', altText: 'Rajapushpa Aurelia tower' },
  { id: 'm-16', name: 'proj-3.jpg', path: '/assets/img/proj-3.jpg', category: 'Projects', size: '163 KB', altText: 'Rajapushpa Atria luxury facade' },
  { id: 'm-17', name: 'proj-4.jpg', path: '/assets/img/proj-4.jpg', category: 'Projects', size: '318 KB', altText: 'Candeur Skyline master towers' },
  { id: 'm-18', name: 'proj-5.jpg', path: '/assets/img/proj-5.jpg', category: 'Projects', size: '130 KB', altText: 'DSR The World estate view' },
];

export default function AdminMedia() {
  const [assets, setAssets] = useState<MediaAsset[]>(DEFAULT_MEDIA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<MediaAsset | null>(null);

  // Upload state
  const [uploadName, setUploadName] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Photography');
  const [uploadAltText, setUploadAltText] = useState('');
  const [uploadUrl, setUploadUrl] = useState('');
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [fileSizeText, setFileSizeText] = useState('Custom');

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('otho_admin_media');
    if (saved) {
      try {
        setAssets(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse media assets', e);
      }
    }
  }, []);

  const saveAssets = (updated: MediaAsset[]) => {
    setAssets(updated);
    localStorage.setItem('otho_admin_media', JSON.stringify(updated));
  };

  const handleCopy = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadName(file.name);
      setFileSizeText(`${(file.size / 1024).toFixed(0)} KB`);
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPreviewDataUrl(result);
        setUploadUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalPath = uploadUrl || previewDataUrl;
    if (!finalPath) {
      alert('Please select an image file or provide an image URL');
      return;
    }

    const newAsset: MediaAsset = {
      id: `m-${Date.now()}`,
      name: uploadName || 'uploaded-asset.jpg',
      path: finalPath,
      category: uploadCategory,
      size: fileSizeText,
      altText: uploadAltText || uploadName,
    };

    saveAssets([newAsset, ...assets]);
    setIsUploadModalOpen(false);
    setUploadName('');
    setUploadUrl('');
    setPreviewDataUrl(null);
  };

  const handleOpenEdit = (asset: MediaAsset) => {
    setEditingAsset(asset);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAsset) return;

    const updated = assets.map((a) => (a.id === editingAsset.id ? editingAsset : a));
    saveAssets(updated);
    setIsEditModalOpen(false);
    setEditingAsset(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this asset from the library?')) {
      const updated = assets.filter((a) => a.id !== id);
      saveAssets(updated);
    }
  };

  const categories = ['ALL', 'Branding', 'Photography', 'Interiors', 'Amenities', 'Editorial', 'Corridors', 'Projects', 'Media'];

  const filtered = assets.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.altText && m.altText.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCat = selectedCategory === 'ALL' || m.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Media Asset Library</h1>
          <p className="font-sans text-muted-foreground mt-1">
            Upload, modify metadata, categorize, and deploy high-resolution architectural photography ({assets.length} Assets).
          </p>
        </div>
        <button
          onClick={() => {
            setUploadName('');
            setUploadUrl('');
            setPreviewDataUrl(null);
            setIsUploadModalOpen(true);
          }}
          className="inline-flex items-center gap-2 bg-foreground text-background font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors font-semibold cursor-pointer"
        >
          <UploadCloud size={14} /> Upload Media
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        <div className="bg-card border border-border rounded-xl px-4 py-2.5 flex items-center gap-3 max-w-md flex-1">
          <Search size={16} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search media assets..."
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video w-full bg-muted overflow-hidden">
                {item.path.startsWith('data:') || item.path.startsWith('http') || item.path.startsWith('/assets/') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.path}
                    alt={item.altText || item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <ImageIcon size={28} />
                  </div>
                )}
                <span className="absolute top-2 left-2 font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-background/80 backdrop-blur-xs text-foreground font-semibold">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <p className="font-mono text-xs text-foreground font-medium truncate" title={item.name}>
                  {item.name}
                </p>
                <p className="font-sans text-[11px] text-muted-foreground truncate" title={item.altText}>
                  {item.altText || 'No alt text provided'}
                </p>
                <p className="font-mono text-[10px] text-accent/80">{item.size}</p>
              </div>
            </div>

            <div className="p-4 pt-0">
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-border/60">
                <button
                  onClick={() => handleCopy(item.path)}
                  className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
                >
                  {copiedPath === item.path ? (
                    <>
                      <Check size={12} className="text-green-500" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy Path
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    title="Edit Metadata"
                    className="p-1 rounded text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Edit2 size={13} />
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    title="Delete Asset"
                    className="p-1 rounded text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={13} />
                  </button>

                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                    title="View Full Resolution"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full bg-card border border-border rounded-xl p-12 text-center text-muted-foreground">
            No media assets match your search.
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-serif text-xl text-foreground">Upload Media Asset</h2>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-mono"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              {/* File upload drag/picker */}
              <div className="border-2 border-dashed border-border hover:border-accent/60 rounded-xl p-6 text-center cursor-pointer transition-colors bg-muted/40 relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <UploadCloud size={28} className="text-accent" />
                  <p className="font-sans text-sm font-medium text-foreground">
                    Click or drag image file here
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">PNG, JPG, WEBP, AVIF up to 10MB</p>
                </div>
              </div>

              {previewDataUrl && (
                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={previewDataUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Or External Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={uploadUrl}
                  onChange={(e) => {
                    setUploadUrl(e.target.value);
                    setPreviewDataUrl(e.target.value);
                  }}
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Asset Title / Filename *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kokapet Skydeck Dusk.jpg"
                  value={uploadName}
                  onChange={(e) => setUploadName(e.target.value)}
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Category
                  </label>
                  <select
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value)}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="Photography">Photography</option>
                    <option value="Interiors">Interiors</option>
                    <option value="Amenities">Amenities</option>
                    <option value="Branding">Branding</option>
                    <option value="Projects">Projects</option>
                    <option value="Corridors">Corridors</option>
                    <option value="Editorial">Editorial</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Alt Text (Accessibility & SEO)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Grand facade overlooking lake"
                    value={uploadAltText}
                    onChange={(e) => setUploadAltText(e.target.value)}
                    className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-border rounded text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="font-mono text-xs uppercase tracking-wider px-5 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground font-semibold rounded"
                >
                  Upload & Save Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Metadata Modal */}
      {isEditModalOpen && editingAsset && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-serif text-xl text-foreground">Edit Asset Details</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm font-mono"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Asset Name
                </label>
                <input
                  type="text"
                  required
                  value={editingAsset.name}
                  onChange={(e) => setEditingAsset({ ...editingAsset, name: e.target.value })}
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Category
                </label>
                <select
                  value={editingAsset.category}
                  onChange={(e) => setEditingAsset({ ...editingAsset, category: e.target.value })}
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-xs text-foreground focus:outline-none focus:border-accent"
                >
                  <option value="Photography">Photography</option>
                  <option value="Interiors">Interiors</option>
                  <option value="Amenities">Amenities</option>
                  <option value="Branding">Branding</option>
                  <option value="Projects">Projects</option>
                  <option value="Corridors">Corridors</option>
                  <option value="Editorial">Editorial</option>
                  <option value="Media">Media</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={editingAsset.altText || ''}
                  onChange={(e) => setEditingAsset({ ...editingAsset, altText: e.target.value })}
                  className="w-full bg-background border border-border rounded p-2.5 font-sans text-sm text-foreground focus:outline-none focus:border-accent"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-border rounded text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="font-mono text-xs uppercase tracking-wider px-5 py-2 bg-foreground text-background hover:bg-accent hover:text-accent-foreground font-semibold rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
