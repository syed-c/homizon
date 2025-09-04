import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-hills-estate/golf-place'] || {
  title: 'Bathroom Deep Cleaning in Golf Place - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Golf Place. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGolfPlacePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-place"
      subareaName="Golf Place"
    />
  );
}