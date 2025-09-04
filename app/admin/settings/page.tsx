
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Save, RefreshCw, Database, Globe, 
  CreditCard, BarChart3, Shield, Mail, Phone,
  Key, Link as LinkIcon, MapPin, Clock, Users,
  DollarSign, Languages, Palette, Monitor, Smartphone,
  MessageSquare, Bell, Zap, UserCheck, Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface SystemSetting {
  id: string;
  category: string;
  key: string;
  label: string;
  value: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'textarea' | 'password';
  options?: string[];
  description?: string;
  isRequired?: boolean;
  isSecure?: boolean;
}

const systemSettings: SystemSetting[] = [
  // General Settings
  {
    id: 'site-name',
    category: 'general',
    key: 'site_name',
    label: 'Site Name',
    value: 'HOMIZON',
    type: 'text',
    description: 'The name of your service platform',
    isRequired: true
  },
  {
    id: 'site-description',
    category: 'general',
    key: 'site_description',
    label: 'Site Description',
    value: 'Dubai\'s premier home services platform',
    type: 'textarea',
    description: 'Brief description of your platform for SEO'
  },
  {
    id: 'site-url',
    category: 'general',
    key: 'site_url',
    label: 'Site URL',
    value: 'https://homizon.com',
    type: 'text',
    description: 'Primary URL of your platform',
    isRequired: true
  },
  {
    id: 'contact-email',
    category: 'general',
    key: 'contact_email',
    label: 'Contact Email',
    value: 'contact@homizon.com',
    type: 'text',
    description: 'Main contact email address'
  },
  {
    id: 'contact-phone',
    category: 'general',
    key: 'contact_phone',
    label: 'Contact Phone',
    value: '+971 50 XXX XXXX',
    type: 'text',
    description: 'Main contact phone number'
  },
  {
    id: 'default-currency',
    category: 'general',
    key: 'default_currency',
    label: 'Default Currency',
    value: 'AED',
    type: 'select',
    options: ['AED', 'USD', 'EUR', 'SAR', 'QAR'],
    description: 'Default currency for the platform'
  },
  {
    id: 'timezone',
    category: 'general',
    key: 'timezone',
    label: 'Timezone',
    value: 'Asia/Dubai',
    type: 'select',
    options: ['Asia/Dubai', 'UTC', 'Asia/Riyadh', 'Asia/Kuwait', 'Asia/Qatar'],
    description: 'Default timezone for the platform'
  },
  {
    id: 'maintenance-mode',
    category: 'general',
    key: 'maintenance_mode',
    label: 'Maintenance Mode',
    value: 'false',
    type: 'boolean',
    description: 'Enable maintenance mode to temporarily disable the site'
  },

  // Payment Gateway Settings
  {
    id: 'payment-enabled',
    category: 'payment',
    key: 'payment_enabled',
    label: 'Enable Payments',
    value: 'true',
    type: 'boolean',
    description: 'Enable payment processing on the platform'
  },
  {
    id: 'stripe-publishable-key',
    category: 'payment',
    key: 'stripe_publishable_key',
    label: 'Stripe Publishable Key',
    value: 'pk_test_...',
    type: 'text',
    description: 'Stripe publishable key for payment processing'
  },
  {
    id: 'stripe-secret-key',
    category: 'payment',
    key: 'stripe_secret_key',
    label: 'Stripe Secret Key',
    value: 'sk_test_...',
    type: 'password',
    description: 'Stripe secret key for payment processing',
    isSecure: true
  },
  {
    id: 'stripe-webhook-secret',
    category: 'payment',
    key: 'stripe_webhook_secret',
    label: 'Stripe Webhook Secret',
    value: 'whsec_...',
    type: 'password',
    description: 'Stripe webhook secret for payment confirmations',
    isSecure: true
  },
  {
    id: 'payment-methods',
    category: 'payment',
    key: 'payment_methods',
    label: 'Accepted Payment Methods',
    value: 'card,wallet,bank_transfer',
    type: 'text',
    description: 'Comma-separated list of accepted payment methods'
  },
  {
    id: 'commission-rate',
    category: 'payment',
    key: 'commission_rate',
    label: 'Commission Rate (%)',
    value: '15',
    type: 'number',
    description: 'Platform commission rate percentage'
  },
  {
    id: 'payment-processing-fee',
    category: 'payment',
    key: 'payment_processing_fee',
    label: 'Payment Processing Fee (%)',
    value: '2.9',
    type: 'number',
    description: 'Payment processing fee percentage'
  },

  // SMTP Email Settings
  {
    id: 'smtp-enabled',
    category: 'smtp',
    key: 'smtp_enabled',
    label: 'Enable SMTP',
    value: 'true',
    type: 'boolean',
    description: 'Enable SMTP email delivery'
  },
  {
    id: 'smtp-host',
    category: 'smtp',
    key: 'smtp_host',
    label: 'SMTP Host',
    value: 'smtp.gmail.com',
    type: 'text',
    description: 'SMTP server hostname',
    isRequired: true
  },
  {
    id: 'smtp-port',
    category: 'smtp',
    key: 'smtp_port',
    label: 'SMTP Port',
    value: '587',
    type: 'number',
    description: 'SMTP server port (587 for TLS, 465 for SSL)',
    isRequired: true
  },
  {
    id: 'smtp-secure',
    category: 'smtp',
    key: 'smtp_secure',
    label: 'SMTP Security',
    value: 'TLS',
    type: 'select',
    options: ['TLS', 'SSL', 'None'],
    description: 'SMTP connection security method'
  },
  {
    id: 'smtp-username',
    category: 'smtp',
    key: 'smtp_username',
    label: 'SMTP Username',
    value: 'noreply@homizon.com',
    type: 'text',
    description: 'SMTP authentication username',
    isRequired: true
  },
  {
    id: 'smtp-password',
    category: 'smtp',
    key: 'smtp_password',
    label: 'SMTP Password',
    value: '************',
    type: 'password',
    description: 'SMTP authentication password',
    isSecure: true,
    isRequired: true
  },
  {
    id: 'email-from-name',
    category: 'smtp',
    key: 'email_from_name',
    label: 'From Name',
    value: 'HOMIZON',
    type: 'text',
    description: 'Default sender name for emails'
  },
  {
    id: 'email-from-address',
    category: 'smtp',
    key: 'email_from_address',
    label: 'From Email Address',
    value: 'noreply@homizon.com',
    type: 'text',
    description: 'Default sender email address'
  },
  {
    id: 'email-reply-to',
    category: 'smtp',
    key: 'email_reply_to',
    label: 'Reply-To Email',
    value: 'support@homizon.com',
    type: 'text',
    description: 'Default reply-to email address'
  },
  {
    id: 'smtp-max-connections',
    category: 'smtp',
    key: 'smtp_max_connections',
    label: 'Max SMTP Connections',
    value: '5',
    type: 'number',
    description: 'Maximum concurrent SMTP connections'
  },
  {
    id: 'email-queue-enabled',
    category: 'smtp',
    key: 'email_queue_enabled',
    label: 'Email Queue',
    value: 'true',
    type: 'boolean',
    description: 'Enable email queue for better performance'
  },
  {
    id: 'email-retry-attempts',
    category: 'smtp',
    key: 'email_retry_attempts',
    label: 'Retry Attempts',
    value: '3',
    type: 'number',
    description: 'Number of retry attempts for failed emails'
  },

  // Analytics & SEO
  {
    id: 'google-analytics',
    category: 'analytics',
    key: 'google_analytics_id',
    label: 'Google Analytics ID',
    value: 'GA-XXXXXXXXX',
    type: 'text',
    description: 'Google Analytics tracking ID'
  },
  {
    id: 'google-tag-manager',
    category: 'analytics',
    key: 'google_tag_manager_id',
    label: 'Google Tag Manager ID',
    value: 'GTM-XXXXXXX',
    type: 'text',
    description: 'Google Tag Manager container ID'
  },
  {
    id: 'facebook-pixel',
    category: 'analytics',
    key: 'facebook_pixel_id',
    label: 'Facebook Pixel ID',
    value: '',
    type: 'text',
    description: 'Facebook Pixel tracking ID'
  },
  {
    id: 'seo-enabled',
    category: 'analytics',
    key: 'seo_enabled',
    label: 'SEO Optimization',
    value: 'true',
    type: 'boolean',
    description: 'Enable SEO optimizations'
  },
  {
    id: 'sitemap-enabled',
    category: 'analytics',
    key: 'sitemap_enabled',
    label: 'Auto-generate Sitemap',
    value: 'true',
    type: 'boolean',
    description: 'Automatically generate XML sitemap'
  },

  // API Settings
  {
    id: 'api-rate-limit',
    category: 'api',
    key: 'api_rate_limit',
    label: 'API Rate Limit',
    value: '1000',
    type: 'number',
    description: 'API requests per hour limit'
  },
  {
    id: 'api-key-required',
    category: 'api',
    key: 'api_key_required',
    label: 'Require API Key',
    value: 'true',
    type: 'boolean',
    description: 'Require API key for external API access'
  },
  {
    id: 'webhook-enabled',
    category: 'api',
    key: 'webhook_enabled',
    label: 'Enable Webhooks',
    value: 'true',
    type: 'boolean',
    description: 'Enable webhook notifications'
  },

  // Security Settings
  {
    id: 'jwt-secret',
    category: 'security',
    key: 'jwt_secret',
    label: 'JWT Secret',
    value: 'super-secret-key-change-this',
    type: 'password',
    description: 'Secret key for JWT token generation',
    isSecure: true,
    isRequired: true
  },
  {
    id: 'session-timeout',
    category: 'security',
    key: 'session_timeout',
    label: 'Session Timeout (minutes)',
    value: '60',
    type: 'number',
    description: 'User session timeout in minutes'
  },
  {
    id: 'max-login-attempts',
    category: 'security',
    key: 'max_login_attempts',
    label: 'Max Login Attempts',
    value: '5',
    type: 'number',
    description: 'Maximum login attempts before lockout'
  },
  {
    id: 'password-min-length',
    category: 'security',
    key: 'password_min_length',
    label: 'Minimum Password Length',
    value: '8',
    type: 'number',
    description: 'Minimum required password length'
  },
  {
    id: 'require-email-verification',
    category: 'security',
    key: 'require_email_verification',
    label: 'Require Email Verification',
    value: 'true',
    type: 'boolean',
    description: 'Require email verification for new accounts'
  },

  // OTP Settings
  {
    id: 'otp-enabled',
    category: 'otp',
    key: 'otp_enabled',
    label: 'Enable OTP Verification',
    value: 'true',
    type: 'boolean',
    description: 'Enable OTP verification for bookings and signups'
  },
  {
    id: 'otp-expiry',
    category: 'otp',
    key: 'otp_expiry_minutes',
    label: 'OTP Expiry (minutes)',
    value: '10',
    type: 'number',
    description: 'OTP expiration time in minutes'
  },
  {
    id: 'otp-length',
    category: 'otp',
    key: 'otp_length',
    label: 'OTP Length',
    value: '6',
    type: 'number',
    description: 'Number of digits in OTP'
  },
  {
    id: 'otp-max-attempts',
    category: 'otp',
    key: 'otp_max_attempts',
    label: 'Max OTP Attempts',
    value: '3',
    type: 'number',
    description: 'Maximum OTP verification attempts'
  },
  {
    id: 'twilio-sid',
    category: 'otp',
    key: 'twilio_account_sid',
    label: 'Twilio Account SID',
    value: 'AC...',
    type: 'text',
    description: 'Twilio Account SID for SMS',
    isSecure: true
  },
  {
    id: 'twilio-token',
    category: 'otp',
    key: 'twilio_auth_token',
    label: 'Twilio Auth Token',
    value: '...',
    type: 'password',
    description: 'Twilio authentication token',
    isSecure: true
  },
  {
    id: 'twilio-phone',
    category: 'otp',
    key: 'twilio_phone_number',
    label: 'Twilio Phone Number',
    value: '+971501234567',
    type: 'text',
    description: 'Twilio phone number for SMS'
  },
  {
    id: 'aws-ses-key',
    category: 'otp',
    key: 'aws_ses_access_key',
    label: 'AWS SES Access Key',
    value: 'AKIA...',
    type: 'password',
    description: 'AWS SES access key for email OTP',
    isSecure: true
  },
  {
    id: 'aws-ses-secret',
    category: 'otp',
    key: 'aws_ses_secret_key',
    label: 'AWS SES Secret Key',
    value: '...',
    type: 'password',
    description: 'AWS SES secret key for email OTP',
    isSecure: true
  },
  {
    id: 'aws-ses-region',
    category: 'otp',
    key: 'aws_ses_region',
    label: 'AWS SES Region',
    value: 'us-east-1',
    type: 'select',
    options: ['us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'],
    description: 'AWS SES region'
  },
  {
    id: 'whatsapp-enabled',
    category: 'otp',
    key: 'whatsapp_otp_enabled',
    label: 'WhatsApp OTP',
    value: 'false',
    type: 'boolean',
    description: 'Enable WhatsApp OTP delivery'
  },
  {
    id: 'whatsapp-token',
    category: 'otp',
    key: 'whatsapp_api_token',
    label: 'WhatsApp API Token',
    value: 'wa_...',
    type: 'password',
    description: 'WhatsApp Business API token',
    isSecure: true
  },

  // Lead Distribution Settings
  {
    id: 'lead-distribution-enabled',
    category: 'leads',
    key: 'lead_distribution_enabled',
    label: 'Enable Lead Distribution',
    value: 'true',
    type: 'boolean',
    description: 'Enable automatic lead distribution to providers'
  },
  {
    id: 'default-distribution-method',
    category: 'leads',
    key: 'default_distribution_method',
    label: 'Default Distribution Method',
    value: 'all_available',
    type: 'select',
    options: ['all_available', 'round_robin', 'rating_based', 'proximity', 'manual'],
    description: 'Default method for lead distribution'
  },
  {
    id: 'max-providers-per-lead',
    category: 'leads',
    key: 'max_providers_per_lead',
    label: 'Max Providers per Lead',
    value: '5',
    type: 'number',
    description: 'Maximum number of providers to notify per lead'
  },
  {
    id: 'provider-response-time',
    category: 'leads',
    key: 'provider_response_time_minutes',
    label: 'Provider Response Time (minutes)',
    value: '60',
    type: 'number',
    description: 'Time limit for provider response to leads'
  },
  {
    id: 'notification-delay',
    category: 'leads',
    key: 'notification_delay_seconds',
    label: 'Notification Delay (seconds)',
    value: '30',
    type: 'number',
    description: 'Delay between provider notifications'
  },
  {
    id: 'auto-assign-leads',
    category: 'leads',
    key: 'auto_assign_leads',
    label: 'Auto-assign Leads',
    value: 'false',
    type: 'boolean',
    description: 'Automatically assign leads to first responder'
  },
  {
    id: 'lead-expiry-hours',
    category: 'leads',
    key: 'lead_expiry_hours',
    label: 'Lead Expiry (hours)',
    value: '24',
    type: 'number',
    description: 'Hours after which unassigned leads expire'
  },
  {
    id: 'emergency-response-time',
    category: 'leads',
    key: 'emergency_response_time_minutes',
    label: 'Emergency Response Time (minutes)',
    value: '15',
    type: 'number',
    description: 'Response time limit for emergency services'
  },
  {
    id: 'proximity-radius',
    category: 'leads',
    key: 'proximity_radius_km',
    label: 'Proximity Radius (km)',
    value: '10',
    type: 'number',
    description: 'Radius for proximity-based lead distribution'
  },
  {
    id: 'min-provider-rating',
    category: 'leads',
    key: 'min_provider_rating',
    label: 'Minimum Provider Rating',
    value: '4.0',
    type: 'number',
    description: 'Minimum rating for providers to receive leads'
  },
  {
    id: 'lead-notifications-enabled',
    category: 'leads',
    key: 'lead_notifications_enabled',
    label: 'Lead Notifications',
    value: 'true',
    type: 'boolean',
    description: 'Send notifications for new leads'
  },
  {
    id: 'sms-notifications',
    category: 'leads',
    key: 'sms_notifications_enabled',
    label: 'SMS Notifications',
    value: 'true',
    type: 'boolean',
    description: 'Send SMS notifications to providers'
  },
  {
    id: 'email-notifications',
    category: 'leads',
    key: 'email_notifications_enabled',
    label: 'Email Notifications',
    value: 'true',
    type: 'boolean',
    description: 'Send email notifications to providers'
  },
  {
    id: 'push-notifications',
    category: 'leads',
    key: 'push_notifications_enabled',
    label: 'Push Notifications',
    value: 'true',
    type: 'boolean',
    description: 'Send push notifications to provider apps'
  }
];

export default function SystemSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState<SystemSetting[]>(systemSettings);
  const [hasChanges, setHasChanges] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load settings from API on component mount
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/settings');
      if (response.ok) {
        const serverSettings = await response.json();
        console.log('Loaded settings from server:', serverSettings);
        
        // Update settings with server values
        const updatedSettings = systemSettings.map(setting => ({
          ...setting,
          value: serverSettings[setting.key] !== undefined ? 
            String(serverSettings[setting.key]) : 
            setting.value
        }));
        
        setSettings(updatedSettings);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'smtp', label: 'SMTP Email', icon: Mail },
    { id: 'otp', label: 'OTP Settings', icon: MessageSquare },
    { id: 'leads', label: 'Lead Distribution', icon: Users },
    { id: 'analytics', label: 'Analytics & SEO', icon: BarChart3 },
    { id: 'api', label: 'API Settings', icon: Database },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const getSettingsByCategory = (category: string) => {
    return settings.filter(setting => setting.category === category);
  };

  const updateSetting = (id: string, value: string) => {
    setSettings(prev => prev.map(setting => 
      setting.id === id ? { ...setting, value } : setting
    ));
    setHasChanges(true);
  };

  const saveSettings = async () => {
    try {
      console.log('Saving settings:', settings);
      
      // Convert settings array to key-value format for API
      const settingsData = settings.map(setting => ({
        key: setting.key,
        value: setting.value
      }));
      
      const response = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settingsData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Settings saved successfully:', result);
        
        setHasChanges(false);
        
        // Show success message
        alert('Settings saved successfully! Changes have been applied across the entire website.');
        
        // Force reload the page to ensure settings propagate
        window.location.reload();
      } else {
        throw new Error('Failed to save settings');
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings. Please try again.');
    }
  };

  const resetSettings = () => {
    setSettings(systemSettings);
    setHasChanges(false);
  };

  const renderSettingField = (setting: SystemSetting) => {
    switch (setting.type) {
      case 'text':
      case 'number':
        return (
          <Input
            type={setting.type}
            value={setting.value}
            onChange={(e) => updateSetting(setting.id, e.target.value)}
            className="bg-white/10 border-white/20 text-white"
            placeholder={setting.label}
          />
        );
      
      case 'password':
        return (
          <Input
            type="password"
            value={setting.value}
            onChange={(e) => updateSetting(setting.id, e.target.value)}
            className="bg-white/10 border-white/20 text-white"
            placeholder={setting.label}
          />
        );
      
      case 'textarea':
        return (
          <Textarea
            value={setting.value}
            onChange={(e) => updateSetting(setting.id, e.target.value)}
            className="bg-white/10 border-white/20 text-white"
            placeholder={setting.label}
            rows={3}
          />
        );
      
      case 'boolean':
        return (
          <Switch
            checked={setting.value === 'true'}
            onCheckedChange={(checked) => updateSetting(setting.id, checked.toString())}
          />
        );
      
      case 'select':
        return (
          <Select value={setting.value} onValueChange={(value) => updateSetting(setting.id, value)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-white/20">
              {setting.options?.map(option => (
                <SelectItem key={option} value={option} className="text-white">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">System Settings</h1>
          <p className="text-white/60 mt-2">Configure platform settings and integrations</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-white border-white/20 hover:bg-white/10"
            onClick={resetSettings}
            disabled={!hasChanges || loading}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            onClick={saveSettings}
            disabled={!hasChanges || loading}
          >
            <Save className="h-4 w-4 mr-2" />
            {loading ? 'Loading...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <RefreshCw className="h-4 w-4 text-blue-400 animate-spin" />
            <p className="text-blue-200">Loading settings...</p>
          </div>
        </div>
      )}

      {/* Status Alert */}
      {hasChanges && !loading && (
        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              Unsaved Changes
            </Badge>
            <p className="text-yellow-200">You have unsaved changes. Don't forget to save your settings.</p>
          </div>
        </div>
      )}

      {/* Settings Tabs */}
      {!loading && (
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-white/10">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="data-[state=active]:bg-white/20 flex items-center space-x-2"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {categories.map(category => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="space-y-6">
                    {getSettingsByCategory(category.id).map((setting, index) => (
                      <motion.div
                        key={setting.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <Label className="text-white font-medium">{setting.label}</Label>
                              {setting.isRequired && (
                                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                                  Required
                                </Badge>
                              )}
                              {setting.isSecure && (
                                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                                  Secure
                                </Badge>
                              )}
                            </div>
                            {setting.description && (
                              <p className="text-white/60 text-sm mt-1">{setting.description}</p>
                            )}
                          </div>
                          <div className="w-64">
                            {renderSettingField(setting)}
                          </div>
                        </div>
                        {index < getSettingsByCategory(category.id).length - 1 && (
                          <div className="border-t border-white/10"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Database Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Connection</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Connected
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Size</span>
                <span className="text-white">2.4 GB</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Last Backup</span>
                <span className="text-white">2 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>CDN Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Status</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Bandwidth</span>
                <span className="text-white">1.2 TB</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Cache Hit Rate</span>
                <span className="text-white">94.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">SSL Certificate</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Valid
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Firewall</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Last Security Scan</span>
                <span className="text-white">1 day ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
