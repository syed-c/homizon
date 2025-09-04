#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import data from lib/data.ts (we'll read it as text and parse the relevant parts)
const dataContent = fs.readFileSync(path.join(__dirname, '../lib/data.ts'), 'utf8');

// Extract services and areas from the data file
const servicesMatch = dataContent.match(/export const services: Service\[\] = \[([\s\S]*?)\];/);
const areasMatch = dataContent.match(/export const areas: Area\[\] = \[([\s\S]*?)\];/);

// Define all services that need pages
const services = [
  // AC Repair & Cleaning
  { slug: 'ac-repair', name: 'AC Repair & Maintenance', category: 'ac-repair-cleaning' },
  { slug: 'ac-cleaning', name: 'AC Cleaning & Sanitization', category: 'ac-repair-cleaning' },
  { slug: 'central-ac', name: 'Central AC Installation', category: 'ac-repair-cleaning' },
  
  // Appliance Repair
  { slug: 'washing-machine-repair', name: 'Washing Machine Repair', category: 'appliance-repair' },
  { slug: 'dishwasher-repair', name: 'Dishwasher Repair', category: 'appliance-repair' },
  { slug: 'refrigerator-repair', name: 'Refrigerator Repair', category: 'appliance-repair' },
  { slug: 'oven-repair', name: 'Oven & Stove Repair', category: 'appliance-repair' },
  { slug: 'dryer-repair', name: 'Dryer Repair', category: 'appliance-repair' },
  { slug: 'ice-maker-repair', name: 'Ice Maker Repair', category: 'appliance-repair' },
  { slug: 'wine-cooler-repair', name: 'Wine Cooler Repair', category: 'appliance-repair' },
  
  // Deep Cleaning Services
  { slug: 'deep-cleaning', name: 'Deep Home Cleaning', category: 'deep-cleaning' },
  { slug: 'sofa-cleaning', name: 'Sofa & Upholstery Cleaning', category: 'deep-cleaning' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', category: 'deep-cleaning' },
  { slug: 'mattress-cleaning', name: 'Mattress Cleaning', category: 'deep-cleaning' },
  { slug: 'kitchen-cleaning', name: 'Kitchen Deep Cleaning', category: 'deep-cleaning' },
  { slug: 'bathroom-cleaning', name: 'Bathroom Deep Cleaning', category: 'deep-cleaning' },
  { slug: 'move-in-out-cleaning', name: 'Move-In/Move-Out Cleaning', category: 'deep-cleaning' },
  
  // Pest Control Services
  { slug: 'general-pest-control', name: 'General Pest Control', category: 'pest-control' },
  { slug: 'cockroach-control', name: 'Cockroach Control', category: 'pest-control' },
  { slug: 'bed-bug-control', name: 'Bed Bug Treatment', category: 'pest-control' },
  { slug: 'rodent-control', name: 'Rodent Control', category: 'pest-control' },
  { slug: 'termite-control', name: 'Termite Treatment', category: 'pest-control' },
  { slug: 'mosquito-control', name: 'Mosquito & Fly Control', category: 'pest-control' },
  
  // Plumbing Services
  { slug: 'plumbing-repair', name: 'Plumbing Repair', category: 'plumbing' },
  { slug: 'drain-cleaning', name: 'Drain Cleaning & Unblocking', category: 'plumbing' },
  { slug: 'bathroom-plumbing', name: 'Bathroom Plumbing', category: 'plumbing' },
  { slug: 'water-heater-repair', name: 'Water Heater Repair', category: 'plumbing' },
  
  // Electrician Services
  { slug: 'electrical-repair', name: 'Electrical Repair', category: 'electrician' },
  { slug: 'light-installation', name: 'Light Installation', category: 'electrician' },
  { slug: 'electrical-panel', name: 'Electrical Panel Services', category: 'electrician' },
  
  // Handyman Services
  { slug: 'general-handyman', name: 'General Handyman', category: 'handyman' },
  { slug: 'painting', name: 'Painting Services', category: 'handyman' },
  { slug: 'furniture-assembly', name: 'Furniture Assembly', category: 'handyman' },
  { slug: 'wall-mounting', name: 'TV & Wall Mounting', category: 'handyman' },
  { slug: 'door-repair', name: 'Door & Window Repair', category: 'handyman' },
  { slug: 'ac-servicing', name: 'AC Servicing', category: 'handyman' },
  { slug: 'installations', name: 'Curtain/TV/Furniture Installations', category: 'handyman' },
  
  // Laundry & Dry Cleaning
  { slug: 'laundry-service', name: 'Laundry Service', category: 'laundry' },
  { slug: 'dry-cleaning', name: 'Dry Cleaning', category: 'laundry' },
  { slug: 'ironing-service', name: 'Ironing Service', category: 'laundry' },
  
  // Packers & Movers
  { slug: 'home-moving', name: 'Home Moving Services', category: 'packers-movers' },
  { slug: 'office-moving', name: 'Office Moving Services', category: 'packers-movers' },
  { slug: 'furniture-moving', name: 'Furniture Moving', category: 'packers-movers' },
  
  // Disinfection & Sanitization
  { slug: 'home-sanitization', name: 'Home Sanitization', category: 'sanitization' },
  { slug: 'office-sanitization', name: 'Office Sanitization', category: 'sanitization' },
  { slug: 'covid-sanitization', name: 'COVID-19 Sanitization', category: 'sanitization' }
];

// Define all areas that need pages
const areas = [
  { slug: 'al-barsha', name: 'Al Barsha', subAreas: ['al-barsha-1', 'al-barsha-2', 'al-barsha-3', 'al-barsha-south', 'al-barsha-heights'] },
  { slug: 'al-quoz', name: 'Al Quoz', subAreas: ['al-quoz-1', 'al-quoz-2', 'al-quoz-3', 'al-quoz-4'] },
  { slug: 'business-bay', name: 'Business Bay', subAreas: ['executive-bay', 'canal-views', 'business-central', 'bay-avenue', 'bay-square'] },
  { slug: 'downtown-dubai', name: 'Downtown Dubai', subAreas: ['burj-khalifa-area', 'dubai-mall-district', 'opera-district', 'difc', 'old-town-dubai'] },
  { slug: 'dubai-marina', name: 'Dubai Marina', subAreas: ['marina-walk', 'marina-promenade', 'marina-wharf', 'marina-gate', 'marina-crown'] },
  { slug: 'jbr', name: 'JBR', subAreas: ['jbr-walk', 'beach-residence-1', 'beach-residence-2', 'beach-residence-3', 'bahar'] },
  { slug: 'jumeirah', name: 'Jumeirah', subAreas: ['jumeirah-1', 'jumeirah-2', 'jumeirah-3', 'al-manara', 'al-safa', 'al-wasl', 'umm-suqeim'] },
  { slug: 'palm-jumeirah', name: 'Palm Jumeirah', subAreas: ['trunk', 'frond-a', 'frond-b', 'frond-c', 'atlantis-area'] },
  { slug: 'deira', name: 'Deira', subAreas: ['gold-souk-area', 'spice-souk-area', 'port-saeed', 'al-rigga', 'al-sabkha'] },
  { slug: 'jlt', name: 'JLT', subAreas: ['cluster-a', 'cluster-b', 'cluster-c', 'cluster-d', 'cluster-i'] },
  { slug: 'motor-city', name: 'Motor City', subAreas: ['green-community', 'motor-city-central', 'uptown-motor-city'] },
  { slug: 'discovery-gardens', name: 'Discovery Gardens', subAreas: ['mediterranean-cluster', 'zen-cluster', 'mogul-cluster'] },
  { slug: 'the-greens', name: 'The Greens', subAreas: ['al-ghaf', 'al-nakheel', 'al-sedr'] },
  { slug: 'the-views', name: 'The Views', subAreas: ['fairways-north', 'fairways-south', 'golf-tower'] },
  { slug: 'dubai-investment-park', name: 'Dubai Investment Park', subAreas: ['dip-1', 'dip-2', 'green-community-dip'] },
  { slug: 'dubai-hills-estate', name: 'Dubai Hills Estate', subAreas: ['golf-place', 'parkway', 'golf-suites'] },
  { slug: 'arabian-ranches', name: 'Arabian Ranches', subAreas: ['mirador', 'savannah', 'alvorada'] },
  { slug: 'dubai-sports-city', name: 'Dubai Sports City', subAreas: ['golf-horizon', 'golf-promenade', 'sports-city-central'] },
  { slug: 'jvc', name: 'JVC', subAreas: ['jvc-district-1', 'jvc-district-2', 'jvc-district-3'] },
  { slug: 'international-city', name: 'International City', subAreas: ['france-cluster', 'italy-cluster', 'china-cluster'] },
  { slug: 'mirdif', name: 'Mirdif', subAreas: ['mirdif-hills', 'uptown-mirdif', 'ghoroob'] },
  { slug: 'dubai-creek-harbour', name: 'Dubai Creek Harbour', subAreas: ['creek-beach', 'creek-horizon', 'creek-gate'] },
  { slug: 'silicon-oasis', name: 'Silicon Oasis', subAreas: ['silicon-gates', 'silicon-avenue', 'silicon-heights'] },
  { slug: 'dubai-south', name: 'Dubai South', subAreas: ['golf-links', 'mag-city', 'pulse-beachfront'] },
  { slug: 'dubai-festival-city', name: 'Dubai Festival City', subAreas: ['al-badia-residences', 'creek-waters', 'marsa-plaza'] },
  { slug: 'dubai-land', name: 'Dubai Land', subAreas: ['remraam', 'mudon', 'living-legends'] },
  { slug: 'al-satwa', name: 'Al Satwa', subAreas: ['satwa-central', 'al-satwa-residential'] },
  { slug: 'al-karama', name: 'Al Karama', subAreas: ['karama-souk', 'karama-residential'] },
  { slug: 'bur-dubai', name: 'Bur Dubai', subAreas: ['al-fahidi', 'textile-souk', 'meena-bazaar'] },
  { slug: 'al-garhoud', name: 'Al Garhoud', subAreas: ['garhoud-bridge', 'dubai-creek-golf'] },
  { slug: 'al-rashidiya', name: 'Al Rashidiya', subAreas: ['rashidiya-1', 'rashidiya-2'] },
  { slug: 'al-mizhar', name: 'Al Mizhar', subAreas: ['mizhar-1', 'mizhar-2'] },
  { slug: 'al-warqa', name: 'Al Warqa', subAreas: ['warqa-1', 'warqa-2', 'warqa-3'] },
  { slug: 'al-nahda', name: 'Al Nahda', subAreas: ['nahda-1', 'nahda-2'] },
  { slug: 'al-qusais', name: 'Al Qusais', subAreas: ['qusais-1', 'qusais-2', 'qusais-3'] },
  { slug: 'al-khawaneej', name: 'Al Khawaneej', subAreas: ['khawaneej-1', 'khawaneej-2'] },
  { slug: 'al-twar', name: 'Al Twar', subAreas: ['twar-1', 'twar-2'] },
  
  // Areas without sub-areas
  { slug: 'dubai-media-city', name: 'Dubai Media City', subAreas: [] },
  { slug: 'dubai-internet-city', name: 'Dubai Internet City', subAreas: [] },
  { slug: 'dubai-knowledge-park', name: 'Dubai Knowledge Park', subAreas: [] },
  { slug: 'city-walk', name: 'City Walk', subAreas: [] },
  { slug: 'al-sufouh', name: 'Al Sufouh', subAreas: [] },
  { slug: 'emirates-hills', name: 'Emirates Hills', subAreas: [] },
  { slug: 'the-meadows', name: 'The Meadows', subAreas: [] },
  { slug: 'the-springs', name: 'The Springs', subAreas: [] },
  { slug: 'the-lakes', name: 'The Lakes', subAreas: [] },
  { slug: 'arjan', name: 'Arjan', subAreas: [] },
  { slug: 'al-barari', name: 'Al Barari', subAreas: [] },
  { slug: 'al-furjan', name: 'Al Furjan', subAreas: [] },
  { slug: 'the-gardens', name: 'The Gardens', subAreas: [] },
  { slug: 'dubai-production-city', name: 'Dubai Production City', subAreas: [] },
  { slug: 'academic-city', name: 'Academic City', subAreas: [] },
  { slug: 'nad-al-sheba', name: 'Nad Al Sheba', subAreas: [] },
  { slug: 'meydan', name: 'Meydan', subAreas: [] },
  { slug: 'silicon-central', name: 'Silicon Central', subAreas: [] },
  { slug: 'jebel-ali', name: 'Jebel Ali', subAreas: [] },
  { slug: 'bluewaters-island', name: 'Bluewaters Island', subAreas: [] },
  { slug: 'al-mamzar', name: 'Al Mamzar', subAreas: [] },
  { slug: 'town-square', name: 'Town Square', subAreas: [] },
  { slug: 'emaar-beachfront', name: 'Emaar Beachfront', subAreas: [] },
  { slug: 'dubai-islands', name: 'Dubai Islands', subAreas: [] }
];

// Create directory if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Create service page template
function createServicePageTemplate(service) {
  return `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServicePageContent from '@/components/services-page-content';

export const metadata: Metadata = siteMetadata['/services/${service.slug}'];

export default function ${service.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return <ServicePageContent serviceSlug="${service.slug}" />;
}
`;
}

// Create area page template
function createAreaPageTemplate(area) {
  return `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from './area-page-client';

export const metadata: Metadata = siteMetadata['/areas/${area.slug}'];

export default function ${area.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return <AreaPageClient areaSlug="${area.slug}" />;
}
`;
}

// Create area client component template
function createAreaClientTemplate(area) {
  return `"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Phone, Mail, Award, Users, CheckCircle } from 'lucide-react';
import { BookingModal } from '@/components/booking-modal';
import { getAreaBySlug, getProvidersForServiceArea, services } from '@/lib/data';

export default function AreaPageClient({ areaSlug }: { areaSlug: string }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  
  const area = getAreaBySlug(areaSlug);
  
  if (!area) {
    return <div>Area not found</div>;
  }

  const handleBookService = (serviceSlug: string) => {
    setSelectedService(serviceSlug);
    setIsBookingOpen(true);
  };

  const popularServices = services.filter(s => s.isPopular).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-8 w-8 text-blue-400" />
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {area.sector || 'Dubai Area'}
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Home Services in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ${area.name}
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            ${area.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>Top Rated Services</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="h-5 w-5 text-blue-400" />
              <span>Same Day Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Popular Services in ${area.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service) => (
              <Card key={service.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <div className="w-6 h-6 bg-blue-400 rounded" />
                    </div>
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/80">Starting from</span>
                    <span className="text-xl font-bold text-blue-400">{service.averagePrice}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/80">Duration</span>
                    <span className="text-white">{service.estimatedTime}</span>
                  </div>
                  <Button 
                    onClick={() => handleBookService(service.slug)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-areas */}
      {area.subAreas && area.subAreas.length > 0 && (
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Sub-Areas in ${area.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area.subAreas.map((subArea) => (
                <Card key={subArea.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">{subArea.name}</CardTitle>
                    <CardDescription className="text-white/70">
                      {subArea.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.location.href = \`/areas/\${areaSlug}/\${subArea.slug}\`}
                    >
                      View Services
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book a Service in ${area.name}?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Connect with verified professionals in your area and get your home service needs handled quickly and efficiently.
          </p>
          <Button 
            size="lg"
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
          >
            Book Any Service Now
          </Button>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
        selectedArea={areaSlug}
      />
    </div>
  );
}
`;
}

// Create service-area combination page template
function createServiceAreaPageTemplate(service, area) {
  return `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from './service-area-page-client';

export const metadata: Metadata = siteMetadata['/${service.slug}/${area.slug}'];

export default async function ${service.name.replace(/[^a-zA-Z0-9]/g, '')}In${area.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return <ServiceAreaPageClient serviceSlug="${service.slug}" areaSlug="${area.slug}" />;
}
`;
}

// Create service-area client component template
function createServiceAreaClientTemplate(service, area) {
  return `"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Star, Clock, Phone, Mail, Award, Users, CheckCircle, Wrench } from 'lucide-react';
import { BookingModal } from '@/components/booking-modal';
import { getServiceBySlug, getAreaBySlug, getProvidersForServiceArea, generateServiceAreaContent } from '@/lib/data';

export default function ServiceAreaPageClient({ 
  serviceSlug, 
  areaSlug 
}: { 
  serviceSlug: string;
  areaSlug: string;
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  const providers = getProvidersForServiceArea(serviceSlug, areaSlug);
  const content = generateServiceAreaContent(service?.name || '', area?.name || '');
  
  if (!service || !area) {
    return <div>Service or area not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Wrench className="h-8 w-8 text-blue-400" />
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {service.category.replace('-', ' ').toUpperCase()}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {service.name} in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ${area.name}
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional {service.name.toLowerCase()} services in ${area.name}. 
            Connect with verified experts who understand your local needs and deliver exceptional results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>Top Rated</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="h-5 w-5 text-blue-400" />
              <span>{service.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span>Local Experts</span>
            </div>
          </div>
          
          <Button 
            size="lg"
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
          >
            Book {service.name} Now
          </Button>
        </div>
      </section>

      {/* Service Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{service.averagePrice}</div>
                <div className="text-white/70">Starting Price</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">{service.estimatedTime}</div>
                <div className="text-white/70">Service Duration</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-400 mb-2">{providers.length}+</div>
                <div className="text-white/70">Available Providers</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Providers */}
      {providers.length > 0 && (
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Top {service.name} Providers in ${area.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providers.slice(0, 6).map((provider) => (
                <Card key={provider.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white">{provider.name}</CardTitle>
                        <CardDescription className="text-white/70">
                          {provider.company}
                        </CardDescription>
                      </div>
                      {provider.isFeatured && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{provider.rating}</span>
                          <span className="text-white/70">({provider.reviewCount} reviews)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/70">
                        <Award className="h-4 w-4" />
                        <span>{provider.experience} years experience</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/70">
                        <Clock className="h-4 w-4" />
                        <span>Response: {provider.responseTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-white/70">
                        <Users className="h-4 w-4" />
                        <span>{provider.completedJobs} jobs completed</span>
                      </div>
                      
                      <Button 
                        onClick={() => setIsBookingOpen(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {content.faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={\`item-\${index}\`}
                className="bg-white/10 border-white/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-white/80">
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book {service.name} in ${area.name}?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Connect with verified professionals and get your service completed quickly and efficiently.
          </p>
          <Button 
            size="lg"
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
          >
            Book Service Now
          </Button>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={serviceSlug}
        selectedArea={areaSlug}
      />
    </div>
  );
}
`;
}

// Generate static params for service-area combinations
function createServiceAreaStaticParams() {
  return `import { services, areas } from '@/lib/data';

export async function generateStaticParams() {
  const params = [];
  
  for (const service of services) {
    for (const area of areas) {
      params.push({
        service: service.slug,
        area: area.slug
      });
    }
  }
  
  return params;
}
`;
}

console.log('Starting page creation process...');

// Create all service pages
console.log('Creating service pages...');
for (const service of services) {
  const servicePath = path.join(__dirname, '../app/services', service.slug);
  ensureDir(servicePath);
  
  const pageContent = createServicePageTemplate(service);
  fs.writeFileSync(path.join(servicePath, 'page.tsx'), pageContent);
  console.log(`Created service page: /services/${service.slug}`);
}

// Create all area pages
console.log('Creating area pages...');
for (const area of areas) {
  const areaPath = path.join(__dirname, '../app/areas', area.slug);
  ensureDir(areaPath);
  
  const pageContent = createAreaPageTemplate(area);
  const clientContent = createAreaClientTemplate(area);
  
  fs.writeFileSync(path.join(areaPath, 'page.tsx'), pageContent);
  fs.writeFileSync(path.join(areaPath, 'area-page-client.tsx'), clientContent);
  console.log(`Created area page: /areas/${area.slug}`);
  
  // Create sub-area pages
  for (const subArea of area.subAreas) {
    const subAreaPath = path.join(areaPath, subArea);
    ensureDir(subAreaPath);
    
    const subAreaPageContent = `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import AreaPageClient from '../area-page-client';

export const metadata: Metadata = siteMetadata['/areas/${area.slug}/${subArea}'];

export default function SubAreaPage() {
  return <AreaPageClient areaSlug="${area.slug}" subAreaSlug="${subArea}" />;
}
`;
    
    fs.writeFileSync(path.join(subAreaPath, 'page.tsx'), subAreaPageContent);
    console.log(`Created sub-area page: /areas/${area.slug}/${subArea}`);
  }
}

// Create all service-area combination pages
console.log('Creating service-area combination pages...');
for (const service of services) {
  for (const area of areas) {
    const servicePath = path.join(__dirname, '../app', service.slug, area.slug);
    ensureDir(servicePath);
    
    const pageContent = createServiceAreaPageTemplate(service, area);
    const clientContent = createServiceAreaClientTemplate(service, area);
    
    fs.writeFileSync(path.join(servicePath, 'page.tsx'), pageContent);
    fs.writeFileSync(path.join(servicePath, 'service-area-page-client.tsx'), clientContent);
    console.log(`Created service-area page: /${service.slug}/${area.slug}`);
    
    // Create service-area-subarea combination pages
    for (const subArea of area.subAreas) {
      const subAreaPath = path.join(servicePath, subArea);
      ensureDir(subAreaPath);
      
      const subAreaPageContent = `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '../service-area-page-client';

export const metadata: Metadata = siteMetadata['/${service.slug}/${area.slug}/${subArea}'];

export default async function ServiceAreaSubAreaPage() {
  return <ServiceAreaPageClient serviceSlug="${service.slug}" areaSlug="${area.slug}" subAreaSlug="${subArea}" />;
}
`;
      
      fs.writeFileSync(path.join(subAreaPath, 'page.tsx'), subAreaPageContent);
      console.log(`Created service-area-subarea page: /${service.slug}/${area.slug}/${subArea}`);
    }
  }
}

console.log('Page creation completed successfully!');
console.log(`Created ${services.length} service pages`);
console.log(`Created ${areas.length} area pages`);
console.log(`Created ${services.length * areas.length} service-area combination pages`);

const totalSubAreas = areas.reduce((sum, area) => sum + area.subAreas.length, 0);
console.log(`Created ${totalSubAreas} sub-area pages`);
console.log(`Created ${services.length * totalSubAreas} service-area-subarea combination pages`);

const totalPages = services.length + areas.length + (services.length * areas.length) + totalSubAreas + (services.length * totalSubAreas);
console.log(`Total pages created: ${totalPages}`);