import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/academic-city'] || {
  title: 'Pest Control in Academic City - Professional Services | HOMIZON',
  description: 'Professional pest control services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAcademicCityPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('academic-city');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'academic-city');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}