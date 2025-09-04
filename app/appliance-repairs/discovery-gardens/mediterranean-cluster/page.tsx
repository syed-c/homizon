import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/discovery-gardens/mediterranean-cluster'] || {
  title: 'Appliance Repairs in Mediterranean Cluster - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Mediterranean Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMediterraneanClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mediterranean-cluster"
      subareaName="Mediterranean Cluster"
    />
  );
}