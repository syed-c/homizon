import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jlt/cluster-b'] || {
  title: 'AC Servicing in Cluster B - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Cluster B. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingClusterBPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-b"
      subareaName="Cluster B"
    />
  );
}