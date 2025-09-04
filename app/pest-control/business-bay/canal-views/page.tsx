import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/business-bay/canal-views'] || {
  title: 'Pest Control in Business Bay Canal Views - Professional Services | HOMIZON',
  description: 'Professional pest control services in Business Bay Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlBusinessBayCanalViewsPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('business-bay');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'business-bay');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}