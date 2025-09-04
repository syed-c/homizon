import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-khawaneej/khawaneej-2'] || {
  title: 'Bed Bug Treatment in Khawaneej 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Khawaneej 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentKhawaneej2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-2"
      subareaName="Khawaneej 2"
    />
  );
}