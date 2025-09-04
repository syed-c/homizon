import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-quoz'] || {
  title: 'Pest Control in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlQuozPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-quoz');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-quoz');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}