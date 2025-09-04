import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/business-bay/bay-square'] || {
  title: 'Bed Bug Treatment in Bay Square - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Bay Square. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBaySquarePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-square"
      subareaName="Bay Square"
    />
  );
}