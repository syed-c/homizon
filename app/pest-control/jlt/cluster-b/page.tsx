import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jlt/cluster-b'] || {
  title: 'Pest Control in Cluster B - Professional Services | HOMIZON',
  description: 'Professional pest control services in Cluster B. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlClusterBPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jlt"
      areaName="JLT"
      subarea="cluster-b"
      subareaName="Cluster B"
    />
  );
}