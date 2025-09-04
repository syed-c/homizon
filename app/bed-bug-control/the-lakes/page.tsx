import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/the-lakes'] || {
  title: 'Bed Bug Treatment in The Lakes - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}