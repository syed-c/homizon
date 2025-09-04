import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-quoz/al-quoz-2'] || {
  title: 'Carpet Cleaning in Al Quoz 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Quoz 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlQuoz2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-2"
      subareaName="Al Quoz 2"
    />
  );
}