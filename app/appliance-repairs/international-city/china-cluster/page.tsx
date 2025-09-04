import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/international-city/china-cluster'] || {
  title: 'Appliance Repairs in China Cluster - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in China Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsChinaClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="international-city"
      areaName="International City"
      subarea="china-cluster"
      subareaName="China Cluster"
    />
  );
}