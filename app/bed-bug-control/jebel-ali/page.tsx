import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jebel-ali'] || {
  title: 'Bed Bug Treatment in Jebel Ali - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Jebel Ali. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJebelAliPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jebel-ali"
      areaName="Jebel Ali"
    />
  );
}