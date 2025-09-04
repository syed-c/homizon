import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/discovery-gardens/mogul-cluster'] || {
  title: 'Bed Bug Treatment in Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMogulClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mogul-cluster"
      subareaName="Mogul Cluster"
    />
  );
}