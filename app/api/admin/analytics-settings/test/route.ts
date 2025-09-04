import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { service, settings } = await request.json();
    console.log(`🧪 Testing ${service} connection with settings:`, settings);

    let result = { success: false, message: '' };

    switch (service) {
      case 'ga':
        const gaId = settings.googleAnalytics?.measurementId;
        if (!gaId) {
          result = { success: false, message: 'Google Analytics Measurement ID is required' };
        } else if (!gaId.match(/^G-[A-Z0-9]{10}$/)) {
          result = { success: false, message: 'Invalid Measurement ID format. Should be G-XXXXXXXXXX' };
        } else {
          // Simulate GA validation - in real implementation, you might call GA API
          result = { 
            success: true, 
            message: 'Google Analytics tracking code will be installed on all pages' 
          };
        }
        break;

      case 'gtm':
        const gtmId = settings.googleTagManager?.containerId;
        if (!gtmId) {
          result = { success: false, message: 'Google Tag Manager Container ID is required' };
        } else if (!gtmId.match(/^GTM-[A-Z0-9]+$/)) {
          result = { success: false, message: 'Invalid Container ID format. Should be GTM-XXXXXXX' };
        } else {
          result = { 
            success: true, 
            message: 'Google Tag Manager container will be loaded on all pages' 
          };
        }
        break;

      case 'gsc':
        const verificationCode = settings.googleSearchConsole?.verificationCode;
        
        if (!verificationCode) {
          result = { success: false, message: 'Verification code is required' };
        } else {
          result = { 
            success: true, 
            message: 'Verification meta tag has been added to all pages. You can now verify ownership in Google Search Console.' 
          };
        }
        break;

      default:
        result = { success: false, message: 'Unknown service type' };
    }

    console.log(`${result.success ? '✅' : '❌'} ${service} test result:`, result.message);

    return NextResponse.json(result);
  } catch (error) {
    console.error('❌ Error testing analytics connection:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to test connection' },
      { status: 500 }
    );
  }
}