"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Plus, Eye, Edit, RotateCcw, Search, 
  Globe, Calendar, BarChart3, Settings, Save, X
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
import { services, serviceCategories } from '@/lib/data';
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

export default function PagesEditor() {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingPage, setEditingPage] = useState<PageContent | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pageContent, setPageContent] = useState<HomePageContent>(defaultHomePageContent);
  const [metaData, setMetaData] = useState({
    slug: '',
    meta_title: "HOMIZON - Dubai's Premier Home Services Platform",
    meta_description: "Connect with verified home service providers across Dubai. Get instant quotes for AC repair, cleaning, plumbing, electrical work, pest control & handyman services."
  });
  const { toast } = useToast();

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/pages-content');
      const data = await response.json();
      
      if (data.data) {
        setPages(data.data);
      } else {
        // Initialize with default home page if no data exists
        const defaultPage: PageContent = {
          id: 'home-page',
          page_slug: '',
          content: defaultHomePageContent,
          meta_title: metaData.meta_title,
          meta_description: metaData.meta_description,
          updated_at: new Date().toISOString()
        };
        setPages([defaultPage]);
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
    setPageContent(page.content || defaultHomePageContent);
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
        ...prev.popularServices,
        services: [...prev.popularServices.services, {
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
        ...prev.popularServices,
        services: prev.popularServices.services.filter((_, i) => i !== index)
      }
    }));
  };

  const updateService = (index: number, field: string, value: string) => {
    setPageContent(prev => ({
      ...prev,
      popularServices: {
        ...prev.popularServices,
        services: prev.popularServices.services.map((service, i) => 
          i === index ? { ...service, [field]: value } : service
        )
      }
    }));
  };

  const addFAQ = () => {
    setPageContent(prev => ({
      ...prev,
      faqs: {
        ...prev.faqs,
        items: [...prev.faqs.items, { question: '', answer: '' }]
      }
    }));
  };

  const removeFAQ = (index: number) => {
    setPageContent(prev => ({
      ...prev,
      faqs: {
        ...prev.faqs,
        items: prev.faqs.items.filter((_, i) => i !== index)
      }
    }));
  };

  const addButton = () => {
    setPageContent(prev => ({
      ...prev,
      buttons: [...prev.buttons, { text: '', url: '' }]
    }));
  };

  const removeButton = (index: number) => {
    setPageContent(prev => ({
      ...prev,
      buttons: prev.buttons.filter((_, i) => i !== index)
    }));
  };

  const filteredPages = pages.filter(page =>
    page.page_slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.meta_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            onClick={loadPages}
            className="text-white border-white/20 hover:bg-white/10"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button
            variant="outline"
            onClick={async () => {
              try {
                const response = await fetch('/api/admin/pages-content');
                const data = await response.json();
                console.log('API Test - All pages:', data);
                toast({
                  title: 'API Test',
                  description: `Found ${data.data?.length || 0} pages`,
                });
              } catch (error) {
                console.error('API Test Error:', error);
                toast({
                  title: 'API Test Error',
                  description: 'Check console for details',
                  variant: 'destructive'
                });
              }
            }}
            className="text-white border-white/20 hover:bg-white/10"
          >
            Test API
          </Button>
          <Button
            variant="outline"
            onClick={async () => {
              try {
                const response = await fetch('/api/test-supabase-connection');
                const data = await response.json();
                console.log('Supabase Connection Test:', data);
                toast({
                  title: data.success ? 'Supabase Connected' : 'Supabase Error',
                  description: data.message || data.error,
                  variant: data.success ? 'default' : 'destructive'
                });
              } catch (error) {
                console.error('Supabase Test Error:', error);
                toast({
                  title: 'Supabase Test Error',
                  description: 'Check console for details',
                  variant: 'destructive'
                });
              }
            }}
            className="text-white border-white/20 hover:bg-white/10"
          >
            Test Supabase
          </Button>
          <Button
            variant="outline"
            onClick={async () => {
              try {
                const response = await fetch('/api/admin/pages-content');
                const data = await response.json();
                console.log('All pages before cleanup:', data);
                
                // Find duplicate home pages
                const homePages = data.data?.filter((page: any) => 
                  page.page_slug === '' || page.page_slug === '/' || page.page_slug === null
                ) || [];
                
                console.log('Found home pages:', homePages);
                
                if (homePages.length > 1) {
                  toast({
                    title: 'Duplicate Home Pages Found',
                    description: `Found ${homePages.length} home page records. Please run the cleanup SQL script.`,
                    variant: 'destructive'
                  });
                } else {
                  toast({
                    title: 'No Duplicates',
                    description: 'Only one home page record found.',
                  });
                }
              } catch (error) {
                console.error('Cleanup Check Error:', error);
                toast({
                  title: 'Cleanup Check Error',
                  description: 'Check console for details',
                  variant: 'destructive'
                });
              }
            }}
            className="text-white border-white/20 hover:bg-white/10"
          >
            Check Duplicates
          </Button>
        </div>
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
        {filteredPages.map((page) => (
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
            <DialogTitle className="text-white text-xl">Edit Page Content</DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="hero" className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-white/10">
              <TabsTrigger value="hero">Hero</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
              <TabsTrigger value="areas">Areas</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="meta">Meta SEO</TabsTrigger>
            </TabsList>

            {/* Hero Section */}
            <TabsContent value="hero" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">H1 Title</Label>
                  <Input
                    value={pageContent.hero.h1}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      hero: { ...prev.hero, h1: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Hero Description</Label>
                  <Textarea
                    value={pageContent.hero.description}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      hero: { ...prev.hero, description: e.target.value }
                    }))}
                    rows={4}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Popular Services Section */}
            <TabsContent value="services" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={pageContent.popularServices.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      popularServices: { ...prev.popularServices, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={pageContent.popularServices.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      popularServices: { ...prev.popularServices, paragraph: e.target.value }
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
                    {pageContent.popularServices.services.map((service, index) => (
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

            {/* How It Works Section */}
            <TabsContent value="how-it-works" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={pageContent.howItWorks.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      howItWorks: { ...prev.howItWorks, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={pageContent.howItWorks.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      howItWorks: { ...prev.howItWorks, paragraph: e.target.value }
                    }))}
                    rows={3}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <Label className="text-white">Steps</Label>
                  <div className="space-y-3">
                    {pageContent.howItWorks.steps.map((step, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <Label className="text-white text-sm">Step {index + 1} Title</Label>
                            <Input
                              value={step.h3}
                              onChange={(e) => setPageContent(prev => ({
                                ...prev,
                                howItWorks: {
                                  ...prev.howItWorks,
                                  steps: prev.howItWorks.steps.map((s, i) => 
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
                                  ...prev.howItWorks,
                                  steps: prev.howItWorks.steps.map((s, i) => 
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

            {/* Service Areas Section */}
            <TabsContent value="areas" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={pageContent.serviceAreas.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      serviceAreas: { ...prev.serviceAreas, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={pageContent.serviceAreas.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      serviceAreas: { ...prev.serviceAreas, paragraph: e.target.value }
                    }))}
                    rows={4}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
              </div>
            </TabsContent>

            {/* FAQs Section */}
            <TabsContent value="faqs" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Section H2</Label>
                  <Input
                    value={pageContent.faqs.h2}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      faqs: { ...prev.faqs, h2: e.target.value }
                    }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Section Paragraph</Label>
                  <Textarea
                    value={pageContent.faqs.paragraph}
                    onChange={(e) => setPageContent(prev => ({
                      ...prev,
                      faqs: { ...prev.faqs, paragraph: e.target.value }
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
                    {pageContent.faqs.items.map((faq, index) => (
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
                                  ...prev.faqs,
                                  items: prev.faqs.items.map((item, i) => 
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
                                  ...prev.faqs,
                                  items: prev.faqs.items.map((item, i) => 
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

            {/* Meta SEO Section */}
            <TabsContent value="meta" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Page Slug</Label>
                  <Input
                    value={metaData.slug}
                    onChange={(e) => setMetaData(prev => ({ ...prev, slug: e.target.value }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Meta Title</Label>
                  <Input
                    value={metaData.meta_title}
                    onChange={(e) => setMetaData(prev => ({ ...prev, meta_title: e.target.value }))}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Meta Description</Label>
                  <Textarea
                    value={metaData.meta_description}
                    onChange={(e) => setMetaData(prev => ({ ...prev, meta_description: e.target.value }))}
                    rows={4}
                    className="bg-white/5 border-white/20 text-white"
                  />
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
