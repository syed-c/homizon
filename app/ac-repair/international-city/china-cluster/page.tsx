import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/international-city/china-cluster'] || {
  title: 'AC Repair & Maintenance in China Cluster - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in China Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceChinaClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="international-city"
      areaName="International City"
      subarea="china-cluster"
      subareaName="China Cluster"
    />
  );
}