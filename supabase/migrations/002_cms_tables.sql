-- CMS Tables for OTHO Realty

-- 1. Site Settings
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Page Content Blocks
CREATE TABLE IF NOT EXISTS public.page_content (
    id SERIAL PRIMARY KEY,
    page_slug TEXT NOT NULL,
    section_key TEXT NOT NULL,
    content JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(page_slug, section_key)
);

-- 3. Navigation
CREATE TABLE IF NOT EXISTS public.navigation (
    id SERIAL PRIMARY KEY,
    location TEXT NOT NULL, -- 'header' or 'footer'
    label TEXT NOT NULL,
    href TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_visible BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Media Library
CREATE TABLE IF NOT EXISTS public.media_library (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    storage_path TEXT NOT NULL,
    public_url TEXT NOT NULL,
    mime_type TEXT,
    size_bytes BIGINT,
    alt_text TEXT,
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SEO Settings
CREATE TABLE IF NOT EXISTS public.seo_settings (
    route TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    meta_description TEXT NOT NULL,
    og_image_url TEXT,
    canonical_url TEXT,
    schema_markup JSONB,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
