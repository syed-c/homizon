import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-quoz/al-quoz-2'] || {
  title: 'Bed Bug Treatment in Al Quoz 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Quoz 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlQuoz2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-2"
      subareaName="Al Quoz 2"
    />
  );
}