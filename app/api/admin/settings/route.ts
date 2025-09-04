import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for settings (in production, this would be a database)
let platformSettings = {
  site_name: 'Homizon',
  site_description: 'Dubai\'s premier home services platform',
  contact_email: 'contact@homizon.com',
  contact_phone: '+971 50 123 4567',
  site_url: 'https://homizon.com',
  default_currency: 'AED',
  timezone: 'Asia/Dubai',
  maintenance_mode: false,
  payment_enabled: true,
  stripe_publishable_key: 'pk_test_...',
  stripe_secret_key: 'sk_test_...',
  payment_methods: 'card,wallet,bank_transfer',
  commission_rate: '15',
  google_analytics_id: 'GA-XXXXXXXXX',
  google_tag_manager_id: 'GTM-XXXXXXX',
  facebook_pixel_id: '',
  seo_enabled: true,
  sitemap_enabled: true,
  api_rate_limit: '1000',
  api_key_required: true,
  webhook_enabled: true,
  jwt_secret: 'super-secret-key-change-this',
  session_timeout: '60',
  max_login_attempts: '5',
  password_min_length: '8',
  require_email_verification: true,
  otp_enabled: true,
  otp_expiry_minutes: '10',
  otp_length: '6',
  otp_max_attempts: '3',
  twilio_account_sid: 'AC...',
  twilio_auth_token: '...',
  twilio_phone_number: '+971501234567',
  aws_ses_access_key: 'AKIA...',
  aws_ses_secret_key: '...',
  aws_ses_region: 'us-east-1',
  whatsapp_otp_enabled: false,
  whatsapp_api_token: 'wa_...',
  lead_distribution_enabled: true,
  default_distribution_method: 'all_available',
  max_providers_per_lead: '5',
  provider_response_time_minutes: '60',
  notification_delay_seconds: '30',
  auto_assign_leads: false,
  lead_expiry_hours: '24',
  emergency_response_time_minutes: '15',
  proximity_radius_km: '10',
  min_provider_rating: '4.0',
  lead_notifications_enabled: true,
  sms_notifications_enabled: true,
  email_notifications_enabled: true,
  push_notifications_enabled: true
};

export async function GET() {
  console.log('GET /api/admin/settings - Returning settings:', platformSettings);
  return NextResponse.json(platformSettings);
}

export async function POST(request: NextRequest) {
  try {
    const settingsArray = await request.json();
    console.log('POST /api/admin/settings - Received settings:', settingsArray);
    
    // Convert array format to object format
    if (Array.isArray(settingsArray)) {
      settingsArray.forEach(({ key, value }) => {
        if (key && value !== undefined) {
          // Convert string booleans to actual booleans
          if (value === 'true') {
            platformSettings[key] = true;
          } else if (value === 'false') {
            platformSettings[key] = false;
          } else {
            platformSettings[key] = value;
          }
        }
      });
    } else {
      // If object format, merge directly
      platformSettings = { ...platformSettings, ...settingsArray };
    }
    
    console.log('Updated platform settings:', platformSettings);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Settings updated successfully',
      settings: platformSettings 
    });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update settings' },
      { status: 500 }
    );
  }
}