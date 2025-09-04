"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, User, Phone, Mail, Home as HomeIcon, 
  CheckCircle, ArrowLeft, ChevronRight, Shield, Award, 
  MessageSquare, AlertCircle, X, Plus, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { services, areas, serviceCategories } from '@/lib/data';

interface BookingData {
  serviceCategory: string;
  subServices: string[];
  area: string;
  subArea: string;
  address: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  description: string;
  urgency: 'normal' | 'urgent' | 'emergency';
  whatsapp: boolean;
}

function BookingForm() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>({
    serviceCategory: '',
    subServices: [],
    area: '',
    subArea: '',
    address: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    description: '',
    urgency: 'normal',
    whatsapp: true
  });

  console.log("Booking form loaded with params:", Object.fromEntries(searchParams.entries()));
  console.log("Current form data:", formData);

  // Auto-detect page context and pre-fill form
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const areaParam = searchParams.get('area');
    const subAreaParam = searchParams.get('subArea');

    console.log("Auto-filling from URL params:", { service: serviceParam, area: areaParam, subArea: subAreaParam });

    if (serviceParam || areaParam) {
      // Find service and determine category
      const serviceData = services.find(s => s.slug === serviceParam);
      const areaData = areas.find(a => a.slug === areaParam);
      
      if (serviceData) {
        const category = serviceCategories.find(c => c.id === serviceData.category);
        
        setFormData(prev => ({
          ...prev,
          serviceCategory: category?.id || '',
          subServices: [serviceData.id], // Pre-select the specific service
          area: areaData?.id.toString() || '',
          subArea: subAreaParam || '',
        }));
      }
    }
  }, [searchParams]);

  const selectedCategory = serviceCategories.find(c => c.id === formData.serviceCategory);
  const selectedArea = areas.find(a => a.id.toString() === formData.area);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const handleNext = () => {
    console.log("Moving to next step from:", currentStep);
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    console.log("Moving to previous step from:", currentStep);
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    
    try {
      // Here you would submit to your API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'booking_form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert('Booking submitted successfully! We will contact you within 30 minutes.');
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again or call us directly.');
    }
  };

  const handleSubServiceToggle = (subServiceId: string) => {
    setFormData(prev => ({
      ...prev,
      subServices: prev.subServices.includes(subServiceId)
        ? prev.subServices.filter(id => id !== subServiceId)
        : [...prev.subServices, subServiceId]
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.serviceCategory && formData.subServices.length > 0;
      case 2: return formData.area;
      case 3: return formData.name && formData.phone;
      case 4: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="h-5 w-5 text-white/60 group-hover:text-neon-green transition-colors" />
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg flex items-center justify-center">
                  <HomeIcon className="w-5 h-5 text-black" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                  ServiceDubai
                </span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white/60">
                <Shield className="h-4 w-4" />
                <span className="text-sm">Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <Award className="h-4 w-4" />
                <span className="text-sm">Verified Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile-Optimized Progress */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center text-black font-bold">
              {currentStep}
            </div>
            <span className="text-white font-medium">Step {currentStep} of 4</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/60">
              {currentStep === 1 && 'Select Service'}
              {currentStep === 2 && 'Choose Location'}
              {currentStep === 3 && 'Contact Details'}
              {currentStep === 4 && 'Confirm & Submit'}
            </div>
          </div>
        </div>
        
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-neon-green to-neon-blue"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / 4) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Service Category & Sub-Services */}
          {currentStep === 1 && (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-center text-white">
                  {selectedCategory ? `${selectedCategory.name} Services` : 'What service do you need?'}
                </CardTitle>
                {selectedCategory && (
                  <p className="text-center text-white/60 text-sm">
                    Select one or more services from {selectedCategory.name}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {!selectedCategory ? (
                  // Service Category Selection
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceCategories.map((category) => (
                      <motion.div
                        key={category.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.serviceCategory === category.id
                            ? 'border-neon-green bg-neon-green/10'
                            : 'border-white/20 bg-white/5 hover:border-neon-green/50'
                        }`}
                        onClick={() => setFormData(prev => ({ 
                          ...prev, 
                          serviceCategory: category.id,
                          subServices: [] // Reset sub-services when changing category
                        }))}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg flex items-center justify-center">
                            <span className="text-black font-bold">{category.name.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">{category.name}</h4>
                            <p className="text-white/60 text-sm">{category.services.length} services available</p>
                          </div>
                          {formData.serviceCategory === category.id && (
                            <CheckCircle className="h-5 w-5 text-neon-green" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Sub-Service Selection
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedCategory.services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.subServices.includes(service.id)
                              ? 'border-neon-blue bg-neon-blue/10'
                              : 'border-white/20 bg-white/5 hover:border-neon-blue/50'
                          }`}
                          onClick={() => handleSubServiceToggle(service.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                              formData.subServices.includes(service.id)
                                ? 'border-neon-blue bg-neon-blue'
                                : 'border-white/40'
                            }`}>
                              {formData.subServices.includes(service.id) && (
                                <Check className="h-4 w-4 text-black" />
                              )}
                            </div>
                            <div className="flex-1">
                              <span className="text-white font-medium">{service.name}</span>
                              <p className="text-white/60 text-sm">{service.averagePrice}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={() => setFormData(prev => ({ ...prev, serviceCategory: '', subServices: [] }))}
                        className="text-white border-white/20 hover:bg-white/10"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Change Service
                      </Button>
                      <div className="text-sm text-white/60">
                        {formData.subServices.length} service{formData.subServices.length !== 1 ? 's' : ''} selected
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: Area & Sub-Area Selection */}
          {currentStep === 2 && (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-center text-white">
                  Where do you need the service?
                </CardTitle>
                <p className="text-center text-white/60 text-sm">
                  Select your area and provide your address
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Area Selection */}
                <div>
                  <label className="block text-white font-medium mb-3">Select Area</label>
                  <Select value={formData.area} onValueChange={(value) => setFormData(prev => ({ ...prev, area: value, subArea: '' }))}>
                    <SelectTrigger className="w-full h-12 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Choose your area in Dubai" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20">
                      {areas.map((area) => (
                        <SelectItem key={area.id} value={area.id.toString()} className="text-white hover:bg-white/10">
                          {area.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sub-Area Selection */}
                {selectedArea && selectedArea.subAreas && selectedArea.subAreas.length > 0 && (
                  <div>
                    <label className="block text-white font-medium mb-3">Sub-Area (Optional)</label>
                    <Select value={formData.subArea} onValueChange={(value) => setFormData(prev => ({ ...prev, subArea: value }))}>
                      <SelectTrigger className="w-full h-12 bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Choose specific neighborhood" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-white/20">
                        {selectedArea.subAreas.map((subArea) => (
                          <SelectItem key={subArea.id} value={subArea.slug} className="text-white hover:bg-white/10">
                            {subArea.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Address Input */}
                <div>
                  <label className="block text-white font-medium mb-3">Full Address</label>
                  <Textarea
                    placeholder="Enter your complete address (building, apartment number, landmarks)"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 resize-none h-24"
                  />
                </div>

                {/* Selected Services Summary */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Selected Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.subServices.map((serviceId) => {
                      const service = services.find(s => s.id === serviceId);
                      return (
                        <Badge key={serviceId} variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30">
                          {service?.name || serviceId}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Contact Details */}
          {currentStep === 3 && (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-center text-white">
                  Contact Information
                </CardTitle>
                <p className="text-center text-white/60 text-sm">
                  How can our service providers reach you?
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-3">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                      <Input
                        placeholder="+971 50 XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Service Description</label>
                  <Textarea
                    placeholder="Please describe your requirements in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 resize-none h-24"
                  />
                </div>

                {/* WhatsApp Communication */}
                <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <input 
                    type="checkbox" 
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.checked }))}
                    className="w-4 h-4 text-green-500 rounded" 
                  />
                  <label className="text-white/90 text-sm">
                    Send updates via WhatsApp (recommended)
                  </label>
                </div>

                {/* Service Priority */}
                <div>
                  <label className="block text-white font-medium mb-3">Service Priority</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { id: 'normal', label: 'Normal', desc: 'Within 24 hours', price: '' },
                      { id: 'urgent', label: 'Urgent', desc: 'Within 4 hours', price: '+20% fee' },
                      { id: 'emergency', label: 'Emergency', desc: 'Within 1 hour', price: '+50% fee' }
                    ].map((priority) => (
                      <motion.div
                        key={priority.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.urgency === priority.id
                            ? 'border-neon-blue bg-neon-blue/10'
                            : 'border-white/20 bg-white/5 hover:border-neon-blue/50'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, urgency: priority.id as any }))}
                      >
                        <h4 className="font-medium text-white text-sm">{priority.label}</h4>
                        <p className="text-white/60 text-xs">{priority.desc}</p>
                        {priority.price && (
                          <p className="text-neon-green text-xs font-medium mt-1">{priority.price}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold text-center text-white">
                  Confirm Your Request
                </CardTitle>
                <p className="text-center text-white/60 text-sm">
                  Review your details before submitting
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white/5 rounded-lg p-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <p className="text-white/60 text-sm">Service Category</p>
                        <p className="text-white font-medium">{selectedCategory?.name}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Selected Services</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {formData.subServices.map((serviceId) => {
                            const service = services.find(s => s.id === serviceId);
                            return (
                              <Badge key={serviceId} variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30 text-xs">
                                {service?.name || serviceId}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Location</p>
                        <p className="text-white font-medium">
                          {selectedArea?.name}
                          {formData.subArea && ` - ${selectedArea?.subAreas.find(sa => sa.slug === formData.subArea)?.name || formData.subArea}`}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-white/60 text-sm">Contact</p>
                        <p className="text-white font-medium">{formData.name}</p>
                        <p className="text-white/80 text-sm">{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Priority</p>
                        <p className="text-white font-medium capitalize">{formData.urgency}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Communication</p>
                        <p className="text-white font-medium">SMS + {formData.whatsapp ? 'WhatsApp' : 'Email'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-300">What happens next?</h4>
                      <ul className="text-green-200/80 text-sm mt-2 space-y-1">
                        <li>• Instant SMS confirmation</li>
                        <li>• Providers will contact you within 30 minutes</li>
                        <li>• Compare quotes and choose your provider</li>
                        <li>• Service completed at your convenience</li>
                        <li>• Payment after service completion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="text-white border-white/20 hover:bg-white/10 px-6 py-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green/80 hover:to-neon-blue/80 text-black font-medium px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-8 py-3"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Submit Request
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookService() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading booking form...</p>
        </div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
}