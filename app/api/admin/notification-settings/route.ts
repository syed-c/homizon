import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'notification-settings.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Default notification settings
const defaultSettings = {
  whatsapp: {
    enabled: false,
    apiKey: '',
    phoneNumber: '',
    businessName: 'Homizon',
    templates: {
      leadAssigned: 'New lead assigned! Customer: {{customerName}}, Service: {{serviceName}}, Area: {{areaName}}. Contact: {{customerPhone}}',
      customerNotification: 'Great news! {{providerName}} from {{companyName}} will handle your {{serviceName}} request. They will contact you at {{customerPhone}} within {{responseTime}}.',
      providerAccepted: '{{providerName}} has accepted your {{serviceName}} request in {{areaName}}. Expected arrival: {{estimatedTime}}. Contact: {{providerPhone}}'
    }
  },
  sms: {
    enabled: false,
    provider: 'twilio',
    apiKey: '',
    senderId: 'HOMIZON',
    templates: {
      leadAssigned: 'New lead: {{customerName}} needs {{serviceName}} in {{areaName}}. Contact: {{customerPhone}}',
      customerNotification: '{{providerName}} assigned to your {{serviceName}} request. Contact: {{providerPhone}}',
      providerAccepted: 'Service confirmed! {{providerName}} will arrive at {{estimatedTime}}. Contact: {{providerPhone}}'
    }
  },
  email: {
    enabled: false,
    smtpHost: '',
    smtpPort: '587',
    smtpUser: '',
    smtpPassword: '',
    fromEmail: 'noreply@homizon.com',
    fromName: 'Homizon Support',
    templates: {
      leadAssigned: 'You have a new service request from {{customerName}} for {{serviceName}} in {{areaName}}.',
      customerNotification: 'Your service request has been assigned to {{providerName}} from {{companyName}}.',
      providerAccepted: 'Your service provider {{providerName}} has confirmed your appointment.'
    }
  }
};

export async function GET() {
  try {
    await ensureDataDirectory();
    
    try {
      const data = await fs.readFile(SETTINGS_FILE, 'utf-8');
      const settings = JSON.parse(data);
      return NextResponse.json(settings);
    } catch (error) {
      // File doesn't exist, return default settings
      console.log('Notification settings file not found, returning defaults');
      return NextResponse.json(defaultSettings);
    }
  } catch (error) {
    console.error('Error reading notification settings:', error);
    return NextResponse.json({ error: 'Failed to load settings' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataDirectory();
    
    const settings = await request.json();
    console.log('Saving notification settings:', Object.keys(settings));
    
    // Validate settings structure
    if (!settings.whatsapp || !settings.sms || !settings.email) {
      return NextResponse.json({ error: 'Invalid settings structure' }, { status: 400 });
    }
    
    // Save to file
    await fs.writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2));
    
    console.log('Notification settings saved successfully');
    return NextResponse.json({ success: true, message: 'Settings saved successfully' });
  } catch (error) {
    console.error('Error saving notification settings:', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}