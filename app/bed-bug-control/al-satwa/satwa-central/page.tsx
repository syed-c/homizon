import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-satwa/satwa-central'] || {
  title: 'Bed Bug Treatment in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}