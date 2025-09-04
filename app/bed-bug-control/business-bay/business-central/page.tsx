import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/business-bay/business-central'] || {
  title: 'Bed Bug Treatment in Business Central - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}