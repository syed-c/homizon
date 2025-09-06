import { NextRequest, NextResponse } from 'next/server';
import { getMockLeads } from '../../../leads/shared-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { providerId: string } }
) {
  try {
    const providerId = params.providerId;
    console.log('Getting leads for provider:', providerId);


    // Get leads from Supabase
    const { listLeadsFromSupabase } = await import('@/lib/supabase');
    const { data } = await listLeadsFromSupabase();
    
    if (Array.isArray(data)) {
      const allLeads = data.map(l => ({
        id: l.id,
        name: l.name,
        phone: l.phone,
        email: l.email || '',
        serviceCategory: l.servicecategory,
        subServices: l.subservices || [],
        area: l.area,
        subArea: l.subarea || '',
        address: l.address || '',
        description: l.description || '',
        urgency: (l.urgency || 'normal') as any,
        status: (l.status || 'new') as any,
        createdAt: l.createdat || new Date().toISOString(),
        updatedAt: l.updatedat || l.createdat || new Date().toISOString(),
        source: l.source || 'supabase',
        whatsapp: !!l.whatsapp,
        assignedProviders: l.providerid ? [l.providerid] : [],
        providerId: l.providerid || undefined,
        providerName: l.providername || undefined,
        responses: 0,
      }));
      
      // Filter leads for this provider
      const providerLeads = allLeads.filter(lead => {
        return lead.providerId === providerId;
      });
      
      return NextResponse.json(providerLeads);
    }
    
    return NextResponse.json({ debug: true, error: 'No data from Supabase' });
    
  } catch (error) {
    console.error('Error fetching provider leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}