"use client";

import { useState, useEffect } from 'react';
import { 
  Search, Wrench, Sparkles, Bug, Hammer, MapPin, Clock, Shield, Star, Phone, 
  CheckCircle, Users, ArrowRight, Wind, Settings, Zap, Truck, Shirt, 
  UserCheck, Award, TrendingUp, Eye, Calendar, Lightbulb, Monitor, Paintbrush,
  Droplets, Snowflake, ThermometerSun, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { listServicesFromSupabase } from '@/lib/supabase';
import { useSettings } from '@/lib/settings-context';

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

interface HomePageContent {
  hero: {
    h1: string;
    description: string;
  };
  popularServices: {
    h2: string;
    paragraph: string;
    services: Array<{
      id: string;
      name: string;
      description: string;
      icon: string;
    }>;
  };
  howItWorks: {
    h2: string;
    paragraph: string;
    steps: Array<{
      h3: string;
      paragraph: string;
    }>;
  };
  serviceAreas: {
    h2: string;
    paragraph: string;
  };
  faqs: {
    h2: string;
    paragraph: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  buttons: Array<{
    text: string;
    url: string;
  }>;
}

const defaultContent: HomePageContent = {
  hero: {
    h1: "Dubai's Premier Home Services Platform",
    description: "Connect with verified home service providers across Dubai. Get instant quotes for AC repair, cleaning, plumbing, electrical work, pest control & handyman services. Available 24/7 in all Dubai areas."
  },
  popularServices: {
    h2: "Popular Services",
    paragraph: "Choose from our most requested home services",
    services: [
      { id: 'ac-repair', name: 'AC Repair & Cleaning', description: 'Professional AC services', icon: 'Wind' },
      { id: 'cleaning', name: 'Deep Cleaning', description: 'Comprehensive cleaning services', icon: 'Sparkles' },
      { id: 'plumbing', name: 'Plumbing', description: 'Expert plumbing solutions', icon: 'Wrench' },
      { id: 'electrical', name: 'Electrical', description: 'Licensed electrical work', icon: 'Zap' }
    ]
  },
  howItWorks: {
    h2: "How It Works",
    paragraph: "Simple steps to get your home services",
    steps: [
      { h3: "1. Request Service", paragraph: "Tell us what you need and when" },
      { h3: "2. Get Matched", paragraph: "We connect you with verified providers" },
      { h3: "3. Compare Quotes", paragraph: "Review and choose the best option" },
      { h3: "4. Enjoy Service", paragraph: "Relax while professionals handle it" }
    ]
  },
  serviceAreas: {
    h2: "Service Areas",
    paragraph: "We serve all major areas across Dubai"
  },
  faqs: {
    h2: "Frequently Asked Questions",
    paragraph: "Find answers to common questions",
    items: [
      { question: "How quickly can I get service?", answer: "Most services are available same-day or within 24 hours." },
      { question: "Are your providers verified?", answer: "Yes, all providers are background checked and verified." }
    ]
  },
  buttons: [
    { text: "Book Now", url: "/book" },
    { text: "View Services", url: "/services" },
    { text: "Learn More", url: "/how-it-works" }
  ]
};

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

export default function DynamicHomePageContent() {
  const [searchService, setSearchService] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [content, setContent] = useState<HomePageContent>(defaultContent);
  const [popularFromDb, setPopularFromDb] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { settings } = useSettings();

  // State variable for tracking when content was last refreshed
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());

  useEffect(() => {
    loadPageContent();
  }, []); // Only load content on initial mount

  useEffect(() => {
    const loadPopular = async () => {
      try {
        const res = await listServicesFromSupabase();
        const active = (res.data || []).filter((s: any) => s.status === 'active').slice(0, 6);
        const normalized = active.map((row: any) => ({
          id: row.slug,
          name: row.name,
          description: `${row.name} services`,
          icon: 'Settings'
        }));
        setPopularFromDb(normalized);
      } catch {}
    };
    loadPopular();
  }, []);

  const refreshContent = async () => {
    try {
      setRefreshing(true);
      await loadPageContent();
      // Update lastRefreshed timestamp to trigger re-render
      setLastRefreshed(new Date().getTime());
      console.log('Content refreshed successfully at:', new Date().toISOString());
      // Show a toast or notification to the user
      alert('Content refreshed successfully!');
    } catch (error) {
      console.error('Error refreshing content:', error);
      alert('Error refreshing content. Please try again.');
    } finally {
      setTimeout(() => {
        setRefreshing(false);
      }, 1000); // Reset refreshing state after 1 second
    }
  };

  const loadPageContent = async () => {
    try {
      setLoading(true);
      // Add timestamp to prevent caching
      const timestamp = new Date().getTime();
      console.log('Fetching content with timestamp:', timestamp);
      const response = await fetch(`/api/admin/pages-content?t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      const data = await response.json();
      console.log('API Response:', data);
      
      if (data && data.data && data.data.length > 0 && data.data[0].content) {
        console.log('Content updated successfully:', data.data[0].content);
        const apiContent = data.data[0].content || {};
        const merged: HomePageContent = {
          hero: {
            h1: apiContent.hero?.h1 ?? defaultContent.hero.h1,
            description: apiContent.hero?.description ?? defaultContent.hero.description,
          },
          popularServices: {
            h2: apiContent.popularServices?.h2 ?? defaultContent.popularServices.h2,
            paragraph: apiContent.popularServices?.paragraph ?? defaultContent.popularServices.paragraph,
            services: Array.isArray(apiContent.popularServices?.services) && apiContent.popularServices.services.length > 0
              ? apiContent.popularServices.services
              : defaultContent.popularServices.services,
          },
          howItWorks: {
            h2: apiContent.howItWorks?.h2 ?? defaultContent.howItWorks.h2,
            paragraph: apiContent.howItWorks?.paragraph ?? defaultContent.howItWorks.paragraph,
            steps: Array.isArray(apiContent.howItWorks?.steps) && apiContent.howItWorks.steps.length > 0
              ? apiContent.howItWorks.steps
              : defaultContent.howItWorks.steps,
          },
          serviceAreas: {
            h2: apiContent.serviceAreas?.h2 ?? defaultContent.serviceAreas.h2,
            paragraph: apiContent.serviceAreas?.paragraph ?? defaultContent.serviceAreas.paragraph,
          },
          faqs: {
            h2: apiContent.faqs?.h2 ?? defaultContent.faqs.h2,
            paragraph: apiContent.faqs?.paragraph ?? defaultContent.faqs.paragraph,
            items: Array.isArray(apiContent.faqs?.items) && apiContent.faqs.items.length > 0
              ? apiContent.faqs.items
              : defaultContent.faqs.items,
          },
          buttons: Array.isArray(apiContent.buttons) && apiContent.buttons.length > 0
            ? apiContent.buttons
            : defaultContent.buttons,
        };
        setContent(merged);
      } else {
        console.error('No content found in API response:', data);
      }
    } catch (error) {
      console.error('Error loading page content:', error);
      // Use default content if loading fails
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchService && searchLocation) {
      window.location.href = `/services/${searchService.toLowerCase().replace(/\s+/g, '-')}`;
    } else {
      window.location.href = '/services';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
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
          <div className="absolute top-4 right-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/70 hover:text-white hover:bg-white/10 transition-all" 
              onClick={refreshContent}
              disabled={refreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
          <div className="text-center">
            <div className="mb-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm border border-neon-blue/30 px-6 py-3 rounded-full mb-8">
                <Shield className="h-5 w-5 text-neon-blue" />
                <span className="text-white font-medium">Dubai's #1 Trusted Service Platform</span>
                <Star className="h-5 w-5 text-neon-green fill-current" />
              </div>

              {/* Main Hero Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent mb-2">
                  {content.hero.h1}
                </span>
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                {content.hero.description}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                  {content.popularServices.h2}
                </span>
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                {content.popularServices.paragraph}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(popularFromDb.length > 0 ? popularFromDb : content.popularServices.services).map((service, index) => {
              const IconComponent = iconMap[service.icon] || Settings;
              return (
                <div key={service.id} className="group">
                  <Link href={`/services/${service.id}`}>
                    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/30 transition-all duration-300 overflow-hidden group-hover:transform group-hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                            <p className="text-white/60 text-sm">Professional service</p>
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-neon-green/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                {content.howItWorks.h2}
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {content.howItWorks.paragraph}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-black">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.h3}</h3>
                <p className="text-white/70">{step.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                {content.serviceAreas.h2}
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {content.serviceAreas.paragraph}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredAreas.map((area) => (
              <Link key={area.id} href={`/areas/${area.slug}`}>
                <div className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-neon-blue/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <h3 className="text-white font-medium group-hover:text-neon-blue transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-white/60 text-sm">{area.subAreas} sub-areas</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                {content.faqs.h2}
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {content.faqs.paragraph}
            </p>
          </div>

          <div className="space-y-6">
            {content.faqs.items.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-blue/30 transition-all duration-300">
                <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust HOMIZON for their home service needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {content.buttons.map((button, index) => (
              <Link key={index} href={button.url}>
                <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-neon-strong transition-all duration-300">
                  {button.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
