'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/hooks/use-toast'
import { 
  MessageSquare, Phone, Mail, Settings, 
  CheckCircle, AlertCircle, Save, TestTube,
  Smartphone, Globe, Zap, Shield
} from 'lucide-react'

interface NotificationSettings {
  whatsapp: {
    enabled: boolean
    apiKey: string
    phoneNumber: string
    businessName: string
    templates: {
      leadAssigned: string
      customerNotification: string
      providerAccepted: string
    }
  }
  sms: {
    enabled: boolean
    provider: string
    apiKey: string
    senderId: string
    templates: {
      leadAssigned: string
      customerNotification: string
      providerAccepted: string
    }
  }
  email: {
    enabled: boolean
    smtpHost: string
    smtpPort: string
    smtpUser: string
    smtpPassword: string
    fromEmail: string
    fromName: string
    templates: {
      leadAssigned: string
      customerNotification: string
      providerAccepted: string
    }
  }
}

export default function NotificationIntegrationsPage() {
  const [settings, setSettings] = useState<NotificationSettings>({
    whatsapp: {
      enabled: false,
      apiKey: '',
      phoneNumber: '',
      businessName: 'Homizon',
      templates: {
        leadAssigned: 'New lead assigned! Customer: {{customerName}}, Service: {{serviceName}}, Area: {{areaName}}. Contact: {{customerPhone}}',
        customerNotification: 'Great news! {{providerName}} from {{companyName}} will handle your {{serviceName}} request. They will contact you at {{customerPhone}} within {{responseTime}}.',
        providerAccepted: '{{providerName}} has accepted your {{serviceName}} request in {{areaName}}. Expected arrival: {{estimatedTime}}. Contact: {{providerPhone}}'
      }
    },
    sms: {
      enabled: false,
      provider: 'twilio',
      apiKey: '',
      senderId: 'HOMIZON',
      templates: {
        leadAssigned: 'New lead: {{customerName}} needs {{serviceName}} in {{areaName}}. Contact: {{customerPhone}}',
        customerNotification: '{{providerName}} assigned to your {{serviceName}} request. Contact: {{providerPhone}}',
        providerAccepted: 'Service confirmed! {{providerName}} will arrive at {{estimatedTime}}. Contact: {{providerPhone}}'
      }
    },
    email: {
      enabled: false,
      smtpHost: '',
      smtpPort: '587',
      smtpUser: '',
      smtpPassword: '',
      fromEmail: 'noreply@homizon.com',
      fromName: 'Homizon Support',
      templates: {
        leadAssigned: 'You have a new service request from {{customerName}} for {{serviceName}} in {{areaName}}.',
        customerNotification: 'Your service request has been assigned to {{providerName}} from {{companyName}}.',
        providerAccepted: 'Your service provider {{providerName}} has confirmed your appointment.'
      }
    }
  })

  const [isLoading, setIsLoading] = useState(false)
  const [testingChannel, setTestingChannel] = useState<string | null>(null)

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const response = await fetch('/api/admin/notification-settings')
      if (response.ok) {
        const data = await response.json()
        setSettings(data)
      }
    } catch (error) {
      console.error('Failed to load notification settings:', error)
    }
  }

  const saveSettings = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/notification-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      })

      if (response.ok) {
        toast({
          title: "✅ Settings Saved",
          description: "Notification settings have been updated successfully.",
          duration: 5000,
        })
      } else {
        throw new Error('Failed to save settings')
      }
    } catch (error) {
      console.error('Error saving settings:', error)
      toast({
        title: "❌ Save Failed",
        description: "Failed to save notification settings. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const testNotification = async (channel: 'whatsapp' | 'sms' | 'email') => {
    setTestingChannel(channel)
    try {
      const response = await fetch('/api/admin/test-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          channel,
          settings: settings[channel],
          testData: {
            customerName: 'John Doe',
            serviceName: 'AC Repair',
            areaName: 'Dubai Marina',
            customerPhone: '+971501234567',
            providerName: 'Ahmed Al-Rashid',
            companyName: 'Cool Breeze AC Services',
            providerPhone: '+971507654321',
            responseTime: '30 minutes',
            estimatedTime: 'Tomorrow 2:00 PM'
          }
        })
      })

      if (response.ok) {
        toast({
          title: "🧪 Test Successful",
          description: `${channel.toUpperCase()} notification sent successfully!`,
          duration: 5000,
        })
      } else {
        throw new Error(`Test failed for ${channel}`)
      }
    } catch (error) {
      console.error(`Test failed for ${channel}:`, error)
      toast({
        title: "❌ Test Failed",
        description: `Failed to send ${channel.toUpperCase()} test notification.`,
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setTestingChannel(null)
    }
  }

  const updateSettings = (channel: keyof NotificationSettings, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [field]: value
      }
    }))
  }

  const updateTemplate = (channel: keyof NotificationSettings, template: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        templates: {
          ...prev[channel].templates,
          [template]: value
        }
      }
    }))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Notification Integrations</h1>
          <p className="text-white/60 mt-2">Configure WhatsApp, SMS, and Email notifications for leads and providers</p>
        </div>
        <Button 
          onClick={saveSettings} 
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? 'Saving...' : 'Save All Settings'}
        </Button>
      </div>

      <Tabs defaultValue="whatsapp" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white/10">
          <TabsTrigger value="whatsapp" className="data-[state=active]:bg-green-600">
            <MessageSquare className="h-4 w-4 mr-2" />
            WhatsApp
          </TabsTrigger>
          <TabsTrigger value="sms" className="data-[state=active]:bg-blue-600">
            <Smartphone className="h-4 w-4 mr-2" />
            SMS
          </TabsTrigger>
          <TabsTrigger value="email" className="data-[state=active]:bg-purple-600">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </TabsTrigger>
        </TabsList>

        {/* WhatsApp Configuration */}
        <TabsContent value="whatsapp">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">WhatsApp Business API</CardTitle>
                    <CardDescription>Configure WhatsApp notifications for instant messaging</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Switch
                    checked={settings.whatsapp.enabled}
                    onCheckedChange={(checked) => updateSettings('whatsapp', 'enabled', checked)}
                  />
                  <Badge variant={settings.whatsapp.enabled ? "default" : "secondary"}>
                    {settings.whatsapp.enabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="whatsapp-api-key" className="text-white">WhatsApp API Key</Label>
                  <Input
                    id="whatsapp-api-key"
                    type="password"
                    value={settings.whatsapp.apiKey}
                    onChange={(e) => updateSettings('whatsapp', 'apiKey', e.target.value)}
                    placeholder="Enter your WhatsApp Business API key"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp-phone" className="text-white">Business Phone Number</Label>
                  <Input
                    id="whatsapp-phone"
                    value={settings.whatsapp.phoneNumber}
                    onChange={(e) => updateSettings('whatsapp', 'phoneNumber', e.target.value)}
                    placeholder="+971501234567"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="whatsapp-business-name" className="text-white">Business Name</Label>
                <Input
                  id="whatsapp-business-name"
                  value={settings.whatsapp.businessName}
                  onChange={(e) => updateSettings('whatsapp', 'businessName', e.target.value)}
                  placeholder="Homizon"
                  className="mt-2 bg-white/10 border-white/20 text-white"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Message Templates</h3>
                
                <div>
                  <Label className="text-white">Lead Assigned to Provider</Label>
                  <Textarea
                    value={settings.whatsapp.templates.leadAssigned}
                    onChange={(e) => updateTemplate('whatsapp', 'leadAssigned', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <Label className="text-white">Customer Notification</Label>
                  <Textarea
                    value={settings.whatsapp.templates.customerNotification}
                    onChange={(e) => updateTemplate('whatsapp', 'customerNotification', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <Label className="text-white">Provider Accepted</Label>
                  <Textarea
                    value={settings.whatsapp.templates.providerAccepted}
                    onChange={(e) => updateTemplate('whatsapp', 'providerAccepted', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => testNotification('whatsapp')}
                  disabled={!settings.whatsapp.enabled || testingChannel === 'whatsapp'}
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  <TestTube className="h-4 w-4 mr-2" />
                  {testingChannel === 'whatsapp' ? 'Testing...' : 'Test WhatsApp'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SMS Configuration */}
        <TabsContent value="sms">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Smartphone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">SMS Notifications</CardTitle>
                    <CardDescription>Configure SMS notifications via Twilio or other providers</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Switch
                    checked={settings.sms.enabled}
                    onCheckedChange={(checked) => updateSettings('sms', 'enabled', checked)}
                  />
                  <Badge variant={settings.sms.enabled ? "default" : "secondary"}>
                    {settings.sms.enabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="sms-provider" className="text-white">SMS Provider</Label>
                  <select
                    id="sms-provider"
                    value={settings.sms.provider}
                    onChange={(e) => updateSettings('sms', 'provider', e.target.value)}
                    className="mt-2 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  >
                    <option value="twilio">Twilio</option>
                    <option value="aws-sns">AWS SNS</option>
                    <option value="messagebird">MessageBird</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="sms-api-key" className="text-white">API Key / Auth Token</Label>
                  <Input
                    id="sms-api-key"
                    type="password"
                    value={settings.sms.apiKey}
                    onChange={(e) => updateSettings('sms', 'apiKey', e.target.value)}
                    placeholder="Enter your SMS provider API key"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="sms-sender-id" className="text-white">Sender ID</Label>
                <Input
                  id="sms-sender-id"
                  value={settings.sms.senderId}
                  onChange={(e) => updateSettings('sms', 'senderId', e.target.value)}
                  placeholder="HOMIZON"
                  className="mt-2 bg-white/10 border-white/20 text-white"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">SMS Templates</h3>
                
                <div>
                  <Label className="text-white">Lead Assigned to Provider</Label>
                  <Textarea
                    value={settings.sms.templates.leadAssigned}
                    onChange={(e) => updateTemplate('sms', 'leadAssigned', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={2}
                  />
                </div>

                <div>
                  <Label className="text-white">Customer Notification</Label>
                  <Textarea
                    value={settings.sms.templates.customerNotification}
                    onChange={(e) => updateTemplate('sms', 'customerNotification', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={2}
                  />
                </div>

                <div>
                  <Label className="text-white">Provider Accepted</Label>
                  <Textarea
                    value={settings.sms.templates.providerAccepted}
                    onChange={(e) => updateTemplate('sms', 'providerAccepted', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={2}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => testNotification('sms')}
                  disabled={!settings.sms.enabled || testingChannel === 'sms'}
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  <TestTube className="h-4 w-4 mr-2" />
                  {testingChannel === 'sms' ? 'Testing...' : 'Test SMS'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Configuration */}
        <TabsContent value="email">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Email Notifications</CardTitle>
                    <CardDescription>Configure SMTP settings for email notifications</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Switch
                    checked={settings.email.enabled}
                    onCheckedChange={(checked) => updateSettings('email', 'enabled', checked)}
                  />
                  <Badge variant={settings.email.enabled ? "default" : "secondary"}>
                    {settings.email.enabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="smtp-host" className="text-white">SMTP Host</Label>
                  <Input
                    id="smtp-host"
                    value={settings.email.smtpHost}
                    onChange={(e) => updateSettings('email', 'smtpHost', e.target.value)}
                    placeholder="smtp.gmail.com"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="smtp-port" className="text-white">SMTP Port</Label>
                  <Input
                    id="smtp-port"
                    value={settings.email.smtpPort}
                    onChange={(e) => updateSettings('email', 'smtpPort', e.target.value)}
                    placeholder="587"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="smtp-user" className="text-white">SMTP Username</Label>
                  <Input
                    id="smtp-user"
                    value={settings.email.smtpUser}
                    onChange={(e) => updateSettings('email', 'smtpUser', e.target.value)}
                    placeholder="your-email@gmail.com"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="smtp-password" className="text-white">SMTP Password</Label>
                  <Input
                    id="smtp-password"
                    type="password"
                    value={settings.email.smtpPassword}
                    onChange={(e) => updateSettings('email', 'smtpPassword', e.target.value)}
                    placeholder="Your app password"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="from-email" className="text-white">From Email</Label>
                  <Input
                    id="from-email"
                    value={settings.email.fromEmail}
                    onChange={(e) => updateSettings('email', 'fromEmail', e.target.value)}
                    placeholder="noreply@homizon.com"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="from-name" className="text-white">From Name</Label>
                  <Input
                    id="from-name"
                    value={settings.email.fromName}
                    onChange={(e) => updateSettings('email', 'fromName', e.target.value)}
                    placeholder="Homizon Support"
                    className="mt-2 bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Email Templates</h3>
                
                <div>
                  <Label className="text-white">Lead Assigned to Provider</Label>
                  <Textarea
                    value={settings.email.templates.leadAssigned}
                    onChange={(e) => updateTemplate('email', 'leadAssigned', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <Label className="text-white">Customer Notification</Label>
                  <Textarea
                    value={settings.email.templates.customerNotification}
                    onChange={(e) => updateTemplate('email', 'customerNotification', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <Label className="text-white">Provider Accepted</Label>
                  <Textarea
                    value={settings.email.templates.providerAccepted}
                    onChange={(e) => updateTemplate('email', 'providerAccepted', e.target.value)}
                    className="mt-2 bg-white/10 border-white/20 text-white"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => testNotification('email')}
                  disabled={!settings.email.enabled || testingChannel === 'email'}
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  <TestTube className="h-4 w-4 mr-2" />
                  {testingChannel === 'email' ? 'Testing...' : 'Test Email'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Template Variables Help */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Template Variables
          </CardTitle>
          <CardDescription>Available variables you can use in your message templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Customer Info</h4>
              <div className="space-y-1 text-sm text-white/70">
                <div><code>{'{{customerName}}'}</code> - Customer name</div>
                <div><code>{'{{customerPhone}}'}</code> - Customer phone</div>
                <div><code>{'{{customerEmail}}'}</code> - Customer email</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Service Info</h4>
              <div className="space-y-1 text-sm text-white/70">
                <div><code>{'{{serviceName}}'}</code> - Service name</div>
                <div><code>{'{{areaName}}'}</code> - Service area</div>
                <div><code>{'{{urgency}}'}</code> - Urgency level</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Provider Info</h4>
              <div className="space-y-1 text-sm text-white/70">
                <div><code>{'{{providerName}}'}</code> - Provider name</div>
                <div><code>{'{{companyName}}'}</code> - Company name</div>
                <div><code>{'{{providerPhone}}'}</code> - Provider phone</div>
                <div><code>{'{{responseTime}}'}</code> - Response time</div>
                <div><code>{'{{estimatedTime}}'}</code> - Estimated arrival</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}