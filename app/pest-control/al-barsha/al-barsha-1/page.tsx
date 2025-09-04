import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-barsha/al-barsha-1'] || {
  title: 'Pest Control in Al Barsha Al Barsha 1 - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Barsha Al Barsha 1. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlBarshaAlBarsha1Page() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-barsha');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-barsha');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}