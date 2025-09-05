"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createProviderInSupabase } from '@/lib/supabase';

export default function TestProviderRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const testRegistration = async () => {
    try {
      setLoading(true);
      setResult(null);

      const providerId = `test-provider-${Date.now()}`;
      
      const providerData = {
        id: providerId,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password: 'test123',
        company: 'Test Company',
        experience: 5,
        profileimage: undefined,
        services: ['handyman'],
        areas: ['dubai'],
        description: 'Test provider',
        certifications: [],
        languages: ['English'],
        pricing: {},
        availability: { emergency: false, weekdays: '9-5', weekends: '10-4' },
        isapproved: false,
        status: 'pending' as const,
        joineddate: new Date().toISOString()
      };

      console.log('Testing provider registration with data:', providerData);
      
      const result = await createProviderInSupabase(providerData);
      
      setResult({
        success: true,
        data: result,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Test registration error:', error);
      setResult({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Test Provider Registration</h1>
        
        <Card className="bg-white/5 border-white/10 mb-6">
          <CardHeader>
            <CardTitle>Simple Provider Registration Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Provider name"
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="provider@example.com"
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 123 4567"
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            
            <Button 
              onClick={testRegistration} 
              disabled={loading || !name || !email || !phone}
              className="w-full"
            >
              {loading ? 'Testing...' : 'Test Registration'}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className={result.success ? 'text-green-400' : 'text-red-400'}>
                {result.success ? 'Success!' : 'Error'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
