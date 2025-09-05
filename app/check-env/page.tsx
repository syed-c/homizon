"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CheckEnvPage() {
  const [envInfo, setEnvInfo] = useState<any>(null);

  useEffect(() => {
    const checkEnv = () => {
      setEnvInfo({
        // Check if we're in browser
        isBrowser: typeof window !== 'undefined',
        
        // Check environment variables (only available in browser for NEXT_PUBLIC_*)
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
        
        // Check if variables have values
        supabaseUrlValue: process.env.NEXT_PUBLIC_SUPABASE_URL ? 
          process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 20) + '...' : 'Not set',
        supabaseKeyValue: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 20) + '...' : 'Not set',
        
        // Check other important env vars
        nodeEnv: process.env.NODE_ENV,
        vercelEnv: process.env.VERCEL_ENV,
        
        timestamp: new Date().toISOString()
      });
    };

    checkEnv();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Environment Variables Check</h1>
        
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle>Environment Information</CardTitle>
          </CardHeader>
          <CardContent>
            {envInfo ? (
              <pre className="bg-black/50 p-4 rounded text-sm overflow-auto">
                {JSON.stringify(envInfo, null, 2)}
              </pre>
            ) : (
              <p>Loading...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
