"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Plus, Eye, Edit, RotateCcw, Search, 
  Globe, Calendar, BarChart3, Settings, Save, X, Trash
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { services, serviceCategories, areas as areasList } from '@/lib/data';
import { listServicesFromSupabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface PageContent {
  id: string;
  page_slug: string;
  content: any;
  meta_title: string;
  meta_description: string;
  updated_at: string;
}

interface HomePageContent {
  hero: {
    h1: string;
    description: string;
  };
  popularServices: {
    h2: string;
    paragraph: string;
    services: Array<{
      id: string;
      name: string;
      description: string;
      icon: string;
    }>;
  };
  howItWorks: {
    h2: string;
    paragraph: string;
    steps: Array<{
      h3: string;
      paragraph: string;
    }>;
  };
  serviceAreas: {
    h2: string;
    paragraph: string;
  };
  faqs: {
    h2: string;
    paragraph: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  buttons: Array<{
    text: string;
    url: string;
  }>;
}

interface ServicesPageContent {
  hero: {
    h1: string;
    description: string;
  };
  why_choose: {
    h2: string;
    paragraph: string;
    features: Array<{
      h3: string;
      paragraph: string;
    }>;
  };
  cta: {
    h2: string;
    paragraph: string;
  };
}

interface ServiceDetailPageContent {
  hero: { h1: string; description: string };
  about: { h2: string; paragraph: string };
  why: { h2: string; paragraph: string };
  faqs: { h2: string; paragraph: string; items: Array<{ question: string; answer: string }>; };
  cta: { h2: string; paragraph: string };
}

const defaultHomePageContent: HomePageContent = {
  hero: {
    h1: "Dubai's Premier Home Services Platform",
    description: "Connect with verified home service providers across Dubai. Get instant quotes for AC repair, cleaning, plumbing, electrical work, pest control & handyman services. Available 24/7 in all Dubai areas."
  },
  popularServices: {
    h2: "Popular Services",
    paragraph: "Choose from our most requested home services",
    services: [
      { id: 'ac-repair', name: 'AC Repair & Cleaning', description: 'Professional AC services', icon: 'Wind' },
      { id: 'cleaning', name: 'Deep Cleaning', description: 'Comprehensive cleaning services', icon: 'Sparkles' },
      { id: 'plumbing', name: 'Plumbing', description: 'Expert plumbing solutions', icon: 'Wrench' },
      { id: 'electrical', name: 'Electrical', description: 'Licensed electrical work', icon: 'Zap' }
    ]
  },
  howItWorks: {
    h2: "How It Works",
    paragraph: "Simple steps to get your home services",
    steps: [
      { h3: "1. Request Service", paragraph: "Tell us what you need and when" },
      { h3: "2. Get Matched", paragraph: "We connect you with verified providers" },
      { h3: "3. Compare Quotes", paragraph: "Review and choose the best option" },
      { h3: "4. Enjoy Service", paragraph: "Relax while professionals handle it" }
    ]
  },
  serviceAreas: {
    h2: "Service Areas",
    paragraph: "We serve all major areas across Dubai"
  },
  faqs: {
    h2: "Frequently Asked Questions",
    paragraph: "Find answers to common questions",
    items: [
      { question: "How quickly can I get service?", answer: "Most services are available same-day or within 24 hours." },
      { question: "Are your providers verified?", answer: "Yes, all providers are background checked and verified." }
    ]
  },
  buttons: [
    { text: "Book Now", url: "/book" },
    { text: "View Services", url: "/services" },
    { text: "Learn More", url: "/how-it-works" }
  ]
};

const defaultServicesPageContent: ServicesPageContent = {
  hero: {
    h1: "Service Directory",
    description: "Browse our comprehensive directory of home services in Dubai. Find the perfect service provider for your needs with detailed information, pricing, and availability."
  },
  why_choose: {
    h2: "Why Choose Our Directory?",
    paragraph: "Experience the difference with our curated selection of top-rated service providers in Dubai.",
    features: [
      { h3: "Verified Professionals", paragraph: "All providers are background-checked and verified for your peace of mind." },
      { h3: "Quality Guaranteed", paragraph: "Browse ratings and reviews from real customers to make informed decisions." },
      { h3: "Quick Connection", paragraph: "Connect directly with providers and get quotes within minutes." },
      { h3: "Wide Selection", paragraph: "Choose from hundreds of providers across all service categories." }
    ]
  },
  cta: {
    h2: "Ready to Get Started?",
    paragraph: "Join thousands of satisfied customers who have found their perfect service provider through our platform."
  }
};

export default function PagesEditor() {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingPage, setEditingPage] = useState<PageContent | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pageContent, setPageContent] = useState<HomePageContent | ServicesPageContent | ServiceDetailPageContent | any>(defaultHomePageContent);
  const [pageType, setPageType] = useState<'home' | 'services' | 'category' | 'serviceDetail' | 'areas' | 'areaDetail'>('home');
  const [metaData, setMetaData] = useState({
    slug: '',
    meta_title: "HOMIZON - Dubai's Premier Home Services Platform",
    meta_description: "Connect with verified home service providers across Dubai. Get instant quotes for AC repair, cleaning, plumbing, electrical work, pest control & handyman services."
  });
  const { toast } = useToast();
  const [servicesDb, setServicesDb] = useState<{ slug: string; name: string }[]>([]);

  useEffect(() => {
    loadPages();
  }, []);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await listServicesFromSupabase();
        const db = (res.data || []).filter((s: any) => s.status === 'active');
        setServicesDb(db.map((s: any) => ({ slug: s.slug, name: s.name })));
      } catch {
        setServicesDb([]);
      }
    };
    loadServices();
  }, []);

  const loadPages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/pages-content');
      const data = await response.json();
      
      if (data.data) {
        setPages(data.data);
      } else {
        // Initialize with default pages if no data exists
        const defaultHomePage: PageContent = {
          id: 'home-page',
          page_slug: '',
          content: defaultHomePageContent,
          meta_title: metaData.meta_title,
          meta_description: metaData.meta_description,
          updated_at: new Date().toISOString()
        };
        
        const defaultServicesPage: PageContent = {
          id: 'services-page',
          page_slug: 'services',
          content: defaultServicesPageContent,
          meta_title: "Service Directory - HOMIZON",
          meta_description: "Browse our comprehensive directory of home services in Dubai. Find the perfect service provider for your needs with detailed information, pricing, and availability.",
          updated_at: new Date().toISOString()
        };
        
        setPages([defaultHomePage, defaultServicesPage]);
      }
    } catch (error) {
      console.error('Error loading pages:', error);
      toast({
        title: 'Error',
        description: 'Failed to load pages',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditPage = (page: PageContent) => {
    setEditingPage(page);
    
    // Determine page type based on slug
    if (page.page_slug === 'services') {
      setPageType('services');
      const incoming = (page.content || {}) as any;
      const merged: ServicesPageContent = {
        hero: {
          h1: incoming.hero?.h1 ?? defaultServicesPageContent.hero.h1,
          description: incoming.hero?.description ?? defaultServicesPageContent.hero.description,
        },
        why_choose: {
          h2: incoming.why_choose?.h2 ?? defaultServicesPageContent.why_choose.h2,
          paragraph: incoming.why_choose?.paragraph ?? defaultServicesPageContent.why_choose.paragraph,
          features: Array.isArray(incoming.why_choose?.features) && incoming.why_choose.features.length > 0
            ? incoming.why_choose.features
            : defaultServicesPageContent.why_choose.features,
        },
        cta: {
          h2: incoming.cta?.h2 ?? defaultServicesPageContent.cta.h2,
          paragraph: incoming.cta?.paragraph ?? defaultServicesPageContent.cta.paragraph,
        }
      };
      setPageContent(merged);
    } else if (page.page_slug === 'areas') {
      setPageType('areas');
      const incoming = (page.content || {}) as any;
      setPageContent({
        hero: {
          h1: incoming?.hero?.h1 || 'Service Areas\nAcross Dubai',
          description: incoming?.hero?.description || 'Professional home services available in all major areas of Dubai. Find trusted experts in your neighborhood with fast response times and guaranteed quality.'
        },
        featured: {
          h2: incoming?.featured?.h2 || 'Featured Areas',
          paragraph: incoming?.featured?.paragraph || 'Most popular areas with highest service demand and fastest response times'
        },
        coverage: {
          h2: incoming?.coverage?.h2 || 'Complete Dubai Coverage',
          paragraph: incoming?.coverage?.paragraph || 'From luxury villas to high-rise apartments, we provide professional home services across all areas of Dubai with our network of verified experts.'
        },
        emergency: {
          h2: incoming?.emergency?.h2 || '24/7 Emergency Services',
          paragraph: incoming?.emergency?.paragraph || 'Urgent plumbing, electrical, or AC issues? Our emergency response team is available 24/7 across all major areas in Dubai with response times as fast as 1 hour.'
        }
      } as any);
    } else if (page.page_slug && page.page_slug.startsWith('areas/')) {
      setPageType('areaDetail');
      const incoming = (page.content || {}) as any;
      setPageContent({
        hero: {
          h1: incoming?.hero?.h1 || 'Home Services in\n{ Location }',
          description: incoming?.hero?.description || 'A traditional neighborhood with local markets and cultural attractions. Connect with 2 verified professionals with an average rating of 4.8 stars.'
        },
        providers: {
          h2: incoming?.providers?.h2 || '{ No. of providers } Service Providers in { Location }',
          paragraph: incoming?.providers?.paragraph || 'Verified professionals ready to serve you with quality guaranteed'
        },
        about: {
          h2: incoming?.about?.h2 || 'About Home Services in { Location }',
          paragraph: incoming?.about?.paragraph || 'Find professional Home Services services in this area. Our verified experts provide reliable, high-quality service with transparent pricing and guaranteed satisfaction.'
        },
        faqs: {
          h2: incoming?.faqs?.h2 || 'FAQs',
          paragraph: incoming?.faqs?.paragraph || '',
          items: Array.isArray(incoming?.faqs?.items) ? incoming.faqs.items : []
        },
        cta: {
          h2: incoming?.cta?.h2 || "Need Home Services? We're Here to Help!",
          paragraph: incoming?.cta?.paragraph || 'Get connected with verified service professionals. Compare quotes, read reviews, and book instantly.'
        }
      } as any);
    } else if (page.page_slug && page.page_slug.startsWith('service-page/')) {
      setPageType('serviceDetail');
      const incoming = (page.content || {}) as any;
      const merged: ServiceDetailPageContent = {
        hero: {
          h1: incoming.hero?.h1 || 'Service in Dubai',
          description: incoming.hero?.description || 'Professional services by verified providers.'
        },
        about: {
          h2: incoming.about?.h2 || 'About This Service in Dubai',
          paragraph: incoming.about?.paragraph || ''
        },
        why: {
          h2: incoming.why?.h2 || 'Why Choose This Service in Dubai?',
          paragraph: incoming.why?.paragraph || ''
        },
        faqs: {
          h2: incoming.faqs?.h2 || 'Frequently Asked Questions',
          paragraph: incoming.faqs?.paragraph || '',
          items: Array.isArray(incoming.faqs?.items) ? incoming.faqs.items : []
        },
        cta: {
          h2: incoming.cta?.h2 || "Need This Service? We're Here to Help!",
          paragraph: incoming.cta?.paragraph || ''
        }
      };
      setPageContent(merged);
    } else if (page.page_slug && page.page_slug.startsWith('services/')) {
      // Services category page -> only allow editing Hero section
      setPageType('category');
      const incoming = (page.content || {}) as any;
      const merged = {
        hero: {
          h1: incoming?.hero?.h1 || 'Category',
          description: incoming?.hero?.description || 'Browse providers in this category.',
        },
      } as any;
      setPageContent(merged);
    } else {
      setPageType('home');
      const incoming = (page.content || {}) as any;
      const merged: HomePageContent = {
        hero: {
          h1: incoming.hero?.h1 ?? defaultHomePageContent.hero.h1,
          description: incoming.hero?.description ?? defaultHomePageContent.hero.description,
        },
        popularServices: {
          h2: incoming.popularServices?.h2 ?? defaultHomePageContent.popularServices.h2,
          paragraph: incoming.popularServices?.paragraph ?? defaultHomePageContent.popularServices.paragraph,
          services: Array.isArray(incoming.popularServices?.services) && incoming.popularServices.services.length > 0
            ? incoming.popularServices.services
            : defaultHomePageContent.popularServices.services,
        },
        howItWorks: {
          h2: incoming.howItWorks?.h2 ?? defaultHomePageContent.howItWorks.h2,
          paragraph: incoming.howItWorks?.paragraph ?? defaultHomePageContent.howItWorks.paragraph,
          steps: Array.isArray(incoming.howItWorks?.steps) && incoming.howItWorks.steps.length > 0
            ? incoming.howItWorks.steps
            : defaultHomePageContent.howItWorks.steps,
        },
        serviceAreas: {
          h2: incoming.serviceAreas?.h2 ?? defaultHomePageContent.serviceAreas.h2,
          paragraph: incoming.serviceAreas?.paragraph ?? defaultHomePageContent.serviceAreas.paragraph,
        },
        faqs: {
          h2: incoming.faqs?.h2 ?? defaultHomePageContent.faqs.h2,
          paragraph: incoming.faqs?.paragraph ?? defaultHomePageContent.faqs.paragraph,
          items: Array.isArray(incoming.faqs?.items) && incoming.faqs.items.length > 0
            ? incoming.faqs.items
            : defaultHomePageContent.faqs.items,
        },
        buttons: Array.isArray(incoming.buttons) && incoming.buttons.length > 0
          ? incoming.buttons
          : defaultHomePageContent.buttons,
      };
      setPageContent(merged);
    }
    
    setMetaData({
      slug: page.page_slug || '',
      meta_title: page.meta_title,
      meta_description: page.meta_description
    });
    setEditModalOpen(true);
  };

  const handleSavePage = async () => {
    if (!editingPage) return;
    
    try {
      setSaving(true);
      
      const updatedContent = {
        page_slug: metaData.slug === '/' ? '' : metaData.slug || '',
        content: pageContent,
        meta_title: metaData.meta_title,
        meta_description: metaData.meta_description
      };

      console.log('Saving page content:', updatedContent);

      // Check if this is a new page or updating existing
      const isNewPage = !editingPage.id || editingPage.id === 'home-page';
      
      console.log('Is new page:', isNewPage, 'Method:', isNewPage ? 'POST' : 'PUT');
      
      const response = await fetch('/api/admin/pages-content', {
        method: isNewPage ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedContent)
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Page content saved successfully'
        });
        setEditModalOpen(false);
        loadPages();
      } else {
        console.error('Save error:', responseData);
        throw new Error(responseData.error || 'Failed to save');
      }
    } catch (error) {
      console.error('Error saving page:', error);
      toast({
        title: 'Error',
        description: `Failed to save page content: ${error.message}`,
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const addService = () => {
    setPageContent(prev => ({
      ...prev,
      popularServices: {
        ...(prev as HomePageContent).popularServices,
        services: [...(prev as HomePageContent).popularServices.services, {
          id: '',
          name: '',
          description: '',
          icon: 'Settings'
        }]
      }
    }));
  };

  const removeService = (index: number) => {
    setPageContent(prev => ({
      ...prev,
      popularServices: {
        ...(prev as HomePageContent).popularServices,
        services: (prev as HomePageContent).popularServices.services.filter((_, i) => i !== index)
      }
    }));
  };

  const updateService = (index: number, field: string, value: string) => {
    setPageContent(prev => ({
      ...prev,
      popularServices: {
        ...(prev as HomePageContent).popularServices,
        services: (prev as HomePageContent).popularServices.services.map((service, i) => 
          i === index ? { ...service, [field]: value } : service
        )
      }
    }));
  };

  const addFAQ = () => {
    setPageContent(prev => ({
      ...prev,
      faqs: {
        ...(prev as HomePageContent).faqs,
        items: [...(prev as HomePageContent).faqs.items, { question: '', answer: '' }]
      }
    }));
  };

  const removeFAQ = (index: number) => {
    setPageContent(prev => ({
      ...prev,
      faqs: {
        ...(prev as HomePageContent).faqs,
        items: (prev as HomePageContent).faqs.items.filter((_, i) => i !== index)
      }
    }));
  };

  const addButton = () => {
    setPageContent(prev => ({
      ...prev,
      buttons: [...(prev as HomePageContent).buttons, { text: '', url: '' }]
    }));
  };

  const removeButton = (index: number) => {
    setPageContent(prev => ({
      ...prev,
      buttons: (prev as HomePageContent).buttons.filter((_, i) => i !== index)
    }));
  };

  const filteredPages = pages.filter(page =>
    page.page_slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.meta_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ensure category pages appear in list (virtual entries if not yet saved)
  const categoryVirtualPages: PageContent[] = serviceCategories.map(cat => ({
    id: `services-${cat.slug}`,
    page_slug: `services/${cat.slug}`,
    content: { hero: { h1: `${cat.name} in Dubai`, description: `${cat.description} Find trusted professionals across Dubai with verified reviews and instant booking.` } },
    meta_title: `${cat.name} in Dubai | HOMIZON`,
    meta_description: `${cat.description} Find trusted professionals across Dubai with verified reviews and instant booking.`,
    updated_at: new Date().toISOString()
  }));

  // Build service slugs strictly from Supabase (no fallback)
  const activeServiceSlugs = servicesDb.map(s => s.slug);

  // Virtual entries for each individual service detail page (only for active services in Supabase)
  const serviceDetailVirtualPages: PageContent[] = servicesDb.map((svc: any) => ({
    id: `service-page-${svc.slug}`,
    page_slug: `service-page/${svc.slug}`,
    content: {
      hero: { h1: `${svc.name} in Dubai`, description: `${svc.description}. Professional, verified providers.` },
      about: { h2: `About ${svc.name} in Dubai`, paragraph: '' },
      why: { h2: `Why Choose ${svc.name} in Dubai?`, paragraph: '' },
      faqs: { h2: 'Frequently Asked Questions', paragraph: '', items: [] },
      cta: { h2: `Need ${svc.name}? We're Here to Help!`, paragraph: '' }
    },
    meta_title: `${svc.name} in Dubai | HOMIZON`,
    meta_description: `${svc.description || ''}`,
    updated_at: new Date().toISOString()
  }));

  // Ensure Areas page appears in list (virtual entry if not yet saved)
  const areasVirtualPage: PageContent = {
    id: 'areas-page',
    page_slug: 'areas',
    content: {
      hero: { h1: 'Service Areas\nAcross Dubai', description: 'Professional home services available in all major areas of Dubai. Find trusted experts in your neighborhood with fast response times and guaranteed quality.' },
      featured: { h2: 'Featured Areas', paragraph: 'Most popular areas with highest service demand and fastest response times' },
      coverage: { h2: 'Complete Dubai Coverage', paragraph: 'From luxury villas to high-rise apartments, we provide professional home services across all areas of Dubai with our network of verified experts.' },
      emergency: { h2: '24/7 Emergency Services', paragraph: 'Urgent plumbing, electrical, or AC issues? Our emergency response team is available 24/7 across all major areas in Dubai with response times as fast as 1 hour.' }
    },
    meta_title: 'Service Areas across Dubai | HOMIZON',
    meta_description: 'Browse all Dubai service areas and find verified professionals with fast response times.',
    updated_at: new Date().toISOString()
  };

  // Filter out CMS pages for services that are not present in Supabase
  const filteredCmsPages = pages.filter(p => {
    if (!p.page_slug?.startsWith('service-page/')) return true;
    const slug = p.page_slug.replace('service-page/', '');
    return activeServiceSlugs.includes(slug);
  });

  // Build virtual entries for per-location area detail pages
  const areaDetailVirtualPages: PageContent[] = areasList.map(a => ({
    id: `areas-${a.slug}`,
    page_slug: `areas/${a.slug}`,
    content: {
      hero: { h1: `Home Services in\n${a.name}`, description: `${a.description} Connect with {providers} verified professionals with an average rating of 4.8 stars.` },
      providers: { h2: `{ No. of providers } Service Providers in ${a.name}`, paragraph: 'Verified professionals ready to serve you with quality guaranteed' },
      about: { h2: `About Home Services in ${a.name}`, paragraph: `Find professional Home Services services in ${a.name}. Our verified experts provide reliable, high-quality service with transparent pricing and guaranteed satisfaction.` },
      faqs: { h2: 'FAQs', paragraph: '', items: [] },
      cta: { h2: `Need Home Services in ${a.name}? We're Here to Help!`, paragraph: `Get connected with verified service professionals in ${a.name}. Compare quotes, read reviews, and book your service instantly.` }
    },
    meta_title: `Home Services in ${a.name} | HOMIZON`,
    meta_description: `Find trusted home services in ${a.name}, Dubai.`,
    updated_at: new Date().toISOString()
  }));

  const mergedPages = [
    // Always include Areas page first (virtual if missing)
    ...(filteredCmsPages.some(p => p.page_slug === 'areas') ? [] : [areasVirtualPage]),
    // Include per-location area pages if not present in CMS
    ...areaDetailVirtualPages.filter(v => !filteredCmsPages.some(p => p.page_slug === v.page_slug)),
    // Do not include category virtual pages; only show service pages that exist in Supabase
    ...serviceDetailVirtualPages.filter(v => !filteredCmsPages.some(p => p.page_slug === v.page_slug)),
    ...filteredCmsPages.filter(p => {
      // additionally hide any services/{slug} pages not in Supabase
      if (p.page_slug?.startsWith('services/')) {
        const slug = p.page_slug.replace('services/', '');
        return activeServiceSlugs.includes(slug);
      }
      return true;
    })
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Pages Editor</h1>
          <p className="text-white/60 mt-1">Create, edit, and manage all website content</p>
        </div>
        <div className="flex items-center space-x-3" />
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
        <Input
          placeholder="Search pages by title or URL..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
        />
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mergedPages
          .filter(page => page.page_slug.toLowerCase().includes(searchTerm.toLowerCase()) || page.meta_title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((page) => (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg mb-2">
                      {page.meta_title}
                    </CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Published
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-white/60 text-sm">
                  <Globe className="h-4 w-4" />
                  <span>{page.page_slug === '' ? '/' : `/${page.page_slug}`}</span>
                </div>
                
                <p className="text-white/80 text-sm line-clamp-2">
                  {page.meta_description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center space-x-4">
                    <span>Content: {JSON.stringify(page.content).length} chars</span>
                    <span>FAQs: {page.content?.faqs?.items?.length || 0}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>Modified: {new Date(page.updated_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-3 w-3" />
                    <span>0 views</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(page.page_slug === '' ? '/' : `/${page.page_slug}`, '_blank')}
                    className="flex-1 text-white border-white/20 hover:bg-white/10"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditPage(page)}
                    className="flex-1 text-white border-white/20 hover:bg-white/10"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">
              {pageType === 'home' && 'Edit Home Page Content'}
              {pageType === 'services' && 'Edit Services Page Content'}
              {pageType === 'category' && 'Edit Category Page Content'}
              {pageType === 'serviceDetail' && 'Edit Service Page Content'}
            </DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="hero" className="w-full">
            {pageType === 'home' && (
              <TabsList className="grid w-full grid-cols-6 bg-white/10">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="areas">Areas</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
                <TabsTrigger value="meta">Meta SEO</TabsTrigger>
              </TabsList>
            )}
            {pageType === 'services' && (
              <TabsList className="grid w-full grid-cols-4 bg-white/10">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="why-choose">Why Choose Us</TabsTrigger>
                <TabsTrigger value="cta">CTA</TabsTrigger>
                <TabsTrigger value="meta">Meta SEO</TabsTrigger>
              </TabsList>
            )}
            {pageType === 'category' && (
              <TabsList className="grid w-full grid-cols-2 bg-white/10">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="meta">Meta SEO</TabsTrigger>
              </TabsList>
            )}
            {pageType === 'areas' && (
              <TabsList className="grid w-full grid-cols-5 bg-white/10">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="coverage">Coverage</TabsTrigger>
                <TabsTrigger value="emergency">Emergency</TabsTrigger>
                <TabsTrigger value="meta">Meta SEO</TabsTrigger>
              </TabsList>
            )}
            {pageType === 'areaDetail' && (
              <TabsList className="grid w-full grid-cols-5 bg-white/10">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="providers">Providers</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
                <TabsTrigger value="cta">CTA</TabsTrigger>
              </TabsList>
            )}
            {pageType === 'serviceDetail' && (
              <TabsList className="grid w-full grid-cols-6 bg-white/10">
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
                <TabsTrigger value="cta">CTA</TabsTrigger>
                <TabsTrigger value="meta">Meta SEO</TabsTrigger>
              </TabsList>
            )}

            {/* Hero Section - Common for both page types (for services categories we use hero.h1/description) */}
            <TabsContent value="hero" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">H1 Title</Label>
                  <Input
                    value={(pageContent as any).hero?.h1 || ''}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      hero: { ...(prev as any).hero, h1: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Hero Description</Label>
                  <Textarea
                    value={(pageContent as any).hero?.description || ''}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      hero: { ...(prev as any).hero, description: e.target.value }
                    }))}
                    rows={4}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
              </div>
            </TabsContent>
            
            {/* Why Choose Us Section - Services page only */}
            {pageType === 'services' && (
              <TabsContent value="why-choose" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Section H2</Label>
                    <Input
                      value={(pageContent as ServicesPageContent).why_choose.h2}
                      onChange={(e) => setPageContent(prev => ({
                        ...prev,
                        why_choose: { 
                          ...(prev as ServicesPageContent).why_choose, 
                          h2: e.target.value 
                        }
                      }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Section Paragraph</Label>
                    <Textarea
                      value={(pageContent as ServicesPageContent).why_choose.paragraph}
                      onChange={(e) => setPageContent(prev => ({
                        ...prev,
                        why_choose: { 
                          ...(prev as ServicesPageContent).why_choose, 
                          paragraph: e.target.value 
                        }
                      }))}
                      rows={3}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-white text-lg">Features</Label>
                    </div>
                    
                    {(pageContent as ServicesPageContent).why_choose.features.map((feature, index) => (
                      <Card key={index} className="bg-white/5 border-white/20">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-white text-base">Feature {index + 1}</CardTitle>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                const newFeatures = [...(pageContent as ServicesPageContent).why_choose.features];
                                newFeatures.splice(index, 1);
                                setPageContent(prev => ({
                                  ...prev,
                                  why_choose: {
                                    ...(prev as ServicesPageContent).why_choose,
                                    features: newFeatures
                                  }
                                }));
                              }}
                              className="h-8 w-8 text-white/60 hover:text-white hover:bg-white/10"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <Label className="text-white">H3 Title</Label>
                            <Input
                              value={feature.h3}
                              onChange={(e) => {
                                const newFeatures = [...(pageContent as ServicesPageContent).why_choose.features];
                                newFeatures[index] = { ...newFeatures[index], h3: e.target.value };
                                setPageContent(prev => ({
                                  ...prev,
                                  why_choose: {
                                    ...(prev as ServicesPageContent).why_choose,
                                    features: newFeatures
                                  }
                                }));
                              }}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                          <div>
                            <Label className="text-white">Paragraph</Label>
                            <Textarea
                              value={feature.paragraph}
                              onChange={(e) => {
                                const newFeatures = [...(pageContent as ServicesPageContent).why_choose.features];
                                newFeatures[index] = { ...newFeatures[index], paragraph: e.target.value };
                                setPageContent(prev => ({
                                  ...prev,
                                  why_choose: {
                                    ...(prev as ServicesPageContent).why_choose,
                                    features: newFeatures
                                  }
                                }));
                              }}
                              rows={2}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    
                    {(pageContent as ServicesPageContent).why_choose.features.length < 4 && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setPageContent(prev => ({
                            ...prev,
                            why_choose: {
                              ...(prev as ServicesPageContent).why_choose,
                              features: [
                                ...(prev as ServicesPageContent).why_choose.features,
                                { h3: '', paragraph: '' }
                              ]
                            }
                          }));
                        }}
                        className="w-full text-white border-white/20 hover:bg-white/10"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Feature
                      </Button>
                    )}
                  </div>
                </div>
              </TabsContent>
            )}

            {/* Area Detail sections */}
            {pageType === 'areaDetail' && (
              <>
                <TabsContent value="providers" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Providers H2</Label>
                      <Input
                        value={(pageContent as any)?.providers?.h2 || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, providers: { ...(prev as any).providers, h2: e.target.value } }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Providers Paragraph</Label>
                      <Textarea
                        value={(pageContent as any)?.providers?.paragraph || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, providers: { ...(prev as any).providers, paragraph: e.target.value } }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">About H2</Label>
                      <Input
                        value={(pageContent as any)?.about?.h2 || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, about: { ...(prev as any).about, h2: e.target.value } }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">About Paragraph</Label>
                      <Textarea
                        value={(pageContent as any)?.about?.paragraph || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, about: { ...(prev as any).about, paragraph: e.target.value } }))}
                        rows={4}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faqs" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">FAQs H2</Label>
                      <Input
                        value={(pageContent as any)?.faqs?.h2 || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, faqs: { ...(prev as any).faqs, h2: e.target.value } }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">FAQs Paragraph</Label>
                      <Textarea
                        value={(pageContent as any)?.faqs?.paragraph || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, faqs: { ...(prev as any).faqs, paragraph: e.target.value } }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-white">FAQ Items</Label>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-white/20"
                        onClick={() => setPageContent(prev => ({
                          ...prev,
                          faqs: {
                            ...(prev as any).faqs,
                            items: [ ...(((prev as any).faqs?.items) || []), { question: '', answer: '' } ]
                          }
                        }))}
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add FAQ
                      </Button>
                    </div>
                    {(((pageContent as any)?.faqs?.items) || []).map((item: any, i: number) => (
                      <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
                        <div>
                          <Label className="text-white text-sm">Question</Label>
                          <Input
                            value={item.question}
                            onChange={(e) => setPageContent(prev => ({
                              ...prev,
                              faqs: {
                                ...(prev as any).faqs,
                                items: ((prev as any).faqs.items).map((x: any, idx: number) => idx === i ? { ...x, question: e.target.value } : x)
                              }
                            }))}
                            className="bg-white/5 border-white/20 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white text-sm">Answer</Label>
                          <Textarea
                            value={item.answer}
                            onChange={(e) => setPageContent(prev => ({
                              ...prev,
                              faqs: {
                                ...(prev as any).faqs,
                                items: ((prev as any).faqs.items).map((x: any, idx: number) => idx === i ? { ...x, answer: e.target.value } : x)
                              }
                            }))}
                            rows={3}
                            className="bg-white/5 border-white/20 text-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="cta" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">CTA H2</Label>
                      <Input
                        value={(pageContent as any)?.cta?.h2 || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, cta: { ...(prev as any).cta, h2: e.target.value } }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">CTA Paragraph</Label>
                      <Textarea
                        value={(pageContent as any)?.cta?.paragraph || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, cta: { ...(prev as any).cta, paragraph: e.target.value } }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>
              </>
            )}
            
            {/* CTA Section - Services page only */}
            {pageType === 'services' && (
              <TabsContent value="cta" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">CTA H2</Label>
                    <Input
                      value={(pageContent as ServicesPageContent).cta.h2}
                      onChange={(e) => setPageContent(prev => ({
                        ...prev,
                        cta: { 
                          ...(prev as ServicesPageContent).cta, 
                          h2: e.target.value 
                        }
                      }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">CTA Paragraph</Label>
                    <Textarea
                      value={(pageContent as ServicesPageContent).cta.paragraph}
                      onChange={(e) => setPageContent(prev => ({
                        ...prev,
                        cta: { 
                          ...(prev as ServicesPageContent).cta, 
                          paragraph: e.target.value 
                        }
                      }))}
                      rows={3}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>
              </TabsContent>
            )}

            {pageType === 'areas' && (
              <>
                <TabsContent value="featured" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Featured H2</Label>
                      <Input
                        value={(pageContent as any)?.featured?.h2 || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, featured: { ...(prev as any).featured, h2: e.target.value } }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Featured Paragraph</Label>
                      <Textarea
                        value={(pageContent as any)?.featured?.paragraph || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, featured: { ...(prev as any).featured, paragraph: e.target.value } }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="coverage" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Coverage H2</Label>
                      <Input
                        value={(pageContent as any)?.coverage?.h2 || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, coverage: { ...(prev as any).coverage, h2: e.target.value } }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Coverage Paragraph</Label>
                      <Textarea
                        value={(pageContent as any)?.coverage?.paragraph || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, coverage: { ...(prev as any).coverage, paragraph: e.target.value } }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="emergency" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Emergency H2</Label>
                      <Input
                        value={(pageContent as any)?.emergency?.h2 || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, emergency: { ...(prev as any).emergency, h2: e.target.value } }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Emergency Paragraph</Label>
                      <Textarea
                        value={(pageContent as any)?.emergency?.paragraph || ''}
                        onChange={(e)=>setPageContent(prev=>({ ...prev, emergency: { ...(prev as any).emergency, paragraph: e.target.value } }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>
              </>
            )}

            {/* Popular Services Section (Home only) */}
            {pageType === 'home' && (
            <TabsContent value="services" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={(pageContent as HomePageContent).popularServices.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      popularServices: { ...(prev as HomePageContent).popularServices, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={(pageContent as HomePageContent).popularServices.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      popularServices: { ...(prev as HomePageContent).popularServices, paragraph: e.target.value }
                    }))}
                    rows={3}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-white">Services</Label>
                    <Button onClick={addService} size="sm" variant="outline" className="text-white border-white/20">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Service
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {(pageContent as HomePageContent).popularServices.services.map((service, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-medium">Service {index + 1}</span>
                          <Button
                            onClick={() => removeService(index)}
                            size="sm"
                            variant="outline"
                            className="text-red-400 border-red-400/20 hover:bg-red-400/10"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <Label className="text-white text-sm">Service Name</Label>
                            <Input
                              value={service.name}
                              onChange={(e) => updateService(index, 'name', e.target.value)}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                          <div>
                            <Label className="text-white text-sm">Description</Label>
                            <Input
                              value={service.description}
                              onChange={(e) => updateService(index, 'description', e.target.value)}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            )}

            {/* Service Detail Sections */}
            {pageType === 'serviceDetail' && (
              <>
                <TabsContent value="about" className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-white">About H2</Label>
                      <Input
                        value={(pageContent as ServiceDetailPageContent).about.h2}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          about: { ...(prev as ServiceDetailPageContent).about, h2: e.target.value }
                        }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">About Paragraph</Label>
                      <Textarea
                        value={(pageContent as ServiceDetailPageContent).about.paragraph}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          about: { ...(prev as ServiceDetailPageContent).about, paragraph: e.target.value }
                        }))}
                        rows={4}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="why" className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-white">Why Choose H2</Label>
                      <Input
                        value={(pageContent as ServiceDetailPageContent).why.h2}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          why: { ...(prev as ServiceDetailPageContent).why, h2: e.target.value }
                        }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Why Choose Paragraph</Label>
                      <Textarea
                        value={(pageContent as ServiceDetailPageContent).why.paragraph}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          why: { ...(prev as ServiceDetailPageContent).why, paragraph: e.target.value }
                        }))}
                        rows={4}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faqs" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">FAQs H2</Label>
                      <Input
                        value={(pageContent as ServiceDetailPageContent).faqs.h2}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          faqs: { ...(prev as ServiceDetailPageContent).faqs, h2: e.target.value }
                        }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">FAQs Paragraph</Label>
                      <Textarea
                        value={(pageContent as ServiceDetailPageContent).faqs.paragraph}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          faqs: { ...(prev as ServiceDetailPageContent).faqs, paragraph: e.target.value }
                        }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-white">FAQ Items</Label>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-white/20"
                        onClick={() => setPageContent(prev => ({
                          ...prev,
                          faqs: {
                            ...(prev as ServiceDetailPageContent).faqs,
                            items: [ ...(prev as ServiceDetailPageContent).faqs.items, { question: '', answer: '' } ]
                          }
                        }))}
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add FAQ
                      </Button>
                    </div>

                    {(pageContent as ServiceDetailPageContent).faqs.items.map((item, i) => (
                      <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
                        <div>
                          <Label className="text-white text-sm">Question</Label>
                          <Input
                            value={item.question}
                            onChange={(e) => setPageContent(prev => ({
                              ...prev,
                              faqs: {
                                ...(prev as ServiceDetailPageContent).faqs,
                                items: (prev as ServiceDetailPageContent).faqs.items.map((x, idx) => idx === i ? { ...x, question: e.target.value } : x)
                              }
                            }))}
                            className="bg-white/5 border-white/20 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white text-sm">Answer</Label>
                          <Textarea
                            value={item.answer}
                            onChange={(e) => setPageContent(prev => ({
                              ...prev,
                              faqs: {
                                ...(prev as ServiceDetailPageContent).faqs,
                                items: (prev as ServiceDetailPageContent).faqs.items.map((x, idx) => idx === i ? { ...x, answer: e.target.value } : x)
                              }
                            }))}
                            rows={2}
                            className="bg-white/5 border-white/20 text-white"
                          />
                        </div>
                        <div className="text-right">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-400 border-red-400/20 hover:bg-red-400/10"
                            onClick={() => setPageContent(prev => ({
                              ...prev,
                              faqs: {
                                ...(prev as ServiceDetailPageContent).faqs,
                                items: (prev as ServiceDetailPageContent).faqs.items.filter((_, idx) => idx !== i)
                              }
                            }))}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="cta" className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-white">CTA H2</Label>
                      <Input
                        value={(pageContent as ServiceDetailPageContent).cta.h2}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          cta: { ...(prev as ServiceDetailPageContent).cta, h2: e.target.value }
                        }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">CTA Paragraph</Label>
                      <Textarea
                        value={(pageContent as ServiceDetailPageContent).cta.paragraph}
                        onChange={(e) => setPageContent(prev => ({
                          ...prev,
                          cta: { ...(prev as ServiceDetailPageContent).cta, paragraph: e.target.value }
                        }))}
                        rows={3}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                  </div>
                </TabsContent>
              </>
            )}

            {/* How It Works Section (Home only) */}
            {pageType === 'home' && (
            <TabsContent value="how-it-works" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={(pageContent as HomePageContent).howItWorks.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      howItWorks: { ...(prev as HomePageContent).howItWorks, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={(pageContent as HomePageContent).howItWorks.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      howItWorks: { ...(prev as HomePageContent).howItWorks, paragraph: e.target.value }
                    }))}
                    rows={3}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <Label className="text-white">Steps</Label>
                  <div className="space-y-3">
                    {(pageContent as HomePageContent).howItWorks.steps.map((step, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <Label className="text-white text-sm">Step {index + 1} Title</Label>
                            <Input
                              value={step.h3}
                              onChange={(e) => setPageContent(prev => ({
                                ...prev,
                                howItWorks: {
                                  ...(prev as HomePageContent).howItWorks,
                                  steps: (prev as HomePageContent).howItWorks.steps.map((s, i) => 
                                    i === index ? { ...s, h3: e.target.value } : s
                                  )
                                }
                              }))}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                          <div>
                            <Label className="text-white text-sm">Step {index + 1} Description</Label>
                            <Textarea
                              value={step.paragraph}
                              onChange={(e) => setPageContent(prev => ({
                                ...prev,
                                howItWorks: {
                                  ...(prev as HomePageContent).howItWorks,
                                  steps: (prev as HomePageContent).howItWorks.steps.map((s, i) => 
                                    i === index ? { ...s, paragraph: e.target.value } : s
                                  )
                                }
                              }))}
                              rows={2}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            )}

            {/* Service Areas Section (Home only) */}
            {pageType === 'home' && (
            <TabsContent value="areas" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={(pageContent as HomePageContent).serviceAreas.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      serviceAreas: { ...(prev as HomePageContent).serviceAreas, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={(pageContent as HomePageContent).serviceAreas.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      serviceAreas: { ...(prev as HomePageContent).serviceAreas, paragraph: e.target.value }
                    }))}
                    rows={4}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
              </div>
            </TabsContent>
            )}

            {/* FAQs Section (Home only) */}
            {pageType === 'home' && (
            <TabsContent value="faqs" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={(pageContent as HomePageContent).faqs.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      faqs: { ...(prev as HomePageContent).faqs, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={(pageContent as HomePageContent).faqs.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      faqs: { ...(prev as HomePageContent).faqs, paragraph: e.target.value }
                    }))}
                    rows={3}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-white">FAQ Items</Label>
                    <Button onClick={addFAQ} size="sm" variant="outline" className="text-white border-white/20">
                      <Plus className="h-4 w-4 mr-2" />
                      Add FAQ
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {(pageContent as HomePageContent).faqs.items.map((faq, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-medium">FAQ {index + 1}</span>
                          <Button
                            onClick={() => removeFAQ(index)}
                            size="sm"
                            variant="outline"
                            className="text-red-400 border-red-400/20 hover:bg-red-400/10"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <Label className="text-white text-sm">Question</Label>
                            <Input
                              value={faq.question}
                              onChange={(e) => setPageContent(prev => ({
                                ...prev,
                                faqs: {
                                  ...(prev as HomePageContent).faqs,
                                  items: (prev as HomePageContent).faqs.items.map((item, i) => 
                                    i === index ? { ...item, question: e.target.value } : item
                                  )
                                }
                              }))}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                          <div>
                            <Label className="text-white text-sm">Answer</Label>
                            <Textarea
                              value={faq.answer}
                              onChange={(e) => setPageContent(prev => ({
                                ...prev,
                                faqs: {
                                  ...(prev as HomePageContent).faqs,
                                  items: (prev as HomePageContent).faqs.items.map((item, i) => 
                                    i === index ? { ...item, answer: e.target.value } : item
                                  )
                                }
                              }))}
                              rows={3}
                              className="bg-white/5 border-white/20 text-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            )}

            {/* Meta SEO Section */}
            <TabsContent value="meta" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Page URL Slug</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60">/</span>
                    <Input
                      value={metaData.slug}
                      onChange={(e) => setMetaData(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="e.g., services, services/ac-repair-cleaning (leave empty for home page)"
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <p className="text-xs text-white/60 mt-1">
                    {pageType === 'home' ? 'Leave empty for home page (/)' : `Current: /${metaData.slug || (editingPage?.page_slug || '')}`}
                  </p>
                </div>
                <div>
                  <Label className="text-white">Meta Title</Label>
                  <Input
                    value={metaData.meta_title}
                    onChange={(e) => setMetaData(prev => ({ ...prev, meta_title: e.target.value }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                  <p className="text-xs text-white/60 mt-1">Recommended: 50-60 characters</p>
                </div>
                <div>
                  <Label className="text-white">Meta Description</Label>
                  <Textarea
                    value={metaData.meta_description}
                    onChange={(e) => setMetaData(prev => ({ ...prev, meta_description: e.target.value }))}
                    rows={4}
                    className="bg-white/5 border-white/20 text-white"
                  />
                  <p className="text-xs text-white/60 mt-1">Recommended: 150-160 characters</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Modal Footer */}
          <div className="flex items-center justify-end space-x-3 pt-6 border-t border-white/10">
            <Button
              variant="outline"
              onClick={() => setEditModalOpen(false)}
              className="text-white border-white/20 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSavePage}
              disabled={saving || !pageContent.hero.h1 || !metaData.meta_title}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
