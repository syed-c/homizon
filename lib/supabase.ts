const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

export type LeadInsert = {
  name: string;
  phone: string;
  email?: string;
  serviceCategory: string;
  subServices?: string[];
  area: string;
  subArea?: string;
  address?: string;
  description?: string;
  urgency?: string;
  status?: string;
  source?: string;
  providerId?: string;
  providerName?: string;
  preferredTime?: string;
  whatsapp?: boolean;
};

export async function saveLeadToSupabase(lead: LeadInsert) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { skipped: true };
  const endpoint = `${SUPABASE_URL}/rest/v1/leads`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify(lead)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase insert failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) ? data[0] : data };
}


