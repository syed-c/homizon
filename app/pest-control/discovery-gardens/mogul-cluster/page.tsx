import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/discovery-gardens/mogul-cluster'] || {
  title: 'Pest Control in Discovery Gardens Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional pest control services in Discovery Gardens Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDiscoveryGardensMogulClusterPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('discovery-gardens');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'discovery-gardens');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}