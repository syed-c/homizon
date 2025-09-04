import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jumeirah/jumeirah-3'] || {
  title: 'Bed Bug Treatment in Jumeirah 3 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Jumeirah 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJumeirah3Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-3"
      subareaName="Jumeirah 3"
    />
  );
}