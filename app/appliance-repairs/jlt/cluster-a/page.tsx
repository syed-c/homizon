import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jlt/cluster-a'] || {
  title: 'Appliance Repairs in Cluster A - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}