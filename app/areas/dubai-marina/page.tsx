"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Clock, Phone, ArrowRight, Calendar, 
  Shield, Award, Users, CheckCircle, Wrench, Sparkles, 
  Bug, Hammer, Zap, Search, Building, Home as HomeIcon,
  Navigation, Camera, Coffee, ShoppingBag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function DubaiMarinaPage() {
  const [selectedService, setSelectedService] = useState('');

  console.log("Dubai Marina area page loaded");

  const areaInfo = {
    name: 'Dubai Marina',
    description: 'Premium waterfront community featuring luxury high-rise apartments, world-class amenities, and stunning marina views',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    totalProviders: 35,
    avgResponseTime: '25 mins',
    rating: 4.9,
    totalBookings: 2500,
    emergencyAvailable: true,
    popularTimes: 'Weekdays 9 AM - 6 PM',
    coordinates: { lat: 25.0657, lng: 55.1413 }
  };

  const subAreas = [
    { name: 'Marina Walk', providers: 12, responseTime: '20 mins' },
    { name: 'Marina Promenade', providers: 8, responseTime: '25 mins' },
    { name: 'JBR Beach Area', providers: 10, responseTime: '30 mins' },
    { name: 'Marina Mall District', providers: 5, responseTime: '35 mins' }
  ];

  const availableServices = [
    {
      category: 'Appliance Repairs',
      icon: Wrench,
      services: ['AC Repair & Maintenance', 'Washing Machine Repair', 'Refrigerator Service', 'Dishwasher Repair'],
      providers: 12,
      avgPrice: 'AED 150',
      rating: 4.9,
      responseTime: '2-4 hours',
      urgentAvailable: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Cleaning Services',
      icon: Sparkles,
      services: ['Deep Home Cleaning', 'Sofa & Carpet Cleaning', 'Kitchen Deep Clean', 'Post-Party Cleanup'],
      providers: 15,
      avgPrice: 'AED 200',
      rating: 4.8,
      responseTime: '3-5 hours',
      urgentAvailable: false,
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Pest Control',
      icon: Bug,
      services: ['General Pest Control', 'Bed Bug Treatment', 'Cockroach Elimination', 'Sanitization'],
      providers: 8,
      avgPrice: 'AED 250',
      rating: 4.7,
      responseTime: '2-3 hours',
      urgentAvailable: true,
      color: 'from-red-500 to-red-600'
    },
    {
      category: 'Handyman Services',
      icon: Hammer,
      services: ['Electrical Work', 'Plumbing Services', 'Furniture Assembly', 'Wall Mounting'],
      providers: 10,
      avgPrice: 'AED 120',
      rating: 4.6,
      responseTime: '1-3 hours',
      urgentAvailable: false,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const landmarks = [
    {
      name: 'The Beach at JBR',
      type: 'Shopping & Dining',
      distance: '0.5 km',
      icon: ShoppingBag
    },
    {
      name: 'Marina Walk',
      type: 'Waterfront Promenade',
      distance: '0.2 km',
      icon: Navigation
    },
    {
      name: 'Dubai Marina Mall',
      type: 'Shopping Center',
      distance: '0.8 km',
      icon: Building
    },
    {
      name: 'Marina Beach',
      type: 'Beach & Recreation',
      distance: '0.3 km',
      icon: Camera
    }
  ];

  const recentBookings = [
    {
      service: 'AC Repair',
      customer: 'Marina Residence',
      rating: 5,
      review: 'Excellent service! Fixed my AC within 2 hours.',
      time: '2 hours ago'
    },
    {
      service: 'Deep Cleaning',
      customer: 'Marina Heights',
      rating: 5,
      review: 'Professional team, amazing results.',
      time: '4 hours ago'
    },
    {
      service: 'Plumbing',
      customer: 'Cayan Tower',
      rating: 4,
      review: 'Quick response and fair pricing.',
      time: '1 day ago'
    }
  ];

  const areaFeatures = [
    {
      icon: Building,
      title: 'High-Rise Living',
      description: 'Luxury apartments and penthouses with marina views'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Gated community with round-the-clock security'
    },
    {
      icon: Coffee,
      title: 'Dining & Entertainment',
      description: 'Restaurants, cafes, and entertainment venues'
    },
    {
      icon: Navigation,
      title: 'Waterfront Access',
      description: 'Direct access to marina and yacht facilities'
    }
  ];

  const quickStats = [
    { label: 'Service Providers', value: areaInfo.totalProviders, suffix: '' },
    { label: 'Completed Bookings', value: areaInfo.totalBookings, suffix: '+' },
    { label: 'Customer Rating', value: areaInfo.rating, suffix: '★' },
    { label: 'Response Time', value: 25, suffix: ' min avg' }
  ];

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
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="text-primary-400 font-medium">Service Area</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                  Home Services in
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Dubai Marina
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                {areaInfo.description}. Our verified professionals provide premium home services 
                with the fastest response times in the area.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book?area=dubai-marina">
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                    Book Service Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +971 50 XXX XXXX
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">{areaInfo.totalProviders}</div>
                  <div className="text-white/60 text-sm">Service Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">{areaInfo.avgResponseTime}</div>
                  <div className="text-white/60 text-sm">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">{areaInfo.rating}★</div>
                  <div className="text-white/60 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">24/7</div>
                  <div className="text-white/60 text-sm">Emergency Service</div>
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
                  src={areaInfo.image}
                  alt="Dubai Marina"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-accent-400" />
                  <div>
                    <div className="text-xl font-bold text-white">{areaInfo.totalBookings}+</div>
                    <div className="text-white/60 text-sm">Happy Customers</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-primary-400" />
                  <div>
                    <div className="text-xl font-bold text-white">{areaInfo.avgResponseTime}</div>
                    <div className="text-white/60 text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Service Booking */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Book Service in Dubai Marina</h3>
              <p className="text-white/60">Select your service and get instant confirmation</p>
            </div>
            
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-full lg:w-64 h-12 bg-white/10 border-white/20 text-white rounded-xl">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                {availableServices.map((service) => (
                  <SelectItem key={service.category} value={service.category} className="text-white">
                    {service.category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Link href="/book?area=dubai-marina">
              <Button className="h-12 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 rounded-xl">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Available Services */}
        <section className="py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Services Available in Dubai Marina</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Professional home services delivered by verified experts in your neighborhood
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {availableServices.map((service, index) => (
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
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="text-white/80">{service.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl text-white group-hover:text-primary-400 transition-colors">
                      {service.category}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-primary-400" />
                          <span className="text-white/80">{service.providers} providers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent-400" />
                          <span className="text-white/80">{service.responseTime}</span>
                        </div>
                      </div>

                      {/* Services List */}
                      <div>
                        <p className="text-white/60 text-sm mb-2">Available Services:</p>
                        <div className="space-y-1">
                          {service.services.map((item, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-accent-400" />
                              <span className="text-white/80 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing and Availability */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <div>
                          <span className="text-primary-400 font-semibold">{service.avgPrice}</span>
                          <span className="text-white/60 text-sm ml-1">starting</span>
                        </div>
                        {service.urgentAvailable && (
                          <div className="flex items-center space-x-1">
                            <Zap className="h-4 w-4 text-red-400" />
                            <span className="text-red-400 text-sm">Urgent Available</span>
                          </div>
                        )}
                      </div>

                      <Link href={`/book?service=${service.category.toLowerCase().replace(/\s+/g, '-')}&area=dubai-marina`} className="block">
                        <Button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-xl font-medium">
                          Book {service.category}
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

        {/* Sub Areas */}
        <section className="py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Sub-Areas We Cover</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive coverage across all Dubai Marina neighborhoods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-3">{area.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Providers:</span>
                        <span className="text-primary-400 font-medium">{area.providers}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Response:</span>
                        <span className="text-white/80">{area.responseTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Area Features */}
        <section className="py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Why Dubai Marina Residents Choose Us</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tailored services that understand the unique needs of marina living
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Reviews */}
        <section className="py-16 bg-white/5 rounded-3xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Recent Customer Reviews</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              See what your neighbors in Dubai Marina are saying about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBookings.map((booking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary-400 font-medium">{booking.service}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(booking.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4 italic">"{booking.review}"</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">{booking.customer}</span>
                      <span className="text-white/50">{booking.time}</span>
                    </div>
                  </CardContent>
                </Card>
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
              <h3 className="text-2xl font-bold text-white">24/7 Emergency Service in Dubai Marina</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Urgent home service needed? Our emergency response team is available 24/7 
              specifically for Dubai Marina residents with response times as fast as 1 hour.
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