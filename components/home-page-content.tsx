"use client";

import { useState, useEffect } from 'react';
import { 
  Search, Wrench, Sparkles, Bug, Hammer, MapPin, Clock, Shield, Star, Phone, 
  CheckCircle, Users, ArrowRight, Wind, Settings, Zap, Truck, Shirt, 
  UserCheck, Award, TrendingUp, Eye, Calendar, Lightbulb, Monitor, Paintbrush,
  Droplets, Snowflake, ThermometerSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useSettings } from '@/lib/settings-context';

// Lightweight data for homepage - only what's needed for initial render
const featuredServices = [
  {
    id: 'ac-repair-cleaning',
    name: 'AC Repair & Cleaning',
    slug: 'ac-repair-cleaning',
    description: 'Professional AC repair, maintenance, and cleaning services',
    icon: 'Wind',
    services: 3,
    isPopular: true
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    slug: 'appliance-repair',
    description: 'Expert repair services for all home appliances',
    icon: 'Settings',
    services: 6,
    isPopular: true
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning Services',
    slug: 'deep-cleaning',
    description: 'Comprehensive cleaning services for homes and offices',
    icon: 'Sparkles',
    services: 6,
    isPopular: true
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    slug: 'pest-control',
    description: 'Professional pest control and elimination services',
    icon: 'Bug',
    services: 6,
    isPopular: true
  },
  {
    id: 'plumbing',
    name: 'Plumbing Services',
    slug: 'plumbing',
    description: 'Professional plumbing repair and installation',
    icon: 'Wrench',
    services: 4,
    isPopular: true
  },
  {
    id: 'electrician',
    name: 'Electrician Services',
    slug: 'electrician',
    description: 'Licensed electrical repair and installation services',
    icon: 'Zap',
    services: 3,
    isPopular: true
  }
];

const featuredAreas = [
  { id: 'dubai-marina', name: 'Dubai Marina', slug: 'dubai-marina', subAreas: 5 },
  { id: 'downtown-dubai', name: 'Downtown Dubai', slug: 'downtown-dubai', subAreas: 5 },
  { id: 'jbr', name: 'JBR', slug: 'jbr', subAreas: 5 },
  { id: 'business-bay', name: 'Business Bay', slug: 'business-bay', subAreas: 5 },
  { id: 'jumeirah', name: 'Jumeirah', slug: 'jumeirah', subAreas: 7 },
  { id: 'palm-jumeirah', name: 'Palm Jumeirah', slug: 'palm-jumeirah', subAreas: 5 },
  { id: 'jlt', name: 'JLT', slug: 'jlt', subAreas: 5 },
  { id: 'al-barsha', name: 'Al Barsha', slug: 'al-barsha', subAreas: 5 },
  { id: 'deira', name: 'Deira', slug: 'deira', subAreas: 5 },
  { id: 'al-quoz', name: 'Al Quoz', slug: 'al-quoz', subAreas: 4 },
  { id: 'motor-city', name: 'Motor City', slug: 'motor-city', subAreas: 3 },
  { id: 'discovery-gardens', name: 'Discovery Gardens', slug: 'discovery-gardens', subAreas: 3 }
];

// Icon mapping for string icons to actual components
const iconMap = {
  'Wind': Wind,
  'Settings': Settings,
  'Sparkles': Sparkles,
  'Bug': Bug,
  'Wrench': Wrench,
  'Zap': Zap,
  'Hammer': Hammer,
  'Shirt': Shirt,
  'Truck': Truck,
  'Shield': Shield,
  'Lightbulb': Lightbulb,
  'Monitor': Monitor,
  'Paintbrush': Paintbrush,
  'Droplets': Droplets,
  'Snowflake': Snowflake,
  'ThermometerSun': ThermometerSun
};

export default function HomePageContent() {
  const [searchService, setSearchService] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const { settings } = useSettings();

  const handleSearch = () => {
    if (searchService && searchLocation) {
      window.location.href = `/services/${searchService.toLowerCase().replace(/\s+/g, '-')}`;
    } else {
      window.location.href = '/services';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-neon-green/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm border border-neon-blue/30 px-6 py-3 rounded-full mb-8">
                <Shield className="h-5 w-5 text-neon-blue" />
                <span className="text-white font-medium">Dubai's #1 Trusted Service Platform</span>
                <Star className="h-5 w-5 text-neon-green fill-current" />
              </div>

              {/* Main Hero Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" data-macaly="hero-title">
                <span className="block bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent mb-2">
                  Find Expert
                </span>
                <span className="block bg-gradient-to-r from-neon-blue via-neon-green to-neon-blue bg-clip-text text-transparent animate-neon-pulse">
                  Home Services
                </span>
                <span className="block bg-gradient-to-r from-neon-green via-white to-neon-green bg-clip-text text-transparent mt-2">
                  in Dubai
                </span>
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light" data-macaly="hero-description">
                Connect with <span className="text-neon-blue font-semibold">500+ verified professionals</span> across Dubai. 
                <br className="hidden sm:block" />
                Book trusted services with <span className="text-neon-green font-semibold">instant quotes</span> and <span className="text-neon-blue font-semibold">guaranteed quality</span>.
              </p>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
              <div className="flex items-center space-x-2 text-white/90 bg-gradient-to-r from-neon-blue/10 to-neon-blue/5 backdrop-blur-sm border border-neon-blue/30 px-4 sm:px-6 py-3 rounded-full hover:border-neon-blue/50 transition-all duration-300 hover:shadow-lg">
                <UserCheck className="h-5 w-5 text-neon-blue" />
                <span className="text-sm sm:text-base font-medium">500+ Verified Pros</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-gradient-to-r from-neon-green/10 to-neon-green/5 backdrop-blur-sm border border-neon-green/30 px-4 sm:px-6 py-3 rounded-full hover:border-neon-green/50 transition-all duration-300 hover:shadow-lg">
                <Star className="h-5 w-5 text-neon-green fill-current" />
                <span className="text-sm sm:text-base font-medium">4.9★ Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/30 px-4 sm:px-6 py-3 rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm sm:text-base font-medium">30min Response</span>
              </div>
            </div>

            {/* Enhanced Search Bar */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-neon-blue/30 shadow-2xl relative overflow-hidden">
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-blue/20 rounded-3xl blur-xl animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div className="lg:col-span-2 relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue h-5 w-5 z-10" />
                      <Input
                        placeholder="What service do you need?"
                        value={searchService}
                        onChange={(e) => setSearchService(e.target.value)}
                        className="pl-12 h-16 bg-black/50 border-neon-blue/50 text-white placeholder-white/60 rounded-2xl focus:border-neon-blue focus:ring-neon-blue/50 text-lg"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-green h-5 w-5 z-10" />
                      <Input
                        placeholder="Your area in Dubai"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="pl-12 h-16 bg-black/50 border-neon-green/50 text-white placeholder-white/60 rounded-2xl focus:border-neon-green focus:ring-neon-green/50 text-lg"
                      />
                    </div>
                    <Button 
                      className="h-16 bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold rounded-2xl shadow-2xl hover:shadow-neon-strong transition-all duration-300 text-lg relative overflow-hidden group"
                      onClick={handleSearch}
                    >
                      <span className="relative z-10 flex items-center">
                        Find Services Now
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                  500+
                </div>
                <div className="text-white/70 text-sm sm:text-base font-medium">Expert Professionals</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                  50+
                </div>
                <div className="text-white/70 text-sm sm:text-base font-medium">Service Categories</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                  50+
                </div>
                <div className="text-white/70 text-sm sm:text-base font-medium">Areas Covered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                  25K+
                </div>
                <div className="text-white/70 text-sm sm:text-base font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 right-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="services-title">
                <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                  Popular Services
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto" data-macaly="services-description">
                Discover our most requested home services with verified professionals
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Settings;
              return (
                <div key={service.id} className="group">
                  <Link href={`/services/${service.slug}`}>
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/30 transition-all duration-300 overflow-hidden group-hover:transform group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                            <p className="text-white/60 text-sm">{service.services} services</p>
                          </div>
                        </div>
                        <p className="text-white/70 text-sm mb-4">{service.description}</p>
                        <div className="flex items-center text-neon-blue text-sm font-medium group-hover:text-neon-green transition-colors">
                          View Services
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 text-lg rounded-full">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-neon-green/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="how-it-works-title">
                <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto" data-macaly="how-it-works-description">
                Simple steps to get professional home services in Dubai
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Search & Select',
                description: 'Browse services and choose what you need',
                icon: Search
              },
              {
                step: 2,
                title: 'Book & Schedule',
                description: 'Pick your preferred time and confirm booking',
                icon: Calendar
              },
              {
                step: 3,
                title: 'Expert Service',
                description: 'Verified professional arrives and completes work',
                icon: Wrench
              },
              {
                step: 4,
                title: 'Pay & Review',
                description: 'Pay after completion and rate your experience',
                icon: Star
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
                    <step.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 text-lg rounded-full">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Areas Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="areas-title">
                <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                  Service Areas
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto" data-macaly="areas-description">
                We cover all major areas across Dubai with our network of professionals
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredAreas.slice(0, 12).map((area, index) => (
              <div key={area.id} className="group">
                <Link href={`/areas/${area.slug}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/30 transition-all duration-300 rounded-xl p-4 text-center group-hover:transform group-hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{area.name}</h3>
                    <p className="text-white/60 text-xs">{area.subAreas} sub-areas</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/areas">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 text-lg rounded-full">
                View All Areas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="faq-title">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto" data-macaly="faq-description">
              Get answers to common questions about booking home services in Dubai
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "How quickly can I get a service provider?",
                a: "Most service providers respond within 30 minutes. For urgent requests, you can expect someone to contact you within the hour. Our network of 500+ verified professionals ensures fast response times across all Dubai areas."
              },
              {
                q: "Are all service providers verified and insured?",
                a: "Yes, all our service providers go through a rigorous verification process including background checks, skill assessments, and insurance validation. We only work with licensed, insured professionals who meet our quality standards."
              },
              {
                q: "What areas in Dubai do you cover?",
                a: "We cover all major areas in Dubai including Downtown Dubai, Dubai Marina, JBR, Business Bay, JLT, Al Barsha, Jumeirah, Deira, and 25+ other locations. Our extensive network ensures you can find services wherever you are in Dubai."
              },
              {
                q: "How do I make payments?",
                a: "Payment is made directly to the service provider after work completion. We accept cash, card payments, and bank transfers. All pricing is transparent with no hidden fees, and you only pay after you're satisfied with the service."
              },
              {
                q: "What if I'm not satisfied with the service?",
                a: "We offer a satisfaction guarantee. If you're not happy with the service, contact us within 24 hours and we'll work to resolve the issue. This may include sending another professional or arranging a partial refund."
              },
              {
                q: "Do you offer emergency services?",
                a: "Yes, we have emergency services available 24/7 for urgent repairs like plumbing leaks, electrical issues, and AC breakdowns. Emergency services may have additional charges but ensure you get help when you need it most."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-blue/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3" />
                  {faq.q}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 text-lg rounded-full">
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}