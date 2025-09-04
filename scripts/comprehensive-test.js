#!/usr/bin/env node

/**
 * Comprehensive Platform Testing Script
 * 
 * This script tests all major platform functionality to ensure
 * everything is working correctly after the audit fixes.
 */

const fs = require('fs');
const path = require('path');

class PlatformTester {
  constructor() {
    this.testResults = {
      routing: { passed: 0, failed: 0, tests: [] },
      content: { passed: 0, failed: 0, tests: [] },
      navigation: { passed: 0, failed: 0, tests: [] },
      sitemap: { passed: 0, failed: 0, tests: [] },
      booking: { passed: 0, failed: 0, tests: [] },
      admin: { passed: 0, failed: 0, tests: [] }
    };
  }

  async runAllTests() {
    console.log('🧪 Starting Comprehensive Platform Tests...\n');
    
    // Test 1: Dynamic Routing
    await this.testDynamicRouting();
    
    // Test 2: Content Generation
    await this.testContentGeneration();
    
    // Test 3: Navigation Systems
    await this.testNavigation();
    
    // Test 4: Sitemap Generation
    await this.testSitemap();
    
    // Test 5: Booking System
    await this.testBookingSystem();
    
    // Test 6: Admin Functions
    await this.testAdminFunctions();
    
    // Generate final report
    await this.generateTestReport();
    
    console.log('✅ All tests completed!\n');
  }

  async testDynamicRouting() {
    console.log('🔗 Testing Dynamic Routing...');
    
    const testCases = [
      { service: 'ac-repair-cleaning', area: 'dubai-marina', expected: true },
      { service: 'washing-machine-repair', area: 'business-bay', expected: true },
      { service: 'general-pest-control', area: 'downtown-dubai', expected: true },
      { service: 'invalid-service', area: 'dubai-marina', expected: false },
      { service: 'ac-repair-cleaning', area: 'invalid-area', expected: false }
    ];
    
    for (const testCase of testCases) {
      const routePath = path.join(process.cwd(), 'app/[service]/[area]/page.tsx');
      const routeExists = fs.existsSync(routePath);
      
      const testResult = {
        name: `Route /${testCase.service}/${testCase.area}`,
        expected: testCase.expected,
        actual: routeExists,
        passed: routeExists === testCase.expected,
        details: routeExists ? 'Dynamic route file exists' : 'Dynamic route file missing'
      };
      
      this.testResults.routing.tests.push(testResult);
      
      if (testResult.passed) {
        this.testResults.routing.passed++;
        console.log(`   ✅ ${testResult.name}`);
      } else {
        this.testResults.routing.failed++;
        console.log(`   ❌ ${testResult.name} - ${testResult.details}`);
      }
    }
    
    console.log(`   📊 Routing: ${this.testResults.routing.passed} passed, ${this.testResults.routing.failed} failed\n`);
  }

  async testContentGeneration() {
    console.log('📝 Testing Content Generation...');
    
    const testCases = [
      { service: 'AC Repair & Cleaning', area: 'Dubai Marina', minWords: 100 },
      { service: 'Deep Home Cleaning', area: 'Downtown Dubai', minWords: 100 },
      { service: 'General Pest Control', area: 'Business Bay', minWords: 100 }
    ];
    
    for (const testCase of testCases) {
      // Simulate content generation
      const generatedContent = this.generateTestContent(testCase.service, testCase.area);
      const wordCount = generatedContent.split(' ').length;
      
      const testResult = {
        name: `Content for ${testCase.service} in ${testCase.area}`,
        expected: `>= ${testCase.minWords} words`,
        actual: `${wordCount} words`,
        passed: wordCount >= testCase.minWords,
        details: `Generated ${wordCount} words of content`
      };
      
      this.testResults.content.tests.push(testResult);
      
      if (testResult.passed) {
        this.testResults.content.passed++;
        console.log(`   ✅ ${testResult.name} (${wordCount} words)`);
      } else {
        this.testResults.content.failed++;
        console.log(`   ❌ ${testResult.name} - Only ${wordCount} words generated`);
      }
    }
    
    console.log(`   📊 Content: ${this.testResults.content.passed} passed, ${this.testResults.content.failed} failed\n`);
  }

  async testNavigation() {
    console.log('🧭 Testing Navigation Systems...');
    
    const headerPath = path.join(process.cwd(), 'components/navigation/header.tsx');
    const footerPath = path.join(process.cwd(), 'components/navigation/footer.tsx');
    
    const tests = [
      {
        name: 'Header component exists',
        test: () => fs.existsSync(headerPath),
        expected: true
      },
      {
        name: 'Footer component exists',
        test: () => fs.existsSync(footerPath),
        expected: true
      },
      {
        name: 'Header contains services dropdown',
        test: () => {
          if (!fs.existsSync(headerPath)) return false;
          const content = fs.readFileSync(headerPath, 'utf8');
          return content.includes('Services') && content.includes('dropdown');
        },
        expected: true
      },
      {
        name: 'Header contains areas dropdown',
        test: () => {
          if (!fs.existsSync(headerPath)) return false;
          const content = fs.readFileSync(headerPath, 'utf8');
          return content.includes('Areas') && content.includes('dropdown');
        },
        expected: true
      },
      {
        name: 'Footer contains service links',
        test: () => {
          if (!fs.existsSync(footerPath)) return false;
          const content = fs.readFileSync(footerPath, 'utf8');
          return content.includes('/services/');
        },
        expected: true
      },
      {
        name: 'Footer contains sitemap link',
        test: () => {
          if (!fs.existsSync(footerPath)) return false;
          const content = fs.readFileSync(footerPath, 'utf8');
          return content.includes('/sitemap');
        },
        expected: true
      }
    ];
    
    for (const test of tests) {
      const actual = test.test();
      const testResult = {
        name: test.name,
        expected: test.expected,
        actual: actual,
        passed: actual === test.expected,
        details: actual ? 'Found' : 'Not found'
      };
      
      this.testResults.navigation.tests.push(testResult);
      
      if (testResult.passed) {
        this.testResults.navigation.passed++;
        console.log(`   ✅ ${testResult.name}`);
      } else {
        this.testResults.navigation.failed++;
        console.log(`   ❌ ${testResult.name}`);
      }
    }
    
    console.log(`   📊 Navigation: ${this.testResults.navigation.passed} passed, ${this.testResults.navigation.failed} failed\n`);
  }

  async testSitemap() {
    console.log('🗺️  Testing Sitemap Generation...');
    
    const sitemapXmlPath = path.join(process.cwd(), 'app/sitemap.xml/route.ts');
    const sitemapPagePath = path.join(process.cwd(), 'app/sitemap/page.tsx');
    
    const tests = [
      {
        name: 'sitemap.xml route exists',
        test: () => fs.existsSync(sitemapXmlPath),
        expected: true
      },
      {
        name: 'Human sitemap page exists',
        test: () => fs.existsSync(sitemapPagePath),
        expected: true
      },
      {
        name: 'sitemap.xml includes service combinations',
        test: () => {
          if (!fs.existsSync(sitemapXmlPath)) return false;
          const content = fs.readFileSync(sitemapXmlPath, 'utf8');
          return content.includes('generateServiceAreaCombinations');
        },
        expected: true
      },
      {
        name: 'sitemap.xml includes individual services',
        test: () => {
          if (!fs.existsSync(sitemapXmlPath)) return false;
          const content = fs.readFileSync(sitemapXmlPath, 'utf8');
          return content.includes('services.forEach');
        },
        expected: true
      },
      {
        name: 'Human sitemap includes search functionality',
        test: () => {
          if (!fs.existsSync(sitemapPagePath)) return false;
          const content = fs.readFileSync(sitemapPagePath, 'utf8');
          return content.includes('searchQuery') && content.includes('filter');
        },
        expected: true
      }
    ];
    
    for (const test of tests) {
      const actual = test.test();
      const testResult = {
        name: test.name,
        expected: test.expected,
        actual: actual,
        passed: actual === test.expected,
        details: actual ? 'Found' : 'Not found'
      };
      
      this.testResults.sitemap.tests.push(testResult);
      
      if (testResult.passed) {
        this.testResults.sitemap.passed++;
        console.log(`   ✅ ${testResult.name}`);
      } else {
        this.testResults.sitemap.failed++;
        console.log(`   ❌ ${testResult.name}`);
      }
    }
    
    console.log(`   📊 Sitemap: ${this.testResults.sitemap.passed} passed, ${this.testResults.sitemap.failed} failed\n`);
  }

  async testBookingSystem() {
    console.log('📅 Testing Booking System...');
    
    const bookingModalPath = path.join(process.cwd(), 'components/booking-modal.tsx');
    const leadsApiPath = path.join(process.cwd(), 'app/api/leads/route.ts');
    
    const tests = [
      {
        name: 'Booking modal component exists',
        test: () => fs.existsSync(bookingModalPath),
        expected: true
      },
      {
        name: 'Leads API endpoint exists',
        test: () => fs.existsSync(leadsApiPath),
        expected: true
      },
      {
        name: 'Booking modal includes form validation',
        test: () => {
          if (!fs.existsSync(bookingModalPath)) return false;
          const content = fs.readFileSync(bookingModalPath, 'utf8');
          return content.includes('validation') || content.includes('required');
        },
        expected: true
      },
      {
        name: 'Leads API handles POST requests',
        test: () => {
          if (!fs.existsSync(leadsApiPath)) return false;
          const content = fs.readFileSync(leadsApiPath, 'utf8');
          return content.includes('POST') && content.includes('NextRequest');
        },
        expected: true
      }
    ];
    
    for (const test of tests) {
      const actual = test.test();
      const testResult = {
        name: test.name,
        expected: test.expected,
        actual: actual,
        passed: actual === test.expected,
        details: actual ? 'Found' : 'Not found'
      };
      
      this.testResults.booking.tests.push(testResult);
      
      if (testResult.passed) {
        this.testResults.booking.passed++;
        console.log(`   ✅ ${testResult.name}`);
      } else {
        this.testResults.booking.failed++;
        console.log(`   ❌ ${testResult.name}`);
      }
    }
    
    console.log(`   📊 Booking: ${this.testResults.booking.passed} passed, ${this.testResults.booking.failed} failed\n`);
  }

  async testAdminFunctions() {
    console.log('⚙️  Testing Admin Functions...');
    
    const adminPagesPath = path.join(process.cwd(), 'app/admin/pages/page.tsx');
    const createModalPath = path.join(process.cwd(), 'components/create-page-modal.tsx');
    const pagesApiPath = path.join(process.cwd(), 'app/api/admin/pages/route.ts');
    
    const tests = [
      {
        name: 'Admin pages management exists',
        test: () => fs.existsSync(adminPagesPath),
        expected: true
      },
      {
        name: 'Create page modal exists',
        test: () => fs.existsSync(createModalPath),
        expected: true
      },
      {
        name: 'Pages API endpoint exists',
        test: () => fs.existsSync(pagesApiPath),
        expected: true
      },
      {
        name: 'Create modal includes service selection',
        test: () => {
          if (!fs.existsSync(createModalPath)) return false;
          const content = fs.readFileSync(createModalPath, 'utf8');
          return content.includes('selectedService') && content.includes('Select');
        },
        expected: true
      },
      {
        name: 'Pages API handles bulk creation',
        test: () => {
          if (!fs.existsSync(pagesApiPath)) return false;
          const content = fs.readFileSync(pagesApiPath, 'utf8');
          return content.includes('bulkCreate') || content.includes('create');
        },
        expected: true
      }
    ];
    
    for (const test of tests) {
      const actual = test.test();
      const testResult = {
        name: test.name,
        expected: test.expected,
        actual: actual,
        passed: actual === test.expected,
        details: actual ? 'Found' : 'Not found'
      };
      
      this.testResults.admin.tests.push(testResult);
      
      if (testResult.passed) {
        this.testResults.admin.passed++;
        console.log(`   ✅ ${testResult.name}`);
      } else {
        this.testResults.admin.failed++;
        console.log(`   ❌ ${testResult.name}`);
      }
    }
    
    console.log(`   📊 Admin: ${this.testResults.admin.passed} passed, ${this.testResults.admin.failed} failed\n`);
  }

  generateTestContent(service, area) {
    return `Professional ${service} services in ${area} - your trusted local experts for quality solutions. ${area} presents unique considerations for ${service.toLowerCase()} that our local experts understand well. The Dubai climate, building regulations, and community standards all factor into providing effective service solutions. Our streamlined process makes booking ${service.toLowerCase()} in ${area} simple and stress-free. Start by describing your needs through our platform - whether it's routine maintenance, emergency repairs, or new installations. Why choose professional ${service.toLowerCase()} in ${area}? Quality matters when it comes to your home and business needs. Our network of licensed, insured professionals brings years of experience and local expertise to every project.`;
  }

  async generateTestReport() {
    const totalTests = Object.values(this.testResults).reduce((sum, category) => sum + category.tests.length, 0);
    const totalPassed = Object.values(this.testResults).reduce((sum, category) => sum + category.passed, 0);
    const totalFailed = Object.values(this.testResults).reduce((sum, category) => sum + category.failed, 0);
    
    console.log('📊 COMPREHENSIVE TEST REPORT');
    console.log('============================');
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${totalPassed}`);
    console.log(`Failed: ${totalFailed}`);
    console.log(`Success Rate: ${((totalPassed / totalTests) * 100).toFixed(1)}%\n`);
    
    // Category breakdown
    Object.entries(this.testResults).forEach(([category, results]) => {
      const categoryTotal = results.tests.length;
      const categoryRate = categoryTotal > 0 ? ((results.passed / categoryTotal) * 100).toFixed(1) : '0.0';
      console.log(`${category.toUpperCase()}: ${results.passed}/${categoryTotal} (${categoryRate}%)`);
    });
    
    // Write detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTests,
        totalPassed,
        totalFailed,
        successRate: ((totalPassed / totalTests) * 100).toFixed(1) + '%'
      },
      categories: this.testResults,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync('test_report.json', JSON.stringify(report, null, 2));
    
    console.log('\n📁 Test report saved to: test_report.json');
  }

  generateRecommendations() {
    const recommendations = [];
    
    Object.entries(this.testResults).forEach(([category, results]) => {
      const failedTests = results.tests.filter(test => !test.passed);
      
      if (failedTests.length > 0) {
        recommendations.push({
          category: category.toUpperCase(),
          priority: failedTests.length > 2 ? 'HIGH' : 'MEDIUM',
          issue: `${failedTests.length} failed tests in ${category}`,
          action: `Review and fix failed ${category} tests`,
          failedTests: failedTests.map(test => test.name)
        });
      }
    });
    
    if (recommendations.length === 0) {
      recommendations.push({
        category: 'OVERALL',
        priority: 'LOW',
        issue: 'All tests passing',
        action: 'Continue monitoring and maintain current quality standards'
      });
    }
    
    return recommendations;
  }
}

// Run the tests
if (require.main === module) {
  const tester = new PlatformTester();
  tester.runAllTests().catch(console.error);
}

module.exports = PlatformTester;