"use client";

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Clock, Shield, Phone, 
  CheckCircle, Award, Users, ArrowRight, Eye, Calendar, 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

interface ServiceAreaClientProps { service: any; area: any; providers: any[]; cms?: any }

export default function ServiceAreaClient({ service, area, providers, cms }: ServiceAreaClientProps) {
  const [sortBy, setSortBy] = useState('rating');

  const averageRating = providers.length
    ? (providers.reduce((s, p) => s + (p.rating || 0), 0) / providers.length).toFixed(1)
    : '0.0';
  const totalReviews = providers.reduce((s, p) => s + (p.reviewCount || p.reviewcount || 0), 0);

  const sortedProviders = useMemo(() => {
    const list = [...providers];
    list.sort((a: any, b: any) => {
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'experience') return (b.experience || 0) - (a.experience || 0);
      if (sortBy === 'reviews') return (b.reviewcount || b.reviewCount || 0) - (a.reviewcount || a.reviewCount || 0);
      return 0;
    });
    return list;
  }, [providers, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">{service?.name}</span>
                <br />
                <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">in {area?.name}</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                {cms?.hero?.description || `${providers.length} verified providers with ${averageRating}★ average rating.`}
              </p>
              {/* Quick stats */}
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
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{totalReviews} Reviews</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 text-lg rounded-full shadow-neon-strong">
                  <Calendar className="h-5 w-5 mr-2" /> Book {service?.name} Now
                </Button>
                <Button variant="outline" size="lg" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-8 py-4 text-lg rounded-full">
                  <Eye className="h-5 w-5 mr-2" /> View Providers
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* About */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-2">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center mr-3">
                      <Shield className="h-5 w-5 text-black" />
                    </div>
                    {cms?.about?.h2 || `About ${service?.name} in ${area?.name}`}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80 leading-relaxed">{cms?.about?.paragraph || `Professional ${service?.name?.toLowerCase()} services by verified providers.`}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-neon-blue" />
                        <span className="text-white font-medium">Estimated Time</span>
                      </div>
                      <p className="text-white/70 text-sm">Within 30–120 minutes</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-4 w-4 text-neon-green" />
                        <span className="text-white font-medium">Quality Guaranteed</span>
                      </div>
                      <p className="text-white/70 text-sm">Background-checked professionals with public ratings and reviews.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Booking (light card with dark text) */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card className="bg-gradient-to-br from-neon-blue/10 to-neon-green/10 backdrop-blur-sm border border-neon-blue/30 sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl text-neutral-900">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-blue mb-2">{providers.length}</div>
                    <div className="text-neutral-700 text-sm">Available Providers</div>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">Average Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-neutral-900 font-medium">{averageRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">Service Area</span>
                      <span className="text-neutral-900 font-medium">{area?.name}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold">
                    <Calendar className="h-4 w-4 mr-2" /> Book Service Now
                  </Button>
                  <p className="text-xs text-neutral-700 text-center">Free quotes • No hidden fees • Satisfaction guaranteed</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section id="providers-section" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">Available Providers</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Choose from our network of verified {service?.name?.toLowerCase()} professionals in {area?.name}</p>
          </div>
          {sortedProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProviders.map((provider: any, index: number) => (
                <motion.div key={provider.id || index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.05 }} viewport={{ once: true }}>
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={provider.profileImage || provider.profileimage || provider.avatar_url || provider.photo_url || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'}
                          alt={provider.name}
                          className="h-16 w-16 rounded-full object-cover border-2 border-neon-blue/50"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                            {provider.isApproved && (
                              <span className="text-xs px-2 py-0.5 rounded bg-green-600 text-white inline-flex items-center"><CheckCircle className="h-3 w-3 mr-1"/>Verified</span>
                            )}
                            {provider.isPremium && (<span className="text-xs px-2 py-0.5 rounded bg-neon-blue text-black">Premium</span>)}
                          </div>
                          <p className="text-white/70 text-sm mb-2">{provider.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-white font-medium">{provider.rating || '—'}</span>
                              <span>({provider.reviewCount || provider.reviewcount || 0})</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="h-4 w-4" />
                              <span>{provider.experience || 0} years</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">{provider.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-white/60"><Clock className="h-4 w-4 inline mr-1" />{provider.responseTime || 'Within 60 min'}</div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10" asChild>
                            <Link href={`/providers/${provider.id}`}> <Eye className="h-4 w-4 mr-1" /> View</Link>
                          </Button>
                          <Button size="sm" className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-medium">
                            <Calendar className="h-4 w-4 mr-1" /> Book
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-white/60">No providers found for this service in this area.</div>
          )}
        </div>
      </section>
    </div>
  );
}
