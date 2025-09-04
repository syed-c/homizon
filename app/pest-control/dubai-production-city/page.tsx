import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-production-city'] || {
  title: 'Pest Control in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiProductionCityPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-production-city');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-production-city');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}