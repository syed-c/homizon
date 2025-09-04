import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-twar/twar-2'] || {
  title: 'Bathroom Deep Cleaning in Twar 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Twar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningTwar2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-2"
      subareaName="Twar 2"
    />
  );
}