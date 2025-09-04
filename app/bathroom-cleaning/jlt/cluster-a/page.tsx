import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jlt/cluster-a'] || {
  title: 'Bathroom Deep Cleaning in Cluster A - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}