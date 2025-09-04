import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for areas data (in production, this would be a database)
let areasData: any[] = [];

export async function GET(request: NextRequest) {
  try {
    console.log('Admin areas API: GET request received');

    // Return current areas data
    return NextResponse.json(areasData);
  } catch (error) {
    console.error('Error in admin areas GET:', error);
    return NextResponse.json({ error: 'Failed to fetch areas' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Admin areas API: POST request received');
    
    const data = await request.json();
    console.log('Received areas data for update:', data);

    if (data.action === 'add') {
      // Adding a new area
      areasData = [...areasData, data.area];
      console.log('New area added:', data.area.name);
    } else if (data.action === 'addSubArea') {
      // Adding a sub-area to an existing area
      areasData = areasData.map(area => 
        area.id === data.parentAreaId
          ? { ...area, subAreas: [...area.subAreas, data.subArea] }
          : area
      );
      console.log('New sub-area added to area:', data.parentAreaId);
    } else {
      // Update areas data
      areasData = data;
    }

    // Simulate instant save
    console.log('Areas data updated successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Areas updated successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin areas POST:', error);
    return NextResponse.json({ error: 'Failed to update areas' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log('Admin areas API: PUT request received for area update');
    
    const { areaId, updates } = await request.json();
    console.log('Processing area update:', { areaId, updates });

    // Update specific area
    areasData = areasData.map(area => {
      if (area.id === areaId) {
        return { 
          ...area, 
          ...updates,
          lastUpdated: new Date().toISOString().split('T')[0]
        };
      }
      return area;
    });

    console.log('Area updated successfully');

    return NextResponse.json({ 
      success: true, 
      message: 'Area updated successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in admin areas PUT:', error);
    return NextResponse.json({ error: 'Failed to update area' }, { status: 500 });
  }
}