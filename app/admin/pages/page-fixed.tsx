'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { 
  Globe, Eye, Edit, Settings, MoreHorizontal, Plus, Search, Save, X,
  RefreshCw, ExternalLink, CheckCircle, Clock, AlertTriangle, FileText, 
  Calendar, Image, Upload, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { services, areas } from '@/lib/data';

interface PageData {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  url: string;
  type: string;
  category?: string;
  service?: string;
  area?: string;
  subarea?: string;
  status: string;
  lastModified: string;
  modifiedBy: string;
  views: number;
  hasImage: boolean;
  faqCount: number;
  customContent?: string;
  customHeading?: string;
  headerImage?: string;
  seoKeywords?: string;
  customFAQs?: Array<{ question: string; answer: string; }>;
  pricing?: any;
}

export default function AdminPagesFixed() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<PageData | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      setLoading(true);
      console.log('Loading pages from API...');
      
      const response = await fetch('/api/admin/pages?_t=' + Date.now());
      if (response.ok) {
        const data = await response.json();
        console.log('Loaded pages:', data.pages?.length || 0);
        setPages(data.pages || []);
      } else {
        console.error('Failed to load pages');
        setPages([]);
      }
    } catch (error) {
      console.error('Error loading pages:', error);
      setPages([]);
    } finally {
      setLoading(false);
    }
  };

  // Fixed content loading when editing starts
  const handleEdit = async (page: PageData) => {
    console.log('Loading page for editing:', page.id);
    
    try {
      // Try to fetch existing content from API
      const response = await fetch(`/api/admin/pages/${page.id}?_t=${Date.now()}`);
      if (response.ok) {
        const existingData = await response.json();
        console.log('Loaded existing page data:', {
          contentLength: existingData.customContent?.length || 0,
          faqCount: existingData.customFAQs?.length || 0
        });
        setEditingPage({ 
          ...page, 
          ...existingData,
          // Ensure we have the basic page structure
          customContent: existingData.customContent || page.customContent || '',
          customFAQs: existingData.customFAQs || page.customFAQs || [],
          customHeading: existingData.customHeading || page.customHeading || ''
        });
      } else {
        console.log('No existing data found, using page defaults');
        setEditingPage({ ...page });
      }
    } catch (error) {
      console.error('Error loading page data:', error);
      setEditingPage({ ...page });
    }
    
    setIsEditModalOpen(true);
  };

  // Fixed save functionality
  const savePage = async (pageData: PageData) => {
    setIsSaving(true);
    
    try {
      console.log('Saving page data:', {
        id: pageData.id,
        title: pageData.title,
        contentLength: pageData.customContent?.length || 0,
        faqCount: pageData.customFAQs?.length || 0,
        status: pageData.status
      });

      const response = await fetch('/api/admin/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'update',
          pageData: {
            ...pageData,
            lastModified: new Date().toISOString().split('T')[0],
            modifiedBy: 'Super Admin'
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to save page: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Save successful:', result);
      
      // Update the pages state with the saved data
      setPages(prevPages => 
        prevPages.map(page => 
          page.id === pageData.id 
            ? { 
                ...pageData, 
                lastModified: new Date().toISOString().split('T')[0], 
                modifiedBy: 'Super Admin' 
              }
            : page
        )
      );
      
      // Show success notification
      toast({
        title: "✅ Page Saved Successfully!",
        description: `"${pageData.title}" has been updated and is now live on the website.`,
        duration: 5000,
      });
      
      // Close modal
      setIsEditModalOpen(false);
      setEditingPage(null);

    } catch (error) {
      console.error('Error saving page:', error);
      
      toast({
        title: "❌ Save Failed",
        description: error instanceof Error ? error.message : 'Failed to save page changes.',
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading pages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Pages & Content Management</h1>
          <p className="text-white/60 mt-2">Create and manage service-area pages with SEO-optimized content</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Page
        </Button>
      </div>

      {/* Search */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
            <Input
              placeholder="Search pages by title or URL..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Pages List */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
        <CardHeader>
          <CardTitle className="text-white">All Pages ({filteredPages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPages.map((page) => (
              <div
                key={page.id}
                className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white truncate">{page.title}</h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {page.status}
                      </Badge>
                    </div>
                    
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">{page.metaDescription}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-white/50">
                      <div className="flex items-center space-x-1">
                        <Globe className="h-4 w-4" />
                        <span className="font-mono">{page.url}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{page.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Modified {page.lastModified} by {page.modifiedBy}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2 ml-4">
                    <Link href={page.url} target="_blank">
                      <Button variant="outline" size="sm" className="text-gray-900 border-white/20 hover:bg-white/10">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-gray-900 border-white/20 hover:bg-white/10"
                      onClick={() => handleEdit(page)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPages.length === 0 && (
            <div className="text-center py-12">
              <Globe className="h-12 w-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No pages found</h3>
              <p className="text-white/60">Try adjusting your search criteria</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Fixed Edit Modal with Proper Scrolling */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[90vh] bg-neutral-900 border-white/10 text-white flex flex-col p-0">
          <DialogHeader className="flex-shrink-0 p-6 border-b border-white/10">
            <DialogTitle className="text-2xl font-bold">Edit Page Content</DialogTitle>
            <DialogDescription className="text-white/60">
              Update page content that will appear on the live website. Changes will be reflected immediately.
            </DialogDescription>
          </DialogHeader>
          
          {editingPage && (
            <div className="flex-1 min-h-0 flex flex-col">
              <Tabs defaultValue="content" className="w-full h-full flex flex-col">
                <TabsList className="grid w-full grid-cols-4 bg-white/10 flex-shrink-0 mx-6 mt-4">
                  <TabsTrigger value="content" className="text-white">Content</TabsTrigger>
                  <TabsTrigger value="seo" className="text-white">SEO</TabsTrigger>
                  <TabsTrigger value="images" className="text-white">Images</TabsTrigger>
                  <TabsTrigger value="advanced" className="text-white">Advanced</TabsTrigger>
                </TabsList>
                
                {/* Scrollable Content Area - FIXED */}
                <div className="flex-1 min-h-0 px-6 py-4">
                  <div className="h-full overflow-y-auto">
                    <TabsContent value="content" className="space-y-6 m-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title" className="text-white font-medium">Page Title</Label>
                          <Input
                            id="title"
                            value={editingPage.title || ''}
                            onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
                            className="mt-2 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="status" className="text-white font-medium">Status</Label>
                          <Select value={editingPage.status || 'draft'} onValueChange={(value) => setEditingPage({ ...editingPage, status: value as any })}>
                            <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900 border-white/20">
                              <SelectItem value="published" className="text-white">Published</SelectItem>
                              <SelectItem value="draft" className="text-white">Draft</SelectItem>
                              <SelectItem value="needs-review" className="text-white">Needs Review</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="customContent" className="text-white font-medium">Page Content</Label>
                        <Textarea
                          id="customContent"
                          value={editingPage.customContent || ''}
                          onChange={(e) => setEditingPage({ ...editingPage, customContent: e.target.value })}
                          className="mt-2 bg-white/10 border-white/20 text-white min-h-[200px]"
                          placeholder="Enter the main content for this page..."
                        />
                        <div className="mt-2 text-sm text-white/50">
                          Words: {(editingPage.customContent || '').split(' ').filter(w => w.length > 0).length}
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-white font-medium">FAQs ({(editingPage.customFAQs || []).length})</Label>
                        <div className="space-y-4 mt-2 max-h-96 overflow-y-auto">
                          {(editingPage.customFAQs || []).map((faq: any, index: number) => (
                            <div key={index} className="p-4 bg-white/10 rounded-lg border border-white/10">
                              <div className="flex justify-between items-start mb-3">
                                <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded">FAQ #{index + 1}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    const newFAQs = (editingPage.customFAQs || []).filter((_, i) => i !== index);
                                    setEditingPage({ ...editingPage, customFAQs: newFAQs });
                                  }}
                                  className="text-red-400 border-red-400/20 hover:bg-red-400/10 h-7 w-7 p-0"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                              <div className="space-y-3">
                                <div>
                                  <Label className="text-white/80 text-xs mb-1 block">Question</Label>
                                  <Input
                                    placeholder="Enter the FAQ question"
                                    value={faq.question || ''}
                                    onChange={(e) => {
                                      const newFAQs = [...(editingPage.customFAQs || [])];
                                      newFAQs[index] = { ...newFAQs[index], question: e.target.value };
                                      setEditingPage({ ...editingPage, customFAQs: newFAQs });
                                    }}
                                    className="bg-white/10 border-white/20 text-white"
                                  />
                                </div>
                                <div>
                                  <Label className="text-white/80 text-xs mb-1 block">Answer</Label>
                                  <Textarea
                                    placeholder="Enter the FAQ answer"
                                    value={faq.answer || ''}
                                    onChange={(e) => {
                                      const newFAQs = [...(editingPage.customFAQs || [])];
                                      newFAQs[index] = { ...newFAQs[index], answer: e.target.value };
                                      setEditingPage({ ...editingPage, customFAQs: newFAQs });
                                    }}
                                    className="bg-white/10 border-white/20 text-white"
                                    rows={3}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <Button
                          variant="outline"
                          onClick={() => {
                            const newFAQs = [...(editingPage.customFAQs || []), { question: '', answer: '' }];
                            setEditingPage({ ...editingPage, customFAQs: newFAQs });
                          }}
                          className="mt-4 text-green-400 border-green-400/20 hover:bg-green-400/10"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add FAQ
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="seo" className="space-y-4 m-0">
                      <div>
                        <Label htmlFor="metaTitle" className="text-white font-medium">Meta Title</Label>
                        <Input
                          id="metaTitle"
                          value={editingPage.metaTitle || ''}
                          onChange={(e) => setEditingPage({ ...editingPage, metaTitle: e.target.value })}
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="metaDescription" className="text-white font-medium">Meta Description</Label>
                        <Textarea
                          id="metaDescription"
                          value={editingPage.metaDescription || ''}
                          onChange={(e) => setEditingPage({ ...editingPage, metaDescription: e.target.value })}
                          className="mt-2 bg-white/10 border-white/20 text-white"
                          rows={3}
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="images" className="space-y-4 m-0">
                      <div>
                        <Label htmlFor="headerImage" className="text-white font-medium">Header Image URL</Label>
                        <Input
                          id="headerImage"
                          value={editingPage.headerImage || ''}
                          onChange={(e) => setEditingPage({ ...editingPage, headerImage: e.target.value })}
                          className="mt-2 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="advanced" className="space-y-4 m-0">
                      <div>
                        <Label className="text-white font-medium">URL Path</Label>
                        <Input
                          value={editingPage.url || ''}
                          className="mt-2 bg-white/10 border-white/20 text-white"
                          disabled
                        />
                      </div>
                    </TabsContent>
                  </div>
                </div>
                
                {/* Fixed Save Buttons - Always Visible */}
                <div className="flex-shrink-0 bg-neutral-900 border-t border-white/10 p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <span>Content: {(editingPage.customContent || '').split(' ').filter(w => w.length > 0).length} words</span>
                      <span>FAQs: {(editingPage.customFAQs || []).length}</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        className="text-white border-white/20" 
                        onClick={() => {
                          setIsEditModalOpen(false);
                          setEditingPage(null);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={() => editingPage && savePage(editingPage)} 
                        disabled={isSaving}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white min-w-[120px]"
                      >
                        {isSaving ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Saving...</span>
                          </div>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Save & Publish
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}