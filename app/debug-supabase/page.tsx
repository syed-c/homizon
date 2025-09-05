"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DebugSupabasePage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testSupabaseConnection = async () => {
    setLoading(true);
    setTestResult(null);

    try {
      // Test 1: Check environment variables
      const envCheck = {
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing'
      };

      // Test 2: Try to fetch providers
      const response = await fetch('/api/admin/providers');
      const providers = await response.json();

      setTestResult({
        environment: envCheck,
        apiTest: {
          status: response.status,
          ok: response.ok,
          providerCount: Array.isArray(providers) ? providers.length : 'Not an array',
          providers: Array.isArray(providers) ? providers.slice(0, 3) : providers
        },
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      setTestResult({
        error: error.message,
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Supabase Debug Page</h1>
        
        <Card className="bg-white/5 border-white/10 mb-6">
          <CardHeader>
            <CardTitle>Supabase Connection Test</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={testSupabaseConnection} disabled={loading} className="mb-4">
              {loading ? 'Testing...' : 'Test Supabase Connection'}
            </Button>
            
            {testResult && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Test Results:</h3>
                <pre className="bg-black/50 p-4 rounded text-sm overflow-auto">
                  {JSON.stringify(testResult, null, 2)}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle>Environment Variables Check</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <strong>NEXT_PUBLIC_SUPABASE_URL:</strong> 
                <span className={process.env.NEXT_PUBLIC_SUPABASE_URL ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_SUPABASE_URL ? ' ✓ Set' : ' ✗ Missing'}
                </span>
              </div>
              <div>
                <strong>NEXT_PUBLIC_SUPABASE_ANON_KEY:</strong> 
                <span className={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'text-green-400' : 'text-red-400'}>
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? ' ✓ Set' : ' ✗ Missing'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
