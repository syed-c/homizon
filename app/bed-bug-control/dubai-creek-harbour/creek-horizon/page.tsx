import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-creek-harbour/creek-horizon'] || {
  title: 'Bed Bug Treatment in Creek Horizon - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Creek Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentCreekHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-horizon"
      subareaName="Creek Horizon"
    />
  );
}