import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-warqa/warqa-2'] || {
  title: 'Carpet Cleaning in Warqa 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Warqa 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningWarqa2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-2"
      subareaName="Warqa 2"
    />
  );
}