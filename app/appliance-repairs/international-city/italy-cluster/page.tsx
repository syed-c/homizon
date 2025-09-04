import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/international-city/italy-cluster'] || {
  title: 'Appliance Repairs in Italy Cluster - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Italy Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsItalyClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="international-city"
      areaName="International City"
      subarea="italy-cluster"
      subareaName="Italy Cluster"
    />
  );
}