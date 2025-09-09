import { NextRequest, NextResponse } from 'next/server';
import { savePageContentToSupabase } from '@/lib/supabase';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

function isUuid(value: string | null | undefined) {
  if (!value) return false;
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(value);
}

export async function GET() {
  try {
    if (!SUPABASE_URL || !SERVICE_KEY) {
      return NextResponse.json({ data: [] });
    }
    const res = await fetch(`${SUPABASE_URL}/rest/v1/areas?select=*`, {
      headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` },
      cache: 'no-store'
    });
    const data = res.ok ? await res.json() : [];
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ data: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!SUPABASE_URL || !SERVICE_KEY) {
      return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
    }
    const { name, slug, services = [], featured = false } = await request.json();
    if (!name || !slug) return NextResponse.json({ error: 'name and slug are required' }, { status: 400 });

    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/areas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        Prefer: 'return=representation'
      },
      body: JSON.stringify([{ name, slug, status: 'active', featured, services }])
    });
    if (!insertRes.ok) {
      const text = await insertRes.text().catch(() => '');
      return NextResponse.json({ error: 'Supabase insert failed', details: text }, { status: insertRes.status });
    }
    const inserted = await insertRes.json();
    const row = Array.isArray(inserted) ? inserted[0] : inserted;

    // Seed pages_content for the area detail page
    try {
      await savePageContentToSupabase({
        page_slug: `areas/${row.slug}`,
        content: {
          hero: { h1: `Home Services in\n${row.name}`, description: `${row.name} service coverage. Verified providers and fast response.` },
          providers: { h2: 'Available Providers', paragraph: 'Choose from verified professionals in this area.' },
          about: { h2: `About Services in ${row.name}`, paragraph: '' },
          faqs: { h2: 'FAQs', paragraph: '', items: [] },
          cta: { h2: `Need help in ${row.name}?`, paragraph: '' }
        },
        meta_title: `Home Services in ${row.name} | HOMIZON`,
        meta_description: `Find trusted home services in ${row.name}, Dubai.`
      });

      // Seed pages for each selected service in this area
      if (Array.isArray(services) && services.length) {
        for (const svc of services) {
          await savePageContentToSupabase({
            page_slug: `areas/${row.slug}/${svc}`,
            content: {
              hero: { h1: `{ Service } & Maintenance\n in { Location }`, description: '' },
              about: { h2: `About { Service } in { Location }`, paragraph: '' },
              providers: { h2: 'Available Providers', paragraph: '' }
            },
            meta_title: `${svc} in ${row.name} | HOMIZON`,
            meta_description: `Edit content for ${svc} in ${row.name}`
          });
        }
      }
    } catch (e) {
      console.warn('pages_content seed for area failed:', e);
    }

    return NextResponse.json({ data: row }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Unexpected error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (!SUPABASE_URL || !SERVICE_KEY) {
      return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
    }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug') || undefined;
    if (!id && !slug) return NextResponse.json({ error: 'id or slug is required' }, { status: 400 });

    const byId = isUuid(id || '');
    const deleteUrl = byId
      ? `${SUPABASE_URL}/rest/v1/areas?id=eq.${encodeURIComponent(id as string)}`
      : `${SUPABASE_URL}/rest/v1/areas?slug=eq.${encodeURIComponent(slug || (id as string))}`;

    const delRes = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}`, Prefer: 'return=representation' }
    });
    if (!delRes.ok) {
      const text = await delRes.text().catch(() => '');
      return NextResponse.json({ error: 'Supabase delete failed', details: text }, { status: delRes.status });
    }

    // Cleanup pages_content if slug available
    const s = slug || (id as string);
    if (s) {
      try {
        await fetch(`${SUPABASE_URL}/rest/v1/pages_content?page_slug=eq.${encodeURIComponent(`areas/${s}`)}`, {
          method: 'DELETE', headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` }
        });
        // Also remove area-service pages
        await fetch(`${SUPABASE_URL}/rest/v1/pages_content?page_slug=like.${encodeURIComponent(`areas/${s}/%`)}`, {
          method: 'DELETE', headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` }
        });
      } catch {}
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Unexpected error' }, { status: 500 });
  }
}
