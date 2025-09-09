- 2025-09-09: Service-area routing refactor and editor integration
  - Switched URL pattern from `/{service}/{area}` to `/areas/{area}/{service}`.
  - Added server route `app/areas/[area]/[service]/page.tsx` that fetches service, area and real providers from Supabase (filtered by both area and service).
  - Created client renderer `app/areas/[area]/[service]/service-client.tsx` to mirror the previous UI (hero, stats, quick-booking light card with dark text, providers grid).
  - Removed legacy routes and components:
    - Deleted `app/[service]/[area]/page.tsx` and the old `service-area-page-client.tsx`.
    - Deleted `app/areas/[area]/[subarea]/page.tsx` that conflicted with the new route and caused `use()` runtime errors.
  - Updated links and CMS lookups to the new slug.
  - Pages Editor:
    - Added virtual entries for service-area pages under `areas/{area}/{service}` and an editor type "serviceAreaDetail" (Hero, About, Providers, Meta).
    - Hid legacy editor entries with slug pattern `/{service}/{area}`.
  - Fixed quick-booking card readability by using dark text on the light gradient card.
## Homizon Project – Process Log

This document tracks all changes, fixes, and deployment-related actions performed on the project. I will continue appending to this file with each change going forward.

### 2025-09-04

- Repository setup and initial sync
  - Initialized git repository on branch `main`.
  - Configured remote: `origin` -> `https://github.com/syed-c/homizon.git`.
  - Staged all files and created initial commit.
  - Pushed to `origin/main`.

- Vercel build fix: RSC (`"use client"`) vs metadata conflicts
  - Removed `"use client"` from pages exporting `metadata` as required by Next.js App Router.
  - Files adjusted:
    - `app/about/page.tsx`: removed `"use client"`; server component now exports `metadata`.
    - `app/contact/page.tsx`: converted to server component (kept only `metadata` + `ContactPageContent`).
    - `app/services/page.tsx`: converted to server component (kept only `metadata` + `ServicesPageContent`).

- Runtime safety: guard `toLowerCase()` calls
  - Prevented prerender crashes from `undefined.toLowerCase()`.
  - Files adjusted:
    - `app/admin/providers/page.tsx`: filter/search logic now null-safe for name/company/email.
    - `app/sitemap/page.tsx`: search/filter logic now null-safe for service/area/subarea names.

- Admin Providers page data safety
  - Removed unsafe `sampleProviders[1]`/`[2]` references to avoid undefined access during prerender.
  - Added complete mock providers to satisfy `Provider` type and ensure stable export.

- Sitemap page component types
  - Ensured types align with `generateServiceAreaCombinations` return shape.
  - Replaced `Badge` usage with a simple styled element to avoid prop/type mismatch during build.

- Global theme application
  - Applied home-page dark gradient theme globally via `components/conditional-layout.tsx` (site-wide background/text styling). User later simplified layout to render children without global wrapper for admin routes and kept header/footer for public routes.

- Local production build verification
  - Ran `npm run build` locally after fixes; build completed successfully.
  - Confirmed route outputs and page types in the build summary.

### 2025-09-04 (Continued)

- Provider profile page creation
  - Created dynamic provider profile page at `/providers/[providerId]/page.tsx` (Server Component).
  - Created client component `/providers/[providerId]/provider-profile-client.tsx` with tabs for Dashboard, Profile, Services, and Service Locations.
  - Removed edit options and leads section as requested.
  - Applied responsive design with white text and dark theme consistency.

- Supabase integration for provider management
  - Created `lib/supabase.ts` with functions for provider CRUD operations.

### 2025-09-04 (Latest)

- Fixed provider login routing issue
  - **Problem:** Provider login was redirecting to `/{provider-name}/dashboard` but the dynamic route structure was incorrect, causing 404 errors.
  - **Solution:** Created proper dynamic route structure with `app/[providerName]/dashboard/page.tsx`, `app/[providerName]/profile/page.tsx`, and `app/[providerName]/leads/page.tsx`.
  - **Files Created:**
    - `app/[providerName]/dashboard/page.tsx`: Provider dashboard with functional insights, current work section, and quick actions.
    - `app/[providerName]/profile/page.tsx`: Profile management page with sections for personal info, services, service locations, and availability.
    - `app/[providerName]/leads/page.tsx`: Lead management page with statistics, search/filter functionality, and detailed lead cards.
  - **Features Added:**
    - Dashboard shows total leads, completed, incomplete, and average rating statistics.
    - Current work section displays incomplete leads with action buttons.
    - Profile page allows editing personal information, services, locations, and availability.
    - Leads page provides comprehensive lead management with filtering and status updates.
    - All pages include proper authentication checks and redirect to login if not authenticated.
    - Consistent dark theme with gradient backgrounds and white text throughout.

- Enhanced Supabase debugging
  - **Problem:** Provider approval was not working due to unclear error messages.
  - **Solution:** Enhanced `updateProviderStatusInSupabase` function with additional debugging:
    - Added provider existence check before attempting update.
    - Improved error handling with detailed logging.
    - Added step-by-step console logging for troubleshooting.
  - **Database Schema Verification:** Confirmed all required fields exist in the providers table including `isapproved`, `status`, `password`, and `lastactive`.
  - Added `uploadImageToSupabaseStorage`, `createProviderInSupabase`, `updateProviderStatusInSupabase`, `listProvidersFromSupabase`, `saveLeadToSupabase`, `listLeadsFromSupabase`, `getProviderByIdFromSupabase`.
  - Defined `ProviderInsert` and `LeadInsert` types with lower-case column names to match PostgreSQL defaults.

- Provider registration form enhancement
  - Updated `/providers/register/page.tsx` to include image upload functionality.
  - Added client-side image preview and Supabase storage integration.
  - Implemented proper form validation for phone (numeric) and email (valid format).
  - Added redirect to `/thank-you` on successful submission.

- Booking form multi-step wizard conversion
  - Converted `components/booking-modal.tsx` into a 3-step scrollable wizard.
  - Added service selection dropdown (showing provider's services or all services).
  - Added service area selection dropdown (showing provider's areas or all areas).
  - Implemented input validation for phone and email fields.
  - Fixed `ReferenceError` by reordering state initialization.

- Lead management integration
  - Updated `/api/leads/route.ts` to save leads to Supabase using `saveLeadToSupabase`.
  - Modified `/app/admin/leads/page.tsx` to fetch leads from Supabase.
  - Updated provider assignment dropdown to dynamically load from Supabase.

- Provider data management overhaul
  - Removed all hardcoded provider data from `/providers` page.
  - Updated `/api/admin/providers/route.ts` to fetch providers from Supabase.
  - Ensured profile images display correctly from Supabase storage URLs.

- Admin providers page complete overhaul
  - Removed all hardcoded providers from admin page (`/admin/providers/page.tsx`).
  - Added profile links to "View" buttons for each provider (`/providers/${provider.id}`).
  - Fixed provider approval persistence issue by reloading data after status changes.
  - Added confirmation dialog for provider deletion with proper Supabase integration.
  - Added `deleteProviderFromSupabase` function to `lib/supabase.ts`.
  - Updated API route to handle Supabase deletion with fallback to in-memory storage.
  - Applied proper TypeScript types and null-safe operations throughout.

- Provider authentication and dashboard system
  - Created provider login page at `/login` with email/password authentication.
  - Added password field to provider registration form (`/providers/register/page.tsx`).
  - Updated `ProviderInsert` type to include password field.
  - Created API route `/api/auth/provider-login/route.ts` for provider authentication.
  - Added `authenticateProvider`, `getProviderLeadsFromSupabase`, and `updateProviderInSupabase` functions to `lib/supabase.ts`.

- Dynamic provider dashboard system
  - Created dynamic routing structure `/{provider-name}/{page-name}` for provider-specific pages.
  - Implemented provider layout (`app/[providerName]/layout.tsx`) with navigation sidebar and authentication checks.
  - Created provider dashboard (`app/[providerName]/dashboard/page.tsx`) with:
    - Functional insights cards (Total Leads, Completed, Incomplete, Avg Rating)
    - Current work section showing incomplete leads with customer details
    - Quick actions for analytics, profile updates, and pricing
  - Created provider profile page (`app/[providerName]/profile/page.tsx`) with:
    - View/edit about information (name, company, email, phone, description)
    - View/edit services offered with checkboxes
    - View/edit service locations with area selection
    - View/edit profile picture with image upload functionality
    - View/edit availability settings (emergency, weekday/weekend hours)
  - Created provider leads page (`app/[providerName]/leads/page.tsx`) with:
    - Statistics cards showing total, completed, and incomplete leads
    - Search and filter functionality (by status and urgency)
    - Detailed lead cards with customer information, service details, and action buttons
    - Status update functionality for lead management

### 2025-09-06

- **Lead Assignment System Complete Overhaul**
  - **Problem:** Lead assignment was not persisting in Supabase database due to Row Level Security (RLS) policies blocking updates from anonymous users.
  - **Solution:** Implemented service role key integration to bypass RLS for administrative operations.
  - **Files Modified:**
    - `lib/supabase.ts`: Added `SUPABASE_SERVICE_ROLE_KEY` support for `updateLeadInSupabase` and `listLeadsFromSupabase` functions
    - `app/api/admin/leads/route.ts`: Enhanced with optimistic UI updates, proper error handling, and Supabase integration
    - `app/api/providers/[providerId]/leads/route.ts`: Fixed data source consistency and cache-busting
  - **Key Technical Changes:**
    - `updateLeadInSupabase` now uses service role key when available, falling back to anon key
    - `assignLeadToProvider` function now fetches and stores provider name along with provider ID
    - `listLeadsFromSupabase` includes cache-busting headers to prevent stale data
    - Provider leads API uses same Supabase data source as admin API for consistency
  - **UI/UX Improvements:**
    - Optimistic UI updates for immediate feedback on lead assignment/de-assignment
    - Admin dashboard shows "Assigned to {provider.name}" with De-assign button
    - Provider dashboard correctly displays assigned leads
    - All assignments persist after page refresh

- **Provider Dashboard Lead Display Fix**
  - **Problem:** Provider dashboard showed 0 leads despite successful assignment in admin dashboard.
  - **Root Cause:** Provider leads API was falling back to mock data instead of using Supabase data due to caching issues.
  - **Solution:** 
    - Removed fallback to mock data in provider leads API
    - Added cache-busting headers to `listLeadsFromSupabase` function
    - Ensured both admin and provider APIs use identical data mapping logic
  - **Result:** Provider dashboard now correctly shows assigned leads with all details

- **Database Schema and API Consistency**
  - **Issue:** Inconsistent data mapping between different API endpoints caused display issues.
  - **Fix:** Standardized data mapping across all endpoints:
    - `providerid` → `providerId`
    - `providername` → `providerName` 
    - `servicecategory` → `serviceCategory`
    - `createdat` → `createdAt`
    - `updatedat` → `updatedAt`
  - **Files Updated:**
    - `app/api/admin/leads/route.ts`
    - `app/api/providers/[providerId]/leads/route.ts`
    - `lib/supabase.ts`

- **Service Role Key Integration**
  - **Purpose:** Bypass Supabase RLS policies for administrative operations while maintaining security.
  - **Implementation:** 
    - Environment variable `SUPABASE_SERVICE_ROLE_KEY` added to both local and Vercel environments
    - Functions prioritize service role key over anonymous key for write operations
    - Maintains fallback to anonymous key for backward compatibility
  - **Security:** Service role key only used for server-side operations, never exposed to client

- **Cache Management and Data Freshness**
  - **Problem:** Stale cached data was preventing real-time updates from being visible.
  - **Solution:** Implemented comprehensive cache-busting strategy:
    - Added `Cache-Control: no-cache, no-store, must-revalidate` headers
    - Used `cache: 'no-store'` in fetch requests
    - Ensured all APIs fetch fresh data from Supabase on each request

### 2025-09-06 (Continued)
- **Services Page CMS Integration**
  - Added CMS support for `/services` hero, why_choose and CTA sections. Content now loads from `pages_content` (slug: `services`).
  - Implemented dynamic provider counts from Supabase for categories and individual services.
  - Made category tiles clickable to route to `/services/:category_slug`.

- **Category Pages CMS (services/:category_slug)**
  - Enabled editing of category page hero content (H1 and description) via `/admin/pages-editor`.
  - Virtual entries are shown for each service category; saving persists to `pages_content` with slug `services/{category_slug}` and content `{ hero: { h1, description } }`.
  - Category pages fetch CMS content and fall back to defaults if not set.

- **Home and Editor Robustness Fixes**
  - Home page dynamic component now merges CMS payloads with defaults to prevent `undefined` access (e.g., missing `popularServices.h2`).
  - Pages editor normalizes incoming content for both Home and Services before rendering, preventing crashes like `Cannot read properties of undefined (reading 'h2')`.

- **Editor behavior for Services Category pages**
  - Adjusted `app/admin/pages-editor/page.tsx` to detect `services/:slug` pages and set `pageType="category"`.
  - Category editor now shows Hero and Meta SEO tabs; Why Choose and CTA remain hidden.
  - Dialog title now reflects page type: Home, Services, or Category.

- **Pages Editor housekeeping**
  - Removed header debug/action buttons (Add Services Page, Refresh, Test API, Test Supabase, Check Duplicates) from `app/admin/pages-editor/page.tsx`.

- **CMS Editor System Implementation**
  - **Purpose:** Created a comprehensive Content Management System (CMS) for editing website content, starting with the Home page.
  - **Files Created:**
    - `app/admin/pages-editor/page.tsx`: Main CMS editor interface with page list view and edit modal
    - `app/api/admin/pages-content/route.ts`: API endpoints for CRUD operations on page content
    - `components/dynamic-home-page-content.tsx`: Dynamic content component that fetches from CMS
    - `scripts/setup-pages-content-table.sql`: SQL script to create the pages_content table
  - **Database Schema:**
    - Created `pages_content` table with columns: `id`, `page_slug`, `content` (JSONB), `meta_title`, `meta_description`, `updated_at`
    - Home page uses `page_slug = NULL` to represent the root path `/`
  - **Features Implemented:**
    - Pages list view with "View" and "Edit" buttons
    - Comprehensive edit modal with sections for Hero, Popular Services, How It Works, Service Areas, FAQs, Buttons, and Meta SEO
    - Dynamic service selection from existing database services
    - Add/remove functionality for services and FAQs
    - Real-time content updates with Supabase integration
  - **Admin Integration:**
    - Added "Pages Editor" link to admin sidebar navigation
    - Integrated with existing admin theme and layout

- **CMS Editor Bug Fixes**
  - **Issue 1: Double Scroller on Home Page**
    - **Problem:** `min-h-screen` and `overflow-x-hidden` CSS properties caused double scrollbars
    - **Solution:** Removed conflicting CSS properties from `components/dynamic-home-page-content.tsx`
  - **Issue 2: Incorrect Home Page Slug Display**
    - **Problem:** Home page showed `/home` instead of `/` in the admin interface
    - **Solution:** 
      - Updated database to store `NULL` for home page slug
      - Modified Supabase functions to query `page_slug=is.null` for home page
      - Updated admin UI to display `/` for home page and send `null` on save
      - Fixed dynamic content component to request content for empty slug
  - **Issue 3: Content Not Updating in Supabase**
    - **Problem:** API returned success but data wasn't being saved to database
    - **Root Cause:** Slug handling inconsistency - frontend sent `'/'` but Supabase expected `''` or `NULL`
    - **Solution:**
      - Updated API routes to handle `'/'`, `''`, and `null` as home page slugs
      - Modified Supabase functions to normalize all home page slug variations to `NULL`
      - Added comprehensive debugging and error logging
      - Implemented record existence check before update operations
      - Added fallback to create new record if update target doesn't exist

- **Enhanced Debugging and Error Handling**
  - **Added Features:**
    - Comprehensive console logging throughout save process
    - API test button to verify connectivity
    - Supabase connection test button to verify database access
    - Detailed error messages with specific failure points
    - Response logging for all API and Supabase operations
    - Environment variable validation and logging
  - **Files Enhanced:**
    - `app/admin/pages-editor/page.tsx`: Added debugging logs, API test, and Supabase test functionality
    - `app/api/admin/pages-content/route.ts`: Enhanced error handling, slug processing, and environment variable checks
    - `lib/supabase.ts`: Added detailed logging, environment variable validation, and improved error messages
    - `app/api/test-supabase-connection/route.ts`: New test endpoint to verify Supabase database connectivity

- **Row Level Security (RLS) Fix**
  - **Problem:** Supabase RLS policies were blocking insert/update operations on the `pages_content` table
  - **Error:** `"new row violates row-level security policy for table \"pages_content\""`
  - **Solution:** Updated all Supabase functions to use Service Role Key instead of Anonymous Key for admin operations
  - **Files Modified:**
    - `lib/supabase.ts`: Updated `savePageContentToSupabase`, `updatePageContentInSupabase`, `getPageContentFromSupabase`, and `listAllPagesContentFromSupabase` functions
    - Added fallback logic to use Service Role Key when available, otherwise fall back to Anonymous Key
    - Added logging to show which API key type is being used for each operation

- **Database Schema Constraint Fix**
  - **Problem:** `page_slug` column had NOT NULL constraint but code was trying to insert NULL for home page
  - **Error:** `"null value in column \"page_slug\" of relation \"pages_content\" violates not-null constraint"`
  - **Solution:** Changed home page slug handling from NULL to empty string ('') throughout the system
  - **Files Modified:**
    - `lib/supabase.ts`: Updated all functions to use empty string instead of NULL for home page
    - `app/api/admin/pages-content/route.ts`: Updated API routes to handle empty string for home page
    - `app/admin/pages-editor/page.tsx`: Updated frontend to send empty string instead of NULL
    - `scripts/setup-pages-content-table.sql`: Updated SQL script to insert empty string for home page
    - Updated TypeScript types to reflect string instead of string | null

- **Duplicate Home Page Records Fix**
  - **Problem:** Database contained multiple home page records (one with `page_slug: ''` and another with `page_slug: '/'`)
  - **Symptoms:** UI showing duplicate page cards, updates working but appearing to create new records
  - **Root Cause:** Mixed slug representations in database due to previous schema changes
  - **Solution:** 
    - Created cleanup SQL script to remove duplicate home page records
    - Fixed UI display logic to show `/` instead of `//` for home page
    - Added duplicate detection button in admin interface
    - Updated display logic to handle empty string slug correctly
  - **Files Modified:**
    - `scripts/cleanup-duplicate-home-pages.sql`: New script to clean up duplicate records
    - `app/admin/pages-editor/page.tsx`: Fixed display logic and added duplicate detection
    - Updated slug display logic: `page.page_slug === '' ? '/' : \`/${page.page_slug}\``

- **TypeScript and Code Quality Improvements**
  - **Type Safety:**
    - Updated `PageContentInsert` type to use `page_slug: string` (no longer nullable)
    - Fixed all TypeScript compilation errors
    - Ensured proper type handling for home page slug variations (empty string instead of null)
  - **Code Organization:**
    - Centralized slug handling logic in API routes
    - Consistent error handling patterns across all functions
    - Proper separation of concerns between frontend and backend

### Notes / Next steps

- Future changes will be appended here with date, intent, files touched, and impact.
- If Vercel build logs surface new issues, fixes will be documented in this log with exact error snippets and resolutions.
- The lead assignment system is now fully functional with complete admin-to-provider workflow.
- All provider dashboards correctly display their assigned leads in real-time.
- The CMS editor system is fully functional with proper slug handling, content persistence, and comprehensive debugging capabilities.
- All content updates now properly persist to Supabase database with real-time updates on the live website.

### 2025-09-08

- Service detail page content alignment and CMS FAQ integration
  - Unified About/Why sections and removed duplicate standalone Why block on service pages.
  - Providers list cards: removed message button; avatars now use `profileImage`/`profileimage` from Supabase.
  - Booking and provider registration forms: enforced step-blocking validation (cannot proceed without required fields).
  - CMS FAQs on service detail pages:
    - Service pages now first render FAQs from CMS (`pages_content` slug `service-page/{slug}` → `faqs.items`).
    - Fallback to admin custom FAQs from `/api/admin/pages?id=service-{slug}` if CMS is empty.
    - Final fallback to auto-generated FAQs if both are empty.
  - Files updated:
    - `app/services/[service]/service-page-client.tsx`
    - `app/providers/register/page.tsx`
    - `components/booking-modal.tsx` (validation already enforced)
  - Impact: FAQs added via Pages Editor now display on corresponding service detail pages; consistent layout across services.

- Admin Services Management groundwork
  - Connected `/admin/services` to Supabase helpers; added Add Service modal, activate/deactivate, and delete actions.
  - Created services API helpers in `lib/supabase.ts`: `listServicesFromSupabase`, `createServiceInSupabase` (seeds `pages_content`), `updateServiceStatusInSupabase`, `deleteServiceFromSupabase` (removes `pages_content`).
  - Removed Edit button on service cards; kept View + Activate/Deactivate + Delete.
  - Files updated:
    - `app/admin/services/page.tsx`
    - `lib/supabase.ts`
  - Next: add SQL migrations for `services`/`service_content` tables and refactor public pages to fetch from Supabase.

- Areas page upgrades and CMS integration
  - Implemented Featured Areas slider showing 6 cards, auto-advances by 2 items in an infinite loop.
  - Removed animations from All Areas; added stable alphabetical ordering and pagination (12 per page).
  - Dynamic stats for All Areas: providers (Supabase providers), bookings and approx response time (Supabase leads).
  - Connected `/areas` page to CMS (`pages_content` slug: `areas`) with fields:
    - hero: { h1 (supports two-line with \n), description }
    - featured: { h2, paragraph }
    - coverage: { h2, paragraph }
    - emergency: { h2, paragraph }
  - Editor updates: added Areas page editing in `/admin/pages-editor` with tabs for Hero, Featured, Coverage, Emergency, Meta.
  - Files updated:
    - `app/areas/page.tsx`
    - `app/admin/pages-editor/page.tsx`

- Services pages enforcement via Supabase
  - Service detail route 404s for any service not active in Supabase.
  - Category pages list only Supabase services assigned to that category.
  - Files updated:
    - `app/services/[service]/page.tsx`
    - `app/services/[service]/service-page-client.tsx`

- Admin Services API (secure)
  - `POST /api/admin/services`: create service using Service Role Key; seeds `pages_content` for service page.
  - `DELETE /api/admin/services?id=<uuid>|slug&slug=<slug?>`: deletes DB row and associated `pages_content` by slug.
  - Client helpers now call these API routes for create/delete.
  - Files updated:
    - `app/api/admin/services/route.ts`
    - `lib/supabase.ts`

- Migration utilities
  - Added SQL to create `services` and `service_content` in `scripts/setup-pages-content-table.sql`.
  - Added `scripts/migrate-services-to-supabase.js` to upsert static `lib/data` services into Supabase.
  - Home popular services and services directory now read active services from Supabase, with safe fallback.


### 2025-09-09 (Areas: dynamic + CMS seeding)

- Dynamic Areas management (mirrors Services behavior)
  - Added Supabase helpers in `lib/supabase.ts`:
    - `listAreasFromSupabase`, `createAreaInSupabase`, `updateAreaStatusInSupabase`, `deleteAreaFromSupabase`
    - `AreaRow` type (status, featured, services[])
  - Rewrote admin API `app/api/admin/areas/route.ts` to use Supabase instead of in-memory:
    - `POST` creates area row using Service Role Key and seeds `pages_content` for `areas/{area}` and for each selected service at `areas/{area}/{service}`
    - `GET` returns current Supabase areas
    - `DELETE` removes area row and cleans `pages_content` entries for `areas/{area}` and `areas/{area}/*`
  - Refactored `/admin/areas/page.tsx` to be Supabase-driven:
    - Removed Workflow box, Add Sub-Area button, and Manage Pages button; kept View Public Areas + Add New Area
    - Add Area modal fields: Area Name, Page Slug (auto), Services to include (multi-select from active services), Feature toggle, Description
    - On create, calls `createAreaInSupabase` which seeds editor entries
    - Activate/Deactivate uses `updateAreaStatusInSupabase`; Delete uses `deleteAreaFromSupabase`
  - Pages Editor integration `app/admin/pages-editor/page.tsx`:
    - Loads areas from Supabase; builds virtual entries for `areas/{area}` and `areas/{area}/{service}` using each area's `services[]` list (falls back to all active services if empty)
    - Filters out legacy/hardcoded area-service pages
  - Public Areas page `app/areas/page.tsx`:
    - Removed hardcoded `areas` import; now lists only areas from Supabase (status=active)
    - Stats aggregation updated to use dynamic list

- Impact
  - Adding an area in `/admin/areas` instantly creates editor entries in `/admin/pages-editor` for the area and for each selected service under the slug pattern `/areas/{areaSlug}/{serviceSlug}`.
  - Removing an area deletes associated editor pages.
  - All hardcoded areas replaced by Supabase data across admin and public views.

### 2025-09-09 (Hotfix)

- Fixed runtime error on `/admin/areas`: missing `Switch` import used in Add Area modal.
  - Updated `app/admin/areas/page.tsx` to import `Switch` from `@/components/ui/switch`.
  - Verified no linter errors.

### 2025-09-09 (Routing enforcement)

- Locked public dynamic routes to Supabase data only.
  - `app/areas/[area]/page.tsx`: resolves area from Supabase (status=active); otherwise `notFound()`.
  - `app/areas/[area]/[service]/page.tsx`: resolves service via `getServiceBySlugFromSupabase` (status=active) and area via Supabase; 404 if either missing/inactive.
  - Removed usage of hardcoded lib/data for these routes.

### 2025-09-09 (Editor visibility)

- Pages Editor now shows only records that exist in Supabase for Areas and Area-Service pages.
  - Removed all virtual entries for `areas`, `areas/{area}`, and `areas/{area}/{service}` from `app/admin/pages-editor/page.tsx`.
  - Added strict filters so any CMS records with `areas/{area}` appear only when the area exists in Supabase; and `areas/{area}/{service}` only when both area and service are active (and if an area's services[] is specified, it must include that service).
  - Editor list is now a true reflection of `pages_content` plus Supabase-driven service detail virtuals only.

### 2025-09-09 (Area services UX and dynamic lists)

- Area service tiles now respect per-area service selection from Supabase.
  - Updated `app/areas/[area]/area-page-client.tsx` to load `areas.services` and intersect with active services; only those tiles render.
- Admin Areas edit modal supports updating services for an existing area.
  - Added services multi-select; persisted via new `updateAreaInSupabase`.
- Supabase helpers extended:
  - Added `updateAreaInSupabase`; expanded `AreaRow` with `sector` and `description`.

### 2025-09-09 (Editor cleanup)

- Removed all `service-page/{slug}` cards from Pages Editor (not part of website).
  - Updated `app/admin/pages-editor/page.tsx` to not generate or display any `service-page` entries.

### 2025-09-09 (Area and Area-Service providers filtering + CMS)

- Area-Service pages now load CMS content and filter providers strictly by both area and service.
  - `app/areas/[area]/[service]/page.tsx`: loads `pages_content` at `areas/{area}/{service}` for meta/content; passes to client.
  - `app/areas/[area]/[service]/service-client.tsx`: renders CMS fields (hero/ about) with fallbacks; shows message when no providers match.
- Area-only pages filter providers strictly by area.
  - `app/areas/[area]/area-page-client.tsx`: robust area match (supports array or CSV in provider.areas, slug/name normalization).

### 2025-09-09 (Auto-create service editor entries)

- Restored service detail virtual entries in `/admin/pages-editor` so adding a service in Supabase auto-shows an editable card.
  - `app/admin/pages-editor/page.tsx`: generates `services/{slug}` virtual entries for all active services and shows CMS records only for active services. Legacy `service-page/{slug}` entries remain hidden.

### 2025-09-09 (Editor UX for legacy service-page slugs)

- Ensured legacy `service-page/{slug}` cards open and save as `services/{slug}` and View buttons link to `/services/{slug}`.
  - Updated URL display and View logic in `app/admin/pages-editor/page.tsx`.

