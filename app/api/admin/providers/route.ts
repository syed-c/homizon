import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for providers data (in production, this would be a database)
let providersData: any[] = [];

export async function GET(request: NextRequest) {
  try {
    console.log('Admin providers API: GET request received');

    // Return current providers data
    return NextResponse.json(providersData);
  } catch (error) {
    console.error('Error in admin providers GET:', error);
    return NextResponse.json({ error: 'Failed to fetch providers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Admin providers API: POST request received');
    
    const data = await request.json();
    console.log('Received providers data for update:', data);

    // Update providers data
    providersData = data;

    // Simulate instant save
    console.log('Providers data updated successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Providers updated successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin providers POST:', error);
    return NextResponse.json({ error: 'Failed to update providers' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log('Admin providers API: PUT request received for provider update');
    
    const { providerId, updates, action } = await request.json();
    console.log('Processing provider action:', { providerId, updates, action });

    // Update specific provider
    providersData = providersData.map(provider => {
      if (provider.id === providerId) {
        const updatedProvider = { ...provider };
        
        if (action === 'approve') {
          updatedProvider.isApproved = true;
          updatedProvider.status = 'active';
        } else if (action === 'suspend') {
          updatedProvider.isApproved = false;
          updatedProvider.status = 'suspended';
        } else if (action === 'update') {
          Object.assign(updatedProvider, updates);
        } else if (action === 'toggleStatus') {
          updatedProvider.status = updatedProvider.status === 'active' ? 'suspended' : 'active';
        }
        
        updatedProvider.lastActive = new Date().toISOString().split('T')[0];
        return updatedProvider;
      }
      return provider;
    });

    console.log('Provider updated successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Provider updated successfully',
      timestamp: new Date().toISOString()
    });
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

    // Remove provider from data
    providersData = providersData.filter(provider => provider.id !== providerId);

    console.log('Provider deleted successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Provider deleted successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin providers DELETE:', error);
    return NextResponse.json({ error: 'Failed to delete provider' }, { status: 500 });
  }
}