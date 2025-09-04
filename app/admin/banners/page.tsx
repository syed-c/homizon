"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Image, Plus, Edit, Trash2, Eye, EyeOff, Calendar, 
  MapPin, Star, Settings, Upload, Link as LinkIcon,
  Monitor, Smartphone, Tablet, MoreHorizontal, Copy,
  Play, Pause, BarChart3, Clock, Target
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

interface Banner {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
  placement: 'homepage' | 'services' | 'areas' | 'service-detail' | 'area-detail';
  isActive: boolean;
  priority: number;
  startDate: string;
  endDate: string;
  targetAudience: 'all' | 'providers' | 'customers';
  clicks: number;
  impressions: number;
  createdAt: string;
}

interface PopUp {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'promotion' | 'announcement' | 'warning';
  trigger: 'page-load' | 'scroll' | 'exit-intent' | 'time-based';
  triggerValue?: number;
  targeting: {
    pages: string[];
    areas?: string[];
    services?: string[];
    newVisitors?: boolean;
    returningVisitors?: boolean;
  };
  isActive: boolean;
  schedule: {
    startDate: string;
    endDate: string;
    showFrequency: 'once' | 'daily' | 'weekly' | 'always';
  };
  performance: {
    views: number;
    clicks: number;
    conversions: number;
  };
  design: {
    backgroundColor: string;
    textColor: string;
    buttonColor: string;
    position: 'center' | 'top' | 'bottom' | 'corner';
  };
  createdAt: string;
}

const banners: Banner[] = [
  {
    id: 'banner-001',
    title: 'Special Offer: 20% Off AC Services',
    description: 'Beat the heat with our summer special! Professional AC repair and maintenance.',
    imageUrl: 'https://images.pexels.com/photos/6195142/pexels-photo-6195142.jpeg?auto=compress&cs=tinysrgb&h=400&w=800',
    linkUrl: '/services/ac-repair',
    placement: 'homepage',
    isActive: true,
    priority: 1,
    startDate: '2025-01-01T00:00:00Z',
    endDate: '2025-03-31T23:59:59Z',
    targetAudience: 'customers',
    clicks: 1250,
    impressions: 15600,
    createdAt: '2024-12-20T10:00:00Z'
  },
  {
    id: 'banner-002',
    title: 'Join Our Network of Professional Providers',
    description: 'Grow your service business with Dubai\'s leading home services platform.',
    imageUrl: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=400&w=800',
    linkUrl: '/providers/register',
    placement: 'services',
    isActive: true,
    priority: 2,
    startDate: '2025-01-01T00:00:00Z',
    endDate: '2025-12-31T23:59:59Z',
    targetAudience: 'providers',
    clicks: 456,
    impressions: 8900,
    createdAt: '2024-12-15T14:30:00Z'
  },
  {
    id: 'banner-003',
    title: 'New Areas Added: Al Ain & Sharjah',
    description: 'We\'ve expanded! Now serving Al Ain and Sharjah with the same quality service.',
    imageUrl: 'https://images.pexels.com/photos/3769013/pexels-photo-3769013.jpeg?auto=compress&cs=tinysrgb&h=400&w=800',
    linkUrl: '/areas',
    placement: 'areas',
    isActive: false,
    priority: 3,
    startDate: '2024-12-01T00:00:00Z',
    endDate: '2025-01-31T23:59:59Z',
    targetAudience: 'all',
    clicks: 234,
    impressions: 4500,
    createdAt: '2024-11-28T09:15:00Z'
  }
];

const popUps: PopUp[] = [
  {
    id: 'popup-001',
    title: 'Welcome to ServiceDubai!',
    content: 'Get 15% off your first booking. Use code WELCOME15 at checkout.',
    type: 'promotion',
    trigger: 'page-load',
    triggerValue: 3,
    targeting: {
      pages: ['homepage'],
      newVisitors: true,
      returningVisitors: false
    },
    isActive: true,
    schedule: {
      startDate: '2025-01-01T00:00:00Z',
      endDate: '2025-03-31T23:59:59Z',
      showFrequency: 'once'
    },
    performance: {
      views: 5670,
      clicks: 890,
      conversions: 156
    },
    design: {
      backgroundColor: '#1e1b4b',
      textColor: '#ffffff',
      buttonColor: '#3b82f6',
      position: 'center'
    },
    createdAt: '2024-12-20T11:00:00Z'
  },
  {
    id: 'popup-002',
    title: 'Emergency Service Available',
    content: 'Need urgent repairs? Our emergency service providers are available 24/7.',
    type: 'info',
    trigger: 'scroll',
    triggerValue: 50,
    targeting: {
      pages: ['services'],
      areas: ['dubai-marina', 'downtown-dubai'],
      services: ['ac-repair', 'electrical-work', 'plumbing']
    },
    isActive: true,
    schedule: {
      startDate: '2025-01-01T00:00:00Z',
      endDate: '2025-12-31T23:59:59Z',
      showFrequency: 'daily'
    },
    performance: {
      views: 2340,
      clicks: 234,
      conversions: 67
    },
    design: {
      backgroundColor: '#dc2626',
      textColor: '#ffffff',
      buttonColor: '#ffffff',
      position: 'bottom'
    },
    createdAt: '2024-12-18T16:45:00Z'
  }
];

export default function BannersPage() {
  const [activeTab, setActiveTab] = useState('banners');
  const [showCreateBanner, setShowCreateBanner] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
  const [selectedPopup, setSelectedPopup] = useState<PopUp | null>(null);

  const stats = [
    {
      title: 'Active Banners',
      value: banners.filter(b => b.isActive).length.toString(),
      icon: Image,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Pop-ups',
      value: popUps.filter(p => p.isActive).length.toString(),
      icon: Monitor,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Total Clicks',
      value: (banners.reduce((sum, b) => sum + b.clicks, 0) + popUps.reduce((sum, p) => sum + p.performance.clicks, 0)).toLocaleString(),
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Conversion Rate',
      value: '12.5%',
      icon: Target,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const getPlacementLabel = (placement: string) => {
    switch (placement) {
      case 'homepage': return 'Homepage';
      case 'services': return 'Services Page';
      case 'areas': return 'Areas Page';
      case 'service-detail': return 'Service Detail';
      case 'area-detail': return 'Area Detail';
      default: return placement;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'promotion': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'announcement': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'warning': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const calculateCTR = (clicks: number, impressions: number) => {
    return impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Banners & Pop-ups</h1>
          <p className="text-white/60 mt-2">Manage promotional banners and pop-up campaigns</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="text-white border-white/20 hover:bg-white/10"
            onClick={() => setShowCreateBanner(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Banner
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            onClick={() => setShowCreatePopup(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Pop-up
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
            <TabsList className="grid w-full grid-cols-2 bg-white/10">
              <TabsTrigger value="banners" className="data-[state=active]:bg-white/20">
                Banners
              </TabsTrigger>
              <TabsTrigger value="popups" className="data-[state=active]:bg-white/20">
                Pop-ups
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="banners" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {banners.map((banner, index) => (
                  <motion.div
                    key={banner.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={banner.imageUrl}
                            alt={banner.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <div className="absolute top-3 right-3 flex items-center space-x-2">
                            <Badge className={banner.isActive ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-gray-500/20 text-gray-400 border-gray-500/30'}>
                              {banner.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              {getPlacementLabel(banner.placement)}
                            </Badge>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                              <h3 className="text-white font-semibold text-sm mb-1">{banner.title}</h3>
                              <p className="text-white/80 text-xs">{banner.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-white/60 text-xs">Clicks</p>
                              <p className="text-white font-medium">{banner.clicks.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-white/60 text-xs">CTR</p>
                              <p className="text-white font-medium">{calculateCTR(banner.clicks, banner.impressions)}%</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Switch checked={banner.isActive} />
                              <span className="text-white/60 text-sm">Active</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-white/60 border-white/20 hover:bg-red-500/20 hover:text-red-400">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popups" className="space-y-6">
              <div className="space-y-4">
                {popUps.map((popup, index) => (
                  <motion.div
                    key={popup.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <h3 className="text-lg font-semibold text-white">{popup.title}</h3>
                              <Badge className={getTypeColor(popup.type)}>
                                {popup.type}
                              </Badge>
                              <Badge className={popup.isActive ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-gray-500/20 text-gray-400 border-gray-500/30'}>
                                {popup.isActive ? 'Active' : 'Inactive'}
                              </Badge>
                            </div>
                            
                            <p className="text-white/70 mb-4">{popup.content}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <p className="text-white/60 text-xs mb-1">Trigger</p>
                                <p className="text-white text-sm">{popup.trigger.replace('-', ' ')}</p>
                              </div>
                              <div>
                                <p className="text-white/60 text-xs mb-1">Target Pages</p>
                                <p className="text-white text-sm">{popup.targeting.pages.join(', ')}</p>
                              </div>
                              <div>
                                <p className="text-white/60 text-xs mb-1">Position</p>
                                <p className="text-white text-sm">{popup.design.position}</p>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <p className="text-2xl font-bold text-white">{popup.performance.views.toLocaleString()}</p>
                                <p className="text-white/60 text-xs">Views</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-white">{popup.performance.clicks.toLocaleString()}</p>
                                <p className="text-white/60 text-xs">Clicks</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-white">{popup.performance.conversions.toLocaleString()}</p>
                                <p className="text-white/60 text-xs">Conversions</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 ml-4">
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-white/60 border-white/20 hover:bg-red-500/20 hover:text-red-400">
                              <Trash2 className="h-4 w-4" />
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

      {/* Create Banner Dialog */}
      <Dialog open={showCreateBanner} onOpenChange={setShowCreateBanner}>
        <DialogContent className="bg-neutral-900 border-white/20 text-white max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create New Banner</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Banner Title</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="Enter banner title" />
              </div>
              <div>
                <Label>Placement</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select placement" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="homepage" className="text-white">Homepage</SelectItem>
                    <SelectItem value="services" className="text-white">Services Page</SelectItem>
                    <SelectItem value="areas" className="text-white">Areas Page</SelectItem>
                    <SelectItem value="service-detail" className="text-white">Service Detail</SelectItem>
                    <SelectItem value="area-detail" className="text-white">Area Detail</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Description</Label>
              <Textarea className="bg-white/10 border-white/20 text-white" placeholder="Banner description" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Image URL</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="https://example.com/image.jpg" />
              </div>
              <div>
                <Label>Link URL (Optional)</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="https://example.com/landing" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Start Date</Label>
                <Input type="datetime-local" className="bg-white/10 border-white/20 text-white" />
              </div>
              <div>
                <Label>End Date</Label>
                <Input type="datetime-local" className="bg-white/10 border-white/20 text-white" />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3">
              <Button variant="outline" className="text-white border-white/20" onClick={() => setShowCreateBanner(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Create Banner
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Pop-up Dialog */}
      <Dialog open={showCreatePopup} onOpenChange={setShowCreatePopup}>
        <DialogContent className="bg-neutral-900 border-white/20 text-white max-w-4xl">
          <DialogHeader>
            <DialogTitle>Create New Pop-up</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Pop-up Title</Label>
                <Input className="bg-white/10 border-white/20 text-white" placeholder="Enter pop-up title" />
              </div>
              <div>
                <Label>Type</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="info" className="text-white">Information</SelectItem>
                    <SelectItem value="promotion" className="text-white">Promotion</SelectItem>
                    <SelectItem value="announcement" className="text-white">Announcement</SelectItem>
                    <SelectItem value="warning" className="text-white">Warning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Content</Label>
              <Textarea className="bg-white/10 border-white/20 text-white" placeholder="Pop-up content" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Trigger</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select trigger" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="page-load" className="text-white">Page Load</SelectItem>
                    <SelectItem value="scroll" className="text-white">Scroll</SelectItem>
                    <SelectItem value="exit-intent" className="text-white">Exit Intent</SelectItem>
                    <SelectItem value="time-based" className="text-white">Time Based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Position</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="center" className="text-white">Center</SelectItem>
                    <SelectItem value="top" className="text-white">Top</SelectItem>
                    <SelectItem value="bottom" className="text-white">Bottom</SelectItem>
                    <SelectItem value="corner" className="text-white">Corner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Show Frequency</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="once" className="text-white">Once</SelectItem>
                    <SelectItem value="daily" className="text-white">Daily</SelectItem>
                    <SelectItem value="weekly" className="text-white">Weekly</SelectItem>
                    <SelectItem value="always" className="text-white">Always</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3">
              <Button variant="outline" className="text-white border-white/20" onClick={() => setShowCreatePopup(false)}>
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Create Pop-up
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}