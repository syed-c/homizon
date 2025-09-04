import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/arabian-ranches/savannah'] || {
  title: 'Bed Bug Treatment in Savannah - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}