import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/discovery-gardens/zen-cluster'] || {
  title: 'Bed Bug Treatment in Zen Cluster - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Zen Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentZenClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="zen-cluster"
      subareaName="Zen Cluster"
    />
  );
}