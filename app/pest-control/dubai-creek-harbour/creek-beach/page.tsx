import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-creek-harbour/creek-beach'] || {
  title: 'Pest Control in Dubai Creek Harbour Creek Beach - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Creek Harbour Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiCreekHarbourCreekBeachPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-creek-harbour');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-creek-harbour');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}