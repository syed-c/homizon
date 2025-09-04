import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jlt/cluster-d'] || {
  title: 'Cleaning Services in Cluster D - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Cluster D. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesClusterDPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jlt"
      areaName="JLT"
      subarea="cluster-d"
      subareaName="Cluster D"
    />
  );
}