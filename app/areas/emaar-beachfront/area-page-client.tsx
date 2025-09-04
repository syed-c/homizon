"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Phone, Mail, Award, Users, CheckCircle } from 'lucide-react';
import BookingModal from '@/components/booking-modal';
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
              Emaar Beachfront
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            undefined
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
            Popular Services in Emaar Beachfront
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
              Sub-Areas in Emaar Beachfront
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
                      onClick={() => window.location.href = `/areas/${areaSlug}/${subArea.slug}`}
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
            Ready to Book a Service in Emaar Beachfront?
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
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        service={selectedService} serviceName={selectedService}
        area={areaSlug} areaName={areaSlug}
      />
    </div>
  );
}
