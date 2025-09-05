"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Building, Mail, Phone, MapPin, Wrench, 
  Star, Clock, Shield, CheckCircle, Upload, 
  Plus, X, ArrowRight, Camera, FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { services, areas } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { uploadImageToSupabaseStorage, createProviderInSupabase, type ProviderInsert } from '@/lib/supabase';

interface ProviderFormData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    password: string;
    company?: string;
    experience: number;
    profileImage?: string;
  };
  services: string[];
  areas: string[];
  description: string;
  certifications: string[];
  languages: string[];
  pricing: { [serviceId: string]: number };
  availability: {
    emergency: boolean;
    weekdays: string;
    weekends: string;
  };
}

export default function ProviderRegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ProviderFormData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      password: '',
      company: '',
      experience: 0,
    },
    services: [],
    areas: [],
    description: '',
    certifications: [],
    languages: [],
    pricing: {},
    availability: {
      emergency: false,
      weekdays: '9:00 AM - 6:00 PM',
      weekends: '10:00 AM - 4:00 PM'
    }
  });
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [newCertification, setNewCertification] = useState('');
  const [newLanguage, setNewLanguage] = useState('');

  const steps = [
    { number: 1, title: 'Personal Information', description: 'Tell us about yourself' },
    { number: 2, title: 'Services & Areas', description: 'Select your services and coverage areas' },
    { number: 3, title: 'Professional Details', description: 'Add your experience and qualifications' },
    { number: 4, title: 'Pricing & Availability', description: 'Set your rates and schedule' },
    { number: 5, title: 'Review & Submit', description: 'Review your information' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setProfileFile(f);
      const url = URL.createObjectURL(f);
      setProfilePreview(url);
    }
  };

  const handleNextStep = () => { if (currentStep < steps.length) setCurrentStep(currentStep + 1); };
  const handlePrevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({ ...prev, services: prev.services.includes(serviceId) ? prev.services.filter(id => id !== serviceId) : [...prev.services, serviceId] }));
  };
  const handleAreaToggle = (areaId: string) => {
    setFormData(prev => ({ ...prev, areas: prev.areas.includes(areaId) ? prev.areas.filter(id => id !== areaId) : [...prev.areas, areaId] }));
  };

  const addCertification = () => { if (newCertification.trim()) { setFormData(prev => ({ ...prev, certifications: [...prev.certifications, newCertification.trim()] })); setNewCertification(''); } };
  const removeCertification = (index: number) => { setFormData(prev => ({ ...prev, certifications: prev.certifications.filter((_, i) => i !== index) })); };
  const addLanguage = () => { if (newLanguage.trim()) { setFormData(prev => ({ ...prev, languages: [...prev.languages, newLanguage.trim()] })); setNewLanguage(''); } };
  const removeLanguage = (index: number) => { setFormData(prev => ({ ...prev, languages: prev.languages.filter((_, i) => i !== index) })); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (submitting) return; // Prevent double submission
    
    try {
      setSubmitting(true);
      console.log('Starting provider registration process...');

      // 1) Upload image if present
      let profileUrl: string | undefined = undefined;
      if (profileFile) {
        console.log('Uploading profile image...');
        try {
          const uploaded = await uploadImageToSupabaseStorage(profileFile, `providers/${Date.now()}`);
          if ((uploaded as any)?.url) {
            profileUrl = (uploaded as any).url;
            console.log('Profile image uploaded successfully:', profileUrl);
          } else {
            console.warn('Profile image upload failed or returned no URL');
          }
        } catch (imageError) {
          console.warn('Profile image upload failed:', imageError);
          // Continue without image
        }
      }

      // 2) Build provider row - Use UUID to prevent duplicate key errors
      const providerId = `provider-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      console.log('Generated provider ID:', providerId);

      const providerRow: ProviderInsert = {
        id: providerId,
        name: formData.personalInfo.name.trim(),
        email: formData.personalInfo.email.trim(),
        phone: formData.personalInfo.phone.trim(),
        password: formData.personalInfo.password,
        company: formData.personalInfo.company?.trim(),
        experience: formData.personalInfo.experience,
        profileimage: profileUrl,
        services: formData.services || [],
        areas: formData.areas || [],
        description: formData.description.trim(),
        certifications: formData.certifications || [],
        languages: formData.languages || [],
        pricing: formData.pricing || {},
        availability: formData.availability || { emergency: false, weekdays: '', weekends: '' },
        isapproved: false,
        status: 'pending',
        joineddate: new Date().toISOString()
      };

      console.log('Provider data prepared:', {
        id: providerRow.id,
        name: providerRow.name,
        email: providerRow.email,
        services: providerRow.services.length,
        areas: providerRow.areas.length
      });

      // 3) Save to Supabase providers table
      console.log('Attempting to save provider to Supabase...');
      const result = await createProviderInSupabase(providerRow);
      console.log('Supabase create result:', result);

      if (result.skipped) {
        throw new Error('Supabase is not configured properly. Please check environment variables.');
      }

      if (!result.data) {
        throw new Error('Provider was not created in Supabase. No data returned.');
      }

      console.log('Provider successfully created in Supabase:', result.data);

      // 4) Navigate to thank-you
      router.push('/thank-you');
    } catch (e: any) {
      console.error('Provider registration error:', e);
      const message = typeof e?.message === 'string' ? e.message : 'Unknown error occurred';
      alert(`Failed to submit registration: ${message}\n\nPlease check the console for more details.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <span className="text-primary-400 font-medium">Provider Registration</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">Join Dubai's Leading</span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Service Platform</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">Connect with thousands of customers across Dubai. Start your journey as a verified service provider and grow your business with ServiceDubai.</p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Progress */}
        <motion.div className="mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${currentStep >= step.number ? 'bg-gradient-to-r from-primary-500 to-accent-500 border-primary-500 text-white' : 'border-white/30 text-white/60'}`}>{currentStep > step.number ? (<CheckCircle className="h-5 w-5" />) : (step.number)}</div>
                {index < steps.length - 1 && (<div className={`w-16 h-1 mx-4 ${currentStep > step.number ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-white/20'}`} />)}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{steps[currentStep - 1].title}</h2>
            <p className="text-white/60">{steps[currentStep - 1].description}</p>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div key={currentStep} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Full Name *</label>
                      <Input placeholder="Enter your full name" value={formData.personalInfo.name} onChange={(e) => setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, name: e.target.value } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Company Name (Optional)</label>
                      <Input placeholder="Your company name" value={formData.personalInfo.company} onChange={(e) => setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, company: e.target.value } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" value={formData.personalInfo.email} onChange={(e) => setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, email: e.target.value } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Phone Number *</label>
                      <Input placeholder="+971 50 XXX XXXX" value={formData.personalInfo.phone} onChange={(e) => setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, phone: e.target.value } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Password *</label>
                    <Input type="password" placeholder="Create a secure password" value={formData.personalInfo.password} onChange={(e) => setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, password: e.target.value } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                    <p className="text-white/60 text-xs mt-1">Password will be used to access your provider dashboard</p>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Years of Experience *</label>
                    <Select value={formData.personalInfo.experience.toString()} onValueChange={(value) => setFormData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, experience: parseInt(value) } }))}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white"><SelectValue placeholder="Select years of experience" /></SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-white/20">{[1,2,3,4,5,6,7,8,9,10,15,20].map(year => (<SelectItem key={year} value={year.toString()} className="text-white">{year}+ years</SelectItem>))}</SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Profile Photo (Optional)</label>
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border-2 border-dashed border-white/30 overflow-hidden">
                        {profilePreview ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={profilePreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <Camera className="h-8 w-8 text-white/50" />
                        )}
                      </div>
                      <label className="cursor-pointer">
                        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                        <span className="inline-flex items-center px-4 py-2 border border-white/20 text-white rounded hover:bg-white/10">
                          <Upload className="mr-2 h-4 w-4" /> Upload Photo
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Select Services You Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map(service => (
                        <div key={service.id} className="flex items-center space-x-3">
                          <Checkbox id={service.id} checked={formData.services.includes(service.id)} onCheckedChange={() => handleServiceToggle(service.id)} />
                          <label htmlFor={service.id} className="text-white/80 cursor-pointer flex-1">{service.name}<span className="text-white/50 text-sm ml-2">(Avg. {service.averagePrice})</span></label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Select Service Areas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {areas.map(area => (
                        <div key={area.id} className="flex items-center space-x-3">
                          <Checkbox id={area.id} checked={formData.areas.includes(area.id)} onCheckedChange={() => handleAreaToggle(area.id)} />
                          <label htmlFor={area.id} className="text-white/80 cursor-pointer flex-1">{area.name}<span className="text-white/50 text-sm block">{area.description}</span></label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Professional Description *</label>
                    <Textarea placeholder="Describe your experience, specializations, and what makes you stand out..." value={formData.description} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} className="bg-white/10 border-white/20 text-white placeholder-white/50 h-32" />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Certifications & Licenses</label>
                    <div className="flex space-x-2 mb-3">
                      <Input placeholder="Add certification or license" value={newCertification} onChange={(e) => setNewCertification(e.target.value)} className="bg-white/10 border-white/20 text-white placeholder-white/50" onKeyPress={(e) => e.key === 'Enter' && addCertification()} />
                      <Button onClick={addCertification} className="bg-primary-500 hover:bg-primary-600"><Plus className="h-4 w-4" /></Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.certifications.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/10 text-white">{cert}<button onClick={() => removeCertification(index)} className="ml-2 text-white/60 hover:text-white"><X className="h-3 w-3" /></button></Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Languages Spoken</label>
                    <div className="flex space-x-2 mb-3">
                      <Input placeholder="Add language" value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)} className="bg-white/10 border-white/20 text-white placeholder-white/50" onKeyPress={(e) => e.key === 'Enter' && addLanguage()} />
                      <Button onClick={addLanguage} className="bg-primary-500 hover:bg-primary-600"><Plus className="h-4 w-4" /></Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.languages.map((lang, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/10 text-white">{lang}<button onClick={() => removeLanguage(index)} className="ml-2 text-white/60 hover:text-white"><X className="h-3 w-3" /></button></Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Set Your Service Rates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {formData.services.map(serviceId => {
                        const service = services.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="space-y-2">
                            <label className="block text-white/80 text-sm font-medium">{service.name}</label>
                            <div className="flex items-center space-x-2">
                              <span className="text-white/60">AED</span>
                              <Input type="number" placeholder="0" value={formData.pricing[serviceId] || ''} onChange={(e) => setFormData(prev => ({ ...prev, pricing: { ...prev.pricing, [serviceId]: parseInt(e.target.value) || 0 } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                              <span className="text-white/60 text-sm">starting price</span>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox id="emergency" checked={formData.availability.emergency} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, availability: { ...prev.availability, emergency: checked as boolean } }))} />
                        <label htmlFor="emergency" className="text-white/80">Available for emergency services (24/7)</label>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">Weekday Hours</label>
                          <Input placeholder="e.g., 9:00 AM - 6:00 PM" value={formData.availability.weekdays} onChange={(e) => setFormData(prev => ({ ...prev, availability: { ...prev.availability, weekdays: e.target.value } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-2">Weekend Hours</label>
                          <Input placeholder="e.g., 10:00 AM - 4:00 PM" value={formData.availability.weekends} onChange={(e) => setFormData(prev => ({ ...prev, availability: { ...prev.availability, weekends: e.target.value } }))} className="bg-white/10 border-white/20 text-white placeholder-white/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Review Your Information</h3>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Personal Information</h4>
                    <p className="text-white/70">Name: {formData.personalInfo.name}</p>
                    <p className="text-white/70">Email: {formData.personalInfo.email}</p>
                    <p className="text-white/70">Phone: {formData.personalInfo.phone}</p>
                    <p className="text-white/70">Experience: {formData.personalInfo.experience} years</p>
                    {formData.personalInfo.company && (<p className="text-white/70">Company: {formData.personalInfo.company}</p>)}
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Services & Areas</h4>
                    <p className="text-white/70 mb-2">Services: {formData.services.map(id => services.find(s => s.id === id)?.name).join(', ')}</p>
                    <p className="text-white/70">Areas: {formData.areas.map(id => areas.find(a => a.id === id)?.name).join(', ')}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Professional Details</h4>
                    <p className="text-white/70 mb-2">{formData.description}</p>
                    {formData.certifications.length > 0 && (<p className="text-white/70 mb-2">Certifications: {formData.certifications.join(', ')}</p>)}
                    {formData.languages.length > 0 && (<p className="text-white/70">Languages: {formData.languages.join(', ')}</p>)}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.div className="flex justify-between mt-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1} className="text-white border-white/20 hover:bg-white/10">Previous</Button>
          {currentStep < steps.length ? (
            <Button onClick={handleNextStep} className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white">Next Step<ArrowRight className="ml-2 h-4 w-4" /></Button>
          ) : (
            <form onSubmit={handleSubmit}>
              <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">{submitting ? 'Submitting...' : 'Submit Application'}<CheckCircle className="ml-2 h-4 w-4" /></Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}