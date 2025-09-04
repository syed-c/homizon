"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, Star, Clock, Shield, CheckCircle, Phone, 
  ArrowRight, Calendar, Award, Users, MapPin, Zap,
  ThermometerSun, Wind, Droplets, Snowflake, Settings,
  Home as HomeIcon, Filter, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function ApplianceRepairsPage() {
  const [selectedArea, setSelectedArea] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  console.log("Appliance repairs page loaded");

  const applianceServices = [
    {
      name: 'AC Repair & Maintenance',
      description: 'Professional air conditioning repair, maintenance, and installation services',
      icon: Wind,
      startingPrice: 'AED 150',
      rating: 4.9,
      completedJobs: 2500,
      urgentAvailable: true,
      estimatedTime: '2-4 hours',
      image: 'https://images.pexels.com/photos/5691634/pexels-photo-5691634.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      features: ['Same-day service', 'Gas refill', 'Filter cleaning', 'Performance testing'],
      commonIssues: ['Not cooling', 'Strange noises', 'Water leakage', 'High electricity bills']
    },
    {
      name: 'Washing Machine Repair',
      description: 'Expert repair for all washing machine brands and models',
      icon: Droplets,
      startingPrice: 'AED 120',
      rating: 4.8,
      completedJobs: 1800,
      urgentAvailable: true,
      estimatedTime: '1-3 hours',
      image: 'https://images.pexels.com/photos/4239019/pexels-photo-4239019.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      features: ['All brands supported', 'Original parts', 'Warranty included', 'Free diagnosis'],
      commonIssues: ['Not spinning', 'Water not draining', 'Loud noise', 'Door not opening']
    },
    {
      name: 'Refrigerator Repair',
      description: 'Complete refrigerator and freezer repair services',
      icon: Snowflake,
      startingPrice: 'AED 180',
      rating: 4.7,
      completedJobs: 1200,
      urgentAvailable: true,
      estimatedTime: '2-3 hours',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      features: ['Gas charging', 'Compressor repair', 'Temperature control', 'Energy efficiency'],
      commonIssues: ['Not cooling', 'Ice buildup', 'Strange sounds', 'Door seal problems']
    },
    {
      name: 'Dishwasher Service',
      description: 'Professional dishwasher repair and maintenance',
      icon: Settings,
      startingPrice: 'AED 140',
      rating: 4.6,
      completedJobs: 800,
      urgentAvailable: false,
      estimatedTime: '1-2 hours',
      image: 'https://images.pexels.com/photos/4239019/pexels-photo-4239019.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      features: ['Deep cleaning', 'Filter replacement', 'Pump repair', 'Performance optimization'],
      commonIssues: ['Not draining', 'Poor cleaning', 'Strange odors', 'Door leaks']
    },
    {
      name: 'Oven & Stove Repair',
      description: 'Gas and electric oven, stove, and cooktop repairs',
      icon: ThermometerSun,
      startingPrice: 'AED 160',
      rating: 4.8,
      completedJobs: 950,
      urgentAvailable: false,
      estimatedTime: '2-3 hours',
      image: 'https://images.pexels.com/photos/4239019/pexels-photo-4239019.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      features: ['Gas safety check', 'Thermostat repair', 'Element replacement', 'Calibration'],
      commonIssues: ['Not heating', 'Uneven cooking', 'Gas smell', 'Door problems']
    },
    {
      name: 'Dryer Repair',
      description: 'Clothes dryer repair and maintenance services',
      icon: Wind,
      startingPrice: 'AED 130',
      rating: 4.5,
      completedJobs: 650,
      urgentAvailable: false,
      estimatedTime: '1-2 hours',
      image: 'https://images.pexels.com/photos/4239019/pexels-photo-4239019.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      features: ['Lint cleaning', 'Heat element repair', 'Drum alignment', 'Efficiency tuning'],
      commonIssues: ['Not drying', 'Overheating', 'Loud noise', 'Taking too long']
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Certified Technicians',
      description: 'All our appliance repair experts are factory-trained and certified'
    },
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'Emergency repairs available within 2-4 hours across Dubai'
    },
    {
      icon: Award,
      title: '90-Day Warranty',
      description: 'All repairs come with comprehensive 90-day parts and labor warranty'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: '4.8/5 average rating from thousands of satisfied customers'
    }
  ];

  const serviceAreas = [
    'Dubai Marina', 'Downtown Dubai', 'Business Bay', 'JBR', 'DIFC',
    'Jumeirah', 'Al Barsha', 'Dubai Hills', 'Arabian Ranches', 'Deira'
  ];

  const filteredServices = applianceServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <span className="text-primary-400 font-medium">Professional Service</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                  Appliance Repair
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Services in Dubai
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Expert repair services for all major home appliances. Our certified technicians 
                provide same-day service with genuine parts and comprehensive warranties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book?service=appliance-repair">
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                    Book Repair Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: +971 50 XXX XXXX
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">2500+</div>
                  <div className="text-white/60 text-sm">Repairs Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">4.8★</div>
                  <div className="text-white/60 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">90 Days</div>
                  <div className="text-white/60 text-sm">Warranty</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4239019/pexels-photo-4239019.jpeg?auto=compress&cs=tinysrgb&h=600&w=800"
                  alt="Appliance Repair Service"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
              </div>

              {/* Floating Service Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Zap className="h-8 w-8 text-accent-400" />
                  <div>
                    <div className="text-xl font-bold text-white">24/7</div>
                    <div className="text-white/60 text-sm">Emergency Service</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-primary-400" />
                  <div>
                    <div className="text-xl font-bold text-white">90 Days</div>
                    <div className="text-white/60 text-sm">Warranty</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input
                placeholder="Search appliance services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-xl"
              />
            </div>
            
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white rounded-xl">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                {serviceAreas.map((area) => (
                  <SelectItem key={area} value={area} className="text-white">
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Link href="/book?service=appliance-repair">
              <Button className="h-12 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 rounded-xl">
                Book Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <section className="py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Our Appliance Repair Services</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Professional repair services for all major home appliances with same-day availability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-primary-500/50 transition-all duration-500 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {service.startingPrice}
                      </div>
                      {service.urgentAvailable && (
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Urgent Available
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-primary-400 transition-colors">
                      {service.name}
                    </CardTitle>
                    <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-primary-400" />
                          <span className="text-white/80">{service.completedJobs} jobs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent-400" />
                          <span className="text-white/80">{service.estimatedTime}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <p className="text-white/60 text-sm mb-2">Included Services:</p>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-accent-400" />
                              <span className="text-white/80 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Common Issues */}
                      <div>
                        <p className="text-white/60 text-sm mb-2">Common Issues:</p>
                        <p className="text-white/70 text-xs">{service.commonIssues.slice(0, 2).join(', ')}</p>
                      </div>

                      <Link href={`/book?service=${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                        <Button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-xl font-medium">
                          Book {service.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white/5 rounded-3xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Our Appliance Repair Services?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the difference with Dubai's most trusted appliance repair experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Emergency Service CTA */}
        <section className="py-16">
          <motion.div 
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl p-8 border border-red-500/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="h-8 w-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Emergency Appliance Repair</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Appliance broke down? Don't worry! Our emergency repair team is available 24/7 
              across Dubai with response times as fast as 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold">
                <Zap className="mr-2 h-5 w-5" />
                Emergency Service
              </Button>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 XXX XXXX
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}