import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/jumeirah'] || {
  title: 'Bed Bug Treatment in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}