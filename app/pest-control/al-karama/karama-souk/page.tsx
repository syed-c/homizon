import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-karama/karama-souk'] || {
  title: 'Pest Control in Al Karama Karama Souk - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Karama Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlKaramaKaramaSoukPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-karama');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-karama');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}