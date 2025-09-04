import { NextRequest, NextResponse } from 'next/server';
import { getMockLeads, updateMockLeads } from '../../../../../leads/shared-data';

export async function POST(
  request: NextRequest,
  { params }: { params: { providerId: string; leadId: string } }
) {
  try {
    const { providerId, leadId } = params;
    const { response } = await request.json();
    
    console.log(`Provider ${providerId} responding to lead ${leadId} with: ${response}`);

    // Get current leads
    const leads = getMockLeads();
    
    // Find the lead
    const leadIndex = leads.findIndex(lead => lead.id === leadId);
    if (leadIndex === -1) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const lead = leads[leadIndex];
    
    // Update the lead based on response
    if (response === 'accepted') {
      leads[leadIndex] = {
        ...lead,
        providerId,
        providerResponse: 'accepted',
        status: 'assigned',
        assignedProviders: [providerId],
        updatedAt: new Date().toISOString(),
        lastContact: new Date().toISOString()
      };
      
      console.log(`Lead ${leadId} accepted by provider ${providerId}`);
      
      // Here you would trigger notifications to:
      // 1. Customer - notify them that a provider has been assigned
      // 2. Other providers - hide this lead from their available leads
      await notifyCustomerProviderAssigned(lead, providerId);
      
    } else if (response === 'declined') {
      // For declined leads, we don't assign the provider
      // The lead remains available for other providers
      console.log(`Lead ${leadId} declined by provider ${providerId}`);
      
      // Optionally track which providers have declined
      const declinedProviders = lead.declinedProviders || [];
      leads[leadIndex] = {
        ...lead,
        declinedProviders: [...declinedProviders, providerId],
        updatedAt: new Date().toISOString()
      };
    }

    // Update the shared data
    updateMockLeads(leads);

    return NextResponse.json({ 
      success: true, 
      message: `Lead ${response} successfully`,
      lead: leads[leadIndex]
    });

  } catch (error) {
    console.error('Error responding to lead:', error);
    return NextResponse.json({ error: 'Failed to respond to lead' }, { status: 500 });
  }
}

// Helper function to notify customer when provider is assigned
async function notifyCustomerProviderAssigned(lead: any, providerId: string) {
  try {
    console.log(`Notifying customer ${lead.name} that provider ${providerId} has been assigned`);
    
    // In production, this would:
    // 1. Load notification settings
    // 2. Get provider details
    // 3. Send WhatsApp/SMS/Email to customer with provider contact info
    // 4. Send notification to provider with customer details
    
    // Mock provider data (in production, fetch from database)
    const providerData = {
      name: 'Ahmed Al-Rashid',
      company: 'Cool Breeze AC Services',
      phone: '+971501234567',
      responseTime: '30 minutes'
    };

    // Mock notification sending
    console.log('Sending customer notification:', {
      customerPhone: lead.phone,
      message: `Great news! ${providerData.name} from ${providerData.company} will handle your ${lead.serviceCategory} request. They will contact you within ${providerData.responseTime}.`
    });

    console.log('Sending provider notification:', {
      providerPhone: providerData.phone,
      message: `New lead assigned! Customer: ${lead.name}, Service: ${lead.serviceCategory}, Area: ${lead.area}. Contact: ${lead.phone}`
    });

  } catch (error) {
    console.error('Error sending notifications:', error);
  }
}