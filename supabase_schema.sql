-- ============================================================
-- ARUN PANDIAN STUDIO - SUPABASE REALTIME CMS SQL SCHEMA
-- Project: https://zyxwdvhbcoovfrtkczlc.supabase.co
-- ============================================================

-- 1. Create the portfolio_cms table to store all live website state
CREATE TABLE IF NOT EXISTS public.portfolio_cms (
    id TEXT PRIMARY KEY DEFAULT 'developer_portfolio',
    content JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.portfolio_cms ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies for Public Read and Public/Authenticated Write
DROP POLICY IF EXISTS "Allow Public Read CMS" ON public.portfolio_cms;
CREATE POLICY "Allow Public Read CMS"
    ON public.portfolio_cms
    FOR SELECT
    USING (true);

DROP POLICY IF EXISTS "Allow Public/Admin Upsert CMS" ON public.portfolio_cms;
CREATE POLICY "Allow Public/Admin Upsert CMS"
    ON public.portfolio_cms
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- 4. Enable Supabase Realtime for instant live updates across all devices
ALTER PUBLICATION supabase_realtime ADD TABLE public.portfolio_cms;

-- 5. Create Storage Bucket for Portfolio Media (Images, Videos, PDFs)
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-media', 'portfolio-media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 6. Storage Security Policies for Media Uploads
DROP POLICY IF EXISTS "Public Access Media" ON storage.objects;
CREATE POLICY "Public Access Media"
    ON storage.objects
    FOR SELECT
    USING (bucket_id = 'portfolio-media');

DROP POLICY IF EXISTS "Allow Media Uploads" ON storage.objects;
CREATE POLICY "Allow Media Uploads"
    ON storage.objects
    FOR INSERT
    WITH CHECK (bucket_id = 'portfolio-media');

DROP POLICY IF EXISTS "Allow Media Updates" ON storage.objects;
CREATE POLICY "Allow Media Updates"
    ON storage.objects
    FOR UPDATE
    USING (bucket_id = 'portfolio-media');

DROP POLICY IF EXISTS "Allow Media Delete" ON storage.objects;
CREATE POLICY "Allow Media Delete"
    ON storage.objects
    FOR DELETE
    USING (bucket_id = 'portfolio-media');
