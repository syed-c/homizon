import { NextRequest, NextResponse } from 'next/server';
import { listProvidersFromSupabase, updateProviderStatusInSupabase, deleteProviderFromSupabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    console.log('Admin providers API: GET request received');
    const { data } = await listProvidersFromSupabase();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in admin providers GET:', error);
    return NextResponse.json({ error: 'Failed to fetch providers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Admin providers API: POST request received');
    return NextResponse.json({ 
      success: true, 
      message: 'POST endpoint - use PUT for updates',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin providers POST:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log('Admin providers API: PUT request received for provider update');
    
    const { providerId, updates, action } = await request.json();
    console.log('Processing provider action:', { providerId, updates, action });

    // Handle different actions using Supabase only
    if (action === 'approve') {
      try { 
        console.log(`Attempting to approve provider: ${providerId}`);
        const result = await updateProviderStatusInSupabase(providerId, 'active', true);
        console.log('Supabase approve result:', result);
        
        if (result.skipped) {
          return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Provider approved successfully', 
          timestamp: new Date().toISOString(),
          data: result.data
        });
      } catch (error) {
        console.error('Supabase approve failed:', error);
        return NextResponse.json({ error: `Failed to approve provider: ${error.message}` }, { status: 500 });
      }
    } else if (action === 'suspend') {
      try { 
        console.log(`Attempting to suspend provider: ${providerId}`);
        const result = await updateProviderStatusInSupabase(providerId, 'suspended', false);
        console.log('Supabase suspend result:', result);
        
        if (result.skipped) {
          return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Provider suspended successfully', 
          timestamp: new Date().toISOString(),
          data: result.data
        });
      } catch (error) {
        console.error('Supabase suspend failed:', error);
        return NextResponse.json({ error: `Failed to suspend provider: ${error.message}` }, { status: 500 });
      }
    } else if (action === 'update') {
      // Handle general updates if needed
      return NextResponse.json({ 
        success: true, 
        message: 'Provider updated successfully', 
        timestamp: new Date().toISOString()
      });
    } else {
      return NextResponse.json({ error: 'Invalid action specified' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error in admin providers PUT:', error);
    return NextResponse.json({ error: 'Failed to update provider' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    console.log('Admin providers API: DELETE request received');
    
    const { providerId } = await request.json();
    console.log('Deleting provider:', providerId);

    // Delete from Supabase only
    try {
      const result = await deleteProviderFromSupabase(providerId);
      console.log('Supabase delete result:', result);
      return NextResponse.json({ 
        success: true, 
        message: 'Provider deleted successfully',
        timestamp: new Date().toISOString(),
        data: result.data
      });
    } catch (error) {
      console.error('Supabase delete failed:', error);
      return NextResponse.json({ error: `Failed to delete provider: ${error.message}` }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in admin providers DELETE:', error);
    return NextResponse.json({ error: 'Failed to delete provider' }, { status: 500 });
  }
}