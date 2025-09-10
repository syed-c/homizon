"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Clock, Shield, Award, Users, Phone, 
  ArrowRight, CheckCircle, Eye, Wind, Settings, Sparkles, 
  Bug, Wrench, Zap, Hammer, Shirt, Truck, MapPin, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Link from 'next/link';
import { serviceCategories, areas } from '@/lib/data';
import { getPageContentFromSupabase, listProvidersFromSupabase, listServicesFromSupabase } from '@/lib/supabase';

interface ServicesPageContent {
  hero: {
    h1: string;
    description: string;
  };
  why_choose: {
    h2: string;
    paragraph: string;
    features: Array<{
      h3: string;
      paragraph: string;
    }>;
  };
  cta: {
    h2: string;
    paragraph: string;
  };
}

export default function ServicesPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageContent, setPageContent] = useState<ServicesPageContent | null>(null);
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [servicesData, setServicesData] = useState<any[]>([]);
  const itemsPerPage = 9; // Number of services to display per page

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        setLoading(true);
        const result = await getPageContentFromSupabase('services');
        // getPageContentFromSupabase returns { data: row }
        const content = (result as any)?.data?.content;
        if (content) {
          setPageContent(content as ServicesPageContent);
        }
      } catch (error) {
        console.error('Error fetching services page content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageContent();
  }, []);

  // Load providers from Supabase for live counts
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await listProvidersFromSupabase();
        setProviders(res.data || []);
      } catch (e) {
        console.error('Failed to load providers for counts:', e);
        setProviders([]);
      }
    };
    fetchProviders();
  }, []);

  // Load services dynamically from Supabase
  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await listServicesFromSupabase();
        const db = (res.data || []).filter((s: any) => s.status === 'active');
        // Merge with defaults expected by UI
        const categorize = (slug: string, fallback: string = 'appliance-repair') => {
          const s = String(slug).toLowerCase();
          if (/(^|[-])ac(?![a-z])|air-?conditioner|airconditioner|a\s*c/.test(s)) return 'ac-repair-cleaning';
          if (/(wash|refrigerator|fridge|dryer|dishwasher|stove|cooker|oven|microwave|gas|electric|ice|wine|cooler)/.test(s)) return 'appliance-repair';
          if (/(clean)/.test(s)) return 'deep-cleaning';
          if (/(pest|termite|bed-?bug|rodent|mosquito|cockroach)/.test(s)) return 'pest-control';
          if (/(plumb)/.test(s)) return 'plumbing';
          if (/(electric)/.test(s)) return 'electrician';
          if (/(handyman|mount|assembly|light|installation)/.test(s)) return 'handyman';
          return fallback;
        };
        const normalized = db.map((row: any) => ({
          id: row.id,
          name: row.name,
          slug: row.slug,
          description: `${row.name} services in Dubai`,
          category: row.category || row.category_slug || categorize(row.slug),
          icon: 'Settings',
          averagePrice: 'AED 0',
          estimatedTime: '—',
          isPopular: false,
          keywords: [row.name]
        }));
        setServicesData(normalized);
      } catch (e) {
        console.error('Failed to load services from Supabase; falling back to static list:', e);
        try {
          const { services } = await import('@/lib/data');
          setServicesData(services);
        } catch {
          setServicesData([]);
        }
      }
    };
    loadServices();
  }, []);

  console.log("Services directory page loaded");
  console.log("Selected category:", selectedCategory);
  console.log("Search query:", searchQuery);

  // Only keep categories that have at least one service from Supabase
  const visibleCategories = useMemo(() => {
    const slugsWithService = new Set<string>(servicesData.map(s => String(s.category)));
    return serviceCategories.filter(cat => slugsWithService.has(cat.slug));
  }, [servicesData]);

  // Build quick lookup maps for service normalization
  const serviceSlugSet = useMemo(() => new Set(servicesData.map(s => String(s.slug).toLowerCase())), [servicesData]);
  const nameToSlug = useMemo(() => {
    const map: Record<string, string> = {};
    servicesData.forEach(s => { map[String(s.name).toLowerCase()] = String(s.slug).toLowerCase(); });
    return map;
  }, [servicesData]);
  const idToSlug = useMemo(() => {
    const map: Record<string, string> = {};
    servicesData.forEach(s => { map[String(s.id)] = String(s.slug).toLowerCase(); });
    return map;
  }, [servicesData]);

  const normalizeProviderServiceSlugs = (provider: any): Set<string> => {
    const result = new Set<string>();
    let raw: any = provider?.services ?? [];
    if (typeof raw === 'string') {
      raw = raw.split(',').map((x: string) => x.trim()).filter(Boolean);
    }
    if (!Array.isArray(raw)) return result;

    for (const entry of raw) {
      const lower = String(entry).toLowerCase();
      // Direct matches by slug
      if (serviceSlugSet.has(lower)) { result.add(lower); continue; }
      // Match by name
      if (nameToSlug[lower]) { result.add(nameToSlug[lower]); continue; }
      // Match by id
      if (idToSlug[String(entry)]) { result.add(idToSlug[String(entry)]); continue; }
    }
    return result;
  };

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular': return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      case 'alphabetical': return a.name.localeCompare(b.name);
      case 'price-low': return parseInt(a.averagePrice.match(/\d+/)?.[0] || '0') - parseInt(b.averagePrice.match(/\d+/)?.[0] || '0');
      case 'price-high': return parseInt(b.averagePrice.match(/\d+/)?.[0] || '0') - parseInt(a.averagePrice.match(/\d+/)?.[0] || '0');
      default: return 0;
    }
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedServices.slice(indexOfFirstItem, indexOfLastItem);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind': return Wind;
      case 'Settings': return Settings;
      case 'Sparkles': return Sparkles;
      case 'Bug': return Bug;
      case 'Wrench': return Wrench;
      case 'Zap': return Zap;
      case 'Hammer': return Hammer;
      case 'Shirt': return Shirt;
      case 'Truck': return Truck;
      case 'Shield': return Shield;
      default: return Settings;
    }
  };

  const countProvidersForService = (serviceSlug: string) => {
    try {
      const target = String(serviceSlug).toLowerCase();
      return providers.filter((p: any) => normalizeProviderServiceSlugs(p).has(target)).length;
    } catch {
      return 0;
    }
  };

  const countProvidersForCategory = (categorySlug: string) => {
    try {
      if (categorySlug === 'all') return providers.length || 0;
      const categorySlugs = servicesData
        .filter(svc => String(svc.category) === String(categorySlug))
        .map(svc => String(svc.slug));
      if (categorySlugs.length === 0) return 0;
      return providers.filter((p: any) => {
        const set = normalizeProviderServiceSlugs(p);
        for (const slug of categorySlugs) { if (set.has(String(slug).toLowerCase())) return true; }
        return false;
      }).length;
    } catch {
      return 0;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" data-macaly="services-hero-title">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                {pageContent?.hero?.h1 || "Service Directory"}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed" data-macaly="services-hero-description">
              {pageContent?.hero?.description || "Browse our comprehensive directory of verified service providers. Compare profiles, read reviews, and connect directly with professionals."}
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-neon-blue/30 shadow-neon">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue h-5 w-5" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 bg-black/50 border-neon-blue/50 text-white placeholder-white/60 rounded-xl focus:border-neon-blue focus:ring-neon-blue/50"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 bg-black/50 border-neon-green/50 text-white rounded-xl focus:border-neon-green">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-neon-green/30">
                    <SelectItem value="all" className="text-white hover:bg-neon-green/10">All Categories</SelectItem>
                    {visibleCategories.map(category => (
                      <SelectItem key={category.id} value={category.slug} className="text-white hover:bg-neon-green/10">
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 bg-black/50 border-neon-blue/50 text-white rounded-xl focus:border-neon-blue">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-neon-blue/30">
                    <SelectItem value="popular" className="text-white hover:bg-neon-blue/10">Most Popular</SelectItem>
                    <SelectItem value="alphabetical" className="text-white hover:bg-neon-blue/10">Alphabetical</SelectItem>
                    <SelectItem value="price-low" className="text-white hover:bg-neon-blue/10">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="text-white hover:bg-neon-blue/10">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-center text-white/60 text-sm mt-6">
                Found {sortedServices.length} services across {visibleCategories.length} categories
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Categories */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white" data-macaly="categories-title">
              <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                Browse by Category
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto" data-macaly="categories-description">
              Explore our comprehensive range of professional home services across Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 xl:grid-cols-4 gap-6 mb-12">
            <Link href="/services" className="block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'border-neon-blue bg-neon-blue/10 shadow-neon'
                    : 'border-white/10 bg-gradient-card hover:border-neon-blue/50'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">All Services</h3>
                  <p className="text-white/60 text-sm">Browse our complete directory</p>
                  <div className="mt-4 text-neon-blue font-semibold">
                    {servicesData.length} services available
                  </div>
                  <div className="mt-1 text-neon-green font-medium">
                    {countProvidersForCategory('all')} providers
                  </div>
                </div>
              </motion.div>
            </Link>

            {visibleCategories.map((category, index) => {
              const Icon = getIcon(category.icon);
              const providersCount = countProvidersForCategory(category.slug);
              
              return (
                <Link key={category.id} href={`/services/${category.slug}`} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedCategory === category.slug
                        ? 'border-neon-green bg-neon-green/10 shadow-neon-green'
                        : 'border-white/10 bg-gradient-card hover:border-neon-green/50'
                    }`}
                    onClick={() => setSelectedCategory(category.slug)}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-black" />
                      </div>
                      <h3 className="font-bold text-white text-lg mb-2">{category.name}</h3>
                      <p className="text-white/60 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neon-blue font-medium">{servicesData.filter(s => String(s.category) === String(category.slug)).length} services</span>
                        <span className="text-neon-green font-medium">{countProvidersForCategory(category.slug)} providers</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {selectedCategory === 'all' 
                  ? `All Services (${sortedServices.length})`
                  : `${serviceCategories.find(cat => cat.slug === selectedCategory)?.name || ''} (${sortedServices.length})`
                }
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Click on any service to view providers and book instantly
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((service, index) => {
              const Icon = getIcon(service.icon);
              const providersCount = countProvidersForService(service.slug);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-gradient-card backdrop-blur-sm border border-white/10 overflow-hidden hover:border-neon-blue/50 transition-all duration-500 h-full hover:shadow-card-hover">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-black" />
                          </div>
                          <div>
                            <Link href={`/services/${service.slug}`}>
                              <CardTitle className="text-lg text-white mb-1 group-hover:text-neon-blue transition-colors cursor-pointer hover:underline">
                                {service.name}
                              </CardTitle>
                            </Link>
                            <p className="text-sm text-white/60">{service.category.replace('-', ' ')}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-1">
                          {service.isPopular && (
                            <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {/* Pricing and Duration */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-neon-blue">{service.averagePrice}</div>
                            <div className="flex items-center space-x-1 text-sm text-white/60">
                              <Clock className="w-4 h-4" />
                              <span>{service.estimatedTime}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              <Users className="h-4 w-4 text-neon-green" />
                              <span className="text-white font-medium">{providersCount}</span>
                            </div>
                            <div className="text-white/60 text-xs">
                              {providersCount > 0 ? 'providers available' : 'new service'}
                            </div>
                          </div>
                        </div>

                        {/* Keywords */}
                        <div className="flex flex-wrap gap-1">
                          {service.keywords.slice(0, 3).map((keyword, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-neon-blue/30 text-neon-blue/80">
                              {keyword}
                            </Badge>
                          ))}
                          {service.keywords.length > 3 && (
                            <Badge variant="outline" className="text-xs border-neon-green/30 text-neon-green/80">
                              +{service.keywords.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2 pt-2">
                          <Link href={`/services/${service.slug}`} className="flex-1">
                            <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                              <Eye className="mr-2 h-4 w-4" />
                              View Service Details
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-neon-green/50 text-neon-green hover:bg-neon-green/10 px-4"
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-white/60 mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold"
              >
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* Pagination */}
          {sortedServices.length > 0 && totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        isActive={currentPage === page}
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? 'bg-neon-blue text-black' : 'text-white hover:bg-neon-blue/20'}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-card rounded-3xl border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white" data-macaly="why-choose-title">
              <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                {pageContent?.why_choose?.h2 || "Why Choose Our Directory?"}
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto" data-macaly="why-choose-description">
              {pageContent?.why_choose?.paragraph || "Experience the difference with Dubai's most comprehensive service provider directory"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(pageContent?.why_choose?.features || [
              {
                h3: 'Verified Professionals',
                paragraph: 'All service providers are background-checked and verified for your safety'
              },
              {
                h3: 'Quality Guaranteed',
                paragraph: 'Browse ratings and reviews from real customers to make informed decisions'
              },
              {
                h3: 'Quick Connection',
                paragraph: 'Connect directly with providers and get responses within hours'
              },
              {
                h3: 'Wide Selection',
                paragraph: 'Choose from hundreds of providers across all major service categories'
              }
            ]).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  {/* Use a default icon since we don't have icons in the CMS content */}
                  {index === 0 ? <Shield className="h-8 w-8 text-black" /> :
                   index === 1 ? <Award className="h-8 w-8 text-black" /> :
                   index === 2 ? <Clock className="h-8 w-8 text-black" /> :
                   <Users className="h-8 w-8 text-black" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.h3}</h3>
                <p className="text-white/70 leading-relaxed">{feature.paragraph}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-3xl p-12 border border-neon-blue/30">
            <h2 className="text-4xl font-bold text-white mb-4" data-macaly="cta-title">
              {pageContent?.cta?.h2 || "Ready to Get Started?"}
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto" data-macaly="cta-description">
              {pageContent?.cta?.paragraph || "Join thousands of satisfied customers who trust our directory to find the best service providers in Dubai"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/providers">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-neon hover:shadow-neon-strong transition-all duration-300">
                  Browse All Providers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/providers/register">
                <Button className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                  Join as Provider
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}