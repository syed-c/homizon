import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-khawaneej/khawaneej-1'] || {
  title: 'Bed Bug Treatment in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}