import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-festival-city/marsa-plaza'] || {
  title: 'Bed Bug Treatment in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}