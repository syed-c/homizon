import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/discovery-gardens/zen-cluster'] || {
  title: 'Appliance Repairs in Zen Cluster - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Zen Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsZenClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="zen-cluster"
      subareaName="Zen Cluster"
    />
  );
}