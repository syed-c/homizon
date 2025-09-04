import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-investment-park'] || {
  title: 'Pest Control in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiInvestmentParkPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-investment-park');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-investment-park');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}