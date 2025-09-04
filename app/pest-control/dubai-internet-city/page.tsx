import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-internet-city'] || {
  title: 'Pest Control in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiInternetCityPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-internet-city');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-internet-city');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}