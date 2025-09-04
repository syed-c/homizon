#!/usr/bin/env node

/**
 * Generate Missing Service-Area Pages Script
 * 
 * This script creates all missing service-area combination pages
 * by calling the admin API endpoints.
 */

const fs = require('fs');
const path = require('path');

// Import data from the lib/data.ts file (simulated)
const SERVICES = [
  { slug: 'ac-repair', name: 'AC Repair & Maintenance', category: 'ac-repair-cleaning' },
  { slug: 'ac-cleaning', name: 'AC Cleaning & Sanitization', category: 'ac-repair-cleaning' },
  { slug: 'central-ac', name: 'Central AC Installation', category: 'ac-repair-cleaning' },
  { slug: 'washing-machine-repair', name: 'Washing Machine Repair', category: 'appliance-repair' },
  { slug: 'dishwasher-repair', name: 'Dishwasher Repair', category: 'appliance-repair' },
  { slug: 'refrigerator-repair', name: 'Refrigerator Repair', category: 'appliance-repair' },
  { slug: 'oven-repair', name: 'Oven & Stove Repair', category: 'appliance-repair' },
  { slug: 'dryer-repair', name: 'Dryer Repair', category: 'appliance-repair' },
  { slug: 'ice-maker-repair', name: 'Ice Maker Repair', category: 'appliance-repair' },
  { slug: 'wine-cooler-repair', name: 'Wine Cooler Repair', category: 'appliance-repair' },
  { slug: 'deep-cleaning', name: 'Deep Home Cleaning', category: 'deep-cleaning' },
  { slug: 'sofa-cleaning', name: 'Sofa & Upholstery Cleaning', category: 'deep-cleaning' },
  { slug: 'carpet-cleaning', name: 'Carpet Cleaning', category: 'deep-cleaning' },
  { slug: 'mattress-cleaning', name: 'Mattress Cleaning', category: 'deep-cleaning' },
  { slug: 'kitchen-cleaning', name: 'Kitchen Deep Cleaning', category: 'deep-cleaning' },
  { slug: 'bathroom-cleaning', name: 'Bathroom Deep Cleaning', category: 'deep-cleaning' },
  { slug: 'move-in-out-cleaning', name: 'Move-In/Move-Out Cleaning', category: 'deep-cleaning' },
  { slug: 'general-pest-control', name: 'General Pest Control', category: 'pest-control' },
  { slug: 'cockroach-control', name: 'Cockroach Control', category: 'pest-control' },
  { slug: 'bed-bug-control', name: 'Bed Bug Treatment', category: 'pest-control' },
  { slug: 'rodent-control', name: 'Rodent Control', category: 'pest-control' },
  { slug: 'termite-control', name: 'Termite Treatment', category: 'pest-control' },
  { slug: 'mosquito-control', name: 'Mosquito & Fly Control', category: 'pest-control' },
  { slug: 'plumbing-repair', name: 'Plumbing Repair', category: 'plumbing' },
  { slug: 'drain-cleaning', name: 'Drain Cleaning & Unblocking', category: 'plumbing' },
  { slug: 'bathroom-plumbing', name: 'Bathroom Plumbing', category: 'plumbing' },
  { slug: 'water-heater-repair', name: 'Water Heater Repair', category: 'plumbing' },
  { slug: 'electrical-repair', name: 'Electrical Repair', category: 'electrician' },
  { slug: 'light-installation', name: 'Light Installation', category: 'electrician' },
  { slug: 'electrical-panel', name: 'Electrical Panel Services', category: 'electrician' },
  { slug: 'general-handyman', name: 'General Handyman', category: 'handyman' },
  { slug: 'painting', name: 'Painting Services', category: 'handyman' },
  { slug: 'furniture-assembly', name: 'Furniture Assembly', category: 'handyman' },
  { slug: 'wall-mounting', name: 'TV & Wall Mounting', category: 'handyman' },
  { slug: 'door-repair', name: 'Door & Window Repair', category: 'handyman' },
  { slug: 'ac-servicing', name: 'AC Servicing', category: 'handyman' },
  { slug: 'installations', name: 'Curtain/TV/Furniture Installations', category: 'handyman' },
  { slug: 'laundry-service', name: 'Laundry Service', category: 'laundry' },
  { slug: 'dry-cleaning', name: 'Dry Cleaning', category: 'laundry' },
  { slug: 'ironing-service', name: 'Ironing Service', category: 'laundry' },
  { slug: 'home-moving', name: 'Home Moving Services', category: 'packers-movers' },
  { slug: 'office-moving', name: 'Office Moving Services', category: 'packers-movers' },
  { slug: 'furniture-moving', name: 'Furniture Moving', category: 'packers-movers' },
  { slug: 'home-sanitization', name: 'Home Sanitization', category: 'sanitization' },
  { slug: 'office-sanitization', name: 'Office Sanitization', category: 'sanitization' },
  { slug: 'covid-sanitization', name: 'COVID-19 Sanitization', category: 'sanitization' }
];

const AREAS = [
  { slug: 'abu-hail', name: 'Abu Hail' },
  { slug: 'al-barsha', name: 'Al Barsha' },
  { slug: 'al-quoz', name: 'Al Quoz' },
  { slug: 'business-bay', name: 'Business Bay' },
  { slug: 'downtown-dubai', name: 'Downtown Dubai' },
  { slug: 'dubai-marina', name: 'Dubai Marina' },
  { slug: 'jbr', name: 'JBR' },
  { slug: 'jumeirah', name: 'Jumeirah' },
  { slug: 'palm-jumeirah', name: 'Palm Jumeirah' },
  { slug: 'deira', name: 'Deira' },
  { slug: 'jlt', name: 'JLT' },
  { slug: 'motor-city', name: 'Motor City' },
  { slug: 'discovery-gardens', name: 'Discovery Gardens' },
  { slug: 'the-greens', name: 'The Greens' },
  { slug: 'the-views', name: 'The Views' },
  { slug: 'dubai-investment-park', name: 'Dubai Investment Park' },
  { slug: 'dubai-hills-estate', name: 'Dubai Hills Estate' },
  { slug: 'arabian-ranches', name: 'Arabian Ranches' },
  { slug: 'dubai-sports-city', name: 'Dubai Sports City' },
  { slug: 'jvc', name: 'JVC' },
  { slug: 'international-city', name: 'International City' },
  { slug: 'mirdif', name: 'Mirdif' },
  { slug: 'dubai-creek-harbour', name: 'Dubai Creek Harbour' },
  { slug: 'silicon-oasis', name: 'Silicon Oasis' },
  { slug: 'dubai-south', name: 'Dubai South' },
  { slug: 'dubai-festival-city', name: 'Dubai Festival City' },
  { slug: 'dubai-land', name: 'Dubai Land' },
  { slug: 'al-satwa', name: 'Al Satwa' },
  { slug: 'al-karama', name: 'Al Karama' },
  { slug: 'bur-dubai', name: 'Bur Dubai' },
  { slug: 'al-garhoud', name: 'Al Garhoud' },
  { slug: 'al-rashidiya', name: 'Al Rashidiya' },
  { slug: 'al-mizhar', name: 'Al Mizhar' },
  { slug: 'al-warqa', name: 'Al Warqa' },
  { slug: 'al-nahda', name: 'Al Nahda' },
  { slug: 'al-qusais', name: 'Al Qusais' },
  { slug: 'al-khawaneej', name: 'Al Khawaneej' },
  { slug: 'al-twar', name: 'Al Twar' },
  { slug: 'dubai-media-city', name: 'Dubai Media City' },
  { slug: 'dubai-internet-city', name: 'Dubai Internet City' },
  { slug: 'dubai-knowledge-park', name: 'Dubai Knowledge Park' },
  { slug: 'city-walk', name: 'City Walk' },
  { slug: 'al-sufouh', name: 'Al Sufouh' },
  { slug: 'emirates-hills', name: 'Emirates Hills' },
  { slug: 'the-meadows', name: 'The Meadows' },
  { slug: 'the-springs', name: 'The Springs' },
  { slug: 'the-lakes', name: 'The Lakes' },
  { slug: 'arjan', name: 'Arjan' },
  { slug: 'al-barari', name: 'Al Barari' },
  { slug: 'al-furjan', name: 'Al Furjan' },
  { slug: 'the-gardens', name: 'The Gardens' },
  { slug: 'dubai-production-city', name: 'Dubai Production City' },
  { slug: 'academic-city', name: 'Academic City' },
  { slug: 'nad-al-sheba', name: 'Nad Al Sheba' },
  { slug: 'meydan', name: 'Meydan' },
  { slug: 'silicon-central', name: 'Silicon Central' },
  { slug: 'jebel-ali', name: 'Jebel Ali' },
  { slug: 'bluewaters-island', name: 'Bluewaters Island' },
  { slug: 'al-mamzar', name: 'Al Mamzar' },
  { slug: 'town-square', name: 'Town Square' },
  { slug: 'emaar-beachfront', name: 'Emaar Beachfront' },
  { slug: 'dubai-islands', name: 'Dubai Islands' }
];

class PageGenerator {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    this.createdPages = [];
    this.errors = [];
  }

  async generateAllPages() {
    console.log('🚀 Starting comprehensive page generation...\n');
    
    const totalCombinations = SERVICES.length * AREAS.length;
    console.log(`📊 Total service-area combinations: ${totalCombinations.toLocaleString()}\n`);
    
    // Check existing pages first
    const existingPages = await this.getExistingPages();
    console.log(`📋 Found ${existingPages.length} existing pages\n`);
    
    // Generate missing pages
    let created = 0;
    let skipped = 0;
    
    for (const service of SERVICES) {
      for (const area of AREAS) {
        const pageUrl = `/${service.slug}/${area.slug}`;
        const pageExists = existingPages.some(page => 
          page.url === pageUrl || 
          (page.service === service.slug && page.area === area.slug)
        );
        
        if (pageExists) {
          skipped++;
          continue;
        }
        
        try {
          await this.createServiceAreaPage(service, area);
          created++;
          
          if (created % 10 === 0) {
            console.log(`✅ Created ${created} pages so far...`);
          }
          
          // Small delay to avoid overwhelming the system
          await this.delay(50);
          
        } catch (error) {
          console.error(`❌ Failed to create page for ${service.name} in ${area.name}:`, error.message);
          this.errors.push({
            service: service.slug,
            area: area.slug,
            error: error.message
          });
        }
      }
    }
    
    console.log(`\n🎉 Page generation complete!`);
    console.log(`📈 Created: ${created} pages`);
    console.log(`⏭️  Skipped: ${skipped} existing pages`);
    console.log(`❌ Errors: ${this.errors.length}`);
    
    // Generate report
    await this.generateReport(created, skipped);
  }

  async getExistingPages() {
    try {
      const response = await fetch(`${this.baseUrl}/api/admin/pages?limit=10000`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      return data.pages || [];
    } catch (error) {
      console.warn('⚠️  Could not fetch existing pages:', error.message);
      return [];
    }
  }

  async createServiceAreaPage(service, area) {
    const pageData = {
      title: `${service.name} in ${area.name}`,
      metaTitle: `${service.name} in ${area.name} | HOMIZON Dubai`,
      metaDescription: `Find trusted ${service.name.toLowerCase()} professionals in ${area.name}. Compare ratings, reviews, and prices. Get instant quotes from verified providers.`,
      url: `/${service.slug}/${area.slug}`,
      type: 'service-area',
      service: service.slug,
      area: area.slug,
      status: 'published',
      customContent: this.generateContent(service, area),
      customFAQs: this.generateFAQs(service, area),
      seoKeywords: `${service.name.toLowerCase()}, ${area.name.toLowerCase()}, dubai, home services, professional`,
      lastModified: new Date().toISOString().split('T')[0],
      modifiedBy: 'Auto Generator',
      views: 0
    };

    const response = await fetch(`${this.baseUrl}/api/admin/pages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pageData)
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorData}`);
    }

    const result = await response.json();
    this.createdPages.push({
      service: service.slug,
      area: area.slug,
      url: pageData.url,
      title: pageData.title
    });

    return result;
  }

  generateContent(service, area) {
    return `Professional ${service.name} services in ${area.name} are now more accessible than ever. Our network of verified professionals brings years of experience and local expertise to every project in this vibrant Dubai community.

${area.name} residents understand the importance of quality home services. Whether you're dealing with routine maintenance, emergency repairs, or new installations, having access to reliable ${service.name.toLowerCase()} professionals makes all the difference in maintaining your property's value and your family's comfort.

Our streamlined booking process connects you directly with licensed, insured professionals who specialize in ${service.name.toLowerCase()} throughout ${area.name}. Each provider in our network has been carefully vetted to ensure they meet our high standards for quality, reliability, and customer service.

What sets our ${service.name.toLowerCase()} services apart in ${area.name}? We understand the unique challenges and requirements of this area. From building regulations to community standards, our professionals are familiar with local conditions and can provide solutions that work specifically for ${area.name} properties.

Getting started is simple. Describe your ${service.name.toLowerCase()} needs through our platform, and we'll connect you with qualified professionals in ${area.name} who can provide accurate quotes and realistic timelines. All our providers are fully licensed, insured, and committed to delivering exceptional results.

The ${area.name} community deserves nothing less than professional excellence. That's why we've built a network of trusted service providers who understand the local market and are committed to maintaining the high standards that ${area.name} residents expect. From initial consultation to project completion, you can count on professional service delivery that exceeds expectations.`;
  }

  generateFAQs(service, area) {
    return [
      {
        question: `How much does ${service.name.toLowerCase()} cost in ${area.name}?`,
        answer: `The cost of ${service.name.toLowerCase()} in ${area.name} typically ranges from AED 150-400, depending on the scope of work, materials needed, and specific requirements. All our providers offer transparent, upfront quotes before starting any work, so you'll know exactly what to expect.`
      },
      {
        question: `Are the ${service.name.toLowerCase()} providers in ${area.name} licensed and insured?`,
        answer: `Yes, absolutely. All ${service.name.toLowerCase()} providers in our ${area.name} network are fully licensed, insured, and verified. We ensure they meet Dubai Municipality requirements and maintain high professional standards before joining our platform.`
      },
      {
        question: `How quickly can I get ${service.name.toLowerCase()} service in ${area.name}?`,
        answer: `Most ${service.name.toLowerCase()} services in ${area.name} can be scheduled within 24-48 hours. For urgent situations, emergency services are available. The typical service completion time is 2-4 hours, depending on the complexity of the work required.`
      },
      {
        question: `What areas around ${area.name} do you serve for ${service.name.toLowerCase()}?`,
        answer: `We provide ${service.name.toLowerCase()} services throughout ${area.name} and surrounding areas in Dubai. Our network covers multiple neighborhoods and sub-areas, and we can typically reach most locations within 30 minutes for both regular and emergency services.`
      },
      {
        question: `Do you offer emergency ${service.name.toLowerCase()} services in ${area.name}?`,
        answer: `Yes, we offer 24/7 emergency ${service.name.toLowerCase()} services in ${area.name}. Emergency services may have additional charges, but we ensure you get professional help when you need it most, even during weekends and holidays.`
      },
      {
        question: `How do I book ${service.name.toLowerCase()} services in ${area.name}?`,
        answer: `Booking ${service.name.toLowerCase()} services in ${area.name} is easy. Simply describe your needs on our platform, and we'll connect you with verified professionals who can provide quotes and schedule the work at your convenience.`
      },
      {
        question: `What's included in ${service.name.toLowerCase()} service in ${area.name}?`,
        answer: `Our ${service.name.toLowerCase()} service in ${area.name} includes professional assessment, quality workmanship, cleanup after completion, and a satisfaction guarantee. Specific inclusions vary by provider, but all offer comprehensive service packages.`
      },
      {
        question: `Can I get same-day ${service.name.toLowerCase()} service in ${area.name}?`,
        answer: `Same-day ${service.name.toLowerCase()} service in ${area.name} is often available, especially for urgent repairs. Contact us early in the day for the best chance of same-day scheduling, subject to provider availability.`
      },
      {
        question: `Do you provide warranty for ${service.name.toLowerCase()} work in ${area.name}?`,
        answer: `Yes, all ${service.name.toLowerCase()} work in ${area.name} comes with a service warranty. The warranty period varies by service type and provider, but typically ranges from 30 days to 1 year for different types of work.`
      },
      {
        question: `What payment methods do you accept for ${service.name.toLowerCase()} in ${area.name}?`,
        answer: `We accept various payment methods for ${service.name.toLowerCase()} services in ${area.name}, including cash, credit/debit cards, and bank transfers. Payment is typically made directly to the service provider after work completion and your satisfaction.`
      }
    ];
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async generateReport(created, skipped) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPossible: SERVICES.length * AREAS.length,
        created: created,
        skipped: skipped,
        errors: this.errors.length,
        successRate: ((created / (created + this.errors.length)) * 100).toFixed(1) + '%'
      },
      createdPages: this.createdPages,
      errors: this.errors,
      services: SERVICES.length,
      areas: AREAS.length
    };
    
    fs.writeFileSync('page-generation-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n📁 Report saved: page-generation-report.json');
    
    if (this.errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      this.errors.slice(0, 5).forEach(error => {
        console.log(`   ${error.service}/${error.area}: ${error.error}`);
      });
      if (this.errors.length > 5) {
        console.log(`   ... and ${this.errors.length - 5} more errors`);
      }
    }
  }
}

// Run the generator
if (require.main === module) {
  const generator = new PageGenerator();
  generator.generateAllPages().catch(console.error);
}

module.exports = PageGenerator;