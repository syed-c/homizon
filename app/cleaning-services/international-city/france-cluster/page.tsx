import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/international-city/france-cluster'] || {
  title: 'Cleaning Services in France Cluster - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in France Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesFranceClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="international-city"
      areaName="International City"
      subarea="france-cluster"
      subareaName="France Cluster"
    />
  );
}