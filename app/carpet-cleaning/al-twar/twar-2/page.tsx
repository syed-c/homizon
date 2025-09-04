import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-twar/twar-2'] || {
  title: 'Carpet Cleaning in Twar 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Twar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTwar2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-2"
      subareaName="Twar 2"
    />
  );
}