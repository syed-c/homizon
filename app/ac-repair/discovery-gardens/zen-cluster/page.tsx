import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/discovery-gardens/zen-cluster'] || {
  title: 'AC Repair & Maintenance in Zen Cluster - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Zen Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceZenClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="zen-cluster"
      subareaName="Zen Cluster"
    />
  );
}