'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import CreatePageModal from '@/components/create-page-modal';
import { 
  Globe, Eye, Edit, Plus, Search, Save, X, RefreshCw, 
  ExternalLink, CheckCircle, Clock, AlertTriangle, FileText, 
  Calendar, TrendingUp 
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
  service?: string;
  area?: string;
  status: 'published' | 'draft' | 'archived';
  lastModified: string;
  modifiedBy: string;
  views: number;
  hasImage: boolean;
  faqCount: number;
  customContent?: string;
  customFAQs?: Array<{ question: string; answer: string }>;
  seoKeywords?: string;
  headerImage?: string;
}

export default function PagesManagement() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<PageData | null>(null);
  const [isSaving, setIsSaving] = useState(false);

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
        console.error('Failed to load pages, using fallback data');
        setPages([
          {
            id: 'test-page-1',
            title: 'AC Repair in Dubai Marina',
            metaTitle: 'AC Repair in Dubai Marina | HOMIZON',
            metaDescription: 'Professional AC repair services in Dubai Marina with verified experts.',
            url: '/ac-repair/dubai-marina',
            type: 'service-area',
            service: 'ac-repair',
            area: 'dubai-marina',
            status: 'published',
            lastModified: '2024-01-15',
            modifiedBy: 'System',
            views: 1200,
            hasImage: true,
            faqCount: 4,
            customContent: 'Professional AC repair services in Dubai Marina - your trusted local experts.',
            customFAQs: [
              { question: 'How much does AC repair cost?', answer: 'AC repair costs vary depending on the issue.' },
              { question: 'Do you provide warranty?', answer: 'Yes, we provide warranty on all services.' }
            ]
          }
        ]);
      }
    } catch (error) {
      console.error('Error loading pages:', error);
      setPages([]);
    } finally {
      setLoading(false);
    }
  };

  const handlePageCreated = () => {
    console.log('Page created successfully, refreshing list...');
    loadPages();
  };

  const savePage = async (pageData: PageData) => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/admin/pages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update', pageData })
      });

      if (response.ok) {
        toast({
          title: "Page Updated Successfully",
          description: `The page "${pageData.title}" has been updated and published.`,
          duration: 5000,
        });
        setIsEditModalOpen(false);
        setEditingPage(null);
        loadPages();
      } else {
        throw new Error('Failed to update page');
      }
    } catch (error) {
      console.error('Error saving page:', error);
      toast({
        title: "Save Failed",
        description: "There was an error saving the page. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditPage = (page: PageData) => {
    setEditingPage(page);
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    loadPages();
  }, []);

  const filteredPages = pages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'draft': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'archived': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-8">
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading pages...</p>
          </div>
        </div>
      )}

      {!loading && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Pages Management</h1>
              <p className="text-white/60 mt-2">Create, edit, and manage all website pages</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={loadPages}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Page
              </Button>
            </div>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                  <Input
                    placeholder="Search pages by title or URL..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredPages.map((page, index) => (
                  <div
                    key={page.id}
                    className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold text-white">{page.title}</h3>
                          <Badge className={getStatusColor(page.status)}>
                            {page.status}
                          </Badge>
                          {page.type === 'service-area' && (
                            <Badge className="bg-blue-500/20 text-blue-400">
                              Service Page
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-white/70">
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4" />
                            <span>{page.url}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>Modified: {page.lastModified}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4" />
                            <span>{page.views} views</span>
                          </div>
                        </div>

                        <p className="text-white/60 text-sm mb-3 line-clamp-2">
                          {page.metaDescription}
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-white/50">
                          <span>Content: {page.customContent?.split(' ').length || 0} words</span>
                          <span>FAQs: {page.faqCount}</span>
                          <span>Modified by: {page.modifiedBy}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-white border-white/20 hover:bg-white/10"
                          asChild
                        >
                          <Link href={page.url} target="_blank">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Link>
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-white border-white/20 hover:bg-white/10"
                          onClick={() => handleEditPage(page)}
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
                  <FileText className="h-12 w-12 text-white/30 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No pages found</h3>
                  <p className="text-white/60 mb-4">
                    {searchTerm ? 'Try adjusting your search criteria' : 'Start by creating your first page'}
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-purple-500"
                    onClick={() => setIsCreateModalOpen(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Page
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
            <DialogContent className="max-w-4xl bg-neutral-900 border-white/10 text-white max-h-[90vh] flex flex-col">
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="text-2xl font-bold">Edit Page</DialogTitle>
                <DialogDescription className="text-white/60">
                  Edit page content, SEO settings, and FAQs
                </DialogDescription>
              </DialogHeader>
              
              {editingPage && (
                <div className="flex-1 overflow-hidden flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-6 pr-2">
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
                      <Label htmlFor="customContent" className="text-white font-medium">Page Content</Label>
                      <Textarea
                        id="customContent"
                        value={editingPage.customContent || ''}
                        onChange={(e) => setEditingPage({ ...editingPage, customContent: e.target.value })}
                        className="mt-2 bg-white/10 border-white/20 text-white min-h-[200px]"
                        placeholder="Enter the main content for this page..."
                      />
                    </div>

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
                  </div>
                  
                  <div className="flex-shrink-0 bg-neutral-900 border-t border-white/10 p-6 mt-6">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-white/60">
                        <span>Ready to save changes</span>
                      </div>
                      <div className="flex space-x-3">
                        <Button 
                          variant="outline" 
                          className="text-white border-white/20" 
                          onClick={() => setIsEditModalOpen(false)}
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
                </div>
              )}
            </DialogContent>
          </Dialog>

          <CreatePageModal
            open={isCreateModalOpen}
            onOpenChange={setIsCreateModalOpen}
            onPageCreated={handlePageCreated}
          />
        </>
      )}
    </div>
  );
}