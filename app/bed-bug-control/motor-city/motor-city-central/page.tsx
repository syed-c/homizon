import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/motor-city/motor-city-central'] || {
  title: 'Bed Bug Treatment in Motor City Central - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Motor City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMotorCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="motor-city"
      areaName="Motor City"
      subarea="motor-city-central"
      subareaName="Motor City Central"
    />
  );
}