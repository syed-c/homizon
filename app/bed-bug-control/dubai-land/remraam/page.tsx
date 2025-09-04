import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-land/remraam'] || {
  title: 'Bed Bug Treatment in Remraam - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Remraam. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentRemraamPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="remraam"
      subareaName="Remraam"
    />
  );
}