import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-karama'] || {
  title: 'Bed Bug Treatment in Al Karama - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}