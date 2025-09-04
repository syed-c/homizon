#!/usr/bin/env node

/**
 * Comprehensive Platform Audit Script
 * 
 * This script performs a full audit of all location, service, and service-location pages
 * on the platform. It can be run manually or integrated into CI/CD pipelines.
 * 
 * Usage:
 * node scripts/platform-audit.js [--output=csv|json|console] [--baseUrl=https://yoursite.com]
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Configuration
const DEFAULT_BASE_URL = 'https://isk4i1s977mmsi0jkt94omug.macaly.dev';
const OUTPUT_DIR = './audit-reports';
const TIMEOUT = 10000; // 10 seconds
const MAX_CONCURRENT = 5; // Maximum concurrent requests

// Parse command line arguments
const args = process.argv.slice(2);
const outputFormat = args.find(arg => arg.startsWith('--output='))?.split('=')[1] || 'console';
const baseUrl = args.find(arg => arg.startsWith('--baseUrl='))?.split('=')[1] || DEFAULT_BASE_URL;

// Data structures from the platform
const services = [
  // AC Repair & Cleaning
  { id: 'ac-repair', name: 'AC Repair & Maintenance', slug: 'ac-repair', category: 'ac-repair-cleaning' },
  { id: 'ac-cleaning', name: 'AC Cleaning & Sanitization', slug: 'ac-cleaning', category: 'ac-repair-cleaning' },
  { id: 'central-ac', name: 'Central AC Installation', slug: 'central-ac', category: 'ac-repair-cleaning' },
  
  // Appliance Repair
  { id: 'washing-machine-repair', name: 'Washing Machine Repair', slug: 'washing-machine-repair', category: 'appliance-repair' },
  { id: 'dishwasher-repair', name: 'Dishwasher Repair', slug: 'dishwasher-repair', category: 'appliance-repair' },
  { id: 'refrigerator-repair', name: 'Refrigerator Repair', slug: 'refrigerator-repair', category: 'appliance-repair' },
  { id: 'oven-repair', name: 'Oven & Stove Repair', slug: 'oven-repair', category: 'appliance-repair' },
  { id: 'dryer-repair', name: 'Dryer Repair', slug: 'dryer-repair', category: 'appliance-repair' },
  { id: 'ice-maker-repair', name: 'Ice Maker Repair', slug: 'ice-maker-repair', category: 'appliance-repair' },
  
  // Deep Cleaning Services
  { id: 'deep-cleaning', name: 'Deep Home Cleaning', slug: 'deep-cleaning', category: 'deep-cleaning' },
  { id: 'sofa-cleaning', name: 'Sofa & Upholstery Cleaning', slug: 'sofa-cleaning', category: 'deep-cleaning' },
  { id: 'carpet-cleaning', name: 'Carpet Cleaning', slug: 'carpet-cleaning', category: 'deep-cleaning' },
  { id: 'mattress-cleaning', name: 'Mattress Cleaning', slug: 'mattress-cleaning', category: 'deep-cleaning' },
  { id: 'kitchen-cleaning', name: 'Kitchen Deep Cleaning', slug: 'kitchen-cleaning', category: 'deep-cleaning' },
  { id: 'bathroom-cleaning', name: 'Bathroom Deep Cleaning', slug: 'bathroom-cleaning', category: 'deep-cleaning' },
  
  // Pest Control Services
  { id: 'general-pest-control', name: 'General Pest Control', slug: 'general-pest-control', category: 'pest-control' },
  { id: 'cockroach-control', name: 'Cockroach Control', slug: 'cockroach-control', category: 'pest-control' },
  { id: 'bed-bug-control', name: 'Bed Bug Treatment', slug: 'bed-bug-control', category: 'pest-control' },
  { id: 'rodent-control', name: 'Rodent Control', slug: 'rodent-control', category: 'pest-control' },
  { id: 'termite-control', name: 'Termite Treatment', slug: 'termite-control', category: 'pest-control' },
  { id: 'mosquito-control', name: 'Mosquito & Fly Control', slug: 'mosquito-control', category: 'pest-control' },
  
  // Plumbing Services
  { id: 'plumbing-repair', name: 'Plumbing Repair', slug: 'plumbing-repair', category: 'plumbing' },
  { id: 'drain-cleaning', name: 'Drain Cleaning & Unblocking', slug: 'drain-cleaning', category: 'plumbing' },
  { id: 'bathroom-plumbing', name: 'Bathroom Plumbing', slug: 'bathroom-plumbing', category: 'plumbing' },
  { id: 'water-heater-repair', name: 'Water Heater Repair', slug: 'water-heater-repair', category: 'plumbing' },
  
  // Electrician Services
  { id: 'electrical-repair', name: 'Electrical Repair', slug: 'electrical-repair', category: 'electrician' },
  { id: 'light-installation', name: 'Light Installation', slug: 'light-installation', category: 'electrician' },
  { id: 'electrical-panel', name: 'Electrical Panel Services', slug: 'electrical-panel', category: 'electrician' },
  
  // Handyman Services
  { id: 'general-handyman', name: 'General Handyman', slug: 'general-handyman', category: 'handyman' },
  { id: 'painting', name: 'Painting Services', slug: 'painting', category: 'handyman' },
  { id: 'furniture-assembly', name: 'Furniture Assembly', slug: 'furniture-assembly', category: 'handyman' },
  { id: 'wall-mounting', name: 'TV & Wall Mounting', slug: 'wall-mounting', category: 'handyman' },
  { id: 'door-repair', name: 'Door & Window Repair', slug: 'door-repair', category: 'handyman' },
  
  // Laundry & Dry Cleaning
  { id: 'laundry-service', name: 'Laundry Service', slug: 'laundry-service', category: 'laundry' },
  { id: 'dry-cleaning', name: 'Dry Cleaning', slug: 'dry-cleaning', category: 'laundry' },
  { id: 'ironing-service', name: 'Ironing Service', slug: 'ironing-service', category: 'laundry' }
];

const areas = [
  { id: 'abu-hail', name: 'Abu Hail', slug: 'abu-hail', subAreas: [] },
  { id: 'al-barsha', name: 'Al Barsha', slug: 'al-barsha', subAreas: [
    { id: 'al-barsha-1', name: 'Al Barsha 1', slug: 'al-barsha-1' },
    { id: 'al-barsha-2', name: 'Al Barsha 2', slug: 'al-barsha-2' },
    { id: 'al-barsha-3', name: 'Al Barsha 3', slug: 'al-barsha-3' },
    { id: 'al-barsha-south', name: 'Al Barsha South', slug: 'al-barsha-south' },
    { id: 'al-barsha-heights', name: 'Al Barsha Heights', slug: 'al-barsha-heights' }
  ]},
  { id: 'al-quoz', name: 'Al Quoz', slug: 'al-quoz', subAreas: [
    { id: 'al-quoz-1', name: 'Al Quoz 1', slug: 'al-quoz-1' },
    { id: 'al-quoz-2', name: 'Al Quoz 2', slug: 'al-quoz-2' },
    { id: 'al-quoz-3', name: 'Al Quoz 3', slug: 'al-quoz-3' },
    { id: 'al-quoz-4', name: 'Al Quoz 4', slug: 'al-quoz-4' }
  ]},
  { id: 'business-bay', name: 'Business Bay', slug: 'business-bay', subAreas: [
    { id: 'executive-bay', name: 'Executive Bay', slug: 'executive-bay' },
    { id: 'canal-views', name: 'Canal Views', slug: 'canal-views' },
    { id: 'business-central', name: 'Business Central', slug: 'business-central' },
    { id: 'bay-avenue', name: 'Bay Avenue', slug: 'bay-avenue' },
    { id: 'bay-square', name: 'Bay Square', slug: 'bay-square' }
  ]},
  { id: 'downtown-dubai', name: 'Downtown Dubai', slug: 'downtown-dubai', subAreas: [
    { id: 'burj-khalifa-area', name: 'Burj Khalifa Area', slug: 'burj-khalifa-area' },
    { id: 'dubai-mall-district', name: 'Dubai Mall District', slug: 'dubai-mall-district' },
    { id: 'opera-district', name: 'Opera District', slug: 'opera-district' },
    { id: 'difc', name: 'DIFC', slug: 'difc' },
    { id: 'old-town-dubai', name: 'Old Town Dubai', slug: 'old-town-dubai' }
  ]},
  { id: 'dubai-marina', name: 'Dubai Marina', slug: 'dubai-marina', subAreas: [
    { id: 'marina-walk', name: 'Marina Walk', slug: 'marina-walk' },
    { id: 'marina-promenade', name: 'Marina Promenade', slug: 'marina-promenade' },
    { id: 'marina-wharf', name: 'Marina Wharf', slug: 'marina-wharf' },
    { id: 'marina-gate', name: 'Marina Gate', slug: 'marina-gate' },
    { id: 'marina-crown', name: 'Marina Crown', slug: 'marina-crown' }
  ]},
  { id: 'jbr', name: 'JBR', slug: 'jbr', subAreas: [
    { id: 'jbr-walk', name: 'JBR Walk', slug: 'jbr-walk' },
    { id: 'beach-residence-1', name: 'Beach Residence 1', slug: 'beach-residence-1' },
    { id: 'beach-residence-2', name: 'Beach Residence 2', slug: 'beach-residence-2' },
    { id: 'beach-residence-3', name: 'Beach Residence 3', slug: 'beach-residence-3' },
    { id: 'bahar', name: 'Bahar', slug: 'bahar' }
  ]},
  { id: 'jumeirah', name: 'Jumeirah', slug: 'jumeirah', subAreas: [
    { id: 'jumeirah-1', name: 'Jumeirah 1', slug: 'jumeirah-1' },
    { id: 'jumeirah-2', name: 'Jumeirah 2', slug: 'jumeirah-2' },
    { id: 'jumeirah-3', name: 'Jumeirah 3', slug: 'jumeirah-3' },
    { id: 'al-manara', name: 'Al Manara', slug: 'al-manara' },
    { id: 'al-safa', name: 'Al Safa', slug: 'al-safa' },
    { id: 'al-wasl', name: 'Al Wasl', slug: 'al-wasl' },
    { id: 'umm-suqeim', name: 'Umm Suqeim', slug: 'umm-suqeim' }
  ]},
  { id: 'palm-jumeirah', name: 'Palm Jumeirah', slug: 'palm-jumeirah', subAreas: [
    { id: 'trunk', name: 'Trunk', slug: 'trunk' },
    { id: 'frond-a', name: 'Frond A', slug: 'frond-a' },
    { id: 'frond-b', name: 'Frond B', slug: 'frond-b' },
    { id: 'frond-c', name: 'Frond C', slug: 'frond-c' },
    { id: 'atlantis-area', name: 'Atlantis Area', slug: 'atlantis-area' }
  ]},
  { id: 'deira', name: 'Deira', slug: 'deira', subAreas: [
    { id: 'gold-souk-area', name: 'Gold Souk Area', slug: 'gold-souk-area' },
    { id: 'spice-souk-area', name: 'Spice Souk Area', slug: 'spice-souk-area' },
    { id: 'port-saeed', name: 'Port Saeed', slug: 'port-saeed' },
    { id: 'al-rigga', name: 'Al Rigga', slug: 'al-rigga' },
    { id: 'al-sabkha', name: 'Al Sabkha', slug: 'al-sabkha' }
  ]},
  { id: 'jlt', name: 'JLT', slug: 'jlt', subAreas: [
    { id: 'cluster-a', name: 'Cluster A', slug: 'cluster-a' },
    { id: 'cluster-b', name: 'Cluster B', slug: 'cluster-b' },
    { id: 'cluster-c', name: 'Cluster C', slug: 'cluster-c' },
    { id: 'cluster-d', name: 'Cluster D', slug: 'cluster-d' },
    { id: 'cluster-i', name: 'Cluster I', slug: 'cluster-i' }
  ]},
  { id: 'motor-city', name: 'Motor City', slug: 'motor-city', subAreas: [
    { id: 'green-community', name: 'Green Community', slug: 'green-community' },
    { id: 'motor-city-central', name: 'Motor City Central', slug: 'motor-city-central' },
    { id: 'uptown-motor-city', name: 'Uptown Motor City', slug: 'uptown-motor-city' }
  ]},
  { id: 'discovery-gardens', name: 'Discovery Gardens', slug: 'discovery-gardens', subAreas: [
    { id: 'mediterranean-cluster', name: 'Mediterranean Cluster', slug: 'mediterranean-cluster' },
    { id: 'zen-cluster', name: 'Zen Cluster', slug: 'zen-cluster' },
    { id: 'mogul-cluster', name: 'Mogul Cluster', slug: 'mogul-cluster' }
  ]}
];

const serviceCategories = [
  { id: 'ac-repair-cleaning', name: 'AC Repair & Cleaning', slug: 'ac-repair-cleaning' },
  { id: 'appliance-repair', name: 'Appliance Repair', slug: 'appliance-repair' },
  { id: 'deep-cleaning', name: 'Deep Cleaning Services', slug: 'deep-cleaning' },
  { id: 'pest-control', name: 'Pest Control', slug: 'pest-control' },
  { id: 'plumbing', name: 'Plumbing Services', slug: 'plumbing' },
  { id: 'electrician', name: 'Electrician Services', slug: 'electrician' },
  { id: 'handyman', name: 'Handyman Services', slug: 'handyman' },
  { id: 'laundry', name: 'Laundry & Dry Cleaning', slug: 'laundry' }
];

// Audit results storage
const auditResults = {
  summary: {
    totalPages: 0,
    workingPages: 0,
    nonFunctionalPages: 0,
    startTime: new Date().toISOString(),
    endTime: null,
    duration: null
  },
  workingPages: [],
  nonFunctionalPages: [],
  categories: {
    locationPages: { total: 0, working: 0, failed: 0 },
    servicePages: { total: 0, working: 0, failed: 0 },
    serviceLocationPages: { total: 0, working: 0, failed: 0 }
  }
};

// Utility functions
function makeRequest(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      timeout: TIMEOUT,
      headers: {
        'User-Agent': 'Platform-Audit-Bot/1.0'
      }
    };

    const req = client.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          headers: res.headers,
          body: data,
          responseTime: Date.now() - startTime
        });
      });
    });

    const startTime = Date.now();
    
    req.on('error', (error) => {
      resolve({
        url,
        statusCode: 0,
        statusMessage: 'Request Error',
        error: error.message,
        responseTime: Date.now() - startTime
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        statusCode: 0,
        statusMessage: 'Timeout',
        error: 'Request timeout',
        responseTime: TIMEOUT
      });
    });

    req.end();
  });
}

function analyzePageContent(response, pageType, expectedData) {
  const issues = [];
  
  // Check if page loaded successfully
  if (response.statusCode !== 200) {
    issues.push(`HTTP ${response.statusCode}: ${response.statusMessage || response.error}`);
    return { isWorking: false, issues };
  }

  // Check response time
  if (response.responseTime > 5000) {
    issues.push(`Slow response time: ${response.responseTime}ms`);
  }

  // Check content length
  if (!response.body || response.body.length < 1000) {
    issues.push('Content appears to be too short or missing');
  }

  // Check for error pages
  if (response.body && (
    response.body.includes('404') || 
    response.body.includes('Not Found') ||
    response.body.includes('Error') ||
    response.body.includes('Something went wrong')
  )) {
    issues.push('Page contains error content');
  }

  // Check for expected content based on page type
  if (response.body) {
    switch (pageType) {
      case 'service':
        if (!response.body.includes(expectedData.serviceName)) {
          issues.push(`Service name "${expectedData.serviceName}" not found in content`);
        }
        break;
      case 'location':
        if (!response.body.includes(expectedData.areaName)) {
          issues.push(`Area name "${expectedData.areaName}" not found in content`);
        }
        break;
      case 'service-location':
        if (!response.body.includes(expectedData.serviceName) || !response.body.includes(expectedData.areaName)) {
          issues.push(`Service "${expectedData.serviceName}" or area "${expectedData.areaName}" not found in content`);
        }
        break;
    }
  }

  // Check for responsive design indicators
  if (response.body && !response.body.includes('viewport')) {
    issues.push('Missing viewport meta tag for responsive design');
  }

  return {
    isWorking: issues.length === 0 || issues.every(issue => issue.includes('Slow response')),
    issues
  };
}

async function auditPages(pages, concurrency = MAX_CONCURRENT) {
  const results = [];
  
  for (let i = 0; i < pages.length; i += concurrency) {
    const batch = pages.slice(i, i + concurrency);
    const promises = batch.map(async (page) => {
      console.log(`Auditing: ${page.url}`);
      const response = await makeRequest(page.url);
      const analysis = analyzePageContent(response, page.type, page.expectedData);
      
      return {
        ...page,
        ...response,
        ...analysis,
        auditTime: new Date().toISOString()
      };
    });
    
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    
    // Progress indicator
    console.log(`Progress: ${Math.min(i + concurrency, pages.length)}/${pages.length} pages audited`);
  }
  
  return results;
}

function generatePageList() {
  const pages = [];
  
  // Main pages
  const mainPages = [
    { url: `${baseUrl}/`, type: 'main', name: 'Homepage' },
    { url: `${baseUrl}/services`, type: 'main', name: 'Services Index' },
    { url: `${baseUrl}/areas`, type: 'main', name: 'Areas Index' },
    { url: `${baseUrl}/providers`, type: 'main', name: 'Providers' },
    { url: `${baseUrl}/about`, type: 'main', name: 'About' },
    { url: `${baseUrl}/how-it-works`, type: 'main', name: 'How It Works' },
    { url: `${baseUrl}/contact`, type: 'main', name: 'Contact' },
    { url: `${baseUrl}/faq`, type: 'main', name: 'FAQ' }
  ];
  
  pages.push(...mainPages);

  // Service category pages
  serviceCategories.forEach(category => {
    pages.push({
      url: `${baseUrl}/services/${category.slug}`,
      type: 'service-category',
      name: `Service Category: ${category.name}`,
      expectedData: { categoryName: category.name }
    });
  });

  // Individual service pages
  services.forEach(service => {
    pages.push({
      url: `${baseUrl}/services/${service.slug}`,
      type: 'service',
      name: `Service: ${service.name}`,
      expectedData: { serviceName: service.name }
    });
  });

  // Area pages
  areas.forEach(area => {
    pages.push({
      url: `${baseUrl}/areas/${area.slug}`,
      type: 'location',
      name: `Area: ${area.name}`,
      expectedData: { areaName: area.name }
    });
    
    // Sub-area pages
    area.subAreas.forEach(subArea => {
      pages.push({
        url: `${baseUrl}/areas/${area.slug}/${subArea.slug}`,
        type: 'location',
        name: `Sub-area: ${subArea.name} in ${area.name}`,
        expectedData: { areaName: area.name, subAreaName: subArea.name }
      });
    });
  });

  // Service-location combinations (sample to avoid overwhelming)
  const sampleCombinations = [];
  
  // Take first 5 services and first 5 areas for comprehensive testing
  const testServices = services.slice(0, 5);
  const testAreas = areas.slice(0, 5);
  
  testServices.forEach(service => {
    testAreas.forEach(area => {
      // Service + Area combination
      sampleCombinations.push({
        url: `${baseUrl}/${service.slug}/${area.slug}`,
        type: 'service-location',
        name: `${service.name} in ${area.name}`,
        expectedData: { serviceName: service.name, areaName: area.name }
      });
      
      // Service + Area + SubArea combination (first subarea only)
      if (area.subAreas.length > 0) {
        const subArea = area.subAreas[0];
        sampleCombinations.push({
          url: `${baseUrl}/${service.slug}/${area.slug}/${subArea.slug}`,
          type: 'service-location',
          name: `${service.name} in ${subArea.name}, ${area.name}`,
          expectedData: { serviceName: service.name, areaName: area.name, subAreaName: subArea.name }
        });
      }
    });
  });
  
  pages.push(...sampleCombinations);
  
  return pages;
}

function categorizeResults(results) {
  results.forEach(result => {
    auditResults.summary.totalPages++;
    
    if (result.isWorking) {
      auditResults.summary.workingPages++;
      auditResults.workingPages.push({
        url: result.url,
        name: result.name,
        type: result.type,
        statusCode: result.statusCode,
        responseTime: result.responseTime,
        auditTime: result.auditTime
      });
    } else {
      auditResults.summary.nonFunctionalPages++;
      auditResults.nonFunctionalPages.push({
        url: result.url,
        name: result.name,
        type: result.type,
        statusCode: result.statusCode,
        issues: result.issues,
        error: result.error,
        auditTime: result.auditTime
      });
    }
    
    // Categorize by page type
    switch (result.type) {
      case 'location':
        auditResults.categories.locationPages.total++;
        if (result.isWorking) auditResults.categories.locationPages.working++;
        else auditResults.categories.locationPages.failed++;
        break;
      case 'service':
      case 'service-category':
        auditResults.categories.servicePages.total++;
        if (result.isWorking) auditResults.categories.servicePages.working++;
        else auditResults.categories.servicePages.failed++;
        break;
      case 'service-location':
        auditResults.categories.serviceLocationPages.total++;
        if (result.isWorking) auditResults.categories.serviceLocationPages.working++;
        else auditResults.categories.serviceLocationPages.failed++;
        break;
    }
  });
}

function generateReport() {
  auditResults.summary.endTime = new Date().toISOString();
  auditResults.summary.duration = new Date(auditResults.summary.endTime) - new Date(auditResults.summary.startTime);
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  switch (outputFormat) {
    case 'json':
      const jsonFile = path.join(OUTPUT_DIR, `audit-report-${timestamp}.json`);
      fs.writeFileSync(jsonFile, JSON.stringify(auditResults, null, 2));
      console.log(`\nJSON report saved to: ${jsonFile}`);
      break;
      
    case 'csv':
      const csvFile = path.join(OUTPUT_DIR, `audit-report-${timestamp}.csv`);
      const csvContent = generateCSV();
      fs.writeFileSync(csvFile, csvContent);
      console.log(`\nCSV report saved to: ${csvFile}`);
      break;
      
    default:
      printConsoleReport();
  }
}

function generateCSV() {
  const headers = ['Page Type', 'URL', 'Name', 'Status', 'Status Code', 'Response Time (ms)', 'Issue Description', 'Audit Time'];
  const rows = [headers.join(',')];
  
  // Working pages
  auditResults.workingPages.forEach(page => {
    rows.push([
      page.type,
      `"${page.url}"`,
      `"${page.name}"`,
      'Working',
      page.statusCode,
      page.responseTime || 0,
      '""',
      page.auditTime
    ].join(','));
  });
  
  // Non-functional pages
  auditResults.nonFunctionalPages.forEach(page => {
    const issues = page.issues ? page.issues.join('; ') : (page.error || 'Unknown error');
    rows.push([
      page.type,
      `"${page.url}"`,
      `"${page.name}"`,
      'Failed',
      page.statusCode || 0,
      0,
      `"${issues}"`,
      page.auditTime
    ].join(','));
  });
  
  return rows.join('\n');
}

function printConsoleReport() {
  console.log('\n' + '='.repeat(80));
  console.log('PLATFORM AUDIT REPORT');
  console.log('='.repeat(80));
  
  console.log('\nSUMMARY:');
  console.log(`Total Pages Audited: ${auditResults.summary.totalPages}`);
  console.log(`Working Pages: ${auditResults.summary.workingPages} (${((auditResults.summary.workingPages / auditResults.summary.totalPages) * 100).toFixed(1)}%)`);
  console.log(`Non-Functional Pages: ${auditResults.summary.nonFunctionalPages} (${((auditResults.summary.nonFunctionalPages / auditResults.summary.totalPages) * 100).toFixed(1)}%)`);
  console.log(`Audit Duration: ${Math.round(auditResults.summary.duration / 1000)} seconds`);
  
  console.log('\nBY CATEGORY:');
  console.log(`Location Pages: ${auditResults.categories.locationPages.working}/${auditResults.categories.locationPages.total} working`);
  console.log(`Service Pages: ${auditResults.categories.servicePages.working}/${auditResults.categories.servicePages.total} working`);
  console.log(`Service-Location Pages: ${auditResults.categories.serviceLocationPages.working}/${auditResults.categories.serviceLocationPages.total} working`);
  
  if (auditResults.nonFunctionalPages.length > 0) {
    console.log('\nNON-FUNCTIONAL PAGES:');
    console.log('-'.repeat(80));
    auditResults.nonFunctionalPages.forEach(page => {
      console.log(`❌ ${page.name}`);
      console.log(`   URL: ${page.url}`);
      console.log(`   Status: ${page.statusCode} ${page.error || ''}`);
      if (page.issues && page.issues.length > 0) {
        console.log(`   Issues: ${page.issues.join(', ')}`);
      }
      console.log('');
    });
  }
  
  console.log('\nTOP WORKING PAGES:');
  console.log('-'.repeat(80));
  auditResults.workingPages.slice(0, 10).forEach(page => {
    console.log(`✅ ${page.name} (${page.responseTime}ms)`);
  });
  
  console.log('\n' + '='.repeat(80));
  console.log('AUDIT COMPLETE');
  console.log('='.repeat(80));
}

// Main execution
async function runAudit() {
  console.log('Starting Platform Audit...');
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Output Format: ${outputFormat}`);
  console.log('');
  
  const pages = generatePageList();
  console.log(`Generated ${pages.length} pages to audit`);
  
  const results = await auditPages(pages);
  categorizeResults(results);
  generateReport();
}

// Run the audit
runAudit().catch(console.error);