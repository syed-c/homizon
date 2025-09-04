import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jlt/cluster-a'] || {
  title: 'Cleaning Services in Cluster A - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}