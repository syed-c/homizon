import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-marina/marina-wharf'] || {
  title: 'Bed Bug Treatment in Marina Wharf - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Marina Wharf. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMarinaWharfPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-wharf"
      subareaName="Marina Wharf"
    />
  );
}