import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jumeirah/al-manara'] || {
  title: 'Bed Bug Treatment in Al Manara - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}