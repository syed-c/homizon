import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jlt/cluster-d'] || {
  title: 'Bathroom Deep Cleaning in Cluster D - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Cluster D. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningClusterDPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jlt"
      areaName="JLT"
      subarea="cluster-d"
      subareaName="Cluster D"
    />
  );
}