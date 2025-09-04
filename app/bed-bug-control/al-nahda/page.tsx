import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-nahda'] || {
  title: 'Bed Bug Treatment in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlNahdaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-nahda"
      areaName="Al Nahda"
    />
  );
}