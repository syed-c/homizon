import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/downtown-dubai/opera-district'] || {
  title: 'Bed Bug Treatment in Opera District - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}