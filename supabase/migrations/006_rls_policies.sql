-- Row Level Security (RLS) Policies for OTHO Realty

-- Enable RLS on all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.localities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.intelligence ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.navigation ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- 1. Public Read Policies for published content
CREATE POLICY "Public can view published projects"
    ON public.projects FOR SELECT
    USING (publish_status = 'published');

CREATE POLICY "Public can view localities"
    ON public.localities FOR SELECT
    TO public USING (true);

CREATE POLICY "Public can view services"
    ON public.services FOR SELECT
    TO public USING (true);

CREATE POLICY "Public can view published intelligence"
    ON public.intelligence FOR SELECT
    USING (publish_status = 'published');

CREATE POLICY "Public can view opportunities"
    ON public.opportunities FOR SELECT
    TO public USING (true);

CREATE POLICY "Public can view navigation"
    ON public.navigation FOR SELECT
    USING (is_visible = true);

CREATE POLICY "Public can view site settings"
    ON public.site_settings FOR SELECT
    TO public USING (true);

CREATE POLICY "Public can view seo settings"
    ON public.seo_settings FOR SELECT
    TO public USING (true);

CREATE POLICY "Public can view page content"
    ON public.page_content FOR SELECT
    TO public USING (true);

-- 2. Public Insert for leads and analytics
CREATE POLICY "Public can submit leads"
    ON public.leads FOR INSERT
    TO public WITH CHECK (true);

CREATE POLICY "Public can log page views"
    ON public.page_views FOR INSERT
    TO public WITH CHECK (true);

CREATE POLICY "Public can log events"
    ON public.events FOR INSERT
    TO public WITH CHECK (true);

-- 3. Authenticated Staff Full Access
CREATE POLICY "Staff can manage projects"
    ON public.projects FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage localities"
    ON public.localities FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage services"
    ON public.services FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage intelligence"
    ON public.intelligence FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage opportunities"
    ON public.opportunities FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage leads"
    ON public.leads FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage lead notes"
    ON public.lead_notes FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage lead history"
    ON public.lead_status_history FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage media"
    ON public.media_library FOR ALL
    TO authenticated USING (true);

CREATE POLICY "Staff can manage profiles"
    ON public.profiles FOR ALL
    TO authenticated USING (true);
