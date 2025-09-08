// Migrate hardcoded services from lib/data into Supabase `services` table
// Usage: node scripts/migrate-services-to-supabase.js
// Requires env: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY

const { services } = require('../lib/data');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

async function upsertService(name, slug) {
  const endpoint = `${SUPABASE_URL}/rest/v1/services`;
  const body = [{ name, slug, status: 'active' }];
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'resolution=merge-duplicates,return=representation'
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Insert failed for ${slug}: ${res.status} ${text}`);
  }
  const data = await res.json();
  return Array.isArray(data) ? data[0] : data;
}

async function main() {
  console.log(`Migrating ${services.length} services...`);
  let ok = 0, fail = 0;
  for (const svc of services) {
    try {
      await upsertService(svc.name, svc.slug);
      ok++;
      process.stdout.write('.');
    } catch (e) {
      console.error(`\nError for ${svc.slug}:`, e.message);
      fail++;
    }
  }
  console.log(`\nDone. Success: ${ok}, Failed: ${fail}`);
}

// Node 18+ fetch
if (typeof fetch === 'undefined') {
  global.fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));
}

main().catch((e) => { console.error(e); process.exit(1); });


