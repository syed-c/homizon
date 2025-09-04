import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-warqa/warqa-1'] || {
  title: 'Bed Bug Treatment in Warqa 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Warqa 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentWarqa1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-1"
      subareaName="Warqa 1"
    />
  );
}