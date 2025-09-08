import { NextResponse } from 'next/server';
import { savePageContentToSupabase } from '@/lib/supabase';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

function isUuid(value: string | null | undefined) {
  if (!value) return false;
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(value);
}

export async function POST(req: Request) {
  try {
    if (!SUPABASE_URL || !SERVICE_KEY) {
      return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
    }

    const body = await req.json().catch(() => ({}));
    let { name, slug, category_id } = body || {};

    if (typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 });
    }
    if (typeof slug !== 'string' || !slug.trim()) {
      // auto-generate slug from name if not provided
      slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const payload: any = {
      name: name.trim(),
      slug: slug.trim(),
      status: 'active',
      category_id: isUuid(category_id) ? category_id : null,
    };

    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        Prefer: 'return=representation'
      },
      body: JSON.stringify([payload])
    });

    if (!insertRes.ok) {
      const text = await insertRes.text().catch(() => '');
      return NextResponse.json({ error: 'Supabase insert failed', details: text }, { status: insertRes.status });
    }

    const inserted = await insertRes.json();
    const row = Array.isArray(inserted) ? inserted[0] : inserted;

    // Seed pages_content for this service page
    try {
      await savePageContentToSupabase({
        page_slug: `service-page/${row.slug}`,
        content: {
          hero: { h1: `${row.name} in Dubai`, description: `Professional ${row.name.toLowerCase()} by verified providers.` },
          about: { h2: `About ${row.name} in Dubai`, paragraph: '' },
          faqs: { h2: 'Frequently Asked Questions', paragraph: '', items: [] },
          cta: { h2: `Need ${row.name}? We're Here to Help!`, paragraph: '' }
        },
        meta_title: `${row.name} in Dubai | HOMIZON`,
        meta_description: `${row.name} services in Dubai`
      });
    } catch (e) {
      // Non-blocking: return success even if seeding fails
      console.warn('pages_content seed failed:', e);
    }

    return NextResponse.json({ data: row }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Unexpected error' }, { status: 500 });
  }
}

// Legacy in-memory endpoints removed. This route only handles secure POST creates now.