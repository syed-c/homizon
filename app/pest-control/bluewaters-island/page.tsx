import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/bluewaters-island'] || {
  title: 'Pest Control in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional pest control services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlBluewatersIslandPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('bluewaters-island');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'bluewaters-island');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}