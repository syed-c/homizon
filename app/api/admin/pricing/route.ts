import { NextRequest, NextResponse } from 'next/server';
import { services, sampleProviders } from '@/lib/data';

// Simplified pricing storage
const pricingData: { [key: string]: any } = {};

export async function GET(request: NextRequest) {
  try {
    console.log('Loading simplified pricing data...');
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    
    // Generate simplified pricing for first 10 services only
    const servicePricing = services.slice(0, 10).map(service => {
      const existingPricing = pricingData[service.id] || {};
      
      return {
        serviceId: service.id,
        serviceName: service.name,
        category: service.category,
        averagePrice: existingPricing.averagePrice || service.averagePrice,
        minPrice: existingPricing.minPrice || 100,
        maxPrice: existingPricing.maxPrice || 500,
        currency: 'AED',
        lastUpdated: existingPricing.lastUpdated || new Date().toISOString().split('T')[0],
        providerCount: Math.floor(Math.random() * 20) + 5,
        demandLevel: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)],
        recommendations: `Consider market analysis for ${service.name} pricing optimization.`
      };
    });

    // Generate simplified provider pricing for first 10 providers only
    const providerPricing = sampleProviders.slice(0, 10).map(provider => ({
      providerId: provider.id,
      providerName: provider.name,
      serviceCount: provider.services.length,
      averagePrice: 'AED 200-400',
      lastUpdated: new Date().toISOString().split('T')[0],
      isActive: provider.isApproved
    }));

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedServices = servicePricing.slice(startIndex, endIndex);
    
    console.log(`Generated ${servicePricing.length} service prices, returning ${paginatedServices.length} for page ${page}`);
    
    return NextResponse.json({ 
      services: paginatedServices,
      providers: providerPricing,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(servicePricing.length / limit),
        totalCount: servicePricing.length,
        hasNextPage: endIndex < servicePricing.length,
        hasPreviousPage: page > 1
      }
    });
    
  } catch (error) {
    console.error('Error generating pricing:', error);
    return NextResponse.json({ 
      error: 'Failed to generate pricing',
      services: [],
      providers: [],
      pagination: { currentPage: 1, totalPages: 1, totalCount: 0, hasNextPage: false, hasPreviousPage: false }
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('Saving pricing data:', data.serviceId);
    
    // Store the pricing update
    pricingData[data.serviceId] = {
      averagePrice: data.averagePrice,
      minPrice: data.minPrice,
      maxPrice: data.maxPrice,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    return NextResponse.json({ success: true, message: 'Pricing updated successfully' });
    
  } catch (error) {
    console.error('Error saving pricing:', error);
    return NextResponse.json({ error: 'Failed to save pricing' }, { status: 500 });
  }
}