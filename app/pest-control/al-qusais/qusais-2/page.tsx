import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-qusais/qusais-2'] || {
  title: 'Pest Control in Al Qusais Qusais 2 - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Qusais Qusais 2. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlQusaisQusais2Page() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-qusais');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-qusais');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}