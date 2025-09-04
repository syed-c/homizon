"use client";

import { useState, use } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Star, Clock, Phone, ArrowRight, Calendar, 
  Shield, Award, Users, CheckCircle, Filter, Search,
  ChevronRight, Zap, MessageSquare, Building, Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  getAreaBySlug, 
  getSubAreaBySlug,
  services,
  sampleProviders,
  Provider,
  Area,
  SubArea
} from '@/lib/data';

interface AreaSubAreaPageProps {
  params: Promise<{
    area: string;
    subarea: string;
  }>;
}

export default function AreaSubAreaPage({ params }: AreaSubAreaPageProps) {
  const [selectedService, setSelectedService] = useState<string>('all');
  const [sortBy, setSortBy] = useState('rating');
  const [searchTerm, setSearchTerm] = useState('');

  // Unwrap params using React.use()
  const { area: areaSlug, subarea: subareaSlug } = use(params);

  console.log("Area sub-area page loaded:", { areaSlug, subareaSlug });

  const area = getAreaBySlug(areaSlug);
  const subArea = getSubAreaBySlug(areaSlug, subareaSlug);

  if (!area || !subArea) {
    notFound();
  }

  // Get all providers that serve this area
  const areaProviders = sampleProviders.filter(provider => 
    provider.isApproved && provider.areas.includes(areaSlug)
  );

  // Filter and sort providers
  let filteredProviders = areaProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedService === 'all') return matchesSearch;
    return matchesSearch && provider.services.includes(selectedService);
  });

  filteredProviders.sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'experience') return b.experience - a.experience;
    if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
    return 0;
  });

  const availableServices = services.filter(service => 
    areaProviders.some(provider => provider.services.includes(service.id))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/areas" className="text-white/60 hover:text-white">Areas</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href={`/areas/${area.slug}`} className="text-white/60 hover:text-white">{area.name}</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-primary-400">{subArea.name}</span>
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
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <span className="text-primary-400 font-medium">Neighborhood Services</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Home Services in
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {subArea.name}
              </span>
            </motion.h1>
            
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="text-lg text-white/60 mb-2">
                {area.name} • {subArea.name}
              </p>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                {subArea.description}. Connect with {areaProviders.length} verified professionals serving your specific area with quick response times.
              </p>
            </motion.div>

            {/* Location Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <MapPin className="h-5 w-5 text-accent-400" />
              <span className="text-white">Local providers for {subArea.name}</span>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">{areaProviders.length}</div>
                <div className="text-white/60 text-sm">Local Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400">{availableServices.length}</div>
                <div className="text-white/60 text-sm">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">15 min</div>
                <div className="text-white/60 text-sm">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400">Same Day</div>
                <div className="text-white/60 text-sm">Service Available</div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link href={`/book?area=${area.slug}&subarea=${subArea.slug}`}>
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                  Book Service in {subArea.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call +971 50 XXX XXXX
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Services Available in {subArea.name}</h2>
          <p className="text-white/60">Browse all available services in your neighborhood</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {availableServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/${service.slug}/${area.slug}/${subArea.slug}`}>
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors text-sm">
                      {service.name}
                    </h3>
                    <p className="text-white/60 text-xs mt-1">{service.averagePrice}</p>
                    <div className="text-accent-400 text-xs mt-2">
                      View providers →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Sub-areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Other {area.name} Neighborhoods</h2>
          <p className="text-white/60">Explore services in nearby areas</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {area.subAreas
            .filter(sa => sa.slug !== subArea.slug)
            .map((otherSubArea, index) => (
              <motion.div
                key={otherSubArea.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/areas/${area.slug}/${otherSubArea.slug}`}>
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4 text-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Building className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors text-sm">
                        {otherSubArea.name}
                      </h3>
                      <div className="text-accent-400 text-xs mt-2">
                        View services →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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
                placeholder={`Search providers in ${subArea.name}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-xl"
              />
            </div>
            
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-full lg:w-48 h-12 bg-white/10 border-white/20 text-white rounded-xl">
                <SelectValue placeholder="All Services" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="all" className="text-white">All Services</SelectItem>
                {availableServices.map((service) => (
                  <SelectItem key={service.id} value={service.id} className="text-white">
                    {service.name}
                  </SelectItem>
                ))}
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
        </motion.div>
      </div>

      {/* Providers List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {filteredProviders.length} Providers Serving {subArea.name}
          </h2>
          <p className="text-white/60 text-lg">
            Local experts ready to serve your neighborhood
          </p>
        </motion.div>

        <div className="space-y-4">
          {filteredProviders.map((provider, index) => (
            <ProviderRow 
              key={provider.id} 
              provider={provider} 
              area={area}
              subArea={subArea}
              index={index} 
            />
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-white mb-4">No providers found</h3>
            <p className="text-white/60 mb-6">
              Try browsing providers in the broader {area.name} area or adjust your search criteria
            </p>
            <Link href={`/areas/${area.slug}`}>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                View All Providers in {area.name}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ProviderRow({ provider, area, subArea, index }: { 
  provider: Provider; 
  area: Area;
  subArea: SubArea;
  index: number; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Provider Image and Basic Info */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <div className="relative">
                <img 
                  src={provider.profileImage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'} 
                  alt={provider.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-500/50"
                />
                {provider.availability.emergency && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Zap className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {provider.name}
                </h3>
                {provider.company && (
                  <p className="text-primary-400 font-medium">{provider.company}</p>
                )}
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-white font-medium">{provider.rating}</span>
                    <span className="text-white/60 text-sm">({provider.reviewCount})</span>
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-white border-0 text-xs">
                    {provider.experience} years
                  </Badge>
                </div>
              </div>
            </div>

            {/* Services and Description */}
            <div className="flex-1 min-w-0">
              <p className="text-white/70 text-sm mb-3 leading-relaxed">{provider.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {provider.services.slice(0, 3).map((serviceId) => {
                  const service = services.find(s => s.id === serviceId);
                  return service ? (
                    <Badge key={serviceId} className="bg-primary-500/20 text-primary-400 border-primary-500/30 text-xs">
                      {service.name}
                    </Badge>
                  ) : null;
                })}
                {provider.services.length > 3 && (
                  <Badge variant="secondary" className="bg-white/10 text-white border-0 text-xs">
                    +{provider.services.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                  Serves {subArea.name}
                </Badge>
                {provider.availability.emergency && (
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                    Emergency Available
                  </Badge>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-2 flex-shrink-0">
              <Link href={`/book?provider=${provider.id}&area=${area.slug}&subarea=${subArea.slug}`}>
                <Button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-xl font-medium">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 rounded-xl">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 rounded-xl">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}