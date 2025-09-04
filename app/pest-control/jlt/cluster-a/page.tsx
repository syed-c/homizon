import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jlt/cluster-a'] || {
  title: 'Pest Control in Cluster A - Professional Services | HOMIZON',
  description: 'Professional pest control services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}