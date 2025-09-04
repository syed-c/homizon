#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All services with their sub-categories
const services = {
  'ac-repair': {
    name: 'AC Repair',
    subServices: ['ac-repair', 'ac-cleaning', 'ac-servicing']
  },
  'ac-cleaning': {
    name: 'AC Cleaning',
    subServices: []
  },
  'ac-servicing': {
    name: 'AC Servicing', 
    subServices: []
  },
  'appliance-repairs': {
    name: 'Appliance Repair',
    subServices: ['washing-machine-repair', 'refrigerator-repair', 'dishwasher-repair', 'oven-repair', 'dryer-repair']
  },
  'cleaning-services': {
    name: 'Cleaning Services',
    subServices: ['deep-cleaning', 'sofa-cleaning', 'carpet-cleaning', 'mattress-cleaning', 'kitchen-cleaning', 'bathroom-cleaning']
  },
  'deep-cleaning': {
    name: 'Deep Cleaning',
    subServices: []
  },
  'sofa-cleaning': {
    name: 'Sofa Cleaning',
    subServices: []
  },
  'carpet-cleaning': {
    name: 'Carpet Cleaning',
    subServices: []
  },
  'mattress-cleaning': {
    name: 'Mattress Cleaning',
    subServices: []
  },
  'kitchen-cleaning': {
    name: 'Kitchen Cleaning',
    subServices: []
  },
  'bathroom-cleaning': {
    name: 'Bathroom Cleaning',
    subServices: []
  },
  'bathroom-plumbing': {
    name: 'Bathroom Plumbing',
    subServices: []
  },
  'bed-bug-control': {
    name: 'Bed Bug Control',
    subServices: []
  },
  'pest-control': {
    name: 'Pest Control',
    subServices: ['general-pest-control', 'cockroach-control', 'bed-bug-control', 'termite-control', 'rodent-control']
  },
  'handyman-services': {
    name: 'Handyman Services',
    subServices: ['electrical-work', 'plumbing-work', 'painting', 'furniture-assembly', 'tv-mounting']
  }
};

// All areas with their sub-areas
const areas = {
  'academic-city': {
    name: 'Academic City',
    subAreas: []
  },
  'al-barari': {
    name: 'Al Barari',
    subAreas: []
  },
  'al-barsha': {
    name: 'Al Barsha',
    subAreas: ['al-barsha-1', 'al-barsha-2', 'al-barsha-3', 'al-barsha-heights', 'al-barsha-south']
  },
  'al-furjan': {
    name: 'Al Furjan',
    subAreas: []
  },
  'al-garhoud': {
    name: 'Al Garhoud',
    subAreas: ['dubai-creek-golf', 'garhoud-bridge']
  },
  'al-karama': {
    name: 'Al Karama',
    subAreas: ['karama-residential', 'karama-souk']
  },
  'al-khawaneej': {
    name: 'Al Khawaneej',
    subAreas: ['khawaneej-1', 'khawaneej-2']
  },
  'al-mamzar': {
    name: 'Al Mamzar',
    subAreas: []
  },
  'al-mizhar': {
    name: 'Al Mizhar',
    subAreas: ['mizhar-1', 'mizhar-2']
  },
  'al-nahda': {
    name: 'Al Nahda',
    subAreas: ['nahda-1', 'nahda-2']
  },
  'al-quoz': {
    name: 'Al Quoz',
    subAreas: ['al-quoz-1', 'al-quoz-2', 'al-quoz-3', 'al-quoz-4']
  },
  'al-qusais': {
    name: 'Al Qusais',
    subAreas: ['qusais-1', 'qusais-2', 'qusais-3']
  },
  'al-rashidiya': {
    name: 'Al Rashidiya',
    subAreas: ['rashidiya-1', 'rashidiya-2']
  },
  'al-satwa': {
    name: 'Al Satwa',
    subAreas: ['al-satwa-residential', 'satwa-central']
  },
  'al-sufouh': {
    name: 'Al Sufouh',
    subAreas: []
  },
  'al-twar': {
    name: 'Al Twar',
    subAreas: ['twar-1', 'twar-2']
  },
  'al-warqa': {
    name: 'Al Warqa',
    subAreas: ['warqa-1', 'warqa-2', 'warqa-3']
  },
  'arabian-ranches': {
    name: 'Arabian Ranches',
    subAreas: ['alvorada', 'mirador', 'savannah']
  },
  'arjan': {
    name: 'Arjan',
    subAreas: []
  },
  'bluewaters-island': {
    name: 'Bluewaters Island',
    subAreas: []
  },
  'bur-dubai': {
    name: 'Bur Dubai',
    subAreas: ['al-fahidi', 'meena-bazaar', 'textile-souk']
  },
  'business-bay': {
    name: 'Business Bay',
    subAreas: ['bay-avenue', 'bay-square', 'business-central', 'canal-views', 'executive-bay']
  },
  'city-walk': {
    name: 'City Walk',
    subAreas: []
  },
  'deira': {
    name: 'Deira',
    subAreas: ['al-rigga', 'al-sabkha', 'gold-souk-area', 'port-saeed', 'spice-souk-area']
  },
  'discovery-gardens': {
    name: 'Discovery Gardens',
    subAreas: ['mediterranean-cluster', 'mogul-cluster', 'zen-cluster']
  },
  'downtown-dubai': {
    name: 'Downtown Dubai',
    subAreas: ['burj-khalifa-area', 'difc', 'dubai-mall-district', 'old-town-dubai', 'opera-district']
  },
  'dubai-creek-harbour': {
    name: 'Dubai Creek Harbour',
    subAreas: ['creek-beach', 'creek-gate', 'creek-horizon']
  },
  'dubai-festival-city': {
    name: 'Dubai Festival City',
    subAreas: ['al-badia-residences', 'creek-waters', 'marsa-plaza']
  },
  'dubai-hills-estate': {
    name: 'Dubai Hills Estate',
    subAreas: ['golf-place', 'golf-suites', 'parkway']
  },
  'dubai-internet-city': {
    name: 'Dubai Internet City',
    subAreas: []
  },
  'dubai-investment-park': {
    name: 'Dubai Investment Park',
    subAreas: ['dip-1', 'dip-2', 'green-community-dip']
  },
  'dubai-islands': {
    name: 'Dubai Islands',
    subAreas: []
  },
  'dubai-knowledge-park': {
    name: 'Dubai Knowledge Park',
    subAreas: []
  },
  'dubai-land': {
    name: 'Dubai Land',
    subAreas: ['living-legends', 'mudon', 'remraam']
  },
  'dubai-marina': {
    name: 'Dubai Marina',
    subAreas: ['marina-crown', 'marina-gate', 'marina-promenade', 'marina-walk', 'marina-wharf']
  },
  'dubai-media-city': {
    name: 'Dubai Media City',
    subAreas: []
  },
  'dubai-production-city': {
    name: 'Dubai Production City',
    subAreas: []
  },
  'dubai-south': {
    name: 'Dubai South',
    subAreas: ['golf-links', 'mag-city', 'pulse-beachfront']
  },
  'dubai-sports-city': {
    name: 'Dubai Sports City',
    subAreas: ['golf-horizon', 'golf-promenade', 'sports-city-central']
  },
  'emaar-beachfront': {
    name: 'Emaar Beachfront',
    subAreas: []
  },
  'emirates-hills': {
    name: 'Emirates Hills',
    subAreas: []
  },
  'international-city': {
    name: 'International City',
    subAreas: ['china-cluster', 'france-cluster', 'italy-cluster']
  },
  'jbr': {
    name: 'JBR',
    subAreas: ['bahar', 'beach-residence-1', 'beach-residence-2', 'beach-residence-3', 'jbr-walk']
  },
  'jebel-ali': {
    name: 'Jebel Ali',
    subAreas: []
  },
  'jlt': {
    name: 'JLT',
    subAreas: ['cluster-a', 'cluster-b', 'cluster-c', 'cluster-d', 'cluster-i']
  },
  'jumeirah': {
    name: 'Jumeirah',
    subAreas: ['al-manara', 'al-safa', 'al-wasl', 'jumeirah-1', 'jumeirah-2', 'jumeirah-3', 'umm-suqeim']
  },
  'jvc': {
    name: 'JVC',
    subAreas: ['jvc-district-1', 'jvc-district-2', 'jvc-district-3']
  },
  'meydan': {
    name: 'Meydan',
    subAreas: []
  },
  'mirdif': {
    name: 'Mirdif',
    subAreas: ['ghoroob', 'mirdif-hills', 'uptown-mirdif']
  },
  'motor-city': {
    name: 'Motor City',
    subAreas: ['green-community', 'motor-city-central', 'uptown-motor-city']
  },
  'nad-al-sheba': {
    name: 'Nad Al Sheba',
    subAreas: []
  },
  'palm-jumeirah': {
    name: 'Palm Jumeirah',
    subAreas: ['atlantis-area', 'frond-a', 'frond-b', 'frond-c', 'trunk']
  },
  'silicon-central': {
    name: 'Silicon Central',
    subAreas: []
  },
  'silicon-oasis': {
    name: 'Silicon Oasis',
    subAreas: ['silicon-avenue', 'silicon-gates', 'silicon-heights']
  },
  'the-gardens': {
    name: 'The Gardens',
    subAreas: []
  },
  'the-greens': {
    name: 'The Greens',
    subAreas: ['al-ghaf', 'al-nakheel', 'al-sedr']
  },
  'the-lakes': {
    name: 'The Lakes',
    subAreas: []
  },
  'the-meadows': {
    name: 'The Meadows',
    subAreas: []
  },
  'the-springs': {
    name: 'The Springs',
    subAreas: []
  },
  'the-views': {
    name: 'The Views',
    subAreas: ['fairways-north', 'fairways-south', 'golf-tower']
  },
  'town-square': {
    name: 'Town Square',
    subAreas: []
  }
};

// Helper functions
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function formatName(slug) {
  return slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

function generateServicePageTemplate(service, area = null, subArea = null) {
  const serviceName = services[service]?.name || formatName(service);
  const areaName = area ? (areas[area]?.name || formatName(area)) : null;
  const subAreaName = subArea ? formatName(subArea) : null;
  
  let title = serviceName;
  let location = '';
  
  if (subArea && area) {
    title += ` in ${subAreaName}, ${areaName}`;
    location = `${subAreaName}, ${areaName}`;
  } else if (area) {
    title += ` in ${areaName}`;
    location = areaName;
  }
  
  const pageTemplate = `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from './service-area-page-client';

export const metadata: Metadata = siteMetadata['${area ? `/${service}/${area}${subArea ? `/${subArea}` : ''}` : `/services/${service}`}'] || {
  title: '${title} - Professional Services | HOMIZON',
  description: 'Professional ${serviceName.toLowerCase()} services${location ? ` in ${location}` : ''}. Verified providers, competitive rates, same-day service available.',
};

export default async function ${serviceName.replace(/\s+/g, '')}${area ? formatName(area).replace(/\s+/g, '') : ''}${subArea ? formatName(subArea).replace(/\s+/g, '') : ''}Page() {
  return (
    <ServiceAreaPageClient 
      service="${service}"
      serviceName="${serviceName}"
      ${area ? `area="${area}"` : ''}
      ${area ? `areaName="${areaName}"` : ''}
      ${subArea ? `subArea="${subArea}"` : ''}
      ${subArea ? `subAreaName="${subAreaName}"` : ''}
    />
  );
}`;

  return pageTemplate;
}

function generateServiceAreaClientTemplate() {
  return `"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Shield, Star, Phone, CheckCircle, Users, ArrowRight, 
  Wrench, Sparkles, Bug, Hammer, Wind, Settings, Zap, Calendar,
  Award, TrendingUp, Eye, MessageSquare, Filter, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { BookingModal } from '@/components/booking-modal';

interface ServiceAreaPageClientProps {
  service: string;
  serviceName: string;
  area?: string;
  areaName?: string;
  subArea?: string;
  subAreaName?: string;
}

export default function ServiceAreaPageClient({ 
  service, 
  serviceName, 
  area, 
  areaName, 
  subArea, 
  subAreaName 
}: ServiceAreaPageClientProps) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const location = subArea && area ? \`\${subAreaName}, \${areaName}\` : areaName || 'Dubai';
  const pageTitle = \`\${serviceName} in \${location}\`;

  // Sample providers data
  const providers = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      company: 'Dubai Pro Services',
      rating: 4.9,
      reviews: 156,
      experience: 8,
      price: 'AED 150-300',
      responseTime: '15 min',
      image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      verified: true,
      emergency: true
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Elite Home Solutions',
      rating: 4.8,
      reviews: 203,
      experience: 6,
      price: 'AED 120-250',
      responseTime: '20 min',
      image: 'https://images.pexels.com/photos/7690076/pexels-photo-7690076.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      verified: true,
      emergency: false
    },
    {
      id: 3,
      name: 'Mohammed Hassan',
      company: 'Quick Fix Dubai',
      rating: 4.7,
      reviews: 89,
      experience: 5,
      price: 'AED 100-200',
      responseTime: '25 min',
      image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      verified: true,
      emergency: true
    }
  ];

  // Sample FAQs
  const faqs = [
    {
      question: \`How quickly can I get \${serviceName.toLowerCase()} service in \${location}?\`,
      answer: \`Most of our verified providers in \${location} respond within 15-30 minutes. For emergency services, we can often arrange same-day appointments.\`
    },
    {
      question: \`What does \${serviceName.toLowerCase()} service include?\`,
      answer: \`Our \${serviceName.toLowerCase()} service includes comprehensive assessment, professional service delivery, quality materials, and post-service support. All work comes with a satisfaction guarantee.\`
    },
    {
      question: \`Are the service providers in \${location} licensed and insured?\`,
      answer: \`Yes, all our service providers are thoroughly vetted, licensed, and carry comprehensive insurance. We only work with verified professionals who meet our strict quality standards.\`
    },
    {
      question: \`How much does \${serviceName.toLowerCase()} cost in \${location}?\`,
      answer: \`Pricing varies based on the scope of work, but typically ranges from AED 100-300. You'll receive transparent quotes from multiple providers before making a decision.\`
    },
    {
      question: \`Do you offer emergency \${serviceName.toLowerCase()} services?\`,
      answer: \`Yes, we have emergency service providers available 24/7 in \${location}. Emergency services may have additional charges but ensure you get help when you need it most.\`
    }
  ];

  const handleBookService = (provider = null) => {
    setSelectedProvider(provider);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm border border-neon-blue/30 px-6 py-3 rounded-full mb-8">
              <MapPin className="h-5 w-5 text-neon-blue" />
              <span className="text-white font-medium">Available in {location}</span>
              <Shield className="h-5 w-5 text-neon-green" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent mb-2">
                Professional
              </span>
              <span className="block bg-gradient-to-r from-neon-blue via-neon-green to-neon-blue bg-clip-text text-transparent">
                {serviceName}
              </span>
              <span className="block bg-gradient-to-r from-neon-green via-white to-neon-green bg-clip-text text-transparent mt-2">
                in {location}
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with verified {serviceName.toLowerCase()} professionals in {location}. 
              Get instant quotes, same-day service, and guaranteed quality work.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 text-white/90 bg-gradient-to-r from-neon-blue/10 to-neon-blue/5 backdrop-blur-sm border border-neon-blue/30 px-6 py-3 rounded-full">
                <Clock className="h-5 w-5 text-neon-blue" />
                <span className="font-medium">15min Response</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-gradient-to-r from-neon-green/10 to-neon-green/5 backdrop-blur-sm border border-neon-green/30 px-6 py-3 rounded-full">
                <Shield className="h-5 w-5 text-neon-green" />
                <span className="font-medium">Verified Pros</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full">
                <Star className="h-5 w-5 text-primary fill-current" />
                <span className="font-medium">4.9★ Rating</span>
              </div>
            </div>

            <Button 
              className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-neon-strong transition-all duration-300"
              onClick={() => handleBookService()}
            >
              Book {serviceName} Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Providers Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                Top {serviceName} Providers in {location}
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Choose from our network of verified professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((provider, index) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/30 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-neon-blue/30"
                        />
                        {provider.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-neon-green rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg">{provider.name}</h3>
                        <p className="text-neon-blue text-sm">{provider.company}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">{provider.rating}</span>
                            <span className="text-white/60 text-sm">({provider.reviews})</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4 text-purple-400" />
                            <span className="text-white/70 text-sm">{provider.experience}y exp</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Price Range</span>
                        <span className="text-neon-green font-semibold">{provider.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Response Time</span>
                        <span className="text-white">{provider.responseTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      {provider.emergency && (
                        <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                          Emergency Available
                        </Badge>
                      )}
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Verified
                      </Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold"
                        onClick={() => handleBookService(provider)}
                      >
                        Book Now
                      </Button>
                      <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-white/70">
              Get answers about {serviceName.toLowerCase()} services in {location}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={\`item-\${index}\`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 hover:border-neon-blue/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-white hover:text-neon-blue text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        selectedService={service}
        selectedArea={area}
        selectedSubArea={subArea}
        selectedProvider={selectedProvider}
      />
    </div>
  );
}`;
}

// Generate all service pages
function generateAllServicePages() {
  console.log('🚀 Generating all service and area pages...');
  let createdCount = 0;

  // Generate service pages for each area and sub-area
  Object.keys(services).forEach(serviceSlug => {
    Object.keys(areas).forEach(areaSlug => {
      const area = areas[areaSlug];
      
      // Create service page for main area
      const mainAreaDir = path.join('app', serviceSlug, areaSlug);
      ensureDirectoryExists(mainAreaDir);
      
      const mainAreaPagePath = path.join(mainAreaDir, 'page.tsx');
      if (!fs.existsSync(mainAreaPagePath)) {
        const pageContent = generateServicePageTemplate(serviceSlug, areaSlug);
        fs.writeFileSync(mainAreaPagePath, pageContent);
        createdCount++;
      }
      
      // Create client component for main area
      const clientPath = path.join(mainAreaDir, 'service-area-page-client.tsx');
      if (!fs.existsSync(clientPath)) {
        const clientContent = generateServiceAreaClientTemplate();
        fs.writeFileSync(clientPath, clientContent);
        createdCount++;
      }
      
      // Create service pages for sub-areas
      area.subAreas.forEach(subAreaSlug => {
        const subAreaDir = path.join('app', serviceSlug, areaSlug, subAreaSlug);
        ensureDirectoryExists(subAreaDir);
        
        const subAreaPagePath = path.join(subAreaDir, 'page.tsx');
        if (!fs.existsSync(subAreaPagePath)) {
          const pageContent = generateServicePageTemplate(serviceSlug, areaSlug, subAreaSlug);
          fs.writeFileSync(subAreaPagePath, pageContent);
          createdCount++;
        }
      });
    });
  });

  console.log(`✅ Created ${createdCount} service and area pages`);
  return createdCount;
}

// Generate area pages
function generateAreaPages() {
  console.log('🏘️ Generating area pages...');
  let createdCount = 0;

  Object.keys(areas).forEach(areaSlug => {
    const area = areas[areaSlug];
    
    // Create main area page
    const areaDir = path.join('app', 'areas', areaSlug);
    ensureDirectoryExists(areaDir);
    
    const areaPagePath = path.join(areaDir, 'page.tsx');
    if (!fs.existsSync(areaPagePath)) {
      const pageContent = `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/${areaSlug}'] || {
  title: 'Home Services in ${area.name} - HOMIZON Dubai',
  description: 'Professional home services in ${area.name}, Dubai. AC repair, cleaning, plumbing, electrical, pest control, and handyman services.',
};

export default async function ${area.name.replace(/\s+/g, '')}AreaPage() {
  return (
    <AreaPageClient 
      area="${areaSlug}"
      areaName="${area.name}"
    />
  );
}`;
      fs.writeFileSync(areaPagePath, pageContent);
      createdCount++;
    }
    
    // Create area client component
    const clientPath = path.join(areaDir, 'area-page-client.tsx');
    if (!fs.existsSync(clientPath)) {
      const clientContent = `"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, ArrowRight, Star, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface AreaPageClientProps {
  area: string;
  areaName: string;
}

export default function AreaPageClient({ area, areaName }: AreaPageClientProps) {
  const services = [
    { slug: 'ac-repair', name: 'AC Repair', icon: '❄️' },
    { slug: 'cleaning-services', name: 'Cleaning Services', icon: '✨' },
    { slug: 'pest-control', name: 'Pest Control', icon: '🐛' },
    { slug: 'handyman-services', name: 'Handyman', icon: '🔧' },
    { slug: 'appliance-repairs', name: 'Appliance Repair', icon: '⚙️' },
    { slug: 'bathroom-plumbing', name: 'Plumbing', icon: '🚿' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 backdrop-blur-sm border border-neon-blue/30 px-6 py-3 rounded-full mb-8">
              <MapPin className="h-5 w-5 text-neon-blue" />
              <span className="text-white font-medium">Service Area</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent mb-2">
                Home Services in
              </span>
              <span className="block bg-gradient-to-r from-neon-blue via-neon-green to-neon-blue bg-clip-text text-transparent">
                ${areaName}
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional home services in ${areaName}, Dubai. Connect with verified providers for all your home maintenance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={\`/\${service.slug}/\${area}\`}>
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/30 transition-all duration-300 overflow-hidden group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-white font-semibold text-lg mb-2">{service.name}</h3>
                        <p className="text-white/60 text-sm mb-4">Available in ${areaName}</p>
                        <div className="flex items-center justify-center text-neon-blue text-sm font-medium group-hover:text-neon-green transition-colors">
                          View Services
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}`;
      fs.writeFileSync(clientPath, clientContent);
      createdCount++;
    }
    
    // Create sub-area pages
    area.subAreas.forEach(subAreaSlug => {
      const subAreaDir = path.join('app', 'areas', areaSlug, subAreaSlug);
      ensureDirectoryExists(subAreaDir);
      
      const subAreaPagePath = path.join(subAreaDir, 'page.tsx');
      if (!fs.existsSync(subAreaPagePath)) {
        const subAreaName = formatName(subAreaSlug);
        const pageContent = `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/${areaSlug}/${subAreaSlug}'] || {
  title: 'Home Services in ${subAreaName}, ${area.name} - HOMIZON Dubai',
  description: 'Professional home services in ${subAreaName}, ${area.name}, Dubai. AC repair, cleaning, plumbing, electrical, pest control, and handyman services.',
};

export default async function ${subAreaName.replace(/\s+/g, '')}Page() {
  return (
    <AreaPageClient 
      area="${areaSlug}"
      areaName="${area.name}"
      subArea="${subAreaSlug}"
      subAreaName="${subAreaName}"
    />
  );
}`;
        fs.writeFileSync(subAreaPagePath, pageContent);
        createdCount++;
      }
    });
  });

  console.log(`✅ Created ${createdCount} area pages`);
  return createdCount;
}

// Main execution
function main() {
  console.log('🎯 Starting comprehensive page generation...');
  
  const servicePages = generateAllServicePages();
  const areaPages = generateAreaPages();
  
  const totalPages = servicePages + areaPages;
  
  console.log(`\n🎉 Page generation complete!`);
  console.log(`📊 Total pages created: ${totalPages}`);
  console.log(`   - Service×Area pages: ${servicePages}`);
  console.log(`   - Area pages: ${areaPages}`);
  console.log(`\n✅ All pages are now ready for SEO optimization and content updates.`);
}

if (require.main === module) {
  main();
}

module.exports = {
  generateAllServicePages,
  generateAreaPages,
  services,
  areas
};