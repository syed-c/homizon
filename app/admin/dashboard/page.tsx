"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, CheckCircle, Clock, AlertTriangle, Eye, Plus, 
  BarChart3, TrendingUp, Users, MapPin, Settings,
  RefreshCw, ExternalLink, Edit, Search
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { services, areas } from '@/lib/data';
import Link from 'next/link';

interface ServiceAreaStatus {
  service: string;
  serviceName: string;
  area: string;
  areaName: string;
  url: string;
  exists: boolean;
  status: 'published' | 'draft' | 'missing';
  lastModified?: string;
  views?: number;
}

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceAreaStatus, setServiceAreaStatus] = useState<ServiceAreaStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalCombinations: 0,
    existingPages: 0,
    missingPages: 0,
    publishedPages: 0
  });

  useEffect(() => {
    initializeStatus();
  }, []);

  const initializeStatus = async () => {
    setLoading(true);
    console.log('Initializing service-area status...');

    try {
      // Load existing pages
      const response = await fetch('/api/admin/pages?page=1&limit=1000');
      const currentPages = response.ok ? (await response.json()).pages || [] : [];
      
      // Generate status for all service-area combinations
      const allCombinations: ServiceAreaStatus[] = [];
      
      services.forEach(service => {
        areas.forEach(area => {
          const url = `/${service.slug}/${area.slug}`;
          const existingPage = currentPages.find((p: any) => 
            p.url === url || (p.service === service.slug && p.area === area.slug)
          );

          allCombinations.push({
            service: service.slug,
            serviceName: service.name,
            area: area.slug,
            areaName: area.name,
            url: url,
            exists: !!existingPage,
            status: existingPage ? existingPage.status : 'missing',
            lastModified: existingPage?.lastModified,
            views: existingPage?.views || 0
          });
        });
      });

      setServiceAreaStatus(allCombinations);

      // Calculate stats
      const totalCombinations = allCombinations.length;
      const pagesExist = allCombinations.filter(c => c.exists).length;
      const missingPages = totalCombinations - pagesExist;
      const publishedPages = allCombinations.filter(c => c.status === 'published').length;

      setStats({
        totalCombinations,
        existingPages: pagesExist,
        missingPages,
        publishedPages
      });

      console.log('Status initialized:', { totalCombinations, existingPages: pagesExist, missingPages });
    } catch (error) {
      console.error('Error loading status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAllMissing = async () => {
    if (!confirm(`This will create ${stats.missingPages} missing service-area pages. Continue?`)) {
      return;
    }

    try {
      console.log('Creating all missing pages...');
      
      // Navigate to pages management with auto-create
      window.location.href = '/admin/pages?autoCreate=true';
      
    } catch (error) {
      console.error('Error creating missing pages:', error);
    }
  };

  const filteredStatus = serviceAreaStatus.filter(item => {
    const matchesSearch = 
      item.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.areaName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'missing' && !item.exists) ||
      (statusFilter === 'exists' && item.exists) ||
      (statusFilter === item.status);
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'missing': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const dashboardStats = [
    {
      title: 'Total Combinations',
      value: stats.totalCombinations.toString(),
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      description: 'Service × Area combinations'
    },
    {
      title: 'Existing Pages',
      value: stats.existingPages.toString(),
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      description: 'Pages already created'
    },
    {
      title: 'Missing Pages',
      value: stats.missingPages.toString(),
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      description: 'Need to be created'
    },
    {
      title: 'Published',
      value: stats.publishedPages.toString(),
      icon: Eye,
      color: 'from-purple-500 to-violet-500',
      description: 'Live on website'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading dashboard...</p>
            <p className="text-white/60 text-sm">Analyzing all service-area combinations</p>
          </div>
        </div>
      )}

      {!loading && (
        <>
          {/* Enhanced Header with Clear Workflow */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Super Admin Dashboard</h1>
              <p className="text-white/60 mt-2">Complete platform control and management</p>
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <h3 className="text-blue-400 font-semibold mb-2">📋 Recommended Workflow for Page Creation</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-white/70">Add Areas in Areas Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span className="text-white/70">Create Service-Area Pages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <span className="text-white/70">Edit 700-800 word content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <span className="text-white/70">Add 10-15 professional FAQs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => window.open('/', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live Website
              </Button>
              <Button 
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10"
                onClick={initializeStatus}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Analytics
              </Button>
              {stats.missingPages > 0 && (
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                  onClick={handleCreateAllMissing}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Bulk Create {stats.missingPages} Pages
                </Button>
              )}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => (
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
                        <p className="text-white/40 text-xs mt-1">{stat.description}</p>
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

          {/* Comprehensive Management Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Core Content Management */}
            <Link href="/admin/pages" className="block">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">Pages & Content Management</h3>
                      <p className="text-white/60 text-sm mb-3">Create and edit service-area pages with 700-800 word content and comprehensive FAQs</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-green-400">✓ SEO-Optimized</span>
                        <span className="text-green-400">✓ Visual Editor</span>
                        <span className="text-green-400">✓ Instant Publishing</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/areas" className="block">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">Areas Management</h3>
                      <p className="text-white/60 text-sm mb-3">Add service areas and sub-areas for creating dedicated service pages</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-green-400">✓ Add/Edit Areas</span>
                        <span className="text-green-400">✓ Sub-Areas</span>
                        <span className="text-green-400">✓ Sector Mapping</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/services" className="block">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">Services Management</h3>
                      <p className="text-white/60 text-sm mb-3">Manage service categories and offerings available on the platform</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-green-400">✓ Service Categories</span>
                        <span className="text-green-400">✓ Pricing Tiers</span>
                        <span className="text-green-400">✓ Descriptions</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/providers" className="block">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">Providers Management</h3>
                      <p className="text-white/60 text-sm mb-3">Manage service providers, their profiles, and service area coverage</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-green-400">✓ Provider Profiles</span>
                        <span className="text-green-400">✓ Verification</span>
                        <span className="text-green-400">✓ Coverage Areas</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/pricing" className="block">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">Pricing Management</h3>
                      <p className="text-white/60 text-sm mb-3">Set and manage pricing for all services across different areas</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-green-400">✓ Dynamic Pricing</span>
                        <span className="text-green-400">✓ Area-Specific</span>
                        <span className="text-green-400">✓ Bulk Updates</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/settings" className="block">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">Platform Settings</h3>
                      <p className="text-white/60 text-sm mb-3">Configure platform-wide settings, SMTP, payment gateways, and system preferences</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-green-400">✓ SMTP Config</span>
                        <span className="text-green-400">✓ Payment Gateway</span>
                        <span className="text-green-400">✓ System Settings</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Service-Area Status Overview */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Service-Area Pages Status</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                  <Input
                    placeholder="Search service or area..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div className="flex space-x-2">
                  {['all', 'missing', 'published', 'draft'].map(filter => (
                    <Button
                      key={filter}
                      variant={statusFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStatusFilter(filter)}
                      className={statusFilter === filter ? 
                        "bg-blue-500 text-white" : 
                        "text-white border-white/20 hover:bg-white/10"
                      }
                    >
                      {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredStatus.slice(0, 50).map((item, index) => (
                  <motion.div
                    key={`${item.service}-${item.area}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.01 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-white">
                          {item.serviceName} in {item.areaName}
                        </h4>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status === 'missing' ? 'Missing' : item.status}
                        </Badge>
                      </div>
                      <p className="text-white/60 text-sm font-mono">{item.url}</p>
                      {item.lastModified && (
                        <p className="text-white/40 text-xs">Modified: {item.lastModified}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {item.exists && (
                        <>
                          <span className="text-white/60 text-sm">{item.views} views</span>
                          <Link href={item.url} target="_blank">
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href={`/admin/pages?edit=${item.service}-${item.area}`}>
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                        </>
                      )}
                      {!item.exists && (
                        <Link href={`/admin/pages?create=${item.service}-${item.area}`}>
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                            <Plus className="h-4 w-4 mr-1" />
                            Create
                          </Button>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredStatus.length > 50 && (
                <p className="text-center text-white/60 mt-4">
                  Showing 50 of {filteredStatus.length} results
                </p>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}