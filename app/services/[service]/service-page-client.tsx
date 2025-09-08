"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Clock, Phone, ArrowRight, Calendar, 
  Shield, Award, Users, CheckCircle, Filter, Search,
  ChevronRight, Zap, Heart, Share2,
  ThermometerSun, Droplets, Snowflake, Settings, Wind,
  Sparkles, Bug, Wrench, Hammer, Monitor, Paintbrush,
  Info, CheckCircle2, Eye, Truck, Shirt
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  areas,
  sampleProviders,
  Service,
  ServiceCategory,
  Provider,
  getProvidersByCategory
} from '@/lib/data';
import { listProvidersFromSupabase } from '@/lib/supabase';
import { useSettings } from '@/lib/settings-context';
import { getPageContentFromSupabase } from '@/lib/supabase';

interface ServicePageClientProps {
  service?: Service;
  category?: ServiceCategory;
}

const iconMap: { [key: string]: any } = {
  'Wind': Wind,
  'Droplets': Droplets,
  'Snowflake': Snowflake,
  'Settings': Settings,
  'ThermometerSun': ThermometerSun,
  'Sparkles': Sparkles,
  'Bug': Bug,
  'Shield': Shield,
  'Zap': Zap,
  'Wrench': Wrench,
  'Paintbrush': Paintbrush,
  'Hammer': Hammer,
  'Monitor': Monitor,
  'Truck': Truck,
  'Shirt': Shirt
};

export default function ServicePageClient({ service, category }: ServicePageClientProps) {
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [customContent, setCustomContent] = useState<any>(null);
  const [cmsContent, setCmsContent] = useState<any>(null);
  const [dbProviders, setDbProviders] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { settings } = useSettings();

  // If it's a category, render the category page
  if (category) {
    return <CategoryPageContent category={category} />;
  }

  // If it's an individual service, render the service page
  if (!service) {
    return <div>Service not found</div>;
  }

  console.log("Individual service page loaded:", { serviceSlug: service.slug });

  // Fetch custom content from admin
  useEffect(() => {
    const fetchCustomContent = async () => {
      try {
        const pageId = `service-${service.slug}`;
        const response = await fetch(`/api/admin/pages?id=${pageId}`);
        if (response.ok) {
          const data = await response.json();
          setCustomContent(data);
        }
      } catch (error) {
        console.log('No custom content found for this page');
      }
    };
    fetchCustomContent();
  }, [service.slug]);

  // Load CMS content for this service detail page
  useEffect(() => {
    const loadCms = async () => {
      try {
        const res = await getPageContentFromSupabase(`service-page/${service.slug}`);
        const content = (res as any)?.data?.content;
        if (content) setCmsContent(content);
      } catch {}
    };
    loadCms();
  }, [service.slug]);

  // Load providers from Supabase and filter by service slug
  useEffect(() => {
    const loadProviders = async () => {
      try {
        const res = await listProvidersFromSupabase();
        const all = res.data || [];
        const filtered = all.filter((p: any) => Array.isArray(p.services) && p.services.includes(service.slug));
        setDbProviders(filtered);
      } catch {
        setDbProviders([]);
      }
    };
    loadProviders();
  }, [service.slug]);

  // Choose providers (Supabase preferred, fallback to sample)
  const providersFallback = sampleProviders.filter(provider => 
    provider.isApproved && provider.services.includes(service.slug)
  );
  const providers = dbProviders.length > 0 ? dbProviders : providersFallback;

  const IconComponent = iconMap[service.icon] || Wrench;

  // Filter and sort providers
  let filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterBy === 'emergency') return matchesSearch && provider.availability.emergency;
    if (filterBy === 'top-rated') return matchesSearch && provider.rating >= 4.5;
    if (filterBy === 'experienced') return matchesSearch && provider.experience >= 5;
    return matchesSearch;
  });

  filteredProviders.sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'experience') return b.experience - a.experience;
    if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
    if (sortBy === 'price') {
      const aPrice = a.pricing[service.id]?.basePrice || 0;
      const bPrice = b.pricing[service.id]?.basePrice || 0;
      return aPrice - bPrice;
    }
    return 0;
  });

  const averagePrice = providers.reduce((sum, p) => {
    return sum + (p.pricing[service.id]?.basePrice || 0);
  }, 0) / providers.length || 0;

  const averageRating = providers.reduce((sum, p) => sum + p.rating, 0) / providers.length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm overflow-x-auto">
            <Link href="/" className="text-white/60 hover:text-white whitespace-nowrap">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/40 flex-shrink-0" />
            <Link href="/services" className="text-white/60 hover:text-white whitespace-nowrap">Services</Link>
            <ChevronRight className="h-4 w-4 text-white/40 flex-shrink-0" />
            <Link href={`/services/${service.category}`} className="text-white/60 hover:text-white whitespace-nowrap">
              {service.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Link>
            <ChevronRight className="h-4 w-4 text-white/40 flex-shrink-0" />
            <span className="text-primary-400 whitespace-nowrap">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900 to-blue-900/40"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <span className="text-primary-400 font-medium text-lg">Professional Service</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {cmsContent?.hero?.h1 ? cmsContent.hero.h1.replace(' in Dubai','') : service.name}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                in Dubai
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {cmsContent?.hero?.description || service.description}. Connect with {providers.length} verified professionals 
              with an average rating of {averageRating.toFixed(1)} stars across Dubai.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{providers.length}</div>
                <div className="text-white/60 text-sm">Available Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{averageRating.toFixed(1)}★</div>
                <div className="text-white/60 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {averagePrice > 0 ? `AED ${Math.round(averagePrice)}` : service.averagePrice}
                </div>
                <div className="text-white/60 text-sm">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{service.estimatedTime}</div>
                <div className="text-white/60 text-sm">Service Time</div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Link href={`/book?service=${service.slug}`}>
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                  Book {service.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={`tel:${settings.contact_phone}`}>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {settings.contact_phone}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* (About + Why Choose) will use the existing styled sections below */}

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* basic search/sort placeholder */}
      </div>

      {/* Providers List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {filteredProviders.length} {service.name} Providers
          </h2>
          <p className="text-white/60 text-lg">
            Verified professionals ready to serve you with quality guaranteed
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {filteredProviders.slice((page-1)*pageSize, page*pageSize).map((provider, index) => (
            <div key={provider.id} className="w-full">
              <ProviderLineItem 
                provider={provider} 
                service={service}
                index={index} 
              />
            </div>
          ))}
          {filteredProviders.length > pageSize && (
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))} className="text-white border-white/20">Prev</Button>
              <span className="text-white/60 text-sm">Page {page} of {Math.ceil(filteredProviders.length/pageSize)}</span>
              <Button variant="outline" disabled={page>=Math.ceil(filteredProviders.length/pageSize)} onClick={()=>setPage(p=>p+1)} className="text-white border-white/20">Next</Button>
            </div>
          )}
        </div>
      </div>

      {/* Removed Available Areas section as requested */}

      {/* About Us Section (from CMS) */}
      {cmsContent?.about && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-900/30 to-accent-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {cmsContent.about.h2 || `About ${service.name} in Dubai`}
                </h2>
                {cmsContent.about.subheading && (
                  <p className="text-white/60 text-sm">{cmsContent.about.subheading}</p>
                )}
              </div>
            </div>

            {cmsContent.about.paragraph && (
              <p className="text-white/80 leading-relaxed">{cmsContent.about.paragraph}</p>
            )}

            {Array.isArray(cmsContent.about.points) && cmsContent.about.points.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2 mt-6">
                {cmsContent.about.points.map((pt: any, idx: number) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5" />
                      <div>
                        {pt.h3 && <h3 className="text-white font-semibold mb-1">{pt.h3}</h3>}
                        {pt.paragraph && <p className="text-white/70 text-sm">{pt.paragraph}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Why Choose content can be included inside About section via CMS; standalone section removed for consistency */}

      {/* Custom Content Section */}
      {!cmsContent && customContent && (customContent.customHeading || customContent.customContent) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-900/30 to-accent-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {customContent.customHeading || `About ${service.name} in Dubai`}
                </h2>
                <p className="text-white/60 text-sm">Expert insights and local information</p>
              </div>
            </div>
            
            {customContent.customContent && (
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: customContent.customContent }}
              />
            )}
            
            <div className="mt-6 flex items-center space-x-4 text-sm text-white/60">
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Verified Information</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Updated {customContent.lastModified || 'recently'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-purple-400" />
                <span>Curated by {settings.site_name} Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Auto-Generated SEO Content Section */}
      {!cmsContent && !customContent?.customContent && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-900/30 to-accent-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {service.name} Services in Dubai
                </h2>
                <p className="text-white/60 text-sm">Professional services across Dubai</p>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <div>
                <p className="text-white/80 leading-relaxed">
                  When you need reliable {service.name.toLowerCase()} in Dubai, finding the right professional makes all the difference. This comprehensive guide covers everything you need to know about {service.name.toLowerCase()} services in Dubai, from understanding why professional help is essential to knowing what to expect during service delivery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Why {service.name} is Important in Dubai</h3>
                <p className="text-white/80 leading-relaxed">
                  Living in Dubai means dealing with Dubai's extreme climate conditions, which significantly impact your need for {service.name.toLowerCase()}. The combination of high temperatures, humidity, dust, and sand creates unique challenges that require professional attention and specialized solutions.
                </p>
                <p className="text-white/80 leading-relaxed mt-3">
                  Professional {service.name.toLowerCase()} providers in Dubai bring years of experience working in these conditions. They understand how Dubai's environment affects different systems and materials, allowing them to recommend appropriate solutions that will last longer and perform better in the local climate.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Common Issues Solved by {service.name}</h3>
                <p className="text-white/80 leading-relaxed">
                  Residents and businesses in Dubai face several common challenges that professional {service.name.toLowerCase()} can address effectively. Understanding these issues helps you recognize when it's time to call for professional help.
                </p>
                <p className="text-white/80 leading-relaxed mt-3">
                  Dubai's sandy environment means that dust and debris can quickly accumulate and cause problems. Professional {service.name.toLowerCase()} providers in Dubai have the specialized equipment and techniques needed to address these dust-related issues thoroughly and prevent future problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">How to Get {service.name} in Dubai</h3>
                <p className="text-white/80 leading-relaxed">
                  Getting professional {service.name.toLowerCase()} in Dubai is easier than ever with modern booking platforms and service providers. Start by researching local providers who specialize in your specific needs and have experience working in Dubai.
                </p>
                <p className="text-white/80 leading-relaxed mt-3">
                  When contacting {service.name.toLowerCase()} providers in Dubai, be prepared to describe your specific requirements and any symptoms you've noticed. This information helps technicians come prepared with the right tools and parts, ensuring efficient service delivery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Why Choose Local Dubai Experts</h3>
                <p className="text-white/80 leading-relaxed">
                  Choosing local {service.name.toLowerCase()} experts in Dubai offers numerous advantages over generic service providers. Local professionals understand the specific challenges of working in Dubai and have established relationships with local suppliers for quick access to parts and materials.
                </p>
                <p className="text-white/80 leading-relaxed mt-3">
                  Local {service.name.toLowerCase()} providers in Dubai are familiar with building codes, regulations, and requirements specific to the area. This knowledge ensures that all work meets local standards and helps avoid potential legal or safety issues down the line.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Ready to Book {service.name}?</h3>
                <p className="text-white/80 leading-relaxed">
                  Don't wait until small issues become major problems. Professional {service.name.toLowerCase()} providers in Dubai are ready to help you maintain your property and ensure everything runs smoothly. Contact verified professionals today to discuss your specific needs and schedule service at your convenience.
                </p>
                <p className="text-white/80 leading-relaxed mt-3">
                  Browse our directory of trusted {service.name.toLowerCase()} providers in Dubai to find the perfect professional for your needs. Compare ratings, read reviews, and get instant quotes from multiple providers to make an informed decision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* FAQ Section (CMS) */}
      {cmsContent?.faqs?.items?.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {cmsContent.faqs.h2 || 'Frequently Asked Questions'}
            </h2>
            {cmsContent.faqs.paragraph && (
              <p className="text-white/60 text-lg">
                {cmsContent.faqs.paragraph}
              </p>
            )}
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {cmsContent.faqs.items.map((faq: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action (CTA from CMS if available) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                {cmsContent?.cta?.h2 || `Need ${service.name}? We're Here to Help!`}
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                {cmsContent?.cta?.paragraph || `Get connected with verified ${service.name.toLowerCase()} professionals in Dubai. 
                Compare quotes, read reviews, and book your service instantly.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/book?service=${service.slug}`}>
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                    Book {service.name} Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={`tel:${settings.contact_phone}`}>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {settings.contact_phone}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* FAQ Section (Admin Custom Content) */}
      {(!cmsContent?.faqs?.items?.length) && customContent && customContent.customFAQs && customContent.customFAQs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-lg">
              Get answers to common questions about {service.name.toLowerCase()} in Dubai
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {customContent.customFAQs.map((faq: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action (CTA from CMS if available) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                {cmsContent?.cta?.h2 || `Need ${service.name}? We're Here to Help!`}
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                {cmsContent?.cta?.paragraph || `Get connected with verified ${service.name.toLowerCase()} professionals in Dubai. 
                Compare quotes, read reviews, and book your service instantly.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/book?service=${service.slug}`}>
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                    Book {service.name} Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={`tel:${settings.contact_phone}`}>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {settings.contact_phone}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Auto-Generated FAQ Section */}
      {!cmsContent?.faqs?.items?.length && !customContent?.customFAQs?.length && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-lg">
              Common questions about {service.name.toLowerCase()} services in Dubai
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {generateServiceFAQs(service).map((faq: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need {service.name}? We're Here to Help!
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Get connected with verified {service.name.toLowerCase()} professionals in Dubai. 
                Compare quotes, read reviews, and book your service instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/book?service=${service.slug}`}>
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                    Book {service.name} Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={`tel:${settings.contact_phone}`}>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Call {settings.contact_phone}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// Helper function to generate FAQs for services
function generateServiceFAQs(service: Service) {
  return [
    {
      question: `How much does ${service.name.toLowerCase()} cost in Dubai?`,
      answer: `The cost of ${service.name.toLowerCase()} in Dubai varies based on several factors including the complexity of work, materials needed, and service provider experience. Basic services typically start from ${service.averagePrice}, while more complex projects may cost more. It's recommended to get quotes from multiple providers to compare prices and services. Many providers offer free estimates, and some may provide discounts for regular maintenance contracts.`
    },
    {
      question: `How long does ${service.name.toLowerCase()} typically take?`,
      answer: `The duration of ${service.name.toLowerCase()} depends on the scope of work. Simple tasks usually take ${service.estimatedTime}, while more complex projects can take longer. Your service provider should provide a clear timeline before starting work. Weather conditions in Dubai can sometimes affect completion times, especially for outdoor work.`
    },
    {
      question: `What should I do to prepare for ${service.name.toLowerCase()}?`,
      answer: `To prepare for ${service.name.toLowerCase()}, clear the work area of personal items and ensure easy access to the service location. Have any relevant documentation ready, such as warranty information or previous service records. If the work involves utilities, ensure main switches are accessible. Your service provider should provide specific preparation instructions when booking.`
    },
    {
      question: `Are ${service.name.toLowerCase()} providers in Dubai licensed and insured?`,
      answer: `Reputable ${service.name.toLowerCase()} providers in Dubai should carry proper licensing, insurance, and certifications. Always verify credentials before hiring, including liability insurance and workers' compensation coverage. Licensed providers are familiar with local building codes and regulations in Dubai. Ask to see documentation and verify credentials with relevant authorities if needed.`
    },
    {
      question: `Can I get emergency ${service.name.toLowerCase()} in Dubai?`,
      answer: `Yes, many ${service.name.toLowerCase()} providers in Dubai offer emergency services for urgent situations. Emergency services are typically available 24/7 and can respond within 1-4 hours depending on the provider and location. Emergency rates are usually higher than regular service calls. It's wise to have contact information for reliable emergency providers saved in advance.`
    },
    {
      question: `What warranty do ${service.name.toLowerCase()} providers offer?`,
      answer: `Warranty terms for ${service.name.toLowerCase()} vary by provider and service type. Most professional providers offer warranties ranging from 30 days to 1 year on their work. Parts warranties may be separate from labor warranties. Always discuss warranty terms before hiring and ensure you receive written documentation. Some providers offer extended warranties for additional fees.`
    },
    {
      question: `How do I choose the best ${service.name.toLowerCase()} provider in Dubai?`,
      answer: `To choose the best ${service.name.toLowerCase()} provider in Dubai, research their credentials, read customer reviews, and verify insurance coverage. Compare quotes from multiple providers and assess their communication skills and professionalism. Look for providers with local experience in Dubai and positive track records. Consider factors like response time, warranty offerings, and availability for follow-up service.`
    },
    {
      question: `What payment methods do ${service.name.toLowerCase()} providers accept?`,
      answer: `Most ${service.name.toLowerCase()} providers in Dubai accept cash, bank transfers, and major credit cards. Some may also accept payment apps popular in the UAE. For larger projects, providers may require deposits or progress payments. Discuss payment terms and methods before work begins. Be wary of providers who demand full payment upfront, especially for large projects.`
    }
  ];
}

function ProviderLineItem({ provider, service, index }: { 
  provider: Provider; 
  service: Service; 
  index: number; 
}) {
  const servicePrice = provider.pricing[service.id];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 rounded-xl p-4 md:p-6"
    >
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-start space-x-3 mb-4">
          {/* Profile Image - Smaller on mobile */}
          <div className="relative flex-shrink-0">
            <img 
              src={(provider as any).profileImage || (provider as any).profileimage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'} 
              alt={provider.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary-500/50"
            />
            {provider.availability.emergency && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <Zap className="h-2 w-2 text-white" />
              </div>
            )}
          </div>
          
          {/* Provider Info - Mobile */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-base font-semibold text-white truncate">{provider.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-amber-400 fill-current" />
                <span className="text-white font-medium text-sm">{provider.rating}</span>
              </div>
            </div>
            
            {provider.company && (
              <p className="text-primary-400 text-xs font-medium truncate mb-1">@ {provider.company}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-2">
              <span>{provider.experience} years</span>
              <span>•</span>
              <span>{provider.services.length} services</span>
              <span>•</span>
              <span>({provider.reviewCount} reviews)</span>
            </div>
            
            <p className="text-white/60 text-xs line-clamp-2 mb-3">{provider.description}</p>
            
            {/* Tags - Mobile */}
            <div className="flex flex-wrap items-center gap-1 mb-3">
              <span className="text-xs text-white/70">{provider.languages.join(', ')}</span>
              {provider.availability.emergency && (
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                  24/7 Emergency
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        {/* Price and Actions - Mobile */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {servicePrice && (
              <div className="mb-2">
                <div className="text-white/60 text-xs">Starting from</div>
                <div className="text-lg font-bold text-primary-400">
                  {servicePrice.currency} {servicePrice.basePrice}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Link href={`/book?provider=${provider.id}&service=${service.slug}`}>
              <Button size="sm" className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2 rounded-lg font-medium text-xs">
                Book Now
              </Button>
            </Link>
            
            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 rounded-lg p-2">
              <Phone className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={(provider as any).profileImage || (provider as any).profileimage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'} 
                alt={provider.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary-500/50"
              />
              {provider.availability.emergency && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <Zap className="h-2 w-2 text-white" />
                </div>
              )}
            </div>
            
            {/* Provider Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-1">
                <h3 className="text-lg font-semibold text-white truncate">{provider.name}</h3>
                {provider.company && (
                  <span className="text-primary-400 text-sm font-medium truncate">@ {provider.company}</span>
                )}
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span className="text-white font-medium">{provider.rating}</span>
                  <span className="text-white/60 text-sm">({provider.reviewCount})</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span>{provider.experience} years experience</span>
                <span>•</span>
                <span>{provider.services.length} services</span>
                <span>•</span>
                <span>{provider.languages.join(', ')}</span>
                <span>•</span>
                <span>{provider.areas.slice(0, 2).map(area => area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')).join(', ')}</span>
                {provider.availability.emergency && (
                  <>
                    <span>•</span>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                      24/7 Emergency
                    </Badge>
                  </>
                )}
              </div>
              
              <p className="text-white/60 text-sm mt-2 line-clamp-2">{provider.description}</p>
            </div>
          </div>
          
          {/* Price and Actions */}
          <div className="flex items-center space-x-4 ml-4">
            {servicePrice && (
              <div className="text-right">
                <div className="text-white/60 text-xs">Starting from</div>
                <div className="text-2xl font-bold text-primary-400">
                  {servicePrice.currency} {servicePrice.basePrice}
                </div>
              </div>
            )}
            
            <Link href={`/book?provider=${provider.id}&service=${service.slug}`}>
              <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2 rounded-xl font-medium">
                Book Now
              </Button>
            </Link>
            
            <Button variant="outline" size="icon" className="text-white border-white/20 hover:bg-white/10 rounded-xl">
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryPageContent({ category }: { category: ServiceCategory }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const { settings } = useSettings();
  const [cmsHero, setCmsHero] = useState<{ h1?: string; description?: string } | null>(null);
  const [providerCounts, setProviderCounts] = useState<Record<string, number>>({});

  console.log("Service category page loaded:", category.name);

  // Load CMS hero content for category
  useEffect(() => {
    const loadCms = async () => {
      try {
        const res = await getPageContentFromSupabase(`services/${category.slug}`);
        const content = (res as any)?.data?.content;
        if (content?.hero) {
          setCmsHero({ h1: content.hero.h1, description: content.hero.description });
        }
      } catch (e) {
        // ignore
      }
    };
    loadCms();
  }, [category.slug]);

  // Load real providers and compute counts per service
  useEffect(() => {
    const loadProviderCounts = async () => {
      try {
        const res = await listProvidersFromSupabase();
        const providers: any[] = res.data || [];
        const counts: Record<string, number> = {};
        category.services.forEach(svc => {
          counts[svc.slug] = providers.filter(p => Array.isArray(p.services) && p.services.includes(svc.slug)).length;
        });
        setProviderCounts(counts);
      } catch (e) {
        // fallback to sample data if Supabase not configured
        const sampleCounts: Record<string, number> = {};
        category.services.forEach(svc => {
          const count = getProvidersByCategory(category.slug).filter(p => p.services.includes(svc.slug)).length;
          sampleCounts[svc.slug] = count;
        });
        setProviderCounts(sampleCounts);
      }
    };
    loadProviderCounts();
  }, [category.slug]);

  const filteredServices = category.services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular': return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      case 'alphabetical': return a.name.localeCompare(b.name);
      case 'price-low': return parseInt(a.averagePrice.match(/\d+/)?.[0] || '0') - parseInt(b.averagePrice.match(/\d+/)?.[0] || '0');
      case 'price-high': return parseInt(b.averagePrice.match(/\d+/)?.[0] || '0') - parseInt(a.averagePrice.match(/\d+/)?.[0] || '0');
      default: return 0;
    }
  });

  const providersCount = Object.values(providerCounts).reduce((sum, n) => sum + (n || 0), 0);

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Settings;
  };

  const Icon = getIcon(category.icon);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-charcoal-900 to-black text-white">
      {/* Breadcrumb */}
      <div className="bg-black/40 border-b border-neon-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-neon-blue transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/services" className="text-white/60 hover:text-neon-blue transition-colors">Services</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-neon-blue">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal-900 to-black">
          <div className="absolute top-10 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center">
                <Icon className="h-8 w-8 text-black" />
              </div>
              <span className="text-neon-blue font-medium text-lg">Service Category</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                {cmsHero?.h1 ? cmsHero.h1.replace(' in Dubai', '') : category.name}
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                {cmsHero?.h1?.includes('in Dubai') ? 'in Dubai' : 'in Dubai'}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {cmsHero?.description || `${category.description} Find trusted professionals across Dubai with verified reviews and instant booking.`}
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue">{category.services.length}</div>
                <div className="text-white/60 text-sm">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green">{providersCount}</div>
                <div className="text-white/60 text-sm">Verified Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue">4.8★</div>
                <div className="text-white/60 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green">24/7</div>
                <div className="text-white/60 text-sm">Support Available</div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Link href="/providers">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-8 py-3 rounded-full font-semibold shadow-neon hover:shadow-neon-strong transition-all duration-300">
                  Browse All Providers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={`tel:${settings.contact_phone}`}>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {settings.contact_phone}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <section className="py-8 mb-16">
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-neon-blue/30 shadow-neon">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue h-5 w-5" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-black/50 border-neon-blue/50 text-white placeholder-white/60 rounded-xl focus:border-neon-blue focus:ring-neon-blue/50"
                />
              </div>
              
              <div className="md:col-span-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 bg-black/50 border-neon-green/50 text-white rounded-xl focus:border-neon-green">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-neon-green/30">
                    <SelectItem value="popular" className="text-white hover:bg-neon-green/10">Most Popular</SelectItem>
                    <SelectItem value="alphabetical" className="text-white hover:bg-neon-green/10">Alphabetical</SelectItem>
                    <SelectItem value="price-low" className="text-white hover:bg-neon-green/10">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="text-white hover:bg-neon-green/10">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-center text-white/60 text-sm mt-6">
              Found {sortedServices.length} services in {category.name}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {category.name} Services ({sortedServices.length})
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Click on any service to view providers and book instantly
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service, index) => {
              const ServiceIcon = getIcon(service.icon);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="bg-gradient-card backdrop-blur-sm border border-white/10 overflow-hidden hover:border-neon-blue/50 transition-all duration-500 h-full hover:shadow-card-hover">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center">
                            <ServiceIcon className="h-6 w-6 text-black" />
                          </div>
                          <div>
                            <Link href={`/services/${service.slug}`}>
                              <CardTitle className="text-lg text-white mb-1 group-hover:text-neon-blue transition-colors cursor-pointer hover:underline">
                                {service.name}
                              </CardTitle>
                            </Link>
                            <p className="text-sm text-white/60">{category.name}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-1">
                          {service.isPopular && (
                            <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {/* Pricing and Duration */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-neon-blue">{service.averagePrice}</div>
                            <div className="flex items-center space-x-1 text-sm text-white/60">
                              <Clock className="w-4 h-4" />
                              <span>{service.estimatedTime}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              <Users className="h-4 w-4 text-neon-green" />
                              <span className="text-white font-medium">{providerCounts[service.slug] ?? 0}</span>
                            </div>
                            <div className="text-white/60 text-xs">
                              providers available
                            </div>
                          </div>
                        </div>

                        {/* Keywords */}
                        <div className="flex flex-wrap gap-1">
                          {service.keywords.slice(0, 3).map((keyword, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-neon-blue/30 text-neon-blue/80">
                              {keyword}
                            </Badge>
                          ))}
                          {service.keywords.length > 3 && (
                            <Badge variant="outline" className="text-xs border-neon-green/30 text-neon-green/80">
                              +{service.keywords.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2 pt-2">
                          <Link href={`/services/${service.slug}`} className="flex-1">
                            <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                              <Eye className="mr-2 h-4 w-4" />
                              View Service Details
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-neon-green/50 text-neon-green hover:bg-neon-green/10 px-4"
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-white/60 mb-6">Try adjusting your search criteria</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSortBy('popular');
                }}
                className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}