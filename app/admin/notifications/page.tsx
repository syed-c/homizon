"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, Plus, Edit, Trash2, Send, Eye, EyeOff, 
  Mail, MessageSquare, Calendar, Clock, Users, 
  AlertTriangle, CheckCircle, XCircle, Filter,
  Settings, Zap, Target, BarChart3, Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NotificationTemplate {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'push' | 'system';
  subject: string;
  content: string;
  trigger: 'lead-assigned' | 'booking-created' | 'booking-completed' | 'payment-received' | 'registration-approved' | 'custom';
  audience: 'customers' | 'providers' | 'admins' | 'all';
  isActive: boolean;
  variables: string[];
  createdAt: string;
  lastUsed: string;
  sentCount: number;
  openRate?: number;
  clickRate?: number;
}

interface NotificationLog {
  id: string;
  templateId: string;
  templateName: string;
  type: 'email' | 'sms' | 'push' | 'system';
  recipient: string;
  recipientType: 'customer' | 'provider' | 'admin';
  subject: string;
  content: string;
  status: 'sent' | 'delivered' | 'opened' | 'clicked' | 'failed' | 'bounced';
  sentAt: string;
  deliveredAt?: string;
  openedAt?: string;
  clickedAt?: string;
  errorMessage?: string;
}

const notificationTemplates: NotificationTemplate[] = [
  {
    id: 'template-001',
    name: 'Lead Assignment Notification',
    type: 'email',
    subject: 'New Lead Assigned - {{SERVICE_NAME}} in {{AREA_NAME}}',
    content: `Hello {{PROVIDER_NAME}},

A new lead has been assigned to you:

Service: {{SERVICE_NAME}}
Location: {{AREA_NAME}}
Customer: {{CUSTOMER_NAME}}
Budget: {{BUDGET}}
Description: {{DESCRIPTION}}

Please contact the customer within 2 hours to maintain your service quality rating.

Best regards,
ServiceDubai Team`,
    trigger: 'lead-assigned',
    audience: 'providers',
    isActive: true,
    variables: ['PROVIDER_NAME', 'SERVICE_NAME', 'AREA_NAME', 'CUSTOMER_NAME', 'BUDGET', 'DESCRIPTION'],
    createdAt: '2024-01-15T10:00:00Z',
    lastUsed: '2025-01-14T08:30:00Z',
    sentCount: 1245,
    openRate: 87.5,
    clickRate: 34.2
  },
  {
    id: 'template-002',
    name: 'Booking Confirmation',
    type: 'sms',
    subject: '',
    content: 'Hi {{CUSTOMER_NAME}}, your {{SERVICE_NAME}} booking is confirmed for {{BOOKING_DATE}} at {{BOOKING_TIME}}. Provider: {{PROVIDER_NAME}}. Track: {{TRACKING_LINK}}',
    trigger: 'booking-created',
    audience: 'customers',
    isActive: true,
    variables: ['CUSTOMER_NAME', 'SERVICE_NAME', 'BOOKING_DATE', 'BOOKING_TIME', 'PROVIDER_NAME', 'TRACKING_LINK'],
    createdAt: '2024-01-15T10:30:00Z',
    lastUsed: '2025-01-14T09:15:00Z',
    sentCount: 2156,
    openRate: 95.2,
    clickRate: 12.8
  },
  {
    id: 'template-003',
    name: 'Service Completion Survey',
    type: 'email',
    subject: 'How was your {{SERVICE_NAME}} service?',
    content: `Dear {{CUSTOMER_NAME}},

Thank you for using ServiceDubai! We hope you're satisfied with your recent {{SERVICE_NAME}} service provided by {{PROVIDER_NAME}}.

Please take a moment to rate your experience:

{{RATING_LINK}}

Your feedback helps us maintain our service quality and helps other customers make informed decisions.

Best regards,
ServiceDubai Team`,
    trigger: 'booking-completed',
    audience: 'customers',
    isActive: true,
    variables: ['CUSTOMER_NAME', 'SERVICE_NAME', 'PROVIDER_NAME', 'RATING_LINK'],
    createdAt: '2024-01-15T11:00:00Z',
    lastUsed: '2025-01-14T07:45:00Z',
    sentCount: 1876,
    openRate: 72.3,
    clickRate: 28.7
  },
  {
    id: 'template-004',
    name: 'Provider Registration Approved',
    type: 'email',
    subject: 'Welcome to ServiceDubai - Your Account is Approved!',
    content: `Congratulations {{PROVIDER_NAME}}!

Your ServiceDubai provider account has been approved. You can now start receiving leads and growing your business.

Account Details:
- Services: {{SERVICES}}
- Areas: {{AREAS}}
- Plan: {{SUBSCRIPTION_PLAN}}

Next Steps:
1. Complete your profile
2. Upload certifications
3. Set your availability
4. Start receiving leads!

Login to your dashboard: {{DASHBOARD_LINK}}

Welcome to the ServiceDubai family!`,
    trigger: 'registration-approved',
    audience: 'providers',
    isActive: true,
    variables: ['PROVIDER_NAME', 'SERVICES', 'AREAS', 'SUBSCRIPTION_PLAN', 'DASHBOARD_LINK'],
    createdAt: '2024-01-15T11:30:00Z',
    lastUsed: '2025-01-13T16:20:00Z',
    sentCount: 89,
    openRate: 91.2,
    clickRate: 65.4
  }
];

const notificationLogs: NotificationLog[] = [
  {
    id: 'log-001',
    templateId: 'template-001',
    templateName: 'Lead Assignment Notification',
    type: 'email',
    recipient: 'ahmed.alrashid@email.com',
    recipientType: 'provider',
    subject: 'New Lead Assigned - AC Repair in Dubai Marina',
    content: 'Hello Ahmed Al-Rashid, A new lead has been assigned to you...',
    status: 'opened',
    sentAt: '2025-01-14T10:30:00Z',
    deliveredAt: '2025-01-14T10:30:15Z',
    openedAt: '2025-01-14T10:45:30Z'
  },
  {
    id: 'log-002',
    templateId: 'template-002',
    templateName: 'Booking Confirmation',
    type: 'sms',
    recipient: '+971501234567',
    recipientType: 'customer',
    subject: '',
    content: 'Hi Sarah, your Deep Cleaning booking is confirmed for 2025-01-16 at 14:00...',
    status: 'delivered',
    sentAt: '2025-01-14T09:15:00Z',
    deliveredAt: '2025-01-14T09:15:08Z'
  },
  {
    id: 'log-003',
    templateId: 'template-003',
    templateName: 'Service Completion Survey',
    type: 'email',
    recipient: 'michael.chen@email.com',
    recipientType: 'customer',
    subject: 'How was your Electrical Work service?',
    content: 'Dear Michael Chen, Thank you for using ServiceDubai...',
    status: 'clicked',
    sentAt: '2025-01-14T08:00:00Z',
    deliveredAt: '2025-01-14T08:00:12Z',
    openedAt: '2025-01-14T08:30:45Z',
    clickedAt: '2025-01-14T08:32:15Z'
  },
  {
    id: 'log-004',
    templateId: 'template-001',
    templateName: 'Lead Assignment Notification',
    type: 'email',
    recipient: 'inactive@provider.com',
    recipientType: 'provider',
    subject: 'New Lead Assigned - Pest Control in Business Bay',
    content: 'Hello Provider, A new lead has been assigned to you...',
    status: 'failed',
    sentAt: '2025-01-14T07:30:00Z',
    errorMessage: 'Email address not found'
  }
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('templates');
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [showSendNotification, setShowSendNotification] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<NotificationTemplate | null>(null);
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Email settings state
  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.servicedubai.com',
    fromEmail: 'notifications@servicedubai.com',
    fromName: 'ServiceDubai'
  });

  // SMS settings state
  const [smsSettings, setSmsSettings] = useState({
    provider: 'twilio',
    apiKey: '',
    senderId: 'ServiceDubai'
  });

  // Template creation form state
  const [templateForm, setTemplateForm] = useState({
    name: '',
    type: 'email' as 'email' | 'sms' | 'push' | 'system',
    trigger: 'lead-assigned' as 'lead-assigned' | 'booking-created' | 'booking-completed' | 'payment-received' | 'registration-approved' | 'custom',
    audience: 'customers' as 'customers' | 'providers' | 'admins' | 'all',
    subject: '',
    content: ''
  });

  const stats = [
    {
      title: 'Templates',
      value: notificationTemplates.length.toString(),
      icon: Bell,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sent Today',
      value: '1,245',
      icon: Send,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Open Rate',
      value: '84.2%',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Click Rate',
      value: '28.7%',
      icon: Target,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'email': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'sms': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'push': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'system': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'delivered': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'opened': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'clicked': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'bounced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return Mail;
      case 'sms': return MessageSquare;
      case 'push': return Bell;
      case 'system': return AlertTriangle;
      default: return Bell;
    }
  };

  const filteredLogs = notificationLogs.filter(log => {
    const matchesType = filterType === 'all' || log.type === filterType;
    const matchesStatus = filterStatus === 'all' || log.status === filterStatus;
    return matchesType && matchesStatus;
  });

  const handleCreateTemplate = () => {
    console.log('Creating template:', templateForm);
    // Here you would typically send to backend
    setShowCreateTemplate(false);
    // Reset form
    setTemplateForm({
      name: '',
      type: 'email' as 'email' | 'sms' | 'push' | 'system',
      trigger: 'lead-assigned' as 'lead-assigned' | 'booking-created' | 'booking-completed' | 'payment-received' | 'registration-approved' | 'custom',
      audience: 'customers' as 'customers' | 'providers' | 'admins' | 'all',
      subject: '',
      content: ''
    });
  };

  const handleCloseDialog = () => {
    setShowCreateTemplate(false);
    // Reset form
    setTemplateForm({
      name: '',
      type: 'email' as 'email' | 'sms' | 'push' | 'system',
      trigger: 'lead-assigned' as 'lead-assigned' | 'booking-created' | 'booking-completed' | 'payment-received' | 'registration-approved' | 'custom',
      audience: 'customers' as 'customers' | 'providers' | 'admins' | 'all',
      subject: '',
      content: ''
    });
  };

  const handleSaveEmailSettings = () => {
    console.log('Saving email settings:', emailSettings);
    // Here you would typically send to backend
  };

  const handleSaveSmsSettings = () => {
    console.log('Saving SMS settings:', smsSettings);
    // Here you would typically send to backend
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Notifications & Templates</h1>
          <p className="text-white/60 mt-2">Manage notification templates and communication logs</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-white border-white/20 hover:bg-white/10"
            onClick={() => setShowSendNotification(true)}
          >
            <Send className="h-4 w-4 mr-2" />
            Send Notification
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            onClick={() => setShowCreateTemplate(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Template
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10">
              <TabsTrigger value="templates" className="data-[state=active]:bg-white/20">
                Templates
              </TabsTrigger>
              <TabsTrigger value="logs" className="data-[state=active]:bg-white/20">
                Notification Logs
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-white/20">
                Settings
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="templates" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notificationTemplates.map((template, index) => {
                  const TypeIcon = getTypeIcon(template.type);
                  
                  return (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${getTypeColor(template.type).includes('blue') ? 'from-blue-500 to-blue-600' : 
                                getTypeColor(template.type).includes('green') ? 'from-green-500 to-green-600' :
                                getTypeColor(template.type).includes('purple') ? 'from-purple-500 to-purple-600' :
                                'from-orange-500 to-orange-600'} rounded-lg flex items-center justify-center`}>
                                <TypeIcon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-semibold">{template.name}</h3>
                                <p className="text-white/60 text-sm">{template.audience}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getTypeColor(template.type)}>
                                {template.type}
                              </Badge>
                              <Switch 
                                checked={template.isActive} 
                                onCheckedChange={(checked) => {
                                  console.log(`Template ${template.id} active status changed to:`, checked);
                                  // Here you would typically update the backend
                                }}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <p className="text-white/60 text-xs mb-1">Subject</p>
                              <p className="text-white text-sm">{template.subject || 'SMS Template'}</p>
                            </div>
                            
                            <div>
                              <p className="text-white/60 text-xs mb-1">Content Preview</p>
                              <p className="text-white/80 text-sm line-clamp-2">{template.content}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
                              <div className="text-center">
                                <p className="text-white font-medium">{template.sentCount.toLocaleString()}</p>
                                <p className="text-white/60 text-xs">Sent</p>
                              </div>
                              <div className="text-center">
                                <p className="text-white font-medium">{template.openRate ? `${template.openRate}%` : 'N/A'}</p>
                                <p className="text-white/60 text-xs">Open Rate</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 pt-4 border-t border-white/10 mt-4">
                            <Button variant="outline" size="sm" className="flex-1 text-white border-white/20 hover:bg-white/10">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="logs" className="space-y-6">
              <div className="flex items-center space-x-4">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Types</SelectItem>
                    <SelectItem value="email" className="text-white">Email</SelectItem>
                    <SelectItem value="sms" className="text-white">SMS</SelectItem>
                    <SelectItem value="push" className="text-white">Push</SelectItem>
                    <SelectItem value="system" className="text-white">System</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Status</SelectItem>
                    <SelectItem value="sent" className="text-white">Sent</SelectItem>
                    <SelectItem value="delivered" className="text-white">Delivered</SelectItem>
                    <SelectItem value="opened" className="text-white">Opened</SelectItem>
                    <SelectItem value="clicked" className="text-white">Clicked</SelectItem>
                    <SelectItem value="failed" className="text-white">Failed</SelectItem>
                    <SelectItem value="bounced" className="text-white">Bounced</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="space-y-4">
                {filteredLogs.map((log, index) => {
                  const TypeIcon = getTypeIcon(log.type);
                  
                  return (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                              <div className={`w-10 h-10 bg-gradient-to-r ${getTypeColor(log.type).includes('blue') ? 'from-blue-500 to-blue-600' : 
                                getTypeColor(log.type).includes('green') ? 'from-green-500 to-green-600' :
                                getTypeColor(log.type).includes('purple') ? 'from-purple-500 to-purple-600' :
                                'from-orange-500 to-orange-600'} rounded-lg flex items-center justify-center`}>
                                <TypeIcon className="h-5 w-5 text-white" />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-white font-medium">{log.templateName}</h3>
                                  <Badge className={getTypeColor(log.type)}>
                                    {log.type}
                                  </Badge>
                                  <Badge className={getStatusColor(log.status)}>
                                    {log.status}
                                  </Badge>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                  <div>
                                    <p className="text-white/60 text-xs">Recipient</p>
                                    <p className="text-white text-sm">{log.recipient}</p>
                                  </div>
                                  <div>
                                    <p className="text-white/60 text-xs">Sent At</p>
                                    <p className="text-white text-sm">{new Date(log.sentAt).toLocaleString()}</p>
                                  </div>
                                </div>
                                
                                {log.subject && (
                                  <div className="mb-3">
                                    <p className="text-white/60 text-xs">Subject</p>
                                    <p className="text-white text-sm">{log.subject}</p>
                                  </div>
                                )}
                                
                                {log.errorMessage && (
                                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                                    <p className="text-red-400 text-sm">{log.errorMessage}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Email Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white/70">SMTP Server</Label>
                      <Input 
                        className="bg-white/10 border-white/20 text-white" 
                        value={emailSettings.smtpServer}
                        onChange={(e) => setEmailSettings({...emailSettings, smtpServer: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label className="text-white/70">From Email</Label>
                      <Input 
                        className="bg-white/10 border-white/20 text-white" 
                        value={emailSettings.fromEmail}
                        onChange={(e) => setEmailSettings({...emailSettings, fromEmail: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label className="text-white/70">From Name</Label>
                      <Input 
                        className="bg-white/10 border-white/20 text-white" 
                        value={emailSettings.fromName}
                        onChange={(e) => setEmailSettings({...emailSettings, fromName: e.target.value})}
                      />
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                      onClick={handleSaveEmailSettings}
                    >
                      Save Email Settings
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">SMS Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white/70">SMS Provider</Label>
                      <Select value={smsSettings.provider} onValueChange={(value) => setSmsSettings({...smsSettings, provider: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-white/20">
                          <SelectItem value="twilio" className="text-white">Twilio</SelectItem>
                          <SelectItem value="aws-sns" className="text-white">AWS SNS</SelectItem>
                          <SelectItem value="nexmo" className="text-white">Nexmo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white/70">API Key</Label>
                      <Input 
                        className="bg-white/10 border-white/20 text-white" 
                        type="password" 
                        placeholder="Enter API key" 
                        value={smsSettings.apiKey}
                        onChange={(e) => setSmsSettings({...smsSettings, apiKey: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label className="text-white/70">Sender ID</Label>
                      <Input 
                        className="bg-white/10 border-white/20 text-white" 
                        value={smsSettings.senderId}
                        onChange={(e) => setSmsSettings({...smsSettings, senderId: e.target.value})}
                      />
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                      onClick={handleSaveSmsSettings}
                    >
                      Save SMS Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Create Template Dialog */}
      <Dialog open={showCreateTemplate} onOpenChange={handleCloseDialog}>
        <DialogContent className="bg-neutral-900 border-white/20 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create Notification Template</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Template Name</Label>
                <Input 
                  className="bg-white/10 border-white/20 text-white" 
                  placeholder="Enter template name" 
                  value={templateForm.name}
                  onChange={(e) => setTemplateForm({...templateForm, name: e.target.value})}
                />
              </div>
              <div>
                <Label>Type</Label>
                <Select value={templateForm.type} onValueChange={(value) => setTemplateForm({...templateForm, type: value})}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="email" className="text-white">Email</SelectItem>
                    <SelectItem value="sms" className="text-white">SMS</SelectItem>
                    <SelectItem value="push" className="text-white">Push Notification</SelectItem>
                    <SelectItem value="system" className="text-white">System Notification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Trigger</Label>
                <Select value={templateForm.trigger} onValueChange={(value) => setTemplateForm({...templateForm, trigger: value})}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select trigger" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="lead-assigned" className="text-white">Lead Assigned</SelectItem>
                    <SelectItem value="booking-created" className="text-white">Booking Created</SelectItem>
                    <SelectItem value="booking-completed" className="text-white">Booking Completed</SelectItem>
                    <SelectItem value="payment-received" className="text-white">Payment Received</SelectItem>
                    <SelectItem value="registration-approved" className="text-white">Registration Approved</SelectItem>
                    <SelectItem value="custom" className="text-white">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Audience</Label>
                <Select value={templateForm.audience} onValueChange={(value) => setTemplateForm({...templateForm, audience: value})}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="customers" className="text-white">Customers</SelectItem>
                    <SelectItem value="providers" className="text-white">Providers</SelectItem>
                    <SelectItem value="admins" className="text-white">Admins</SelectItem>
                    <SelectItem value="all" className="text-white">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Subject (Email only)</Label>
              <Input 
                className="bg-white/10 border-white/20 text-white" 
                placeholder="Enter subject" 
                value={templateForm.subject}
                onChange={(e) => setTemplateForm({...templateForm, subject: e.target.value})}
              />
            </div>
            
            <div>
              <Label>Content</Label>
              <Textarea 
                className="bg-white/10 border-white/20 text-white h-32" 
                placeholder="Enter notification content. Use {{VARIABLE_NAME}} for dynamic content."
                value={templateForm.content}
                onChange={(e) => setTemplateForm({...templateForm, content: e.target.value})}
              />
            </div>
            
            <div className="flex items-center justify-end space-x-3">
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10" 
                onClick={handleCloseDialog}
              >
                Cancel
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                onClick={handleCreateTemplate}
              >
                Create Template
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}