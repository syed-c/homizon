import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/al-twar/twar-2'] || {
  title: 'Bed Bug Treatment in Twar 2 - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Twar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentTwar2Page() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-2"
      subareaName="Twar 2"
    />
  );
}