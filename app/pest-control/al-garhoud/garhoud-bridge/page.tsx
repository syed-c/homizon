import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-garhoud/garhoud-bridge'] || {
  title: 'Pest Control in Al Garhoud Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Garhoud Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlGarhoudGarhoudBridgePage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-garhoud');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-garhoud');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}