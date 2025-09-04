import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jlt/cluster-i'] || {
  title: 'AC Servicing in Cluster I - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Cluster I. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingClusterIPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jlt"
      areaName="JLT"
      subarea="cluster-i"
      subareaName="Cluster I"
    />
  );
}