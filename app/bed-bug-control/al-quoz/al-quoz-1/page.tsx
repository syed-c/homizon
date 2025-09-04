import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-quoz/al-quoz-1'] || {
  title: 'Bed Bug Treatment in Al Quoz 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Quoz 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlQuoz1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-1"
      subareaName="Al Quoz 1"
    />
  );
}