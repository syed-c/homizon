import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jlt/cluster-b'] || {
  title: 'Bathroom Plumbing in Cluster B - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Cluster B. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingClusterBPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-b"
      subareaName="Cluster B"
    />
  );
}