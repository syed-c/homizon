import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/international-city/france-cluster'] || {
  title: 'Bed Bug Treatment in France Cluster - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in France Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentFranceClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="international-city"
      areaName="International City"
      subarea="france-cluster"
      subareaName="France Cluster"
    />
  );
}