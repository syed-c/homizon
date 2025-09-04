import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-sufouh'] || {
  title: 'Pest Control in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlSufouhPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-sufouh');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-sufouh');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}