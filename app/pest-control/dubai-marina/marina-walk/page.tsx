import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-marina/marina-walk'] || {
  title: 'Pest Control in Dubai Marina Marina Walk - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Marina Marina Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiMarinaMarinaWalkPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-marina');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-marina');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}