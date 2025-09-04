import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/jlt/cluster-a'] || {
  title: 'AC Repair & Maintenance in Cluster A - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}