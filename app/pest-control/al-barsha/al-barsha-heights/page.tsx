import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-barsha/al-barsha-heights'] || {
  title: 'Pest Control in Al Barsha Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Barsha Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlBarshaAlBarshaHeightsPage() {
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