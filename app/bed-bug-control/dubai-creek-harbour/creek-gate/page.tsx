import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-creek-harbour/creek-gate'] || {
  title: 'Bed Bug Treatment in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}