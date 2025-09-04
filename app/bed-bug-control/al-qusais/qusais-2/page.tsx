import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-qusais/qusais-2'] || {
  title: 'Bed Bug Treatment in Qusais 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Qusais 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentQusais2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-2"
      subareaName="Qusais 2"
    />
  );
}