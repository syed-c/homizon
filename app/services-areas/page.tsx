"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, MapPin, Wrench, Sparkles, Bug, Hammer, 
  ArrowRight, ChevronRight, Building, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { services, areas, Service, Area } from '@/lib/data';

export default function ServicesAreasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Group services by category
  const serviceCategories = {
    'appliance-repairs': {
      name: 'Appliance Repairs',
      icon: Wrench,
      services: services.filter(s => s.category === 'appliance-repairs')
    },
    'cleaning-services': {
      name: 'Cleaning Services',
      icon: Sparkles,
      services: services.filter(s => s.category === 'cleaning-services')
    },
    'pest-control': {
      name: 'Pest Control',
      icon: Bug,
      services: services.filter(s => s.category === 'pest-control')
    },
    'handyman-services': {
      name: 'Handyman Services',
      icon: Hammer,
      services: services.filter(s => s.category === 'handyman-services')
    }
  };

  // Filter services based on search and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Filter areas based on search
  const filteredAreas = areas.filter(area => {
    return area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           area.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
           area.subAreas.some(sa => sa.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-primary-400">Services & Areas</span>
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
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                All Services & Areas
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Browse all available home services across Dubai. Select any service and area combination to find verified professionals in your neighborhood.
            </motion.p>

            {/* Search and Filters */}
            <motion.div 
              className="max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                    <Input
                      placeholder="Search services or areas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder-white/50 rounded-xl"
                    />
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white rounded-xl">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20">
                      <SelectItem value="all" className="text-white">All Categories</SelectItem>
                      {Object.entries(serviceCategories).map(([key, category]) => (
                        <SelectItem key={key} value={key} className="text-white">
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white rounded-xl">
                      <SelectValue placeholder="All Areas" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20">
                      <SelectItem value="all" className="text-white">All Areas</SelectItem>
                      {areas.map((area) => (
                        <SelectItem key={area.id} value={area.slug} className="text-white">
                          {area.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Available Services</h2>
          <p className="text-white/60">Choose from our comprehensive range of professional home services</p>
        </motion.div>

        {/* Service Categories */}
        {Object.entries(serviceCategories).map(([categoryKey, category], categoryIndex) => {
          const categoryServices = filteredServices.filter(s => s.category === categoryKey);
          
          if (categoryServices.length === 0 && selectedCategory !== 'all') return null;
          if (selectedCategory !== 'all' && selectedCategory !== categoryKey) return null;

          return (
            <motion.div 
              key={categoryKey}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                <span className="text-white/60">({categoryServices.length} services)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service, serviceIndex) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    selectedArea={selectedArea}
                    index={serviceIndex}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Service Areas</h2>
            <p className="text-white/60">We serve all major areas across Dubai with local professionals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area, index) => (
              <AreaCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, selectedArea, index }: { 
  service: Service; 
  selectedArea: string;
  index: number; 
}) {
  const linkPath = selectedArea === 'all' 
    ? `/services/${service.slug}`
    : `/${service.slug}/${selectedArea}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={linkPath}>
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 cursor-pointer h-full">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-accent-400 font-semibold text-sm">{service.averagePrice}</span>
            </div>
            
            <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors mb-2">
              {service.name}
            </h3>
            
            <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">
              {service.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-white/60">
                <span>{service.estimatedTime}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

function AreaCard({ area, index }: { area: Area; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/areas/${area.slug}`}>
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 cursor-pointer h-full">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {area.name}
                </h3>
                <span className="text-white/60 text-sm">{area.subAreas.length} neighborhoods</span>
              </div>
            </div>
            
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              {area.description}
            </p>

            <div className="space-y-2">
              <p className="text-white/60 text-xs font-medium">Sub-areas include:</p>
              <div className="flex flex-wrap gap-1">
                {area.subAreas.slice(0, 3).map((subArea) => (
                  <span key={subArea.id} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">
                    {subArea.name}
                  </span>
                ))}
                {area.subAreas.length > 3 && (
                  <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded">
                    +{area.subAreas.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}