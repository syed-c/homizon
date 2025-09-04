import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/discovery-gardens'] || {
  title: 'Bed Bug Treatment in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}