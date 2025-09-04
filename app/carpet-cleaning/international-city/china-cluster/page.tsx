import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/international-city/china-cluster'] || {
  title: 'Carpet Cleaning in China Cluster - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in China Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningChinaClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="international-city"
      areaName="International City"
      subarea="china-cluster"
      subareaName="China Cluster"
    />
  );
}