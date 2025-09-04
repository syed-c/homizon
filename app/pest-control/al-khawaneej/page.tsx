import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-khawaneej'] || {
  title: 'Pest Control in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlKhawaneejPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-khawaneej');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-khawaneej');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}