import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getSubAreaBySlug,
  getProvidersForServiceArea,
  getServiceAreaMeta,
  services,
  areas
} from '@/lib/data';
import ServiceAreaPageClient from '../service-area-page-client';

interface ServiceAreaSubareaPageProps {
  params: Promise<{
    service: string;
    area: string;
    subarea: string;
  }>;
}

export async function generateMetadata({ params }: ServiceAreaSubareaPageProps): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug, subarea: subareaSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  const subarea = getSubAreaBySlug(areaSlug, subareaSlug);
  
  if (!service || !area || !subarea) {
    return {
      title: 'Service Not Found',
      description: 'The requested service, area, or subarea could not be found.'
    };
  }

  const meta = getServiceAreaMeta(serviceSlug, areaSlug, subareaSlug);
  
  if (!meta) {
    return {
      title: 'Service Not Found',
      description: 'The requested service or area could not be found.'
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    }
  };
}

export async function generateStaticParams() {
  // Generate static params for popular service-area-subarea combinations
  const popularCombinations: { service: string; area: string; subarea: string; }[] = [];
  
  // Get popular services and areas with subareas
  const popularServices = services.filter(s => s.isPopular).slice(0, 5);
  const areasWithSubareas = areas.filter(a => a.subAreas.length > 0).slice(0, 10);
  
  for (const service of popularServices) {
    for (const area of areasWithSubareas) {
      for (const subarea of area.subAreas.slice(0, 3)) { // Top 3 subareas per area
        popularCombinations.push({
          service: service.slug,
          area: area.slug,
          subarea: subarea.slug
        });
      }
    }
  }
  
  return popularCombinations;
}

export default async function ServiceAreaSubareaPage({ params }: ServiceAreaSubareaPageProps) {
  const { service: serviceSlug, area: areaSlug, subarea: subareaSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  const subarea = getSubAreaBySlug(areaSlug, subareaSlug);
  
  if (!service || !area || !subarea) {
    notFound();
  }

  const providers = getProvidersForServiceArea(serviceSlug, areaSlug);
  
  // Create a modified area object that represents the subarea
  const subareaAsArea = {
    ...area,
    name: subarea.name,
    description: subarea.description || `${subarea.name} is a prime location in ${area.name}, offering excellent access to professional services.`
  };
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={subareaAsArea}
      providers={providers}
    />
  );
}
