import { NextRequest, NextResponse } from 'next/server';
import { getMockLeads, addMockLead, updateMockLead } from './shared-data';

// In-memory storage for leads (in production, this would be a database)
let mockLeads: any[] = [
  {
    id: 'LEAD_1734562891234_abc123def',
    name: 'Ahmed Al-Mansouri',
    phone: '+971 50 123 4567',
    email: 'ahmed.mansouri@gmail.com',
    serviceCategory: 'ac-repair-cleaning',
    subServices: ['ac-repair'],
    area: 'Dubai Marina',
    subArea: 'Marina Walk',
    address: 'Marina Residence Tower A, Apt 1205, Dubai Marina',
    description: 'My AC is not cooling properly and making strange noises. Need urgent repair.',
    urgency: 'urgent',
    status: 'new',
    createdAt: '2024-12-18T10:30:00.000Z',
    updatedAt: '2024-12-18T10:30:00.000Z',
    source: 'booking_form',
    whatsapp: true,
    assignedProviders: [],
    responses: 0
  },
  {
    id: 'LEAD_1734562891235_def456ghi',
    name: 'Sarah Johnson',
    phone: '+971 55 987 6543',
    email: 'sarah.j@email.com',
    serviceCategory: 'deep-cleaning',
    subServices: ['deep-home-cleaning', 'sofa-cleaning'],
    area: 'Business Bay',
    subArea: '',
    address: 'Executive Towers, Tower B, Floor 15, Business Bay',
    description: 'Need deep cleaning for my 2-bedroom apartment before moving out.',
    urgency: 'normal',
    status: 'contacted',
    createdAt: '2024-12-18T09:15:00.000Z',
    updatedAt: '2024-12-18T11:45:00.000Z',
    source: 'booking_form',
    whatsapp: true,
    assignedProviders: ['provider-123'],
    responses: 2
  },
  {
    id: 'LEAD_1734562891236_ghi789jkl',
    name: 'Mohammad Hassan',
    phone: '+971 56 234 5678',
    email: '',
    serviceCategory: 'plumbing',
    subServices: ['plumbing-repair'],
    area: 'Downtown Dubai',
    subArea: 'Burj Khalifa District',
    address: 'Address Downtown, Tower 1, Unit 3408',
    description: 'Kitchen sink is blocked and water is overflowing. Emergency repair needed.',
    urgency: 'emergency',
    status: 'assigned',
    createdAt: '2024-12-18T14:20:00.000Z',
    updatedAt: '2024-12-18T14:35:00.000Z',
    source: 'website_phone',
    whatsapp: false,
    assignedProviders: ['provider-456'],
    responses: 1
  },
  {
    id: 'LEAD_1734562891237_jkl012mno',
    name: 'Fatima Al-Zahra',
    phone: '+971 52 345 6789',
    email: 'fatima.zahra@yahoo.com',
    serviceCategory: 'pest-control',
    subServices: ['general-pest-control', 'cockroach-control'],
    area: 'Al Barsha',
    subArea: 'Al Barsha 1',
    address: 'Villa 45, Street 12, Al Barsha 1',
    description: 'Having issues with cockroaches in kitchen. Need professional treatment.',
    urgency: 'normal',
    status: 'completed',
    createdAt: '2024-12-17T16:45:00.000Z',
    updatedAt: '2024-12-18T08:30:00.000Z',
    source: 'booking_form',
    whatsapp: true,
    assignedProviders: ['provider-789'],
    responses: 3
  },
  {
    id: 'LEAD_1734562891238_mno345pqr',
    name: 'John Smith',
    phone: '+971 50 456 7890',
    email: 'john.smith@company.com',
    serviceCategory: 'electrician',
    subServices: ['electrical-repair', 'light-installation'],
    area: 'JBR',
    subArea: 'The Walk',
    address: 'Amwaj Tower 4, Apartment 2204, JBR',
    description: 'Need to install new ceiling lights and fix some electrical outlets.',
    urgency: 'normal',
    status: 'new',
    createdAt: '2024-12-18T13:10:00.000Z',
    updatedAt: '2024-12-18T13:10:00.000Z',
    source: 'booking_form',
    whatsapp: true,
    assignedProviders: [],
    responses: 0
  }
];

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Creating new lead:', body)

    // Generate unique lead ID
    const leadId = `LEAD_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Create new lead with all required fields
    const newLead = {
      id: leadId,
      area: body.area || '',
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      source: body.source || 'booking_form',
      status: body.status || 'new',
      address: body.address || '',
      subArea: body.subArea || '',
      urgency: body.urgency || 'normal',
      whatsapp: body.whatsapp || false,
      createdAt: new Date().toISOString(),
      responses: 0,
      updatedAt: new Date().toISOString(),
      description: body.description || '',
      subServices: body.subServices || [body.serviceCategory],
      serviceCategory: body.serviceCategory || '',
      assignedProviders: body.providerId ? [body.providerId] : [],
      providerId: body.providerId || null,
      providerName: body.providerName || null,
      preferredTime: body.preferredTime || ''
    }

    // Add to shared data (in production, this would save to database)
    addMockLead(newLead)
    
    console.log('Lead created successfully:', leadId)
    return NextResponse.json({ 
      success: true, 
      leadId,
      message: 'Lead created successfully' 
    })

  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}

// ADDED: Handle PUT requests for lead updates and assignments
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    console.log('Updating lead:', body)

    const { leadId, providerId, status, action } = body

    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      )
    }

    // Get current leads data
    const mockLeads = getMockLeads();
    
    // Find the lead to update
    const leadIndex = mockLeads.findIndex(lead => lead.id === leadId)
    
    if (leadIndex === -1) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      )
    }

    // Update the lead based on action
    let updatedLead;
    if (action === 'assign_provider' && providerId) {
      updatedLead = {
        ...mockLeads[leadIndex],
        assignedProviders: [providerId],
        status: 'assigned',
        updatedAt: new Date().toISOString()
      }
      console.log(`Lead ${leadId} assigned to provider ${providerId}`)
    } else if (status) {
      updatedLead = {
        ...mockLeads[leadIndex],
        status,
        updatedAt: new Date().toISOString()
      }
      console.log(`Lead ${leadId} status updated to ${status}`)
    }

    // Update the lead in shared data
    if (updatedLead) {
      updateMockLead(leadId, updatedLead);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Lead updated successfully',
      lead: updatedLead || mockLeads[leadIndex]
    })

  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '50');
  const offset = parseInt(url.searchParams.get('offset') || '0');
  
  // Get shared leads data
  const mockLeads = getMockLeads();
  
  // Return recent leads (sorted by creation date)
  const recentLeads = mockLeads
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(offset, offset + limit);
  
  return NextResponse.json({
    leads: recentLeads,
    total: mockLeads.length,
    hasMore: offset + limit < mockLeads.length
  });
}

// Helper function to find matching providers
function findMatchingProviders(leadData: any) {
  // Mock provider matching logic
  // In production, this would query your provider database
  const mockProviders = [
    { id: 'provider1', name: 'Ahmed Hassan', rating: 4.8, responseTime: '15 min' },
    { id: 'provider2', name: 'Sarah Mohammed', rating: 4.9, responseTime: '20 min' },
    { id: 'provider3', name: 'Omar Ali', rating: 4.7, responseTime: '10 min' }
  ];
  
  // Filter providers based on service and area
  return mockProviders.filter(provider => {
    // Add your matching logic here
    return true;
  });
}

// Helper function to notify providers
async function notifyProviders(lead: any, providers: any[]) {
  console.log(`Notifying ${providers.length} providers about lead ${lead.id}`);
  
  // In production, send SMS/email notifications to providers
  // await sendSMS(provider.phone, `New ${lead.serviceCategory} lead in ${lead.area}`);
  // await sendEmail(provider.email, leadNotificationTemplate);
  
  return Promise.resolve();
}

// Helper function to send customer confirmation
async function sendCustomerConfirmation(lead: any) {
  console.log(`Sending confirmation to customer ${lead.name} at ${lead.phone}`);
  
  // In production, send confirmation SMS/email
  // await sendSMS(lead.phone, confirmationMessage);
  // if (lead.email) await sendEmail(lead.email, confirmationTemplate);
  
  return Promise.resolve();
}