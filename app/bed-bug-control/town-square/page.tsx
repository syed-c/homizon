import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/town-square'] || {
  title: 'Bed Bug Treatment in Town Square - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="town-square"
      areaName="Town Square"
    />
  );
}