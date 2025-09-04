import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/international-city/france-cluster'] || {
  title: 'Bathroom Plumbing in France Cluster - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in France Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingFranceClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="international-city"
      areaName="International City"
      subarea="france-cluster"
      subareaName="France Cluster"
    />
  );
}