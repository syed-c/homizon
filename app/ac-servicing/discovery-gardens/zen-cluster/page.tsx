import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/discovery-gardens/zen-cluster'] || {
  title: 'AC Servicing in Zen Cluster - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Zen Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingZenClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="zen-cluster"
      subareaName="Zen Cluster"
    />
  );
}