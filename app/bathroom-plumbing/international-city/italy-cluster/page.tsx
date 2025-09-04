import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/international-city/italy-cluster'] || {
  title: 'Bathroom Plumbing in Italy Cluster - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Italy Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingItalyClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="international-city"
      areaName="International City"
      subarea="italy-cluster"
      subareaName="Italy Cluster"
    />
  );
}