import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/dubai-festival-city/al-badia-residences'] || {
  title: 'Bed Bug Treatment in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}