-- Leads & CRM Tables for OTHO Realty

-- 1. Leads
CREATE TABLE IF NOT EXISTS public.leads (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    objective TEXT,
    location TEXT,
    budget_range TEXT,
    message TEXT,
    source TEXT DEFAULT 'web_portal',
    status TEXT NOT NULL DEFAULT 'NEW', -- 'NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'CLOSED_WON', 'CLOSED_LOST'
    assigned_to UUID REFERENCES public.profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Lead Notes
CREATE TABLE IF NOT EXISTS public.lead_notes (
    id SERIAL PRIMARY KEY,
    lead_id INTEGER REFERENCES public.leads(id) ON DELETE CASCADE,
    author_id UUID REFERENCES public.profiles(id),
    note TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Lead Status History
CREATE TABLE IF NOT EXISTS public.lead_status_history (
    id SERIAL PRIMARY KEY,
    lead_id INTEGER REFERENCES public.leads(id) ON DELETE CASCADE,
    changed_by UUID REFERENCES public.profiles(id),
    old_status TEXT,
    new_status TEXT NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
