import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/international-city/china-cluster'] || {
  title: 'AC Servicing in China Cluster - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in China Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingChinaClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="international-city"
      areaName="International City"
      subarea="china-cluster"
      subareaName="China Cluster"
    />
  );
}