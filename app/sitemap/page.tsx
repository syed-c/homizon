"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, MapPin, Star, ChevronDown, ChevronRight, 
  Home, Settings, Users, Shield, Layers, ArrowRight, Clock, 
  Award, TrendingUp, Grid, List, Eye, Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { serviceCategories, services, areas, generateServiceAreaCombinations } from '@/lib/data';

// Derive a type that matches the combination objects
type Combination = ReturnType<typeof generateServiceAreaCombinations>[number];

export default function SitemapPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterArea, setFilterArea] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const allCombinations = generateServiceAreaCombinations();

  const filteredCombinations = allCombinations.filter((combo: Combination) => {
    const normalizedQuery = (searchQuery ?? '').toLowerCase();

    // Map display names from slugs
    const serviceName = (services.find(s => s.slug === combo.service)?.name ?? '').toLowerCase();
    const areaName = (areas.find(a => a.slug === combo.area)?.name ?? '').toLowerCase();
    const subareaName = (combo.subArea 
      ? (areas.find(a => a.slug === combo.area)?.subAreas.find(sa => sa.slug === combo.subArea)?.name ?? '')
      : '').toLowerCase();

    const matchesSearch = serviceName.includes(normalizedQuery) ||
                         areaName.includes(normalizedQuery) ||
                         (!!combo.subArea && subareaName.includes(normalizedQuery));
    
    const matchesCategory = filterCategory === 'all' || combo.service.includes(filterCategory);
    const matchesArea = filterArea === 'all' || combo.area === filterArea;
    
    return matchesSearch && matchesCategory && matchesArea;
  });

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const stats = {
    totalPages: allCombinations.length,
    servicePages: services.length,
    areaPages: areas.length,
    serviceAreaPages: allCombinations.filter(c => c.type === 'service-area').length,
    serviceAreaSubareaPages: allCombinations.filter(c => c.type === 'service-area-subarea').length
  };

  const getServiceName = (combo: Combination) => services.find(s => s.slug === combo.service)?.name ?? combo.service;
  const getAreaName = (combo: Combination) => areas.find(a => a.slug === combo.area)?.name ?? combo.area;
  const getSubareaName = (combo: Combination) => {
    if (!combo.subArea) return undefined;
    const area = areas.find(a => a.slug === combo.area);
    return area?.subAreas.find(sa => sa.slug === combo.subArea)?.name ?? combo.subArea;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="sitemap-hero-title">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                Complete
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                Site Directory
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed" data-macaly="sitemap-hero-description">
              Explore all {stats.totalPages.toLocaleString()} service pages across Dubai's {areas.length} areas and {services.length} service categories.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue">{stats.servicePages}</div>
                <div className="text-white/60 text-sm">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green">{stats.areaPages}</div>
                <div className="text-white/60 text-sm">Areas Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue">{stats.serviceAreaPages}</div>
                <div className="text-white/60 text-sm">Service-Area Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green">{stats.serviceAreaSubareaPages}</div>
                <div className="text-white/60 text-sm">Subarea Pages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <section className="mb-16">
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-neon-blue/30 shadow-neon">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue h-5 w-5" />
                <Input
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-black/50 border-neon-blue/50 text-white placeholder-white/60 rounded-xl focus:border-neon-blue focus:ring-neon-blue/50"
                />
              </div>
              
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="h-12 bg-black/50 border-neon-green/50 text-white rounded-xl focus:border-neon-green">
                  <SelectValue placeholder="Filter by service" />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-neon-green/30">
                  <SelectItem value="all" className="text-white hover:bg-neon-green/10">All Services</SelectItem>
                  {serviceCategories.map(category => (
                    <SelectItem key={category.id} value={category.slug} className="text-white hover:bg-neon-green/10">
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filterArea} onValueChange={setFilterArea}>
                <SelectTrigger className="h-12 bg-black/50 border-neon-blue/50 text-white rounded-xl focus:border-neon-blue">
                  <SelectValue placeholder="Filter by area" />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-neon-blue/30">
                  <SelectItem value="all" className="text-white hover:bg-neon-blue/10">All Areas</SelectItem>
                  {areas.map(area => (
                    <SelectItem key={area.id} value={area.slug} className="text-white hover:bg-neon-blue/10">
                      {area.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' 
                    ? 'bg-neon-blue text-black' 
                    : 'border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10'
                  }
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' 
                    ? 'bg-neon-green text-black' 
                    : 'border-neon-green/50 text-neon-green hover:bg-neon-green/10'
                  }
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="text-center text-white/60 text-sm mt-6">
              Showing {filteredCombinations.length.toLocaleString()} of {stats.totalPages.toLocaleString()} pages
            </div>
          </div>
        </section>

        {/* Main Pages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Main Pages
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Home', url: '/', icon: Home, count: 1 },
              { name: 'Services', url: '/services', icon: Settings, count: services.length },
              { name: 'Areas', url: '/areas', icon: MapPin, count: areas.length },
              { name: 'Providers', url: '/providers', icon: Users, count: '500+' },
              { name: 'About', url: '/about', icon: Shield, count: 1 },
              { name: 'How It Works', url: '/how-it-works', icon: Award, count: 1 },
              { name: 'Contact', url: '/contact', icon: Users, count: 1 },
              { name: 'FAQ', url: '/faq', icon: TrendingUp, count: 1 }
            ].map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={page.url}>
                  <Card className="bg-gradient-card backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer group hover:shadow-card-hover">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center mx-auto mb-4">
                        <page.icon className="h-6 w-6 text-black" />
                      </div>
                      <h3 className="text-white font-semibold mb-2 group-hover:text-neon-blue transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-neon-green text-sm font-medium">{page.count} pages</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
              Service Categories
            </span>
          </h2>
          <div className="space-y-4">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card backdrop-blur-sm border border-white/10 hover:border-neon-green/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center">
                          <Settings className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <CardTitle className="text-white">{category.name}</CardTitle>
                          <p className="text-white/60 text-sm">{category.services.length} services</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link href={`/services/${category.slug}`}>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleCategory(category.id)}
                          className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                        >
                          {expandedCategories.has(category.id) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {expandedCategories.has(category.id) && (
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.services.map((service) => (
                          <div key={service.slug} className="bg-black/20 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center justify-between">
                              <span className="text-white/80 text-sm">{service.name}</span>
                              <div className="bg-neon-blue/20 text-neon-blue text-xs rounded-full px-2.5 py-0.5">
                                {areas.length} areas
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Service-Area Combinations */}
        <section className="pb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Service-Area Pages
            </span>
          </h2>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCombinations.slice(0, 100).map((combo, index) => {
                const serviceDisplay = getServiceName(combo);
                const areaDisplay = getAreaName(combo);
                const subareaDisplay = getSubareaName(combo);
                return (
                  <motion.div
                    key={combo.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index % 20) * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link href={combo.url}>
                      <Card className="bg-gradient-card backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer group">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center">
                              {combo.type === 'service-area-subarea' ? (
                                <Building className="h-4 w-4 text-black" />
                              ) : (
                                <MapPin className="h-4 w-4 text-black" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-white font-medium text-sm group-hover:text-neon-blue transition-colors">
                                {serviceDisplay}
                              </h3>
                              <p className="text-white/60 text-xs">
                                {subareaDisplay ? `${areaDisplay} - ${subareaDisplay}` : areaDisplay}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredCombinations.slice(0, 100).map((combo, index) => {
                const serviceDisplay = getServiceName(combo);
                const areaDisplay = getAreaName(combo);
                const subareaDisplay = getSubareaName(combo);
                return (
                  <motion.div
                    key={combo.url}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index % 20) * 0.02 }}
                    viewport={{ once: true }}
                  >
                    <Link href={combo.url}>
                      <div className="flex items-center justify-between p-4 bg-gradient-card backdrop-blur-sm border border-white/10 rounded-lg hover:border-neon-green/50 transition-all duration-300 cursor-pointer group">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-neon-blue to-neon-green rounded flex items-center justify-center">
                            {combo.type === 'service-area-subarea' ? (
                              <Building className="h-3 w-3 text-black" />
                            ) : (
                              <MapPin className="h-3 w-3 text-black" />
                            )}
                          </div>
                          <span className="text-white/80 text-sm group-hover:text-neon-green transition-colors">
                            {serviceDisplay} in {subareaDisplay ? `${areaDisplay} - ${subareaDisplay}` : areaDisplay}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-neon-blue transition-colors" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
          
          {filteredCombinations.length > 100 && (
            <div className="text-center mt-8">
              <p className="text-white/60 text-sm mb-4">
                Showing first 100 results. Use filters to narrow down your search.
              </p>
              <div className="bg-neon-blue/20 rounded-lg p-4 border border-neon-blue/30">
                <p className="text-neon-blue text-sm">
                  <strong>Total: {filteredCombinations.length.toLocaleString()} pages</strong> available for {services.length} services across {areas.length} areas
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}