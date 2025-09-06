# HOMIZON CMS Editor Guide

## Overview

The HOMIZON CMS Editor is a comprehensive content management system that allows administrators to edit website content dynamically without requiring code changes. The system is built with Next.js, TypeScript, and Supabase for data persistence.

## Features

### 🎯 Core Functionality
- **Dynamic Content Management**: Edit all website content through a user-friendly interface
- **Real-time Updates**: Changes are immediately reflected on the live website
- **Structured Content**: Organized content sections for easy management
- **SEO Optimization**: Built-in meta title and description editing
- **Responsive Design**: Works seamlessly on all devices

### 📝 Content Sections

#### Home Page Editor
The CMS supports editing all major sections of the home page:

1. **Hero Section**
   - H1 title
   - Hero description paragraph

2. **Popular Services Section**
   - Section title (H2)
   - Section description
   - Dynamic service boxes with:
     - Service name
     - Service description
     - Icon selection
     - Add/remove functionality

3. **How It Works Section**
   - Section title (H2)
   - Section description
   - 4 customizable steps with:
     - Step title (H3)
     - Step description
     - Automatic numbering

4. **Service Areas Section**
   - Section title (H2)
   - Section description

5. **FAQs Section**
   - Section title (H2)
   - Section description
   - Dynamic FAQ items with:
     - Question
     - Answer
     - Add/remove functionality

6. **Buttons Section**
   - Dynamic button management
   - Button text
   - Button URL
   - Add/remove functionality

7. **Meta SEO Section**
   - Page slug
   - Meta title
   - Meta description

## Database Schema

### pages_content Table

```sql
CREATE TABLE pages_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug VARCHAR(255) UNIQUE NOT NULL,
  content JSONB NOT NULL,
  meta_title VARCHAR(255) NOT NULL,
  meta_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## API Endpoints

### GET /api/admin/pages-content
- **Purpose**: Retrieve page content
- **Parameters**: 
  - `page_slug` (optional): Get specific page content
- **Response**: Array of page content objects

### POST /api/admin/pages-content
- **Purpose**: Create new page content
- **Body**: PageContentInsert object
- **Response**: Created page content object

### PUT /api/admin/pages-content
- **Purpose**: Update existing page content
- **Body**: PageContentInsert object with page_slug
- **Response**: Updated page content object

## Usage Guide

### Accessing the CMS Editor

1. Navigate to `/admin/pages-editor` in your browser
2. You'll see a list of all available pages
3. Click "Edit" on any page to open the content editor

### Editing Content

1. **Select a Section**: Use the tabs at the top to navigate between different content sections
2. **Edit Fields**: Modify text fields, add/remove items as needed
3. **Save Changes**: Click "Save Changes" to persist your edits
4. **View Live Site**: Click "View" to see changes on the live website

### Adding New Services

1. Go to the "Services" tab
2. Click "Add Service" button
3. Fill in the service details:
   - Service name
   - Service description
   - Icon (select from available options)
4. Save your changes

### Managing FAQs

1. Go to the "FAQs" tab
2. Click "Add FAQ" button
3. Enter question and answer
4. Use the remove button (X) to delete unwanted FAQs

### SEO Optimization

1. Go to the "Meta SEO" tab
2. Update:
   - Page slug (URL path)
   - Meta title (appears in search results)
   - Meta description (appears in search results)
3. Save changes

## Technical Implementation

### File Structure

```
app/
├── admin/
│   └── pages-editor/
│       └── page.tsx          # Main CMS editor interface
├── api/
│   └── admin/
│       └── pages-content/
│           └── route.ts      # API endpoints for content management
components/
├── dynamic-home-page-content.tsx  # Dynamic home page component
└── home-page-content.tsx          # Original static home page
lib/
└── supabase.ts              # Database functions
scripts/
└── setup-pages-content-table.sql  # Database setup script
```

### Key Components

#### PagesEditor Component
- Main CMS interface
- Tabbed content editing
- Real-time validation
- Save/cancel functionality

#### DynamicHomePageContent Component
- Fetches content from database
- Renders content dynamically
- Fallback to default content
- Loading states

#### Supabase Functions
- `getPageContentFromSupabase()`: Fetch page content
- `savePageContentToSupabase()`: Create new content
- `updatePageContentInSupabase()`: Update existing content
- `listAllPagesContentFromSupabase()`: List all pages

## Setup Instructions

### 1. Database Setup

Run the SQL script to create the pages_content table:

```sql
-- Execute the contents of scripts/setup-pages-content-table.sql
-- in your Supabase SQL editor
```

### 2. Environment Variables

Ensure these environment variables are set:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Initial Content

The system will automatically create default home page content if none exists. You can customize this through the CMS editor.

## Security

### Row Level Security (RLS)
- Public read access for content display
- Authenticated user access for content management
- Service role access for admin operations

### Validation
- Required field validation
- Content type validation
- SQL injection protection through parameterized queries

## Future Enhancements

### Planned Features
- **Multi-page Support**: Add support for editing other pages (About, Contact, etc.)
- **Content Versioning**: Track content changes over time
- **Rich Text Editor**: WYSIWYG editing for complex content
- **Media Management**: Upload and manage images/videos
- **Content Scheduling**: Schedule content updates
- **User Permissions**: Role-based access control
- **Content Templates**: Pre-built content templates
- **Bulk Operations**: Mass content updates

### Extensibility
The system is designed to be easily extensible:

1. **Add New Sections**: Extend the content interface with new tabs
2. **Add New Pages**: Create new page types with custom content structures
3. **Custom Fields**: Add specialized field types for different content needs
4. **Integration**: Connect with external services for content delivery

## Troubleshooting

### Common Issues

1. **Content Not Loading**
   - Check Supabase connection
   - Verify environment variables
   - Check browser console for errors

2. **Save Failures**
   - Ensure all required fields are filled
   - Check network connection
   - Verify Supabase permissions

3. **Content Not Updating on Frontend**
   - Clear browser cache
   - Check if content is being fetched from database
   - Verify API endpoint responses

### Debug Mode

Enable debug logging by adding `console.log` statements in the API routes and components to track data flow.

## Support

For technical support or feature requests, contact the development team or create an issue in the project repository.

---

**Built with ❤️ for HOMIZON's content management needs**
