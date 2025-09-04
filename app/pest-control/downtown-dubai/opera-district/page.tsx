import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/downtown-dubai/opera-district'] || {
  title: 'Pest Control in Downtown Dubai Opera District - Professional Services | HOMIZON',
  description: 'Professional pest control services in Downtown Dubai Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDowntownDubaiOperaDistrictPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('downtown-dubai');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'downtown-dubai');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}