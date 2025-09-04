import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/discovery-gardens/mogul-cluster'] || {
  title: 'AC Repair & Maintenance in Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMogulClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mogul-cluster"
      subareaName="Mogul Cluster"
    />
  );
}