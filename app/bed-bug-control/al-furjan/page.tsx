import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-furjan'] || {
  title: 'Bed Bug Treatment in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}