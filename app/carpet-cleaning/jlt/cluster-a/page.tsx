import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jlt/cluster-a'] || {
  title: 'Carpet Cleaning in Cluster A - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}