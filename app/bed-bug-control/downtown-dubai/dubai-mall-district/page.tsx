import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/downtown-dubai/dubai-mall-district'] || {
  title: 'Bed Bug Treatment in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}