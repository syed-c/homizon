"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createProviderInSupabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function SimpleRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const providerId = `provider-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      const providerData = {
        id: providerId,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        password: formData.password,
        company: 'Test Company',
        experience: 5,
        profileimage: undefined,
        services: ['handyman'],
        areas: ['dubai'],
        description: 'Test provider description',
        certifications: [],
        languages: ['English'],
        pricing: {},
        availability: { emergency: false, weekdays: '9-5', weekends: '10-4' },
        isapproved: false,
        status: 'pending' as const,
        joineddate: new Date().toISOString()
      };

      console.log('Submitting provider data:', providerData);
      
      const result = await createProviderInSupabase(providerData);
      
      if (result.skipped) {
        throw new Error('Supabase not configured');
      }

      if (!result.data) {
        throw new Error('No data returned from Supabase');
      }

      console.log('Provider created successfully:', result.data);
      alert('Registration successful!');
      router.push('/thank-you');

    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-md mx-auto">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle>Simple Provider Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+971 50 123 4567"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Password"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              {error && (
                <div className="text-red-400 text-sm">{error}</div>
              )}
              
              <Button 
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? 'Registering...' : 'Register'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
