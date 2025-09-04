import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/deira/port-saeed'] || {
  title: 'Pest Control in Deira Port Saeed - Professional Services | HOMIZON',
  description: 'Professional pest control services in Deira Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDeiraPortSaeedPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('deira');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'deira');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}