import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/deira'] || {
  title: 'Bed Bug Treatment in Deira - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="deira"
      areaName="Deira"
    />
  );
}