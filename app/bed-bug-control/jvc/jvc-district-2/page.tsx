import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jvc/jvc-district-2'] || {
  title: 'Bed Bug Treatment in JVC District 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in JVC District 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJVCDistrict2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-2"
      subareaName="JVC District 2"
    />
  );
}