import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jlt/cluster-c'] || {
  title: 'Bathroom Deep Cleaning in Cluster C - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}