import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/international-city/china-cluster'] || {
  title: 'Cleaning Services in China Cluster - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in China Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesChinaClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="international-city"
      areaName="International City"
      subarea="china-cluster"
      subareaName="China Cluster"
    />
  );
}