import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-qusais/qusais-1'] || {
  title: 'Bed Bug Treatment in Qusais 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Qusais 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentQusais1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-1"
      subareaName="Qusais 1"
    />
  );
}