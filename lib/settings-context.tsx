"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Settings {
  site_name: string;
  site_description: string;
  contact_email: string;
  contact_phone: string;
  site_url: string;
  default_currency: string;
  timezone: string;
  maintenance_mode: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
  refreshSettings: () => Promise<void>;
  forceRefresh: () => Promise<void>;
}

const defaultSettings: Settings = {
  site_name: 'Homizon',
  site_description: 'Dubai\'s premier home services platform',
  contact_email: 'contact@homizon.com',
  contact_phone: '+971 50 123 4567',
  site_url: 'https://homizon.com',
  default_currency: 'AED',
  timezone: 'Asia/Dubai',
  maintenance_mode: false,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const fetchSettings = async () => {
    try {
      // Add timestamp to prevent caching
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/admin/settings?_t=${timestamp}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched settings:', data);
        
        // Update settings with fetched data
        setSettings(prevSettings => ({
          ...prevSettings,
          ...data
        }));
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };

  const refreshSettings = async () => {
    await fetchSettings();
  };

  const forceRefresh = async () => {
    console.log('Force refreshing settings...');
    await fetchSettings();
    // Force a re-render
    setSettings(prevSettings => ({ ...prevSettings }));
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, refreshSettings, forceRefresh }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}