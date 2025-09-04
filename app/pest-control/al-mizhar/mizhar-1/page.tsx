import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-mizhar/mizhar-1'] || {
  title: 'Pest Control in Al Mizhar Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Mizhar Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlMizharMizhar1Page() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-mizhar');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-mizhar');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}