import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/discovery-gardens/zen-cluster'] || {
  title: 'Cleaning Services in Zen Cluster - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Zen Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesZenClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="zen-cluster"
      subareaName="Zen Cluster"
    />
  );
}