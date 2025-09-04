import { NextResponse } from 'next/server';
import { services, areas, serviceCategories, generateServiceAreaCombinations } from '@/lib/data';

export async function GET() {
  console.log("Generating dynamic XML sitemap");

  const baseUrl = 'https://homizon.com'; // Updated to HOMIZON domain
  const currentDate = new Date().toISOString();
  
  // Generate all service-area combinations
  const combinations = generateServiceAreaCombinations();
  
  // Create sitemap entries
  const sitemapEntries: string[] = [];
  
  // Main pages
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/areas', priority: '0.9', changefreq: 'weekly' },
    { url: '/providers', priority: '0.8', changefreq: 'daily' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/how-it-works', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' },
    { url: '/book', priority: '0.8', changefreq: 'daily' },
    { url: '/sitemap', priority: '0.5', changefreq: 'weekly' }
  ];
  
  mainPages.forEach(page => {
    sitemapEntries.push(`
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`);
  });
  
  // Service category pages
  serviceCategories.forEach(category => {
    sitemapEntries.push(`
    <url>
      <loc>${baseUrl}/services/${category.slug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`);
  });
  
  // Individual service pages
  services.forEach(service => {
    sitemapEntries.push(`
    <url>
      <loc>${baseUrl}/services/${service.slug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`);
  });
  
  // Area pages
  areas.forEach(area => {
    sitemapEntries.push(`
    <url>
      <loc>${baseUrl}/areas/${area.slug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`);
  });
  
  // Service-area combinations (limit to prevent huge sitemaps)
  const priorityCombinations = combinations.slice(0, 1000); // Limit for performance
  
  priorityCombinations.forEach(combo => {
    const priority = combo.type === 'service-area' ? '0.6' : '0.5';
    const changefreq = combo.type === 'service-area' ? 'weekly' : 'monthly';
    
    sitemapEntries.push(`
    <url>
      <loc>${baseUrl}${combo.url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`);
  });
  
  // Create the complete sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries.join('')}
</urlset>`;
  
  console.log(`Generated sitemap with ${sitemapEntries.length} entries`);
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
