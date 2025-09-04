import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-karama/karama-souk'] || {
  title: 'Bed Bug Treatment in Karama Souk - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentKaramaSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-souk"
      subareaName="Karama Souk"
    />
  );
}