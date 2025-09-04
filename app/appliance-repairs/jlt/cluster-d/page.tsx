import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jlt/cluster-d'] || {
  title: 'Appliance Repairs in Cluster D - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Cluster D. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsClusterDPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jlt"
      areaName="JLT"
      subarea="cluster-d"
      subareaName="Cluster D"
    />
  );
}