// Shared data storage for leads (in production, this would be a database)
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

// Export functions to access and modify the shared data
export function getMockLeads(): any[] {
  return mockLeads;
}

export function addMockLead(lead: any): void {
  mockLeads.push(lead);
  console.log('Added new lead to shared storage:', lead.id);
}

export function updateMockLeads(newLeads: any[]): void {
  mockLeads = newLeads;
  console.log('Updated shared leads storage');
}

export function updateMockLead(leadId: string, updates: any): boolean {
  const index = mockLeads.findIndex(lead => lead.id === leadId);
  if (index !== -1) {
    mockLeads[index] = { ...mockLeads[index], ...updates };
    console.log('Updated lead in shared storage:', leadId);
    return true;
  }
  return false;
}