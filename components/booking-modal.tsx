'use client'

import React, { useMemo, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/hooks/use-toast'
import { 
  User, Phone, MapPin, Clock, CheckCircle, Star, 
  Calendar, MessageSquare, Send, X, Shield, Award, ArrowLeft, ArrowRight
} from 'lucide-react'
import { saveLeadToSupabase } from '@/lib/supabase'

interface Provider {
  id: string
  name: string
  company?: string
  profileImage?: string
  rating: number
  reviewCount: number
  experience: number
  services: string[]
  areas: string[]
  isApproved: boolean
  description: string
}

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  provider?: Provider
  service: string
  serviceName: string
  area: string
  areaName: string
}

export default function BookingModal({ 
  open, 
  onOpenChange, 
  provider, 
  service, 
  serviceName, 
  area, 
  areaName 
}: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    urgency: 'normal',
    preferredTime: ''
  })
  const [step, setStep] = useState(1)
  const totalSteps = 3
  const nextDisabled = useMemo(() => {
    if (step === 1) return !formData.name || !formData.phone
    return false
  }, [step, formData.name, formData.phone])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number to proceed.",
        variant: "destructive",
        duration: 5000,
      })
      setStep(1)
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        serviceCategory: service,
        subServices: [service],
        area: areaName,
        subArea: '',
        address: formData.address,
        description: formData.message,
        urgency: formData.urgency,
        status: 'new',
        source: provider ? 'provider_booking' : 'general_booking',
        providerId: provider?.id,
        providerName: provider?.name,
        preferredTime: formData.preferredTime,
        whatsapp: true
      }

      // 1) Existing API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Failed to submit booking request')

      // 2) Save to Supabase if configured
      try { await saveLeadToSupabase(payload) } catch { /* non-blocking */ }

      toast({
        title: "🎉 Booking Request Sent!",
        description: provider 
          ? `Your request has been sent to ${provider.name}. They will contact you within 30 minutes to confirm your booking.`
          : `Your service request has been received. We'll connect you with verified providers in ${areaName} shortly.`,
        duration: 8000,
      })

      // Reset
      setFormData({ name: '', phone: '', email: '', address: '', message: '', urgency: 'normal', preferredTime: '' })
      setStep(1)
      onOpenChange(false)

    } catch (error) {
      console.error('Error submitting booking:', error)
      toast({
        title: "❌ Booking Failed",
        description: "There was an error submitting your booking request. Please try again or call us directly.",
        variant: "destructive",
        duration: 7000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const StepIndicator = () => (
    <div className="flex items-center justify-between text-xs text-white/60">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className={`flex-1 h-1 mx-1 rounded ${i + 1 <= step ? 'bg-neon-green' : 'bg-white/10'}`} />
      ))}
    </div>
  )

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setStep(1) }}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-white/20 text-white max-h-[85vh] overflow-y-auto">
        <DialogHeader className="pb-4 sticky top-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 z-10">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {provider ? `Book ${provider.name}` : `Request ${serviceName}`}
          </DialogTitle>
          <DialogDescription className="text-white/70 text-base">
            {provider 
              ? `Fill out the form to book ${serviceName} with ${provider.name} in ${areaName}.`
              : `Fill out the form to request ${serviceName} in ${areaName}.`}
          </DialogDescription>
          <div className="pt-2"><StepIndicator /></div>
        </DialogHeader>

        {/* Provider Info Card (sticky summary) */}
        {provider && (
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
            <div className="flex items-center space-x-4">
              <img 
                src={provider.profileImage} 
                alt={provider.name}
                className="h-16 w-16 rounded-full object-cover border-2 border-blue-400/50"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                  {provider.isApproved && (
                    <Badge className="bg-green-600 text-white">
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-white font-semibold">{provider.rating}</span>
                    <span>({provider.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>{provider.experience} years exp.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wizard */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <section className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white font-medium">
                    <User className="h-4 w-4 inline mr-2" />
                    Full Name *
                  </Label>
                  <Input id="name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="mt-2 bg-white/10 border-white/20 text-white" placeholder="Enter your full name" required />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white font-medium">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Phone Number *
                  </Label>
                  <Input id="phone" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} className="mt-2 bg-white/10 border-white/20 text-white" placeholder="+971 50 123 4567" required />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-white font-medium">Email (Optional)</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className="mt-2 bg-white/10 border-white/20 text-white" placeholder="your.email@example.com" />
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="space-y-4">
              <div>
                <Label htmlFor="address" className="text-white font-medium">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Service Address
                </Label>
                <Input id="address" value={formData.address} onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))} className="mt-2 bg-white/10 border-white/20 text-white" placeholder={`Building, apartment/villa number in ${areaName}`} />
              </div>
              <div>
                <Label htmlFor="message" className="text-white font-medium">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Service Details
                </Label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} className="mt-2 bg-white/10 border-white/20 text-white" placeholder={`Describe what you need for ${serviceName}.`} rows={4} />
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="urgency" className="text-white font-medium">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Urgency Level
                  </Label>
                  <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20">
                      <SelectItem value="normal" className="text-white">Normal (within 24-48 hours)</SelectItem>
                      <SelectItem value="urgent" className="text-white">Urgent (within 6-12 hours)</SelectItem>
                      <SelectItem value="emergency" className="text-white">Emergency (ASAP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="preferredTime" className="text-white font-medium">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Preferred Time
                  </Label>
                  <Input id="preferredTime" value={formData.preferredTime} onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))} className="mt-2 bg-white/10 border-white/20 text-white" placeholder="e.g., Tomorrow 2PM, Weekends only" />
                </div>
              </div>

              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-green-300 font-medium mb-1">What happens next:</p>
                    <ul className="text-green-200/80 space-y-1">
                      <li>• {provider ? `${provider.name} will contact you` : 'We will connect you with verified providers'} within 30 minutes</li>
                      <li>• Free consultation and accurate pricing quote</li>
                      <li>• Service scheduling at your convenience</li>
                      <li>• 100% satisfaction guarantee on all services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Wizard controls */}
          <div className="flex justify-between items-center pt-2">
            <Button type="button" variant="outline" className="text-white border-white/20 hover:bg-white/10" onClick={() => step > 1 ? setStep(step - 1) : onOpenChange(false)}>
              {step > 1 ? (<><ArrowLeft className="h-4 w-4 mr-2"/>Back</>) : (<><X className="h-4 w-4 mr-2"/>Cancel</>)}
            </Button>

            {step < totalSteps ? (
              <Button type="button" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white min-w-[140px]" onClick={() => setStep(step + 1)} disabled={nextDisabled}>
                Next <ArrowRight className="h-4 w-4 ml-2"/>
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting || !formData.name || !formData.phone} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white min-w-[160px]">
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {provider ? 'Book Now' : 'Request Service'}
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

