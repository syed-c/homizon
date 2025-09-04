import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/the-views/fairways-north'] || {
  title: 'Bed Bug Treatment in Fairways North - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}