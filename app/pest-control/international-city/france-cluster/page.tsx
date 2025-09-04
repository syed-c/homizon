import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/international-city/france-cluster'] || {
  title: 'Pest Control in France Cluster - Professional Services | HOMIZON',
  description: 'Professional pest control services in France Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlFranceClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="international-city"
      areaName="International City"
      subarea="france-cluster"
      subareaName="France Cluster"
    />
  );
}