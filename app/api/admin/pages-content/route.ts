import { NextRequest, NextResponse } from 'next/server';
import { 
  listAllPagesContentFromSupabase, 
  savePageContentToSupabase, 
  updatePageContentInSupabase,
  getPageContentFromSupabase 
} from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get('page_slug');
    
    if (pageSlug) {
      // Get specific page content
      const result = await getPageContentFromSupabase(pageSlug);
      return NextResponse.json({ data: result.data });
    } else {
      // Get all pages content
      const result = await listAllPagesContentFromSupabase();
      return NextResponse.json({ data: result.data });
    }
  } catch (error) {
    console.error('Error fetching pages content:', error);
    return NextResponse.json({ error: 'Failed to fetch pages content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Creating new page content:', body);
    
    // Handle home page (empty, null, or '/' slug)
    const processedBody = {
      ...body,
      page_slug: (body.page_slug === null || body.page_slug === '' || body.page_slug === '/') ? '' : body.page_slug
    };
    
    const result = await savePageContentToSupabase(processedBody);
    
    if (result.skipped) {
      return NextResponse.json({ 
        success: false, 
        message: 'Supabase not configured' 
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      data: result.data,
      message: 'Page content created successfully' 
    });
  } catch (error) {
    console.error('Error creating page content:', error);
    return NextResponse.json({ error: 'Failed to create page content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { page_slug, ...updates } = body;
    
    console.log('Updating page content:', page_slug, updates);
    console.log('Environment check - SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
    console.log('Environment check - SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing');
    console.log('Environment check - SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Missing');
    
    // Handle home page (empty, null, or '/' slug)
    const slugToUse = (page_slug === null || page_slug === '' || page_slug === '/') ? '' : page_slug;
    
    console.log('Slug to use for update:', slugToUse);
    
    const result = await updatePageContentInSupabase(slugToUse, updates);
    
    console.log('Update result:', result);
    
    if (result.skipped) {
      console.log('Supabase operation skipped - likely missing environment variables');
      return NextResponse.json({ 
        success: false, 
        message: 'Supabase not configured - check environment variables' 
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      data: result.data,
      message: 'Page content updated successfully' 
    });
  } catch (error) {
    console.error('Error updating page content:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json({ 
      error: 'Failed to update page content', 
      details: error.message 
    }, { status: 500 });
  }
}
