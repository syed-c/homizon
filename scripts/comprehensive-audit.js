#!/usr/bin/env node

/**
 * Comprehensive Platform Audit Script
 * 
 * This script audits the entire platform to identify gaps and missing pages
 * according to the requirements specified in the audit request.
 */

const fs = require('fs');
const path = require('path');

// Master data lists as specified in requirements
const MASTER_SERVICES = [
  // Appliance Repair
  { name: 'AC Repair & Cleaning', slug: 'ac-repair-cleaning', category: 'appliance-repair' },
  { name: 'Washing Machine Repair', slug: 'washing-machine-repair', category: 'appliance-repair' },
  { name: 'Refrigerator Repair', slug: 'refrigerator-repair', category: 'appliance-repair' },
  { name: 'Dishwasher Repair', slug: 'dishwasher-repair', category: 'appliance-repair' },
  { name: 'Oven & Stove Repair', slug: 'oven-stove-repair', category: 'appliance-repair' },
  { name: 'Dryer Repair', slug: 'dryer-repair', category: 'appliance-repair' },
  { name: 'Wine Cooler Repair', slug: 'wine-cooler-repair', category: 'appliance-repair' },
  { name: 'Ice Maker Repair', slug: 'ice-maker-repair', category: 'appliance-repair' },
  
  // Cleaning Services
  { name: 'Home Deep Cleaning', slug: 'home-deep-cleaning', category: 'cleaning-services' },
  { name: 'Sofa Cleaning', slug: 'sofa-cleaning', category: 'cleaning-services' },
  { name: 'Carpet Cleaning', slug: 'carpet-cleaning', category: 'cleaning-services' },
  { name: 'Mattress Cleaning', slug: 'mattress-cleaning', category: 'cleaning-services' },
  { name: 'Kitchen Cleaning', slug: 'kitchen-cleaning', category: 'cleaning-services' },
  { name: 'Bathroom Cleaning', slug: 'bathroom-cleaning', category: 'cleaning-services' },
  { name: 'Move-In/Move-Out Cleaning', slug: 'move-in-out-cleaning', category: 'cleaning-services' },
  
  // Pest Control
  { name: 'General Pest Control', slug: 'general-pest-control', category: 'pest-control' },
  { name: 'Cockroach Control', slug: 'cockroach-control', category: 'pest-control' },
  { name: 'Bed Bug Treatment', slug: 'bed-bug-treatment', category: 'pest-control' },
  { name: 'Termite Control', slug: 'termite-control', category: 'pest-control' },
  { name: 'Rodent Control', slug: 'rodent-control', category: 'pest-control' },
  { name: 'Disinfection & Sanitization', slug: 'disinfection-sanitization', category: 'pest-control' },
  
  // Handyman
  { name: 'Electrical', slug: 'electrical', category: 'handyman' },
  { name: 'Plumbing', slug: 'plumbing', category: 'handyman' },
  { name: 'AC Servicing', slug: 'ac-servicing', category: 'handyman' },
  { name: 'Painting', slug: 'painting', category: 'handyman' },
  { name: 'Curtain/TV/Furniture Installations', slug: 'installations', category: 'handyman' },
  
  // Other
  { name: 'Laundry & Dry Cleaning', slug: 'laundry-dry-cleaning', category: 'other' },
  { name: 'Packers & Movers', slug: 'packers-movers', category: 'other' }
];

const MASTER_AREAS = [
  'Al Barsha', 'Barsha Heights', 'Dubai Marina', 'JBR', 'JLT', 'Dubai Media City',
  'Dubai Internet City', 'Dubai Knowledge Park', 'Palm Jumeirah', 'Business Bay',
  'Downtown Dubai', 'DIFC', 'City Walk', 'Al Wasl', 'Jumeirah 1', 'Jumeirah 2',
  'Jumeirah 3', 'Umm Suqeim', 'Al Safa', 'Al Quoz', 'Al Quoz Industrial',
  'Al Sufouh', 'Dubai Hills Estate', 'Emirates Hills', 'The Meadows', 'The Springs',
  'The Lakes', 'Arabian Ranches', 'Arabian Ranches 2', 'Arabian Ranches 3',
  'Motor City', 'Sports City', 'Arjan', 'Al Barari', 'JVC (Jumeirah Village Circle)',
  'JVT (Jumeirah Village Triangle)', 'Al Furjan', 'Discovery Gardens', 'The Gardens',
  'Dubai Production City', 'Dubai Investment Park (DIP)', 'Dubai Silicon Oasis',
  'Academic City', 'Mirdif', 'Al Warqa', 'Al Mizhar', 'Nad Al Sheba', 'Meydan',
  'Dubai Creek Harbour', 'Deira', 'Bur Dubai', 'Karama', 'Satwa', 'Al Qusais',
  'Al Nahda', 'International City', 'Silicon Central', 'Dubai South', 'Jebel Ali',
  'Bluewaters Island', 'Al Mamzar', 'Dubai Festival City', 'Town Square',
  'Tilal Al Ghaf', 'Emaar Beachfront', 'Dubai Islands'
];

class PlatformAuditor {
  constructor() {
    this.auditResults = {
      services: { existing: [], missing: [] },
      areas: { existing: [], missing: [] },
      servicePages: { existing: [], missing: [] },
      areaPages: { existing: [], missing: [] },
      serviceAreaPages: { existing: [], missing: [] },
      navigation: { issues: [] },
      sitemap: { issues: [] },
      content: { issues: [] },
      booking: { issues: [] },
      providers: { issues: [] }
    };
    
    this.totalExpectedPages = 0;
    this.totalExistingPages = 0;
  }

  async runFullAudit() {
    console.log('🔍 Starting Comprehensive Platform Audit...\n');
    
    // 1. Audit Services
    await this.auditServices();
    
    // 2. Audit Areas
    await this.auditAreas();
    
    // 3. Audit Service Pages
    await this.auditServicePages();
    
    // 4. Audit Area Pages
    await this.auditAreaPages();
    
    // 5. Audit Service × Area Pages
    await this.auditServiceAreaPages();
    
    // 6. Audit Navigation
    await this.auditNavigation();
    
    // 7. Audit Sitemap
    await this.auditSitemap();
    
    // 8. Generate Report
    await this.generateReport();
    
    console.log('✅ Audit Complete! Check audit_report.json for detailed results.\n');
  }

  async auditServices() {
    console.log('📋 Auditing Services...');
    
    // Read current services from data file
    const dataPath = path.join(process.cwd(), 'lib/data.ts');
    let currentServices = [];
    
    if (fs.existsSync(dataPath)) {
      const dataContent = fs.readFileSync(dataPath, 'utf8');
      // Extract service names from the data file (simplified parsing)
      const serviceMatches = dataContent.match(/name: '([^']+)'/g);
      if (serviceMatches) {
        currentServices = serviceMatches.map(match => match.replace("name: '", '').replace("'", ''));
      }
    }
    
    // Compare with master list
    MASTER_SERVICES.forEach(masterService => {
      const exists = currentServices.some(current => 
        current.toLowerCase().includes(masterService.name.toLowerCase()) ||
        masterService.name.toLowerCase().includes(current.toLowerCase())
      );
      
      if (exists) {
        this.auditResults.services.existing.push(masterService);
      } else {
        this.auditResults.services.missing.push(masterService);
      }
    });
    
    console.log(`   ✅ Found ${this.auditResults.services.existing.length} existing services`);
    console.log(`   ❌ Missing ${this.auditResults.services.missing.length} services`);
  }

  async auditAreas() {
    console.log('🗺️  Auditing Areas...');
    
    // Read current areas from data file
    const dataPath = path.join(process.cwd(), 'lib/data.ts');
    let currentAreas = [];
    
    if (fs.existsSync(dataPath)) {
      const dataContent = fs.readFileSync(dataPath, 'utf8');
      // Extract area names from the data file (simplified parsing)
      const areaMatches = dataContent.match(/name: '([^']+)'/g);
      if (areaMatches) {
        currentAreas = areaMatches.map(match => match.replace("name: '", '').replace("'", ''));
      }
    }
    
    // Compare with master list
    MASTER_AREAS.forEach(masterArea => {
      const exists = currentAreas.some(current => 
        current.toLowerCase().includes(masterArea.toLowerCase()) ||
        masterArea.toLowerCase().includes(current.toLowerCase())
      );
      
      if (exists) {
        this.auditResults.areas.existing.push(masterArea);
      } else {
        this.auditResults.areas.missing.push(masterArea);
      }
    });
    
    console.log(`   ✅ Found ${this.auditResults.areas.existing.length} existing areas`);
    console.log(`   ❌ Missing ${this.auditResults.areas.missing.length} areas`);
  }

  async auditServicePages() {
    console.log('🔧 Auditing Service Pages...');
    
    const servicesDir = path.join(process.cwd(), 'app/services');
    let existingServicePages = [];
    
    if (fs.existsSync(servicesDir)) {
      const serviceDirs = fs.readdirSync(servicesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      existingServicePages = serviceDirs;
    }
    
    // Check for each master service
    MASTER_SERVICES.forEach(service => {
      const exists = existingServicePages.some(existing => 
        existing === service.slug || existing.includes(service.slug.split('-')[0])
      );
      
      const pageInfo = {
        service: service.name,
        slug: service.slug,
        url: `/services/${service.slug}`,
        exists: exists,
        linked: false, // Will be checked in navigation audit
        in_sitemap: false, // Will be checked in sitemap audit
        content_ok: false,
        faq_ok: false,
        providers_visible: false,
        form_ok: false
      };
      
      if (exists) {
        this.auditResults.servicePages.existing.push(pageInfo);
      } else {
        this.auditResults.servicePages.missing.push(pageInfo);
      }
    });
    
    console.log(`   ✅ Found ${this.auditResults.servicePages.existing.length} existing service pages`);
    console.log(`   ❌ Missing ${this.auditResults.servicePages.missing.length} service pages`);
  }

  async auditAreaPages() {
    console.log('📍 Auditing Area Pages...');
    
    const areasDir = path.join(process.cwd(), 'app/areas');
    let existingAreaPages = [];
    
    if (fs.existsSync(areasDir)) {
      const areaDirs = fs.readdirSync(areasDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      existingAreaPages = areaDirs;
    }
    
    // Check for each master area
    MASTER_AREAS.forEach(area => {
      const slug = area.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const exists = existingAreaPages.some(existing => 
        existing === slug || existing.includes(slug.split('-')[0])
      );
      
      const pageInfo = {
        area: area,
        slug: slug,
        url: `/areas/${slug}`,
        exists: exists,
        linked: false,
        in_sitemap: false,
        content_ok: false,
        faq_ok: false,
        providers_visible: false,
        form_ok: false
      };
      
      if (exists) {
        this.auditResults.areaPages.existing.push(pageInfo);
      } else {
        this.auditResults.areaPages.missing.push(pageInfo);
      }
    });
    
    console.log(`   ✅ Found ${this.auditResults.areaPages.existing.length} existing area pages`);
    console.log(`   ❌ Missing ${this.auditResults.areaPages.missing.length} area pages`);
  }

  async auditServiceAreaPages() {
    console.log('🔗 Auditing Service × Area Pages...');
    
    // Calculate total expected combinations
    this.totalExpectedPages = MASTER_SERVICES.length * MASTER_AREAS.length;
    
    // Check for dynamic route structure
    const dynamicRoutePath = path.join(process.cwd(), 'app/[service]/[area]/page.tsx');
    const hasDynamicRoutes = fs.existsSync(dynamicRoutePath);
    
    console.log(`   📊 Expected combinations: ${this.totalExpectedPages.toLocaleString()}`);
    console.log(`   🔄 Dynamic routes: ${hasDynamicRoutes ? 'Yes' : 'No'}`);
    
    // For each service-area combination
    let existingCount = 0;
    let missingCount = 0;
    
    MASTER_SERVICES.forEach(service => {
      MASTER_AREAS.forEach(area => {
        const areaSlug = area.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const pageInfo = {
          type: 'service-area',
          service: service.slug,
          area: areaSlug,
          url: `/${service.slug}/${areaSlug}`,
          exists: hasDynamicRoutes, // If dynamic routes exist, all combinations are theoretically available
          linked: false,
          in_sitemap: false,
          content_ok: false,
          faq_ok: false,
          providers_visible: false,
          form_ok: false
        };
        
        if (hasDynamicRoutes) {
          this.auditResults.serviceAreaPages.existing.push(pageInfo);
          existingCount++;
        } else {
          this.auditResults.serviceAreaPages.missing.push(pageInfo);
          missingCount++;
        }
      });
    });
    
    this.totalExistingPages = existingCount;
    
    console.log(`   ✅ Existing: ${existingCount.toLocaleString()} service-area pages`);
    console.log(`   ❌ Missing: ${missingCount.toLocaleString()} service-area pages`);
  }

  async auditNavigation() {
    console.log('🧭 Auditing Navigation...');
    
    const headerPath = path.join(process.cwd(), 'components/navigation/header.tsx');
    const footerPath = path.join(process.cwd(), 'components/navigation/footer.tsx');
    
    let issues = [];
    
    // Check header
    if (fs.existsSync(headerPath)) {
      const headerContent = fs.readFileSync(headerPath, 'utf8');
      
      // Check for services dropdown
      if (!headerContent.includes('Services') || !headerContent.includes('dropdown')) {
        issues.push('Header missing services dropdown');
      }
      
      // Check for areas dropdown
      if (!headerContent.includes('Areas') || !headerContent.includes('dropdown')) {
        issues.push('Header missing areas dropdown');
      }
      
      // Check mobile navigation
      if (!headerContent.includes('mobile') && !headerContent.includes('Menu')) {
        issues.push('Header missing mobile navigation');
      }
    } else {
      issues.push('Header component not found');
    }
    
    // Check footer
    if (fs.existsSync(footerPath)) {
      const footerContent = fs.readFileSync(footerPath, 'utf8');
      
      // Check for service links
      if (!footerContent.includes('/services/')) {
        issues.push('Footer missing service links');
      }
      
      // Check for area links
      if (!footerContent.includes('/areas/')) {
        issues.push('Footer missing area links');
      }
      
      // Check for sitemap link
      if (!footerContent.includes('/sitemap')) {
        issues.push('Footer missing sitemap link');
      }
    } else {
      issues.push('Footer component not found');
    }
    
    this.auditResults.navigation.issues = issues;
    console.log(`   ${issues.length === 0 ? '✅' : '❌'} Navigation issues: ${issues.length}`);
  }

  async auditSitemap() {
    console.log('🗺️  Auditing Sitemap...');
    
    const sitemapXmlPath = path.join(process.cwd(), 'app/sitemap.xml/route.ts');
    const sitemapPagePath = path.join(process.cwd(), 'app/sitemap/page.tsx');
    
    let issues = [];
    
    // Check sitemap.xml
    if (fs.existsSync(sitemapXmlPath)) {
      const sitemapContent = fs.readFileSync(sitemapXmlPath, 'utf8');
      
      if (!sitemapContent.includes('generateServiceAreaCombinations')) {
        issues.push('sitemap.xml not generating service-area combinations');
      }
      
      if (!sitemapContent.includes('services.forEach')) {
        issues.push('sitemap.xml not including individual services');
      }
      
      if (!sitemapContent.includes('areas.forEach')) {
        issues.push('sitemap.xml not including areas');
      }
    } else {
      issues.push('sitemap.xml route not found');
    }
    
    // Check human sitemap page
    if (!fs.existsSync(sitemapPagePath)) {
      issues.push('/sitemap/ human-readable page not found');
    }
    
    this.auditResults.sitemap.issues = issues;
    console.log(`   ${issues.length === 0 ? '✅' : '❌'} Sitemap issues: ${issues.length}`);
  }

  async generateReport() {
    console.log('📊 Generating Audit Report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalExpectedPages: this.totalExpectedPages,
        totalExistingPages: this.totalExistingPages,
        completionPercentage: Math.round((this.totalExistingPages / this.totalExpectedPages) * 100),
        criticalIssues: this.getCriticalIssuesCount()
      },
      services: this.auditResults.services,
      areas: this.auditResults.areas,
      pages: {
        servicePages: this.auditResults.servicePages,
        areaPages: this.auditResults.areaPages,
        serviceAreaPages: {
          total: this.auditResults.serviceAreaPages.existing.length + this.auditResults.serviceAreaPages.missing.length,
          existing: this.auditResults.serviceAreaPages.existing.length,
          missing: this.auditResults.serviceAreaPages.missing.length,
          samples: this.auditResults.serviceAreaPages.existing.slice(0, 10) // First 10 as samples
        }
      },
      navigation: this.auditResults.navigation,
      sitemap: this.auditResults.sitemap,
      recommendations: this.generateRecommendations()
    };
    
    // Write detailed report
    fs.writeFileSync('audit_report.json', JSON.stringify(report, null, 2));
    
    // Write CSV summary
    this.generateCSVReport();
    
    // Print summary
    console.log('\n📋 AUDIT SUMMARY');
    console.log('================');
    console.log(`Total Expected Pages: ${this.totalExpectedPages.toLocaleString()}`);
    console.log(`Total Existing Pages: ${this.totalExistingPages.toLocaleString()}`);
    console.log(`Completion: ${report.summary.completionPercentage}%`);
    console.log(`Critical Issues: ${report.summary.criticalIssues}`);
    console.log('\n📁 Files Generated:');
    console.log('- audit_report.json (detailed report)');
    console.log('- audit_summary.csv (CSV format)');
  }

  generateCSVReport() {
    const csvRows = [];
    csvRows.push('type,service,area,url,exists,linked,in_sitemap,content_ok,faq_ok,providers_visible,form_ok');
    
    // Service pages
    [...this.auditResults.servicePages.existing, ...this.auditResults.servicePages.missing].forEach(page => {
      csvRows.push(`service,${page.service},,${page.url},${page.exists},${page.linked},${page.in_sitemap},${page.content_ok},${page.faq_ok},${page.providers_visible},${page.form_ok}`);
    });
    
    // Area pages
    [...this.auditResults.areaPages.existing, ...this.auditResults.areaPages.missing].forEach(page => {
      csvRows.push(`area,,${page.area},${page.url},${page.exists},${page.linked},${page.in_sitemap},${page.content_ok},${page.faq_ok},${page.providers_visible},${page.form_ok}`);
    });
    
    // Service-area pages (sample)
    [...this.auditResults.serviceAreaPages.existing.slice(0, 100), ...this.auditResults.serviceAreaPages.missing.slice(0, 100)].forEach(page => {
      csvRows.push(`service-area,${page.service},${page.area},${page.url},${page.exists},${page.linked},${page.in_sitemap},${page.content_ok},${page.faq_ok},${page.providers_visible},${page.form_ok}`);
    });
    
    fs.writeFileSync('audit_summary.csv', csvRows.join('\n'));
  }

  getCriticalIssuesCount() {
    let count = 0;
    count += this.auditResults.services.missing.length;
    count += this.auditResults.areas.missing.length;
    count += this.auditResults.navigation.issues.length;
    count += this.auditResults.sitemap.issues.length;
    return count;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.auditResults.services.missing.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Services',
        issue: `${this.auditResults.services.missing.length} services missing from master list`,
        action: 'Update lib/data.ts to include all master services'
      });
    }
    
    if (this.auditResults.areas.missing.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Areas',
        issue: `${this.auditResults.areas.missing.length} areas missing from master list`,
        action: 'Update lib/data.ts to include all master areas'
      });
    }
    
    if (this.auditResults.servicePages.missing.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Service Pages',
        issue: `${this.auditResults.servicePages.missing.length} service pages missing`,
        action: 'Create individual service pages or ensure dynamic routing covers all services'
      });
    }
    
    if (this.auditResults.navigation.issues.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Navigation',
        issue: 'Navigation issues detected',
        action: 'Fix header/footer navigation components'
      });
    }
    
    if (this.auditResults.sitemap.issues.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'SEO',
        issue: 'Sitemap issues detected',
        action: 'Fix sitemap.xml generation and human-readable sitemap'
      });
    }
    
    return recommendations;
  }
}

// Run the audit
if (require.main === module) {
  const auditor = new PlatformAuditor();
  auditor.runFullAudit().catch(console.error);
}

module.exports = PlatformAuditor;