import { NextRequest, NextResponse } from 'next/server';
import { getMockLeads } from '../../../leads/shared-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { providerId: string } }
) {
  try {
    const providerId = params.providerId;
    console.log('Getting leads for provider:', providerId);

    // Get all leads from shared data
    const allLeads = getMockLeads();
    
    // Filter leads for this provider
    // Include leads that are:
    // 1. Assigned to this provider
    // 2. General leads that haven't been assigned yet (for the provider to see available leads)
    const providerLeads = allLeads.filter(lead => {
      // Show leads assigned to this provider
      if (lead.providerId === providerId) {
        return true;
      }
      
      // Show unassigned leads that match provider's services/areas
      // For now, show all unassigned leads (in production, filter by provider's services/areas)
      if (lead.status === 'new' && !lead.providerId) {
        return true;
      }
      
      return false;
    });

    console.log(`Found ${providerLeads.length} leads for provider ${providerId}`);
    
    return NextResponse.json(providerLeads);
  } catch (error) {
    console.error('Error fetching provider leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}