import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jlt/cluster-c'] || {
  title: 'Pest Control in Cluster C - Professional Services | HOMIZON',
  description: 'Professional pest control services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}