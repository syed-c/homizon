import { NextRequest, NextResponse } from 'next/server';
import { getMockLeads } from '../../../leads/shared-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { providerId: string } }
) {
  try {
    const providerId = params.providerId;
    console.log('Getting stats for provider:', providerId);

    // Get all leads from shared data
    const allLeads = getMockLeads();
    
    // Filter leads for this provider
    const providerLeads = allLeads.filter(lead => 
      lead.providerId === providerId || 
      (lead.assignedProviders && lead.assignedProviders.includes(providerId))
    );

    // Calculate stats
    const totalLeads = providerLeads.length;
    const acceptedLeads = providerLeads.filter(lead => 
      lead.status === 'assigned' || lead.status === 'accepted' || 
      lead.status === 'in_progress' || lead.status === 'completed'
    ).length;
    const completedJobs = providerLeads.filter(lead => lead.status === 'completed').length;
    
    // Mock additional stats (in production, these would come from provider profile/database)
    const stats = {
      totalLeads,
      acceptedLeads,
      completedJobs,
      averageRating: 4.9,
      responseTime: '30 min',
      earnings: completedJobs * 250 // Mock calculation
    };

    console.log(`Provider ${providerId} stats:`, stats);
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching provider stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}