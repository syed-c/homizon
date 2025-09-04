import { NextRequest, NextResponse } from 'next/server';
import { services, areas } from '@/lib/data';

// Simplified page customizations storage
const pageCustomizations: { [key: string]: any } = {};

// Enhanced content generation for service-area pages
const generateServiceAreaContent = (serviceName: string, areaName: string) => {
  return {
    content: `<div class="prose prose-invert max-w-none">
      <p class="text-lg text-white/80 mb-8 leading-relaxed">
        Professional ${serviceName} services in ${areaName} are now more accessible than ever. Our network of verified professionals brings years of experience and local expertise to every project in this vibrant Dubai community.
      </p>
      
      <h2 class="text-2xl font-bold text-white mb-6">Why Choose Professional ${serviceName} in ${areaName}?</h2>
      <div class="text-white/70 mb-8 leading-relaxed">
        <p class="mb-4">
          ${areaName} residents understand the importance of quality home services. Whether you're dealing with routine maintenance, emergency repairs, or new installations, having access to reliable ${serviceName.toLowerCase()} professionals makes all the difference in maintaining your property's value and your family's comfort.
        </p>
        
        <p class="mb-4">
          Our streamlined booking process connects you directly with licensed, insured professionals who specialize in ${serviceName.toLowerCase()} throughout ${areaName}. Each provider in our network has been carefully vetted to ensure they meet our high standards for quality, reliability, and customer service.
        </p>
        
        <p class="mb-4">
          What sets our ${serviceName.toLowerCase()} services apart in ${areaName}? We understand the unique challenges and requirements of this area. From building regulations to community standards, our professionals are familiar with local conditions and can provide solutions that work specifically for ${areaName} properties.
        </p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mb-6">Getting Started with ${serviceName} in ${areaName}</h2>
      <div class="text-white/70 mb-8 leading-relaxed">
        <p class="mb-4">
          Getting started is simple. Describe your ${serviceName.toLowerCase()} needs through our platform, and we'll connect you with qualified professionals in ${areaName} who can provide accurate quotes and realistic timelines. All our providers are fully licensed, insured, and committed to delivering exceptional results.
        </p>
        
        <p class="mb-4">
          The ${areaName} community deserves nothing less than professional excellence. That's why we've built a network of trusted service providers who understand the local market and are committed to maintaining the high standards that ${areaName} residents expect.
        </p>
      </div>
    </div>`,
    faqs: [
      {
        question: `How much does ${serviceName} cost in ${areaName}?`,
        answer: `The cost of ${serviceName} in ${areaName} typically ranges from AED 150-400, depending on the scope of work, materials needed, and specific requirements. All our providers offer transparent, upfront quotes before starting any work, so you'll know exactly what to expect.`
      },
      {
        question: `Are the ${serviceName} providers in ${areaName} licensed and insured?`,
        answer: `Yes, absolutely. All ${serviceName} providers in our ${areaName} network are fully licensed, insured, and verified. We ensure they meet Dubai Municipality requirements and maintain high professional standards before joining our platform.`
      },
      {
        question: `How quickly can I get ${serviceName} service in ${areaName}?`,
        answer: `Most ${serviceName} services in ${areaName} can be scheduled within 24-48 hours. For urgent situations, emergency services are available. The typical service completion time is 2-4 hours, depending on the complexity of the work required.`
      },
      {
        question: `What areas around ${areaName} do you serve for ${serviceName}?`,
        answer: `We provide ${serviceName} services throughout ${areaName} and surrounding areas in Dubai. Our network covers multiple neighborhoods and sub-areas, and we can typically reach most locations within 30 minutes for both regular and emergency services.`
      },
      {
        question: `Do you offer emergency ${serviceName} services in ${areaName}?`,
        answer: `Yes, we offer 24/7 emergency ${serviceName} services in ${areaName}. Emergency services may have additional charges, but we ensure you get professional help when you need it most, even during weekends and holidays.`
      },
      {
        question: `How do I book ${serviceName} services in ${areaName}?`,
        answer: `Booking ${serviceName} services in ${areaName} is easy. Simply describe your needs on our platform, and we'll connect you with verified professionals who can provide quotes and schedule the work at your convenience.`
      },
      {
        question: `What's included in ${serviceName} service in ${areaName}?`,
        answer: `Our ${serviceName} service in ${areaName} includes professional assessment, quality workmanship, cleanup after completion, and a satisfaction guarantee. Specific inclusions vary by provider, but all offer comprehensive service packages.`
      },
      {
        question: `Can I get same-day ${serviceName} service in ${areaName}?`,
        answer: `Same-day ${serviceName} service in ${areaName} is often available, especially for urgent repairs. Contact us early in the day for the best chance of same-day scheduling, subject to provider availability.`
      },
      {
        question: `Do you provide warranty for ${serviceName} work in ${areaName}?`,
        answer: `Yes, all ${serviceName} work in ${areaName} comes with a service warranty. The warranty period varies by service type and provider, but typically ranges from 30 days to 1 year for different types of work.`
      },
      {
        question: `What payment methods do you accept for ${serviceName} in ${areaName}?`,
        answer: `We accept various payment methods for ${serviceName} services in ${areaName}, including cash, credit/debit cards, and bank transfers. Payment is typically made directly to the service provider after work completion and your satisfaction.`
      }
    ]
  };
};

// Simplified content generation for testing
const generateSimpleContent = (serviceName: string, areaName: string) => {
  return {
    content: `<div class="prose prose-invert max-w-none">
      <p class="text-lg text-white/80 mb-8 leading-relaxed">
        Find professional ${serviceName} services in ${areaName}. Our verified experts provide reliable, high-quality service with transparent pricing and guaranteed satisfaction.
      </p>
      <h2 class="text-2xl font-bold text-white mb-6">Why Choose Professional ${serviceName} in ${areaName}?</h2>
      <div class="text-white/70 mb-8 leading-relaxed">
        <p class="mb-4">
          Professional ${serviceName} services in ${areaName} ensure your needs are met with expertise and reliability. Our verified professionals understand local requirements and deliver services that meet Dubai's high standards.
        </p>
      </div>
    </div>`,
    faqs: [
      {
        question: `How much does ${serviceName} cost in ${areaName}?`,
        answer: `${serviceName} pricing in ${areaName} varies based on specific requirements. Contact our verified professionals for accurate quotes tailored to your needs.`
      },
      {
        question: `How quickly can I get ${serviceName} in ${areaName}?`,
        answer: `Most ${serviceName} professionals in ${areaName} can respond within 24 hours. Emergency services may be available for urgent needs.`
      }
    ]
  };
};

// Function to get specific page content
const getPageContent = (pageId: string) => {
  console.log('Getting page content for:', pageId);
  
  // Check if it's a service page
  if (pageId.startsWith('service-') && !pageId.includes('service-area-')) {
    const serviceSlug = pageId.replace('service-', '');
    const service = services.find(s => s.slug === serviceSlug);
    if (service) {
      const customization = pageCustomizations[pageId] || {};
      return {
        id: pageId,
        title: customization.title || service.name,
        customContent: customization.customContent || generateSimpleContent(service.name, 'Dubai').content,
        customFAQs: customization.customFAQs || generateSimpleContent(service.name, 'Dubai').faqs,
        metaTitle: customization.metaTitle || `${service.name} in Dubai | HOMIZON`,
        metaDescription: customization.metaDescription || `Find verified ${service.name.toLowerCase()} professionals in Dubai.`,
        customHeading: customization.customHeading || '',
        headerImage: customization.headerImage || '',
        seoKeywords: customization.seoKeywords || '',
        status: customization.status || 'published'
      };
    }
  }
  
  // Check if it's an area page
  if (pageId.startsWith('area-')) {
    const areaSlug = pageId.replace('area-', '');
    const area = areas.find(a => a.slug === areaSlug);
    if (area) {
      const customization = pageCustomizations[pageId] || {};
      return {
        id: pageId,
        title: customization.title || `Home Services in ${area.name}`,
        customContent: customization.customContent || generateSimpleContent('Home Services', area.name).content,
        customFAQs: customization.customFAQs || generateSimpleContent('Home Services', area.name).faqs,
        metaTitle: customization.metaTitle || `Home Services in ${area.name} | HOMIZON`,
        metaDescription: customization.metaDescription || `Connect with verified home service professionals in ${area.name}.`,
        customHeading: customization.customHeading || '',
        headerImage: customization.headerImage || '',
        seoKeywords: customization.seoKeywords || '',
        status: customization.status || 'published'
      };
    }
  }
  
  // Check if it's a service-area page
  if (pageId.startsWith('service-area-')) {
    const parts = pageId.replace('service-area-', '').split('-');
    if (parts.length >= 2) {
      // Find the service and area by reconstructing from the parts
      // This handles multi-word slugs like 'ac-repair' and 'dubai-marina'
      for (let i = 1; i < parts.length; i++) {
        const serviceSlug = parts.slice(0, i).join('-');
        const areaSlug = parts.slice(i).join('-');
        
        const service = services.find(s => s.slug === serviceSlug);
        const area = areas.find(a => a.slug === areaSlug);
        
        if (service && area) {
          const customization = pageCustomizations[pageId] || {};
          
          // If no custom content exists, generate default content using the same function as live pages
          let defaultContent = '';
          let defaultFAQs: any[] = [];
          
          if (!customization.customContent) {
            const generatedContent = generateServiceAreaContent(service.name, area.name);
            defaultContent = generatedContent?.content || '';
            defaultFAQs = generatedContent?.faqs || [];
          }
          
          return {
            id: pageId,
            title: customization.title || `${service.name} in ${area.name}`,
            customContent: customization.customContent || defaultContent,
            customFAQs: customization.customFAQs || defaultFAQs,
            metaTitle: customization.metaTitle || `${service.name} in ${area.name} | HOMIZON`,
            metaDescription: customization.metaDescription || `Find trusted ${service.name.toLowerCase()} professionals in ${area.name}.`,
            customHeading: customization.customHeading || '',
            headerImage: customization.headerImage || '',
            seoKeywords: customization.seoKeywords || '',
            status: customization.status || 'published'
          };
        }
      }
    }
  }
  
  return null;
};

// Simplified pricing function
const getCurrentPricing = (serviceId: string) => {
  const service = services.find(s => s.id === serviceId);
  if (!service) return null;
  
  return {
    averagePrice: service.averagePrice,
    currency: 'AED',
    lastUpdated: new Date().toISOString().split('T')[0]
  };
};

export async function GET(request: NextRequest) {
  try {
    console.log('Loading pages data...');
    
    const url = new URL(request.url);
    const pageId = url.searchParams.get('id');
    
    // If requesting specific page content
    if (pageId) {
      const pageContent = getPageContent(pageId);
      if (pageContent) {
        return NextResponse.json(pageContent);
      } else {
        return NextResponse.json({ error: 'Page not found' }, { status: 404 });
      }
    }
    
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const type = url.searchParams.get('type') || 'all';
    
    const pages: any[] = [];
    
    // Generate only a limited number of pages for testing
    if (type === 'all' || type === 'service') {
      // Add first 5 services only
      services.slice(0, 5).forEach(service => {
        const pageId = `service-${service.slug}`;
        const customization = pageCustomizations[pageId] || {};
        
        pages.push({
          id: pageId,
          title: customization.title || service.name,
          metaTitle: customization.metaTitle || `${service.name} in Dubai | HOMIZON`,
          metaDescription: customization.metaDescription || `Find verified ${service.name.toLowerCase()} professionals in Dubai.`,
          url: `/services/${service.slug}`,
          type: 'service',
          category: service.category,
          service: service.slug,
          status: customization.status || 'published',
          lastModified: customization.lastModified || '2024-01-15',
          modifiedBy: customization.modifiedBy || 'System',
          views: Math.floor(Math.random() * 5000) + 1000,
          hasImage: !!customization.headerImage,
          faqCount: customization.customFAQs?.length || 2,
          customContent: customization.customContent || '',
          customHeading: customization.customHeading || '',
          headerImage: customization.headerImage || '',
          seoKeywords: customization.seoKeywords || '',
          customFAQs: customization.customFAQs || [],
          pricing: getCurrentPricing(service.id)
        });
      });
    }

    if (type === 'all' || type === 'area') {
      // Add first 5 areas only
      areas.slice(0, 5).forEach(area => {
        const pageId = `area-${area.slug}`;
        const customization = pageCustomizations[pageId] || {};
        
        pages.push({
          id: pageId,
          title: customization.title || `Home Services in ${area.name}`,
          metaTitle: customization.metaTitle || `Home Services in ${area.name} | HOMIZON`,
          metaDescription: customization.metaDescription || `Connect with verified home service professionals in ${area.name}.`,
          url: `/areas/${area.slug}`,
          type: 'area',
          area: area.slug,
          status: customization.status || 'published',
          lastModified: customization.lastModified || '2024-01-14',
          modifiedBy: customization.modifiedBy || 'System',
          views: Math.floor(Math.random() * 3000) + 500,
          hasImage: !!customization.headerImage,
          faqCount: customization.customFAQs?.length || 2,
          customContent: customization.customContent || '',
          customHeading: customization.customHeading || '',
          headerImage: customization.headerImage || '',
          seoKeywords: customization.seoKeywords || '',
          customFAQs: customization.customFAQs || [],
          pricing: {
            averageRange: 'AED 100-500',
            lastUpdated: new Date().toISOString().split('T')[0]
          }
        });
      });
    }

    if (type === 'all' || type === 'service-area') {
      // Add only a few service-area combinations
      const limitedServices = services.slice(0, 2);
      const limitedAreas = areas.slice(0, 2);
      
      limitedServices.forEach(service => {
        limitedAreas.forEach(area => {
          const pageId = `service-area-${service.slug}-${area.slug}`;
          const customization = pageCustomizations[pageId] || {};
          
          pages.push({
            id: pageId,
            title: customization.title || `${service.name} in ${area.name}`,
            metaTitle: customization.metaTitle || `${service.name} in ${area.name} | HOMIZON`,
            metaDescription: customization.metaDescription || `Find trusted ${service.name.toLowerCase()} professionals in ${area.name}.`,
            url: `/${service.slug}/${area.slug}`,
            type: 'service-area',
            service: service.slug,
            area: area.slug,
            category: service.category,
            status: customization.status || 'published',
            lastModified: customization.lastModified || '2024-01-13',
            modifiedBy: customization.modifiedBy || 'System',
            views: Math.floor(Math.random() * 1500) + 100,
            hasImage: !!customization.headerImage,
            faqCount: customization.customFAQs?.length || 2,
            customContent: customization.customContent || '',
            customHeading: customization.customHeading || '',
            headerImage: customization.headerImage || '',
            seoKeywords: customization.seoKeywords || '',
            customFAQs: customization.customFAQs || [],
            pricing: getCurrentPricing(service.id)
          });
        });
      });
    }
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPages = pages.slice(startIndex, endIndex);
    
    console.log(`Generated ${pages.length} pages, returning ${paginatedPages.length} for page ${page}`);
    
    return NextResponse.json({ 
      pages: paginatedPages,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(pages.length / limit),
        totalCount: pages.length,
        hasNextPage: endIndex < pages.length,
        hasPreviousPage: page > 1
      }
    });
    
  } catch (error) {
    console.error('Error generating pages:', error);
    return NextResponse.json({ 
      error: 'Failed to generate pages',
      pages: [],
      pagination: { currentPage: 1, totalPages: 1, totalCount: 0, hasNextPage: false, hasPreviousPage: false }
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Pages API POST request:', body.action);
    
    if (body.action === 'update') {
      console.log('Updating page:', {
        id: body.pageData?.id,
        title: body.pageData?.title,
        contentLength: body.pageData?.customContent?.length || 0,
        faqCount: body.pageData?.customFAQs?.length || 0,
        status: body.pageData?.status
      });
      
      // Store the page customization
      if (body.pageData?.id) {
        pageCustomizations[body.pageData.id] = {
          ...body.pageData,
          lastModified: new Date().toISOString().split('T')[0],
          modifiedBy: 'Super Admin'
        };
        console.log('Page customization stored for:', body.pageData.id);
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Page updated successfully',
        pageData: {
          ...body.pageData,
          lastModified: new Date().toISOString().split('T')[0],
          modifiedBy: 'Super Admin'
        }
      });
    }
    
    if (body.action === 'create') {
      console.log('Creating new page:', body.pageData?.id);
      
      // Store the new page customization
      if (body.pageData?.id) {
        pageCustomizations[body.pageData.id] = {
          ...body.pageData,
          lastModified: new Date().toISOString().split('T')[0],
          modifiedBy: 'Super Admin'
        };
        console.log('New page customization stored for:', body.pageData.id);
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Page created successfully',
        pageData: body.pageData
      });
    }

    if (body.action === 'bulkCreate') {
      console.log('Bulk creating pages:', body.pages?.length);
      
      // Store all bulk created pages
      if (body.pages && Array.isArray(body.pages)) {
        body.pages.forEach((page: any) => {
          if (page.id) {
            pageCustomizations[page.id] = {
              ...page,
              lastModified: new Date().toISOString().split('T')[0],
              modifiedBy: 'Super Admin'
            };
          }
        });
        console.log('Bulk page customizations stored:', body.pages.length);
      }
      
      return NextResponse.json({ 
        success: true, 
        message: `Successfully created ${body.pages?.length} pages`,
        createdPages: body.pages
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error in pages API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}