import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jlt/cluster-d'] || {
  title: 'Pest Control in Cluster D - Professional Services | HOMIZON',
  description: 'Professional pest control services in Cluster D. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlClusterDPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jlt"
      areaName="JLT"
      subarea="cluster-d"
      subareaName="Cluster D"
    />
  );
}