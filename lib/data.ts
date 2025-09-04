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
    slug: 'ac-cleaning',
    category: 'ac-repair-cleaning',
    description: 'Professional AC repair, maintenance, and deep cleaning services',
    icon: 'Wind',
    averagePrice: 'AED 150-300',
    estimatedTime: '2-4 hours',
    keywords: ['ac repair', 'ac cleaning', 'air conditioning', 'hvac'],
    isPopular: true
  },
  {
    id: 'ac-repair',
    name: 'AC Repair',
    slug: 'ac-repair',
    category: 'ac-repair-cleaning',
    description: 'Expert AC repair and troubleshooting services',
    icon: 'Wind',
    averagePrice: 'AED 200-500',
    estimatedTime: '1-3 hours',
    keywords: ['ac repair', 'air conditioning repair', 'hvac repair'],
    isPopular: true
  },
  {
    id: 'ac-servicing',
    name: 'AC Servicing',
    slug: 'ac-servicing',
    category: 'ac-repair-cleaning',
    description: 'Regular AC maintenance and servicing',
    icon: 'Wind',
    averagePrice: 'AED 100-200',
    estimatedTime: '1-2 hours',
    keywords: ['ac servicing', 'maintenance', 'cleaning', 'tune-up']
  },

  // Appliance Repair
  {
    id: 'appliance-repairs',
    name: 'Appliance Repairs',
    slug: 'appliance-repairs',
    category: 'appliance-repair',
    description: 'Professional repair services for all home appliances',
    icon: 'Settings',
    averagePrice: 'AED 150-400',
    estimatedTime: '1-3 hours',
    keywords: ['appliance repair', 'home appliances', 'repair service'],
    isPopular: true
  },
  {
    id: 'washing-machine-repair',
    name: 'Washing Machine Repair',
    slug: 'washing-machine-repair',
    category: 'appliance-repair',
    description: 'Expert washing machine repair and maintenance',
    icon: 'Settings',
    averagePrice: 'AED 120-300',
    estimatedTime: '1-2 hours',
    keywords: ['washing machine', 'laundry', 'appliance repair']
  },
  {
    id: 'refrigerator-repair',
    name: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    category: 'appliance-repair',
    description: 'Professional refrigerator and freezer repair services',
    icon: 'Settings',
    averagePrice: 'AED 150-400',
    estimatedTime: '1-3 hours',
    keywords: ['refrigerator repair', 'fridge repair', 'cooling system']
  },
  {
    id: 'dishwasher-repair',
    name: 'Dishwasher Repair',
    slug: 'dishwasher-repair',
    category: 'appliance-repair',
    description: 'Expert dishwasher repair and maintenance services',
    icon: 'Settings',
    averagePrice: 'AED 120-350',
    estimatedTime: '1-2 hours',
    keywords: ['dishwasher repair', 'kitchen appliance', 'cleaning appliance']
  },
  {
    id: 'oven-repair',
    name: 'Oven Repair',
    slug: 'oven-repair',
    category: 'appliance-repair',
    description: 'Professional oven and stove repair services',
    icon: 'Settings',
    averagePrice: 'AED 150-400',
    estimatedTime: '1-3 hours',
    keywords: ['oven repair', 'stove repair', 'kitchen appliance']
  },
  {
    id: 'microwave-repair',
    name: 'Microwave Repair',
    slug: 'microwave-repair',
    category: 'appliance-repair',
    description: 'Expert microwave repair and maintenance',
    icon: 'Settings',
    averagePrice: 'AED 100-250',
    estimatedTime: '1-2 hours',
    keywords: ['microwave repair', 'kitchen appliance', 'heating appliance']
  },
  {
    id: 'dryer-repair',
    name: 'Dryer Repair',
    slug: 'dryer-repair',
    category: 'appliance-repair',
    description: 'Professional dryer repair and maintenance services',
    icon: 'Settings',
    averagePrice: 'AED 120-300',
    estimatedTime: '1-2 hours',
    keywords: ['dryer repair', 'laundry appliance', 'clothes dryer']
  },

  // Cleaning Services
  {
    id: 'cleaning-services',
    name: 'Cleaning Services',
    slug: 'cleaning-services',
    category: 'cleaning-services',
    description: 'Professional home and office cleaning services',
    icon: 'Sparkles',
    averagePrice: 'AED 100-300',
    estimatedTime: '2-6 hours',
    keywords: ['cleaning', 'house cleaning', 'office cleaning'],
    isPopular: true
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    slug: 'deep-cleaning',
    category: 'cleaning-services',
    description: 'Comprehensive deep cleaning for homes and offices',
    icon: 'Sparkles',
    averagePrice: 'AED 200-500',
    estimatedTime: '4-8 hours',
    keywords: ['deep cleaning', 'thorough cleaning', 'detailed cleaning'],
    isPopular: true
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    category: 'cleaning-services',
    description: 'Professional carpet and rug cleaning services',
    icon: 'Sparkles',
    averagePrice: 'AED 150-400',
    estimatedTime: '2-4 hours',
    keywords: ['carpet cleaning', 'rug cleaning', 'floor cleaning']
  },
  {
    id: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    slug: 'sofa-cleaning',
    category: 'cleaning-services',
    description: 'Expert sofa and upholstery cleaning services',
    icon: 'Sparkles',
    averagePrice: 'AED 120-300',
    estimatedTime: '2-3 hours',
    keywords: ['sofa cleaning', 'upholstery cleaning', 'furniture cleaning']
  },
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    slug: 'bathroom-cleaning',
    category: 'cleaning-services',
    description: 'Specialized bathroom deep cleaning and sanitization',
    icon: 'Sparkles',
    averagePrice: 'AED 80-200',
    estimatedTime: '1-3 hours',
    keywords: ['bathroom cleaning', 'sanitization', 'deep cleaning']
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    slug: 'kitchen-cleaning',
    category: 'cleaning-services',
    description: 'Professional kitchen deep cleaning and degreasing',
    icon: 'Sparkles',
    averagePrice: 'AED 100-250',
    estimatedTime: '2-4 hours',
    keywords: ['kitchen cleaning', 'degreasing', 'appliance cleaning']
  },

  // Pest Control
  {
    id: 'pest-control',
    name: 'Pest Control',
    slug: 'pest-control',
    category: 'pest-control',
    description: 'Professional pest control and elimination services',
    icon: 'Bug',
    averagePrice: 'AED 200-600',
    estimatedTime: '2-4 hours',
    keywords: ['pest control', 'extermination', 'bug control'],
    isPopular: true
  },
  {
    id: 'bed-bug-control',
    name: 'Bed Bug Control',
    slug: 'bed-bug-control',
    category: 'pest-control',
    description: 'Specialized bed bug detection and elimination',
    icon: 'Bug',
    averagePrice: 'AED 300-800',
    estimatedTime: '3-5 hours',
    keywords: ['bed bugs', 'pest control', 'extermination']
  },
  {
    id: 'cockroach-control',
    name: 'Cockroach Control',
    slug: 'cockroach-control',
    category: 'pest-control',
    description: 'Effective cockroach elimination and prevention',
    icon: 'Bug',
    averagePrice: 'AED 200-500',
    estimatedTime: '2-3 hours',
    keywords: ['cockroach control', 'pest elimination', 'insect control']
  },
  {
    id: 'ant-control',
    name: 'Ant Control',
    slug: 'ant-control',
    category: 'pest-control',
    description: 'Professional ant elimination and colony removal',
    icon: 'Bug',
    averagePrice: 'AED 150-400',
    estimatedTime: '1-3 hours',
    keywords: ['ant control', 'pest control', 'insect elimination']
  },

  // Electrical
  {
    id: 'electrical-services',
    name: 'Electrical Services',
    slug: 'electrical-services',
    category: 'electrical',
    description: 'Licensed electrical repair and installation services',
    icon: 'Zap',
    averagePrice: 'AED 150-500',
    estimatedTime: '1-4 hours',
    keywords: ['electrical', 'wiring', 'electrical repair'],
    isPopular: true
  },
  {
    id: 'electrical-repair',
    name: 'Electrical Repair',
    slug: 'electrical-repair',
    category: 'electrical',
    description: 'Expert electrical troubleshooting and repair',
    icon: 'Zap',
    averagePrice: 'AED 200-600',
    estimatedTime: '1-3 hours',
    keywords: ['electrical repair', 'wiring repair', 'electrical troubleshooting']
  },
  {
    id: 'switch-socket-repair',
    name: 'Switch & Socket Repair',
    slug: 'switch-socket-repair',
    category: 'electrical',
    description: 'Professional switch and socket installation and repair',
    icon: 'Zap',
    averagePrice: 'AED 100-300',
    estimatedTime: '1-2 hours',
    keywords: ['switch repair', 'socket repair', 'electrical fixtures']
  },

  // Plumbing
  {
    id: 'plumbing-services',
    name: 'Plumbing Services',
    slug: 'plumbing-services',
    category: 'plumbing',
    description: 'Professional plumbing repair and installation',
    icon: 'Wrench',
    averagePrice: 'AED 150-400',
    estimatedTime: '1-4 hours',
    keywords: ['plumbing', 'pipes', 'water', 'plumber'],
    isPopular: true
  },
  {
    id: 'bathroom-plumbing',
    name: 'Bathroom Plumbing',
    slug: 'bathroom-plumbing',
    category: 'plumbing',
    description: 'Specialized bathroom plumbing and fixture repair',
    icon: 'Wrench',
    averagePrice: 'AED 200-500',
    estimatedTime: '1-6 hours',
    keywords: ['bathroom plumbing', 'toilet repair', 'shower repair'],
    isPopular: true
  },
  {
    id: 'kitchen-plumbing',
    name: 'Kitchen Plumbing',
    slug: 'kitchen-plumbing',
    category: 'plumbing',
    description: 'Kitchen sink and plumbing repair services',
    icon: 'Wrench',
    averagePrice: 'AED 150-400',
    estimatedTime: '1-4 hours',
    keywords: ['kitchen plumbing', 'sink repair', 'faucet repair']
  },
  {
    id: 'pipe-repair',
    name: 'Pipe Repair',
    slug: 'pipe-repair',
    category: 'plumbing',
    description: 'Professional pipe repair and leak fixing',
    icon: 'Wrench',
    averagePrice: 'AED 200-600',
    estimatedTime: '1-6 hours',
    keywords: ['pipe repair', 'leak repair', 'water pipes']
  },

  // Handyman Services
  {
    id: 'handyman-services',
    name: 'Handyman Services',
    slug: 'handyman-services',
    category: 'handyman',
    description: 'Multi-skilled handyman for various home repairs',
    icon: 'Hammer',
    averagePrice: 'AED 100-300',
    estimatedTime: '1-4 hours',
    keywords: ['handyman', 'repair', 'maintenance', 'general'],
    isPopular: true
  },
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
  {
    id: 'furniture-assembly',
    name: 'Furniture Assembly',
    slug: 'furniture-assembly',
    category: 'handyman',
    description: 'Professional furniture assembly and installation',
    icon: 'Hammer',
    averagePrice: 'AED 100-300',
    estimatedTime: '1-4 hours',
    keywords: ['furniture assembly', 'installation', 'ikea assembly']
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

// Areas data - Complete list of all Dubai areas
export const areas: Area[] = [
  // West Dubai Areas
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
      { id: 'al-barsha-heights', name: 'Al Barsha Heights', slug: 'al-barsha-heights', description: 'Premium residential towers', parentArea: 'al-barsha' },
      { id: 'al-barsha-south', name: 'Al Barsha South', slug: 'al-barsha-south', description: 'Southern district of Al Barsha', parentArea: 'al-barsha' }
    ]
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
    id: 'al-furjan', 
    name: 'Al Furjan', 
    slug: 'al-furjan', 
    description: 'Modern residential community with villas and apartments.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'discovery-gardens', 
    name: 'Discovery Gardens', 
    slug: 'discovery-gardens', 
    description: 'Themed residential community with affordable housing options.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'mediterranean-cluster', name: 'Mediterranean Cluster', slug: 'mediterranean-cluster', description: 'Mediterranean-themed residential area', parentArea: 'discovery-gardens' },
      { id: 'mogul-cluster', name: 'Mogul Cluster', slug: 'mogul-cluster', description: 'Mogul-themed residential area', parentArea: 'discovery-gardens' },
      { id: 'zen-cluster', name: 'Zen Cluster', slug: 'zen-cluster', description: 'Zen-themed residential area', parentArea: 'discovery-gardens' }
    ]
  },
  { 
    id: 'motor-city', 
    name: 'Motor City', 
    slug: 'motor-city', 
    description: 'Automotive-themed community with residential and commercial areas.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'green-community', name: 'Green Community', slug: 'green-community', description: 'Eco-friendly residential area', parentArea: 'motor-city' },
      { id: 'motor-city-central', name: 'Motor City Central', slug: 'motor-city-central', description: 'Central commercial area', parentArea: 'motor-city' },
      { id: 'uptown-motor-city', name: 'Uptown Motor City', slug: 'uptown-motor-city', description: 'Premium residential area', parentArea: 'motor-city' }
    ]
  },
  { 
    id: 'dubai-sports-city', 
    name: 'Dubai Sports City', 
    slug: 'dubai-sports-city', 
    description: 'Sports-themed community with golf course and residential areas.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'golf-horizon', name: 'Golf Horizon', slug: 'golf-horizon', description: 'Golf course residential area', parentArea: 'dubai-sports-city' },
      { id: 'golf-promenade', name: 'Golf Promenade', slug: 'golf-promenade', description: 'Golf course promenade area', parentArea: 'dubai-sports-city' },
      { id: 'sports-city-central', name: 'Sports City Central', slug: 'sports-city-central', description: 'Central sports facilities area', parentArea: 'dubai-sports-city' }
    ]
  },
  { 
    id: 'dubai-investment-park', 
    name: 'Dubai Investment Park', 
    slug: 'dubai-investment-park', 
    description: 'Mixed-use development with residential and commercial areas.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'dip-1', name: 'DIP 1', slug: 'dip-1', description: 'First phase of Dubai Investment Park', parentArea: 'dubai-investment-park' },
      { id: 'dip-2', name: 'DIP 2', slug: 'dip-2', description: 'Second phase of Dubai Investment Park', parentArea: 'dubai-investment-park' },
      { id: 'green-community-dip', name: 'Green Community DIP', slug: 'green-community-dip', description: 'Green community within DIP', parentArea: 'dubai-investment-park' }
    ]
  },
  { 
    id: 'the-greens', 
    name: 'The Greens', 
    slug: 'the-greens', 
    description: 'Lush residential community with parks and green spaces.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'al-ghaf', name: 'Al Ghaf', slug: 'al-ghaf', description: 'Residential area within The Greens', parentArea: 'the-greens' },
      { id: 'al-nakheel', name: 'Al Nakheel', slug: 'al-nakheel', description: 'Palm-themed residential area', parentArea: 'the-greens' },
      { id: 'al-sedr', name: 'Al Sedr', slug: 'al-sedr', description: 'Tree-themed residential area', parentArea: 'the-greens' }
    ]
  },
  { 
    id: 'the-views', 
    name: 'The Views', 
    slug: 'the-views', 
    description: 'Golf course community with luxury apartments and villas.',
    sector: 'West Dubai', 
    subAreas: [
      { id: 'fairways-north', name: 'Fairways North', slug: 'fairways-north', description: 'Northern golf course area', parentArea: 'the-views' },
      { id: 'fairways-south', name: 'Fairways South', slug: 'fairways-south', description: 'Southern golf course area', parentArea: 'the-views' },
      { id: 'golf-tower', name: 'Golf Tower', slug: 'golf-tower', description: 'High-rise golf course tower', parentArea: 'the-views' }
    ]
  },
  { 
    id: 'the-lakes', 
    name: 'The Lakes', 
    slug: 'the-lakes', 
    description: 'Lakeside residential community with villas and townhouses.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'the-meadows', 
    name: 'The Meadows', 
    slug: 'the-meadows', 
    description: 'Family-friendly community with villas and green spaces.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'the-springs', 
    name: 'The Springs', 
    slug: 'the-springs', 
    description: 'Gated community with villas and landscaped areas.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'emirates-hills', 
    name: 'Emirates Hills', 
    slug: 'emirates-hills', 
    description: 'Exclusive gated community with luxury villas and golf course.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'the-gardens', 
    name: 'The Gardens', 
    slug: 'the-gardens', 
    description: 'Mid-rise residential community with garden landscapes.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'arjan', 
    name: 'Arjan', 
    slug: 'arjan', 
    description: 'Emerging residential area with affordable housing options.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'al-sufouh', 
    name: 'Al Sufouh', 
    slug: 'al-sufouh', 
    description: 'Coastal area with luxury hotels and residential developments.',
    sector: 'West Dubai', 
    subAreas: []
  },

  // Central Dubai Areas
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
      { id: 'old-town-dubai', name: 'Old Town Dubai', slug: 'old-town-dubai', description: 'Traditional-style development', parentArea: 'downtown-dubai' },
      { id: 'difc', name: 'DIFC', slug: 'difc', description: 'Dubai International Financial Centre', parentArea: 'downtown-dubai' }
    ]
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
    id: 'jumeirah', 
    name: 'Jumeirah', 
    slug: 'jumeirah', 
    description: 'Prestigious beachfront area with luxury villas and resorts.',
    sector: 'Central Dubai', 
    subAreas: [
      { id: 'jumeirah-1', name: 'Jumeirah 1', slug: 'jumeirah-1', description: 'Beachfront residential area', parentArea: 'jumeirah' },
      { id: 'jumeirah-2', name: 'Jumeirah 2', slug: 'jumeirah-2', description: 'Established residential community', parentArea: 'jumeirah' },
      { id: 'jumeirah-3', name: 'Jumeirah 3', slug: 'jumeirah-3', description: 'Family-friendly residential area', parentArea: 'jumeirah' },
      { id: 'al-wasl', name: 'Al Wasl', slug: 'al-wasl', description: 'Central residential district', parentArea: 'jumeirah' },
      { id: 'al-safa', name: 'Al Safa', slug: 'al-safa', description: 'Premium residential area with parks', parentArea: 'jumeirah' },
      { id: 'al-manara', name: 'Al Manara', slug: 'al-manara', description: 'Lighthouse area with beach access', parentArea: 'jumeirah' },
      { id: 'umm-suqeim', name: 'Umm Suqeim', slug: 'umm-suqeim', description: 'Beachfront area near Burj Al Arab', parentArea: 'jumeirah' }
    ]
  },
  { 
    id: 'bur-dubai', 
    name: 'Bur Dubai', 
    slug: 'bur-dubai', 
    description: 'Historic area with traditional souks and cultural attractions.',
    sector: 'Central Dubai', 
    subAreas: [
      { id: 'al-fahidi', name: 'Al Fahidi', slug: 'al-fahidi', description: 'Historic cultural district', parentArea: 'bur-dubai' },
      { id: 'meena-bazaar', name: 'Meena Bazaar', slug: 'meena-bazaar', description: 'Traditional shopping area', parentArea: 'bur-dubai' },
      { id: 'textile-souk', name: 'Textile Souk', slug: 'textile-souk', description: 'Traditional textile market', parentArea: 'bur-dubai' }
    ]
  },
  { 
    id: 'al-karama', 
    name: 'Al Karama', 
    slug: 'al-karama', 
    description: 'Vibrant residential and commercial area with shopping and dining.',
    sector: 'Central Dubai', 
    subAreas: [
      { id: 'karama-residential', name: 'Karama Residential', slug: 'karama-residential', description: 'Residential area of Karama', parentArea: 'al-karama' },
      { id: 'karama-souk', name: 'Karama Souk', slug: 'karama-souk', description: 'Traditional market area', parentArea: 'al-karama' }
    ]
  },
  { 
    id: 'al-satwa', 
    name: 'Al Satwa', 
    slug: 'al-satwa', 
    description: 'Central residential area with easy access to beaches and city center.',
    sector: 'Central Dubai', 
    subAreas: [
      { id: 'al-satwa-residential', name: 'Al Satwa Residential', slug: 'al-satwa-residential', description: 'Main residential area', parentArea: 'al-satwa' },
      { id: 'satwa-central', name: 'Satwa Central', slug: 'satwa-central', description: 'Central commercial area', parentArea: 'al-satwa' }
    ]
  },

  // East Dubai Areas
  { 
    id: 'deira', 
    name: 'Deira', 
    slug: 'deira', 
    description: 'Historic commercial district with traditional souks and markets.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'gold-souk-area', name: 'Gold Souk Area', slug: 'gold-souk-area', description: 'Famous gold market district', parentArea: 'deira' },
      { id: 'spice-souk-area', name: 'Spice Souk Area', slug: 'spice-souk-area', description: 'Traditional spice market', parentArea: 'deira' },
      { id: 'al-rigga', name: 'Al Rigga', slug: 'al-rigga', description: 'Commercial and residential area', parentArea: 'deira' },
      { id: 'al-sabkha', name: 'Al Sabkha', slug: 'al-sabkha', description: 'Traditional market area', parentArea: 'deira' },
      { id: 'port-saeed', name: 'Port Saeed', slug: 'port-saeed', description: 'Waterfront area near Dubai Creek', parentArea: 'deira' }
    ]
  },
  { 
    id: 'al-garhoud', 
    name: 'Al Garhoud', 
    slug: 'al-garhoud', 
    description: 'Established residential area near Dubai Creek and airport.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'dubai-creek-golf', name: 'Dubai Creek Golf', slug: 'dubai-creek-golf', description: 'Golf course residential area', parentArea: 'al-garhoud' },
      { id: 'garhoud-bridge', name: 'Garhoud Bridge', slug: 'garhoud-bridge', description: 'Area near the bridge', parentArea: 'al-garhoud' }
    ]
  },
  { 
    id: 'dubai-festival-city', 
    name: 'Dubai Festival City', 
    slug: 'dubai-festival-city', 
    description: 'Waterfront development with shopping, dining, and residential areas.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'al-badia-residences', name: 'Al Badia Residences', slug: 'al-badia-residences', description: 'Golf course residential area', parentArea: 'dubai-festival-city' },
      { id: 'creek-waters', name: 'Creek Waters', slug: 'creek-waters', description: 'Waterfront residential area', parentArea: 'dubai-festival-city' },
      { id: 'marsa-plaza', name: 'Marsa Plaza', slug: 'marsa-plaza', description: 'Commercial and retail area', parentArea: 'dubai-festival-city' }
    ]
  },
  { 
    id: 'dubai-creek-harbour', 
    name: 'Dubai Creek Harbour', 
    slug: 'dubai-creek-harbour', 
    description: 'New waterfront development with luxury residences and retail.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'creek-beach', name: 'Creek Beach', slug: 'creek-beach', description: 'Beachfront residential area', parentArea: 'dubai-creek-harbour' },
      { id: 'creek-gate', name: 'Creek Gate', slug: 'creek-gate', description: 'Entry point development', parentArea: 'dubai-creek-harbour' },
      { id: 'creek-horizon', name: 'Creek Horizon', slug: 'creek-horizon', description: 'High-rise residential area', parentArea: 'dubai-creek-harbour' }
    ]
  },
  { 
    id: 'mirdif', 
    name: 'Mirdif', 
    slug: 'mirdif', 
    description: 'Family-friendly residential community with villas and amenities.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'mirdif-hills', name: 'Mirdif Hills', slug: 'mirdif-hills', description: 'Hillside residential area', parentArea: 'mirdif' },
      { id: 'uptown-mirdif', name: 'Uptown Mirdif', slug: 'uptown-mirdif', description: 'Premium residential area', parentArea: 'mirdif' },
      { id: 'ghoroob', name: 'Ghoroob', slug: 'ghoroob', description: 'Residential community within Mirdif', parentArea: 'mirdif' }
    ]
  },
  { 
    id: 'al-mizhar', 
    name: 'Al Mizhar', 
    slug: 'al-mizhar', 
    description: 'Residential area with villas and family-friendly amenities.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'mizhar-1', name: 'Mizhar 1', slug: 'mizhar-1', description: 'First phase of Al Mizhar', parentArea: 'al-mizhar' },
      { id: 'mizhar-2', name: 'Mizhar 2', slug: 'mizhar-2', description: 'Second phase of Al Mizhar', parentArea: 'al-mizhar' }
    ]
  },
  { 
    id: 'al-khawaneej', 
    name: 'Al Khawaneej', 
    slug: 'al-khawaneej', 
    description: 'Residential area with villas and traditional Arabic architecture.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'khawaneej-1', name: 'Khawaneej 1', slug: 'khawaneej-1', description: 'First area of Al Khawaneej', parentArea: 'al-khawaneej' },
      { id: 'khawaneej-2', name: 'Khawaneej 2', slug: 'khawaneej-2', description: 'Second area of Al Khawaneej', parentArea: 'al-khawaneej' }
    ]
  },
  { 
    id: 'al-qusais', 
    name: 'Al Qusais', 
    slug: 'al-qusais', 
    description: 'Established residential area near Dubai International Airport.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'qusais-1', name: 'Qusais 1', slug: 'qusais-1', description: 'First area of Al Qusais', parentArea: 'al-qusais' },
      { id: 'qusais-2', name: 'Qusais 2', slug: 'qusais-2', description: 'Second area of Al Qusais', parentArea: 'al-qusais' },
      { id: 'qusais-3', name: 'Qusais 3', slug: 'qusais-3', description: 'Third area of Al Qusais', parentArea: 'al-qusais' }
    ]
  },
  { 
    id: 'al-twar', 
    name: 'Al Twar', 
    slug: 'al-twar', 
    description: 'Residential area with villas and family-oriented facilities.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'twar-1', name: 'Twar 1', slug: 'twar-1', description: 'First area of Al Twar', parentArea: 'al-twar' },
      { id: 'twar-2', name: 'Twar 2', slug: 'twar-2', description: 'Second area of Al Twar', parentArea: 'al-twar' }
    ]
  },
  { 
    id: 'al-rashidiya', 
    name: 'Al Rashidiya', 
    slug: 'al-rashidiya', 
    description: 'Residential community with affordable housing options.',
    sector: 'East Dubai', 
    subAreas: [
      { id: 'rashidiya-1', name: 'Rashidiya 1', slug: 'rashidiya-1', description: 'First area of Al Rashidiya', parentArea: 'al-rashidiya' },
      { id: 'rashidiya-2', name: 'Rashidiya 2', slug: 'rashidiya-2', description: 'Second area of Al Rashidiya', parentArea: 'al-rashidiya' }
    ]
  },
  { 
    id: 'al-mamzar', 
    name: 'Al Mamzar', 
    slug: 'al-mamzar', 
    description: 'Beachfront area with parks and recreational facilities.',
    sector: 'East Dubai', 
    subAreas: []
  },

  // South Dubai Areas
  { 
    id: 'al-quoz', 
    name: 'Al Quoz', 
    slug: 'al-quoz', 
    description: 'Industrial and residential area with art galleries and creative spaces.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'al-quoz-1', name: 'Al Quoz 1', slug: 'al-quoz-1', description: 'First area of Al Quoz', parentArea: 'al-quoz' },
      { id: 'al-quoz-2', name: 'Al Quoz 2', slug: 'al-quoz-2', description: 'Second area of Al Quoz', parentArea: 'al-quoz' },
      { id: 'al-quoz-3', name: 'Al Quoz 3', slug: 'al-quoz-3', description: 'Third area of Al Quoz', parentArea: 'al-quoz' },
      { id: 'al-quoz-4', name: 'Al Quoz 4', slug: 'al-quoz-4', description: 'Fourth area of Al Quoz', parentArea: 'al-quoz' }
    ]
  },
  { 
    id: 'al-warqa', 
    name: 'Al Warqa', 
    slug: 'al-warqa', 
    description: 'Residential area with villas and family-friendly amenities.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'warqa-1', name: 'Warqa 1', slug: 'warqa-1', description: 'First area of Al Warqa', parentArea: 'al-warqa' },
      { id: 'warqa-2', name: 'Warqa 2', slug: 'warqa-2', description: 'Second area of Al Warqa', parentArea: 'al-warqa' },
      { id: 'warqa-3', name: 'Warqa 3', slug: 'warqa-3', description: 'Third area of Al Warqa', parentArea: 'al-warqa' }
    ]
  },
  { 
    id: 'al-nahda', 
    name: 'Al Nahda', 
    slug: 'al-nahda', 
    description: 'Border area between Dubai and Sharjah with residential communities.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'nahda-1', name: 'Nahda 1', slug: 'nahda-1', description: 'First area of Al Nahda', parentArea: 'al-nahda' },
      { id: 'nahda-2', name: 'Nahda 2', slug: 'nahda-2', description: 'Second area of Al Nahda', parentArea: 'al-nahda' }
    ]
  },
  { 
    id: 'dubai-south', 
    name: 'Dubai South', 
    slug: 'dubai-south', 
    description: 'New development area near Al Maktoum International Airport.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'golf-links', name: 'Golf Links', slug: 'golf-links', description: 'Golf course residential area', parentArea: 'dubai-south' },
      { id: 'mag-city', name: 'MAG City', slug: 'mag-city', description: 'Mixed-use development', parentArea: 'dubai-south' },
      { id: 'pulse-beachfront', name: 'Pulse Beachfront', slug: 'pulse-beachfront', description: 'Beachfront development', parentArea: 'dubai-south' }
    ]
  },
  { 
    id: 'dubai-land', 
    name: 'Dubai Land', 
    slug: 'dubai-land', 
    description: 'Large-scale development with residential communities and entertainment.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'living-legends', name: 'Living Legends', slug: 'living-legends', description: 'Golf course community', parentArea: 'dubai-land' },
      { id: 'mudon', name: 'Mudon', slug: 'mudon', description: 'Family-friendly community', parentArea: 'dubai-land' },
      { id: 'remraam', name: 'Remraam', slug: 'remraam', description: 'Affordable residential community', parentArea: 'dubai-land' }
    ]
  },
  { 
    id: 'dubai-hills-estate', 
    name: 'Dubai Hills Estate', 
    slug: 'dubai-hills-estate', 
    description: 'Premium residential development with golf course and parks.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'golf-place', name: 'Golf Place', slug: 'golf-place', description: 'Golf course residential area', parentArea: 'dubai-hills-estate' },
      { id: 'golf-suites', name: 'Golf Suites', slug: 'golf-suites', description: 'Golf course apartment complex', parentArea: 'dubai-hills-estate' },
      { id: 'parkway', name: 'Parkway', slug: 'parkway', description: 'Park-adjacent residential area', parentArea: 'dubai-hills-estate' }
    ]
  },
  { 
    id: 'town-square', 
    name: 'Town Square', 
    slug: 'town-square', 
    description: 'Family-oriented community with parks and recreational facilities.',
    sector: 'South Dubai', 
    subAreas: []
  },
  { 
    id: 'silicon-oasis', 
    name: 'Silicon Oasis', 
    slug: 'silicon-oasis', 
    description: 'Technology park with residential and commercial areas.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'silicon-gates', name: 'Silicon Gates', slug: 'silicon-gates', description: 'Residential area within Silicon Oasis', parentArea: 'silicon-oasis' },
      { id: 'silicon-heights', name: 'Silicon Heights', slug: 'silicon-heights', description: 'High-rise residential area', parentArea: 'silicon-oasis' },
      { id: 'silicon-avenue', name: 'Silicon Avenue', slug: 'silicon-avenue', description: 'Commercial avenue', parentArea: 'silicon-oasis' }
    ]
  },
  { 
    id: 'silicon-central', 
    name: 'Silicon Central', 
    slug: 'silicon-central', 
    description: 'Central area of Dubai Silicon Oasis with mixed-use development.',
    sector: 'South Dubai', 
    subAreas: []
  },
  { 
    id: 'academic-city', 
    name: 'Academic City', 
    slug: 'academic-city', 
    description: 'Educational hub with universities and student accommodation.',
    sector: 'South Dubai', 
    subAreas: []
  },
  { 
    id: 'international-city', 
    name: 'International City', 
    slug: 'international-city', 
    description: 'Themed residential community with affordable housing options.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'china-cluster', name: 'China Cluster', slug: 'china-cluster', description: 'Chinese-themed residential area', parentArea: 'international-city' },
      { id: 'italy-cluster', name: 'Italy Cluster', slug: 'italy-cluster', description: 'Italian-themed residential area', parentArea: 'international-city' },
      { id: 'france-cluster', name: 'France Cluster', slug: 'france-cluster', description: 'French-themed residential area', parentArea: 'international-city' }
    ]
  },
  { 
    id: 'jvc', 
    name: 'JVC (Jumeirah Village Circle)', 
    slug: 'jvc', 
    description: 'Circular residential community with parks and family amenities.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'jvc-district-1', name: 'JVC District 1', slug: 'jvc-district-1', description: 'First district of JVC', parentArea: 'jvc' },
      { id: 'jvc-district-2', name: 'JVC District 2', slug: 'jvc-district-2', description: 'Second district of JVC', parentArea: 'jvc' },
      { id: 'jvc-district-3', name: 'JVC District 3', slug: 'jvc-district-3', description: 'Third district of JVC', parentArea: 'jvc' }
    ]
  },
  { 
    id: 'arabian-ranches', 
    name: 'Arabian Ranches', 
    slug: 'arabian-ranches', 
    description: 'Golf course community with luxury villas and family amenities.',
    sector: 'South Dubai', 
    subAreas: [
      { id: 'mirador', name: 'Mirador', slug: 'mirador', description: 'Villa community within Arabian Ranches', parentArea: 'arabian-ranches' },
      { id: 'savannah', name: 'Savannah', slug: 'savannah', description: 'Villa community with golf course views', parentArea: 'arabian-ranches' },
      { id: 'alvorada', name: 'Alvorada', slug: 'alvorada', description: 'Premium villa community', parentArea: 'arabian-ranches' }
    ]
  },
  { 
    id: 'meydan', 
    name: 'Meydan', 
    slug: 'meydan', 
    description: 'Luxury development centered around horse racing and golf.',
    sector: 'South Dubai', 
    subAreas: []
  },
  { 
    id: 'nad-al-sheba', 
    name: 'Nad Al Sheba', 
    slug: 'nad-al-sheba', 
    description: 'Residential area with sports and recreational facilities.',
    sector: 'South Dubai', 
    subAreas: []
  },
  { 
    id: 'dubai-production-city', 
    name: 'Dubai Production City', 
    slug: 'dubai-production-city', 
    description: 'Media and production hub with residential and commercial areas.',
    sector: 'South Dubai', 
    subAreas: []
  },

  // New Areas
  { 
    id: 'bluewaters-island', 
    name: 'Bluewaters Island', 
    slug: 'bluewaters-island', 
    description: 'Artificial island with luxury residences and entertainment.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'emaar-beachfront', 
    name: 'Emaar Beachfront', 
    slug: 'emaar-beachfront', 
    description: 'Luxury beachfront development with high-rise towers.',
    sector: 'West Dubai', 
    subAreas: []
  },
  { 
    id: 'dubai-islands', 
    name: 'Dubai Islands', 
    slug: 'dubai-islands', 
    description: 'New island development with residential and commercial areas.',
    sector: 'North Dubai', 
    subAreas: []
  },
  { 
    id: 'jebel-ali', 
    name: 'Jebel Ali', 
    slug: 'jebel-ali', 
    description: 'Industrial and residential area near the port and free zone.',
    sector: 'West Dubai', 
    subAreas: []
  }
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
    services: ['ac-repair-cleaning', 'electrical-services'],
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

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get area by slug
export const getAreaBySlug = (slug: string): Area | undefined => {
  return areas.find(area => area.slug === slug);
};

// Helper function to get sub-area by slug
export const getSubAreaBySlug = (areaSlug: string, subAreaSlug: string): SubArea | undefined => {
  const area = getAreaBySlug(areaSlug);
  return area?.subAreas.find(subArea => subArea.slug === subAreaSlug);
};

// Helper function to get providers by category
export const getProvidersByCategory = (categorySlug: string): Provider[] => {
  return sampleProviders.filter(provider => 
    provider.isApproved && 
    provider.services.some(serviceSlug => {
      const service = getServiceBySlug(serviceSlug);
      return service && service.category === categorySlug;
    })
  );
};

// Helper function to get providers by service
export const getProvidersByService = (serviceSlug: string): Provider[] => {
  return sampleProviders.filter(provider => 
    provider.isApproved && provider.services.includes(serviceSlug)
  );
};

// Helper function to get providers by area
export const getProvidersByArea = (areaSlug: string): Provider[] => {
  return sampleProviders.filter(provider => 
    provider.isApproved && provider.areas.includes(areaSlug)
  );
};

// Helper function to get providers by service and area
export const getProvidersByServiceAndArea = (serviceSlug: string, areaSlug: string): Provider[] => {
  return sampleProviders.filter(provider => 
    provider.isApproved && 
    provider.services.includes(serviceSlug) && 
    provider.areas.includes(areaSlug)
  );
};

// Alias for backward compatibility
export const getProvidersForServiceArea = getProvidersByServiceAndArea;

// Helper function to generate service-area metadata
export const getServiceAreaMeta = (serviceSlug: string, areaSlug: string, subareaSlug?: string) => {
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  
  if (!service || !area) {
    return null;
  }

  const providers = getProvidersByServiceAndArea(serviceSlug, areaSlug);
  const averageRating = providers.reduce((sum, p) => sum + p.rating, 0) / providers.length || 0;

  return {
    title: `${service.name} in ${area.name} Dubai | ${providers.length} Verified Providers | Homizon`,
    description: `Find trusted ${service.name.toLowerCase()} professionals in ${area.name}, Dubai. ${providers.length} verified providers with ${averageRating.toFixed(1)} average rating. Book instantly with same-day service available.`,
    keywords: [
      service.name,
      area.name,
      'Dubai',
      'service provider',
      'professional',
      'verified',
      'booking',
      'home services',
      service.category
    ]
  };
};

// Helper function to generate service-area combinations
export const generateServiceAreaCombinations = () => {
  const combinations: Array<{
    url: string;
    type: 'service-area' | 'service-area-subarea';
    service: string;
    area: string;
    subArea?: string;
  }> = [];

  services.forEach(service => {
    areas.forEach(area => {
      // Service-Area combination
      combinations.push({
        url: `/${service.slug}/${area.slug}`,
        type: 'service-area',
        service: service.slug,
        area: area.slug
      });

      // Service-Area-SubArea combinations
      area.subAreas.forEach(subArea => {
        combinations.push({
          url: `/${service.slug}/${area.slug}/${subArea.slug}`,
          type: 'service-area-subarea',
          service: service.slug,
          area: area.slug,
          subArea: subArea.slug
        });
      });
    });
  });

  return combinations;
};