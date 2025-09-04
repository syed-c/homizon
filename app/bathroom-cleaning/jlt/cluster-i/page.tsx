import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jlt/cluster-i'] || {
  title: 'Bathroom Deep Cleaning in Cluster I - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Cluster I. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningClusterIPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jlt"
      areaName="JLT"
      subarea="cluster-i"
      subareaName="Cluster I"
    />
  );
}