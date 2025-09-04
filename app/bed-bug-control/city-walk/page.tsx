import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/city-walk'] || {
  title: 'Bed Bug Treatment in City Walk - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="city-walk"
      areaName="City Walk"
    />
  );
}