import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-hills-estate'] || {
  title: 'Bed Bug Treatment in Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDubaiHillsEstatePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
    />
  );
}