import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-marina/marina-walk'] || {
  title: 'Bed Bug Treatment in Marina Walk - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Marina Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMarinaWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-walk"
      subareaName="Marina Walk"
    />
  );
}