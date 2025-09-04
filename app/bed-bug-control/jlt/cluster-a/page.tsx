import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jlt/cluster-a'] || {
  title: 'Bed Bug Treatment in Cluster A - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}