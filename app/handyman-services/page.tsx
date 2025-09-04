"use client";

import { motion } from 'framer-motion';
import { Hammer, MapPin, Star, Clock, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { services } from '@/lib/data';

export default function HandymanServicesPage() {
  // Filter services for handyman services category
  const handymanServices = services.filter(service => service.category === 'handyman');

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Breadcrumb */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-white/70">
            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Handyman Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-primary-400 mb-6">
            <Hammer className="h-5 w-5" />
            <span className="text-sm font-medium">Handyman Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-200 to-accent-200 bg-clip-text text-transparent">
              Professional Handyman Services
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Across Dubai
            </span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Skilled professionals for all your home maintenance and repair needs. From electrical work to plumbing, painting to furniture assembly - we've got you covered.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-12">
            <div className="flex items-center space-x-2 text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-primary-400" />
              <span>Licensed Professionals</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span>4.8/5 Customer Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="h-4 w-4 text-accent-400" />
              <span>Quick Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Our Handyman Services
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive home maintenance and repair services with skilled professionals and quality materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handymanServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 group cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Hammer className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                            {service.name}
                          </h3>
                          <p className="text-white/70 text-sm mb-4">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm mb-4">
                            <div className="flex items-center space-x-4">
                              <Badge variant="secondary" className="bg-accent-500/20 text-accent-400 border-0">
                                {service.averagePrice}
                              </Badge>
                              <span className="text-white/60">{service.estimatedTime}</span>
                            </div>
                          </div>
                          
                          <div className="text-primary-400 font-medium text-sm group-hover:text-primary-300 transition-colors">
                            View Service Details →
                          </div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 relative bg-gradient-to-br from-primary-900/5 via-neutral-900 to-accent-900/5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Why Choose Our Handyman Services?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Multi-skilled Professionals',
                description: 'Our handymen are trained in multiple trades and can handle various home repair tasks'
              },
              {
                icon: Clock,
                title: 'Quick Response',
                description: 'Fast scheduling and prompt service for all your home maintenance needs'
              },
              {
                icon: CheckCircle,
                title: 'Quality Materials',
                description: 'We use high-quality materials and tools to ensure lasting repairs and installations'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              Need A Handyman?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Get connected with skilled handyman professionals in your area
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book?category=handyman-services">
              <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full">
                Book Service Now
              </Button>
            </Link>
            <Link href="/areas">
              <Button variant="outline" className="text-gray-900 bg-white border-white/20 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full">
                <MapPin className="mr-2 h-5 w-5" />
                Choose Your Area
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}