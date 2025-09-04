import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-creek-harbour/creek-beach'] || {
  title: 'Bed Bug Treatment in Creek Beach - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Creek Beach. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentCreekBeachPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-beach"
      subareaName="Creek Beach"
    />
  );
}