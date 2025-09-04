import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/palm-jumeirah/trunk'] || {
  title: 'Bed Bug Treatment in Trunk - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}