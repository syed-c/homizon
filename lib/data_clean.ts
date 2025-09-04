// Core data structures for the marketplace platform

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  icon: string;
  averagePrice: string;
  estimatedTime: string;
  keywords: string[];
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  services: Service[];
  isPopular?: boolean;
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string;
  subAreas: SubArea[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  sector?: string;
}

export interface SubArea {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentArea: string;
}

export interface Provider {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  profileImage?: string;
  experience: number;
  rating: number;
  reviewCount: number;
  services: string[]; // service slugs
  areas: string[]; // area/subarea slugs
  description: string;
  certifications: string[];
  languages: string[];
  pricing: {
    [serviceId: string]: {
      basePrice: number;
      currency: string;
    };
  };
  availability: {
    emergency: boolean;
    weekdays: string;
    weekends: string;
  };
  isApproved: boolean;
  isFeatured: boolean;
  isPremium: boolean;
  joinedDate: string;
  lastActive: string;
  completedJobs: number;
  responseTime: string;
  portfolioImages: string[];
}

export interface Review {
  id: string;
  providerId: string;
  customerName: string;
  rating: number;
  comment: string;
  service: string;
  area: string;
  date: string;
  verified: boolean;
}

// Services data - Updated to match audit requirements
export const services: Service[] = [
  // AC Repair & Cleaning
  {
    id: 'ac-repair-cleaning',
    name: 'AC Repair & Cleaning',
    slug: 'ac-repair-cleaning',
    category: 'ac-repair-cleaning',
    description: 'Professional AC repair, maintenance, and cleaning services',
    icon: 'Wind',
    averagePrice: 'AED 150-300',
    estimatedTime: '2-4 hours',
    keywords: ['ac repair', 'air conditioning', 'hvac', 'cooling', 'maintenance'],
    isPopular: true
  },

  // Appliance Repair
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    slug: 'appliance-repair',
    category: 'appliance-repair',
    description: 'Expert repair services for all home appliances',
    icon: 'Settings',
    averagePrice: 'AED 150-300',
    estimatedTime: '1-3 hours',
    keywords: ['appliance repair', 'home appliances', 'repair service'],
    isPopular: true
  },
  {
    id: 'washing-machine-repair',
    name: 'Washing Machine Repair',
    slug: 'washing-machine-repair',
    category: 'appliance-repair',
    description: 'Expert repair for all washing machine brands and models',
    icon: 'Droplets',
    averagePrice: 'AED 120-250',
    estimatedTime: '1-3 hours',
    keywords: ['washing machine', 'laundry', 'repair', 'maintenance']
  },
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    category: 'appliance-repair',
    description: 'Complete refrigerator and freezer repair services',
    icon: 'Snowflake',
    averagePrice: 'AED 180-350',
    estimatedTime: '2-3 hours',
    keywords: ['refrigerator', 'fridge', 'freezer', 'cooling', 'repair']
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    slug: 'dishwasher-repair',
    category: 'appliance-repair',
    description: 'Professional dishwasher repair and maintenance',
    icon: 'Settings',
    averagePrice: 'AED 140-280',
    estimatedTime: '1-2 hours',
    keywords: ['dishwasher', 'kitchen', 'repair', 'maintenance']
  },
  {
    id: 'oven-stove-repair',
    name: 'Oven & Stove Repair (Gas/Electric)',
    slug: 'oven-stove-repair',
    category: 'appliance-repair',
    description: 'Gas and electric oven, stove, and cooktop repairs',
    icon: 'ThermometerSun',
    averagePrice: 'AED 160-320',
    estimatedTime: '2-3 hours',
    keywords: ['oven', 'stove', 'cooktop', 'kitchen', 'repair', 'gas', 'electric']
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    slug: 'dryer-repair',
    category: 'appliance-repair',
    description: 'Clothes dryer repair and maintenance services',
    icon: 'Wind',
    averagePrice: 'AED 130-260',
    estimatedTime: '1-2 hours',
    keywords: ['dryer', 'clothes', 'laundry', 'repair']
  },
  {
    id: 'wine-cooler-repair',
    name: 'Wine Cooler Repair',
    slug: 'wine-cooler-repair',
    category: 'appliance-repair',
    description: 'Professional wine cooler and beverage refrigerator repair',
    icon: 'Snowflake',
    averagePrice: 'AED 180-350',
    estimatedTime: '1-3 hours',
    keywords: ['wine cooler', 'beverage fridge', 'repair', 'maintenance']
  },
  {
    id: 'ice-maker-repair',
    name: 'Ice Maker Repair',
    slug: 'ice-maker-repair',
    category: 'appliance-repair',
    description: 'Ice maker and water dispenser repair services',
    icon: 'Snowflake',
    averagePrice: 'AED 120-240',
    estimatedTime: '1-2 hours',
    keywords: ['ice maker', 'water dispenser', 'repair', 'maintenance']
  },

  // Cleaning Services
  {
    id: 'cleaning-services',
    name: 'Cleaning Services',
    slug: 'cleaning-services',
    category: 'cleaning-services',
    description: 'Comprehensive cleaning services for homes and offices',
    icon: 'Sparkles',
    averagePrice: 'AED 150-400',
    estimatedTime: '2-6 hours',
    keywords: ['cleaning', 'home cleaning', 'office cleaning'],
    isPopular: true
  },
  {
    id: 'deep-home-cleaning',
    name: 'Home Deep Cleaning',
    slug: 'deep-home-cleaning',
    category: 'cleaning-services',
    description: 'Comprehensive deep cleaning for your entire home',
    icon: 'Sparkles',
    averagePrice: 'AED 200-400',
    estimatedTime: '4-6 hours',
    keywords: ['deep cleaning', 'home cleaning', 'house cleaning', 'comprehensive']
  },
  {
    id: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    slug: 'sofa-cleaning',
    category: 'cleaning-services',
    description: 'Professional sofa, chair, and upholstery cleaning',
    icon: 'Sparkles',
    averagePrice: 'AED 150-300',
    estimatedTime: '2-3 hours',
    keywords: ['sofa cleaning', 'upholstery', 'furniture', 'steam cleaning']
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    category: 'cleaning-services',
    description: 'Deep carpet and rug cleaning services',
    icon: 'Sparkles',
    averagePrice: 'AED 120-250',
    estimatedTime: '2-4 hours',
    keywords: ['carpet cleaning', 'rug cleaning', 'floor cleaning', 'steam cleaning']
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    slug: 'mattress-cleaning',
    category: 'cleaning-services',
    description: 'Professional mattress deep cleaning and sanitization',
    icon: 'Sparkles',
    averagePrice: 'AED 100-200',
    estimatedTime: '1-2 hours',
    keywords: ['mattress cleaning', 'sanitization', 'bed cleaning', 'deep cleaning']
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    slug: 'kitchen-cleaning',
    category: 'cleaning-services',
    description: 'Thorough kitchen cleaning including appliances',
    icon: 'Sparkles',
    averagePrice: 'AED 180-350',
    estimatedTime: '3-4 hours',
    keywords: ['kitchen cleaning', 'appliance cleaning', 'deep cleaning']
  },
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    slug: 'bathroom-cleaning',
    category: 'cleaning-services',
    description: 'Complete bathroom sanitization and deep cleaning',
    icon: 'Sparkles',
    averagePrice: 'AED 100-200',
    estimatedTime: '1-2 hours',
    keywords: ['bathroom cleaning', 'sanitization', 'deep cleaning']
  },
  {
    id: 'move-in-move-out-cleaning',
    name: 'Move-In/Move-Out Cleaning',
    slug: 'move-in-move-out-cleaning',
    category: 'cleaning-services',
    description: 'Comprehensive cleaning for moving in or out of properties',
    icon: 'Sparkles',
    averagePrice: 'AED 300-600',
    estimatedTime: '4-8 hours',
    keywords: ['move in cleaning', 'move out cleaning', 'deep cleaning', 'property cleaning']
  },

  // Pest Control Services
  {
    id: 'pest-control',
    name: 'Pest Control',
    slug: 'pest-control',
    category: 'pest-control',
    description: 'Comprehensive pest control and elimination services for all types of pests',
    icon: 'Bug',
    averagePrice: 'AED 200-500',
    estimatedTime: '2-4 hours',
    keywords: ['pest control', 'extermination', 'insects', 'comprehensive pest control'],
    isPopular: true
  },
  {
    id: 'general-pest-control',
    name: 'General Pest Control',
    slug: 'general-pest-control',
    category: 'pest-control',
    description: 'Comprehensive pest control for common household pests',
    icon: 'Bug',
    averagePrice: 'AED 250-400',
    estimatedTime: '2-3 hours',
    keywords: ['pest control', 'extermination', 'insects', 'general pest'],
    isPopular: true
  },
  {
    id: 'cockroach-control',
    name: 'Cockroach Control',
    slug: 'cockroach-control',
    category: 'pest-control',
    description: 'Effective cockroach elimination and prevention',
    icon: 'Bug',
    averagePrice: 'AED 200-350',
    estimatedTime: '2-3 hours',
    keywords: ['cockroach', 'roach control', 'extermination']
  },
  {
    id: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    slug: 'bed-bug-treatment',
    category: 'pest-control',
    description: 'Specialized bed bug elimination and prevention',
    icon: 'Bug',
    averagePrice: 'AED 300-500',
    estimatedTime: '3-4 hours',
    keywords: ['bed bugs', 'extermination', 'treatment', 'elimination']
  },
  {
    id: 'termite-control',
    name: 'Termite Control',
    slug: 'termite-control',
    category: 'pest-control',
    description: 'Professional termite inspection and treatment',
    icon: 'Bug',
    averagePrice: 'AED 400-800',
    estimatedTime: '4-6 hours',
    keywords: ['termite', 'wood treatment', 'inspection', 'prevention']
  },
  {
    id: 'rodent-control',
    name: 'Rodent Control',
    slug: 'rodent-control',
    category: 'pest-control',
    description: 'Professional rodent elimination and prevention services',
    icon: 'Bug',
    averagePrice: 'AED 250-400',
    estimatedTime: '2-4 hours',
    keywords: ['rodent', 'mice', 'rats', 'pest control']
  },

  // Disinfection & Sanitization
  {
    id: 'disinfection-sanitization',
    name: 'Disinfection & Sanitization',
    slug: 'disinfection-sanitization',
    category: 'sanitization',
    description: 'Complete disinfection and sanitization services',
    icon: 'Shield',
    averagePrice: 'AED 200-500',
    estimatedTime: '2-4 hours',
    keywords: ['disinfection', 'sanitization', 'cleaning', 'sterilization'],
    isPopular: true
  },

  // Electrical Services
  {
    id: 'electrical',
    name: 'Electrical',
    slug: 'electrical',
    category: 'electrical',
    description: 'Licensed electrical repairs and installations',
    icon: 'Zap',
    averagePrice: 'AED 120-400',
    estimatedTime: '1-5 hours',
    keywords: ['electrical', 'wiring', 'installation', 'repair'],
    isPopular: true
  },

  // Plumbing Services
  {
    id: 'plumbing',
    name: 'Plumbing',
    slug: 'plumbing',
    category: 'plumbing',
    description: 'Professional plumbing repairs and installations',
    icon: 'Wrench',
    averagePrice: 'AED 150-400',
    estimatedTime: '1-6 hours',
    keywords: ['plumbing', 'pipes', 'water', 'leak repair'],
    isPopular: true
  },

  // AC Servicing
  {
    id: 'ac-servicing',
    name: 'AC Servicing',
    slug: 'ac-servicing',
    category: 'handyman',
    description: 'Regular AC maintenance and servicing',
    icon: 'Wind',
    averagePrice: 'AED 100-200',
    estimatedTime: '1-2 hours',
    keywords: ['ac servicing', 'maintenance', 'cleaning', 'tune-up']
  },

  // Painting
  {
    id: 'painting',
    name: 'Painting',
    slug: 'painting',
    category: 'handyman',
    description: 'Interior and exterior painting services',
    icon: 'Paintbrush',
    averagePrice: 'AED 300-800',
    estimatedTime: '4-8 hours',
    keywords: ['painting', 'interior', 'exterior', 'wall painting']
  },

  // Curtain/TV/Furniture Installations
  {
    id: 'curtain-tv-furniture-installations',
    name: 'Curtain/TV/Furniture Installations',
    slug: 'curtain-tv-furniture-installations',
    category: 'handyman',
    description: 'Professional installation of curtains, TVs, and furniture',
    icon: 'Hammer',
    averagePrice: 'AED 150-400',
    estimatedTime: '2-4 hours',
    keywords: ['curtain installation', 'tv mounting', 'furniture assembly', 'installation']
  },

  // General Handyman
  {
    id: 'general-handyman',
    name: 'General Handyman',
    slug: 'general-handyman',
    category: 'handyman',
    description: 'Multi-skilled handyman for various home repairs',
    icon: 'Hammer',
    averagePrice: 'AED 100-200',
    estimatedTime: '1-4 hours',
    keywords: ['handyman', 'repair', 'maintenance', 'general'],
    isPopular: true
  },

  // Laundry & Dry Cleaning
  {
    id: 'laundry-dry-cleaning',
    name: 'Laundry & Dry Cleaning',
    slug: 'laundry-dry-cleaning',
    category: 'laundry',
    description: 'Professional laundry and dry cleaning services',
    icon: 'Shirt',
    averagePrice: 'AED 50-200',
    estimatedTime: '24-48 hours',
    keywords: ['laundry', 'dry cleaning', 'washing', 'pickup', 'delivery']
  },

  // Packers & Movers
  {
    id: 'packers-movers',
    name: 'Packers & Movers',
    slug: 'packers-movers',
    category: 'packers-movers',
    description: 'Professional moving and relocation services',
    icon: 'Truck',
    averagePrice: 'AED 800-3000',
    estimatedTime: '4-12 hours',
    keywords: ['moving', 'relocation', 'packing', 'transport'],
    isPopular: true
  }
];

// Service Categories
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'ac-repair-cleaning',
    name: 'AC Repair & Cleaning',
    slug: 'ac-repair-cleaning',
    description: 'Professional AC repair, maintenance, and cleaning services',
    icon: 'Wind',
    services: services.filter(s => s.category === 'ac-repair-cleaning'),
    isPopular: true
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    slug: 'appliance-repair',
    description: 'Expert repair services for all home appliances',
    icon: 'Settings',
    services: services.filter(s => s.category === 'appliance-repair'),
    isPopular: true
  },
  {
    id: 'cleaning-services',
    name: 'Cleaning Services',
    slug: 'cleaning-services',
    description: 'Comprehensive cleaning services for homes and offices',
    icon: 'Sparkles',
    services: services.filter(s => s.category === 'cleaning-services'),
    isPopular: true
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    slug: 'pest-control',
    description: 'Professional pest control and elimination services',
    icon: 'Bug',
    services: services.filter(s => s.category === 'pest-control'),
    isPopular: true
  },
  {
    id: 'sanitization',
    name: 'Disinfection & Sanitization',
    slug: 'disinfection-sanitization',
    description: 'Complete disinfection and sanitization services',
    icon: 'Shield',
    services: services.filter(s => s.category === 'sanitization')
  },
  {
    id: 'electrical',
    name: 'Electrical',
    slug: 'electrical',
    description: 'Licensed electrical repairs and installations',
    icon: 'Zap',
    services: services.filter(s => s.category === 'electrical'),
    isPopular: true
  },
  {
    id: 'plumbing',
    name: 'Plumbing Services',
    slug: 'plumbing',
    description: 'Professional plumbing repair and installation',
    icon: 'Wrench',
    services: services.filter(s => s.category === 'plumbing'),
    isPopular: true
  },
  {
    id: 'handyman',
    name: 'Handyman Services',
    slug: 'handyman',
    description: 'Multi-skilled handyman for various home repairs',
    icon: 'Hammer',
    services: services.filter(s => s.category === 'handyman'),
    isPopular: true
  },
  {
    id: 'laundry',
    name: 'Laundry & Dry Cleaning',
    slug: 'laundry-dry-cleaning',
    description: 'Professional laundry and dry cleaning services',
    icon: 'Shirt',
    services: services.filter(s => s.category === 'laundry')
  },
  {
    id: 'packers-movers',
    name: 'Packers & Movers',
    slug: 'packers-movers',
    description: 'Professional moving and relocation services',
    icon: 'Truck',
    services: services.filter(s => s.category === 'packers-movers')
  }
];

// Areas data - Updated to match audit requirements
export const areas: Area[] = [
  { 
    id: 'al-barsha', 
    name: 'Al Barsha', 
    slug: 'al-barsha', 
    description: 'A popular residential area in West Dubai with excellent amenities and family-friendly communities.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'al-barsha-1', name: 'Al Barsha 1', slug: 'al-barsha-1', description: 'Primary residential area in Al Barsha', parentArea: 'al-barsha' },
      { id: 'al-barsha-2', name: 'Al Barsha 2', slug: 'al-barsha-2', description: 'Secondary residential area in Al Barsha', parentArea: 'al-barsha' },
      { id: 'al-barsha-3', name: 'Al Barsha 3', slug: 'al-barsha-3', description: 'Tertiary residential area in Al Barsha', parentArea: 'al-barsha' },
      { id: 'al-barsha-south', name: 'Al Barsha South', slug: 'al-barsha-south', description: 'Southern district of Al Barsha', parentArea: 'al-barsha' }
    ]
  },
  { 
    id: 'barsha-heights', 
    name: 'Barsha Heights', 
    slug: 'barsha-heights', 
    description: 'Premium residential area with modern amenities and easy access to major attractions.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'dubai-marina', 
    name: 'Dubai Marina', 
    slug: 'dubai-marina', 
    description: 'A waterfront city with luxury apartments, dining, and entertainment options.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'marina-walk', name: 'Marina Walk', slug: 'marina-walk', description: 'Waterfront promenade with restaurants', parentArea: 'dubai-marina' },
      { id: 'marina-promenade', name: 'Marina Promenade', slug: 'marina-promenade', description: 'Scenic waterfront area', parentArea: 'dubai-marina' },
      { id: 'marina-wharf', name: 'Marina Wharf', slug: 'marina-wharf', description: 'Residential towers area', parentArea: 'dubai-marina' },
      { id: 'marina-gate', name: 'Marina Gate', slug: 'marina-gate', description: 'Entry point to marina', parentArea: 'dubai-marina' },
      { id: 'marina-crown', name: 'Marina Crown', slug: 'marina-crown', description: 'Premium residential area', parentArea: 'dubai-marina' }
    ]
  },
  { 
    id: 'jbr', 
    name: 'JBR (Jumeirah Beach Residence)', 
    slug: 'jbr', 
    description: 'Jumeirah Beach Residence - beachfront living with stunning sea views.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'jbr-walk', name: 'JBR Walk', slug: 'jbr-walk', description: 'Beachfront retail and dining area', parentArea: 'jbr' },
      { id: 'beach-residence-1', name: 'Beach Residence 1', slug: 'beach-residence-1', description: 'Beachfront residential towers', parentArea: 'jbr' },
      { id: 'beach-residence-2', name: 'Beach Residence 2', slug: 'beach-residence-2', description: 'Beachfront residential towers', parentArea: 'jbr' },
      { id: 'beach-residence-3', name: 'Beach Residence 3', slug: 'beach-residence-3', description: 'Beachfront residential towers', parentArea: 'jbr' },
      { id: 'bahar', name: 'Bahar', slug: 'bahar', description: 'Luxury residential development', parentArea: 'jbr' }
    ]
  },
  { 
    id: 'jlt', 
    name: 'JLT (Jumeirah Lake Towers)', 
    slug: 'jlt', 
    description: 'Jumeirah Lake Towers - a thriving business and residential district with stunning lake views.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'cluster-a', name: 'Cluster A', slug: 'cluster-a', description: 'Residential and commercial towers', parentArea: 'jlt' },
      { id: 'cluster-b', name: 'Cluster B', slug: 'cluster-b', description: 'Mixed-use development', parentArea: 'jlt' },
      { id: 'cluster-c', name: 'Cluster C', slug: 'cluster-c', description: 'Business towers and retail', parentArea: 'jlt' },
      { id: 'cluster-d', name: 'Cluster D', slug: 'cluster-d', description: 'Residential towers', parentArea: 'jlt' },
      { id: 'cluster-i', name: 'Cluster I', slug: 'cluster-i', description: 'Office and residential complex', parentArea: 'jlt' }
    ]
  },
  { 
    id: 'dubai-media-city', 
    name: 'Dubai Media City', 
    slug: 'dubai-media-city', 
    description: 'A media and technology hub with modern offices and residential towers.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'dubai-internet-city', 
    name: 'Dubai Internet City', 
    slug: 'dubai-internet-city', 
    description: 'Technology and IT hub with major international companies.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'dubai-knowledge-park', 
    name: 'Dubai Knowledge Park', 
    slug: 'dubai-knowledge-park', 
    description: 'Educational and training hub with universities and institutes.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'palm-jumeirah', 
    name: 'Palm Jumeirah', 
    slug: 'palm-jumeirah', 
    description: 'The iconic palm-shaped island featuring luxury hotels and residences.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'trunk', name: 'Trunk', slug: 'trunk', description: 'Main spine of Palm Jumeirah', parentArea: 'palm-jumeirah' },
      { id: 'frond-a', name: 'Frond A', slug: 'frond-a', description: 'Residential frond with villas', parentArea: 'palm-jumeirah' },
      { id: 'frond-b', name: 'Frond B', slug: 'frond-b', description: 'Residential frond with villas', parentArea: 'palm-jumeirah' },
      { id: 'frond-c', name: 'Frond C', slug: 'frond-c', description: 'Residential frond with villas', parentArea: 'palm-jumeirah' },
      { id: 'atlantis-area', name: 'Atlantis Area', slug: 'atlantis-area', description: 'Hotel and resort area', parentArea: 'palm-jumeirah' }
    ]
  },
  { 
    id: 'business-bay', 
    name: 'Business Bay', 
    slug: 'business-bay', 
    description: 'Dubai\'s business district with modern skyscrapers and premium residential towers.',
    sector: 'Central Dubai', 
    subAreas: [
      { id: 'executive-bay', name: 'Executive Bay', slug: 'executive-bay', description: 'Premium business district', parentArea: 'business-bay' },
      { id: 'canal-views', name: 'Canal Views', slug: 'canal-views', description: 'Waterfront residential area', parentArea: 'business-bay' },
      { id: 'business-central', name: 'Business Central', slug: 'business-central', description: 'Core business area', parentArea: 'business-bay' },
      { id: 'bay-avenue', name: 'Bay Avenue', slug: 'bay-avenue', description: 'Commercial avenue', parentArea: 'business-bay' },
      { id: 'bay-square', name: 'Bay Square', slug: 'bay-square', description: 'Mixed-use development', parentArea: 'business-bay' }
    ]
  },
  { 
    id: 'downtown-dubai', 
    name: 'Downtown Dubai', 
    slug: 'downtown-dubai', 
    description: 'The heart of Dubai featuring Burj Khalifa, Dubai Mall, and luxury developments.',
    sector: 'Central Dubai', 
    subAreas: [
      { id: 'burj-khalifa-area', name: 'Burj Khalifa Area', slug: 'burj-khalifa-area', description: 'Area surrounding the world\'s tallest building', parentArea: 'downtown-dubai' },
      { id: 'dubai-mall-district', name: 'Dubai Mall District', slug: 'dubai-mall-district', description: 'Shopping and entertainment district', parentArea: 'downtown-dubai' },
      { id: 'opera-district', name: 'Opera District', slug: 'opera-district', description: 'Cultural and entertainment area', parentArea: 'downtown-dubai' },
      { id: 'old-town-dubai', name: 'Old Town Dubai', slug: 'old-town-dubai', description: 'Traditional-style development', parentArea: 'downtown-dubai' }
    ]
  },
  { 
    id: 'difc', 
    name: 'DIFC (Dubai International Financial Centre)', 
    slug: 'difc', 
    description: 'Dubai International Financial Centre - the leading financial hub in the Middle East.',
    sector: 'Central Dubai', 
    subAreas: []
  },
  { 
    id: 'city-walk', 
    name: 'City Walk', 
    slug: 'city-walk', 
    description: 'Modern lifestyle destination with shopping, dining, and entertainment.',
    sector: 'Central Dubai', 
    subAreas: []
  },
  { 
    id: 'al-wasl', 
    name: 'Al Wasl', 
    slug: 'al-wasl', 
    description: 'Central residential district in Jumeirah with easy access to beaches and amenities.',
    sector: 'Central Dubai', 
    subAreas: []
  },
  { 
    id: 'jumeirah-1', 
    name: 'Jumeirah 1', 
    slug: 'jumeirah-1', 
    description: 'Beachfront residential area with luxury villas and easy beach access.',
    sector: 'Central Dubai', 
    subAreas: []
  },
  { 
    id: 'jumeirah-2', 
    name: 'Jumeirah 2', 
    slug: 'jumeirah-2', 
    description: 'Established residential community with family-friendly amenities.',
    sector: 'Central Dubai', 
    subAreas: []
  },
  { 
    id: 'jumeirah-3', 
    name: 'Jumeirah 3', 
    slug: 'jumeirah-3', 
    description: 'Family-friendly residential area with parks and schools.',
    sector: 'Central Dubai', 
    subAreas: []
  },
  { 
    id: 'umm-suqeim', 
    name: 'Umm Suqeim', 
    slug: 'umm-suqeim', 
    description: 'Beachfront residential area with luxury villas and proximity to Burj Al Arab.',
    sector: 'Central Dubai', 
    subAreas: []
  },
  { 
    id: 'al-safa', 
    name: 'Al Safa', 
    slug: 'al-safa', 
    description: 'Premium residential area with parks and family amenities.',
    sector: 'Central Dubai', 
    subAreas: []
  }
  // Additional areas would continue here...
];

// Sample providers data
export const sampleProviders: Provider[] = [
  {
    id: 'ahmed-ac-expert',
    name: 'Ahmed Al-Rashid',
    company: 'Cool Breeze AC Services',
    email: 'ahmed@coolbreeze.ae',
    phone: '+971501234567',
    profileImage: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    experience: 8,
    rating: 4.9,
    reviewCount: 156,
    services: ['ac-repair-cleaning', 'electrical'],
    areas: ['dubai-marina', 'jbr', 'business-bay', 'jlt', 'palm-jumeirah', 'al-barsha'],
    description: 'Certified AC technician with 8+ years experience. Specialized in all major AC brands including Daikin, LG, and Samsung. Available for emergency repairs.',
    certifications: ['HVAC Certified', 'Dubai Municipality Licensed', 'Daikin Certified'],
    languages: ['English', 'Arabic', 'Hindi'],
    pricing: {
      'ac-repair-cleaning': { basePrice: 180, currency: 'AED' }
    },
    availability: {
      emergency: true,
      weekdays: '8:00 AM - 8:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    },
    isApproved: true,
    isFeatured: true,
    isPremium: true,
    joinedDate: '2023-01-15',
    lastActive: '2024-01-10',
    completedJobs: 342,
    responseTime: 'Within 30 minutes',
    portfolioImages: [
      'https://images.pexels.com/photos/6872164/pexels-photo-6872164.jpeg?auto=compress&cs=tinysrgb&h=300&w=400',
      'https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&h=300&w=400'
    ]
  }
];

// Sample reviews
export const sampleReviews: Review[] = [
  {
    id: 'review-1',
    providerId: 'ahmed-ac-expert',
    customerName: 'Sarah M.',
    rating: 5,
    comment: 'Excellent service! Ahmed fixed my AC quickly and professionally. Highly recommended!',
    service: 'AC Repair',
    area: 'Dubai Marina',
    date: '2024-01-10',
    verified: true
  }
];
