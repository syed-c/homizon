import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/mirdif'] || {
  title: 'Bed Bug Treatment in Mirdif - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="mirdif"
      areaName="Mirdif"
    />
  );
}