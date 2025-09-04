import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jlt/cluster-i'] || {
  title: 'Cleaning Services in Cluster I - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Cluster I. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesClusterIPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jlt"
      areaName="JLT"
      subarea="cluster-i"
      subareaName="Cluster I"
    />
  );
}