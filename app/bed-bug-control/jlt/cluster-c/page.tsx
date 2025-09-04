import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jlt/cluster-c'] || {
  title: 'Bed Bug Treatment in Cluster C - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}