-- Clean up duplicate home page records
-- This script will remove duplicate home page entries and keep only one

-- First, let's see what we have
SELECT id, page_slug, meta_title, created_at, updated_at 
FROM pages_content 
WHERE page_slug = '' OR page_slug = '/' OR page_slug IS NULL
ORDER BY created_at;

-- Delete the older record (assuming we want to keep the most recent one)
-- This will delete records with page_slug = '/' or NULL, keeping only the one with page_slug = ''
DELETE FROM pages_content 
WHERE page_slug = '/' OR page_slug IS NULL;

-- Verify we only have one home page record now
SELECT id, page_slug, meta_title, created_at, updated_at 
FROM pages_content 
WHERE page_slug = '' OR page_slug = '/' OR page_slug IS NULL;
