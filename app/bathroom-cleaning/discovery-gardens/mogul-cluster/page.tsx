import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/discovery-gardens/mogul-cluster'] || {
  title: 'Bathroom Deep Cleaning in Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMogulClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mogul-cluster"
      subareaName="Mogul Cluster"
    />
  );
}