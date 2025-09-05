"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Camera, Save, Edit, MapPin, Wrench, 
  Award, Globe, Clock, Shield, CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { updateProviderInSupabase, uploadImageToSupabaseStorage } from '@/lib/supabase';
import { services, areas } from '@/lib/data';

interface Provider {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  experience: number;
  profileimage?: string;
  services: string[];
  areas: string[];
  description: string;
  certifications: string[];
  languages: string[];
  pricing: Record<string, number>;
  availability: { emergency: boolean; weekdays: string; weekends: string };
  status: string;
}

export default function ProviderProfile() {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  useEffect(() => {
    const storedProvider = localStorage.getItem('provider');
    if (storedProvider) {
      setProvider(JSON.parse(storedProvider));
    }
    setLoading(false);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileFile(file);
      const url = URL.createObjectURL(file);
      setProfilePreview(url);
    }
  };

  const handleSave = async () => {
    if (!provider) return;

    try {
      setSaving(true);

      // Upload new profile image if selected
      let profileUrl = provider.profileimage;
      if (profileFile) {
        const uploaded = await uploadImageToSupabaseStorage(profileFile, `providers/${provider.id}`);
        if ((uploaded as any).url) {
          profileUrl = (uploaded as any).url;
        }
      }

      // Update provider in Supabase
      await updateProviderInSupabase(provider.id, {
        ...provider,
        profileimage: profileUrl,
        status: provider.status as "pending" | "active" | "suspended"
      });

      // Update localStorage
      const updatedProvider = { ...provider, profileimage: profileUrl };
      localStorage.setItem('provider', JSON.stringify(updatedProvider));
      setProvider(updatedProvider);

      setEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    if (!provider) return;
    setProvider(prev => prev ? {
      ...prev,
      services: prev.services.includes(serviceId) 
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    } : null);
  };

  const handleAreaToggle = (areaId: string) => {
    if (!provider) return;
    setProvider(prev => prev ? {
      ...prev,
      areas: prev.areas.includes(areaId) 
        ? prev.areas.filter(id => id !== areaId)
        : [...prev.areas, areaId]
    } : null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-white/60 mb-6">Please log in to access your profile</p>
          <a href="/login" className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black px-6 py-3 rounded-lg">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-900">
      <div className="p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Profile Management</h1>
              <p className="text-white/60 mt-2">Manage your personal information and service details</p>
            </div>
            <div className="flex space-x-2">
              {editing ? (
                <>
                  <Button 
                    variant="outline" 
                    onClick={() => setEditing(false)}
                    className="text-white border-white/20 hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={() => setEditing(true)}
                  className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          {/* Profile Picture Section */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Profile Picture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 overflow-hidden">
                    {profilePreview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={profilePreview} alt="Profile" className="w-full h-full object-cover" />
                    ) : provider.profileimage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={provider.profileimage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User className="h-12 w-12 text-white/50" />
                    )}
                  </div>
                  {editing && (
                    <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Camera className="h-4 w-4 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{provider.name}</h3>
                  <p className="text-white/60">{provider.email}</p>
                  <Badge className={`mt-2 ${
                    provider.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    provider.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}>
                    {provider.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">About Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Full Name</label>
                  <Input
                    value={provider.name}
                    onChange={(e) => setProvider(prev => prev ? { ...prev, name: e.target.value } : null)}
                    disabled={!editing}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Company Name</label>
                  <Input
                    value={provider.company || ''}
                    onChange={(e) => setProvider(prev => prev ? { ...prev, company: e.target.value } : null)}
                    disabled={!editing}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                  <Input
                    value={provider.email}
                    onChange={(e) => setProvider(prev => prev ? { ...prev, email: e.target.value } : null)}
                    disabled={!editing}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    value={provider.phone}
                    onChange={(e) => setProvider(prev => prev ? { ...prev, phone: e.target.value } : null)}
                    disabled={!editing}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Professional Description</label>
                <Textarea
                  value={provider.description}
                  onChange={(e) => setProvider(prev => prev ? { ...prev, description: e.target.value } : null)}
                  disabled={!editing}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 h-32"
                  placeholder="Describe your experience and specializations..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Services Section */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Services Offered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <div key={service.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={service.id}
                      checked={provider.services.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                      disabled={!editing}
                    />
                    <label htmlFor={service.id} className="text-white/80 cursor-pointer flex-1">
                      {service.name}
                      <span className="text-white/50 text-sm ml-2">(Avg. {service.averagePrice})</span>
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Service Locations Section */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Service Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {areas.map(area => (
                  <div key={area.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={area.id}
                      checked={provider.areas.includes(area.id)}
                      onCheckedChange={() => handleAreaToggle(area.id)}
                      disabled={!editing}
                    />
                    <label htmlFor={area.id} className="text-white/80 cursor-pointer flex-1">
                      {area.name}
                      <span className="text-white/50 text-sm block">{area.description}</span>
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability Section */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="emergency"
                  checked={provider.availability.emergency}
                  onCheckedChange={(checked) => setProvider(prev => prev ? {
                    ...prev,
                    availability: { ...prev.availability, emergency: checked as boolean }
                  } : null)}
                  disabled={!editing}
                />
                <label htmlFor="emergency" className="text-white/80">Available for emergency services (24/7)</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Weekday Hours</label>
                  <Input
                    value={provider.availability.weekdays}
                    onChange={(e) => setProvider(prev => prev ? {
                      ...prev,
                      availability: { ...prev.availability, weekdays: e.target.value }
                    } : null)}
                    disabled={!editing}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Weekend Hours</label>
                  <Input
                    value={provider.availability.weekends}
                    onChange={(e) => setProvider(prev => prev ? {
                      ...prev,
                      availability: { ...prev.availability, weekends: e.target.value }
                    } : null)}
                    disabled={!editing}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
