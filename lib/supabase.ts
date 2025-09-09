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

// Services (CMS) -------------------------------------------------------------
export type ServiceRow = {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'inactive' | 'deleted';
  created_at?: string;
  updated_at?: string;
  category_id?: string | null;
};

export async function listServicesFromSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase not configured; returning empty services list');
    return { data: [] as ServiceRow[] };
  }
  const endpoint = `${SUPABASE_URL}/rest/v1/services?select=*`;
  const res = await fetch(endpoint, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    cache: 'no-store'
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase services fetch failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: (data || []) as ServiceRow[] };
}

export async function createServiceInSupabase(name: string, slug: string, categoryId?: string | null) {
  // Route creation through our server API so the service role key stays server-side
  const res = await fetch('/api/admin/services', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, slug, category_id: categoryId || null })
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Supabase create service failed: HTTP ${res.status} ${JSON.stringify(json)}`);
  }
  return { data: json.data as ServiceRow };
}

export async function updateServiceStatusInSupabase(serviceId: string, status: 'active' | 'inactive' | 'deleted') {
  if (!SUPABASE_URL || (!SUPABASE_ANON_KEY && !SUPABASE_SERVICE_ROLE_KEY)) return { skipped: true };
  const endpoint = `${SUPABASE_URL}/rest/v1/services?id=eq.${encodeURIComponent(serviceId)}`;
  const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  const res = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: apiKey as string,
      Authorization: `Bearer ${apiKey}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify({ status, updated_at: new Date().toISOString() })
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase update service failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) ? data[0] : data };
}

export async function deleteServiceFromSupabase(serviceId: string, slug?: string) {
  // Route delete through our server API to enforce DB delete and page cleanup
  const url = `/api/admin/services?id=${encodeURIComponent(serviceId)}${slug ? `&slug=${encodeURIComponent(slug)}` : ''}`;
  const res = await fetch(url, { method: 'DELETE' });
  if (!res.ok) {
    const json = await res.json().catch(() => ({}));
    throw new Error(`Supabase delete service failed: HTTP ${res.status} ${JSON.stringify(json)}`);
  }
  return { success: true };
}

export async function getServiceBySlugFromSupabase(slug: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { data: null };
  const endpoint = `${SUPABASE_URL}/rest/v1/services?select=*&slug=eq.${encodeURIComponent(slug)}`;
  const res = await fetch(endpoint, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    cache: 'no-store'
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase service by slug failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) && data.length ? (data[0] as ServiceRow) : null };
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

// Pages Content Management
export type PageContentInsert = {
  id?: string;
  page_slug: string;
  content: any; // JSONB content
  meta_title: string;
  meta_description: string;
  updated_at?: string;
};

export async function getPageContentFromSupabase(pageSlug: string) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { data: null };
  
  // Handle empty slug for home page (empty string in database)
  const queryParam = (pageSlug === '' || pageSlug === null || pageSlug === '/') ? 'page_slug=eq.' : `page_slug=eq.${encodeURIComponent(pageSlug)}`;
  const endpoint = `${SUPABASE_URL}/rest/v1/pages_content?select=*&${queryParam}`;
  
  // Use service role key if available, otherwise fall back to anon key
  const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  
  const res = await fetch(endpoint, {
    headers: { apikey: apiKey, Authorization: `Bearer ${apiKey}` },
    cache: 'no-store'
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase page content fetch failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) && data.length ? data[0] : null };
}

export async function savePageContentToSupabase(pageContent: PageContentInsert) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { skipped: true };
  
  try {
    console.log('Saving to Supabase:', pageContent);
    const endpoint = `${SUPABASE_URL}/rest/v1/pages_content`;
    
    // Use service role key if available, otherwise fall back to anon key
    const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
    console.log('Using API key type:', SUPABASE_SERVICE_ROLE_KEY ? 'Service Role' : 'Anonymous');
    
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
        Prefer: 'return=representation'
      },
      body: JSON.stringify({
        ...pageContent,
        updated_at: new Date().toISOString()
      })
    });
    
    console.log('Supabase response status:', res.status);
    
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('Supabase error response:', text);
      throw new Error(`Supabase page content insert failed: HTTP ${res.status} ${text}`);
    }
    
    const data = await res.json();
    console.log('Supabase response data:', data);
    return { data: Array.isArray(data) ? data[0] : data };
  } catch (error) {
    console.error('Error in savePageContentToSupabase:', error);
    throw error;
  }
}

export async function updatePageContentInSupabase(pageSlug: string, updates: Partial<PageContentInsert>) {
  console.log('updatePageContentInSupabase called with:', { pageSlug, updates });
  console.log('Environment variables:', {
    SUPABASE_URL: SUPABASE_URL ? 'Set' : 'Missing',
    SUPABASE_ANON_KEY: SUPABASE_ANON_KEY ? 'Set' : 'Missing',
    SUPABASE_SERVICE_ROLE_KEY: SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Missing'
  });
  
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.log('Missing Supabase environment variables, skipping operation');
    return { skipped: true };
  }
  
  try {
    console.log('Updating page content in Supabase:', pageSlug, updates);
    
    // First check if the record exists
    console.log('Checking if record exists...');
    const existingRecord = await getPageContentFromSupabase(pageSlug);
    console.log('Existing record:', existingRecord);
    
    if (!existingRecord.data) {
      // Record doesn't exist, create it instead
      console.log('Record does not exist, creating new one');
      return await savePageContentToSupabase({
        page_slug: (pageSlug === '' || pageSlug === '/') ? '' : pageSlug,
        content: updates.content,
        meta_title: updates.meta_title || '',
        meta_description: updates.meta_description || ''
      });
    }
    
    // Handle empty slug for home page (empty string in database)
    const queryParam = (pageSlug === '' || pageSlug === null || pageSlug === '/') ? 'page_slug=eq.' : `page_slug=eq.${encodeURIComponent(pageSlug)}`;
    const endpoint = `${SUPABASE_URL}/rest/v1/pages_content?${queryParam}`;
    
    console.log('Update endpoint:', endpoint);
    console.log('Update data:', updates);
    
    const requestBody = {
      ...updates,
      updated_at: new Date().toISOString()
    };
    
    console.log('Request body:', requestBody);
    
    // Use service role key if available, otherwise fall back to anon key
    const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
    console.log('Using API key type for update:', SUPABASE_SERVICE_ROLE_KEY ? 'Service Role' : 'Anonymous');
    
    const res = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
        Prefer: 'return=representation'
      },
      body: JSON.stringify(requestBody)
    });
    
    console.log('Update response status:', res.status);
    console.log('Update response headers:', Object.fromEntries(res.headers.entries()));
    
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('Update error response:', text);
      throw new Error(`Supabase page content update failed: HTTP ${res.status} ${text}`);
    }
    
    const data = await res.json();
    console.log('Update response data:', data);
    return { data: Array.isArray(data) ? data[0] : data };
  } catch (error) {
    console.error('Error in updatePageContentInSupabase:', error);
    console.error('Error stack:', error.stack);
    throw error;
  }
}

export async function listAllPagesContentFromSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return { data: [] };
  
  try {
    const endpoint = `${SUPABASE_URL}/rest/v1/pages_content?select=*&order=updated_at.desc`;
    
    // Use service role key if available, otherwise fall back to anon key
    const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
    
    const res = await fetch(endpoint, {
      headers: { 
        apikey: apiKey, 
        Authorization: `Bearer ${apiKey}`,
        'Cache-Control': 'no-cache'
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Supabase pages content fetch failed: HTTP ${res.status} ${text}`);
    }
    
    const data = await res.json();
    return { data: data || [] };
  } catch (error) {
    console.error('Error in listAllPagesContentFromSupabase:', error);
    return { data: [] };
  }
}


// Areas (CMS) ---------------------------------------------------------------
export type AreaRow = {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'inactive' | 'deleted';
  featured?: boolean;
  services?: string[] | null; // array of service slugs enabled for this area
  sector?: string | null;
  description?: string | null;
  created_at?: string;
  updated_at?: string;
};

export async function listAreasFromSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase not configured; returning empty areas list');
    return { data: [] as AreaRow[] };
  }
  const endpoint = `${SUPABASE_URL}/rest/v1/areas?select=*`;
  const res = await fetch(endpoint, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
    cache: 'no-store'
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase areas fetch failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: (data || []) as AreaRow[] };
}

export async function createAreaInSupabase(name: string, slug: string, services: string[], featured: boolean) {
  // Route creation through our server API so the service role key stays server-side and we can seed pages_content
  const res = await fetch('/api/admin/areas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, slug, services, featured })
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Create area failed: HTTP ${res.status} ${JSON.stringify(json)}`);
  }
  return { data: json.data as AreaRow };
}

export async function updateAreaStatusInSupabase(areaId: string, status: 'active' | 'inactive' | 'deleted') {
  if (!SUPABASE_URL || (!SUPABASE_ANON_KEY && !SUPABASE_SERVICE_ROLE_KEY)) return { skipped: true };
  const endpoint = `${SUPABASE_URL}/rest/v1/areas?id=eq.${encodeURIComponent(areaId)}`;
  const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  const res = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: apiKey as string,
      Authorization: `Bearer ${apiKey}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify({ status, updated_at: new Date().toISOString() })
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase update area failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) ? data[0] : data };
}

export async function deleteAreaFromSupabase(areaId: string, slug?: string) {
  // Route delete through our server API to enforce DB delete and page_content cleanup
  const url = `/api/admin/areas?id=${encodeURIComponent(areaId)}${slug ? `&slug=${encodeURIComponent(slug)}` : ''}`;
  const res = await fetch(url, { method: 'DELETE' });
  if (!res.ok) {
    const json = await res.json().catch(() => ({}));
    throw new Error(`Delete area failed: HTTP ${res.status} ${JSON.stringify(json)}`);
  }
  return { success: true };
}

export async function updateAreaInSupabase(areaId: string, updates: Partial<AreaRow>) {
  if (!SUPABASE_URL || (!SUPABASE_ANON_KEY && !SUPABASE_SERVICE_ROLE_KEY)) return { skipped: true };
  const endpoint = `${SUPABASE_URL}/rest/v1/areas?id=eq.${encodeURIComponent(areaId)}`;
  const apiKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;
  const res = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: apiKey as string,
      Authorization: `Bearer ${apiKey}`,
      Prefer: 'return=representation'
    },
    body: JSON.stringify({
      ...updates,
      updated_at: new Date().toISOString()
    })
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase update area failed: HTTP ${res.status} ${text}`);
  }
  const data = await res.json();
  return { data: Array.isArray(data) ? data[0] : data };
}

