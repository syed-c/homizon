import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-warqa/warqa-2'] || {
  title: 'Bathroom Deep Cleaning in Warqa 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Warqa 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningWarqa2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-2"
      subareaName="Warqa 2"
    />
  );
}