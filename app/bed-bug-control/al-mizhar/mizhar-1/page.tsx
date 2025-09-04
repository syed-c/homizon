import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-mizhar/mizhar-1'] || {
  title: 'Bed Bug Treatment in Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMizhar1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-1"
      subareaName="Mizhar 1"
    />
  );
}