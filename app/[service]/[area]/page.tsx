import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea,
  getServiceAreaMeta,
  services,
  areas
} from '@/lib/data';
import ServiceAreaPageClient from './service-area-page-client';

interface ServiceAreaPageProps {
  params: Promise<{
    service: string;
    area: string;
  }>;
}

export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  
  if (!service || !area) {
    return {
      title: 'Service Not Found',
      description: 'The requested service or area could not be found.'
    };
  }

  const meta = getServiceAreaMeta(serviceSlug, areaSlug);
  
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
  // Generate static params for the most popular service-area combinations
  const popularCombinations: { service: string; area: string }[] = [];
  
  // Get popular services and areas
  const popularServices = services.filter(s => s.isPopular).slice(0, 10);
  const popularAreas = areas.slice(0, 20); // Top 20 areas
  
  for (const service of popularServices) {
    for (const area of popularAreas) {
      popularCombinations.push({
        service: service.slug,
        area: area.slug
      });
    }
  }
  
  return popularCombinations;
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { service: serviceSlug, area: areaSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug);
  const area = getAreaBySlug(areaSlug);
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea(serviceSlug, areaSlug);
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}
