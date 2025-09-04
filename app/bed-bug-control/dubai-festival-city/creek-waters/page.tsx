import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-festival-city/creek-waters'] || {
  title: 'Bed Bug Treatment in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}