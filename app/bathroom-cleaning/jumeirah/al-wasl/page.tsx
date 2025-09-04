import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jumeirah/al-wasl'] || {
  title: 'Bathroom Deep Cleaning in Al Wasl - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Wasl. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlWaslPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-wasl"
      subareaName="Al Wasl"
    />
  );
}