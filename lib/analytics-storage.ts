// Server-side storage for analytics settings
// Using file-based storage for proper persistence

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface AnalyticsSettings {
  googleAnalytics: {
    enabled: boolean;
    measurementId: string;
    status: 'not_configured' | 'pending' | 'verified' | 'error';
  };
  googleTagManager: {
    enabled: boolean;
    containerId: string;
    status: 'not_configured' | 'pending' | 'verified' | 'error';
  };
  googleSearchConsole: {
    enabled: boolean;
    verificationCode: string;
    status: 'not_configured' | 'pending' | 'verified' | 'error';
  };
  lastUpdated: string;
}

const STORAGE_FILE = join(process.cwd(), '.analytics-settings.json');

const defaultSettings: AnalyticsSettings = {
  googleAnalytics: {
    enabled: false,
    measurementId: '',
    status: 'not_configured'
  },
  googleTagManager: {
    enabled: false,
    containerId: '',
    status: 'not_configured'
  },
  googleSearchConsole: {
    enabled: false,
    verificationCode: '',
    status: 'not_configured'
  },
  lastUpdated: ''
};

export const AnalyticsStorage = {
  async getSettings(): Promise<AnalyticsSettings> {
    try {
      if (existsSync(STORAGE_FILE)) {
        const data = readFileSync(STORAGE_FILE, 'utf8');
        const settings = JSON.parse(data);
        console.log('📊 Retrieved analytics settings from file:', settings);
        return settings;
      }
    } catch (error) {
      console.error('❌ Error reading analytics settings file:', error);
    }
    
    console.log('📊 Using default analytics settings');
    return defaultSettings;
  },

  async saveSettings(newSettings: AnalyticsSettings): Promise<AnalyticsSettings> {
    try {
      const settingsToSave = {
        ...newSettings,
        lastUpdated: new Date().toISOString()
      };

      writeFileSync(STORAGE_FILE, JSON.stringify(settingsToSave, null, 2));
      console.log('💾 Analytics settings saved to file successfully:', settingsToSave);
      return settingsToSave;
    } catch (error) {
      console.error('❌ Error saving analytics settings to file:', error);
      throw error;
    }
  },

  async updateStatus(service: 'googleAnalytics' | 'googleTagManager' | 'googleSearchConsole', status: string): Promise<void> {
    try {
      const currentSettings = await this.getSettings();
      currentSettings[service].status = status as any;
      currentSettings.lastUpdated = new Date().toISOString();
      await this.saveSettings(currentSettings);
      console.log(`🔄 Updated ${service} status to ${status}`);
    } catch (error) {
      console.error(`❌ Error updating ${service} status:`, error);
      throw error;
    }
  }
};