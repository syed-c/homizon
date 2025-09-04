import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/bur-dubai'] || {
  title: 'Bed Bug Treatment in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}