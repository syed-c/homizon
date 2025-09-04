import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/international-city/china-cluster'] || {
  title: 'Bathroom Deep Cleaning in China Cluster - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in China Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningChinaClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="international-city"
      areaName="International City"
      subarea="china-cluster"
      subareaName="China Cluster"
    />
  );
}