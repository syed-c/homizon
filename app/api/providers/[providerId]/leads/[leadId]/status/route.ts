import { NextRequest, NextResponse } from 'next/server';
import { getMockLeads, updateMockLeads } from '../../../../../leads/shared-data';

export async function POST(
  request: NextRequest,
  { params }: { params: { providerId: string; leadId: string } }
) {
  try {
    const { providerId, leadId } = params;
    const { status } = await request.json();
    
    console.log(`Provider ${providerId} updating lead ${leadId} status to: ${status}`);

    // Get current leads
    const leads = getMockLeads();
    
    // Find the lead
    const leadIndex = leads.findIndex(lead => lead.id === leadId);
    if (leadIndex === -1) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const lead = leads[leadIndex];
    
    // Verify this provider owns this lead
    if (lead.providerId !== providerId && !lead.assignedProviders?.includes(providerId)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    
    // Update the lead status
    leads[leadIndex] = {
      ...lead,
      status,
      updatedAt: new Date().toISOString(),
      lastContact: new Date().toISOString()
    };

    // Update the shared data
    updateMockLeads(leads);

    // Trigger notifications based on status change
    if (status === 'in_progress') {
      await notifyCustomerJobStarted(lead, providerId);
    } else if (status === 'completed') {
      await notifyCustomerJobCompleted(lead, providerId);
    }

    console.log(`Lead ${leadId} status updated to ${status}`);

    return NextResponse.json({ 
      success: true, 
      message: `Lead status updated to ${status}`,
      lead: leads[leadIndex]
    });

  } catch (error) {
    console.error('Error updating lead status:', error);
    return NextResponse.json({ error: 'Failed to update lead status' }, { status: 500 });
  }
}

// Helper function to notify customer when job starts
async function notifyCustomerJobStarted(lead: any, providerId: string) {
  try {
    console.log(`Notifying customer ${lead.name} that job has started`);
    
    // Mock provider data (in production, fetch from database)
    const providerData = {
      name: 'Ahmed Al-Rashid',
      company: 'Cool Breeze AC Services',
      phone: '+971501234567'
    };

    // Mock notification sending
    console.log('Sending job started notification:', {
      customerPhone: lead.phone,
      message: `Your ${lead.serviceCategory} service has started! ${providerData.name} is now working on your request. Contact: ${providerData.phone}`
    });

  } catch (error) {
    console.error('Error sending job started notification:', error);
  }
}

// Helper function to notify customer when job is completed
async function notifyCustomerJobCompleted(lead: any, providerId: string) {
  try {
    console.log(`Notifying customer ${lead.name} that job is completed`);
    
    // Mock provider data (in production, fetch from database)
    const providerData = {
      name: 'Ahmed Al-Rashid',
      company: 'Cool Breeze AC Services',
      phone: '+971501234567'
    };

    // Mock notification sending
    console.log('Sending job completed notification:', {
      customerPhone: lead.phone,
      message: `Great news! Your ${lead.serviceCategory} service has been completed by ${providerData.name}. Please rate your experience on our platform.`
    });

  } catch (error) {
    console.error('Error sending job completed notification:', error);
  }
}