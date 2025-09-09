"use client";

import { useState, useEffect } from 'react';
import { 
  MapPin, Star, Clock, Phone, ArrowRight, Calendar, 
  Shield, Award, Users, CheckCircle, Filter, Search,
  ChevronRight, Zap, MessageSquare, Heart, Share2,
  ThermometerSun, Droplets, Snowflake, Settings, Wind,
  Sparkles, Bug, Wrench, Hammer, Monitor, Paintbrush,
  Info, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  services,
  Service,
  Area
} from '@/lib/data';
import { listProvidersFromSupabase, getPageContentFromSupabase } from '@/lib/supabase';
import { useSettings } from '@/lib/settings-context';

interface AreaPageClientProps {
  area: Area;
}

export default function AreaPageClient({ area }: AreaPageClientProps) {
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cms, setCms] = useState<any>(null);
  const [providers, setProviders] = useState<any[]>([]);
  const { settings } = useSettings();

  console.log("Area page loaded:", { areaSlug: area.slug });

  // Fetch CMS content from pages_content using slug pattern: areas/{areaSlug}
  useEffect(() => {
    const loadCms = async () => {
      try {
        const res = await getPageContentFromSupabase(`areas/${area.slug}`);
        const content = (res as any)?.data?.content;
        setCms(content || null);
      } catch {}
    };
    loadCms();
  }, [area.slug]);

  // Load real providers who serve this area from Supabase
  useEffect(() => {
    const loadProviders = async () => {
      try {
        const res = await listProvidersFromSupabase();
        const rows: any[] = res.data || [];
        const filtered = rows.filter((p: any) => Array.isArray(p.areas) && p.areas.includes(area.slug));
        setProviders(filtered);
      } catch {
        setProviders([]);
      }
    };
    loadProviders();
  }, [area.slug]);

  // Filter and sort providers
  let filteredProviders = providers.filter((provider: any) => {
    const name = (provider.name || '').toLowerCase();
    const company = (provider.company || '').toLowerCase();
    const description = (provider.description || '').toLowerCase();
    const matchesSearch = name.includes(searchTerm.toLowerCase()) ||
                         company.includes(searchTerm.toLowerCase()) ||
                         description.includes(searchTerm.toLowerCase());
    
    if (filterBy === 'emergency') return matchesSearch && provider.availability.emergency;
    if (filterBy === 'top-rated') return matchesSearch && provider.rating >= 4.5;
    if (filterBy === 'experienced') return matchesSearch && provider.experience >= 5;
    return matchesSearch;
  });

  filteredProviders.sort((a: any, b: any) => {
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    if (sortBy === 'experience') return (b.experience || 0) - (a.experience || 0);
    if (sortBy === 'reviews') return (b.reviewcount || b.reviewCount || 0) - (a.reviewcount || a.reviewCount || 0);
    return 0;
  });

  const averageRating = providers.reduce((sum, p) => sum + (p.rating || 0), 0) / (providers.length || 1);
  const emergencyProviders = providers.filter(p => p.availability?.emergency).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm overflow-x-auto">
            <Link href="/" className="text-white/60 hover:text-white whitespace-nowrap">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/40 flex-shrink-0" />
            <Link href="/areas" className="text-white/60 hover:text-white whitespace-nowrap">Areas</Link>
            <ChevronRight className="h-4 w-4 text-white/40 flex-shrink-0" />
            <span className="text-primary-400 whitespace-nowrap">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <span className="text-primary-400 font-medium text-lg">Service Area</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {(() => {
                const raw = cms?.hero?.h1 || `Home Services in\n${area.name}`;
                const processed = raw
                  .replace('{ Location }', area.name)
                  .replace('{Location}', area.name)
                  .replace('{ location }', area.name)
                  .replace('{location}', area.name);
                const parts = processed.split('\n');
                return (
                  <>
                    <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                      {parts[0]}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      {parts[1] || ''}
                    </span>
                  </>
                );
              })()}
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              {(() => {
                const template = cms?.hero?.description || `${area.description} Connect with {providers} verified professionals with an average rating of {rating} stars.`;
                return template
                  .replace('{providers}', String(providers.length))
                  .replace('{reviews}', averageRating.toFixed(1))
                  .replace('{rating}', averageRating.toFixed(1));
              })()}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">{providers.length}</div>
                <div className="text-white/60 text-sm">Available Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400">{averageRating.toFixed(1)}★</div>
                <div className="text-white/60 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">{emergencyProviders}</div>
                <div className="text-white/60 text-sm">Emergency Available</div>
              </div>
              {/* Removed Sub Areas counter to align with simplified layout */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/book?area=${area.slug}`}>
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                  Book Service in {area.name}
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
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-white/60">
              <Shield className="h-4 w-4 text-primary-400" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span>4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60">
              <Clock className="h-4 w-4 text-accent-400" />
              <span>Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Available Services</h2>
          <p className="text-white/60">Choose from our professional home services in {area.name}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.slice(0, 12).map((service, index) => (
            <div key={service.id}>
              <Link href={`/${service.slug}/${area.slug}`}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors text-sm">
                      {service.name}
                    </h3>
                    <p className="text-white/60 text-xs mt-1">{service.averagePrice}</p>
                    <div className="text-accent-400 text-xs mt-2">
                      Book in {area.name} →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Sub Areas section removed as requested */}

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input
                placeholder="Search providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-xl"
              />
            </div>
            
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white rounded-xl">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="all" className="text-white">All Providers</SelectItem>
                <SelectItem value="emergency" className="text-white">Emergency Available</SelectItem>
                <SelectItem value="top-rated" className="text-white">Top Rated (4.5+)</SelectItem>
                <SelectItem value="experienced" className="text-white">Experienced (5+ years)</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white rounded-xl">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="rating" className="text-white">Highest Rated</SelectItem>
                <SelectItem value="reviews" className="text-white">Most Reviews</SelectItem>
                <SelectItem value="experience" className="text-white">Most Experienced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Providers List in Line Format */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {cms?.providers?.h2 || `${filteredProviders.length} Service Providers in ${area.name}`}
          </h2>
          <p className="text-white/60 text-lg">
            {cms?.providers?.paragraph || 'Verified professionals ready to serve you with quality guaranteed'}
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {filteredProviders.map((provider, index) => (
            <div key={provider.id} className="w-full">
              <ProviderLineItem 
                provider={provider} 
                area={area}
                index={index} 
              />
            </div>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No providers found</h3>
            <p className="text-white/60 mb-6">
              Try adjusting your search criteria or browse all areas
            </p>
            <Link href="/areas">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                Browse All Areas
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Custom Content Section */}
      {(cms?.about?.h2 || cms?.about?.paragraph) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-primary-900/30 to-accent-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {cms?.about?.h2 || `About Home Services in ${area.name}`}
                </h2>
                <p className="text-white/60 text-sm">Local insights and expert information</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">{cms?.about?.paragraph || ''}</p>
            
            <div className="mt-6 flex items-center space-x-4 text-sm text-white/60">
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Verified Information</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Updated {cms?.lastModified || 'recently'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-purple-400" />
                <span>Curated by {settings.site_name} Team</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{cms?.faqs?.h2 || 'Frequently Asked Questions'}</h2>
          <p className="text-white/60 text-lg">{cms?.faqs?.paragraph || `Common questions about services in ${area.name}`}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(cms?.faqs?.items || [
            {
              question: `How quickly can I get a service provider in ${area.name}?`,
              answer: `Most service providers in ${area.name} can respond within 30-60 minutes. For emergency services, response time is typically 15-30 minutes.`
            },
            {
              question: `Are service providers available on weekends in ${area.name}?`,
              answer: `Yes, many service providers work weekends in ${area.name}. However, weekend slots fill up quickly, so we recommend booking in advance.`
            },
            {
              question: `What are the typical service charges in ${area.name}?`,
              answer: `Service charges vary by type of service. Basic maintenance starts from AED 100, while specialized services like AC repair can range from AED 150-400.`
            },
            {
              question: `Do service providers in ${area.name} offer warranties?`,
              answer: `Most professional service providers offer warranties ranging from 30 days to 1 year, depending on the type of service and parts used.`
            },
            {
              question: `Is parking available for service providers in ${area.name}?`,
              answer: `${area.name.includes('Marina') ? 'Paid parking is available in designated areas. Many buildings offer visitor parking for service providers.' : area.name.includes('Downtown') ? 'Valet parking and paid parking zones are available. Check with your building management for visitor parking.' : 'Most residential areas have visitor parking available. Commercial areas may require paid parking.'}`
            },
            {
              question: `What safety measures do service providers follow in ${area.name}?`,
              answer: `All verified providers follow safety protocols, carry insurance, and undergo background checks. They also follow building-specific safety guidelines.`
            }
          ]).map((faq: any, index: number) => (
            <div key={index}>
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              {cms?.cta?.h2 || `Need Home Services in ${area.name}? We're Here to Help!`}
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              {cms?.cta?.paragraph || `Get connected with verified service professionals in ${area.name}. Compare quotes, read reviews, and book your service instantly.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/book?area=${area.slug}`}>
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                  Book Service in {area.name}
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
        </div>
      </section>
    </div>
  );
}

function ProviderLineItem({ provider, area, index }: { 
  provider: any; 
  area: Area; 
  index: number; 
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 rounded-xl p-4 md:p-6">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-start space-x-3 mb-4">
          {/* Profile Image - Smaller on mobile */}
          <div className="relative flex-shrink-0">
            <img 
              src={provider.profileImage || provider.profileimage || provider.avatar_url || provider.photo_url || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'} 
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
        
        {/* Availability and Actions - Mobile */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="mb-2">
              <div className="text-white/60 text-xs">Available</div>
              <div className="text-white text-sm font-medium">{provider.availability.weekdays}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link href={`/book?provider=${provider.id}&area=${area.slug}`}>
              <Button size="sm" className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2 rounded-lg font-medium text-xs">
                Book Now
              </Button>
            </Link>
            
            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 rounded-lg p-2">
              <MessageSquare className="h-3 w-3" />
            </Button>
            
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
                src={provider.profileImage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'} 
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
          
          {/* Actions */}
          <div className="flex items-center space-x-3 ml-4">
            <div className="text-right">
              <div className="text-white/60 text-xs">Available</div>
              <div className="text-white text-sm font-medium">{provider.availability.weekdays}</div>
            </div>
            
            <Link href={`/book?provider=${provider.id}&area=${area.slug}`}>
              <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2 rounded-xl font-medium">
                Book Now
              </Button>
            </Link>
            {/* Message/Call buttons removed as requested */}
          </div>
        </div>
      </div>
    </div>
  );
}
