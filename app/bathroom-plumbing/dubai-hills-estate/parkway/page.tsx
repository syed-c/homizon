import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-hills-estate/parkway'] || {
  title: 'Bathroom Plumbing in Parkway - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Parkway. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingParkwayPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="parkway"
      subareaName="Parkway"
    />
  );
}