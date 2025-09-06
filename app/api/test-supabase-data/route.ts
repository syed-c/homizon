import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { listLeadsFromSupabase } = await import('@/lib/supabase');
    const { data } = await listLeadsFromSupabase();
    
    return NextResponse.json({
      rawData: data,
      isArray: Array.isArray(data),
      length: Array.isArray(data) ? data.length : 'not array',
      sampleData: Array.isArray(data) ? data.slice(0, 2) : data
    });
    
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
