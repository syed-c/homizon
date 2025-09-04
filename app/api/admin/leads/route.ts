import { NextRequest, NextResponse } from 'next/server';

// Import the leads data from the main leads API to ensure consistency
// In production, both would use the same database
import { getMockLeads, updateMockLeads } from '../../leads/shared-data';

export async function GET(request: NextRequest) {
  try {
    console.log('Admin leads API: GET request received');

    // Get leads from shared data source
    const leadsData = getMockLeads();
    
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

    // Get current leads data
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