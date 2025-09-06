-- Create pages_content table for CMS functionality
CREATE TABLE IF NOT EXISTS pages_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug VARCHAR(255) UNIQUE NOT NULL,
  content JSONB NOT NULL,
  meta_title VARCHAR(255) NOT NULL,
  meta_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_pages_content_slug ON pages_content(page_slug);
CREATE INDEX IF NOT EXISTS idx_pages_content_updated_at ON pages_content(updated_at);

-- Insert default home page content
INSERT INTO pages_content (page_slug, content, meta_title, meta_description) 
VALUES (
  '',
  '{
    "hero": {
      "h1": "Dubai''s Premier Home Services Platform",
      "description": "Connect with verified home service providers across Dubai. Get instant quotes for AC repair, cleaning, plumbing, electrical work, pest control & handyman services. Available 24/7 in all Dubai areas."
    },
    "popularServices": {
      "h2": "Popular Services",
      "paragraph": "Choose from our most requested home services",
      "services": [
        {
          "id": "ac-repair",
          "name": "AC Repair & Cleaning",
          "description": "Professional AC services",
          "icon": "Wind"
        },
        {
          "id": "cleaning",
          "name": "Deep Cleaning",
          "description": "Comprehensive cleaning services",
          "icon": "Sparkles"
        },
        {
          "id": "plumbing",
          "name": "Plumbing",
          "description": "Expert plumbing solutions",
          "icon": "Wrench"
        },
        {
          "id": "electrical",
          "name": "Electrical",
          "description": "Licensed electrical work",
          "icon": "Zap"
        }
      ]
    },
    "howItWorks": {
      "h2": "How It Works",
      "paragraph": "Simple steps to get your home services",
      "steps": [
        {
          "h3": "1. Request Service",
          "paragraph": "Tell us what you need and when"
        },
        {
          "h3": "2. Get Matched",
          "paragraph": "We connect you with verified providers"
        },
        {
          "h3": "3. Compare Quotes",
          "paragraph": "Review and choose the best option"
        },
        {
          "h3": "4. Enjoy Service",
          "paragraph": "Relax while professionals handle it"
        }
      ]
    },
    "serviceAreas": {
      "h2": "Service Areas",
      "paragraph": "We serve all major areas across Dubai"
    },
    "faqs": {
      "h2": "Frequently Asked Questions",
      "paragraph": "Find answers to common questions",
      "items": [
        {
          "question": "How quickly can I get service?",
          "answer": "Most services are available same-day or within 24 hours."
        },
        {
          "question": "Are your providers verified?",
          "answer": "Yes, all providers are background checked and verified."
        }
      ]
    },
    "buttons": [
      {
        "text": "Book Now",
        "url": "/book"
      },
      {
        "text": "View Services",
        "url": "/services"
      },
      {
        "text": "Learn More",
        "url": "/how-it-works"
      }
    ]
  }',
  'HOMIZON - Dubai''s Premier Home Services Platform | AC Repair, Cleaning & More',
  'Connect with verified home service providers across Dubai. Get instant quotes for AC repair, cleaning, plumbing, electrical work, pest control & handyman services. Available 24/7 in all Dubai areas.'
) ON CONFLICT (page_slug) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE pages_content ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON pages_content
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users to manage content" ON pages_content
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policy to allow service role to manage content
CREATE POLICY "Allow service role to manage content" ON pages_content
  FOR ALL USING (auth.role() = 'service_role');
