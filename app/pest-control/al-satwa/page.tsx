import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-satwa'] || {
  title: 'Pest Control in Al Satwa - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlSatwaPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-satwa');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-satwa');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}