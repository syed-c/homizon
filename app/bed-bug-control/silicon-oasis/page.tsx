import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/silicon-oasis'] || {
  title: 'Bed Bug Treatment in Silicon Oasis - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Silicon Oasis. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentSiliconOasisPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="silicon-oasis"
      areaName="Silicon Oasis"
    />
  );
}