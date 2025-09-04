import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-hills-estate/golf-place'] || {
  title: 'Bed Bug Treatment in Golf Place - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Golf Place. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentGolfPlacePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-place"
      subareaName="Golf Place"
    />
  );
}