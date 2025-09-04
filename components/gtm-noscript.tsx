'use client';

import { useEffect, useState } from 'react';

interface AnalyticsSettings {
  googleTagManager: {
    enabled: boolean;
    containerId: string;
  };
}

export default function GTMNoscript() {
  const [settings, setSettings] = useState<AnalyticsSettings | null>(null);

  useEffect(() => {
    const loadAnalyticsSettings = async () => {
      try {
        const response = await fetch('/api/admin/analytics-settings');
        
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
          
          // Add GTM noscript to body if needed
          if (data.googleTagManager?.enabled && data.googleTagManager.containerId) {
            const existingNoscript = document.querySelector('noscript[data-gtm]');
            if (!existingNoscript) {
              const noscript = document.createElement('noscript');
              noscript.setAttribute('data-gtm', 'true');
              noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${data.googleTagManager.containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
              document.body.appendChild(noscript);
              console.log('🏷️ GTM noscript fallback added');
            }
          }
        }
      } catch (error) {
        console.error('❌ Error loading GTM noscript settings:', error);
      }
    };

    loadAnalyticsSettings();
  }, []);

  return null; // This component doesn't render anything
}