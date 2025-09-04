import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-twar'] || {
  title: 'Bed Bug Treatment in Al Twar - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}