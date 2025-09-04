import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/downtown-dubai'] || {
  title: 'Bed Bug Treatment in Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentDowntownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="downtown-dubai"
      areaName="Downtown Dubai"
    />
  );
}