"use client";

import { useState } from 'react';
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
import { areas } from '@/lib/data';
import { useSettings } from '@/lib/settings-context';

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const { settings } = useSettings();

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

  const dubaiAreas = areas.map(area => ({
    ...area,
    serviceProviders: Math.floor(Math.random() * 30) + 15,
    avgResponseTime: `${Math.floor(Math.random() * 30) + 20} mins`,
    rating: 4.5 + Math.random() * 0.5,
    totalBookings: Math.floor(Math.random() * 2000) + 800,
    emergencyAvailable: Math.random() > 0.3,
    featured: Math.random() > 0.7,
    image: getAreaImage(area.name),
    popularServices: ['AC Repair', 'Deep Cleaning', 'Plumbing', 'Electrical']
  }));

  const filteredAreas = dubaiAreas.filter(area =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedAreas = [...filteredAreas].sort((a, b) => {
    switch (sortBy) {
      case 'popular': return b.totalBookings - a.totalBookings;
      case 'rating': return b.rating - a.rating;
      case 'response-time': return parseInt(a.avgResponseTime) - parseInt(b.avgResponseTime);
      case 'providers': return b.serviceProviders - a.serviceProviders;
      default: return 0;
    }
  });

  const featuredAreas = sortedAreas.filter(area => area.featured);
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
                Service Areas
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                Across Dubai
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed" data-macaly="areas-hero-description">
              Professional home services available in all major areas of Dubai. 
              Find trusted experts in your neighborhood with fast response times and guaranteed quality.
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

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: MapPin, label: 'Areas Covered', value: '25+' },
                { icon: Users, label: 'Service Providers', value: '300+' },
                { icon: Clock, label: 'Avg Response', value: '30 mins' },
                { icon: Star, label: 'Customer Rating', value: '4.8/5' }
              ].map((stat, index) => (
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
                  Featured Areas
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto" data-macaly="featured-areas-description">
                Most popular areas with highest service demand and fastest response times
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredAreas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
          </section>
        )}

        {/* All Areas Grid */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                All Service Areas ({otherAreas.length})
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
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
                          <span className="text-neon-blue font-medium">{area.serviceProviders}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Response:</span>
                          <span className="text-white/80">{area.avgResponseTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Bookings:</span>
                          <span className="text-white/80">{area.totalBookings}</span>
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* Coverage Stats */}
        <section className="py-20 bg-gradient-card rounded-3xl border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white" data-macaly="coverage-stats-title">
              <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                Complete Dubai Coverage
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto" data-macaly="coverage-stats-description">
              From luxury villas to high-rise apartments, we provide professional home services 
              across all areas of Dubai with our network of verified experts.
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
              <h3 className="text-2xl font-bold text-white">24/7 Emergency Services</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Urgent plumbing, electrical, or AC issues? Our emergency response team is available 
              24/7 across all major areas in Dubai with response times as fast as 1 hour.
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