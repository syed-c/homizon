'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Clock, Shield, Phone, MessageSquare, 
  CheckCircle, Award, Users, ArrowRight, Filter, 
  SortAsc, Eye, Calendar, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import BookingModal from '@/components/booking-modal';
import Link from 'next/link';
import { Service, Area, Provider } from '@/lib/data';

interface ServiceAreaPageClientProps {
  service: Service;
  area: Area;
  providers: Provider[];
}

export default function ServiceAreaPageClient({ 
  service, 
  area, 
  providers 
}: ServiceAreaPageClientProps) {
  const [selectedProvider, setSelectedProvider] = useState<Provider | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  console.log('ServiceAreaPageClient rendered:', { 
    service: service.name, 
    area: area.name, 
    providersCount: providers.length 
  });

  // Sort and filter providers
  const filteredProviders = providers
    .filter(provider => {
      if (filterBy === 'all') return true;
      if (filterBy === 'premium') return provider.isPremium;
      if (filterBy === 'featured') return provider.isFeatured;
      if (filterBy === 'emergency') return provider.availability.emergency;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          return b.experience - a.experience;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'response':
          return a.responseTime.localeCompare(b.responseTime);
        default:
          return 0;
      }
    });

  const handleBookService = (provider?: Provider) => {
    console.log('Booking service:', { provider: provider?.name, service: service.name, area: area.name });
    setSelectedProvider(provider);
    setBookingModalOpen(true);
  };

  const averageRating = providers.length > 0 
    ? (providers.reduce((sum, p) => sum + p.rating, 0) / providers.length).toFixed(1)
    : '0.0';

  const totalReviews = providers.reduce((sum, p) => sum + p.reviewCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-neon-blue transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-neon-blue transition-colors">Services</Link>
            <span>/</span>
            <Link href={`/services/${service.slug}`} className="hover:text-neon-blue transition-colors">{service.name}</Link>
            <span>/</span>
            <Link href={`/areas/${area.slug}`} className="hover:text-neon-blue transition-colors">{area.name}</Link>
          </nav>

          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="service-area-hero-title">
                <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                  {service.name}
                </span>
                <br />
                <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                  in {area.name}
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed" data-macaly="service-area-hero-description">
                Find trusted {service.name.toLowerCase()} professionals in {area.name}. 
                {providers.length > 0 && (
                  <> {providers.length} verified providers with {averageRating}★ average rating.</>
                )}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-white/80 bg-gradient-to-r from-neon-blue/10 to-neon-blue/5 backdrop-blur-sm border border-neon-blue/30 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 text-neon-blue" />
                  <span className="text-sm font-medium">{providers.length} Providers</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80 bg-gradient-to-r from-neon-green/10 to-neon-green/5 backdrop-blur-sm border border-neon-green/30 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-neon-green" />
                  <span className="text-sm font-medium">{averageRating}★ Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{totalReviews} Reviews</span>
                </div>
              </div>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 text-lg rounded-full shadow-neon-strong"
                  onClick={() => handleBookService()}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book {service.name} Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-8 py-4 text-lg rounded-full"
                  onClick={() => {
                    const providersSection = document.getElementById('providers-section');
                    providersSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Eye className="h-5 w-5 mr-2" />
                  View Providers
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Info Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center mr-3">
                      <Zap className="h-5 w-5 text-black" />
                    </div>
                    About {service.name} in {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-neon-blue" />
                        <span className="text-white font-medium">Estimated Time</span>
                      </div>
                      <p className="text-white/70 text-sm">{service.estimatedTime}</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-4 w-4 text-neon-green" />
                        <span className="text-white font-medium">Average Price</span>
                      </div>
                      <p className="text-white/70 text-sm">{service.averagePrice}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-neon-blue/10 to-neon-green/10 backdrop-blur-sm border border-neon-blue/30 sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-blue mb-2">{providers.length}</div>
                    <div className="text-white/70 text-sm">Available Providers</div>
                  </div>
                  
                  <Separator className="bg-white/20" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Average Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{averageRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Response Time</span>
                      <span className="text-white font-medium">Within 30 min</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Service Area</span>
                      <span className="text-white font-medium">{area.name}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold"
                    onClick={() => handleBookService()}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Service Now
                  </Button>
                  
                  <p className="text-xs text-white/60 text-center">
                    Free quotes • No hidden fees • Satisfaction guaranteed
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers-section" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                Available Providers
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Choose from our network of verified {service.name.toLowerCase()} professionals in {area.name}
            </p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-white/60" />
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-white/20">
                    <SelectItem value="all" className="text-white">All Providers</SelectItem>
                    <SelectItem value="premium" className="text-white">Premium Only</SelectItem>
                    <SelectItem value="featured" className="text-white">Featured</SelectItem>
                    <SelectItem value="emergency" className="text-white">Emergency Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <SortAsc className="h-4 w-4 text-white/60" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-white/20">
                    <SelectItem value="rating" className="text-white">Highest Rated</SelectItem>
                    <SelectItem value="experience" className="text-white">Most Experienced</SelectItem>
                    <SelectItem value="reviews" className="text-white">Most Reviews</SelectItem>
                    <SelectItem value="response" className="text-white">Fastest Response</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-sm text-white/60">
              Showing {filteredProviders.length} of {providers.length} providers
            </div>
          </div>

          {/* Providers Grid */}
          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider, index) => (
                <motion.div
                  key={provider.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img 
                          src={provider.profileImage} 
                          alt={provider.name}
                          className="h-16 w-16 rounded-full object-cover border-2 border-neon-blue/50"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                            {provider.isApproved && (
                              <Badge className="bg-green-600 text-white text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                            {provider.isPremium && (
                              <Badge className="bg-neon-blue text-black text-xs">Premium</Badge>
                            )}
                          </div>
                          <p className="text-white/70 text-sm mb-2">{provider.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-white font-medium">{provider.rating}</span>
                              <span>({provider.reviewCount})</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="h-4 w-4" />
                              <span>{provider.experience} years</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {provider.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-white/60">
                          <Clock className="h-4 w-4 inline mr-1" />
                          {provider.responseTime}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                            onClick={() => {
                              // View provider details logic
                              console.log('View provider:', provider.name);
                            }}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-medium"
                            onClick={() => handleBookService(provider)}
                          >
                            <Calendar className="h-4 w-4 mr-1" />
                            Book
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-white/60 mb-4">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg">No providers found matching your criteria</p>
                <p className="text-sm">Try adjusting your filters or contact us for assistance</p>
              </div>
              <Button 
                className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold"
                onClick={() => handleBookService()}
              >
                Request Service Anyway
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        provider={selectedProvider}
        service={service.slug}
        serviceName={service.name}
        area={area.slug}
        areaName={area.name}
      />
    </div>
  );
}
