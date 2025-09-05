"use client";

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, MapPin, Star, Award, Clock, TrendingUp, Filter, 
  CheckCircle, Eye, Phone, Mail, Shield, User, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { serviceCategories, areas } from '@/lib/data';

interface ProviderDisplay {
  id: string;
  name: string;
  company?: string;
  profileImage?: string;
  rating: number;
  reviewCount: number;
  experience: number;
  services: string[];
  areas: string[];
  description: string;
  completedJobs?: number;
  responseTime?: string;
  isFeatured?: boolean;
  isPremium?: boolean;
}

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArea, setSelectedArea] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [providers, setProviders] = useState<ProviderDisplay[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { listProvidersFromSupabase } = await import('@/lib/supabase');
        const { data } = await listProvidersFromSupabase();
        const mapped: ProviderDisplay[] = (data as any[]).map(p => ({
          id: p.id,
          name: p.name,
          company: p.company,
          profileImage: p.profileimage,
          rating: Number(p.rating) || 4.5,
          reviewCount: Number(p.reviewcount) || 0,
          experience: Number(p.experience) || 0,
          services: p.services || [],
          areas: p.areas || [],
          description: p.description || '',
          completedJobs: Number(p.completedjobs) || 0,
          responseTime: p.responsetime || 'Within 30 minutes',
          isFeatured: !!p.isfeatured,
          isPremium: !!p.ispremium,
        }));
        setProviders(mapped);
      } catch {
        setProviders([]);
      }
    })();
  }, []);

  const filteredProviders = useMemo(() => {
    return providers
      .filter(provider => {
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return (
            provider.name.toLowerCase().includes(searchLower) ||
            provider.company?.toLowerCase().includes(searchLower) ||
            provider.services.some(service => service.includes(searchLower))
          );
        }
        return true;
      })
      .filter(provider => {
        if (selectedCategory !== 'all') {
          const categoryServices = serviceCategories.find(cat => cat.slug === selectedCategory)?.services.map(s => s.id) || [];
          return provider.services.some(service => categoryServices.includes(service));
        }
        return true;
      })
      .filter(provider => {
        if (selectedArea !== 'all') {
          return provider.areas.includes(selectedArea);
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'reviews':
            return b.reviewCount - a.reviewCount;
          case 'experience':
            return b.experience - a.experience;
          case 'jobs':
            return (b.completedJobs || 0) - (a.completedJobs || 0);
          default:
            return 0;
        }
      });
  }, [providers, searchTerm, selectedCategory, selectedArea, sortBy]);

  const featuredProviders = filteredProviders.filter(provider => provider.isFeatured);
  const regularProviders = filteredProviders.filter(provider => !provider.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-macaly="providers-title">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                Browse Providers
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto" data-macaly="providers-description">
              Connect with verified professionals across Dubai. Compare profiles, read reviews, and request services directly.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-neon-blue/30 shadow-neon">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-blue h-5 w-5" />
                  <Input
                    placeholder="Search providers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/50 border-neon-blue/50 text-white placeholder-white/60 focus:border-neon-blue"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-black/50 border-neon-green/50 text-white">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-neon-green/30">
                    <SelectItem value="all" className="text-white">All Categories</SelectItem>
                    {serviceCategories.map(category => (
                      <SelectItem key={category.id} value={category.slug} className="text-white">
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger className="bg-black/50 border-neon-blue/50 text-white">
                    <SelectValue placeholder="All Areas" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-neon-blue/30">
                    <SelectItem value="all" className="text-white">All Areas</SelectItem>
                    {areas.map(area => (
                      <SelectItem key={area.id} value={area.slug} className="text-white">
                        {area.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-black/50 border-neon-green/50 text-white">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-neon-green/30">
                    <SelectItem value="rating" className="text-white">Highest Rating</SelectItem>
                    <SelectItem value="reviews" className="text-white">Most Reviews</SelectItem>
                    <SelectItem value="experience" className="text-white">Most Experience</SelectItem>
                    <SelectItem value="jobs" className="text-white">Most Jobs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-center text-white/60 text-sm">
                Found {filteredProviders.length} providers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Providers Section */}
      {featuredProviders.length > 0 && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                  Featured Providers
                </span>
              </h2>
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50">
                Premium
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {featuredProviders.map((provider, index) => (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-card backdrop-blur-sm border-2 border-neon-green/50 hover:border-neon-green transition-all duration-500 group cursor-pointer h-full hover:shadow-neon-green">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="relative">
                          <img 
                            src={provider.profileImage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300'} 
                            alt={provider.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-neon-blue/30"
                          />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center">
                            <Award className="h-3 w-3 text-black" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{provider.name}</h3>
                          <p className="text-sm text-neon-green mb-2">{provider.company}</p>
                          <div className="flex items-center space-x-2 text-sm">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-neon-green fill-current" />
                              <span className="text-white">{provider.rating}</span>
                            </div>
                            <span className="text-white/60">({provider.reviewCount} reviews)</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {provider.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-neon-green" />
                          <span className="text-white/80">{provider.experience} years</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-neon-blue" />
                          <span className="text-white/80">{provider.responseTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-neon-green" />
                          <span className="text-white/80">{provider.completedJobs} jobs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-neon-blue" />
                          <span className="text-white/80">Verified</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {provider.services.slice(0, 3).map((serviceId) => (
                          <Badge key={serviceId} variant="outline" className="text-xs border-neon-blue/50 text-neon-blue">
                            {serviceId.replace('-', ' ')}
                          </Badge>
                        ))}
                        {provider.services.length > 3 && (
                          <Badge variant="outline" className="text-xs border-neon-green/50 text-neon-green">
                            +{provider.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link href={`/providers/${provider.id}`} className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold transition-all duration-300">
                            <Eye className="mr-2 h-4 w-4" />
                            View Profile
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Providers Section */}
      {regularProviders.length > 0 && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                All Providers
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProviders.map((provider, index) => (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-card backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-500 group cursor-pointer h-full hover:shadow-card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="relative">
                          <img 
                            src={provider.profileImage} 
                            alt={provider.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-neon-blue/30"
                          />
                          {provider.isPremium && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
                              <Award className="h-3 w-3 text-black" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">{provider.name}</h3>
                          <p className="text-sm text-neon-blue mb-2">{provider.company}</p>
                          <div className="flex items-center space-x-2 text-sm">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-neon-green fill-current" />
                              <span className="text-white">{provider.rating}</span>
                            </div>
                            <span className="text-white/60">({provider.reviewCount} reviews)</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {provider.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-neon-green" />
                          <span className="text-white/80">{provider.experience} years</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-neon-blue" />
                          <span className="text-white/80">{provider.responseTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-neon-green" />
                          <span className="text-white/80">{provider.completedJobs} jobs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-neon-blue" />
                          <span className="text-white/80">Verified</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {provider.services.slice(0, 3).map((serviceId) => (
                          <Badge key={serviceId} variant="outline" className="text-xs border-neon-blue/50 text-neon-blue">
                            {serviceId.replace('-', ' ')}
                          </Badge>
                        ))}
                        {provider.services.length > 3 && (
                          <Badge variant="outline" className="text-xs border-neon-green/50 text-neon-green">
                            +{provider.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Link href={`/providers/${provider.id}`} className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold transition-all duration-300">
                            <Eye className="mr-2 h-4 w-4" />
                            View Profile
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredProviders.length === 0 && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-card backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <User className="h-16 w-16 text-white/30 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">No providers found</h3>
              <p className="text-white/70 mb-6">
                Try adjusting your search criteria or browse all providers
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedArea('all');
                }}
                className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}