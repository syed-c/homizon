import { NextRequest, NextResponse } from 'next/server';

// Import the leads data from the main leads API to ensure consistency
// In production, both would use the same database
import { getMockLeads, updateMockLeads } from '../../leads/shared-data';

export async function GET(request: NextRequest) {
  try {
    console.log('Admin leads API: GET request received');

    // Try to get leads from Supabase first
    let leadsData: any[] = [];
    try {
      const { listLeadsFromSupabase } = await import('@/lib/supabase');
      const { data } = await listLeadsFromSupabase();
      console.log('Raw Supabase data:', data);
      
      if (Array.isArray(data)) {
        leadsData = data.map(l => ({
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
        console.log(`Fetched ${leadsData.length} leads from Supabase`);
        console.log('Sample leads from Supabase:', leadsData.slice(0, 2).map(l => ({ id: l.id, providerId: l.providerId, providerName: l.providerName })));
      } else {
        console.log('No data from Supabase, using mock data');
        leadsData = getMockLeads();
      }
    } catch (supabaseError) {
      console.log('Supabase fetch failed, using mock data:', supabaseError);
      // Fallback to mock data
      leadsData = getMockLeads();
    }
    
    // Sort by creation date (newest first) for admin view
    const sortedLeads = leadsData.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    console.log(`Returning ${sortedLeads.length} leads to admin dashboard`);
    return NextResponse.json(sortedLeads);
  } catch (error) {
    console.error('Error in admin leads GET:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Admin leads API: POST request received');
    
    const data = await request.json();
    console.log('Received leads data for update:', data);

    // Update shared leads data
    updateMockLeads(data);

    // Simulate instant save and notification
    console.log('Leads data updated successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Leads updated successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin leads POST:', error);
    return NextResponse.json({ error: 'Failed to update leads' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log('Admin leads API: PUT request received for lead assignment');
    
    const { leadId, providerId, action } = await request.json();
    console.log('Processing lead action:', { leadId, providerId, action });

    // Try to update in Supabase first
    try {
      const { assignLeadToProvider, deassignLeadFromProvider } = await import('@/lib/supabase');
      
      if (action === 'assign') {
        const result = await assignLeadToProvider(leadId, providerId);
        
        if (result.success) {
          console.log('Lead assigned in Supabase successfully:', leadId, 'to provider:', providerId);
          
          // Trigger notifications when lead is assigned
          triggerLeadAssignmentNotifications({ id: leadId, providerId }, providerId);
          
          return NextResponse.json({ 
            success: true, 
            message: 'Lead assigned successfully',
            timestamp: new Date().toISOString()
          });
        }
      } else if (action === 'deassign') {
        const result = await deassignLeadFromProvider(leadId);
        
        if (result.success) {
          console.log('Lead de-assigned in Supabase successfully:', leadId);
          
          return NextResponse.json({ 
            success: true, 
            message: 'Lead de-assigned successfully',
            timestamp: new Date().toISOString()
          });
        }
      }
    } catch (supabaseError) {
      console.log('Supabase update failed, using mock data:', supabaseError);
    }

    // Fallback to mock data update
    const leadsData = getMockLeads();
    
    // Update specific lead
    const updatedLeads = leadsData.map(lead => {
      if (lead.id === leadId) {
        const updatedLead = { ...lead };
        
        if (action === 'assign') {
          updatedLead.assignedProvider = providerId;
          updatedLead.providerId = providerId;
          updatedLead.status = 'assigned';
          updatedLead.assignedProviders = [providerId];
          
          console.log('Lead assignment details:', {
            leadId,
            providerId,
            oldStatus: lead.status,
            newStatus: updatedLead.status,
            assignedProviders: updatedLead.assignedProviders
          });
          
          // Trigger notifications when lead is assigned
          triggerLeadAssignmentNotifications(updatedLead, providerId);
        } else if (action === 'updateStatus') {
          updatedLead.status = providerId; // providerId is actually status in this case
        }
        
        updatedLead.lastContact = new Date().toISOString();
        updatedLead.updatedAt = new Date().toISOString();
        return updatedLead;
      }
      return lead;
    });

    // Update the shared data
    updateMockLeads(updatedLeads);

    console.log('Lead updated successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Lead updated successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin leads PUT:', error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}

// Helper function to trigger notifications when lead is assigned
async function triggerLeadAssignmentNotifications(lead: any, providerId: string) {
  try {
    console.log(`Triggering notifications for lead assignment: ${lead.id} to provider ${providerId}`);
    
    // In production, this would:
    // 1. Load notification settings from the database
    // 2. Get provider details from the database
    // 3. Send actual notifications via WhatsApp/SMS/Email APIs
    
    // Mock notification data
    const notificationData = {
      customerName: lead.name,
      customerPhone: lead.phone,
      customerEmail: lead.email,
      serviceName: lead.serviceCategory,
      areaName: lead.area,
      providerName: 'Ahmed Al-Rashid', // In production, fetch from provider database
      companyName: 'Cool Breeze AC Services',
      providerPhone: '+971501234567',
      responseTime: '30 minutes',
      estimatedTime: 'Within 2 hours'
    };

    // Log what notifications would be sent
    console.log('Would send provider notification:', {
      to: notificationData.providerPhone,
      message: `New lead assigned! Customer: ${notificationData.customerName}, Service: ${notificationData.serviceName}, Area: ${notificationData.areaName}. Contact: ${notificationData.customerPhone}`
    });

    console.log('Would send customer notification:', {
      to: notificationData.customerPhone,
      message: `Great news! ${notificationData.providerName} from ${notificationData.companyName} will handle your ${notificationData.serviceName} request. They will contact you within ${notificationData.responseTime}.`
    });

  } catch (error) {
    console.error('Error triggering notifications:', error);
  }
}