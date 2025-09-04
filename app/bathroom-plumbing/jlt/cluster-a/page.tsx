import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jlt/cluster-a'] || {
  title: 'Bathroom Plumbing in Cluster A - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}