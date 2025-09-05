import { NextRequest, NextResponse } from 'next/server';
import { authenticateProvider } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const { data: provider } = await authenticateProvider(email, password);

    if (!provider) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    if (provider.status !== 'active') {
      return NextResponse.json({ error: 'Account is not active. Please contact support.' }, { status: 403 });
    }

    // Remove password from response for security
    const { password: _, ...providerWithoutPassword } = provider;

    return NextResponse.json({ 
      success: true, 
      provider: providerWithoutPassword 
    });

  } catch (error) {
    console.error('Provider login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
