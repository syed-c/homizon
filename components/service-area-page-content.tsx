"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Clock, Shield, Phone, MessageSquare, 
  CheckCircle, Award, Users, ArrowRight, Filter, 
  SortAsc, Eye, Calendar, Zap, Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BookingModal from '@/components/booking-modal';
import Link from 'next/link';

interface ServiceAreaPageContentProps {
  service: string;
  serviceName: string;
  area: string;
  areaName: string;
  subarea?: string;
  subareaName?: string;
}

// Comprehensive FAQ data for different services
const generateFAQs = (serviceName: string, areaName: string) => {
  const baseLocation = areaName;
  
  const serviceFAQs: Record<string, Array<{question: string, answer: string}>> = {
    'ac-cleaning': [
      {
        question: `How often should I get AC cleaning in ${baseLocation}?`,
        answer: `In Dubai's climate, we recommend AC cleaning every 3-4 months in ${baseLocation}. Regular cleaning improves efficiency, reduces energy costs, and ensures better air quality in your home or office.`
      },
      {
        question: `What does AC cleaning service include in ${baseLocation}?`,
        answer: `Our comprehensive AC cleaning in ${baseLocation} includes filter cleaning/replacement, coil cleaning, drain cleaning, duct sanitization, and performance testing. We use eco-friendly products safe for your family.`
      },
      {
        question: `How long does AC cleaning take in ${baseLocation}?`,
        answer: `Typically, AC cleaning in ${baseLocation} takes 1-2 hours per unit, depending on the size and condition. Our technicians work efficiently to minimize disruption to your daily routine.`
      },
      {
        question: `Do you provide same-day AC cleaning in ${baseLocation}?`,
        answer: `Yes, we offer same-day AC cleaning services in ${baseLocation} subject to availability. Contact us early in the day for the best chance of same-day service.`
      },
      {
        question: `What are the signs my AC needs cleaning in ${baseLocation}?`,
        answer: `Signs include reduced cooling efficiency, unusual odors, increased electricity bills, visible dust on vents, and poor air quality. If you notice any of these in your ${baseLocation} property, it's time for professional cleaning.`
      }
    ],
    'ac-repair': [
      {
        question: `What AC problems do you fix in ${baseLocation}?`,
        answer: `We handle all AC issues in ${baseLocation} including refrigerant leaks, compressor problems, electrical faults, thermostat issues, and complete system breakdowns. Our technicians are certified for all major brands.`
      },
      {
        question: `Do you offer emergency AC repair in ${baseLocation}?`,
        answer: `Yes, we provide 24/7 emergency AC repair services in ${baseLocation}. We understand how crucial air conditioning is in Dubai's climate and respond quickly to urgent calls.`
      },
      {
        question: `How much does AC repair cost in ${baseLocation}?`,
        answer: `AC repair costs in ${baseLocation} vary depending on the issue. Minor repairs start from AED 150, while major repairs can range from AED 300-800. We provide free quotes before starting any work.`
      },
      {
        question: `Do you provide warranty on AC repairs in ${baseLocation}?`,
        answer: `Yes, all our AC repairs in ${baseLocation} come with a 30-90 day warranty depending on the type of repair. We also offer extended warranty options for major repairs.`
      },
      {
        question: `Can you repair all AC brands in ${baseLocation}?`,
        answer: `We service all major AC brands in ${baseLocation} including Carrier, Daikin, LG, Samsung, Mitsubishi, and more. Our technicians are trained and certified for various brands and models.`
      }
    ],
    'cleaning-services': [
      {
        question: `What cleaning services do you offer in ${baseLocation}?`,
        answer: `We provide comprehensive cleaning services in ${baseLocation} including deep cleaning, regular maintenance cleaning, move-in/out cleaning, post-construction cleaning, and specialized services like carpet and sofa cleaning.`
      },
      {
        question: `Are your cleaning products safe in ${baseLocation}?`,
        answer: `Yes, we use eco-friendly, non-toxic cleaning products that are safe for children and pets. All our cleaning solutions are approved for use in residential and commercial properties in ${baseLocation}.`
      },
      {
        question: `How long does deep cleaning take in ${baseLocation}?`,
        answer: `Deep cleaning duration in ${baseLocation} depends on property size. A 1-bedroom apartment takes 3-4 hours, while a 3-bedroom villa can take 6-8 hours. We provide time estimates during booking.`
      },
      {
        question: `Do you bring your own cleaning supplies to ${baseLocation}?`,
        answer: `Yes, we bring all necessary cleaning supplies and equipment to your ${baseLocation} property. This includes vacuum cleaners, mops, cleaning solutions, and specialized tools for different surfaces.`
      },
      {
        question: `Can I book regular cleaning services in ${baseLocation}?`,
        answer: `Absolutely! We offer flexible scheduling for regular cleaning in ${baseLocation} - weekly, bi-weekly, or monthly. Regular clients enjoy discounted rates and priority booking.`
      }
    ],
    'pest-control': [
      {
        question: `What pests do you control in ${baseLocation}?`,
        answer: `We handle all common pests in ${baseLocation} including cockroaches, ants, bed bugs, termites, rodents, flies, and mosquitoes. Our treatments are tailored to Dubai's specific pest challenges.`
      },
      {
        question: `Are your pest control treatments safe in ${baseLocation}?`,
        answer: `Yes, we use safe, approved pesticides that are effective against pests but safe for humans and pets. All treatments in ${baseLocation} follow Dubai Municipality guidelines and international safety standards.`
      },
      {
        question: `How often should I get pest control in ${baseLocation}?`,
        answer: `For ${baseLocation} properties, we recommend quarterly treatments for prevention and immediate treatment for active infestations. Regular treatments are more cost-effective and prevent major infestations.`
      },
      {
        question: `Do you offer guarantee on pest control in ${baseLocation}?`,
        answer: `Yes, we provide a 30-day guarantee on all pest control treatments in ${baseLocation}. If pests return within the guarantee period, we'll re-treat at no additional cost.`
      },
      {
        question: `How long does pest control treatment take in ${baseLocation}?`,
        answer: `Treatment time in ${baseLocation} varies by property size and pest type. Typical treatments take 1-3 hours. We'll provide specific timing when you book your service.`
      }
    ],
    'handyman-services': [
      {
        question: `What handyman services do you provide in ${baseLocation}?`,
        answer: `Our handyman services in ${baseLocation} include electrical work, plumbing, painting, furniture assembly, TV mounting, curtain installation, and general repairs. We handle both residential and commercial properties.`
      },
      {
        question: `Are your handymen licensed in ${baseLocation}?`,
        answer: `Yes, all our handymen serving ${baseLocation} are licensed, insured, and experienced. They undergo background checks and regular training to ensure quality service and safety.`
      },
      {
        question: `Can you handle emergency repairs in ${baseLocation}?`,
        answer: `Yes, we offer emergency handyman services in ${baseLocation} for urgent issues like electrical problems, plumbing leaks, and security concerns. Contact us for immediate assistance.`
      },
      {
        question: `Do you provide materials for handyman work in ${baseLocation}?`,
        answer: `We can provide materials for your ${baseLocation} project or work with materials you supply. We'll discuss material requirements and costs during the initial consultation.`
      },
      {
        question: `How do you price handyman services in ${baseLocation}?`,
        answer: `Handyman services in ${baseLocation} are priced based on the complexity and duration of work. We offer transparent pricing with no hidden fees and provide quotes before starting any work.`
      }
    ]
  };

  // Get service-specific FAQs or use generic ones
  const serviceKey = serviceName.toLowerCase().replace(/\s+/g, '-');
  return serviceFAQs[serviceKey] || [
    {
      question: `How do I book ${serviceName} in ${baseLocation}?`,
      answer: `Booking ${serviceName} in ${baseLocation} is easy! Click the "Book Now" button, fill in your details, and we'll connect you with verified professionals in your area.`
    },
    {
      question: `Are the ${serviceName} providers in ${baseLocation} verified?`,
      answer: `Yes, all ${serviceName} providers in ${baseLocation} are thoroughly vetted, licensed, and insured. We verify their credentials, experience, and customer reviews before adding them to our platform.`
    },
    {
      question: `What areas do you cover for ${serviceName}?`,
      answer: `We provide ${serviceName} throughout ${baseLocation} and surrounding areas. Our network of professionals ensures quick response times and local expertise.`
    },
    {
      question: `Do you offer emergency ${serviceName} in ${baseLocation}?`,
      answer: `Yes, we have providers available for emergency ${serviceName} in ${baseLocation}. Contact us for urgent service needs and we'll connect you with available professionals.`
    },
    {
      question: `What payment methods do you accept for ${serviceName}?`,
      answer: `We accept all major payment methods including cash, credit cards, and bank transfers. Payment is made directly to the service provider after job completion.`
    }
  ];
};

// Sample providers data
const getSampleProviders = (service: string, area: string) => {
  const providers = [
    {
      id: '1',
      name: 'Ahmed Al-Rashid',
      company: 'Dubai Pro Services',
      rating: 4.8,
      reviewCount: 127,
      experience: 8,
      responseTime: '15 min',
      profileImage: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      description: 'Professional service provider with extensive experience in Dubai.',
      isApproved: true,
      isPremium: true,
      completedJobs: 450,
      availability: { emergency: true }
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      company: 'Elite Home Services',
      rating: 4.9,
      reviewCount: 89,
      experience: 6,
      responseTime: '20 min',
      profileImage: 'https://images.pexels.com/photos/7690076/pexels-photo-7690076.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      description: 'Dedicated professional committed to excellence and customer satisfaction.',
      isApproved: true,
      isPremium: false,
      completedJobs: 320,
      availability: { emergency: false }
    },
    {
      id: '3',
      name: 'Mohammed Hassan',
      company: 'Quick Fix Dubai',
      rating: 4.7,
      reviewCount: 156,
      experience: 10,
      responseTime: '10 min',
      profileImage: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      description: 'Experienced technician specializing in quality service delivery.',
      isApproved: true,
      isPremium: true,
      completedJobs: 680,
      availability: { emergency: true }
    }
  ];
  
  return providers;
};

export default function ServiceAreaPageContent({ 
  service, 
  serviceName, 
  area, 
  areaName,
  subarea,
  subareaName
}: ServiceAreaPageContentProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');

  const displayLocation = subareaName || areaName;
  const providers = getSampleProviders(service, area);
  const faqs = generateFAQs(serviceName, displayLocation);

  // Sort and filter providers
  const filteredProviders = providers
    .filter(provider => {
      if (filterBy === 'all') return true;
      if (filterBy === 'premium') return provider.isPremium;
      if (filterBy === 'emergency') return provider.availability.emergency;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience':
          return b.experience - a.experience;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

  const averageRating = providers.length > 0 
    ? (providers.reduce((sum, p) => sum + p.rating, 0) / providers.length).toFixed(1)
    : '0.0';

  const totalReviews = providers.reduce((sum, p) => sum + p.reviewCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <span>/</span>
            <Link href={`/services/${service}`} className="hover:text-blue-400 transition-colors">{serviceName}</Link>
            <span>/</span>
            <Link href={`/areas/${area}`} className="hover:text-blue-400 transition-colors">{areaName}</Link>
            {subarea && (
              <>
                <span>/</span>
                <span className="text-white/80">{subareaName}</span>
              </>
            )}
          </nav>

          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Wrench className="h-8 w-8 text-blue-400" />
                <Badge variant="secondary" className="text-lg px-4 py-2 bg-blue-500/20 text-blue-400 border-blue-500/30">
                  {serviceName.toUpperCase()}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  {serviceName}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  in {displayLocation}
                </span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional {serviceName.toLowerCase()} services in {displayLocation}. 
                Connect with {providers.length} verified providers with {averageRating}★ average rating.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-white/80 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium">{providers.length} Providers</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80 bg-green-500/10 backdrop-blur-sm border border-green-500/30 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium">{averageRating}★ Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full">
                  <MessageSquare className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium">{totalReviews} Reviews</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span className="text-sm font-medium">Same Day Service</span>
                </div>
              </div>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book {serviceName} Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg rounded-full"
                  onClick={() => {
                    const providersSection = document.getElementById('providers-section');
                    providersSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Eye className="h-5 w-5 mr-2" />
                  View Providers
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Info Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    About {serviceName} in {displayLocation}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    Our {serviceName.toLowerCase()} professionals in {displayLocation} are committed to delivering exceptional service quality. 
                    With years of experience and proper licensing, they ensure your needs are met with precision and care.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    {displayLocation} residents trust our network of verified professionals for reliable, efficient, and affordable {serviceName.toLowerCase()} solutions. 
                    We maintain strict quality standards and customer satisfaction guarantees.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10 text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span className="text-white font-medium">Response Time</span>
                      </div>
                      <p className="text-white/70 text-sm">Within 30 minutes</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10 text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Shield className="h-4 w-4 text-green-400" />
                        <span className="text-white font-medium">Guarantee</span>
                      </div>
                      <p className="text-white/70 text-sm">100% Satisfaction</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4 border border-white/10 text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-white font-medium">Availability</span>
                      </div>
                      <p className="text-white/70 text-sm">7 Days a Week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{providers.length}</div>
                    <div className="text-white/70 text-sm">Available Providers</div>
                  </div>
                  
                  <Separator className="bg-white/20" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Average Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{averageRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Response Time</span>
                      <span className="text-white font-medium">Within 30 min</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Service Area</span>
                      <span className="text-white font-medium">{displayLocation}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Service Now
                  </Button>
                  
                  <p className="text-xs text-white/60 text-center">
                    Free quotes • No hidden fees • Satisfaction guaranteed
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers-section" className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Available Providers
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Choose from our network of verified {serviceName.toLowerCase()} professionals in {displayLocation}
            </p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-white/60" />
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/20">
                    <SelectItem value="all" className="text-white">All Providers</SelectItem>
                    <SelectItem value="premium" className="text-white">Premium Only</SelectItem>
                    <SelectItem value="emergency" className="text-white">Emergency Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <SortAsc className="h-4 w-4 text-white/60" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/20">
                    <SelectItem value="rating" className="text-white">Highest Rated</SelectItem>
                    <SelectItem value="experience" className="text-white">Most Experienced</SelectItem>
                    <SelectItem value="reviews" className="text-white">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-sm text-white/60">
              Showing {filteredProviders.length} of {providers.length} providers
            </div>
          </div>

          {/* Providers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider, index) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img 
                        src={provider.profileImage} 
                        alt={provider.name}
                        className="h-16 w-16 rounded-full object-cover border-2 border-blue-500/50"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                          {provider.isApproved && (
                            <Badge className="bg-green-600 text-white text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          {provider.isPremium && (
                            <Badge className="bg-blue-500 text-white text-xs">Premium</Badge>
                          )}
                        </div>
                        <p className="text-white/70 text-sm mb-2">{provider.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-white/60">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white font-medium">{provider.rating}</span>
                            <span>({provider.reviewCount})</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4" />
                            <span>{provider.experience} years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {provider.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/60">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {provider.responseTime}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                          onClick={() => setIsBookingOpen(true)}
                        >
                          <Calendar className="h-4 w-4 mr-1" />
                          Book
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-white/70">
              Common questions about {serviceName.toLowerCase()} in {displayLocation}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-white/80 text-left">
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
      <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book {serviceName} in {displayLocation}?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Connect with verified professionals and get your service completed quickly and efficiently.
          </p>
          <Button 
            size="lg"
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Service Now
          </Button>
        </div>
      </section>

      <BookingModal 
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        service={service}
        serviceName={serviceName}
        area={area}
        areaName={areaName}
      />
    </div>
  );
}


