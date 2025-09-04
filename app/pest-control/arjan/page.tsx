import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/arjan'] || {
  title: 'Pest Control in Arjan - Professional Services | HOMIZON',
  description: 'Professional pest control services in Arjan. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlArjanPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('arjan');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'arjan');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}