import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-rashidiya/rashidiya-1'] || {
  title: 'Bed Bug Treatment in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}