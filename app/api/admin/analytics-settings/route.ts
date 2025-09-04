import { NextRequest, NextResponse } from 'next/server';
import { AnalyticsStorage } from '@/lib/analytics-storage';

export async function GET() {
  try {
    console.log('📊 Fetching analytics settings');
    
    const settings = await AnalyticsStorage.getSettings();
    return NextResponse.json(settings);
  } catch (error) {
    console.error('❌ Error fetching analytics settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newSettings = await request.json();
    console.log('💾 Saving analytics settings:', newSettings);

    // Validate the settings
    if (newSettings.googleAnalytics?.measurementId) {
      const gaId = newSettings.googleAnalytics.measurementId;
      if (!gaId.match(/^G-[A-Z0-9]{10}$/)) {
        return NextResponse.json(
          { error: 'Invalid Google Analytics Measurement ID format. Should be G-XXXXXXXXXX' },
          { status: 400 }
        );
      }
    }

    if (newSettings.googleTagManager?.containerId) {
      const gtmId = newSettings.googleTagManager.containerId;
      if (!gtmId.match(/^GTM-[A-Z0-9]+$/)) {
        return NextResponse.json(
          { error: 'Invalid Google Tag Manager Container ID format. Should be GTM-XXXXXXX' },
          { status: 400 }
        );
      }
    }

    // Save settings using the storage layer
    const savedSettings = await AnalyticsStorage.saveSettings(newSettings);

    console.log('✅ Analytics settings saved successfully');

    return NextResponse.json(savedSettings);
  } catch (error) {
    console.error('❌ Error saving analytics settings:', error);
    return NextResponse.json(
      { error: 'Failed to save analytics settings' },
      { status: 500 }
    );
  }
}