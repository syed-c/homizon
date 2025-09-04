import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/discovery-gardens/mogul-cluster'] || {
  title: 'Cleaning Services in Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMogulClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mogul-cluster"
      subareaName="Mogul Cluster"
    />
  );
}