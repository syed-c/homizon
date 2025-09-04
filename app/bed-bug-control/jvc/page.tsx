import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jvc'] || {
  title: 'Bed Bug Treatment in JVC - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJVCPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jvc"
      areaName="JVC"
    />
  );
}