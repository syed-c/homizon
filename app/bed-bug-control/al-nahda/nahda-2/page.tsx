import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-nahda/nahda-2'] || {
  title: 'Bed Bug Treatment in Nahda 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Nahda 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentNahda2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-2"
      subareaName="Nahda 2"
    />
  );
}