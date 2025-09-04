import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jlt/cluster-c'] || {
  title: 'AC Servicing in Cluster C - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}