import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-mizhar/mizhar-2'] || {
  title: 'Bed Bug Treatment in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}