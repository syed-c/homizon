import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/discovery-gardens/zen-cluster'] || {
  title: 'Carpet Cleaning in Zen Cluster - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Zen Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningZenClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="zen-cluster"
      subareaName="Zen Cluster"
    />
  );
}