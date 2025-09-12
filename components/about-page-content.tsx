"use client";

import { 
  Shield, Award, Users, Clock, CheckCircle, Star, Heart,
  Target, Eye, Zap, ThumbsUp, MapPin, Phone, Mail,
  Home as HomeIcon, ArrowRight, Calendar, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPageContentFromSupabase } from '@/lib/supabase';

export default function AboutPageContent() {
  console.log("About page loaded");
  const [cms, setCms] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await getPageContentFromSupabase('about');
        setCms((res as any)?.data?.content || null);
      } catch {}
    })();
  }, []);

  const stats = [
    { label: 'Happy Customers', value: '25,000+', icon: Users },
    { label: 'Services Completed', value: '75,000+', icon: CheckCircle },
    { label: 'Verified Professionals', value: '500+', icon: Shield },
    { label: 'Areas Covered', value: '50+', icon: MapPin }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'All professionals undergo rigorous background checks and verification processes.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of service quality with satisfaction guarantees.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'On-time service delivery with emergency support available 24/7.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority with dedicated customer support.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Chief Executive Officer',
      experience: '15 years in Dubai services industry',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&h=300&w=300'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      experience: '12 years in service management',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&h=300&w=300'
    },
    {
      name: 'Rajesh Patel',
      role: 'Technology Director',
      experience: '10 years in platform development',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&h=300&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-macaly="about-hero-title">
                {(() => {
                  const h1 = cms?.hero?.h1 || "Dubai's Largest\nService Directory";
                  const [l1, l2] = String(h1).split('\n');
                  return (
                    <>
                      <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">{l1}</span>
                      <br />
                      <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">{l2 || ''}</span>
                    </>
                  );
                })()}
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed" data-macaly="about-hero-description">
                {cms?.hero?.description || "Since 2020, we've been connecting Dubai residents with trusted professionals, making home maintenance simple, reliable, and stress-free through our comprehensive directory."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full font-semibold shadow-neon hover:shadow-neon-strong transition-all duration-300">
                    Browse Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              {cms?.hero?.image_url && (
                <div className="relative rounded-2xl overflow-hidden border border-neon-blue/20">
                  <img 
                    src={cms.hero.image_url}
                    alt="About hero"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              )}

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-neon-green/30">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-neon-green" />
                  <div>
                    <div className="text-2xl font-bold text-white">4.9★</div>
                    <div className="text-white/60 text-sm">Customer Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-neon-blue/30">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-8 w-8 text-neon-blue" />
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-white/60 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-black" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-neon-blue" />
                <h2 className="text-3xl font-bold text-white">{cms?.mission?.h2 || 'Our Mission'}</h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-6">{cms?.mission?.paragraph || "To revolutionize the home services industry in Dubai by providing a comprehensive directory that connects residents with verified professionals, ensuring quality service delivery and complete transparency at every touchpoint. We believe that finding trusted home services should be simple, transparent, and stress-free. Our mission is to make professional home services accessible to every household in Dubai through our comprehensive directory platform."}</p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-neon-green" />
                <h2 className="text-3xl font-bold text-white">{cms?.vision?.h2 || 'Our Vision'}</h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-6">{cms?.vision?.paragraph || "To become the most trusted and comprehensive home services directory in the Middle East, setting new standards for transparency, reliability, and customer satisfaction. We envision a future where every home service need is met through our platform with professional excellence, transparent pricing, and guaranteed satisfaction, making us the first choice for residents and service providers across the region."}</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-card rounded-3xl border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white" data-macaly="values-title">
              <span className="bg-gradient-to-r from-white to-neon-green bg-clip-text text-transparent">
                {cms?.values?.h2 || 'Our Core Values'}
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto" data-macaly="values-description">
              {cms?.values?.paragraph || 'These principles guide everything we do and every decision we make'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(cms?.values?.items || values).map((value: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center mx-auto mb-6">
                  {(value.icon ? value.icon : Shield) && <Shield className="h-8 w-8 text-black" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section removed per request */}

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-3xl p-12 border border-neon-blue/30">
            <h2 className="text-4xl font-bold text-white mb-4" data-macaly="cta-title">Ready to Experience the Difference?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto" data-macaly="cta-description">
              Join thousands of satisfied customers who trust our directory to find the best service providers in Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-neon hover:shadow-neon-strong transition-all duration-300">
                  Browse Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}