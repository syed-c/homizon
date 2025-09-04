import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/meydan'] || {
  title: 'Bed Bug Treatment in Meydan - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="meydan"
      areaName="Meydan"
    />
  );
}