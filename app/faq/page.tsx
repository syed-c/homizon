"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, ChevronUp, Search, HelpCircle, Phone, MessageSquare,
  Home as HomeIcon, ArrowRight, Clock, Shield, CreditCard, Star,
  CheckCircle, Users, Zap, Award, MapPin, Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  console.log("FAQ page loaded");
  console.log("Search query:", searchQuery);

  const faqCategories = [
    {
      title: 'Booking & Scheduling',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      faqs: [
        {
          question: 'How do I book a service on ServiceDubai?',
          answer: 'Booking is simple! Just browse our services, select what you need, choose your preferred date and time, fill in your details, and confirm. You\'ll receive instant confirmation via SMS.'
        },
        {
          question: 'Can I book same-day service?',
          answer: 'Yes! Same-day service is available for most services based on professional availability. Emergency services can often be arranged within 1-2 hours.'
        },
        {
          question: 'How far in advance can I schedule a service?',
          answer: 'You can schedule services up to 30 days in advance. This is perfect for planning regular maintenance or scheduling around your busy calendar.'
        },
        {
          question: 'Can I reschedule or cancel my booking?',
          answer: 'Yes, you can reschedule or cancel up to 4 hours before your scheduled service time. Contact our support team or use your booking confirmation link.'
        },
        {
          question: 'What if no one is available at my preferred time?',
          answer: 'We\'ll suggest alternative time slots close to your preference. Our system shows real-time availability to help you find the best option.'
        }
      ]
    },
    {
      title: 'Service Professionals',
      icon: Users,
      color: 'from-green-500 to-green-600',
      faqs: [
        {
          question: 'Are your service professionals verified?',
          answer: 'Absolutely! All professionals undergo rigorous background checks, skill verification, and identity verification. We also require valid trade licenses and insurance.'
        },
        {
          question: 'How do you ensure quality of service?',
          answer: 'We maintain quality through regular training, customer feedback monitoring, mystery customer evaluations, and a strict rating system. Poor performers are removed from our platform.'
        },
        {
          question: 'Will the same professional come for repeat services?',
          answer: 'You can request the same professional for future bookings if you\'re satisfied with their service. We\'ll do our best to accommodate based on availability.'
        },
        {
          question: 'What if I\'m not satisfied with the professional\'s work?',
          answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll send another professional to redo the work at no additional cost.'
        },
        {
          question: 'Do professionals bring their own tools and equipment?',
          answer: 'Yes, all professionals come fully equipped with the necessary tools and equipment for the job. Any special parts or materials needed will be discussed beforehand.'
        }
      ]
    },
    {
      title: 'Pricing & Payments',
      icon: CreditCard,
      color: 'from-purple-500 to-purple-600',
      faqs: [
        {
          question: 'How is pricing determined?',
          answer: 'Pricing is transparent and based on the type of service, complexity, time required, and materials needed. You\'ll see the estimated cost upfront before booking.'
        },
        {
          question: 'When do I need to pay?',
          answer: 'Payment is only required after the service is completed to your satisfaction. You can pay via cash, card, bank transfer, or digital wallet.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees! The price you see during booking is what you pay. Any additional costs (like extra materials) will be discussed and approved by you first.'
        },
        {
          question: 'Do you offer discounts or promotions?',
          answer: 'Yes! We regularly offer discounts for first-time customers, bulk bookings, and seasonal promotions. Follow us on social media for the latest offers.'
        },
        {
          question: 'What if the service takes longer than expected?',
          answer: 'Our pricing is fixed for the service, not hourly. If the job takes longer due to unexpected complications, we\'ll discuss any additional costs with you first.'
        }
      ]
    },
    {
      title: 'Service Coverage',
      icon: MapPin,
      color: 'from-orange-500 to-orange-600',
      faqs: [
        {
          question: 'Which areas in Dubai do you cover?',
          answer: 'We cover all major areas of Dubai including Dubai Marina, Downtown, Business Bay, JBR, Jumeirah, Deira, Al Barsha, and many more. Check our areas page for the complete list.'
        },
        {
          question: 'Do you provide services outside Dubai?',
          answer: 'Currently, we focus exclusively on Dubai to ensure the highest quality service. We plan to expand to other Emirates in the future.'
        },
        {
          question: 'Is there a minimum service charge?',
          answer: 'Yes, we have a minimum service charge of AED 80 to cover the professional\'s travel time and basic service costs.'
        },
        {
          question: 'Do you charge extra for remote areas?',
          answer: 'Service charges are the same across all covered areas in Dubai. No additional travel fees are applied within our service zones.'
        }
      ]
    },
    {
      title: 'Emergency Services',
      icon: Zap,
      color: 'from-red-500 to-red-600',
      faqs: [
        {
          question: 'What qualifies as an emergency service?',
          answer: 'Emergency services include urgent plumbing leaks, electrical issues, AC breakdowns in summer, security problems, and any service that poses immediate risk to safety or property.'
        },
        {
          question: 'How quickly can emergency services arrive?',
          answer: 'Emergency services typically arrive within 1-2 hours, depending on location and availability. We prioritize emergency calls over regular bookings.'
        },
        {
          question: 'Do emergency services cost more?',
          answer: 'Emergency services have a 50% surcharge due to the urgent nature and priority scheduling. The exact cost will be communicated when you book.'
        },
        {
          question: 'Are emergency services available 24/7?',
          answer: 'Yes! Our emergency hotline operates 24/7, and we have professionals on standby for urgent situations throughout Dubai.'
        }
      ]
    },
    {
      title: 'Safety & Insurance',
      icon: Shield,
      color: 'from-indigo-500 to-indigo-600',
      faqs: [
        {
          question: 'Are your services insured?',
          answer: 'Yes, all our service professionals carry comprehensive insurance coverage for liability and property damage. You\'re fully protected during service delivery.'
        },
        {
          question: 'What safety measures do you follow?',
          answer: 'We follow strict safety protocols including professional training, safety equipment requirements, and health guidelines. All professionals are trained in safety procedures.'
        },
        {
          question: 'What if there\'s damage during service?',
          answer: 'In the rare event of accidental damage, our insurance covers repairs or replacement. We handle all claims quickly and fairly.'
        },
        {
          question: 'How do you ensure COVID-19 safety?',
          answer: 'Our professionals follow health guidelines including mask-wearing, sanitization, and maintaining safe distances when possible. Equipment is sanitized between services.'
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.title }))
  );

  const filteredFAQs = searchQuery 
    ? allFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqCategories;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
              <Link href="/how-it-works" className="text-white/80 hover:text-primary-400 transition-colors">How It Works</Link>
              <span className="text-primary-400 font-medium">FAQ</span>
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
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, booking process, and policies. 
              Can't find what you're looking for? Our support team is here to help.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                <Input
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-2xl text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                  Contact Support
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 XXX XXXX
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search Results */}
        {searchQuery && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Search Results for "{searchQuery}" ({filteredFAQs.length} found)
            </h2>
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                    <CardContent 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-primary-400 text-sm font-medium">{faq.category}</span>
                          </div>
                          <h4 className="text-white font-semibold text-lg mb-2">{faq.question}</h4>
                          {openFAQ === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                          )}
                        </div>
                        <div className="ml-4">
                          {openFAQ === index ? (
                            <ChevronUp className="h-5 w-5 text-white/60" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-white/60" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Categories */}
        {!searchQuery && (
          <section>
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Browse by Category</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Select a category below to find relevant answers to your questions
              </p>
            </motion.div>

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <div className="text-white/60">({category.faqs.length} questions)</div>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      return (
                        <Card key={faqIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                          <CardContent 
                            className="p-6 cursor-pointer"
                            onClick={() => toggleFAQ(globalIndex)}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-lg mb-2">{faq.question}</h4>
                                {openFAQ === globalIndex && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                                  </motion.div>
                                )}
                              </div>
                              <div className="ml-4">
                                {openFAQ === globalIndex ? (
                                  <ChevronUp className="h-5 w-5 text-white/60" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-white/60" />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Quick Help Section */}
        <section className="py-20">
          <motion.div 
            className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl p-12 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is available 24/7 to assist you
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: Phone,
                    title: 'Call Us',
                    description: '24/7 Phone Support',
                    action: '+971 50 XXX XXXX',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: MessageSquare,
                    title: 'Live Chat',
                    description: 'Instant messaging support',
                    action: 'Start Chat',
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    icon: HelpCircle,
                    title: 'Support Center',
                    description: 'Detailed help articles',
                    action: 'Visit Center',
                    color: 'from-purple-500 to-purple-600'
                  }
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <option.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{option.title}</h4>
                    <p className="text-white/60 text-sm mb-3">{option.description}</p>
                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 text-sm">
                      {option.action}
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                    Contact Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/book">
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                    Book a Service
                    <Calendar className="mr-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}