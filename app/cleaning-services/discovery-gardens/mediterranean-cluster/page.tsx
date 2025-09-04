import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/discovery-gardens/mediterranean-cluster'] || {
  title: 'Cleaning Services in Mediterranean Cluster - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Mediterranean Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMediterraneanClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mediterranean-cluster"
      subareaName="Mediterranean Cluster"
    />
  );
}