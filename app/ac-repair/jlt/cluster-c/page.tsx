import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jlt/cluster-c'] || {
  title: 'AC Repair & Maintenance in Cluster C - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Cluster C. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceClusterCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jlt"
      areaName="JLT"
      subarea="cluster-c"
      subareaName="Cluster C"
    />
  );
}