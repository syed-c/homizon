#!/usr/bin/env node

/**
 * Quick Platform Audit Script
 * 
 * A lightweight version for quick health checks of critical pages
 * 
 * Usage: node scripts/quick-audit.js
 */

const https = require('https');
const http = require('http');

const BASE_URL = 'https://isk4i1s977mmsi0jkt94omug.macaly.dev';
const TIMEOUT = 5000;

// Critical pages to check
const criticalPages = [
  { url: `${BASE_URL}/`, name: 'Homepage', type: 'main' },
  { url: `${BASE_URL}/services`, name: 'Services Index', type: 'main' },
  { url: `${BASE_URL}/areas`, name: 'Areas Index', type: 'main' },
  
  // Top service categories
  { url: `${BASE_URL}/services/ac-repair-cleaning`, name: 'AC Services', type: 'service-category' },
  { url: `${BASE_URL}/services/deep-cleaning`, name: 'Cleaning Services', type: 'service-category' },
  { url: `${BASE_URL}/services/plumbing`, name: 'Plumbing Services', type: 'service-category' },
  
  // Top areas
  { url: `${BASE_URL}/areas/dubai-marina`, name: 'Dubai Marina', type: 'location' },
  { url: `${BASE_URL}/areas/downtown-dubai`, name: 'Downtown Dubai', type: 'location' },
  { url: `${BASE_URL}/areas/business-bay`, name: 'Business Bay', type: 'location' },
  
  // Critical service-location combinations
  { url: `${BASE_URL}/ac-repair/dubai-marina`, name: 'AC Repair in Dubai Marina', type: 'service-location' },
  { url: `${BASE_URL}/deep-cleaning/downtown-dubai`, name: 'Cleaning in Downtown', type: 'service-location' },
  { url: `${BASE_URL}/plumbing-repair/jbr`, name: 'Plumbing in JBR', type: 'service-location' }
];

function makeRequest(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname,
      method: 'HEAD', // Use HEAD for faster checks
      timeout: TIMEOUT,
      headers: {
        'User-Agent': 'Quick-Audit-Bot/1.0'
      }
    };

    const req = client.request(options, (res) => {
      resolve({
        url,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        responseTime: Date.now() - startTime,
        success: res.statusCode === 200
      });
    });

    const startTime = Date.now();
    
    req.on('error', (error) => {
      resolve({
        url,
        statusCode: 0,
        error: error.message,
        responseTime: Date.now() - startTime,
        success: false
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        statusCode: 0,
        error: 'Timeout',
        responseTime: TIMEOUT,
        success: false
      });
    });

    req.end();
  });
}

async function runQuickAudit() {
  console.log('🔍 Running Quick Platform Audit...\n');
  
  const results = [];
  let successCount = 0;
  
  for (const page of criticalPages) {
    process.stdout.write(`Testing ${page.name}... `);
    
    const result = await makeRequest(page.url);
    results.push({ ...page, ...result });
    
    if (result.success) {
      console.log(`✅ OK (${result.responseTime}ms)`);
      successCount++;
    } else {
      console.log(`❌ FAILED (${result.statusCode || 'ERROR'})`);
      if (result.error) {
        console.log(`   Error: ${result.error}`);
      }
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('QUICK AUDIT SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total Pages: ${criticalPages.length}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${criticalPages.length - successCount}`);
  console.log(`Success Rate: ${((successCount / criticalPages.length) * 100).toFixed(1)}%`);
  
  // Failed pages details
  const failedPages = results.filter(r => !r.success);
  if (failedPages.length > 0) {
    console.log('\nFAILED PAGES:');
    failedPages.forEach(page => {
      console.log(`❌ ${page.name}: ${page.url}`);
      console.log(`   Status: ${page.statusCode} ${page.error || ''}`);
    });
  }
  
  console.log('\n✨ Quick audit complete!');
  
  // Exit with error code if any pages failed
  process.exit(failedPages.length > 0 ? 1 : 0);
}

runQuickAudit().catch(console.error);