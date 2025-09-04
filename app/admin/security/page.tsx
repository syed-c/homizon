"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Key, Activity, AlertTriangle, Eye, EyeOff,
  User, Clock, MapPin, Smartphone, Monitor, 
  Lock, Unlock, RefreshCw, Download, Filter,
  CheckCircle, XCircle, Bell, Settings, Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface SecurityLog {
  id: string;
  userId: string;
  userName: string;
  userType: 'admin' | 'provider' | 'customer';
  action: string;
  description: string;
  ipAddress: string;
  userAgent: string;
  location: string;
  timestamp: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'success' | 'failed' | 'blocked';
}

interface SecurityAlert {
  id: string;
  type: 'login_attempt' | 'password_change' | 'data_breach' | 'suspicious_activity' | 'system_update';
  title: string;
  description: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  timestamp: string;
  isRead: boolean;
  affectedUsers: number;
  actionRequired: boolean;
}

const securityLogs: SecurityLog[] = [
  {
    id: 'log-001',
    userId: 'admin-001',
    userName: 'Super Admin',
    userType: 'admin',
    action: 'Login',
    description: 'Successful admin login',
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    location: 'Dubai, UAE',
    timestamp: '2025-01-14T10:30:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'log-002',
    userId: 'provider-123',
    userName: 'Ahmed Al-Rashid',
    userType: 'provider',
    action: 'Password Change',
    description: 'User changed password',
    ipAddress: '192.168.1.105',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)',
    location: 'Dubai, UAE',
    timestamp: '2025-01-14T09:15:00Z',
    riskLevel: 'medium',
    status: 'success'
  },
  {
    id: 'log-003',
    userId: 'unknown',
    userName: 'Unknown User',
    userType: 'admin',
    action: 'Failed Login',
    description: 'Multiple failed login attempts',
    ipAddress: '203.0.113.45',
    userAgent: 'curl/7.68.0',
    location: 'Unknown, Unknown',
    timestamp: '2025-01-14T08:45:00Z',
    riskLevel: 'high',
    status: 'blocked'
  }
];

const securityAlerts: SecurityAlert[] = [
  {
    id: 'alert-001',
    type: 'suspicious_activity',
    title: 'Unusual Login Activity Detected',
    description: 'Multiple failed login attempts from IP 203.0.113.45',
    severity: 'warning',
    timestamp: '2025-01-14T08:45:00Z',
    isRead: false,
    affectedUsers: 1,
    actionRequired: true
  },
  {
    id: 'alert-002',
    type: 'system_update',
    title: 'Security Update Available',
    description: 'Critical security patch available for the platform',
    severity: 'critical',
    timestamp: '2025-01-14T06:00:00Z',
    isRead: false,
    affectedUsers: 0,
    actionRequired: true
  }
];

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showBackupCodes, setShowBackupCodes] = useState(false);
  const [logFilter, setLogFilter] = useState('all');
  const [alertFilter, setAlertFilter] = useState('all');

  const stats = [
    {
      title: 'Active Sessions',
      value: '23',
      icon: User,
      color: 'from-blue-500 to-cyan-500',
      change: '+2 from yesterday'
    },
    {
      title: 'Security Alerts',
      value: '3',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      change: '2 unread'
    },
    {
      title: 'Failed Logins',
      value: '12',
      icon: XCircle,
      color: 'from-orange-500 to-red-500',
      change: 'Last 24 hours'
    },
    {
      title: 'Security Score',
      value: '85%',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      change: '+5% improvement'
    }
  ];

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'blocked': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'error': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'critical': return 'bg-red-600/20 text-red-300 border-red-600/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredLogs = securityLogs.filter(log => {
    if (logFilter === 'all') return true;
    return log.riskLevel === logFilter;
  });

  const filteredAlerts = securityAlerts.filter(alert => {
    if (alertFilter === 'all') return true;
    if (alertFilter === 'unread') return !alert.isRead;
    return alert.severity === alertFilter;
  });

  const generateBackupCodes = () => {
    const codes = [];
    for (let i = 0; i < 8; i++) {
      codes.push(Math.random().toString(36).substring(2, 8).toUpperCase());
    }
    return codes;
  };

  const enable2FA = () => {
    setTwoFactorEnabled(true);
  };

  const disable2FA = () => {
    setTwoFactorEnabled(false);
    setShowBackupCodes(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Security Center</h1>
          <p className="text-white/60 mt-2">Monitor security, manage access, and protect your platform</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="text-gray-900 border-white/20 hover:bg-white/10">
            <Download className="h-4 w-4 mr-2" />
            Export Logs
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
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
                    <p className="text-white/50 text-xs mt-1">{stat.change}</p>
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
            <TabsList className="grid w-full grid-cols-4 bg-white/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white/20">
                Overview
              </TabsTrigger>
              <TabsTrigger value="2fa" className="data-[state=active]:bg-white/20">
                Two-Factor Auth
              </TabsTrigger>
              <TabsTrigger value="logs" className="data-[state=active]:bg-white/20">
                Activity Logs
              </TabsTrigger>
              <TabsTrigger value="alerts" className="data-[state=active]:bg-white/20">
                Security Alerts
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Security Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70">Overall Security</span>
                        <span className="text-white font-bold">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">Two-Factor Authentication</span>
                          <Badge className={twoFactorEnabled ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}>
                            {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">SSL Certificate</span>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Valid
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">Firewall Protection</span>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Active
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">Regular Backups</span>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Enabled
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {securityLogs.slice(0, 5).map((log, index) => (
                        <div key={log.id} className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            log.status === 'success' ? 'bg-green-400' :
                            log.status === 'failed' ? 'bg-red-400' : 'bg-orange-400'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-white text-sm">{log.action}</p>
                            <p className="text-white/60 text-xs">{log.userName} • {new Date(log.timestamp).toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="2fa" className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium">Enable Two-Factor Authentication</h3>
                        <p className="text-white/60 text-sm">Add an extra layer of security to your account</p>
                      </div>
                      <Switch 
                        checked={twoFactorEnabled} 
                        onCheckedChange={twoFactorEnabled ? disable2FA : enable2FA}
                      />
                    </div>

                    {twoFactorEnabled && (
                      <div className="space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <p className="text-green-400 font-medium">Two-Factor Authentication is enabled</p>
                          </div>
                          <p className="text-green-300 text-sm mt-1">Your account is protected with 2FA</p>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <Label className="text-white/70">Authentication Method</Label>
                            <Select defaultValue="app">
                              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-neutral-900 border-white/20">
                                <SelectItem value="app" className="text-white">Authenticator App</SelectItem>
                                <SelectItem value="sms" className="text-white">SMS</SelectItem>
                                <SelectItem value="email" className="text-white">Email</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="flex items-center space-x-3">
                            <Button 
                              variant="outline" 
                              className="text-gray-900 border-white/20 hover:bg-white/10"
                              onClick={() => setShowBackupCodes(!showBackupCodes)}
                            >
                              {showBackupCodes ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                              {showBackupCodes ? 'Hide' : 'Show'} Backup Codes
                            </Button>
                            <Button 
                              variant="outline" 
                              className="text-gray-900 border-white/20 hover:bg-white/10"
                            >
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Regenerate Codes
                            </Button>
                          </div>

                          {showBackupCodes && (
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                              <h4 className="text-white font-medium mb-3">Backup Codes</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {generateBackupCodes().map((code, index) => (
                                  <div key={index} className="font-mono text-white bg-white/10 px-3 py-2 rounded text-sm">
                                    {code}
                                  </div>
                                ))}
                              </div>
                              <p className="text-white/60 text-xs mt-3">
                                Save these codes in a secure place. Each code can only be used once.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="logs" className="space-y-6">
              <div className="flex items-center space-x-4">
                <Select value={logFilter} onValueChange={setLogFilter}>
                  <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Risk Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Levels</SelectItem>
                    <SelectItem value="low" className="text-white">Low Risk</SelectItem>
                    <SelectItem value="medium" className="text-white">Medium Risk</SelectItem>
                    <SelectItem value="high" className="text-white">High Risk</SelectItem>
                    <SelectItem value="critical" className="text-white">Critical</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="text-gray-900 border-white/20 hover:bg-white/10">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="space-y-4">
                {filteredLogs.map((log, index) => (
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
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <Activity className="h-6 w-6 text-white" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-white font-medium">{log.action}</h3>
                                <Badge className={getRiskColor(log.riskLevel)}>
                                  {log.riskLevel}
                                </Badge>
                                <Badge className={getStatusColor(log.status)}>
                                  {log.status}
                                </Badge>
                              </div>
                              
                              <p className="text-white/70 text-sm mb-3">{log.description}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <p className="text-white/60">User</p>
                                  <p className="text-white">{log.userName}</p>
                                </div>
                                <div>
                                  <p className="text-white/60">IP Address</p>
                                  <p className="text-white">{log.ipAddress}</p>
                                </div>
                                <div>
                                  <p className="text-white/60">Location</p>
                                  <p className="text-white">{log.location}</p>
                                </div>
                                <div>
                                  <p className="text-white/60">Time</p>
                                  <p className="text-white">{new Date(log.timestamp).toLocaleString()}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="text-gray-900 border-white/20 hover:bg-white/10">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="alerts" className="space-y-6">
              <div className="flex items-center space-x-4">
                <Select value={alertFilter} onValueChange={setAlertFilter}>
                  <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Severity" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Alerts</SelectItem>
                    <SelectItem value="unread" className="text-white">Unread</SelectItem>
                    <SelectItem value="critical" className="text-white">Critical</SelectItem>
                    <SelectItem value="warning" className="text-white">Warning</SelectItem>
                    <SelectItem value="info" className="text-white">Info</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" className="text-gray-900 border-white/20 hover:bg-white/10">
                  Mark All as Read
                </Button>
              </div>

              <div className="space-y-4">
                {filteredAlerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 ${!alert.isRead ? 'border-l-4 border-l-blue-500' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className={`w-12 h-12 bg-gradient-to-r ${
                              alert.severity === 'critical' ? 'from-red-500 to-red-600' :
                              alert.severity === 'warning' ? 'from-yellow-500 to-orange-500' :
                              alert.severity === 'error' ? 'from-red-500 to-pink-500' :
                              'from-blue-500 to-purple-500'
                            } rounded-lg flex items-center justify-center`}>
                              <AlertTriangle className="h-6 w-6 text-white" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-white font-medium">{alert.title}</h3>
                                <Badge className={getSeverityColor(alert.severity)}>
                                  {alert.severity}
                                </Badge>
                                {!alert.isRead && (
                                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                    Unread
                                  </Badge>
                                )}
                              </div>
                              
                              <p className="text-white/70 text-sm mb-3">{alert.description}</p>
                              
                              <div className="flex items-center space-x-4 text-sm text-white/60">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{new Date(alert.timestamp).toLocaleString()}</span>
                                </div>
                                {alert.affectedUsers > 0 && (
                                  <div className="flex items-center space-x-1">
                                    <User className="h-4 w-4" />
                                    <span>{alert.affectedUsers} users affected</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {alert.actionRequired && (
                              <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                                Take Action
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="text-gray-900 border-white/20 hover:bg-white/10">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}