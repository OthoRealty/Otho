-- Core Content Tables for OTHO Realty

-- 1. Projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id SERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    developer TEXT NOT NULL,
    locality TEXT NOT NULL,
    bhk INTEGER NOT NULL,
    sba NUMERIC NOT NULL,
    carpet NUMERIC NOT NULL,
    rate NUMERIC NOT NULL,
    price_range_cr TEXT NOT NULL,
    luxury_tier TEXT NOT NULL,
    land_share NUMERIC NOT NULL,
    possession TEXT NOT NULL,
    status TEXT NOT NULL,
    publish_status TEXT NOT NULL DEFAULT 'published',
    progress INTEGER NOT NULL DEFAULT 0,
    score NUMERIC NOT NULL DEFAULT 0,
    amenities TEXT[] DEFAULT '{}',
    summary TEXT NOT NULL,
    positives TEXT[] DEFAULT '{}',
    negatives TEXT[] DEFAULT '{}',
    image TEXT NOT NULL,
    featured_order INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Localities / Growth Corridors table
CREATE TABLE IF NOT EXISTS public.localities (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    badge TEXT NOT NULL,
    subtext TEXT NOT NULL,
    description TEXT NOT NULL,
    dynamics TEXT[] DEFAULT '{}',
    key_drivers TEXT[] DEFAULT '{}',
    infra_status JSONB DEFAULT '[]'::jsonb,
    asset_classes TEXT[] DEFAULT '{}',
    map_coordinates JSONB DEFAULT '{"x": 0, "y": 0}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Services table
CREATE TABLE IF NOT EXISTS public.services (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    number TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    scope TEXT[] DEFAULT '{}',
    image TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Intelligence / Insights table
CREATE TABLE IF NOT EXISTS public.intelligence (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    read_time TEXT NOT NULL,
    summary TEXT NOT NULL,
    key_takeaways TEXT[] DEFAULT '{}',
    full_body TEXT[] DEFAULT '{}',
    author_role TEXT NOT NULL,
    publish_status TEXT NOT NULL DEFAULT 'published',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Opportunities table
CREATE TABLE IF NOT EXISTS public.opportunities (
    id TEXT PRIMARY KEY,
    project_name TEXT NOT NULL,
    is_placeholder BOOLEAN DEFAULT true,
    location TEXT NOT NULL,
    corridor TEXT NOT NULL,
    asset_type TEXT NOT NULL,
    status TEXT NOT NULL,
    description TEXT NOT NULL,
    highlights TEXT[] DEFAULT '{}',
    scale_metrics JSONB DEFAULT '[]'::jsonb,
    image TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
