import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jlt/cluster-i'] || {
  title: 'Appliance Repairs in Cluster I - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Cluster I. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsClusterIPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jlt"
      areaName="JLT"
      subarea="cluster-i"
      subareaName="Cluster I"
    />
  );
}