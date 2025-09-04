import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-furjan'] || {
  title: 'Pest Control in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlFurjanPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-furjan');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-furjan');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}