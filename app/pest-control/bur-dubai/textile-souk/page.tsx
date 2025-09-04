import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/bur-dubai/textile-souk'] || {
  title: 'Pest Control in Bur Dubai Textile Souk - Professional Services | HOMIZON',
  description: 'Professional pest control services in Bur Dubai Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlBurDubaiTextileSoukPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('bur-dubai');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'bur-dubai');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}