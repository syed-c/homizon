import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/discovery-gardens/mogul-cluster'] || {
  title: 'AC Servicing in Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMogulClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mogul-cluster"
      subareaName="Mogul Cluster"
    />
  );
}