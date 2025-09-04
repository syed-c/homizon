import { AnalyticsStorage } from '@/lib/analytics-storage';

export default async function AnalyticsHeadTags() {
  try {
    const settings = await AnalyticsStorage.getSettings();
    console.log('🔍 Server-side analytics head tags loaded:', settings);

    return (
      <>
        {/* Google Search Console Verification */}
        {settings.googleSearchConsole?.enabled && settings.googleSearchConsole.verificationCode && (
          <meta
            name="google-site-verification"
            content={settings.googleSearchConsole.verificationCode}
          />
        )}
      </>
    );
  } catch (error) {
    console.error('❌ Error loading analytics settings for head tags:', error);
    return null;
  }
}