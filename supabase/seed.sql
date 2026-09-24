-- Default Seed Data for OTHO Realty

-- 1. Departments
INSERT INTO public.departments (id, name, description) VALUES
(1, 'Management', 'Senior leadership & executive advisory principals'),
(2, 'Advisory & Research', 'Real estate intelligence, asset evaluation, and feasibility analysts'),
(3, 'Sales & Transactions', 'Client acquisition and transaction structuring'),
(4, 'Marketing & Content', 'Brand stewardship, digital intelligence, and publications'),
(5, 'CRM & Operations', 'Client relationship management and process execution')
ON CONFLICT (id) DO NOTHING;

-- 2. Roles
INSERT INTO public.roles (id, name, description) VALUES
(1, 'Super Admin', 'Full administrative authority across all platform systems'),
(2, 'Advisory Principal', 'Editorial, project review, and intelligence publication authority'),
(3, 'CRM Specialist', 'Lead management, client intake, and advisory communications'),
(4, 'Content Editor', 'Research insights, SEO, and media asset management')
ON CONFLICT (id) DO NOTHING;

-- 3. Core Permissions
INSERT INTO public.permissions (code, description, category) VALUES
('view_dashboard', 'View executive analytics dashboard', 'Analytics'),
('view_leads', 'View inbound client advisory inquiries', 'CRM'),
('manage_leads', 'Update status, assign, and add notes to leads', 'CRM'),
('manage_projects', 'Create, update, or remove curated project reviews', 'Content'),
('manage_intelligence', 'Draft and publish market intelligence articles', 'Content'),
('manage_media', 'Upload and organize media assets', 'Media'),
('manage_settings', 'Modify site settings and SEO configurations', 'Settings'),
('manage_users', 'Manage user accounts, roles, and permissions', 'Admin')
ON CONFLICT (code) DO NOTHING;

-- 4. Initial Site Settings
INSERT INTO public.site_settings (key, value) VALUES
('general', '{
    "siteName": "OTHO Realty",
    "tagline": "Real Estate. With a clearer perspective.",
    "phone": "+91 99490 41919",
    "email": "contact@otho.co.in",
    "address": "Otho Advisory & Consultancy, E5, Tapasya Apartments, behind ICICI Bank, opp. Rockwell International School, Kokapet, Hyderabad, Telangana 500075",
    "mapsUrl": "https://www.google.com/maps/place/Otho+Realty+Pvt+Ltd/data=!4m2!3m1!1s0x0:0x2bc83106c33c7eb9",
    "youtubeUrl": "https://www.youtube.com/@OthoRealty",
    "whatsappUrl": "https://wa.me/919949041919"
}'::jsonb)
ON CONFLICT (key) DO NOTHING;
