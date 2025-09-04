"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BadgeCheck, Star, MapPin, Wrench, Phone, Shield, Zap, Users } from 'lucide-react';
import type { Provider } from '@/lib/data';
import BookingModal from '@/components/booking-modal';

type ProviderProfileClientProps = {
  provider: Provider;
  services: { slug: string; name: string; category: string }[];
  areas: { slug: string; name: string }[];
};

export default function ProviderProfileClient({ provider, services, areas }: ProviderProfileClientProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [bookingOpen, setBookingOpen] = useState(false);

  const defaultService = useMemo(() => services[0] ?? { slug: 'general-handyman', name: 'General Handyman' }, [services]);
  const defaultArea = useMemo(() => areas[0] ?? { slug: 'dubai', name: 'Dubai' }, [areas]);

  const telHref = useMemo(() => `tel:${provider.phone.replace(/\s+/g, '')}`, [provider.phone]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-start gap-6 flex-wrap">
            <div className="relative">
              <img src={provider.profileImage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=160&w=160'} alt={provider.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/10" />
              {provider.availability.emergency && (
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center"><Zap className="h-4 w-4 text-white" /></div>
              )}
            </div>
            <div className="flex-1 min-w-[260px] break-words">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold">{provider.name}</h1>
                {provider.isApproved && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neon-green/15 text-neon-green"><BadgeCheck className="h-3 w-3"/> Verified</span>
                )}
                {provider.isPremium && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neon-blue/15 text-neon-blue"><Shield className="h-3 w-3"/> Premium</span>
                )}
              </div>
              <p className="text-white/70 mt-1">{provider.company || 'Independent Professional'}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-white/80">
                <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400"/> {provider.rating.toFixed(1)} ({provider.reviewCount} reviews)</span>
                <span className="inline-flex items-center gap-1"><Users className="h-4 w-4"/> {provider.completedJobs} jobs</span>
                <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4"/> {provider.phone}</span>
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a href={telHref}>
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-green text-black font-semibold"><Phone className="h-4 w-4 mr-2"/> Call</Button>
                </a>
                <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10" onClick={() => setBookingOpen(true)}>
                  <Wrench className="h-4 w-4 mr-2"/> Book Service
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-white/5 border border-white/10 flex flex-wrap">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="locations">Service Locations</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard label="Rating" value={provider.rating.toFixed(1)} />
                  <StatCard label="Reviews" value={provider.reviewCount} />
                  <StatCard label="Completed Jobs" value={provider.completedJobs} />
                  <StatCard label="Response" value={provider.responseTime} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">{provider.description}</p>
                <div className="flex flex-wrap gap-2">
                  {provider.certifications.map(cert => (
                    <span key={cert} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{cert}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-white/80">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4"/> Based in Dubai</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(s => (
                    <div key={s.slug} className="p-4 rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold break-words">{s.name}</div>
                          <div className="text-xs text-white/60">Category: {s.category}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="locations" className="mt-6">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Service Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {areas.map(a => (
                    <span key={a.slug} className="text-sm px-3 py-1 rounded-full bg-neon-blue/15 text-neon-blue">{a.name}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BookingModal 
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        provider={{
          id: provider.id,
          name: provider.name,
          company: provider.company,
          profileImage: provider.profileImage,
          rating: provider.rating,
          reviewCount: provider.reviewCount,
          experience: provider.experience,
          services: provider.services,
          areas: provider.areas,
          isApproved: provider.isApproved,
          description: provider.description,
        }}
        service={defaultService.slug}
        serviceName={defaultService.name}
        area={defaultArea.slug}
        areaName={defaultArea.name}
      />
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-white">
      <div className="text-white/60 text-sm">{label}</div>
      <div className="text-xl font-semibold mt-1">{value}</div>
    </div>
  );
}


