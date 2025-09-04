import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-warqa/warqa-3'] || {
  title: 'Bathroom Deep Cleaning in Warqa 3 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Warqa 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningWarqa3Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-3"
      subareaName="Warqa 3"
    />
  );
}