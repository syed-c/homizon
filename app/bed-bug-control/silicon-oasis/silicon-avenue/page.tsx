import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/silicon-oasis/silicon-avenue'] || {
  title: 'Bed Bug Treatment in Silicon Avenue - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Silicon Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentSiliconAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-avenue"
      subareaName="Silicon Avenue"
    />
  );
}