import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/discovery-gardens/mediterranean-cluster'] || {
  title: 'AC Repair & Maintenance in Mediterranean Cluster - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Mediterranean Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceMediterraneanClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mediterranean-cluster"
      subareaName="Mediterranean Cluster"
    />
  );
}