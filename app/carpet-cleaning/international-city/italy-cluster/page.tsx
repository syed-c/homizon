import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/international-city/italy-cluster'] || {
  title: 'Carpet Cleaning in Italy Cluster - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Italy Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningItalyClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="international-city"
      areaName="International City"
      subarea="italy-cluster"
      subareaName="Italy Cluster"
    />
  );
}