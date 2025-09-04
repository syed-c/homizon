const fs = require('fs');
const path = require('path');

// All services that should have pages
const services = [
  'ac-cleaning', 'ac-repair', 'ac-servicing', 'appliance-repairs', 'bathroom-cleaning', 
  'bathroom-plumbing', 'bed-bug-control', 'carpet-cleaning', 'cleaning-services', 
  'handyman-services', 'pest-control'
];

// All areas with their subareas
const areas = {
  'academic-city': [],
  'al-barari': [],
  'al-barsha': ['al-barsha-1', 'al-barsha-2', 'al-barsha-3', 'al-barsha-heights', 'al-barsha-south'],
  'al-furjan': [],
  'al-garhoud': ['dubai-creek-golf', 'garhoud-bridge'],
  'al-karama': ['karama-residential', 'karama-souk'],
  'al-khawaneej': ['khawaneej-1', 'khawaneej-2'],
  'al-mamzar': [],
  'al-mizhar': ['mizhar-1', 'mizhar-2'],
  'al-nahda': ['nahda-1', 'nahda-2'],
  'al-quoz': ['al-quoz-1', 'al-quoz-2', 'al-quoz-3', 'al-quoz-4'],
  'al-qusais': ['qusais-1', 'qusais-2', 'qusais-3'],
  'al-rashidiya': ['rashidiya-1', 'rashidiya-2'],
  'al-satwa': ['al-satwa-residential', 'satwa-central'],
  'al-sufouh': [],
  'al-twar': ['twar-1', 'twar-2'],
  'al-warqa': ['warqa-1', 'warqa-2', 'warqa-3'],
  'arabian-ranches': ['alvorada', 'mirador', 'savannah'],
  'arjan': [],
  'bluewaters-island': [],
  'bur-dubai': ['al-fahidi', 'meena-bazaar', 'textile-souk'],
  'business-bay': ['bay-avenue', 'bay-square', 'business-central', 'canal-views', 'executive-bay'],
  'city-walk': [],
  'deira': ['al-rigga', 'al-sabkha', 'gold-souk-area', 'port-saeed', 'spice-souk-area'],
  'discovery-gardens': ['mediterranean-cluster', 'mogul-cluster', 'zen-cluster'],
  'downtown-dubai': ['burj-khalifa-area', 'difc', 'dubai-mall-district', 'old-town-dubai', 'opera-district'],
  'dubai-creek-harbour': ['creek-beach', 'creek-gate', 'creek-horizon'],
  'dubai-festival-city': ['al-badia-residences', 'creek-waters', 'marsa-plaza'],
  'dubai-hills-estate': ['golf-place', 'golf-suites', 'parkway'],
  'dubai-internet-city': [],
  'dubai-investment-park': ['dip-1', 'dip-2', 'green-community-dip'],
  'dubai-islands': [],
  'dubai-knowledge-park': [],
  'dubai-land': ['living-legends', 'mudon', 'remraam'],
  'dubai-marina': ['marina-crown', 'marina-gate', 'marina-promenade', 'marina-walk', 'marina-wharf'],
  'dubai-media-city': [],
  'dubai-production-city': [],
  'dubai-south': ['golf-links', 'mag-city', 'pulse-beachfront'],
  'dubai-sports-city': ['golf-horizon', 'golf-promenade', 'sports-city-central'],
  'emaar-beachfront': [],
  'emirates-hills': [],
  'international-city': ['china-cluster', 'france-cluster', 'italy-cluster'],
  'jbr': ['bahar', 'beach-residence-1', 'beach-residence-2', 'beach-residence-3', 'jbr-walk'],
  'jebel-ali': [],
  'jlt': ['cluster-a', 'cluster-b', 'cluster-c', 'cluster-d', 'cluster-i'],
  'jumeirah': ['al-manara', 'al-safa', 'al-wasl', 'jumeirah-1', 'jumeirah-2', 'jumeirah-3', 'umm-suqeim'],
  'jvc': ['jvc-district-1', 'jvc-district-2', 'jvc-district-3'],
  'meydan': [],
  'mirdif': ['ghoroob', 'mirdif-hills', 'uptown-mirdif'],
  'motor-city': ['green-community', 'motor-city-central', 'uptown-motor-city'],
  'nad-al-sheba': [],
  'palm-jumeirah': ['atlantis-area', 'frond-a', 'frond-b', 'frond-c', 'trunk'],
  'silicon-central': [],
  'silicon-oasis': ['silicon-avenue', 'silicon-gates', 'silicon-heights'],
  'the-gardens': [],
  'the-greens': ['al-ghaf', 'al-nakheel', 'al-sedr'],
  'the-lakes': [],
  'the-meadows': [],
  'the-springs': [],
  'the-views': ['fairways-north', 'fairways-south', 'golf-tower'],
  'town-square': []
};

// Service name mappings
const serviceNames = {
  'ac-cleaning': 'AC Cleaning & Sanitization',
  'ac-repair': 'AC Repair & Maintenance',
  'ac-servicing': 'AC Servicing',
  'appliance-repairs': 'Appliance Repairs',
  'bathroom-cleaning': 'Bathroom Deep Cleaning',
  'bathroom-plumbing': 'Bathroom Plumbing',
  'bed-bug-control': 'Bed Bug Treatment',
  'carpet-cleaning': 'Carpet Cleaning',
  'cleaning-services': 'Cleaning Services',
  'handyman-services': 'Handyman Services',
  'pest-control': 'Pest Control'
};

// Area name mappings
const areaNames = {
  'academic-city': 'Academic City',
  'al-barari': 'Al Barari',
  'al-barsha': 'Al Barsha',
  'al-barsha-1': 'Al Barsha 1',
  'al-barsha-2': 'Al Barsha 2',
  'al-barsha-3': 'Al Barsha 3',
  'al-barsha-heights': 'Al Barsha Heights',
  'al-barsha-south': 'Al Barsha South',
  'al-furjan': 'Al Furjan',
  'al-garhoud': 'Al Garhoud',
  'dubai-creek-golf': 'Dubai Creek Golf',
  'garhoud-bridge': 'Garhoud Bridge',
  'al-karama': 'Al Karama',
  'karama-residential': 'Karama Residential',
  'karama-souk': 'Karama Souk',
  'al-khawaneej': 'Al Khawaneej',
  'khawaneej-1': 'Khawaneej 1',
  'khawaneej-2': 'Khawaneej 2',
  'al-mamzar': 'Al Mamzar',
  'al-mizhar': 'Al Mizhar',
  'mizhar-1': 'Mizhar 1',
  'mizhar-2': 'Mizhar 2',
  'al-nahda': 'Al Nahda',
  'nahda-1': 'Nahda 1',
  'nahda-2': 'Nahda 2',
  'al-quoz': 'Al Quoz',
  'al-quoz-1': 'Al Quoz 1',
  'al-quoz-2': 'Al Quoz 2',
  'al-quoz-3': 'Al Quoz 3',
  'al-quoz-4': 'Al Quoz 4',
  'al-qusais': 'Al Qusais',
  'qusais-1': 'Qusais 1',
  'qusais-2': 'Qusais 2',
  'qusais-3': 'Qusais 3',
  'al-rashidiya': 'Al Rashidiya',
  'rashidiya-1': 'Rashidiya 1',
  'rashidiya-2': 'Rashidiya 2',
  'al-satwa': 'Al Satwa',
  'al-satwa-residential': 'Al Satwa Residential',
  'satwa-central': 'Satwa Central',
  'al-sufouh': 'Al Sufouh',
  'al-twar': 'Al Twar',
  'twar-1': 'Twar 1',
  'twar-2': 'Twar 2',
  'al-warqa': 'Al Warqa',
  'warqa-1': 'Warqa 1',
  'warqa-2': 'Warqa 2',
  'warqa-3': 'Warqa 3',
  'arabian-ranches': 'Arabian Ranches',
  'alvorada': 'Alvorada',
  'mirador': 'Mirador',
  'savannah': 'Savannah',
  'arjan': 'Arjan',
  'bluewaters-island': 'Bluewaters Island',
  'bur-dubai': 'Bur Dubai',
  'al-fahidi': 'Al Fahidi',
  'meena-bazaar': 'Meena Bazaar',
  'textile-souk': 'Textile Souk',
  'business-bay': 'Business Bay',
  'bay-avenue': 'Bay Avenue',
  'bay-square': 'Bay Square',
  'business-central': 'Business Central',
  'canal-views': 'Canal Views',
  'executive-bay': 'Executive Bay',
  'city-walk': 'City Walk',
  'deira': 'Deira',
  'al-rigga': 'Al Rigga',
  'al-sabkha': 'Al Sabkha',
  'gold-souk-area': 'Gold Souk Area',
  'port-saeed': 'Port Saeed',
  'spice-souk-area': 'Spice Souk Area',
  'discovery-gardens': 'Discovery Gardens',
  'mediterranean-cluster': 'Mediterranean Cluster',
  'mogul-cluster': 'Mogul Cluster',
  'zen-cluster': 'Zen Cluster',
  'downtown-dubai': 'Downtown Dubai',
  'burj-khalifa-area': 'Burj Khalifa Area',
  'difc': 'DIFC',
  'dubai-mall-district': 'Dubai Mall District',
  'old-town-dubai': 'Old Town Dubai',
  'opera-district': 'Opera District',
  'dubai-creek-harbour': 'Dubai Creek Harbour',
  'creek-beach': 'Creek Beach',
  'creek-gate': 'Creek Gate',
  'creek-horizon': 'Creek Horizon',
  'dubai-festival-city': 'Dubai Festival City',
  'al-badia-residences': 'Al Badia Residences',
  'creek-waters': 'Creek Waters',
  'marsa-plaza': 'Marsa Plaza',
  'dubai-hills-estate': 'Dubai Hills Estate',
  'golf-place': 'Golf Place',
  'golf-suites': 'Golf Suites',
  'parkway': 'Parkway',
  'dubai-internet-city': 'Dubai Internet City',
  'dubai-investment-park': 'Dubai Investment Park',
  'dip-1': 'DIP 1',
  'dip-2': 'DIP 2',
  'green-community-dip': 'Green Community DIP',
  'dubai-islands': 'Dubai Islands',
  'dubai-knowledge-park': 'Dubai Knowledge Park',
  'dubai-land': 'Dubai Land',
  'living-legends': 'Living Legends',
  'mudon': 'Mudon',
  'remraam': 'Remraam',
  'dubai-marina': 'Dubai Marina',
  'marina-crown': 'Marina Crown',
  'marina-gate': 'Marina Gate',
  'marina-promenade': 'Marina Promenade',
  'marina-walk': 'Marina Walk',
  'marina-wharf': 'Marina Wharf',
  'dubai-media-city': 'Dubai Media City',
  'dubai-production-city': 'Dubai Production City',
  'dubai-south': 'Dubai South',
  'golf-links': 'Golf Links',
  'mag-city': 'MAG City',
  'pulse-beachfront': 'Pulse Beachfront',
  'dubai-sports-city': 'Dubai Sports City',
  'golf-horizon': 'Golf Horizon',
  'golf-promenade': 'Golf Promenade',
  'sports-city-central': 'Sports City Central',
  'emaar-beachfront': 'Emaar Beachfront',
  'emirates-hills': 'Emirates Hills',
  'international-city': 'International City',
  'china-cluster': 'China Cluster',
  'france-cluster': 'France Cluster',
  'italy-cluster': 'Italy Cluster',
  'jbr': 'JBR',
  'bahar': 'Bahar',
  'beach-residence-1': 'Beach Residence 1',
  'beach-residence-2': 'Beach Residence 2',
  'beach-residence-3': 'Beach Residence 3',
  'jbr-walk': 'JBR Walk',
  'jebel-ali': 'Jebel Ali',
  'jlt': 'JLT',
  'cluster-a': 'Cluster A',
  'cluster-b': 'Cluster B',
  'cluster-c': 'Cluster C',
  'cluster-d': 'Cluster D',
  'cluster-i': 'Cluster I',
  'jumeirah': 'Jumeirah',
  'al-manara': 'Al Manara',
  'al-safa': 'Al Safa',
  'al-wasl': 'Al Wasl',
  'jumeirah-1': 'Jumeirah 1',
  'jumeirah-2': 'Jumeirah 2',
  'jumeirah-3': 'Jumeirah 3',
  'umm-suqeim': 'Umm Suqeim',
  'jvc': 'JVC',
  'jvc-district-1': 'JVC District 1',
  'jvc-district-2': 'JVC District 2',
  'jvc-district-3': 'JVC District 3',
  'meydan': 'Meydan',
  'mirdif': 'Mirdif',
  'ghoroob': 'Ghoroob',
  'mirdif-hills': 'Mirdif Hills',
  'uptown-mirdif': 'Uptown Mirdif',
  'motor-city': 'Motor City',
  'green-community': 'Green Community',
  'motor-city-central': 'Motor City Central',
  'uptown-motor-city': 'Uptown Motor City',
  'nad-al-sheba': 'Nad Al Sheba',
  'palm-jumeirah': 'Palm Jumeirah',
  'atlantis-area': 'Atlantis Area',
  'frond-a': 'Frond A',
  'frond-b': 'Frond B',
  'frond-c': 'Frond C',
  'trunk': 'Trunk',
  'silicon-central': 'Silicon Central',
  'silicon-oasis': 'Silicon Oasis',
  'silicon-avenue': 'Silicon Avenue',
  'silicon-gates': 'Silicon Gates',
  'silicon-heights': 'Silicon Heights',
  'the-gardens': 'The Gardens',
  'the-greens': 'The Greens',
  'al-ghaf': 'Al Ghaf',
  'al-nakheel': 'Al Nakheel',
  'al-sedr': 'Al Sedr',
  'the-lakes': 'The Lakes',
  'the-meadows': 'The Meadows',
  'the-springs': 'The Springs',
  'the-views': 'The Views',
  'fairways-north': 'Fairways North',
  'fairways-south': 'Fairways South',
  'golf-tower': 'Golf Tower',
  'town-square': 'Town Square'
};

function createStandardPageTemplate(service, area, subarea = null) {
  const serviceName = serviceNames[service] || service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const areaName = areaNames[area] || area.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const subareaName = subarea ? (areaNames[subarea] || subarea.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())) : null;
  
  const metadataPath = subarea ? `/${service}/${area}/${subarea}` : `/${service}/${area}`;
  const displayLocation = subareaName || areaName;
  
  return `import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['${metadataPath}'] || {
  title: '${serviceName} in ${displayLocation} - Professional Services | HOMIZON',
  description: 'Professional ${serviceName.toLowerCase()} services in ${displayLocation}. Verified providers, competitive rates, same-day service available.',
};

export default async function ${serviceName.replace(/[^a-zA-Z0-9]/g, '')}${displayLocation.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <ServiceAreaPageContent 
      service="${service}"
      serviceName="${serviceName}"
      area="${area}"
      areaName="${areaName}"${subarea ? `
      subarea="${subarea}"
      subareaName="${subareaName}"` : ''}
    />
  );
}`;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

let createdCount = 0;
let updatedCount = 0;

console.log('🚀 Starting standardization of service×area pages...');

// Create all service×area pages
for (const service of services) {
  for (const [area, subareas] of Object.entries(areas)) {
    // Create main service×area page
    const mainDir = path.join('app', service, area);
    ensureDirectoryExists(mainDir);
    
    const mainPagePath = path.join(mainDir, 'page.tsx');
    const mainPageContent = createStandardPageTemplate(service, area);
    
    if (fs.existsSync(mainPagePath)) {
      fs.writeFileSync(mainPagePath, mainPageContent);
      updatedCount++;
    } else {
      fs.writeFileSync(mainPagePath, mainPageContent);
      createdCount++;
    }
    
    // Create service×area×subarea pages
    for (const subarea of subareas) {
      const subareaDir = path.join('app', service, area, subarea);
      ensureDirectoryExists(subareaDir);
      
      const subareaPagePath = path.join(subareaDir, 'page.tsx');
      const subareaPageContent = createStandardPageTemplate(service, area, subarea);
      
      if (fs.existsSync(subareaPagePath)) {
        fs.writeFileSync(subareaPagePath, subareaPageContent);
        updatedCount++;
      } else {
        fs.writeFileSync(subareaPagePath, subareaPageContent);
        createdCount++;
      }
    }
  }
}

// Remove old service-area-page-client.tsx files that are causing errors
console.log('🧹 Cleaning up old client component files...');
let cleanedCount = 0;

function cleanupOldFiles(dir) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      cleanupOldFiles(itemPath);
    } else if (item === 'service-area-page-client.tsx') {
      fs.unlinkSync(itemPath);
      cleanedCount++;
      console.log(`  Removed: ${itemPath}`);
    }
  }
}

for (const service of services) {
  const serviceDir = path.join('app', service);
  if (fs.existsSync(serviceDir)) {
    cleanupOldFiles(serviceDir);
  }
}

console.log(`✅ Standardization complete!`);
console.log(`📊 Summary:`);
console.log(`  - Created: ${createdCount} new pages`);
console.log(`  - Updated: ${updatedCount} existing pages`);
console.log(`  - Cleaned: ${cleanedCount} old client files`);
console.log(`  - Total pages: ${createdCount + updatedCount}`);