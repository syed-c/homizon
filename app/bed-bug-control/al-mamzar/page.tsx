import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-mamzar'] || {
  title: 'Bed Bug Treatment in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}