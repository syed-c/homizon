import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jlt/cluster-a'] || {
  title: 'AC Servicing in Cluster A - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}