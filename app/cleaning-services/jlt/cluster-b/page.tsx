import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jlt/cluster-b'] || {
  title: 'Cleaning Services in Cluster B - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Cluster B. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesClusterBPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jlt"
      areaName="JLT"
      subarea="cluster-b"
      subareaName="Cluster B"
    />
  );
}