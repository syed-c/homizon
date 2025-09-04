"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, Search, Plus, Edit, Trash2, MoreHorizontal,
  FileText, Building, MapPin, Eye, ArrowUpDown, Clock,
  CheckCircle, XCircle, Globe, Tag, GripVertical, Copy
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services, areas } from '@/lib/data';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  pageType: 'service' | 'area' | 'service-area' | 'global';
  service?: string;
  area?: string;
  subarea?: string;
  category?: string;
  status: 'published' | 'draft';
  order: number;
  createdDate: string;
  modifiedDate: string;
  modifiedBy: string;
  views: number;
}

// Generate sample FAQ data
const generateFAQs = (): FAQ[] => {
  const faqs: FAQ[] = [];
  let idCounter = 1;

  // Global FAQs
  const globalFAQs = [
    {
      question: "How do I book a service?",
      answer: "Simply browse our services, select your area, choose a provider, and book online. You can also call us directly."
    },
    {
      question: "Are all providers verified?",
      answer: "Yes, all our service providers go through a thorough verification process including background checks and skill assessments."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards, and bank transfers. Payment is made directly to the service provider after completion."
    }
  ];

  globalFAQs.forEach((faq, index) => {
    faqs.push({
      id: `faq-${idCounter++}`,
      question: faq.question,
      answer: faq.answer,
      pageType: 'global',
      status: 'published',
      order: index + 1,
      createdDate: '2024-01-10',
      modifiedDate: '2024-01-15',
      modifiedBy: 'Admin',
      views: Math.floor(Math.random() * 500) + 100
    });
  });

  // Service-specific FAQs
  services.slice(0, 5).forEach(service => {
    const serviceFAQs = [
      {
        question: `How much does ${service.name.toLowerCase()} cost?`,
        answer: `The cost of ${service.name.toLowerCase()} varies depending on the complexity of the job. Our average price is ${service.averagePrice}. Get a free quote from our verified providers.`
      },
      {
        question: `How long does ${service.name.toLowerCase()} take?`,
        answer: `Typically, ${service.name.toLowerCase()} takes ${service.estimatedTime}. However, the exact time depends on the specific requirements of your job.`
      },
      {
        question: `Do you provide ${service.name.toLowerCase()} in all areas of Dubai?`,
        answer: `Yes, we have verified providers for ${service.name.toLowerCase()} across all major areas in Dubai including Dubai Marina, Downtown Dubai, JLT, and more.`
      }
    ];

    serviceFAQs.forEach((faq, index) => {
      faqs.push({
        id: `faq-${idCounter++}`,
        question: faq.question,
        answer: faq.answer,
        pageType: 'service',
        service: service.slug,
        category: service.category,
        status: Math.random() > 0.9 ? 'draft' : 'published',
        order: index + 1,
        createdDate: '2024-01-12',
        modifiedDate: '2024-01-14',
        modifiedBy: 'Content Manager',
        views: Math.floor(Math.random() * 200) + 50
      });
    });
  });

  // Area-specific FAQs
  areas.slice(0, 3).forEach(area => {
    const areaFAQs = [
      {
        question: `What services are available in ${area.name}?`,
        answer: `We offer a full range of home services in ${area.name} including AC repair, cleaning, pest control, electrical work, and more. All our providers are local and verified.`
      },
      {
        question: `How quickly can I get service in ${area.name}?`,
        answer: `Most of our providers in ${area.name} offer same-day service for urgent requests. For regular bookings, you can usually get service within 24-48 hours.`
      }
    ];

    areaFAQs.forEach((faq, index) => {
      faqs.push({
        id: `faq-${idCounter++}`,
        question: faq.question,
        answer: faq.answer,
        pageType: 'area',
        area: area.slug,
        status: 'published',
        order: index + 1,
        createdDate: '2024-01-11',
        modifiedDate: '2024-01-13',
        modifiedBy: 'SEO Manager',
        views: Math.floor(Math.random() * 150) + 30
      });
    });
  });

  return faqs;
};

export default function FAQManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageTypeFilter, setPageTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [areaFilter, setAreaFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const allFAQs = generateFAQs();

  const filteredFAQs = allFAQs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPageType = pageTypeFilter === 'all' || faq.pageType === pageTypeFilter;
    const matchesStatus = statusFilter === 'all' || faq.status === statusFilter;
    const matchesService = serviceFilter === 'all' || faq.service === serviceFilter;
    const matchesArea = areaFilter === 'all' || faq.area === areaFilter;
    
    return matchesSearch && matchesPageType && matchesStatus && matchesService && matchesArea;
  });

  const getPageTypeColor = (type: string) => {
    switch (type) {
      case 'global': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'service': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'area': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'service-area': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const stats = [
    {
      title: 'Total FAQs',
      value: allFAQs.length.toString(),
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Published',
      value: allFAQs.filter(f => f.status === 'published').length.toString(),
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Draft',
      value: allFAQs.filter(f => f.status === 'draft').length.toString(),
      icon: Clock,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Total Views',
      value: allFAQs.reduce((sum, faq) => sum + faq.views, 0).toLocaleString(),
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">FAQ Management</h1>
          <p className="text-white/60 mt-2">Manage frequently asked questions for all pages</p>
        </div>
        <Button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add FAQ
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add FAQ Form */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Add New FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Page Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="global" className="text-white">Global</SelectItem>
                    <SelectItem value="service" className="text-white">Service Page</SelectItem>
                    <SelectItem value="area" className="text-white">Area Page</SelectItem>
                    <SelectItem value="service-area" className="text-white">Service + Area</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Service (if applicable)" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    {services.slice(0, 10).map(service => (
                      <SelectItem key={service.id} value={service.slug} className="text-white">
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Area (if applicable)" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    {areas.slice(0, 10).map(area => (
                      <SelectItem key={area.id} value={area.slug} className="text-white">
                        {area.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-white/90 text-sm font-medium mb-2 block">Question</label>
                <Input
                  placeholder="Enter the frequently asked question..."
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label className="text-white/90 text-sm font-medium mb-2 block">Answer</label>
                <Textarea
                  placeholder="Enter the detailed answer..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                />
              </div>

              <div className="flex items-center justify-between">
                <Select defaultValue="published">
                  <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20">
                    <SelectItem value="published" className="text-white">Published</SelectItem>
                    <SelectItem value="draft" className="text-white">Draft</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={() => setShowAddForm(false)} className="text-white border-white/20 hover:bg-white/10">
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                    Save FAQ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Filters and Search */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input
                placeholder="Search FAQs by question or answer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
            
            <Select value={pageTypeFilter} onValueChange={setPageTypeFilter}>
              <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Page Type" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="all" className="text-white">All Types</SelectItem>
                <SelectItem value="global" className="text-white">Global</SelectItem>
                <SelectItem value="service" className="text-white">Service</SelectItem>
                <SelectItem value="area" className="text-white">Area</SelectItem>
                <SelectItem value="service-area" className="text-white">Service + Area</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="all" className="text-white">All Status</SelectItem>
                <SelectItem value="published" className="text-white">Published</SelectItem>
                <SelectItem value="draft" className="text-white">Draft</SelectItem>
              </SelectContent>
            </Select>

            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="all" className="text-white">All Services</SelectItem>
                {services.slice(0, 8).map(service => (
                  <SelectItem key={service.id} value={service.slug} className="text-white">
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={areaFilter} onValueChange={setAreaFilter}>
              <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Area" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-white/20">
                <SelectItem value="all" className="text-white">All Areas</SelectItem>
                {areas.slice(0, 8).map(area => (
                  <SelectItem key={area.id} value={area.slug} className="text-white">
                    {area.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* FAQs List */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardHeader>
          <CardTitle className="text-white">All FAQs ({filteredFAQs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="cursor-move p-1 hover:bg-white/10 rounded">
                      <GripVertical className="h-4 w-4 text-white/40" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getPageTypeColor(faq.pageType)}>
                          {faq.pageType}
                        </Badge>
                        <Badge className={getStatusColor(faq.status)}>
                          {faq.status}
                        </Badge>
                        {faq.service && (
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-0">
                            {faq.service.replace('-', ' ')}
                          </Badge>
                        )}
                        {faq.area && (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-0">
                            {faq.area.replace('-', ' ')}
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">{faq.answer}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-white/50">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{faq.views.toLocaleString()} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ArrowUpDown className="h-4 w-4" />
                          <span>Order: {faq.order}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Modified {faq.modifiedDate} by {faq.modifiedBy}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      <Copy className="h-4 w-4 mr-1" />
                      Duplicate
                    </Button>
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="icon" className="text-red-400 border-red-500/30 hover:bg-red-500/20">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-white/60 border-white/20 hover:bg-white/10">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No FAQs found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}