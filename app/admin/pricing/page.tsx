"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, Search, Filter, Save, RefreshCw, TrendingUp, 
  TrendingDown, AlertTriangle, CheckCircle, Edit3, Settings,
  BarChart3, PieChart, Calendar, Download, Upload, X, Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { services, serviceCategories, sampleProviders } from '@/lib/data';

interface PricingData {
  serviceId: string;
  serviceName: string;
  category: string;
  averagePrice: string;
  minPrice: number;
  maxPrice: number;
  currency: string;
  lastUpdated: string;
  providerCount: number;
  demandLevel: 'low' | 'medium' | 'high';
  recommendations?: string;
}

interface ProviderPricing {
  providerId: string;
  providerName: string;
  serviceId: string;
  basePrice: number;
  currency: string;
  lastUpdated: string;
  isActive: boolean;
}

export default function PricingManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [demandFilter, setDemandFilter] = useState('all');
  const [pricingData, setPricingData] = useState<PricingData[]>([]);
  const [providerPricing, setProviderPricing] = useState<ProviderPricing[]>([]);
  const [editingPricing, setEditingPricing] = useState<PricingData | null>(null);
  const [editingProvider, setEditingProvider] = useState<ProviderPricing | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load pricing data from API
  useEffect(() => {
    loadPricingData();
  }, []);

  const loadPricingData = async () => {
    try {
      setLoading(true);
      console.log('Loading pricing data from API...');
      
      const response = await fetch('/api/admin/pricing?page=1&limit=50');
      if (response.ok) {
        const data = await response.json();
        setPricingData(data.services || []);
        setProviderPricing(data.providers || []);
        console.log('Loaded pricing data:', { services: data.services?.length, providers: data.providers?.length });
      } else {
        console.error('Failed to load pricing data:', response.status);
        // Use simplified fallback data
        const fallbackServices: PricingData[] = [
          {
            serviceId: 'ac-repair',
            serviceName: 'AC Repair & Maintenance',
            category: 'ac-repair-cleaning',
            averagePrice: 'AED 150-300',
            minPrice: 150,
            maxPrice: 300,
            currency: 'AED',
            lastUpdated: '2024-01-15',
            providerCount: 15,
            demandLevel: 'high',
            recommendations: 'Popular service with steady demand'
          }
        ];
        setPricingData(fallbackServices);
        setProviderPricing([]);
      }
    } catch (error) {
      console.error('Error loading pricing data:', error);
      setPricingData([]);
      setProviderPricing([]);
    } finally {
      setLoading(false);
    }
  };

  // Initialize pricing data
  useEffect(() => {
    initializePricingData();
  }, []);

  const initializePricingData = async () => {
    setLoading(true);
    console.log('Loading pricing data from API...');
    
    try {
      const response = await fetch('/api/admin/pricing?page=1&limit=50');
      if (response.ok) {
        const data = await response.json();
        setPricingData(data.services || []);
        setProviderPricing(data.providers || []);
        console.log('Loaded pricing data:', { services: data.services?.length, providers: data.providers?.length });
      } else {
        console.error('Failed to load pricing data:', response.status);
        // Use fallback initialization
        initializeLocalData();
      }
    } catch (error) {
      console.error('Error loading pricing data:', error);
      initializeLocalData();
    } finally {
      setLoading(false);
    }
  };

  const initializeLocalData = () => {
    console.log('Initializing local pricing data...');
    
    // Generate service pricing data (limited to avoid timeout)
    const servicePricing: PricingData[] = services.slice(0, 10).map(service => {
      const providersForService = sampleProviders.filter(p => p.services.includes(service.slug));
      const prices = providersForService.map(p => p.pricing[service.id]?.basePrice || 0).filter(p => p > 0);
      
      const minPrice = prices.length > 0 ? Math.min(...prices) : 100;
      const maxPrice = prices.length > 0 ? Math.max(...prices) : 500;
      const demandLevel = providersForService.length > 3 ? 'high' : providersForService.length > 1 ? 'medium' : 'low';
      
      return {
        serviceId: service.id,
        serviceName: service.name,
        category: service.category,
        averagePrice: service.averagePrice,
        minPrice,
        maxPrice,
        currency: 'AED',
        lastUpdated: new Date().toISOString().split('T')[0],
        providerCount: providersForService.length,
        demandLevel,
        recommendations: `Based on ${providersForService.length} providers, consider adjusting pricing for better competitiveness.`
      };
    });

    // Generate provider pricing data (limited)
    const providerPricingData: ProviderPricing[] = [];
    sampleProviders.slice(0, 15).forEach(provider => {
      Object.entries(provider.pricing).forEach(([serviceId, pricing]) => {
        const service = services.find(s => s.id === serviceId);
        if (service) {
          providerPricingData.push({
            providerId: provider.id,
            providerName: provider.name,
            serviceId: service.id,
            basePrice: pricing.basePrice,
            currency: pricing.currency,
            lastUpdated: new Date().toISOString().split('T')[0],
            isActive: provider.isApproved
          });
        }
      });
    });

    setPricingData(servicePricing);
    setProviderPricing(providerPricingData);
    console.log('Local pricing data initialized:', { services: servicePricing.length, providers: providerPricingData.length });
  };

  const handleSaveServicePricing = async (pricing: PricingData) => {
    setIsSaving(true);
    try {
      console.log('Saving service pricing:', pricing);
      
      const response = await fetch('/api/admin/pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'service',
          ...pricing
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save service pricing');
      }

      const result = await response.json();
      
      // Update the local state
      setPricingData(prev => 
        prev.map(p => 
          p.serviceId === pricing.serviceId 
            ? { ...pricing, lastUpdated: new Date().toISOString().split('T')[0] }
            : p
        )
      );
      
      toast({
        title: "Success!",
        description: "Service pricing updated successfully and changes are now live on the website.",
      });
      
      setIsServiceModalOpen(false);
      setEditingPricing(null);
    } catch (error) {
      console.error('Error saving service pricing:', error);
      toast({
        title: "Error",
        description: "Failed to save service pricing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveProviderPricing = async (pricing: ProviderPricing) => {
    setIsSaving(true);
    try {
      console.log('Saving provider pricing:', pricing);
      
      const response = await fetch('/api/admin/pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'provider',
          ...pricing
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save provider pricing');
      }

      const result = await response.json();
      
      // Update the local state
      setProviderPricing(prev => 
        prev.map(p => 
          p.providerId === pricing.providerId && p.serviceId === pricing.serviceId
            ? { ...pricing, lastUpdated: new Date().toISOString().split('T')[0] }
            : p
        )
      );
      
      toast({
        title: "Success!",
        description: "Provider pricing updated successfully and changes are now live on the website.",
      });
      
      setIsProviderModalOpen(false);
      setEditingProvider(null);
    } catch (error) {
      console.error('Error saving provider pricing:', error);
      toast({
        title: "Error",
        description: "Failed to save provider pricing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditServicePricing = (pricing: PricingData) => {
    setEditingPricing({ ...pricing });
    setIsServiceModalOpen(true);
  };

  const handleEditProviderPricing = (pricing: ProviderPricing) => {
    setEditingProvider({ ...pricing });
    setIsProviderModalOpen(true);
  };

  const handleBulkPriceUpdate = async (percentage: number) => {
    setIsSaving(true);
    try {
      console.log('Applying bulk price update:', percentage);
      
      const response = await fetch('/api/admin/pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'bulk',
          percentage,
          target: 'all'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to apply bulk price update');
      }

      const result = await response.json();
      
      // Reload pricing data to reflect changes
      await initializePricingData();
      
      toast({
        title: "Success!",
        description: `All prices updated by ${percentage}% and changes are now live on the website.`,
      });
      
    } catch (error) {
      console.error('Error applying bulk update:', error);
      toast({
        title: "Error",
        description: "Failed to apply bulk price update. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const filteredPricingData = pricingData.filter(pricing => {
    const matchesSearch = pricing.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pricing.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || pricing.category === categoryFilter;
    const matchesDemand = demandFilter === 'all' || pricing.demandLevel === demandFilter;
    
    return matchesSearch && matchesCategory && matchesDemand;
  });

  const filteredProviderPricing = providerPricing.filter(pricing => {
    const service = services.find(s => s.id === pricing.serviceId);
    const matchesSearch = pricing.providerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service?.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service?.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const getDemandColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const stats = [
    {
      title: 'Total Services',
      value: pricingData.length.toString(),
      icon: DollarSign,
      color: 'from-blue-500 to-cyan-500',
      description: 'Services with pricing'
    },
    {
      title: 'Avg Price Range',
      value: `AED ${Math.round(pricingData.reduce((sum, p) => sum + p.minPrice, 0) / pricingData.length || 0)}-${Math.round(pricingData.reduce((sum, p) => sum + p.maxPrice, 0) / pricingData.length || 0)}`,
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      description: 'Average price range'
    },
    {
      title: 'Provider Prices',
      value: providerPricing.length.toString(),
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      description: 'Individual provider prices'
    },
    {
      title: 'High Demand',
      value: pricingData.filter(p => p.demandLevel === 'high').length.toString(),
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      description: 'Services in high demand'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading pricing data...</p>
            <p className="text-white/60 text-sm">Analyzing all service and provider pricing</p>
          </div>
        </div>
      )}

      {!loading && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Pricing Management</h1>
              <p className="text-white/60 mt-2">Manage service pricing and provider rates across the platform</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => handleBulkPriceUpdate(5)}
                disabled={isSaving}
              >
                {isSaving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <TrendingUp className="h-4 w-4 mr-2" />}
                +5% Bulk Increase
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => handleBulkPriceUpdate(-5)}
                disabled={isSaving}
              >
                {isSaving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <TrendingDown className="h-4 w-4 mr-2" />}
                -5% Bulk Decrease
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                <Download className="h-4 w-4 mr-2" />
                Export Pricing
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

          {/* Filters */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                  <Input
                    placeholder="Search services or providers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
                    {serviceCategories.map(category => (
                      <SelectItem key={category.id} value={category.slug} className="text-white">
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={demandFilter} onValueChange={setDemandFilter}>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Demand Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Demand Levels</SelectItem>
                    <SelectItem value="high" className="text-white">High Demand</SelectItem>
                    <SelectItem value="medium" className="text-white">Medium Demand</SelectItem>
                    <SelectItem value="low" className="text-white">Low Demand</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Tables */}
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/10">
              <TabsTrigger value="services" className="text-white">Service Pricing</TabsTrigger>
              <TabsTrigger value="providers" className="text-white">Provider Pricing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="services" className="space-y-4">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Service Pricing ({filteredPricingData.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredPricingData.map((pricing, index) => (
                      <motion.div
                        key={pricing.serviceId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.02 }}
                        className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-white">{pricing.serviceName}</h3>
                              <Badge className={getDemandColor(pricing.demandLevel)}>
                                {pricing.demandLevel} demand
                              </Badge>
                              <Badge variant="secondary" className="bg-white/10 text-white border-0">
                                {pricing.providerCount} providers
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-white/50 mb-1">Current Range</p>
                                <p className="text-white font-medium">{pricing.averagePrice}</p>
                              </div>
                              <div>
                                <p className="text-white/50 mb-1">Min Price</p>
                                <p className="text-white font-medium">{pricing.currency} {pricing.minPrice}</p>
                              </div>
                              <div>
                                <p className="text-white/50 mb-1">Max Price</p>
                                <p className="text-white font-medium">{pricing.currency} {pricing.maxPrice}</p>
                              </div>
                              <div>
                                <p className="text-white/50 mb-1">Last Updated</p>
                                <p className="text-white font-medium">{pricing.lastUpdated}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 ml-4">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-white border-white/20 hover:bg-white/10"
                              onClick={() => handleEditServicePricing(pricing)}
                            >
                              <Edit3 className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="providers" className="space-y-4">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Provider Pricing ({filteredProviderPricing.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredProviderPricing.map((pricing, index) => {
                      const service = services.find(s => s.id === pricing.serviceId);
                      return (
                        <motion.div
                          key={`${pricing.providerId}-${pricing.serviceId}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.02 }}
                          className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-lg font-semibold text-white">{pricing.providerName}</h3>
                                <Badge className={pricing.isActive ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'}>
                                  {pricing.isActive ? 'Active' : 'Inactive'}
                                </Badge>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <p className="text-white/50 mb-1">Service</p>
                                  <p className="text-white font-medium">{service?.name}</p>
                                </div>
                                <div>
                                  <p className="text-white/50 mb-1">Base Price</p>
                                  <p className="text-white font-medium">{pricing.currency} {pricing.basePrice}</p>
                                </div>
                                <div>
                                  <p className="text-white/50 mb-1">Category</p>
                                  <p className="text-white font-medium">{service?.category.replace('-', ' ')}</p>
                                </div>
                                <div>
                                  <p className="text-white/50 mb-1">Last Updated</p>
                                  <p className="text-white font-medium">{pricing.lastUpdated}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2 ml-4">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="text-white border-white/20 hover:bg-white/10"
                                onClick={() => handleEditProviderPricing(pricing)}
                              >
                                <Edit3 className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Service Pricing Edit Modal */}
          <Dialog open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen}>
            <DialogContent className="max-w-2xl bg-neutral-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Edit Service Pricing</DialogTitle>
                <DialogDescription className="text-white/60">
                  Update pricing information for this service. Changes will be reflected across the entire platform.
                </DialogDescription>
              </DialogHeader>
              
              {editingPricing && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="serviceName" className="text-white">Service Name</Label>
                      <Input
                        id="serviceName"
                        value={editingPricing.serviceName}
                        disabled
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-white">Category</Label>
                      <Input
                        id="category"
                        value={editingPricing.category}
                        disabled
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="averagePrice" className="text-white">Average Price Display</Label>
                    <Input
                      id="averagePrice"
                      value={editingPricing.averagePrice}
                      onChange={(e) => setEditingPricing({ ...editingPricing, averagePrice: e.target.value })}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="e.g., AED 150-300"
                    />
                    <p className="text-xs text-white/50 mt-1">This is displayed on service pages and listings</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minPrice" className="text-white">Minimum Price</Label>
                      <Input
                        id="minPrice"
                        type="number"
                        value={editingPricing.minPrice}
                        onChange={(e) => setEditingPricing({ ...editingPricing, minPrice: parseInt(e.target.value) || 0 })}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxPrice" className="text-white">Maximum Price</Label>
                      <Input
                        id="maxPrice"
                        type="number"
                        value={editingPricing.maxPrice}
                        onChange={(e) => setEditingPricing({ ...editingPricing, maxPrice: parseInt(e.target.value) || 0 })}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="demandLevel" className="text-white">Demand Level</Label>
                    <Select value={editingPricing.demandLevel} onValueChange={(value) => setEditingPricing({ ...editingPricing, demandLevel: value as any })}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-white/20">
                        <SelectItem value="low" className="text-white">Low Demand</SelectItem>
                        <SelectItem value="medium" className="text-white">Medium Demand</SelectItem>
                        <SelectItem value="high" className="text-white">High Demand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="recommendations" className="text-white">Pricing Recommendations</Label>
                    <Textarea
                      id="recommendations"
                      value={editingPricing.recommendations || ''}
                      onChange={(e) => setEditingPricing({ ...editingPricing, recommendations: e.target.value })}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Add recommendations for pricing adjustments..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4 border-t border-white/10">
                    <Button variant="outline" className="text-white border-white/20" onClick={() => setIsServiceModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={() => editingPricing && handleSaveServicePricing(editingPricing)} 
                      disabled={isSaving}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    >
                      {isSaving ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Provider Pricing Edit Modal */}
          <Dialog open={isProviderModalOpen} onOpenChange={setIsProviderModalOpen}>
            <DialogContent className="max-w-2xl bg-neutral-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Edit Provider Pricing</DialogTitle>
                <DialogDescription className="text-white/60">
                  Update pricing information for this provider. Changes will be reflected immediately.
                </DialogDescription>
              </DialogHeader>
              
              {editingProvider && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="providerName" className="text-white">Provider Name</Label>
                      <Input
                        id="providerName"
                        value={editingProvider.providerName}
                        disabled
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="serviceId" className="text-white">Service</Label>
                      <Input
                        id="serviceId"
                        value={services.find(s => s.id === editingProvider.serviceId)?.name || ''}
                        disabled
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="basePrice" className="text-white">Base Price</Label>
                      <Input
                        id="basePrice"
                        type="number"
                        value={editingProvider.basePrice}
                        onChange={(e) => setEditingProvider({ ...editingProvider, basePrice: parseInt(e.target.value) || 0 })}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currency" className="text-white">Currency</Label>
                      <Select value={editingProvider.currency} onValueChange={(value) => setEditingProvider({ ...editingProvider, currency: value })}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-900 border-white/20">
                          <SelectItem value="AED" className="text-white">AED</SelectItem>
                          <SelectItem value="USD" className="text-white">USD</SelectItem>
                          <SelectItem value="EUR" className="text-white">EUR</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="isActive" className="text-white">Status</Label>
                    <Select value={editingProvider.isActive ? 'active' : 'inactive'} onValueChange={(value) => setEditingProvider({ ...editingProvider, isActive: value === 'active' })}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-white/20">
                        <SelectItem value="active" className="text-white">Active</SelectItem>
                        <SelectItem value="inactive" className="text-white">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4 border-t border-white/10">
                    <Button variant="outline" className="text-white border-white/20" onClick={() => setIsProviderModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={() => editingProvider && handleSaveProviderPricing(editingProvider)} 
                      disabled={isSaving}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    >
                      {isSaving ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
}