import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-barari'] || {
  title: 'Bed Bug Treatment in Al Barari - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}