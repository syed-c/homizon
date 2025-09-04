import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-media-city'] || {
  title: 'Pest Control in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiMediaCityPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-media-city');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-media-city');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}