"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Clock, Phone, Search, Filter, Users, 
  Home as HomeIcon, ArrowRight, CheckCircle, Award,
  Zap, Shield, TrendingUp, Eye, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { listAreasFromSupabase } from '@/lib/supabase';
import { useSettings } from '@/lib/settings-context';
import { getPageContentFromSupabase } from '@/lib/supabase';
import { listProvidersFromSupabase, listLeadsFromSupabase } from '@/lib/supabase';

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('alphabetical');
  const { settings } = useSettings();
  const [cms, setCms] = useState<any>(null);

  console.log("Areas page loaded");
  console.log("Search query:", searchQuery);

  // Area-specific images mapping
  const getAreaImage = (areaName: string) => {
    const imageMap: { [key: string]: string } = {
      'Dubai Marina': 'https://images.pexels.com/photos/4471199/pexels-photo-4471199.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'Downtown Dubai': 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'Business Bay': 'https://images.pexels.com/photos/752688/pexels-photo-752688.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'JBR': 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'Palm Jumeirah': 'https://images.pexels.com/photos/3769312/pexels-photo-3769312.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'Al Barsha': 'https://images.pexels.com/photos/31771221/pexels-photo-31771221.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'Jumeirah': 'https://images.pexels.com/photos/4471200/pexels-photo-4471200.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'Deira': 'https://images.pexels.com/photos/1468094/pexels-photo-1468094.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'Al Quoz': 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
    };
    
    return imageMap[areaName] || 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&h=300&w=400';
  };

  const [dubaiAreas, setDubaiAreas] = useState<any[]>([]);

  useEffect(() => {
    const loadAreas = async () => {
      try {
        const res = await listAreasFromSupabase();
        const rows = (res.data || []).filter((a: any)=>a.status==='active');
        const mapped = rows.map((area: any)=>({
          name: area.name,
          slug: area.slug,
          description: area.description || `${area.name} area in Dubai`,
          subAreas: [],
          serviceProviders: Math.floor(Math.random() * 30) + 15,
          avgResponseTime: `${Math.floor(Math.random() * 30) + 20} mins`,
          rating: 4.5 + Math.random() * 0.5,
          totalBookings: Math.floor(Math.random() * 2000) + 800,
          emergencyAvailable: Math.random() > 0.3,
          featured: !!area.featured,
          image: getAreaImage(area.name),
          popularServices: ['AC Repair', 'Deep Cleaning', 'Plumbing', 'Electrical']
        }));
        setDubaiAreas(mapped);
      } catch {
        setDubaiAreas([]);
      }
    };
    loadAreas();
  }, []);

  // Load CMS content for Areas page (slug: 'areas')
  useEffect(() => {
    const loadCms = async () => {
      try {
        const res = await getPageContentFromSupabase('areas');
        const content = (res as any)?.data?.content;
        if (content) setCms(content);
      } catch {}
    };
    loadCms();
  }, []);

  const filteredAreas = dubaiAreas.filter(area =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stable alphabetical ordering used for All Areas; user can still change sort via UI
  const sortedAreas = [...filteredAreas].sort((a, b) => {
    switch (sortBy) {
      case 'popular': return b.totalBookings - a.totalBookings;
      case 'rating': return b.rating - a.rating;
      case 'response-time': return parseInt(a.avgResponseTime) - parseInt(b.avgResponseTime);
      case 'providers': return b.serviceProviders - a.serviceProviders;
      case 'alphabetical':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const featuredAreas = sortedAreas.filter(area => area.featured);
  const [carouselStart, setCarouselStart] = useState(0);
  const step = 2; // scroll two at a time
  const visibleCount = 6; // show 6 cards at once

  const nextSlide = () => {
    if (featuredAreas.length === 0) return;
    setCarouselStart(prev => (prev + step) % featuredAreas.length);
  };

  const prevSlide = () => {
    if (featuredAreas.length === 0) return;
    setCarouselStart(prev => (prev - step + featuredAreas.length) % featuredAreas.length);
  };

  useEffect(() => {
    if (featuredAreas.length <= step) return;
    const id = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(id);
  }, [featuredAreas.length]);

  const getVisibleAreas = () => {
    if (featuredAreas.length <= visibleCount) return featuredAreas;
    const out: typeof featuredAreas = [] as any;
    for (let i = 0; i < visibleCount; i++) {
      out.push(featuredAreas[(carouselStart + i) % featuredAreas.length]);
    }
    return out;
  };

  // Dynamic stats for All Areas (providers, bookings, response time)
  const [areaStats, setAreaStats] = useState<Record<string, { providers: number; bookings: number; responseMins: number }>>({});
  const [areasPage, setAreasPage] = useState(1);
  const areasPerPage = 12;

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [provRes, leadsRes] = await Promise.all([
          listProvidersFromSupabase(),
          listLeadsFromSupabase()
        ]);
        const providers: any[] = provRes.data || [];
        const leads: any[] = leadsRes.data || [];
        const nameToSlug: Record<string, string> = {};
        dubaiAreas.forEach(a => { nameToSlug[a.name] = a.slug; });

        const stats: Record<string, { providers: number; bookings: number; responseMins: number; _samples: number; _sum: number }>
          = {} as any;
        dubaiAreas.forEach(a => { stats[a.slug] = { providers: 0, bookings: 0, responseMins: 0, _samples: 0, _sum: 0 }; });

        providers.forEach(p => {
          if (Array.isArray(p.areas)) {
            p.areas.forEach((slug: string) => {
              if (stats[slug]) stats[slug].providers += 1;
            });
          }
        });

        leads.forEach(l => {
          const slug = nameToSlug[l.area] || '';
          if (slug && stats[slug]) {
            stats[slug].bookings += 1;
            const created = new Date(l.createdat || l.created_at || l.createdAt || 0).getTime();
            const updated = new Date(l.updatedat || l.updated_at || l.updatedAt || 0).getTime();
            if (created && updated && updated > created) {
              stats[slug]._samples += 1;
              stats[slug]._sum += Math.round((updated - created) / 60000);
            }
          }
        });

        Object.keys(stats).forEach(slug => {
          const s = stats[slug];
          s.responseMins = s._samples > 0 ? Math.max(1, Math.round(s._sum / s._samples)) : 30;
          delete (s as any)._sum; delete (s as any)._samples;
        });

        setAreaStats(stats);
      } catch {
        setAreaStats({});
      }
    };
    loadStats();
  }, [dubaiAreas.length]);
  const otherAreas = sortedAreas.filter(area => !area.featured);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="areas-hero-title">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                {(cms?.hero?.h1 || 'Service Areas\nAcross Dubai').split('\n')[0]}
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                {(cms?.hero?.h1 || 'Service Areas\nAcross Dubai').split('\n')[1] || ''}
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed" data-macaly="areas-hero-description">
              {cms?.hero?.description || 'Professional home services available in all major areas of Dubai. Find trusted experts in your neighborhood with fast response times and guaranteed quality.'}
            </p>

            {/* Search and Filter */}
            <div className="max-w-6xl mx-auto mb-8">
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-neon-blue/30 shadow-neon">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue h-5 w-5" />
                    <Input
                      placeholder="Search areas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 bg-black/50 border-neon-blue/50 text-white placeholder-white/60 rounded-xl focus:border-neon-blue focus:ring-neon-blue/50"
                    />
                  </div>
                  
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="h-12 bg-black/50 border-neon-green/50 text-white rounded-xl focus:border-neon-green">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 border-neon-green/30">
                      <SelectItem value="popular" className="text-white hover:bg-neon-green/10">Most Popular</SelectItem>
                      <SelectItem value="rating" className="text-white hover:bg-neon-green/10">Highest Rated</SelectItem>
                      <SelectItem value="response-time" className="text-white hover:bg-neon-green/10">Fastest Response</SelectItem>
                      <SelectItem value="providers" className="text-white hover:bg-neon-green/10">Most Providers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="text-center text-white/60 text-sm mt-6">
                  Found {sortedAreas.length} areas with verified service providers
                </div>
              </div>
            </div>

            {/* Quick Stats - dynamic aggregates */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {(() => {
                const totalProviders = Object.values(areaStats).reduce((sum: number, s: any) => sum + (s?.providers || 0), 0);
                const avgResponse = (() => {
                  const values = Object.values(areaStats).map((s: any) => s?.responseMins || 0).filter(Boolean) as number[];
                  if (values.length === 0) return 30;
                  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
                })();
                const avgRating = 4.8; // placeholder until ratings are tracked globally
                return [
                  { icon: MapPin, label: 'Areas Covered', value: `${sortedAreas.length}+` },
                  { icon: Users, label: 'Service Providers', value: `${totalProviders}+` },
                  { icon: Clock, label: 'Avg Response', value: `${avgResponse} min` },
                  { icon: Star, label: 'Customer Rating', value: `${avgRating}/5` }
                ];
              })().map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Areas */}
        {featuredAreas.length > 0 && (
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white" data-macaly="featured-areas-title">
                <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                  {cms?.featured?.h2 || 'Featured Areas'}
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto" data-macaly="featured-areas-description">
                {cms?.featured?.paragraph || 'Most popular areas with highest service demand and fastest response times'}
              </p>
            </div>

            <div className="relative">
              <motion.div
                key={carouselStart}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {getVisibleAreas().map((area, index) => (
                  <motion.div
                    key={area.slug}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                  <Card className="bg-gradient-card backdrop-blur-sm border-2 border-neon-green/50 overflow-hidden hover:border-neon-green transition-all duration-500 h-full hover:shadow-neon-green">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={area.image} 
                        alt={area.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <div className="bg-neon-green/20 text-neon-green text-xs px-2 py-1 rounded-full font-medium border border-neon-green/50">
                          Featured
                        </div>
                        {area.emergencyAvailable && (
                          <div className="bg-neon-blue/20 text-neon-blue text-xs px-2 py-1 rounded-full font-medium border border-neon-blue/50">
                            24/7 Emergency
                          </div>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-neon-green fill-current" />
                          <span className="text-white font-medium">{area.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-white group-hover:text-neon-green transition-colors flex items-center space-x-2">
                        <MapPin className="h-5 w-5" />
                        <span>{area.name}</span>
                      </CardTitle>
                      <p className="text-white/70 text-sm leading-relaxed">{area.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-neon-blue" />
                            <span className="text-white/80">{area.serviceProviders} experts</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-neon-green" />
                            <span className="text-white/80">{area.avgResponseTime}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-neon-blue" />
                            <span className="text-white/80">{area.totalBookings} bookings</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-neon-green" />
                            <span className="text-white/80">Verified pros</span>
                          </div>
                        </div>

                        {/* Popular Services */}
                        <div>
                          <p className="text-white/60 text-sm mb-2">Popular Services:</p>
                          <div className="flex flex-wrap gap-2">
                            {area.popularServices.slice(0, 3).map((service, i) => (
                              <span key={i} className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-lg border border-neon-blue/30">
                                {service}
                              </span>
                            ))}
                            {area.popularServices.length > 3 && (
                              <span className="text-xs text-white/60">+{area.popularServices.length - 3} more</span>
                            )}
                          </div>
                        </div>

                        {/* Sub Areas */}
                        <div>
                          <p className="text-white/60 text-sm mb-2">Sub Areas:</p>
                          <p className="text-white/80 text-sm">{area.subAreas.slice(0, 2).join(', ')}{area.subAreas.length > 2 && ` +${area.subAreas.length - 2} more`}</p>
                        </div>

                        <Link href={`/areas/${area.slug}`} className="block">
                          <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black rounded-xl font-medium transition-all duration-300">
                            <Eye className="mr-2 h-4 w-4" />
                            Explore {area.name}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  </motion.div>
                ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Areas Grid - static with pagination, dynamic stats */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                All Service Areas ({sortedAreas.length})
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedAreas.slice((areasPage-1)*areasPerPage, areasPage*areasPerPage).map((area, index) => (
              <div
                key={area.slug}
              >
                <Link href={`/areas/${area.slug}`}>
                  <Card className="bg-gradient-card backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer h-full hover:shadow-card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-lg">{area.name}</h4>
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="h-3 w-3 text-neon-green fill-current" />
                              <span className="text-white/70 text-sm">{area.rating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        
                        {area.emergencyAvailable && (
                          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                        )}
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Providers:</span>
                          <span className="text-neon-blue font-medium">{areaStats[area.slug]?.providers ?? area.serviceProviders}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Response:</span>
                          <span className="text-white/80">{(areaStats[area.slug]?.responseMins ?? parseInt(area.avgResponseTime)).toString()} mins</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Bookings:</span>
                          <span className="text-white/80">{areaStats[area.slug]?.bookings ?? area.totalBookings}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">View Details</span>
                          <ArrowRight className="h-4 w-4 text-neon-blue" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {sortedAreas.length > areasPerPage && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" disabled={areasPage===1} onClick={()=>setAreasPage(p=>Math.max(1,p-1))}>Prev</Button>
              <span className="text-white/60 text-sm">Page {areasPage} of {Math.ceil(sortedAreas.length/areasPerPage)}</span>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" disabled={areasPage>=Math.ceil(sortedAreas.length/areasPerPage)} onClick={()=>setAreasPage(p=>p+1)}>Next</Button>
            </div>
          )}
        </section>

        {/* Coverage Stats */}
        <section className="py-20 bg-gradient-card rounded-3xl border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white" data-macaly="coverage-stats-title">
              <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                {cms?.coverage?.h2 || 'Complete Dubai Coverage'}
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto" data-macaly="coverage-stats-description">
              {cms?.coverage?.paragraph || 'From luxury villas to high-rise apartments, we provide professional home services across all areas of Dubai with our network of verified experts.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Users, label: 'Verified Professionals', value: '300+', color: 'from-neon-blue to-neon-green' },
              { icon: MapPin, label: 'Areas Covered', value: '25+', color: 'from-neon-green to-neon-blue' },
              { icon: Clock, label: 'Average Response', value: '30 min', color: 'from-neon-blue to-neon-green' },
              { icon: Award, label: 'Customer Rating', value: '4.8★', color: 'from-neon-green to-neon-blue' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-black" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full font-semibold shadow-neon hover:shadow-neon-strong transition-all duration-300">
                  Browse All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={`tel:${settings.contact_phone}`}>
                <Button 
                  variant="outline" 
                  className="text-neon-green border-neon-green/50 hover:bg-neon-green/10 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {settings.contact_phone}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency Services Banner */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-3xl p-8 border border-neon-blue/30 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="h-8 w-8 text-neon-blue" />
              <h3 className="text-2xl font-bold text-white">{cms?.emergency?.h2 || '24/7 Emergency Services'}</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              {cms?.emergency?.paragraph || 'Urgent plumbing, electrical, or AC issues? Our emergency response team is available 24/7 across all major areas in Dubai with response times as fast as 1 hour.'}
            </p>
            <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full font-semibold shadow-neon hover:shadow-neon-strong transition-all duration-300">
              <Zap className="mr-2 h-5 w-5" />
              Emergency Service
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}