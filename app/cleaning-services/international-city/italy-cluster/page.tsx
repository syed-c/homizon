import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/international-city/italy-cluster'] || {
  title: 'Cleaning Services in Italy Cluster - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Italy Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesItalyClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="international-city"
      areaName="International City"
      subarea="italy-cluster"
      subareaName="Italy Cluster"
    />
  );
}