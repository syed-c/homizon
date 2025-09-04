import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jlt/cluster-d'] || {
  title: 'AC Servicing in Cluster D - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Cluster D. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingClusterDPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-d"
      subareaName="Cluster D"
    />
  );
}