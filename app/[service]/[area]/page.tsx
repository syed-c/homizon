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
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

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
  // Return empty array to disable static generation and use dynamic rendering
  return [];
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

