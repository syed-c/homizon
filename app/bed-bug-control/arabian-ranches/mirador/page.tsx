import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/arabian-ranches/mirador'] || {
  title: 'Bed Bug Treatment in Mirador - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Mirador. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMiradorPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="mirador"
      subareaName="Mirador"
    />
  );
}