import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-festival-city/marsa-plaza'] || {
  title: 'Pest Control in Dubai Festival City Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Festival City Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiFestivalCityMarsaPlazaPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-festival-city');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-festival-city');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}