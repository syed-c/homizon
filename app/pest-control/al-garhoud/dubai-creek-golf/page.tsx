import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import { notFound } from 'next/navigation';
import { 
  getServiceBySlug, 
  getAreaBySlug, 
  getProvidersForServiceArea 
} from '@/lib/data';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/al-garhoud/dubai-creek-golf'] || {
  title: 'Pest Control in Al Garhoud Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Garhoud Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlGarhoudDubaiCreekGolfPage() {
  const service = getServiceBySlug('pest-control');
  const area = getAreaBySlug('al-garhoud');
  
  if (!service || !area) {
    notFound();
  }

  const providers = getProvidersForServiceArea('pest-control', 'al-garhoud');
  
  return (
    <ServiceAreaPageClient 
      service={service}
      area={area}
      providers={providers}
    />
  );
}