'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { 
  BarChart3, Search, Tag, CheckCircle, XCircle, 
  ExternalLink, Copy, Zap, AlertTriangle, Info,
  Globe, Activity, Target, Gauge
} from 'lucide-react';

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
    siteUrl: string;
    status: 'not_configured' | 'pending' | 'verified' | 'error';
  };
  lastUpdated: string;
}

export default function AnalyticsIntegrationPage() {
  const [settings, setSettings] = useState<AnalyticsSettings>({
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
  });

  const [loading, setLoading] = useState(false);
  const [testingConnection, setTestingConnection] = useState<string | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      console.log('🔄 Loading analytics settings...');
      const response = await fetch('/api/admin/analytics-settings');
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ Analytics settings loaded:', data);
        setSettings(data);
      } else {
        console.log('ℹ️ No existing analytics settings found');
      }
    } catch (error) {
      console.error('❌ Error loading analytics settings:', error);
      toast({
        title: "Error Loading Settings",
        description: "Failed to load analytics settings",
        variant: "destructive",
      });
    }
  };

  const saveSettings = async () => {
    try {
      setLoading(true);
      console.log('💾 Saving analytics settings...');

      const response = await fetch('/api/admin/analytics-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...settings,
          lastUpdated: new Date().toISOString()
        }),
      });

      if (response.ok) {
        const updatedSettings = await response.json();
        setSettings(updatedSettings);
        console.log('✅ Analytics settings saved successfully');
        
        toast({
          title: "Settings Saved Successfully",
          description: "Analytics integrations have been updated and applied to your website",
        });

        // Force a page reload to apply new tracking codes
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        throw new Error('Failed to save settings');
      }
    } catch (error) {
      console.error('❌ Error saving analytics settings:', error);
      toast({
        title: "Error Saving Settings",
        description: "Failed to save analytics settings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async (service: 'ga' | 'gtm' | 'gsc') => {
    try {
      setTestingConnection(service);
      console.log(`🧪 Testing ${service} connection...`);

      const response = await fetch('/api/admin/analytics-settings/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service,
          settings: settings
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Update status to verified
        const updatedSettings = { ...settings };
        if (service === 'ga') {
          updatedSettings.googleAnalytics.status = 'verified';
        } else if (service === 'gtm') {
          updatedSettings.googleTagManager.status = 'verified';
        } else if (service === 'gsc') {
          updatedSettings.googleSearchConsole.status = 'verified';
        }
        setSettings(updatedSettings);

        toast({
          title: "Connection Verified",
          description: result.message,
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(`❌ Error testing ${service} connection:`, error);
      toast({
        title: "Connection Failed",
        description: error instanceof Error ? error.message : "Failed to verify connection",
        variant: "destructive",
      });
    } finally {
      setTestingConnection(null);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to Clipboard",
      description: "Code has been copied to your clipboard",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30"><CheckCircle className="h-3 w-3 mr-1" />Verified</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"><Zap className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'error':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30"><XCircle className="h-3 w-3 mr-1" />Error</Badge>;
      default:
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Not Configured</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics Integration</h1>
          <p className="text-white/60 mt-2">
            Connect Google Analytics, Tag Manager, and Search Console to track your website performance
          </p>
        </div>
        <Button 
          onClick={saveSettings}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {loading ? 'Saving...' : 'Save All Settings'}
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-medium">Google Analytics</span>
                </div>
                {getStatusBadge(settings.googleAnalytics.status)}
              </div>
              <Switch
                checked={settings.googleAnalytics.enabled}
                onCheckedChange={(enabled) => 
                  setSettings(prev => ({
                    ...prev,
                    googleAnalytics: { ...prev.googleAnalytics, enabled }
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Tag className="h-5 w-5 text-purple-400" />
                  <span className="text-white font-medium">Tag Manager</span>
                </div>
                {getStatusBadge(settings.googleTagManager.status)}
              </div>
              <Switch
                checked={settings.googleTagManager.enabled}
                onCheckedChange={(enabled) => 
                  setSettings(prev => ({
                    ...prev,
                    googleTagManager: { ...prev.googleTagManager, enabled }
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Search className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">Search Console</span>
                </div>
                {getStatusBadge(settings.googleSearchConsole.status)}
              </div>
              <Switch
                checked={settings.googleSearchConsole.enabled}
                onCheckedChange={(enabled) => 
                  setSettings(prev => ({
                    ...prev,
                    googleSearchConsole: { ...prev.googleSearchConsole, enabled }
                  }))
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Configuration Tabs */}
      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="bg-white/10 border border-white/20">
          <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600">
            <BarChart3 className="h-4 w-4 mr-2" />
            Google Analytics
          </TabsTrigger>
          <TabsTrigger value="tagmanager" className="data-[state=active]:bg-purple-600">
            <Tag className="h-4 w-4 mr-2" />
            Tag Manager
          </TabsTrigger>
          <TabsTrigger value="searchconsole" className="data-[state=active]:bg-green-600">
            <Search className="h-4 w-4 mr-2" />
            Search Console
          </TabsTrigger>
        </TabsList>

        {/* Google Analytics Configuration */}
        <TabsContent value="analytics">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10" data-macaly="analytics-config-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
                Google Analytics 4 Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ga-measurement-id" className="text-white">
                    Measurement ID (GA4)
                  </Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="ga-measurement-id"
                      placeholder="G-XXXXXXXXXX"
                      value={settings.googleAnalytics.measurementId}
                      onChange={(e) => 
                        setSettings(prev => ({
                          ...prev,
                          googleAnalytics: { 
                            ...prev.googleAnalytics, 
                            measurementId: e.target.value,
                            status: e.target.value ? 'pending' : 'not_configured'
                          }
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Button
                      variant="outline"
                      onClick={() => copyToClipboard(settings.googleAnalytics.measurementId)}
                      disabled={!settings.googleAnalytics.measurementId}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-white/60 text-sm mt-1">
                    Find this in Google Analytics → Admin → Data Streams → Your Stream
                  </p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div className="text-sm text-blue-200">
                      <p className="font-medium mb-1">How to get your GA4 Measurement ID:</p>
                      <ol className="list-decimal list-inside space-y-1 text-blue-200/80">
                        <li>Go to Google Analytics</li>
                        <li>Select your property</li>
                        <li>Click Admin (gear icon)</li>
                        <li>Under Property, click Data Streams</li>
                        <li>Click your web stream</li>
                        <li>Copy the Measurement ID (G-XXXXXXXXXX)</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={() => testConnection('ga')}
                    disabled={!settings.googleAnalytics.measurementId || testingConnection === 'ga'}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Activity className="h-4 w-4 mr-2" />
                    {testingConnection === 'ga' ? 'Testing...' : 'Test Connection'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://analytics.google.com', '_blank')}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Google Analytics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Google Tag Manager Configuration */}
        <TabsContent value="tagmanager">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10" data-macaly="gtm-config-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Tag className="h-5 w-5 mr-2 text-purple-400" />
                Google Tag Manager Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="gtm-container-id" className="text-white">
                    Container ID
                  </Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="gtm-container-id"
                      placeholder="GTM-XXXXXXX"
                      value={settings.googleTagManager.containerId}
                      onChange={(e) => 
                        setSettings(prev => ({
                          ...prev,
                          googleTagManager: { 
                            ...prev.googleTagManager, 
                            containerId: e.target.value,
                            status: e.target.value ? 'pending' : 'not_configured'
                          }
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Button
                      variant="outline"
                      onClick={() => copyToClipboard(settings.googleTagManager.containerId)}
                      disabled={!settings.googleTagManager.containerId}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-white/60 text-sm mt-1">
                    Find this in Google Tag Manager → Workspace → Container ID
                  </p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div className="text-sm text-purple-200">
                      <p className="font-medium mb-1">How to get your GTM Container ID:</p>
                      <ol className="list-decimal list-inside space-y-1 text-purple-200/80">
                        <li>Go to Google Tag Manager</li>
                        <li>Select your account and container</li>
                        <li>Look for the Container ID at the top (GTM-XXXXXXX)</li>
                        <li>Or click on the container name to see the ID</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={() => testConnection('gtm')}
                    disabled={!settings.googleTagManager.containerId || testingConnection === 'gtm'}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    <Gauge className="h-4 w-4 mr-2" />
                    {testingConnection === 'gtm' ? 'Testing...' : 'Test Connection'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://tagmanager.google.com', '_blank')}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Tag Manager
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Google Search Console Configuration */}
        <TabsContent value="searchconsole">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10" data-macaly="gsc-config-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Search className="h-5 w-5 mr-2 text-green-400" />
                Google Search Console Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="gsc-verification-code" className="text-white">
                    HTML Meta Tag Verification Code
                  </Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="gsc-verification-code"
                      placeholder="google-site-verification content value"
                      value={settings.googleSearchConsole.verificationCode}
                      onChange={(e) => 
                        setSettings(prev => ({
                          ...prev,
                          googleSearchConsole: { 
                            ...prev.googleSearchConsole, 
                            verificationCode: e.target.value,
                            status: e.target.value ? 'pending' : 'not_configured'
                          }
                        }))
                      }
                      className="bg-white/10 border-white/20 text-white"
                    />
                    <Button
                      variant="outline"
                      onClick={() => copyToClipboard(settings.googleSearchConsole.verificationCode)}
                      disabled={!settings.googleSearchConsole.verificationCode}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-white/60 text-sm mt-1">
                    Only paste the content value from the meta tag (the part after content=")
                  </p>
                </div>



                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-green-400 mt-0.5" />
                    <div className="text-sm text-green-200">
                      <p className="font-medium mb-1">How to get your verification code:</p>
                      <ol className="list-decimal list-inside space-y-1 text-green-200/80">
                        <li>Go to Google Search Console</li>
                        <li>Add or select your property</li>
                        <li>Choose "HTML tag" verification method</li>
                        <li>Copy only the content value from the meta tag</li>
                        <li>Example: From {`<meta name="google-site-verification" content="abc123" />`}, copy only "abc123"</li>
                        <li>Paste it here and save - the meta tag will be automatically added to your website</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={() => testConnection('gsc')}
                    disabled={!settings.googleSearchConsole.verificationCode || testingConnection === 'gsc'}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Target className="h-4 w-4 mr-2" />
                    {testingConnection === 'gsc' ? 'Testing...' : 'Verify Ownership'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://search.google.com/search-console', '_blank')}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Search Console
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Implementation Status */}
      {settings.lastUpdated && (
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Last updated: {new Date(settings.lastUpdated).toLocaleString()}</span>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Tracking codes active on all pages</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}