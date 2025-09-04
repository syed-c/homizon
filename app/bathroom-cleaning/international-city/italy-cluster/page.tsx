import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/international-city/italy-cluster'] || {
  title: 'Bathroom Deep Cleaning in Italy Cluster - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Italy Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningItalyClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="international-city"
      areaName="International City"
      subarea="italy-cluster"
      subareaName="Italy Cluster"
    />
  );
}