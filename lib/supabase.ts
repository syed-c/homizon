const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

export type LeadInsert = {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  servicecategory: string;
  subservices?: string[];
  area: string;
  subarea?: string;
  address?: string;
  description?: string;
  urgency?: string;
  status?: string;
  source?: string;
  providerid?: string;
  providername?: string;
  preferredtime?: string;
  whatsapp?: boolean;
  createdat?: string;
  updatedat?: string;
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

export async function listLeadsFromSupabase() {
  if (!SUPABASE_URL) return { data: [] };
  
  // Use service role key if available, otherwise fall back to anon key
  const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  if (!apiKey) return { data: [] };
  
  const endpoint = `${SUPABASE_URL}/rest/v1/leads?select=*`;
  const res = await fetch(endpoint, {
    headers: { 
      apikey: apiKey, 
      Authorization: `Bearer ${apiKey}`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
    cache: 'no-store'
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase leads fetch failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data };
}

export async function updateLeadInSupabase(leadId: string, updates: any) {
  if (!SUPABASE_URL) {
    console.warn('Supabase not configured - SUPABASE_URL missing');
    return { success: false, error: 'Supabase not configured' };
  }
  
  // Use service role key if available, otherwise fall back to anon key
  const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  if (!apiKey) {
    console.warn('Supabase not configured - No API key available');
    return { success: false, error: 'Supabase not configured' };
  }
  
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Supabase update lead error:', response.status, errorText);
      return { success: false, error: `HTTP ${response.status}: ${errorText}` };
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating lead in Supabase:', error);
    return { success: false, error };
  }
}

export async function assignLeadToProvider(leadId: string, providerId: string) {
  // First, get the provider's name
  let providerName = null;
  try {
    const result = await getProviderByIdFromSupabase(providerId);
    if (result && result.data && result.data.name) {
      providerName = result.data.name;
    }
  } catch (error) {
    console.error('Error fetching provider name:', error);
  }

  return updateLeadInSupabase(leadId, {
    providerid: providerId,
    providername: providerName,
    status: 'assigned',
    updatedat: new Date().toISOString()
  });
}

export async function deassignLeadFromProvider(leadId: string) {
  return updateLeadInSupabase(leadId, {
    providerid: null,
    providername: null,
    status: 'new',
    updatedat: new Date().toISOString()
  });
}

// Provider types and helpers
// Use lower-case column names to match Postgres defaults (unquoted identifiers)
export type ProviderInsert = {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  company?: string;
  experience: number;
  profileimage?: string;
  services: string[];
  areas: string[];
  description: string;
  certifications: string[];
  languages: string[];
  pricing: Record<string, number>;
  availability: { emergency: boolean; weekdays: string; weekends: string };
  isapproved: boolean;
  status: 'pending' | 'active' | 'suspended';
  joineddate: string;
};

export async function createProviderInSupabase(provider: ProviderInsert) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase not configured - SUPABASE_URL or SUPABASE_ANON_KEY missing');
    return { skipped: true };
  }
  
  try {
    const endpoint = `${SUPABASE_URL}/rest/v1/providers`;
    console.log('Creating provider in Supabase:', {
      endpoint,
      providerId: provider.id,
      providerName: provider.name,
      providerEmail: provider.email
    });
    
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=representation'
      },
      body: JSON.stringify(provider)
    });
    
    console.log('Supabase response status:', res.status, res.statusText);
    
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('Supabase provider insert failed:', {
        status: res.status,
        statusText: res.statusText,
        responseText: text
      });
      throw new Error(`Supabase provider insert failed: HTTP ${res.status} ${text}`);
    }
    
    const data = await res.json();
    console.log('Supabase provider created successfully:', data);
    return { data: Array.isArray(data) ? data[0] : data };
  } catch (error) {
    console.error('Error in createProviderInSupabase:', error);
    throw error;
  }
}

export async function updateProviderStatusInSupabase(providerId: string, status: 'active' | 'suspended' | 'pending', isApproved: boolean) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { skipped: true };
  
  console.log('Updating provider status:', { providerId, status, isApproved });
  
  // First, let's check if the provider exists
  const checkEndpoint = `${SUPABASE_URL}/rest/v1/providers?id=eq.${encodeURIComponent(providerId)}&select=id,name,status,isapproved`;
  console.log('Checking provider exists:', checkEndpoint);
  
  const checkRes = await fetch(checkEndpoint, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    }
  });
  
  if (!checkRes.ok) {
    const checkText = await checkRes.text().catch(() => '');
    console.error('Provider check failed:', { status: checkRes.status, text: checkText });
    throw new Error(`Provider check failed: HTTP ${checkRes.status} ${checkText}`);
  }
  
  const checkData = await checkRes.json();
  console.log('Provider check result:', checkData);
  
  if (!Array.isArray(checkData) || checkData.length === 0) {
    throw new Error(`Provider with ID '${providerId}' not found`);
  }
  
  const endpoint = `${SUPABASE_URL}/rest/v1/providers?id=eq.${encodeURIComponent(providerId)}`;
  const updateData = { 
    status, 
    isapproved: isApproved,
    lastactive: new Date().toISOString()
  };
  
  console.log('Sending update data:', updateData);
  console.log('Update endpoint:', endpoint);
  
  const res = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify(updateData)
  });
  
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error('Supabase update failed:', { status: res.status, text });
    throw new Error(`Supabase provider update failed: HTTP ${res.status} ${text}`);
  }
  
  const data = await res.json();
  console.log('Supabase update response:', data);
  return { data: Array.isArray(data) ? data[0] : data };
}

export async function listProvidersFromSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase not configured, returning empty providers list');
    return { data: [] };
  }
  
  try {
    const endpoint = `${SUPABASE_URL}/rest/v1/providers?select=*&order=joineddate.desc`;
    console.log('Fetching providers from Supabase:', endpoint);
    
    const res = await fetch(endpoint, {
      headers: { 
        apikey: SUPABASE_ANON_KEY, 
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Cache-Control': 'no-cache'
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`Supabase providers fetch failed: HTTP ${res.status}`, text);
      throw new Error(`Supabase providers fetch failed: HTTP ${res.status} ${text}`);
    }
    
    const data = await res.json();
    console.log('Successfully fetched providers from Supabase:', data?.length || 0);
    return { data: data || [] };
  } catch (error) {
    console.error('Error in listProvidersFromSupabase:', error);
    return { data: [] };
  }
}

export async function getProviderByIdFromSupabase(providerId: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { data: null };
  const endpoint = `${SUPABASE_URL}/rest/v1/providers?select=*&id=eq.${encodeURIComponent(providerId)}`;
  const res = await fetch(endpoint, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    // Always fetch fresh provider data so profile image updates reflect immediately
    cache: 'no-store',
    next: { revalidate: 0 }
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase provider fetch failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) && data.length ? data[0] : null };
}

export async function deleteProviderFromSupabase(providerId: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { skipped: true };
  const endpoint = `${SUPABASE_URL}/rest/v1/providers?id=eq.${encodeURIComponent(providerId)}`;
  const res = await fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=representation'
    }
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase provider delete failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) ? data[0] : data };
}

export async function authenticateProvider(email: string, password: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { data: null };
  const endpoint = `${SUPABASE_URL}/rest/v1/providers?select=*&email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}`;
  const res = await fetch(endpoint, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` }
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase provider authentication failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) && data.length ? data[0] : null };
}

export async function getProviderLeadsFromSupabase(providerId: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { data: [] };
  const endpoint = `${SUPABASE_URL}/rest/v1/leads?select=*&providerid=eq.${encodeURIComponent(providerId)}`;
  const res = await fetch(endpoint, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` }
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase provider leads fetch failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data };
}

export async function updateProviderInSupabase(providerId: string, updates: Partial<ProviderInsert>) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { skipped: true };
  const endpoint = `${SUPABASE_URL}/rest/v1/providers?id=eq.${encodeURIComponent(providerId)}`;
  const res = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify(updates)
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase provider update failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) ? data[0] : data };
}

export async function uploadImageToSupabaseStorage(file: File, pathPrefix: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { skipped: true };
  // Using the Storage API via REST
  const bucket = (process.env.NEXT_PUBLIC_SUPABASE_BUCKET as string | undefined) || 'providers';
  const fileName = `${pathPrefix}/${Date.now()}-${encodeURIComponent(file.name)}`;
  const endpoint = `${SUPABASE_URL}/storage/v1/object/${bucket}/${fileName}`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    body: file
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase storage upload failed: HTTP ${res.status} ${text}`);
  }
  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${fileName}`;
  return { url: publicUrl };
}


