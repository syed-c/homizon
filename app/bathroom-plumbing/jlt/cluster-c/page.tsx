import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jlt/cluster-c'] || {
  title: 'Bathroom Plumbing in Cluster C - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}