import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    console.log('Testing Supabase connection...');
    console.log('SUPABASE_URL:', SUPABASE_URL ? 'Set' : 'Missing');
    console.log('SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY ? 'Set' : 'Missing');
    
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return NextResponse.json({ 
        error: 'Missing Supabase environment variables',
        SUPABASE_URL: !!SUPABASE_URL,
        SUPABASE_ANON_KEY: !!SUPABASE_ANON_KEY
      }, { status: 500 });
    }
    
    // Test basic connection
    const testEndpoint = `${SUPABASE_URL}/rest/v1/pages_content?select=count`;
    
    console.log('Testing endpoint:', testEndpoint);
    
    const res = await fetch(testEndpoint, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Test response status:', res.status);
    console.log('Test response headers:', Object.fromEntries(res.headers.entries()));
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Test error response:', errorText);
      return NextResponse.json({ 
        error: 'Supabase connection failed',
        status: res.status,
        details: errorText
      }, { status: 500 });
    }
    
    const data = await res.json();
    console.log('Test response data:', data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Supabase connection successful',
      data: data
    });
    
  } catch (error) {
    console.error('Test connection error:', error);
    return NextResponse.json({ 
      error: 'Connection test failed',
      details: error.message 
    }, { status: 500 });
  }
}
