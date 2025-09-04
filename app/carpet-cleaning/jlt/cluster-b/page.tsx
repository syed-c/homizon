import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jlt/cluster-b'] || {
  title: 'Carpet Cleaning in Cluster B - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Cluster B. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningClusterBPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jlt"
      areaName="JLT"
      subarea="cluster-b"
      subareaName="Cluster B"
    />
  );
}