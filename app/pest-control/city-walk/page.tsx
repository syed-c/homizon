import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/city-walk'] || {
  title: 'Pest Control in City Walk - Professional Services | HOMIZON',
  description: 'Professional pest control services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlCityWalkPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('city-walk');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'city-walk');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}