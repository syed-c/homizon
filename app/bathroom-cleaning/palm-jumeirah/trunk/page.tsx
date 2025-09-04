import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/palm-jumeirah/trunk'] || {
  title: 'Bathroom Deep Cleaning in Trunk - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}