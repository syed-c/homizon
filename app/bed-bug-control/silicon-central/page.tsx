import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/silicon-central'] || {
  title: 'Bed Bug Treatment in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}