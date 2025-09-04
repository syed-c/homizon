import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jumeirah/al-wasl'] || {
  title: 'Bed Bug Treatment in Al Wasl - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Wasl. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlWaslPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-wasl"
      subareaName="Al Wasl"
    />
  );
}