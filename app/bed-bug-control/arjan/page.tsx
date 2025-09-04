import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/arjan'] || {
  title: 'Bed Bug Treatment in Arjan - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Arjan. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentArjanPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="arjan"
      areaName="Arjan"
    />
  );
}