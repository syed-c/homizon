import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-qusais/qusais-3'] || {
  title: 'Bed Bug Treatment in Qusais 3 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Qusais 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentQusais3Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-3"
      subareaName="Qusais 3"
    />
  );
}