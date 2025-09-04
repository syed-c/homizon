import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/nad-al-sheba'] || {
  title: 'Bed Bug Treatment in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}