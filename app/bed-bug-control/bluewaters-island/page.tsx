import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/bluewaters-island'] || {
  title: 'Bed Bug Treatment in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}