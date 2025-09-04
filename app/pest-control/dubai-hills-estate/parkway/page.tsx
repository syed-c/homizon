import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-hills-estate/parkway'] || {
  title: 'Pest Control in Dubai Hills Estate Parkway - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Hills Estate Parkway. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiHillsEstateParkwayPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-hills-estate');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-hills-estate');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}