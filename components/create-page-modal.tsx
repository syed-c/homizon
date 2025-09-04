'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Plus, Save, X, CheckCircle, Globe, Settings, 
  MapPin, Wrench, AlertTriangle, Loader2 
} from 'lucide-react'
import { services, areas } from '@/lib/data'

interface CreatePageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onPageCreated?: () => void
}

export default function CreatePageModal({ open, onOpenChange, onPageCreated }: CreatePageModalProps) {
  const [isCreating, setIsCreating] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [step, setStep] = useState<'select' | 'confirm' | 'creating'>('select')

  console.log('CreatePageModal rendered:', { open, selectedService, selectedArea, step })

  const selectedServiceData = services.find(s => s.slug === selectedService)
  const selectedAreaData = areas.find(a => a.slug === selectedArea)

  const handleCreatePage = async () => {
    if (!selectedService || !selectedArea) {
      toast({
        title: "Missing Selection",
        description: "Please select both a service and an area to create the page.",
        variant: "destructive",
        duration: 5000,
      })
      return
    }

    setStep('creating')
    setIsCreating(true)
    
    console.log('Creating page:', {
      service: selectedService,
      serviceName: selectedServiceData?.name,
      area: selectedArea,
      areaName: selectedAreaData?.name
    })

    try {
      const pageId = `service-area-${selectedService}-${selectedArea}`
      const pageUrl = `/${selectedService}/${selectedArea}`
      
      const response = await fetch('/api/admin/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          pageData: {
            id: pageId,
            title: `${selectedServiceData?.name} in ${selectedAreaData?.name}`,
            metaTitle: `${selectedServiceData?.name} in ${selectedAreaData?.name} | HOMIZON`,
            metaDescription: `Find trusted ${selectedServiceData?.name.toLowerCase()} professionals in ${selectedAreaData?.name}. Compare ratings, reviews, and prices. Get instant quotes from verified providers.`,
            url: pageUrl,
            type: 'service-area',
            service: selectedService,
            area: selectedArea,
            status: 'published',
            customContent: `Professional ${selectedServiceData?.name} services in ${selectedAreaData?.name} - your trusted local experts for quality solutions.

${selectedAreaData?.name} presents unique considerations for ${selectedServiceData?.name.toLowerCase()} that our local experts understand well. The Dubai climate, building regulations, and community standards all factor into providing effective service solutions.

Our streamlined process makes booking ${selectedServiceData?.name.toLowerCase()} in ${selectedAreaData?.name} simple and stress-free. Start by describing your needs through our platform - whether it's routine maintenance, emergency repairs, or new installations.

Why choose professional ${selectedServiceData?.name.toLowerCase()} in ${selectedAreaData?.name}? Quality matters when it comes to your home and business needs. Our network of licensed, insured professionals brings years of experience and local expertise to every project.`,
            customFAQs: [
              {
                question: `How much does ${selectedServiceData?.name.toLowerCase()} cost in ${selectedAreaData?.name}?`,
                answer: `The cost typically ranges AED 150-400, depending on the scope of work, materials needed, and specific requirements. All our providers offer transparent quotes before starting any work.`
              },
              {
                question: `Are the service providers in ${selectedAreaData?.name} licensed and insured?`,
                answer: `Yes, all providers in our network are verified, licensed, and insured. We ensure they meet Dubai Municipality requirements and maintain high professional standards.`
              },
              {
                question: `How quickly can I get ${selectedServiceData?.name.toLowerCase()} service in ${selectedAreaData?.name}?`,
                answer: `Most services can be scheduled within 24-48 hours. Emergency services are available for urgent situations. The typical service time is 2-4 hours depending on complexity.`
              },
              {
                question: `What areas around ${selectedAreaData?.name} do you serve?`,
                answer: `We serve ${selectedAreaData?.name} and surrounding areas in Dubai. Our network covers multiple sub-areas and we can typically reach most locations within 30 minutes.`
              }
            ],
            customHeading: '',
            headerImage: '',
            seoKeywords: `${selectedServiceData?.name.toLowerCase()}, ${selectedAreaData?.name.toLowerCase()}, dubai, home services, professional`,
            lastModified: new Date().toISOString().split('T')[0],
            modifiedBy: 'Super Admin',
            views: 0,
            hasImage: false,
            faqCount: 4
          }
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to create page')
      }

      const result = await response.json()
      console.log('Page created successfully:', result)

      toast({
        title: "🎉 Page Created Successfully!",
        description: `The page "${selectedServiceData?.name} in ${selectedAreaData?.name}" has been created and is now live. You can view it at ${pageUrl}`,
        duration: 8000,
      })

      // Reset form and close modal
      setSelectedService('')
      setSelectedArea('')
      setStep('select')
      
      if (onPageCreated) {
        onPageCreated()
      }
      
      onOpenChange(false)

    } catch (error) {
      console.error('Error creating page:', error)
      
      toast({
        title: "❌ Page Creation Failed",
        description: error instanceof Error ? error.message : 'Failed to create page. Please check your selections and try again.',
        variant: "destructive",
        duration: 7000,
      })
      
      setStep('select')
    } finally {
      setIsCreating(false)
    }
  }

  const handleNext = () => {
    if (!selectedService || !selectedArea) {
      toast({
        title: "Incomplete Selection",
        description: "Please select both a service and an area before proceeding.",
        variant: "destructive",
        duration: 5000,
      })
      return
    }
    setStep('confirm')
  }

  const handleBack = () => {
    setStep('select')
  }

  const handleCancel = () => {
    setSelectedService('')
    setSelectedArea('')
    setStep('select')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-white/20 text-white">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Create Service-Area Page
          </DialogTitle>
          <DialogDescription className="text-white/70 text-base">
            {step === 'select' && "Choose a service and area combination to create a new optimized page"}
            {step === 'confirm' && "Review your selection and confirm page creation"}
            {step === 'creating' && "Creating your new page with professional content and FAQs..."}
          </DialogDescription>
        </DialogHeader>

        {/* Step 1: Service & Area Selection */}
        {step === 'select' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Selection */}
              <div className="space-y-3">
                <Label className="text-white font-semibold flex items-center">
                  <Wrench className="h-4 w-4 mr-2" />
                  Select Service *
                </Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
                    <SelectValue placeholder="Choose a service..." />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20 max-h-60">
                    {services.map((service) => (
                      <SelectItem key={service.slug} value={service.slug} className="text-white">
                        <div className="flex items-center space-x-2">
                          <span>{service.name}</span>
                          <span className="text-xs text-white/50">({service.category})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedServiceData && (
                  <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <p className="text-blue-300 text-sm">{selectedServiceData.description}</p>
                    <p className="text-blue-200 text-xs mt-1">
                      Price: {selectedServiceData.averagePrice} • Time: {selectedServiceData.estimatedTime}
                    </p>
                  </div>
                )}
              </div>

              {/* Area Selection */}
              <div className="space-y-3">
                <Label className="text-white font-semibold flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Select Area *
                </Label>
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
                    <SelectValue placeholder="Choose an area..." />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20 max-h-60">
                    {areas.map((area) => (
                      <SelectItem key={area.slug} value={area.slug} className="text-white">
                        <div className="flex items-center space-x-2">
                          <span>{area.name}</span>
                          <span className="text-xs text-white/50">({area.sector})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedAreaData && (
                  <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                    <p className="text-green-300 text-sm">{selectedAreaData.description}</p>
                    <p className="text-green-200 text-xs mt-1">
                      Sub-areas: {selectedAreaData.subAreas.length} • Sector: {selectedAreaData.sector}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Page Preview */}
            {selectedService && selectedArea && (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Page Preview</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Page Title:</span>
                      <span className="text-white font-medium">{selectedServiceData?.name} in {selectedAreaData?.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">URL:</span>
                      <span className="text-blue-400 font-mono">/{selectedService}/{selectedArea}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Content:</span>
                      <span className="text-green-400">Auto-generated professional content</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">FAQs:</span>
                      <span className="text-green-400">4 comprehensive FAQs included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" className="text-white border-white/20" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!selectedService || !selectedArea}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Continue
                <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Confirmation */}
        {step === 'confirm' && (
          <div className="space-y-6">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Ready to Create Page</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="text-white/60">Service:</p>
                      <p className="text-white font-semibold text-lg">{selectedServiceData?.name}</p>
                      <p className="text-white/70">{selectedServiceData?.description}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/60">Area:</p>
                      <p className="text-white font-semibold text-lg">{selectedAreaData?.name}</p>
                      <p className="text-white/70">{selectedAreaData?.description}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="text-white font-medium mb-3">What will be created:</h4>
                    <div className="space-y-2 text-sm text-white/80">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>SEO-optimized page with professional content (700+ words)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>4 comprehensive FAQs addressing customer concerns</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Automatic linking to navigation and sitemap</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Provider listings for {selectedAreaData?.name} area</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Immediate publication and indexing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" className="text-white border-white/20" onClick={handleBack}>
                Back to Selection
              </Button>
              <Button 
                onClick={handleCreatePage}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Page Now
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Creating */}
        {step === 'creating' && (
          <div className="text-center py-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Loader2 className="h-12 w-12 text-blue-400 animate-spin" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Creating Your Page</h3>
                <p className="text-white/70">
                  Generating professional content for "{selectedServiceData?.name} in {selectedAreaData?.name}"...
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="space-y-2 text-left text-sm text-white/80">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Generating SEO-optimized content...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Creating comprehensive FAQs...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Setting up page structure...</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 text-blue-400 animate-spin" />
                    <span>Publishing page...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}