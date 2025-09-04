"use client";

import { motion } from 'framer-motion';
import { 
  Search, Calendar, Wrench, CheckCircle, Star, Clock, Shield, 
  Home as HomeIcon, ArrowRight, Phone, MessageSquare, 
  CreditCard, Award, Users, MapPin, Zap, ThumbsUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function HowItWorksPage() {
  console.log("How It Works page loaded");

  const steps = [
    {
      step: 1,
      title: 'Search & Select',
      description: 'Browse our wide range of services or search for exactly what you need. Select your preferred service and area.',
      icon: Search,
      details: [
        'Browse 50+ professional services',
        'Filter by location and availability',
        'Compare ratings and prices',
        'Read authentic customer reviews'
      ],
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&h=300&w=400'
    },
    {
      step: 2,
      title: 'Book & Schedule',
      description: 'Choose your preferred date and time slot. Fill in your details and confirm your booking with instant confirmation.',
      icon: Calendar,
      details: [
        'Select convenient time slots',
        'Same-day service available',
        'Emergency bookings accepted',
        'Instant SMS confirmation'
      ],
      image: 'https://images.pexels.com/photos/5240543/pexels-photo-5240543.jpeg?auto=compress&cs=tinysrgb&h=300&w=400'
    },
    {
      step: 3,
      title: 'Expert Service',
      description: 'Our verified professional arrives at your location with all necessary tools and provides high-quality service.',
      icon: Wrench,
      details: [
        'Background-verified professionals',
        'Fully equipped with tools',
        'Transparent pricing',
        'Real-time service updates'
      ],
      image: 'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&h=300&w=400'
    },
    {
      step: 4,
      title: 'Pay & Review',
      description: 'Pay securely after service completion and rate your experience to help others make informed decisions.',
      icon: CheckCircle,
      details: [
        'Pay only after completion',
        'Multiple payment options',
        'Service guarantee included',
        'Share your experience'
      ],
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&h=300&w=400'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All service providers undergo thorough background checks and skill verification'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Emergency services available round the clock across Dubai'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with free re-service if not satisfied'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options with secure processing and transparent pricing'
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated support team available 24/7 for assistance and queries'
    },
    {
      icon: Star,
      title: 'Top Rated Service',
      description: 'Consistently rated 4.9/5 by thousands of satisfied customers'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get a service?',
      answer: 'Same-day service is available for most services. Emergency services can be arranged within 1-2 hours.'
    },
    {
      question: 'Are your professionals verified?',
      answer: 'Yes, all professionals undergo background checks, skill verification, and regular training updates.'
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll re-do the service for free.'
    },
    {
      question: 'How do I pay for the service?',
      answer: 'You can pay via cash, card, bank transfer, or digital wallets. Payment is due only after service completion.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                ServiceDubai
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-primary-400 transition-colors">Home</Link>
              <Link href="/about" className="text-white/80 hover:text-primary-400 transition-colors">About</Link>
              <Link href="/services" className="text-white/80 hover:text-primary-400 transition-colors">Services</Link>
              <Link href="/areas" className="text-white/80 hover:text-primary-400 transition-colors">Areas</Link>
              <span className="text-primary-400 font-medium">How It Works</span>
              <Link href="/book">
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2 rounded-full">
                  Book Now
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                How ServiceDubai
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Works for You
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Getting professional home services has never been easier. Follow our simple 4-step process 
              to connect with verified experts and get your home maintenance done right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Start Booking Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 XXX XXXX
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works Steps */}
        <section className="py-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Simple 4-Step Process</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From booking to completion, we've streamlined the entire process to save you time and effort
            </p>
          </motion.div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center font-bold text-2xl text-white">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent-400" />
                        <span className="text-white/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {step.step === 1 && (
                    <Link href="/services">
                      <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2 rounded-full">
                        Browse Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  
                  {step.step === 2 && (
                    <Link href="/book">
                      <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2 rounded-full">
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    
                    {/* Floating notification */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">Step {step.step}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white/5 rounded-3xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose ServiceDubai?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We've built our platform with your needs in mind, ensuring the best possible experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
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

        {/* Process Timeline */}
        <section className="py-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Typical Service Timeline</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Here's what you can expect from booking to completion
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { time: '0 mins', event: 'Book Service', desc: 'Complete booking in under 3 minutes' },
                { time: '2 mins', event: 'Instant Confirmation', desc: 'Receive SMS confirmation with details' },
                { time: '30 mins', event: 'Professional Assigned', desc: 'Verified expert accepts your booking' },
                { time: '1-2 hours', event: 'Pre-Service Call', desc: 'Professional contacts you to confirm' },
                { time: 'Scheduled Time', event: 'Service Begins', desc: 'Expert arrives with all necessary tools' },
                { time: 'Service Complete', event: 'Payment & Review', desc: 'Pay securely and rate your experience' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-20 text-right">
                    <span className="text-primary-400 font-semibold">{item.time}</span>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                    {index < 5 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-white/20"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg">{item.event}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Got questions? We've got answers to help you get started
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                  <CardContent className="p-6">
                    <h4 className="text-white font-semibold text-lg mb-3">{faq.question}</h4>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <motion.div 
            className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl p-12 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust ServiceDubai for their home service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold text-lg">
                  Book Your First Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Have Questions?
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}