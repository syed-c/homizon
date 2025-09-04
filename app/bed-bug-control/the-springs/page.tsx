import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/the-springs'] || {
  title: 'Bed Bug Treatment in The Springs - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="the-springs"
      areaName="The Springs"
    />
  );
}