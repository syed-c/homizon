import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-land/living-legends'] || {
  title: 'Pest Control in Dubai Land Living Legends - Professional Services | HOMIZON',
  description: 'Professional pest control services in Dubai Land Living Legends. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiLandLivingLegendsPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('dubai-land');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'dubai-land');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}