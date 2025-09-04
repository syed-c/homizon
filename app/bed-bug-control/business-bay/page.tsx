import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/business-bay'] || {
  title: 'Bed Bug Treatment in Business Bay - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBusinessBayPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="business-bay"
      areaName="Business Bay"
    />
  );
}