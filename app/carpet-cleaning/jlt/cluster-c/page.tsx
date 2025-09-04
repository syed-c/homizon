import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jlt/cluster-c'] || {
  title: 'Carpet Cleaning in Cluster C - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}