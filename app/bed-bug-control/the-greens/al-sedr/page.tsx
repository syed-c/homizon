import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/the-greens/al-sedr'] || {
  title: 'Bed Bug Treatment in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}