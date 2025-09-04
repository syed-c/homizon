import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jvc/jvc-district-3'] || {
  title: 'Bed Bug Treatment in JVC District 3 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in JVC District 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJVCDistrict3Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-3"
      subareaName="JVC District 3"
    />
  );
}