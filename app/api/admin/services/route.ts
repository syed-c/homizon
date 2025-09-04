import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for services data (in production, this would be a database)
let servicesData: any[] = [];

export async function GET(request: NextRequest) {
  try {
    console.log('Admin services API: GET request received');

    // Return current services data
    return NextResponse.json(servicesData);
  } catch (error) {
    console.error('Error in admin services GET:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Admin services API: POST request received');
    
    const data = await request.json();
    console.log('Received services data for update:', data);

    // Update services data
    servicesData = data;

    // Simulate instant save
    console.log('Services data updated successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Services updated successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin services POST:', error);
    return NextResponse.json({ error: 'Failed to update services' }, { status: 500 });
  }
}