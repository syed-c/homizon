import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/arabian-ranches/alvorada'] || {
  title: 'Bed Bug Treatment in Alvorada - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Alvorada. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlvoradaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="alvorada"
      subareaName="Alvorada"
    />
  );
}