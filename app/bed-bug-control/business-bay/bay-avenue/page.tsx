import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/business-bay/bay-avenue'] || {
  title: 'Bed Bug Treatment in Bay Avenue - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Bay Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBayAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-avenue"
      subareaName="Bay Avenue"
    />
  );
}