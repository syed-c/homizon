import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-hills-estate/golf-place'] || {
  title: 'Bathroom Plumbing in Golf Place - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Golf Place. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGolfPlacePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-place"
      subareaName="Golf Place"
    />
  );
}