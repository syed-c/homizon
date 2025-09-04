import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-south'] || {
  title: 'Pest Control in Dubai South - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiSouthPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-south');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-south');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}