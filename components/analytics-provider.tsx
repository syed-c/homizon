'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

interface AnalyticsSettings {
  googleAnalytics: {
    enabled: boolean;
    measurementId: string;
    status: string;
  };
  googleTagManager: {
    enabled: boolean;
    containerId: string;
    status: string;
  };
  googleSearchConsole: {
    enabled: boolean;
    verificationCode: string;
    siteUrl: string;
    status: string;
  };
}

export default function AnalyticsProvider() {
  const [settings, setSettings] = useState<AnalyticsSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnalyticsSettings = async () => {
      try {
        console.log('🔄 Loading analytics settings for tracking implementation...');
        const response = await fetch('/api/admin/analytics-settings');
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Analytics settings loaded:', data);
          setSettings(data);

          // Load Google Analytics
          if (data.googleAnalytics?.enabled && data.googleAnalytics.measurementId) {
            console.log('📊 Initializing Google Analytics with ID:', data.googleAnalytics.measurementId);
            
            // Initialize GA4
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('config', data.googleAnalytics.measurementId, {
                page_title: document.title,
                page_location: window.location.href
              });
            }
          }

        } else {
          console.log('ℹ️ No analytics settings found');
        }
      } catch (error) {
        console.error('❌ Error loading analytics settings:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAnalyticsSettings();
  }, []);

  // Don't render anything during loading
  if (loading || !settings) {
    return null;
  }

  return (
    <>
      {/* Google Analytics GA4 */}
      {settings.googleAnalytics?.enabled && settings.googleAnalytics.measurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalytics.measurementId}`}
            strategy="afterInteractive"
            onLoad={() => {
              console.log('✅ Google Analytics script loaded');
            }}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.googleAnalytics.measurementId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  anonymize_ip: true,
                  cookie_flags: 'secure;samesite=none'
                });
                console.log('📊 Google Analytics initialized with ID: ${settings.googleAnalytics.measurementId}');
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager */}
      {settings.googleTagManager?.enabled && settings.googleTagManager.containerId && (
        <>
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${settings.googleTagManager.containerId}');
                console.log('🏷️ Google Tag Manager initialized with ID: ${settings.googleTagManager.containerId}');
              `,
            }}
          />
          {/* GTM noscript fallback will be added to the body */}
        </>
      )}
    </>
  );
}