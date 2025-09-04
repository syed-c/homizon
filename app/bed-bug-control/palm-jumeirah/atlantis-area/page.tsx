import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/palm-jumeirah/atlantis-area'] || {
  title: 'Bed Bug Treatment in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}