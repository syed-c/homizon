import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/discovery-gardens/zen-cluster'] || {
  title: 'Bathroom Deep Cleaning in Zen Cluster - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Zen Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningZenClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="zen-cluster"
      subareaName="Zen Cluster"
    />
  );
}