import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/arabian-ranches/savannah'] || {
  title: 'Pest Control in Arabian Ranches Savannah - Professional Services | HOMIZON',
  description: 'Professional pest control services in Arabian Ranches Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlArabianRanchesSavannahPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('arabian-ranches');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'arabian-ranches');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}