"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Search, Filter, Plus, Trash2, Save, Eye,
  Wind, Droplets, Sparkles, Bug, Wrench, Zap, Hammer, Shirt,
  Truck, Shield, TrendingUp, Users, DollarSign, Clock, Star,
  CheckCircle, X, MoreHorizontal, Package
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { services, Service, serviceCategories } from '@/lib/data';
import { listServicesFromSupabase, updateServiceStatusInSupabase, deleteServiceFromSupabase, createServiceInSupabase } from '@/lib/supabase';

interface ServiceData extends Service {
  providerCount: number;
  totalBookings: number;
  averageRating: number;
  revenue: number;
  isActive: boolean;
  lastUpdated: string;
}

const iconMap: { [key: string]: any } = {
  Wind, Droplets, Sparkles, Bug, Wrench, Zap, Hammer, Shirt, Truck, Shield, Settings, Package
};

// Stable UUIDs to persist category selection in Supabase (no categories table required)
const categorySlugToUuid: Record<string, string> = {
  'ac-repair-cleaning': '11111111-1111-1111-1111-111111111111',
  'appliance-repair': '22222222-2222-2222-2222-222222222222',
  'deep-cleaning': '33333333-3333-3333-3333-333333333333',
  'pest-control': '44444444-4444-4444-4444-444444444444',
  'plumbing': '55555555-5555-5555-5555-555555555555',
  'electrician': '66666666-6666-6666-6666-666666666666',
  'handyman': '77777777-7777-7777-7777-777777777777',
  'laundry': '88888888-8888-8888-8888-888888888888',
  'packers-movers': '99999999-9999-9999-9999-999999999999',
  'sanitization': 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
};
const categoryUuidToSlug: Record<string, string> = Object.fromEntries(Object.entries(categorySlugToUuid).map(([k,v])=>[v,k]));

export default function ServicesManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [servicesData, setServicesData] = useState<ServiceData[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceSlug, setNewServiceSlug] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [newServiceCategoryId, setNewServiceCategoryId] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Initialize services data
  useEffect(() => {
    initializeServicesData();
  }, []);

  const initializeServicesData = async () => {
    setLoading(true);
    try {
      const res = await listServicesFromSupabase();
      const db = res.data || [];
      // merge with local metadata for demo fields
      const enhanced: ServiceData[] = db.map((row: any) => {
        const base = services.find(s => s.slug === row.slug);
        const categoryFromDb = row.category_id ? (categoryUuidToSlug[String(row.category_id)] || 'general') : 'general';
        return {
          ...(base || {
            id: row.id,
            name: row.name,
            slug: row.slug,
            description: `${row.name} services`,
            category: categoryFromDb,
            icon: 'Settings',
            averagePrice: 'AED 0',
            estimatedTime: '—',
            isPopular: false,
          }),
          providerCount: Math.floor(Math.random() * 20) + 5,
          totalBookings: Math.floor(Math.random() * 1000) + 200,
          averageRating: Math.round((Math.random() * 2 + 3) * 10) / 10,
          revenue: Math.floor(Math.random() * 50000) + 10000,
          isActive: row.status === 'active',
          lastUpdated: row.updated_at || new Date().toISOString().split('T')[0]
        } as ServiceData;
      });
      setServicesData(enhanced);
    } catch (e) {
      console.warn('Falling back to local services:', e);
      const enhancedServices: ServiceData[] = services.map(service => ({
        ...service,
        providerCount: Math.floor(Math.random() * 20) + 5,
        totalBookings: Math.floor(Math.random() * 1000) + 200,
        averageRating: Math.round((Math.random() * 2 + 3) * 10) / 10,
        revenue: Math.floor(Math.random() * 50000) + 10000,
        isActive: true,
        lastUpdated: new Date().toISOString().split('T')[0]
      }));
      setServicesData(enhancedServices);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleServiceStatus = async (serviceId: string, slug: string, active: boolean) => {
    try {
      setServicesData(prev => prev.map(s => s.id === serviceId ? { ...s, isActive: !active } : s));
      await updateServiceStatusInSupabase(serviceId, active ? 'inactive' : 'active');
    } catch (e) {
      console.error(e);
      setServicesData(prev => prev.map(s => s.id === serviceId ? { ...s, isActive: active } : s));
      alert('Failed to update status');
    }
  };

  // Edit service modal removed; content edits are done via Pages Editor.

  const handleDeleteService = async (serviceId: string, slug: string) => {
    if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
      try {
        setServicesData(prev => prev.filter(service => service.id !== serviceId));
        await deleteServiceFromSupabase(serviceId, slug);
        alert('Service deleted successfully!');
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const openAddModal = () => {
    setNewServiceName('');
    setNewServiceSlug('');
    setNewServiceCategoryId('');
    setIsAddModalOpen(true);
  };

  const handleCreateService = async () => {
    if (!newServiceName || !newServiceSlug) return;
    setIsSaving(true);
    try {
      // Persist category using a stable UUID so it fits the `uuid` column
      const categoryUuid = newServiceCategoryId ? (categorySlugToUuid[newServiceCategoryId] || null) : null;
      const res = await createServiceInSupabase(newServiceName, newServiceSlug, categoryUuid);
      const row: any = res.data;
      setServicesData(prev => [{
        ...(services.find(s => s.slug === row.slug) || {
          id: row.id,
          name: row.name,
          slug: row.slug,
          description: `${row.name} services`,
          category: categoryUuid ? (categoryUuidToSlug[categoryUuid] || 'general') : 'general',
          icon: 'Settings',
          averagePrice: 'AED 0',
          estimatedTime: '—',
          isPopular: false,
          keywords: [row.name]
        }),
        providerCount: 0,
        totalBookings: 0,
        averageRating: 0,
        revenue: 0,
        isActive: true,
        lastUpdated: new Date().toISOString().split('T')[0]
      }, ...prev]);
      setIsAddModalOpen(false);
      alert('Service created and editor entry seeded.');
    } catch (e) {
      console.error(e);
      alert('Failed to create service');
    } finally {
      setIsSaving(false);
    }
  };

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && service.isActive) ||
                         (statusFilter === 'inactive' && !service.isActive) ||
                         (statusFilter === 'popular' && service.isPopular);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const stats = [
    {
      title: 'Total Services',
      value: servicesData.length.toString(),
      icon: Settings,
      color: 'from-blue-500 to-cyan-500',
      description: 'Available services'
    },
    {
      title: 'Active Services',
      value: servicesData.filter(s => s.isActive).length.toString(),
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      description: 'Currently active'
    },
    {
      title: 'Total Providers',
      value: servicesData.reduce((sum, s) => sum + s.providerCount, 0).toString(),
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      description: 'Across all services'
    },
    {
      title: 'Total Revenue',
      value: `AED ${Math.round(servicesData.reduce((sum, s) => sum + s.revenue, 0) / 1000)}K`,
      icon: DollarSign,
      color: 'from-orange-500 to-red-500',
      description: 'Monthly revenue'
    }
  ];

  const categories = serviceCategories.map(cat => ({ value: cat.id, label: cat.name }));

  return (
    <div className="space-y-8">
      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading services data...</p>
            <p className="text-white/60 text-sm">Analyzing all platform services</p>
          </div>
        </div>
      )}

      {!loading && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Services Management</h1>
              <p className="text-white/60 mt-2">Manage all services and categories on your platform</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => window.open('/services', '_blank')}
              >
                <Eye className="h-4 w-4 mr-2" />
                View Public Services
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white" onClick={openAddModal}>
                <Plus className="h-4 w-4 mr-2" />
                Add New Service
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

          {/* Filters and Search */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                  <Input
                    placeholder="Search services by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value} className="text-white">
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Status</SelectItem>
                    <SelectItem value="active" className="text-white">Active</SelectItem>
                    <SelectItem value="inactive" className="text-white">Inactive</SelectItem>
                    <SelectItem value="popular" className="text-white">Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Services List */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">All Services ({filteredServices.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredServices.map((service, index) => {
                  const IconComponent = iconMap[service.icon] || Settings;
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                              <Badge className={service.isActive ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}>
                                {service.isActive ? 'Active' : 'Inactive'}
                              </Badge>
                              {service.isPopular && (
                                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            
                            <p className="text-white/60 text-sm mb-4">{service.description}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                              <div>
                                <p className="text-white/50 mb-1">Providers</p>
                                <p className="text-white font-medium">{service.providerCount}</p>
                              </div>
                              <div>
                                <p className="text-white/50 mb-1">Bookings</p>
                                <p className="text-white font-medium">{service.totalBookings.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-white/50 mb-1">Avg Rating</p>
                                <p className="text-white font-medium">{service.averageRating}/5.0</p>
                              </div>
                              <div>
                                <p className="text-white/50 mb-1">Revenue</p>
                                <p className="text-white font-medium">AED {service.revenue.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-white/50 mb-1">Price Range</p>
                                <p className="text-white font-medium">{service.averagePrice}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-white border-white/20 hover:bg-white/10"
                            onClick={() => window.open(`/services/${service.slug}`, '_blank')}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className={service.isActive ? 'text-red-400 border-red-400/20 hover:bg-red-400/10' : 'text-green-400 border-green-400/20 hover:bg-green-400/10'}
                            onClick={() => handleToggleServiceStatus(service.id, service.slug, service.isActive)}
                          >
                            {service.isActive ? <X className="h-4 w-4 mr-1" /> : <CheckCircle className="h-4 w-4 mr-1" />}
                            {service.isActive ? 'Deactivate' : 'Activate'}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="text-white/60 border-white/20 hover:bg-white/10"
                            onClick={() => handleDeleteService(service.id, service.slug)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/50">
                        Last updated: {service.lastUpdated} • Category: {service.category}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <Settings className="h-12 w-12 text-white/30 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No services found</h3>
                  <p className="text-white/60">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Add Service Modal */}
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogContent className="max-w-md bg-neutral-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Add New Service</DialogTitle>
                <DialogDescription className="text-white/60">
                  Create a new service. An editor entry will be created automatically.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <Label className="text-white">Service Name</Label>
                  <Input className="bg-white/10 border-white/20 text-white" value={newServiceName} onChange={(e)=>{setNewServiceName(e.target.value); setNewServiceSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''));}} />
                </div>
                <div>
                  <Label className="text-white">Service Slug</Label>
                  <Input className="bg-white/10 border-white/20 text-white" value={newServiceSlug} onChange={(e)=>setNewServiceSlug(e.target.value)} />
                </div>
                <div>
                  <Label className="text-white">Category</Label>
                  <Select value={newServiceCategoryId} onValueChange={setNewServiceCategoryId}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white h-10 mt-1">
                      <SelectValue placeholder="Select category (optional)" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20">
                      {serviceCategories.map(cat => (
                        <SelectItem key={cat.id} value={cat.id} className="text-white">{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end space-x-3 pt-2">
                  <Button variant="outline" className="text-white border-white/20" onClick={()=>setIsAddModalOpen(false)}>Cancel</Button>
                  <Button disabled={isSaving || !newServiceName || !newServiceSlug} onClick={handleCreateService} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">{isSaving ? 'Saving...' : 'Create Service'}</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}