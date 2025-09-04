import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/discovery-gardens/mogul-cluster'] || {
  title: 'Appliance Repairs in Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMogulClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mogul-cluster"
      subareaName="Mogul Cluster"
    />
  );
}