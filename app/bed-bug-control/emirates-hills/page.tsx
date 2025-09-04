import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/emirates-hills'] || {
  title: 'Bed Bug Treatment in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}