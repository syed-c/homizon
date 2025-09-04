import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jlt/cluster-c'] || {
  title: 'Appliance Repairs in Cluster C - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}